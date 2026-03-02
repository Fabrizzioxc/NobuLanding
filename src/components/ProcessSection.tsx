import React, { useState } from "react";
import { Phone, Rocket, CheckCircle2 } from "lucide-react";
import Badge from './ui/Badge';

const steps = [
  {
    icon: Phone,
    title: "Reserva una llamada",
    description: "Cuéntanos sobre tu negocio y evaluamos si el sistema es adecuado para ti.",
    image: "/tu-imagen-1.jpg", 
  },
  {
    icon: Rocket,
    title: "Ejecutamos el sistema",
    description: "Diseñamos y lanzamos tu web estratégica en 3 semanas, lista para generar leads.",
    image: "/tu-imagen-2.jpg",
  },
  {
    icon: CheckCircle2,
    title: "Recibe consultas reales",
    description: "Tu web comienza a atraer, convencer y convertir automáticamente.",
    image: "/tu-imagen-3.jpg",
  },
];

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-black text-white px-6" id="Proceso">
      <div className="max-w-6xl mx-auto">
        
      {/* TOP — Header */}
      <div className="mb-16">
        <Badge text="Proceso" className="mb-4" /> 
        
        <h2 className="text-3xl md:text-4xl font-normal leading-tight">
          Un sistema claro,<br />
          <span className="text-neutral-500">tres pasos concretos.</span>
        </h2>
      </div>

        {/* CONTENT — Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT — Square Image */}
          <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:mx-0 overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
            <img
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              className="w-full h-full object-cover transition-opacity duration-500"
              key={activeStep}
            />
          </div>

          {/* RIGHT — Vertical Tabs */}
          <div className="flex flex-col">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="group relative flex gap-8 pb-10 last:pb-0 text-left outline-none"
                >
                  {/* Vertical Line System */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute top-0 bottom-0 w-[1.5px] bg-white/10" />
                    <div className={`absolute top-0 w-[1.5px] bg-white transition-all duration-500 ${
                      isActive ? "h-full opacity-100" : "h-0 opacity-0"
                    }`} />

                    <div className="relative z-10 bg-[#0a0a0a] py-1">
                      <Icon 
                        size={22} 
                        className={`transition-colors duration-300 ${isActive ? "text-white" : "text-neutral-600"}`} 
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="pt-0.5">
                    <h3 className={`text-xl font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"
                    }`}>
                      {index + 1} — {step.title}
                    </h3>
                    <p className={`mt-2 text-base leading-relaxed max-w-[340px] transition-colors duration-300 ${
                      isActive ? "text-neutral-400" : "text-neutral-600"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;