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
import About from './pages/About';
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

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
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:slug" element={<JobDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
