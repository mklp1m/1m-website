import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MVPPackages from './components/MVPPackages';
import AutomationFeatures from './components/AutomationFeatures';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <MVPPackages />
      <AutomationFeatures />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;