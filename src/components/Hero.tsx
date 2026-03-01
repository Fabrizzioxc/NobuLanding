import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black text-white px-6">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="mx-auto max-w-4xl text-center">
        
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 backdrop-blur border border-white/10">
          ✦
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Soluciones web que impulsan tu negocio
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-white/70">
          Creamos landing pages y sitios web que impulsan tus ventas y
          optimizan tus procesos digitales.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button size="lg" className="rounded-full px-8">
            Contáctanos
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}