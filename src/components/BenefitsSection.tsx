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
  const leftLightRef = useRef<HTMLDivElement>(null)
  const rightLightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animación de entrada
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
  
      tl.fromTo(titleRef.current,
        { y: 40, opacity: 0, filter: "blur(12px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power4.out" }
      )
      .fromTo(".benefit-card",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
        "-=0.6"
      );

      // 2. PARALLAX AGRESIVO Y FLUIDO PARA LOS FOCOS AZULES
      gsap.to(leftLightRef.current, {
        y: "25%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(rightLightRef.current, {
        y: "-25%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
  
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="Beneficios"
      className="relative py-48 bg-black text-white overflow-hidden"
    >
      {/* --- DIFUMINADOS DE TRANSICIÓN ULTRA SUAVES --- */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-20 pointer-events-none" />

      {/* --- NOISE Y FOCOS AZULES INTENSOS --- */}
      
      {/* Noise Grano Premium */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-[5] mix-blend-overlay" 
        style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} 
      />

      {/* FOCO AZUL IZQUIERDA (Brillo aumentado) */}
      <div 
        ref={leftLightRef}
        className="absolute left-[-15%] top-[-10%] w-[60%] h-[100%] pointer-events-none z-0 opacity-60"
        style={{ 
          background: "radial-gradient(circle at center, rgba(21, 150, 255, 0.25) 0%, rgba(21, 150, 255, 0.05) 40%, transparent 70%)",
          filter: "blur(110px)" 
        }}
      />
      
      {/* FOCO AZUL DERECHA (Brillo aumentado) */}
      <div 
        ref={rightLightRef}
        className="absolute right-[-15%] bottom-[-10%] w-[60%] h-[100%] pointer-events-none z-0 opacity-50"
        style={{ 
          background: "radial-gradient(circle at center, rgba(21, 150, 255, 0.22) 0%, rgba(21, 150, 255, 0.04) 40%, transparent 70%)",
          filter: "blur(110px)"
        }}
      />

      {/* Rayas de luz en los bordes para definir la sección */}
      <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1596FF]/30 to-transparent z-10" />
      <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1596FF]/20 to-transparent z-10" />


      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-30">
        <Badge text="beneficios y características" className="mb-4" />
        <h2
          ref={titleRef}
          className="mt-4 text-[clamp(2rem,5vw,2.8rem)] font-medium leading-[1.1] max-w-[850px]"
        >
          Mucho más que diseño. <br />
          <span className="text-white/20">Un sistema pensado para generar resultados reales.</span>
        </h2>

        <div className="mt-24 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="benefit-card group p-12 border border-white/5 bg-white/[0.01] backdrop-blur-[2px] relative overflow-hidden transition-all duration-700 hover:border-[#1596FF]/40"
              >
                {/* Glow interno al hacer hover (Azul Nobu) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(21,150,255,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center mb-10 text-white/30 transition-all duration-700 group-hover:text-[#1596FF] group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(21,150,255,0.5)]">
                    <Icon size={34} strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-medium mb-4 group-hover:text-white transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/30 group-hover:text-white/60 transition-colors duration-500">
                    {benefit.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection