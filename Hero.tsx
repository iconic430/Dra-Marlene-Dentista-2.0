
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = 'agendar-valoracion';
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Offset para que el título sea visible bajo el navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
          alt="Clínica Dental Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lilac-100/90 to-white/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <div className="md:w-1/2 space-y-6 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-gold-100 text-gold-700 font-semibold tracking-wide text-sm mb-2 border border-gold-200">
            +30 años creando sonrisas
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-lilac-900 leading-tight">
            Realza tu <span className="text-gold-600 italic">sonrisa natural</span> con expertos.
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
            Tratamientos dentales personalizados diseñados para cuidar tu salud bucal y estética con la más alta tecnología.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
             <a 
              href="#agendar-valoracion" 
              onClick={handleScrollToForm}
              className="bg-lilac-700 text-white px-8 py-4 rounded-full hover:bg-lilac-800 transition-all shadow-xl flex items-center justify-center gap-2 text-lg font-semibold group transform hover:-translate-y-1"
            >
              Agenda tu consulta <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
