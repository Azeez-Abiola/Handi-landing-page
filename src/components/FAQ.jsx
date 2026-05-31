import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    { q: "How is payout guaranteed?", a: "Payouts are automated and you get paid on schedule, regardless of other members." },
    { q: "When do I receive my turn?", a: "Payouts are automated and you get paid on schedule, regardless of other members." },
    { q: "How is payout guaranteed?", a: "Payouts are automated and you get paid on schedule, regardless of other members." },
    { q: "What are the eligibility criteria for payouts?", a: "Payouts are automated and you get paid on schedule, regardless of other members." },
    { q: "How long does it take to receive the payout?", a: "Payouts are automated and you get paid on schedule, regardless of other members." },
    { q: "Are there any fees associated with the payout process?", a: "Payouts are automated and you get paid on schedule, regardless of other members." }
  ];

  const toggleFAQ = (idx) => {
    setOpenIndexes(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="bg-[#F5F5F5] py-24 select-none">
      <div className="max-w-[800px] mx-auto px-6">

        <ScrollReveal>
          <h2 className="font-heading font-medium text-3xl md:text-4xl text-gray-900 mb-16 tracking-[-0.02em]">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="flex flex-col border-t border-gray-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <ScrollReveal key={idx} delay={idx * 60}>
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
