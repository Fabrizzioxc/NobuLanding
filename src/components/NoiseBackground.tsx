"use client";
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PremiumMeshMaterial = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const shaderArgs = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
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
          st.x *= uResolution.x/uResolution.y;
          
          vec2 q = vec2(0.);
          q.x = noise( st + 0.11 * uTime );
          q.y = noise( st + vec2(1.0) );

          vec2 r = vec2(0.);
          r.x = noise( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime );
          r.y = noise( st + 1.0*q + vec2(8.3,2.8)+ 0.126*uTime );

          float f = noise(st+r);

          // --- AJUSTE DE PESO Y SUAVIZADO ---
          
          // Bajamos un poco el peso de abajo para que no sature tanto de azul
          float bottomWeight = (1.0 - vUv.y) * 0.35; 
          float cornerWeight = length(vec2(vUv.x - 0.5, vUv.y - 1.0)) * 0.3;

          float finalNoise = f + bottomWeight + cornerWeight;

          // Bajamos el multiplicador de 4.5 a 2.8 para reducir la intensidad "neón"
          float intensity = clamp((finalNoise * finalNoise) * 2.8, 0.0, 1.0);
          
          // Mezclamos el uColor con un tono más oscuro para que sea un azul más sobrio
          vec3 nobleBlue = uColor * 0.7; 
          vec3 color = mix(vec3(0.001, 0.002, 0.004), nobleBlue, intensity);

          // Grano más sutil (bajado de 0.04 a 0.02)
          float grain = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
          color += grain * 0.02;

          gl_FragColor = vec4(color, 1.0);
      }
    `,
  }), []);

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

export default function PremiumBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-black pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <PremiumMeshMaterial />
      </Canvas>
    </div>
  );
}