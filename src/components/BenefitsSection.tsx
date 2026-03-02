"use client"

import React, { useEffect, useRef } from "react"
import {
  Target,
  ShieldCheck,
  Rocket,
  Sparkles,
  LineChart,
  BarChart3,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Badge from "./ui/Badge"

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  { icon: Target, title: "Estrategia Clara", text: "Diseñamos tu sitio con un objetivo concreto: más consultas, más llamadas, más ventas." },
  { icon: ShieldCheck, title: "Autoridad Real", text: "Construimos confianza desde el primer segundo con diseño enfocado en conversión." },
  { icon: Rocket, title: "Lanzamiento Ágil", text: "Sistema optimizado para salir al mercado en 21 días, sin procesos eternos." },
  { icon: Sparkles, title: "Método Probado", text: "Aplicamos estructura, claridad y estrategia en cada proyecto." },
  { icon: LineChart, title: "Optimización Continua", text: "Medimos, analizamos y mejoramos para que tu web nunca deje de rendir." },
  { icon: BarChart3, title: "Resultados Medibles", text: "Cada decisión está pensada para transformar visitas en clientes reales." },
]

const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none", // solo una vez
        },
      });
  
      // 🔹 1️⃣ Título primero
      tl.fromTo(
        titleRef.current,
        {
          y: 40,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        }
      )
  
      // 🔹 2️⃣ Luego las cards
      .fromTo(
        ".benefit-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3" // empieza ligeramente antes de que termine el título (más fluido)
      );
  
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="py-32 bg-black text-white"
    >
      <div className="w-full">
      <Badge text="beneficios" className="mb-4" />
        <h2
          ref={titleRef}
          className="mt-4 text-[clamp(1.6rem,3vw,2.2rem)] font-medium leading-tight max-w-[700px]"
        >
          Mucho más que diseño. <br />
          Un sistema pensado para generar resultados reales.
        </h2>

        <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <div
                key={index}
                className="benefit-card p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
              >
                <div className="w-15 h-15 rounded-full border border-white/15 flex items-center justify-center mb-5 text-white/80">
                  <Icon size={30} strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-medium mb-3">
                  {benefit.title}
                </h3>

                <p className="text-base leading-relaxed text-white/70">
                  {benefit.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection