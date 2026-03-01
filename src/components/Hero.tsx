import AnimatedButton from "./ui/AnimattedButton"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white px-6">

      <div className="mx-auto max-w-4xl text-center ">
        
        {/* Logo */}
        <img
          src="/Nobu.svg"
          alt="Nobu Logo"
          className="mx-auto mb-8 h-16 md:h-20 w-auto rounded-2xl bg-white/1 backdrop-blur border-white/10 border-4"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Soluciones web que impulsan tu negocio
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl text-white/70 max-w-xl mx-auto">
          Creamos landing pages y sitios web que impulsan tus ventas y
          optimizan tus procesos digitales.
        </p>

        {/* CTA */}
        <div className="mt-10 ">
          <AnimatedButton textSize="text-xl">
            Contactanos
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}