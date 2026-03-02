"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Badge from "./ui/Badge";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Frefity",
    description:
      "Empresa de consultoría CRM especializada en Microsoft Dynamics 365.",
    image: "frefity_web_preview.webp",
    url: "https://frefity.com",
  },
  {
    title: "Kanry",
    description:
      "Software de gestión de inventario y ventas para empresas pymes.",
    image: "kanry_web_preview.webp",
    url: "https://kanry-landing-page.vercel.app",
  },
  {
    title: "JYJ Servicios Generales",
    description:
      "Empresa de instalación de drywall, pintura profesional y servicios eléctricos.",
    image: "jyj_web_preview.webp",
    url: "https://jyj-two.vercel.app",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll("a");

    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="relative bg-black py-24 px-6" id="Proyectos">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center">
        <Badge text="Proyectos" className="mb-4" />
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mt-6">
          Landing Pages que generan resultados
        </h2>

        {/* Grid */}
        <div
          ref={containerRef}
          className="mt-16 grid gap-10 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-white group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}