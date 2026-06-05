import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import FooterCTA from '../components/FooterCTA';
import FooterLinks from '../components/FooterLinks';
import ScrollReveal from '../components/ScrollReveal';

const channels = [
  { title: 'Customer Support', sub: 'For app-related questions', link: { label: 'Open support form →', href: '#' } },
  { title: 'General Inquiries', sub: 'For press, partnerships, general', email: 'contact@tryhandi.com', phone: '+234 916 035 9039' },
  { title: 'Careers', sub: 'For job applications', email: 'careers@tryhandi.com' },
  { title: 'Providers', sub: 'For professional partners', email: 'contact@tryhandi.com', phone: '+234 916 035 9039' },
];

const inputCls = 'w-full bg-white border border-gray-200 rounded-xl px-4 h-12 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#0C9348] transition-colors';

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-body text-sm font-medium text-gray-700">{label}</span>
      {children}
    </label>
  );
}

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-bg pt-32 md:pt-36 pb-16 px-6">
        <div className="max-w-[1080px] mx-auto">
          <ScrollReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#00F676] mb-3 block">Contact</span>
            <h1 className="font-heading font-medium text-4xl md:text-[52px] text-white leading-[1.05] tracking-[-0.02em] mb-3">
              Get in touch
            </h1>
            <p className="font-body text-sm text-white/80 max-w-[320px]">
              Have a question, feedback, or just want to say hi? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + channels */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12">

          {/* Form */}
          <ScrollReveal direction="left">
            <div className="bg-[#F5F5F5] rounded-[20px] p-7 md:p-9">
              <h2 className="font-heading font-semibold text-xl text-gray-900 mb-2">Send us a message</h2>
              <p className="font-body text-sm text-gray-500 mb-7">Fill out the form and our team will get back to you shortly.</p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <Field label="Name"><input className={inputCls} placeholder="Enter your name" /></Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Phone">
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl px-3 h-12 text-sm text-gray-700 shrink-0">+234 ▾</span>
                      <input className={inputCls} placeholder="811-123-4582" />
                    </div>
                  </Field>
                  <Field label="E-mail Address"><input type="email" className={inputCls} placeholder="Enter your e-mail address" /></Field>
                </div>
                <Field label="Subject">
                  <select className={`${inputCls} appearance-none`} defaultValue="">
                    <option value="" disabled>Choose a topic</option>
                    <option>General Inquiry</option>
                    <option>Customer Support</option>
                    <option>Careers</option>
                    <option>Providers / Partnerships</option>
                  </select>
                </Field>
                <Field label="Message">
                  <textarea rows={5} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#0C9348] transition-colors resize-none" placeholder="How can we help?" />
                </Field>
                <button type="submit" className="bg-[#0C9348] text-white font-body font-semibold text-sm rounded-xl px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:bg-[#0a7d3d] hover:-translate-y-0.5">
                  Send
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Channels */}
          <ScrollReveal direction="right">
            <div className="space-y-7">
              {channels.map((c) => (
                <div key={c.title} className="border-b border-gray-100 pb-6 last:border-0">
                  <h3 className="font-body text-base font-semibold text-gray-900 mb-1">{c.title}</h3>
                  <p className="font-body text-sm text-gray-400 mb-2">{c.sub}</p>
                  {c.link && <a href={c.link.href} className="font-body text-sm text-[#0C9348] font-medium hover:underline">{c.link.label}</a>}
                  {c.email && <a href={`mailto:${c.email}`} className="block font-body text-sm text-[#0C9348] hover:underline">{c.email}</a>}
                  {c.phone && <p className="font-body text-sm text-[#0C9348]">{c.phone}</p>}
                </div>
              ))}

              {/* Office hours */}
              <div className="bg-[#044422] rounded-2xl p-6 text-white">
                <h3 className="font-body text-base font-semibold mb-4">Office Hours</h3>
                <div className="flex justify-between font-body text-sm mb-1.5"><span className="text-white/70">Monday – Friday</span><span>9 AM – 6 PM (Lagos)</span></div>
                <div className="flex justify-between font-body text-sm mb-4"><span className="text-white/70">Saturday – Sunday</span><span>Closed</span></div>
                <p className="font-body text-xs text-white/50 border-t border-white/10 pt-4 leading-relaxed">
                  We're closed on weekends, but we'll still reply to your message.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Newsletter />
      <FAQ />
      <FooterCTA />
      <FooterLinks />
    </div>
  );
}
