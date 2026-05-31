import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Steps from './components/Steps';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import ProviderEarnings from './components/ProviderEarnings';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import FooterLinks from './components/FooterLinks';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden antialiased">
      <Navbar />
      <Hero />
      <Carousel />
      <Steps />
      <Features />
      <Testimonial />
      <ProviderEarnings />
      <FAQ />
      <FooterCTA />
      <FooterLinks />
    </div>
  );
}
