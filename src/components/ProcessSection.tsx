import React, { useState } from "react";
import { Phone, Rocket, CheckCircle2, ChevronLeft, ChevronRight, MousePointer2, LayoutTemplate, User, Bell } from "lucide-react";
import Badge from './ui/Badge';
import { motion, AnimatePresence } from "framer-motion";

// --- COMPONENTES WIREFRAME (Convertidos de tu HTML) ---

const WireframeReserva = () => (
  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center z-10">
    <div className="flex flex-col gap-6 bg-[#111111] w-full max-w-sm border-white/10 border rounded-2xl p-6 shadow-2xl">
      <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <div className="flex flex-col gap-1.5">
          <div className="h-4 w-32 bg-white/10 rounded-md"></div>
          <div className="h-2 w-20 bg-white/5 rounded-md"></div>
        </div>
        <div className="flex gap-2">
          <ChevronLeft size={20} className="text-white/30" />
          <ChevronRight size={20} className="text-white/30" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        <div className="aspect-square rounded-md bg-white/5" />
        <div className="aspect-square rounded-md bg-white/5" />
        <div className="aspect-square rounded-md bg-white/5 flex items-center justify-center text-[10px] text-white/60">12</div>
        <div className="aspect-square rounded-md bg-white/10 flex items-center justify-center text-[10px] text-white ring-1 ring-white/20 font-medium">13</div>
        {[14, 15, 16].map(day => (
          <div key={day} className="aspect-square rounded-md bg-white/5 flex items-center justify-center text-[10px] text-white/60">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="py-3 rounded-xl border border-white/10 flex items-center justify-center text-[10px] text-white/50 bg-white/[0.02]">09:00 AM</div>
        <div className="py-3 rounded-xl border border-[#1596FF] bg-[#1596FF] flex items-center justify-center text-[10px] text-white font-semibold relative shadow-[0_0_20px_rgba(21,150,255,0.2)]">
          10:30 AM
          <MousePointer2 size={24} className="absolute -bottom-5 -right-3 text-white fill-black drop-shadow-md" />
        </div>
      </div>
    </div>
  </div>
);

const WireframeDashboard = () => (
  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center z-10">
    <div className="w-full max-w-lg h-full max-h-[360px] bg-[#111111] border border-white/10 rounded-2xl flex shadow-2xl overflow-hidden">
      <div className="w-1/3 border-r border-white/5 p-5 flex flex-col gap-4 bg-black/50 hidden sm:flex">
        <div className="h-3 w-1/2 bg-white/10 rounded-full mb-6" />
        {[1, 2, 3].map(i => <div key={i} className="h-8 w-full bg-white/5 rounded-lg border border-white/5" />)}
      </div>
      <div className="flex-1 p-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="h-4 w-1/3 bg-white/10 rounded-full" />
          <div className="h-6 w-20 bg-[#1596FF]/20 rounded-full border border-[#1596FF]/30" />
        </div>
        <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-5 flex flex-col gap-4">
          <div className="h-24 w-full bg-white/5 rounded-lg flex items-center justify-center border border-white/5 border-dashed">
            <LayoutTemplate size={32} className="text-white/20" />
          </div>
          <div className="h-3 w-3/4 bg-white/10 rounded-full mt-2" />
        </div>
        <div className="w-full flex flex-col gap-2.5 mt-auto">
          <div className="flex justify-between text-[10px] text-white/50 font-medium">
            <span>Lanzando sistema...</span>
            <span className="text-[#1596FF]">100%</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5 }}
              className="h-full bg-[#1596FF] shadow-[0_0_15px_rgba(21,150,255,0.6)]" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WireframeLeads = () => (
  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center z-10">
    <div className="w-full max-w-sm relative flex flex-col mt-12">
      <div className="bg-[#111111] border border-white/20 rounded-2xl p-5 flex flex-col gap-4 shadow-2xl relative z-20">
        <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-black border border-[#1596FF]/30 rounded-full flex items-center gap-2 shadow-xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1596FF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1596FF]" />
          </span>
          <span className="text-[10px] font-semibold text-[#1596FF] uppercase tracking-wide">Nuevo Lead</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
            <User size={20} className="text-white/80" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold text-white">Fabrizzio Zambrano</div>
              <div className="text-[10px] text-white/40">Justo ahora</div>
            </div>
            <div className="text-[10px] text-white/50 bg-white/5 px-2 py-1 rounded inline-block">Consultoría Tech</div>
          </div>
        </div>
        <div className="pt-3 border-t border-white/5">
          <p className="text-xs text-neutral-300 leading-relaxed italic">
            "Hola, vi su embudo y estoy muy interesado en implementar este mismo sistema..."
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --- SECCIÓN PRINCIPAL ---

const steps = [
  { icon: Phone, title: "Reserva una llamada", description: "Cuéntanos sobre tu negocio y evaluamos si el sistema es adecuado para ti.", component: <WireframeReserva /> },
  { icon: Rocket, title: "Ejecutamos el sistema", description: "Diseñamos y lanzamos tu web estratégica en 3 semanas, lista para generar leads.", component: <WireframeDashboard /> },
  { icon: CheckCircle2, title: "Recibe consultas reales", description: "Tu web comienza a atraer, convencer y convertir automáticamente.", component: <WireframeLeads /> },
];

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-black text-white px-6 scroll-mt-20" id="Proceso">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <Badge text="Proceso" className="mb-4" /> 
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Un sistema claro,<br />
            <span className="text-neutral-500">tres pasos concretos.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LADO IZQUIERDO: WIREFRAMES */}
          <div className="lg:col-span-7 relative aspect-square w-full rounded-3xl bg-[#0A0A0A] overflow-hidden flex items-center justify-center shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {steps[activeStep].component}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* LADO DERECHO: TABS */}
          <div className="lg:col-span-5 flex flex-col relative">
            <div className="absolute left-[11px] top-8 bottom-8 w-px bg-white/10 hidden sm:block" />
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="group relative z-10 flex gap-6 text-left py-6 outline-none transition-all"
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-black border flex items-center justify-center mt-1 transition-all duration-300 ${
                    isActive ? "border-[#1596FF]" : "border-white/20 group-hover:border-white/40"
                  }`}>
                    <Icon size={12} className={isActive ? "text-[#1596FF]" : "text-white/30 group-hover:text-white/60"} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-medium transition-colors ${isActive ? "text-white" : "text-white/40"}`}>
                      {index + 1} — {step.title}
                    </h3>
                    <p className={`mt-2 text-base transition-colors ${isActive ? "text-neutral-300" : "text-neutral-500"}`}>
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