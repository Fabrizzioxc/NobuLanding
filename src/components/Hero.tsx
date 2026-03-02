"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedButton from "./ui/AnimattedButton";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll(".reveal");

    if (!elements) return;

    gsap.fromTo(
      elements,
      {
        y: 40,
        opacity: 0,
        filter: "blur(15px)",
      },
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white px-6">
      <div
        ref={heroRef}
        className="mx-auto max-w-4xl text-center"
      >
        {/* Logo */}
        <img
          src="/Nobu.svg"
          alt="Nobu Logo"
          className="reveal mx-auto mb-8 h-16 md:h-20 w-auto rounded-2xl bg-white/1 backdrop-blur border-white/10 border-4"
        />

        {/* Title */}
        <h1 className="reveal text-4xl font-bold leading-tight md:text-6xl">
          Soluciones web que impulsan tu negocio
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
            textSize="text-xl"
          >
            Contáctanos
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}