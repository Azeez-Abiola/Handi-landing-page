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
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Professionals Carousel */}
      <Carousel />

      {/* 4. Interactive Steps Section */}
      <Steps />

      {/* 5. Key Value Propositions */}
      <Features />

      {/* 6. Testimonial Quote Banner */}
      <Testimonial />

      {/* 7. Provider Earnings Section */}
      <ProviderEarnings />

      {/* 8. Frequently Asked Questions (FAQ) */}
      <FAQ />

      {/* 9. Professionals Collage & CTA Box */}
      <FooterCTA />

      {/* 10. Minimal Bottom Links Footer */}
      <FooterLinks />
    </div>
  );
}
