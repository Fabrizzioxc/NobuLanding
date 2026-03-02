import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      q: "¿Cuánto cuesta una landing page?",
      a: "La inversión depende del objetivo y alcance del proyecto. Cada landing se cotiza de forma personalizada según estrategia, diseño e integraciones necesarias."
    },
    {
      q: "¿En cuánto tiempo estará lista?",
      a: "El desarrollo toma entre 2 y 4 semanas, según la complejidad. Trabajo con un proceso claro para garantizar calidad y tiempos definidos."
    },
    {
      q: "¿Qué necesito para empezar?",
      a: "Necesito claridad sobre tu servicio, el objetivo de la landing y acceso a dominio/hosting si ya los tienes. Si no, te asesoro en el proceso."
    },
    {
      q: "¿La página estará optimizada para conversiones?",
      a: "Sí. La estructura está diseñada estratégicamente para generar acciones concretas como leads, reservas o ventas."
    },
    {
      q: "¿Incluye SEO y velocidad optimizada?",
      a: "Sí. Todas las landing incluyen optimización técnica básica de SEO, velocidad de carga rápida y diseño totalmente responsive."
    },
    {
      q: "¿Trabajas con empresas de cualquier sector?",
      a: "Sí, siempre que el negocio tenga una propuesta clara y un objetivo definido. La estrategia se adapta a cada industria."
    }
  ];
  
  export default function FaqSection() {
    return (
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header al estilo de la imagen */}
          <div className="mb-12">
            <span className="text-zinc-500 text-sm font-medium flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-zinc-500 rounded-full"></span> FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Tus dudas, <span className="text-zinc-500">respondidas con claridad</span>
            </h2>
          </div>
  
          {/* Grid de 2 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(0, 3).map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-zinc-800">
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
  
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(3, 6).map((faq, i) => (
                <AccordionItem key={i + 3} value={`item-${i + 3}`} className="border-zinc-800">
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }