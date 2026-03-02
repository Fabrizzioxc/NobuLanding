import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-black py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Small label */}
        <span className="text-sm uppercase tracking-widest text-gray-500">
          Acerca de Nobu
        </span>

        {/* Main paragraph */}
        <p className="mt-6 text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-white">
          En Nobu creamos activos digitales que convierten. Diseño con
          estrategia, enfoque en confianza y optimización constante para que
          tu marca crezca con resultados reales.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;