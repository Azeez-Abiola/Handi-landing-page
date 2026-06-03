import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const userFaqs = [
  {
    q: "How do I get started on Handi?",
    a: "Download the Handi app (iOS or Android), sign up with your phone number, verify via OTP, and you're ready. No credit card needed to start. The whole process takes about 2 minutes."
  },
  {
    q: "How do I post a task?",
    a: "Tap the \"What do you need done\" box, describe what you need (e.g., \"Fix leaking kitchen sink\"), add a photo if you can, pick your budget range, choose when you need it, and hit post. Takes about 2 minutes."
  },
  {
    q: "Can I post a task for later, or does it have to be today?",
    a: "You can schedule a task for any date and time that works for you — today, tomorrow, or weeks ahead. Providers will see the date you need and respond accordingly."
  },
  {
    q: "Are the professionals on Handi actually vetted?",
    a: "Yes. Every provider goes through identity verification and background checks before being listed. Customers also leave ratings after every job, so you can see a provider's track record before booking."
  },
  {
    q: "What if I'm not happy with the work?",
    a: "Your payment is held in escrow until you confirm the job is done to your satisfaction. If there's a dispute, our support team steps in to resolve it fairly."
  },
  {
    q: "How do I contact support?",
    a: "You can reach us in-app via the Help section, or email us at support@tryhandi.com. We typically respond within a few hours."
  },
];

const providerFaqs = [
  {
    q: "How do I sign up as a provider?",
    a: "Download the Handi app, choose \"Join as a Provider,\" complete your profile, upload your ID and any relevant certifications. Once verified, you'll start receiving job requests in your area."
  },
  {
    q: "How do I get paid?",
    a: "Payment is released to your Handi wallet within 24 hours of the customer confirming the job is complete. You can withdraw to your bank account at any time."
  },
  {
    q: "Can I set my own rates?",
    a: "Yes. You set your own pricing when you submit a quote for a task. Customers see your rate and can accept, negotiate, or choose another provider."
  },
  {
    q: "What happens if a customer disputes a job?",
    a: "Our support team reviews the case fairly using in-app chat logs, photos, and job details. Funds stay in escrow until the dispute is resolved — your earnings are protected."
  },
  {
    q: "How many jobs can I take at once?",
    a: "There's no limit. You control your availability and can accept as many jobs as your schedule allows. The more responsive you are, the more jobs you receive."
  },
  {
    q: "Is there a fee to join as a provider?",
    a: "Joining Handi is completely free. We take a small service fee from completed jobs — you only pay when you earn."
  },
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('users');
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = activeTab === 'users' ? userFaqs : providerFaqs;

  const toggleFAQ = (idx) => {
    setOpenIndexes(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndexes([]);
  };

  return (
    <section className="bg-[#F5F5F5] py-24 select-none">
      <div className="max-w-[800px] mx-auto px-6">

        <ScrollReveal>
          {/* Tab toggle */}
          <div className="flex gap-1 bg-white border border-gray-200 rounded-full p-1 w-fit mb-8">
            <button
              onClick={() => handleTabChange('users')}
              className={`font-body text-sm font-semibold px-5 py-1.5 rounded-full transition-all duration-300 ${
                activeTab === 'users'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Users
            </button>
            <button
              onClick={() => handleTabChange('providers')}
              className={`font-body text-sm font-semibold px-5 py-1.5 rounded-full transition-all duration-300 ${
                activeTab === 'providers'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Providers
            </button>
          </div>

          <h2 className="font-heading font-medium text-3xl md:text-4xl text-gray-900 mb-12 tracking-[-0.02em]">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="flex flex-col border-t border-gray-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <ScrollReveal key={`${activeTab}-${idx}`} delay={idx * 50}>
                <div className="border-b border-gray-200 py-6 transition-all duration-300">
                  <div
                    onClick={() => toggleFAQ(idx)}
                    className="flex justify-between items-center cursor-pointer gap-6"
                  >
                    <h3 className={`font-heading text-lg font-semibold transition-colors duration-300 ${
                      isOpen ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                    }`}>
                      {faq.q}
                    </h3>
                    <span className="text-gray-900 font-heading text-xl font-bold w-6 h-6 flex items-center justify-center shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[200px] mt-3 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="font-body text-sm leading-relaxed text-gray-400">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
