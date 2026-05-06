"use client";

import { Suspense, lazy, useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedButton from "./ui/AnimattedButton";

const NoiseBackground = lazy(() => import("./NoiseBackground"));

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll(".reveal");
    if (!elements) return;

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      delay: 0.2,
    });
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white px-6" id="hero">

      {/* ✅ Fondo SIEMPRE presente (evita salto visual) */}
      <Suspense
        fallback={<div className="absolute inset-0 bg-black" />}
      >
        <NoiseBackground />
      </Suspense>

      {/* Overlay */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-black/20 via-transparent to-black" />

      {/* CONTENIDO */}
      <div
        ref={heroRef}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Logo */}
        <img
          src="/Nobu.svg"
          alt="Nobu Logo"
          className="reveal opacity-0 translate-y-10 mx-auto mb-8 h-16 md:h-20 w-auto rounded-2xl bg-white/5 border-white/10 border-2"
        />

        {/* Title */}
        <h1 className="reveal opacity-0 translate-y-10 font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-wide">
          Soluciones web que
          <br />
          <span className="block mt-4">
            impulsan tu negocio
          </span>
        </h1>

        {/* Subtitle */}
        <p className="reveal opacity-0 translate-y-10 mt-6 text-xl text-white/70 max-w-xl mx-auto">
          Creamos landing pages y sitios web que impulsan tus ventas y optimizan tus procesos digitales.
        </p>

        {/* CTA */}
        <div className="reveal opacity-0 translate-y-10 mt-10">
          <AnimatedButton href="https://wa.me/51991702951" size="xl">
            Contáctanos
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}