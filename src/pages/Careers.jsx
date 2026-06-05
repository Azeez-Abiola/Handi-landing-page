import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterCTA from '../components/FooterCTA';
import FooterLinks from '../components/FooterLinks';
import ScrollReveal from '../components/ScrollReveal';

const perks = [
  { title: "We're solving real problems", desc: "Every line of code and every customer conversation matters. We're not building another social app — we're building infrastructure that changes how people live." },
  { title: "You'll have impact", desc: 'Small team means big leverage. Your ideas get heard and implemented. Your work directly affects thousands of customers and professionals.' },
  { title: 'We respect your time', desc: 'We value output, not hours. Work smart, take time off, and actually have a life outside of work. We trust you to get things done.' },
  { title: "You'll learn fast", desc: "Startup pace means constant learning. You'll wear multiple hats, solve diverse problems, and grow your skills way faster than at a big company." },
];

const roles = [
  { title: 'UI/UX Designer', dept: 'Design', place: 'Lagos, NG • Remote', type: 'Full Time', slug: 'ui-ux-designer' },
  { title: 'Product Manager', dept: 'Product', place: 'Lagos, NG • Hybrid', type: 'Full Time', slug: 'product-manager' },
  { title: 'Frontend Developer', dept: 'Development', place: 'Lagos, NG • On-site', type: 'Part Time', slug: 'frontend-developer' },
  { title: 'Data Analyst', dept: 'Analytics', place: 'Lagos, NG • Remote', type: 'Contract', slug: 'data-analyst' },
  { title: 'Content Writer', dept: 'Marketing', place: 'Lagos, NG • Remote', type: 'Freelance', slug: 'content-writer' },
  { title: 'SEO Specialist', dept: 'Marketing', place: 'Lagos, NG • Hybrid', type: 'Full Time', slug: 'seo-specialist' },
  { title: 'Backend Developer', dept: 'Development', place: 'Lagos, NG • Remote', type: 'Full Time', slug: 'backend-developer' },
  { title: 'Front Desk Officer / Customer Support', dept: 'Operations', place: 'Lagos, NG • On-site', type: 'Full Time', slug: 'front-desk-officer' },
];

const perkIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C9348" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>
);

export default function Careers() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-bg pt-32 md:pt-36 pb-12 px-6">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h1 className="font-heading font-medium text-4xl md:text-[52px] text-white leading-[1.05] tracking-[-0.02em] mb-4">
              Join the Handi Team
            </h1>
            <p className="font-body text-sm text-white/80 max-w-[440px] mb-10">
              We're building the trusted platform for service professionals in Lagos and beyond. Help us change how Nigerians get things done.
            </p>
          </ScrollReveal>
          {/* Hero image placeholder */}
          <ScrollReveal>
            <div className="rounded-[24px] bg-[#044422] h-[300px] md:h-[420px] flex items-center justify-center">
              <span className="font-body text-xs text-white/30">Image</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Handi */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#0C9348] mb-3 block">Why Handi</span>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-gray-900 mb-3">Do work that actually matters</h2>
            <p className="font-body text-sm text-gray-500 max-w-[360px] mb-12">
              Small team, big leverage. Here's what it's like to build Handi with us.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-[#0C9348]/10 flex items-center justify-center mb-4">{perkIcon}</div>
                  <h3 className="font-body text-base font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="font-body text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-hero-bg py-16 md:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="bg-[#044422] rounded-[24px] p-7 md:p-12">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#00F676] mb-3 block">Open Positions</span>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-3">Roles we're hiring for</h2>
              <p className="font-body text-sm text-white/60 max-w-[360px] mb-8">
                {roles.length} roles open right now. Don't see your fit? We still want to hear from you.
              </p>

              <div className="divide-y divide-white/10 border-t border-white/10">
                {roles.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/careers/${r.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1.2fr_0.8fr_auto] gap-2 md:gap-4 items-center py-5 transition-colors hover:bg-white/[0.03] -mx-3 px-3 rounded-lg"
                  >
                    <span className="font-body text-base font-semibold text-white">{r.title}</span>
                    <span className="font-body text-sm text-white/50">{r.dept}</span>
                    <span className="font-body text-sm text-white/50">{r.place}</span>
                    <span className="font-body text-sm text-white/50">{r.type}</span>
                    <svg className="hidden md:block justify-self-end transition-transform group-hover:translate-x-1" width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M1 7h17M13 1l6 6-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Don't see a role */}
      <section className="bg-hero-bg pb-20 md:pb-28 px-6 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative">
          <ScrollReveal direction="left" className="relative z-10">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-3">Don't see a role that fits?</h2>
            <p className="font-body text-sm text-white/70 mb-6 max-w-[320px]">
              Send us your resume anyway. Great people are always worth meeting.
            </p>
            <a
              href="mailto:careers@tryhandi.com"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-body font-semibold text-sm rounded-xl px-5 py-3 transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5"
            >
              careers@tryhandi.com
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <FooterCTA />
      <FooterLinks />
    </div>
  );
}
