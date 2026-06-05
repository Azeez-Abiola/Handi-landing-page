import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import FooterCTA from '../components/FooterCTA';
import FooterLinks from '../components/FooterLinks';
import ScrollReveal from '../components/ScrollReveal';

/* Full content shown for the Front Desk role; other slugs fall back to a generic shell. */
const jobs = {
  'front-desk-officer': {
    title: 'Front Desk Officer / Customer Support',
    meta: ['Operations', 'Lagos, Nigeria', 'Full-time'],
    about: "We're looking for a smart, organized, and customer-friendly Front Desk Officer / Customer Support Representative to join our team. You'll be the first point of contact for our customers — keeping them happy, informed, and supported across every channel.",
    duties: [
      'Welcome and attend to customers professionally.',
      'Respond to customer inquiries via phone, WhatsApp, email, and social media.',
      'Handle complaints and resolve customer issues efficiently.',
      'Maintain records and customer information.',
      'Schedule appointments and manage front desk activities.',
      'Support day-to-day administrative operations.',
      'Escalate complex issues when necessary.',
      'Represent the company professionally in all interactions.',
    ],
    requirements: [
      'Good communication and interpersonal skills.',
      'Ability to multitask and stay organized.',
      'Basic computer and internet skills.',
      'Familiarity with WhatsApp Business, Google Workspace, or CRM tools is a plus.',
      'Previous customer service experience is an advantage.',
      'Professional, reliable, and courteous.',
    ],
  },
};

const fallback = (slug) => ({
  title: slug ? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ') : 'Open Role',
  meta: ['Handi', 'Lagos, Nigeria', 'Full-time'],
  about: 'Role details coming soon. Reach out to careers@tryhandi.com to learn more about this position.',
  duties: [],
  requirements: [],
});

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 font-body text-sm text-gray-600 leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0C9348] shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-body text-sm font-medium text-gray-700">{label}</span>
      {children}
    </label>
  );
}

const inputCls = 'w-full bg-white border border-gray-200 rounded-xl px-4 h-12 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#0C9348] transition-colors';

export default function JobDetail() {
  const { slug } = useParams();
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  const job = jobs[slug] || fallback(slug);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      {/* Header */}
      <section className="bg-white pt-32 md:pt-36 pb-10 px-6">
        <div className="max-w-[1080px] mx-auto">
          <Link to="/careers" className="inline-flex items-center gap-2 font-body text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors mb-8">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M15 6H1M7 1L1 6l6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            BACK
          </Link>
          <h1 className="font-heading font-semibold text-3xl md:text-[44px] text-gray-900 leading-[1.05] tracking-[-0.02em] mb-4 max-w-[560px]">
            {job.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-sm text-gray-400">
            {job.meta.map((m, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-300" />}
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white pb-16 px-6">
        <div className="max-w-[1080px] mx-auto lg:pl-[44%]">
          <div className="space-y-10">
            <div>
              <h2 className="font-heading font-semibold text-lg text-gray-900 mb-3">About the role</h2>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{job.about}</p>
            </div>
            {job.duties.length > 0 && (
              <div className="border-t border-gray-100 pt-10">
                <h2 className="font-heading font-semibold text-lg text-gray-900 mb-4">What you'll do</h2>
                <BulletList items={job.duties} />
              </div>
            )}
            {job.requirements.length > 0 && (
              <div className="border-t border-gray-100 pt-10">
                <h2 className="font-heading font-semibold text-lg text-gray-900 mb-4">What we're looking for</h2>
                <BulletList items={job.requirements} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section className="bg-[#044422] py-16 md:py-20 px-6">
        <div className="max-w-[1080px] mx-auto bg-[#F5F5F5] rounded-[24px] p-7 md:p-12">
          <h2 className="font-heading font-semibold text-2xl text-gray-900 mb-2">Apply for this role</h2>
          <p className="font-body text-sm text-gray-500 mb-8">
            Tell us about yourself and why you're interested. We read every application and respond within a few days.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Name"><input className={inputCls} placeholder="Enter your name" /></Field>
              <Field label="Phone">
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl px-3 h-12 text-sm text-gray-700 shrink-0">+234 ▾</span>
                  <input className={inputCls} placeholder="811-123-4582" />
                </div>
              </Field>
              <Field label="E-mail Address"><input type="email" className={inputCls} placeholder="Enter your e-mail address" /></Field>
              <Field label="Portfolio/LinkedIn (optional)"><input className={inputCls} placeholder="https://" /></Field>
            </div>

            <Field label="Upload Resume*">
              <div className="w-full bg-[#E9FBF1] border border-dashed border-[#0C9348]/40 rounded-xl px-4 py-4 flex items-center gap-3 text-sm text-gray-500 cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C9348" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M17 8l-5-5-5 5M12 3v12" /></svg>
                Drop your files here or click to browse.
              </div>
            </Field>

            <Field label="Why do you want to join Handi?">
              <textarea rows={5} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#0C9348] transition-colors resize-none" placeholder="Tell us a bit about yourself and why you're interested..." />
            </Field>

            <button type="submit" className="bg-[#0C9348] text-white font-body font-semibold text-sm rounded-xl px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:bg-[#0a7d3d] hover:-translate-y-0.5">
              Apply
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </form>
        </div>
      </section>

      <Newsletter />
      <FooterCTA />
      <FooterLinks />
    </div>
  );
}
