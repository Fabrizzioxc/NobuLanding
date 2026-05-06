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
  const cardsRef = useRef<HTMLDivElement[]>([])

  cardsRef.current = []
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

 useEffect(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (prefersReducedMotion) return

  const ctx = gsap.context(() => {

    // TITLE
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 55%",
      }
    })

    // CARDS (FIX REAL)
    cardsRef.current.forEach((card, i) => {
      const x = i % 3 === 0 ? -20 : i % 3 === 2 ? 20 : 0

      gsap.from(card, {
        y: 60,
        x,
        opacity: 0,
        scale: 0.96,
        duration: 0.65,
        ease: "power3.out",
        delay: i * 0.06, // stagger manual (más estable)
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
        }
      })
    })

  }, sectionRef)

  return () => ctx.revert()
}, [])

  return (
    <section
      ref={sectionRef}
      id="Beneficios"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Gradientes ligeros */}
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <Badge text="beneficios y características" className="mb-4" />

        <h2
          ref={titleRef}
          className="mt-4 text-[clamp(2rem,5vw,2.6rem)] font-medium leading-[1.1] max-w-212.5"
        >
          Mucho más que diseño. <br />
          <span className="text-white/30">
            Un sistema pensado para generar resultados reales.
          </span>
        </h2>

        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <div
                key={index}
                ref={addToRefs}
                className="group p-8 border border-white/10 bg-white/2 transition-all duration-300 hover:border-[#1596FF]/40 will-change-transform"
              >
                <div className="mb-6 text-white/40 transition-all duration-300 group-hover:text-[#1596FF] group-hover:scale-110">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-medium mb-2 transition-colors duration-300 group-hover:text-white">
                  {benefit.title}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed transition-colors duration-300 group-hover:text-white/70">
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