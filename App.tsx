
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import BookingForm from './BookingForm';
import Services from './Services';
import ContactMap from './ContactMap';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-lilac-50 min-h-screen text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BookingForm />
        <Services />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
