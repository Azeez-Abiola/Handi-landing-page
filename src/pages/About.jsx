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
      <section className="bg-hero-bg relative">
        {/* Handi logo ornament — right side (clipped to hero) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute"
            style={{
              width: '820px', height: '950px', top: '-150px', right: '-210px',
              backgroundImage: "url('/images/handi-logo-green.webp')",
              backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 pt-32 md:pt-40 relative min-h-[520px] md:min-h-[700px]">
          <ScrollReveal direction="left" className="max-w-[460px] relative z-10">
            <h1 className="font-heading font-medium text-4xl md:text-[52px] text-white leading-[1.05] tracking-[-0.02em] mb-5">
              Trusted service.<br />Built for you.
            </h1>
            <p className="font-body text-sm text-white/80 leading-relaxed max-w-[320px]">
              Handi connects Lagosians with vetted professionals for every home and business need. We're making it simple to find reliable help, pay fairly, and build trust.
            </p>
          </ScrollReveal>

          {/* Lady illustration — legs spill into the section below */}
          <img
            src="/images/illustrations/lady-seating2.webp"
            alt=""
            draggable="false"
            loading="lazy"
            decoding="async"
            className="w-full mt-8 md:mt-0 md:w-[760px] md:max-w-[60%] md:absolute md:right-0 md:bottom-[-56px] object-contain object-bottom z-[2]"
          />
        </div>
      </section>

      {/* How Handi Started + Mission + Values — shared 866px column, left-aligned */}
      <section className="bg-white pt-16 md:pt-24 pb-20 md:pb-28 px-6">
        <div className="max-w-[866px] mx-auto">

          {/* How Handi Started */}
          <ScrollReveal>
            <h2 className="font-heading font-semibold text-2xl text-gray-900 mb-6">How Handi Started</h2>
            <div className="space-y-5 font-body text-sm text-gray-600 leading-relaxed">
              <p>We launched Handi to solve a real problem: finding reliable service professionals is unnecessarily hard.</p>
              <p>Most people rely on WhatsApp groups, random referrals, or hope and often end up with no-shows, surprise pricing, and no recourse. Meanwhile, skilled professionals struggle to find steady work and build credibility.</p>
              <p>Handi fixes this. We created a platform where verified professionals connect directly with customers who need them. Transparent pricing. Real ratings. Secure payments. Simple.</p>
              <p>We're not trying to replace relationships, we're building infrastructure that makes them possible.</p>
            </div>
          </ScrollReveal>

          {/* Mission + Values — directly under, same left edge */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 mt-24 md:mt-32">
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

        </div>
      </section>

      {/* The Team — wide deep-green card that touches the section bottom */}
      <section className="bg-hero-bg pt-16 md:pt-24 px-4">
        <div className="max-w-[1483px] mx-auto">
          <ScrollReveal className="pl-4 md:pl-12">
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#00F676] mb-3 block">The Team</span>
            <h2 className="font-heading font-medium text-3xl md:text-[40px] text-white leading-tight tracking-[-0.02em] mb-8 md:mb-10 max-w-[460px]">
              Built by people who understand the problem.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#044422] rounded-t-[24px] lg:rounded-[24px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-start min-h-[440px] lg:min-h-[500px]">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:max-w-[660px] lg:justify-self-end">
                {[0, 1].map((i) => (
                  <div key={i} className="h-[284px] sm:h-auto sm:aspect-square rounded-[10px] bg-[#06C167] flex items-center justify-center">
                    <span className="font-body text-xs text-white/40">Photo</span>
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
