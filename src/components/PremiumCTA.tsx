import { ArrowRight } from "lucide-react";
import AnimatedButton from "./ui/AnimattedButton";

export default function BlueCTA() {
  const whatsappPhone = "51991702951";
  const whatsappText = "¡Hola! Estoy interesado en potenciar mi negocio con una landing page.";
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappText)}`;

  const meshStyle = {
    backgroundImage: `
      url('/noise-light.png'), 
      radial-gradient(at 50% 0%, hsla(210, 100%, 25%, 0.2) 0, transparent 50%), 
      radial-gradient(at 100% 0%, hsla(220, 100%, 15%, 0.1) 0, transparent 50%),
      linear-gradient(180deg, #050505 0%,rgb(0, 0, 0) 100%)
    `,
    backgroundBlendMode: 'overlay, normal, normal, normal',
  };

  return (
    <section className="bg-black text-white py-24 px-6">
      {/* Estilos inyectados para el efecto de recorrido del borde */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes move-light {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .light-border-blue::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 40px;
          padding: 1.5px; /* Grosor del borde */
          background: linear-gradient(
            90deg,
            transparent,
rgb(6, 35, 85),
rgb(22, 69, 126),
rgb(1, 42, 108),
            transparent
          );
          background-size: 200% 200%;
          animation: move-light 20s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}} />

      <div className="max-w-6xl mx-auto">
        <div
          style={meshStyle}
          className="light-border-blue relative overflow-hidden rounded-[40px] border border-white/5 p-12 md:p-24 shadow-2xl flex flex-col items-center text-center group"
        >
          {/* Resplandor azul superior */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e40af_0%,transparent_50%)] opacity-40 pointer-events-none" />

          {/* Contenido principal */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl">
              Convierte visitas <br /> <span className="text-blue-400">en clientes</span>
            </h2>
          

            <div className="mt-5">
              <AnimatedButton
                href={whatsappUrl}
                textSize="text-xl"
              >
                Empezar ahora
              </AnimatedButton>
            </div>
          </div>

          {/* Cuadrícula técnica de fondo sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}