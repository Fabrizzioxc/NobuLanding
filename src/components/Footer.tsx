import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Proceso", href: "#proceso" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 mb-20">
          
          {/* Columna Logo: Ocupa 5 de 12 espacios para empujar el resto a la derecha */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/Nobu-Logo.svg" 
                alt="Nobu Logo" 
                className="w-12 h-12 shadow-[0_0_20px_rgba(37,99,235,0.3)] rounded-xl"
              />
              <span className="text-3xl font-bold tracking-tighter">Nobu</span>
            </div>
            <p className="text-zinc-500 max-w-[320px] text-base leading-relaxed">
            Transformamos tu presencia digital en un activo que genera resultados.
            </p>
          </div>

          {/* Columna Contacto*/}
          <div className="md:col-span-4 flex flex-col gap-6 md:pl-10">
            <h4 className="text-white font-bold text-lg tracking-tight uppercase text-sm">Contacto</h4>
            <div className="flex flex-col gap-3 text-zinc-500">
              <a href="mailto:nobusoftware@gmail.com" className="hover:text-blue-400 transition-colors text-base group w-fit">
                nobusoftware@gmail.com
              </a>
              <a href="mailto:fabrizziozv.17@gmail.com" className="hover:text-blue-400 transition-colors text-base group w-fit">
                fabrizziozv.17@gmail.com
              </a>
            </div>
          </div>

          {/* Columna Acciones*/}
          <div className="md:col-span-3 flex flex-col md:items-start">
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight uppercase text-sm">Acciones</h4>
            <ul className="flex flex-col gap-2 w-full">
              {sections.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-zinc-500 hover:text-white transition-all text-base py-1.5 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100" />
                      {item.name}
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom con copyright centrado o alineado */}
        <div className="pt-8 border-t border-white/5">
        <p className="text-zinc-600 text-sm">
            © {currentYear}. Desarrollado por{" "}
            <a
            href="https://www.linkedin.com/in/fabrizziozambrano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 font-medium hover:text-white transition-colors"
            >
            Fabrizzio Zambrano
            </a>.
        </p>
        </div>
      </div>
    </footer>
  );
}