
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setIsOpen(false);
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className={`font-serif text-2xl font-bold ${scrolled ? 'text-lilac-800' : 'text-lilac-900'}`}>
              Dra. Marlene Inzunza Morales
            </span>
          </div>
          
          {/* Desktop Menu - Only primary CTA */}
          <div className="hidden md:flex items-center">
            <a 
              href="#agendar-valoracion" 
              className="bg-gold-500 text-white px-6 py-2 rounded-full hover:bg-gold-600 transition-all shadow-lg flex items-center gap-2 font-bold"
              onClick={(e) => handleNavClick(e, '#agendar-valoracion')}
            >
              <Phone size={18} />
              <span>Agendar Cita</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-lilac-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only primary CTA */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full p-4">
          <a 
            href="#agendar-valoracion" 
            className="block w-full text-center bg-gold-500 text-white px-6 py-3 rounded-md hover:bg-gold-600 transition-all font-bold"
            onClick={(e) => handleNavClick(e, '#agendar-valoracion')}
          >
            Agendar Cita
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
