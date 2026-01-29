
import React from 'react';

const BookingForm = () => {
  return (
    <section id="agendar-valoracion" className="py-16 bg-lilac-50 scroll-mt-24 border-y border-lilac-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-lilac-100">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-lilac-900 mb-4">Agenda tu cita ahora</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Déjanos tus datos a continuación y nuestro equipo se pondrá en contacto contigo a la brevedad para confirmar tu espacio.
            </p>
          </div>
          
          <div className="relative min-h-[450px]">
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/SEGv9iC7Jb4IgNWZcBvP"
                style={{ width: '100%', height: '100%', border: 'none', minHeight: '432px' }}
                id="inline-SEGv9iC7Jb4IgNWZcBvP" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="nombre, telefono y agendamient - marlene "
                data-height="432"
                data-layout-iframe-id="inline-SEGv9iC7Jb4IgNWZcBvP"
                data-form-id="SEGv9iC7Jb4IgNWZcBvP"
                title="nombre, telefono y agendamient - marlene "
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
