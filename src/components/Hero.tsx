"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedButton from "./ui/AnimattedButton";
import NoiseBackground from "./NoiseBackground";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll(".reveal");
    if (!elements) return;

    gsap.fromTo(
      elements,
      { y: 40, opacity: 0, filter: "blur(15px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white px-6" id="hero">
      
      {/* CAPA DEL SHADER (FONDO) */}
      <NoiseBackground />

      {/* OVERLAY DEGRADADO (Opcional, para mejorar contraste) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-black" />

      {/* CONTENIDO (FRONT) */}
      <div
        ref={heroRef}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Logo */}
        <img
          src="/Nobu.svg"
          alt="Nobu Logo"
          className="reveal mx-auto mb-8 h-16 md:h-20 w-auto rounded-2xl bg-white/5 backdrop-blur border-white/10 border-2"
        />

        {/* Title */}
        <h1 className="reveal font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-wide max-w-[15ch] md:max-w-[100ch]">
          Soluciones web que impulsan 
          <span className="block mt-4 text-6xl md:text-7xl opacity-90">
             tu negocio
          </span>
        </h1>

        {/* Subtitle */}
        <p className="reveal mt-6 text-xl text-white/70 max-w-xl mx-auto">
          Creamos landing pages y sitios web que impulsan tus ventas y
          optimizan tus procesos digitales.
        </p>

        {/* CTA */}
        <div className="reveal mt-10">
          <AnimatedButton
            href="https://wa.me/51991702951"
            size="xl"
          >
            Contáctanos
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}