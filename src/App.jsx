import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
