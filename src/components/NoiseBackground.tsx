"use client";
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NoiseMaterial = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const shaderArgs = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#1596FF") }, // Tu Azul Nobu
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
      uniform vec3 uColor;
      varying vec2 vUv;

      float random (in vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise (in vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f*f*(3.0-2.0*f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
          vec2 st = vUv;
          
          // Escalado y movimiento de ondas
          vec2 pos = st * 4.0; 
          pos.x += uTime * 0.15;
          pos.y += sin(uTime * 0.2 + st.x * 3.0) * 0.5;

          float n = noise(pos);
          
          // Tu lógica de Splatter + Agujeros
          float splatter = smoothstep(0.15, 0.25, n);
          splatter -= smoothstep(0.38, 0.45, n);

          // Color base muy oscuro para el fondo
          vec3 backgroundColor = vec3(0.005);
          vec3 finalColor = mix(backgroundColor, uColor, splatter * 0.6);

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime();
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
  return (
    <div className="absolute inset-0 z-0 opacity-40"> {/* Ajusta opacidad si es muy brillante */}
      <Canvas>
        <NoiseMaterial />
      </Canvas>
    </div>
  );
}