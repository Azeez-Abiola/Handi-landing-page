import { useEffect, useState } from 'react';
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

const API_BASE = 'https://dev-api.tryhandi.com';

const inputCls = 'w-full bg-white border border-gray-200 rounded-xl px-4 h-12 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#0C9348] transition-colors';

const emptyForm = { name: '', phone: '', email: '', subjectId: '', message: '' };

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

  const [subjects, setSubjects] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', msg }

  useEffect(() => {
    let on = true;
    fetch(`${API_BASE}/contact/subjects`)
      .then((r) => r.json())
      .then((d) => { if (on && Array.isArray(d?.data)) setSubjects(d.data); })
      .catch(() => {});
    return () => { on = false; };
  }, []);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const phoneDigits = form.phone.replace(/\D/g, '').replace(/^0+/, '');
      const payload = {
        name: form.name.trim(),
        phoneNumber: `+234${phoneDigits}`,
        email: form.email.trim(),
        subjectId: form.subjectId,
        message: form.message.trim(),
      };
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.responseCode === '00' || data.status === 'success')) {
        setForm(emptyForm);
        showToast('success', "Message sent! We'll get back to you shortly.");
      } else {
        showToast('error', data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      showToast('error', 'Network error. Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#04361B] pt-32 md:pt-36 pb-16 px-6">
        <div className="max-w-[1313px] mx-auto">
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
        <div className="max-w-[1313px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_312px] gap-x-[70px] gap-y-12">

          {/* Form */}
          <ScrollReveal direction="left">
            <div className="bg-[#F5F5F5] rounded-[16px] p-7">
              <h2 className="font-heading font-semibold text-xl text-gray-900 mb-2">Send us a message</h2>
              <p className="font-body text-sm text-gray-500 mb-7">Fill out the form and our team will get back to you shortly.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label="Name"><input required value={form.name} onChange={update('name')} className={inputCls} placeholder="Enter your name" /></Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Phone">
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-xl px-3 h-12 text-sm text-gray-700 shrink-0">
                        +234
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6673 7.5L10.0007 14.1667L3.33398 7.5" stroke="black" strokeWidth="1.25" strokeLinecap="square"/></svg>
                      </span>
                      <input required type="tel" value={form.phone} onChange={update('phone')} className={inputCls} placeholder="811-123-4582" />
                    </div>
                  </Field>
                  <Field label="E-mail Address"><input required type="email" value={form.email} onChange={update('email')} className={inputCls} placeholder="Enter your e-mail address" /></Field>
                </div>
                <Field label="Subject">
                  <select required value={form.subjectId} onChange={update('subjectId')} className={`${inputCls} appearance-none ${form.subjectId ? 'text-gray-900' : 'text-gray-400'}`}>
                    <option value="" disabled>Choose a topic</option>
                    {subjects.map((s) => (
                      <option key={s.id} value={s.id} className="text-gray-900">{s.label}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Message">
                  <textarea required rows={5} value={form.message} onChange={update('message')} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#0C9348] transition-colors resize-none" placeholder="How can we help?" />
                </Field>
                <button type="submit" disabled={sending} className="bg-[#0C9348] text-white font-body font-semibold text-sm rounded-xl px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:bg-[#0a7d3d] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  {sending ? 'Sending…' : 'Send'}
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

      {/* Toast — success / error */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 text-white px-5 py-4 rounded-xl shadow-2xl transition-all duration-300 ${toast?.type === 'error' ? 'bg-[#C0392B]' : 'bg-[#0C9348]'} ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        role="status"
        aria-live="polite"
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 shrink-0">
          {toast?.type === 'error' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
          )}
        </span>
        <span className="font-body text-sm font-medium">{toast?.msg || ''}</span>
      </div>
    </div>
  );
}
