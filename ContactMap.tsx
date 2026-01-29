
import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, CalendarCheck } from 'lucide-react';

const ContactMap = () => {
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
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Contact and Map Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-lilac-900 text-white">
          
          {/* Contact Info */}
          <div className="p-10 md:p-14 flex flex-col justify-center bg-lilac-900">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gold-400">Visítanos</h2>
            <p className="text-lilac-100 mb-8 text-lg">
              Estamos ubicados en una zona accesible y segura. Agenda tu cita hoy mismo y comienza tu transformación.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-lilac-800 p-3 rounded-lg">
                  <MapPin className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Dirección</h4>
                  <p className="text-lilac-100">
                    Lago de Chapala 1334, Las Quintas,<br/>
                    80060 Culiacán Rosales, Sin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-lilac-800 p-3 rounded-lg">
                  <Phone className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Teléfono</h4>
                  <p className="text-lilac-100">+52 667 389 0070</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-lilac-800 p-3 rounded-lg">
                  <Clock className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horario</h4>
                  <p className="text-lilac-100">Lun - Vie: 10:00 AM - 7:00 PM<br/>Sáb: 10:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#agendar-valoracion" 
                onClick={handleScrollToForm}
                className="inline-flex items-center gap-2 bg-gold-500 text-white font-bold py-3 px-8 rounded-full hover:bg-gold-600 transition-all shadow-lg transform hover:-translate-y-1"
              >
                <CalendarCheck size={20} />
                Agendar ahora
              </a>
              <a 
                href="https://wa.link/ktc9e6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-lilac-300 text-lilac-100 font-bold py-3 px-8 rounded-full hover:bg-lilac-800 transition-all shadow-lg transform hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-96 lg:h-full w-full bg-gray-300">
            <iframe 
              src="https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Lago%20de%20Chapala%201334%2C%20Las%20Quintas%2C%2080060%20Culiac%C3%A1n%20Rosales%2C%20Sin&t=&z=15&ie=UTF8&iwloc=B&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Ubicación del consultorio"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
