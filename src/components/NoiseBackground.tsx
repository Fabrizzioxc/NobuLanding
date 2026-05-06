"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WaveShader = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const resolutionRef = useRef(new THREE.Vector2(1, 1));

  useEffect(() => {
    const updateSize = () => {
      resolutionRef.current.set(window.innerWidth, window.innerHeight);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: resolutionRef.current },
        uColor: { value: new THREE.Color("#1596FF") },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uColor;
        varying vec2 vUv;

        vec2 hash( vec2 p ) {
            p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
            return -1.0 + 2.0*fract(sin(p)*43758.5453123);
        }

        float noise( in vec2 p ) {
            vec2 i = floor( p );
            vec2 f = fract( p );
            vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);
            return mix( mix( dot( hash( i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ), 
                             dot( hash( i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                        mix( dot( hash( i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ), 
                             dot( hash( i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
        }

        void main() {
            vec2 st = vUv;
            st.x *= uResolution.x / uResolution.y;
            
            vec2 q = vec2(0.);
            q.x = noise( st + 0.11 * uTime );
            q.y = noise( st + vec2(1.0) );

            vec2 r = vec2(0.);
            r.x = noise( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime );
            r.y = noise( st + 1.0*q + vec2(8.3,2.8)+ 0.126*uTime );

            float f = noise(st+r);

            float bottomWeight = (1.0 - vUv.y) * 0.35;
            float cornerWeight = length(vec2(vUv.x - 0.5, vUv.y - 1.0)) * 0.3;

            float finalNoise = f + bottomWeight + cornerWeight;
            float intensity = clamp((finalNoise * finalNoise) * 2.8, 0.0, 1.0);
            vec3 nobleBlue = uColor * 0.7;
            vec3 color = mix(vec3(0.001, 0.002, 0.004), nobleBlue, intensity);

            float grain = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
            color += grain * 0.02;

            gl_FragColor = vec4(color, 1.0);
        }
      `,
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial args={[shaderArgs]} />
    </mesh>
  );
};

export default function NoiseBackground() {
  const [visible, setVisible] = useState(false);
  const [dpr, setDpr] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio || 1, 1.5));

    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {visible && (
        <Canvas
          className="w-full h-full"
          dpr={dpr}
          gl={{ antialias: false, powerPreference: "low-power", alpha: false }}
          camera={{ position: [0, 0, 1] }}
          performance={{ min: 0.5, max: 1.5 }}
        >
          <WaveShader />
        </Canvas>
      )}
    </div>
  );
}