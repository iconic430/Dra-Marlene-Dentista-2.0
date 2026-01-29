
import React from 'react';
import { Award, BookOpen, Heart, Smile } from 'lucide-react';

const About = () => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = 'agendar-valoracion';
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Espacio para que el título no quede oculto por el navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="sobre-mi" className="py-24 bg-white relative">
        {/* Decorational Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-100 rounded-bl-full opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Image Side - Now Static */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gold-200 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://i.postimg.cc/13srXdtx/Whats-App-Image-2025-12-11-at-17-28-38.jpg" 
              alt="Dra. Marlene Inzunza Morales" 
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover object-top"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-4 bg-white p-6 rounded-xl shadow-xl border border-lilac-100 max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="bg-lilac-100 p-3 rounded-full text-lilac-700">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Certificación</p>
                  <p className="font-bold text-lilac-900">Especialista en Ortodoncia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-2">Sobre la Doctora</h2>
              <h3 className="text-4xl font-serif font-bold text-lilac-900 mb-6">Dra. Marlene Inzunza Morales</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Desde niña supe que mi destino era ser dentista. Hoy en día, ejerzo mi profesión con una profunda pasión, disfrutando cada momento de mi trabajo y la oportunidad de servir a mis pacientes.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-gold-400 pl-4 bg-lilac-50 py-2 rounded-r-lg">
                "Me encanta transformar sonrisas, pero lo que más me llena es sentir que las personas recobran su autoestima y vuelven a sonreír sin miedo."
              </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-lilac-50 p-2 rounded-lg text-gold-600 mt-1">
                      <BookOpen size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Formación Académica</h4>
                        <ul className="text-gray-600 mt-2 space-y-2">
                          <li className="flex flex-col sm:flex-row sm:items-center gap-1">
                            <span className="font-semibold text-lilac-800">Licenciatura en Odontología:</span>
                            <span>Universidad Autónoma de Sinaloa (UAS), Culiacán.</span>
                          </li>
                          <li className="flex flex-col sm:flex-row sm:items-center gap-1">
                             <span className="font-semibold text-lilac-800">Especialidad en Ortodoncia:</span>
                             <span>Universidad Latinoamericana (ULA), CDMX.</span>
                          </li>
                        </ul>
                    </div>
                </div>
                
                 <div className="flex items-start gap-4">
                    <div className="bg-lilac-50 p-2 rounded-lg text-gold-600 mt-1">
                      <Heart size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Mi Pasión</h4>
                        <p className="text-gray-600">
                          Más que procedimientos dentales, me dedico a devolver la seguridad y confianza a cada persona que entra a mi consultorio.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <a 
                  href="#agendar-valoracion" 
                  onClick={handleScrollToForm}
                  className="inline-flex items-center gap-2 text-lilac-700 font-bold hover:text-lilac-900 border-b-2 border-gold-400 pb-1 transition-colors"
                >
                  <Smile size={20} />
                  Agendar una valoración
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
