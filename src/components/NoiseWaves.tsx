import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WaveShader = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const shaderArgs = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#1596FF") }, // Tu azul Nobu
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
          
          // 1. CREAR MOVIMIENTO DE ONDA
          // Distorsionamos las coordenadas 'st' antes de pasarlas al noise
          vec2 wavePos = st * 8.0; 
          wavePos.x += uTime * 0.5; // Flujo horizontal
          wavePos.y += sin(uTime * 0.3 + st.x * 2.0); // Movimiento ondulatorio vertical

          // 2. APLICAR TU LÓGICA DE SPLATTER
          float n = noise(wavePos);
          
          vec3 color = vec3(0.02); // Fondo casi negro
          
          // Black splatter (Mancha principal)
          float mask = smoothstep(0.15, 0.2, n);
          // Holes on splatter (Agujeros internos para dar textura de burbuja/onda)
          mask -= smoothstep(0.35, 0.4, n);

          // Aplicamos el color de marca solo a la máscara generada
          color = mix(color, uColor, mask);

          gl_FragColor = vec4(color, 1.0);
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

export default function NoiseWaves() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas>
        <WaveShader />
      </Canvas>
    </div>
  );
}