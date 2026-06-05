import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterCTA from '../components/FooterCTA';
import FooterLinks from '../components/FooterLinks';
import ScrollReveal from '../components/ScrollReveal';

const values = [
  { title: 'Trust First', desc: 'We earn trust through verification, transparency, and protection. Every professional is verified. Every price is upfront. Every payment is secure.' },
  { title: 'Speed & Convenience', desc: 'Get matched with professionals in minutes, not days. Book, communicate, and pay all in one app. Friction eliminated.' },
  { title: 'Fairness', desc: "We're fair to customers (transparent pricing, buyer protection), and fair to professionals (fast payments, steady work, no intermediaries)." },
  { title: 'Growing Together', desc: "We're still early. We listen to users and professionals, build what matters, and expand thoughtfully, starting with Lagos, expanding across Nigeria." },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-bg pt-32 md:pt-36 pb-0 px-6 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative">
          <ScrollReveal direction="left" className="max-w-[460px] pt-6 md:pt-10 relative z-10">
            <h1 className="font-heading font-medium text-4xl md:text-[52px] text-white leading-[1.05] tracking-[-0.02em] mb-5">
              Trusted service.<br />Built for you.
            </h1>
            <p className="font-body text-sm text-white/80 leading-relaxed max-w-[300px] mb-10 md:mb-0">
              Handi connects Lagosians with vetted professionals for every home and business need. We're making it simple to find reliable help, pay fairly, and build trust.
            </p>
          </ScrollReveal>
          {/* Lady illustration */}
          <img
            src="/images/illustrations/lady-seating.png"
            alt=""
            draggable="false"
            className="hidden md:block absolute right-0 bottom-0 w-[620px] h-[520px] object-contain object-bottom z-0"
          />
        </div>
      </section>

      {/* How Handi Started */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-[760px] mx-auto">
          <ScrollReveal>
            <h2 className="font-heading font-semibold text-2xl text-gray-900 mb-6">How Handi Started</h2>
            <div className="space-y-5 font-body text-sm text-gray-600 leading-relaxed">
              <p>We launched Handi to solve a real problem: finding reliable service professionals is unnecessarily hard.</p>
              <p>Most people rely on WhatsApp groups, random referrals, or hope and often end up with no-shows, surprise pricing, and no recourse. Meanwhile, skilled professionals struggle to find steady work and build credibility.</p>
              <p>Handi fixes this. We created a platform where verified professionals connect directly with customers who need them. Transparent pricing. Real ratings. Secure payments. Simple.</p>
              <p>We're not trying to replace relationships, we're building infrastructure that makes them possible.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="bg-white pb-20 md:pb-28 px-6">
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <ScrollReveal direction="left">
            <h2 className="font-heading font-semibold text-2xl text-gray-900 mb-4">Our Mission</h2>
            <p className="font-body text-sm text-gray-600 leading-relaxed max-w-[240px]">
              Make finding trusted service professionals as easy as ordering food.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <h2 className="font-heading font-semibold text-2xl text-gray-900 mb-2">Our Values</h2>
            <div className="divide-y divide-gray-100">
              {values.map((v) => (
                <div key={v.title} className="py-6">
                  <h3 className="font-body text-base font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Team */}
      <section className="bg-hero-bg py-16 md:py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#00F676] mb-3 block">The Team</span>
            <h2 className="font-heading font-medium text-3xl md:text-[40px] text-white leading-tight tracking-[-0.02em] mb-10 max-w-[460px]">
              Built by people who understand the problem.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#044422] rounded-[24px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-5 font-body text-sm text-white/70 leading-relaxed max-w-[420px]">
                <p>
                  Handi was founded by <span className="font-semibold text-white">Adejare Nathaniel</span> and{' '}
                  <span className="font-semibold text-white">Kolade Bisiolu</span>, who saw the problem firsthand and decided to fix it. Our team includes engineers, operations experts, and customer advocates who are obsessed with making Handi better every day.
                </p>
                <p>
                  We're small, hungry, and focused. We don't build unnecessary features. We build what customers and professionals actually need.
                </p>
              </div>
              {/* Image placeholders — replace with provided photos */}
              <div className="grid grid-cols-2 gap-5">
                {[0, 1].map((i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-[#06C167]/30 border border-dashed border-white/15 flex items-center justify-center">
                    <span className="font-body text-xs text-white/30">Photo</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterCTA line1="Ready to experience the difference?" line2="Download Handi today." />
      <FooterLinks />
    </div>
  );
}
