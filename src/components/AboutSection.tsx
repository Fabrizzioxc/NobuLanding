"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll(".word");

    gsap.to(words, {
      opacity: 1,
      stagger: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, []);

  const text = `En Nobu creamos activos digitales que convierten. Diseño con estrategia, enfoque en confianza y optimización constante para que tu marca crezca con resultados reales.`;

  return (
    <section className="w-full bg-black py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <span className="text-sm uppercase tracking-widest text-gray-500">
          Acerca de Nobu
        </span>

        <p
          ref={textRef}
          className="mt-6 text-2xl md:text-3xl lg:text-4xl font-medium leading-snug"
        >
          {text.split(" ").map((word, index) => (
            <span
              key={index}
              className="word text-white opacity-20 inline-block mr-2"
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;