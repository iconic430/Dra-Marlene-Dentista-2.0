import React from 'react';
import { Sparkles, Syringe, Zap, Smile, Activity, Gem } from 'lucide-react';

const procedures = [
  {
    icon: <Smile size={32} />,
    title: "Brackets",
    description: "Corrección eficaz de la posición dental para lograr una sonrisa perfectamente alineada y funcional."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Blanqueamiento Dental",
    description: "Tratamiento estético avanzado para aclarar el tono de tus dientes y devolverles su brillo natural."
  },
  {
    icon: <Zap size={32} />,
    title: "Limpieza Dental",
    description: "Eliminación profunda de sarro y placa bacteriana mediante ultrasonido para mantener encías sanas."
  },
  {
    icon: <Activity size={32} />,
    title: "Ortodoncia",
    description: "Diagnóstico y tratamiento especializado para corregir problemas de mordida y alineación compleja."
  },
  {
    icon: <Syringe size={32} />,
    title: "Resinas",
    description: "Restauraciones estéticas del color de tu diente para reparar caries o fracturas de forma imperceptible."
  },
  {
    icon: <Gem size={32} />,
    title: "Zirconias",
    description: "Coronas y puentes de alta resistencia y estética superior, con apariencia 100% natural."
  }
];

const Services = () => {
  return (
    <section id="procedimientos" className="py-24 bg-lilac-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest uppercase">Tratamientos Dentales</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-lilac-900 mt-2 mb-4">Servicios Exclusivos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Utilizamos tecnología de vanguardia y materiales de la más alta calidad para transformar y cuidar tu sonrisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((proc, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-300 group"
            >
              <div className="w-16 h-16 bg-lilac-100 rounded-full flex items-center justify-center text-lilac-600 mb-6 group-hover:bg-lilac-600 group-hover:text-white transition-colors duration-300">
                {proc.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{proc.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {proc.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <div className="inline-block bg-white p-6 rounded-xl shadow-md border-l-4 border-gold-500">
                <p className="text-lg text-gray-700">
                    ¿Quieres mejorar tu sonrisa? <br className="hidden md:block"/> 
                    <a href="#agendar-valoracion" className="text-lilac-700 font-bold hover:underline">Agenda una valoración</a> y diseñaremos un plan a tu medida.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;