import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    quote: "My AC broke on a Friday afternoon. I posted on Handi at 4:30 PM. A technician arrived by 5:15 PM and fixed it the same day. No guessing, no waiting days for a call back. 10/10.",
    name: "AjaNwachuku, M.A.",
    location: "Victoria Island, Lagos.",
  },
  {
    quote: "I needed a plumber urgently and Handi connected me with one in under 20 minutes. Professional, fair price, job done clean. This is exactly what Lagos needed.",
    name: "Chisom O.",
    location: "Lekki Phase 1, Lagos.",
  },
  {
    quote: "Used Handi to get my apartment deep-cleaned before my family arrived. The cleaner showed up on time, did a fantastic job, and the payment process was seamless.",
    name: "Femi A.",
    location: "Ikeja GRA, Lagos.",
  },
];

const ArrowBtn = ({ onClick, direction, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="w-8 h-8 rounded-full border border-white/30 bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20 active:scale-95 shrink-0"
  >
    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      {direction === 'prev'
        ? <path fillRule="evenodd" clipRule="evenodd" d="M0 5.31676L5.31655 0.000195503L6.0654 0.749041L2.0272 4.78725L12.7512 4.78725V5.84627L2.02721 5.84627L6.0654 9.88445L5.31655 10.6333L0 5.31676Z" fill="white"/>
        : <path fillRule="evenodd" clipRule="evenodd" d="M12.7512 5.31676L7.43465 0.000195503L6.6858 0.749041L10.724 4.78725L0 4.78725V5.84627L10.7240 5.84627L6.6858 9.88445L7.43465 10.6333L12.7512 5.31676Z" fill="white"/>
      }
    </svg>
  </button>
);

export default function Testimonial() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(i => (i + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="bg-hero-bg text-white py-20 relative overflow-hidden select-none">
      <div className="max-w-[1200px] mx-auto px-6 z-10 relative">
        <ScrollReveal className="flex flex-col">

          {/* Quote icon */}
          <div className="text-white mb-6">
            <svg width="65" height="50" viewBox="0 0 65 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.15968 40.775C2.25692 39.8722 1.50461 38.7688 0.902766 37.4648C0.300922 36.0605 0 34.4055 0 32.4996C0 31.0953 0.150461 29.5907 0.451384 27.9858C1.05323 24.9766 2.50769 21.867 4.81476 18.6572C7.12183 15.4473 9.67967 12.4381 12.4883 9.62951C15.3972 6.7206 18.0553 4.41353 20.4627 2.7083C22.8701 0.902767 24.5252 0 25.4279 0C25.8292 0 26.3809 0.150462 27.083 0.451387C27.7852 0.652005 29.2396 1.25385 31.4464 2.25692C27.8353 5.06553 24.9264 8.12491 22.7196 11.4351C20.6132 14.6449 19.5599 17.4535 19.5599 19.8609C19.5599 21.2652 19.9612 22.3686 20.7636 23.171L26.6316 29.039C28.5375 30.9448 29.4904 32.9008 29.4904 34.907C29.4904 36.9131 28.5375 38.8691 26.6316 40.775L20.7636 46.643C18.8578 48.5488 16.9018 49.5017 14.8957 49.5017C12.8895 49.5017 10.9335 48.5488 9.02767 46.643L3.15968 40.775ZM36.7125 40.775C35.8098 39.8722 35.0574 38.7688 34.4556 37.4648C33.8538 36.0605 33.5528 34.4055 33.5528 32.4996C33.5528 31.0953 33.7033 29.5907 34.0042 27.9858C34.6061 24.9766 36.0605 21.867 38.3676 18.6572C40.6747 15.4473 43.2325 12.4381 46.0411 9.62951C48.95 6.7206 51.6082 4.41353 54.0156 2.7083C56.4229 0.902767 58.078 0 58.9808 0C59.382 0 59.9337 0.150462 60.6358 0.451387C61.338 0.652005 62.7925 1.25385 64.9992 2.25692C61.3881 5.06553 58.4792 8.12491 56.2725 11.4351C54.166 14.6449 53.1128 17.4535 53.1128 19.8609C53.1128 21.2652 53.514 22.3686 54.3165 23.171L60.1845 29.039C62.0903 30.9448 63.0432 32.9008 63.0432 34.907C63.0432 36.9131 62.0903 38.8691 60.1845 40.775L54.3165 46.643C52.4106 48.5488 50.4546 49.5017 48.4485 49.5017C46.4423 49.5017 44.4863 48.5488 42.5805 46.643L36.7125 40.775Z" fill="white"/>
            </svg>
          </div>

          {/* Quote text */}
          <p
            key={active}
            className="text-white mb-8 fade-swap text-[24px] leading-none md:text-[32px] md:leading-[1.2] max-w-[367px] md:max-w-[861px]"
            style={{
              fontFamily: "'Neue Montreal', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              letterSpacing: '0.01em',
            }}
          >
            {t.quote}
          </p>

          {/* Author row + arrows */}
          <div className="flex items-center justify-between gap-6 w-full">
            <div key={`author-${active}`} className="flex flex-col gap-[5.76px] fade-swap">
              <span className="font-body text-[13px] font-bold text-white whitespace-nowrap leading-tight">{t.name}</span>
              <span className="font-body text-[10px] text-white/70 leading-tight">{t.location}</span>
            </div>

            {/* Navigation arrows — same style as carousel */}
            <div className="flex gap-3">
              <ArrowBtn onClick={prev} direction="prev" label="Previous testimonial" />
              <ArrowBtn onClick={next} direction="next" label="Next testimonial" />
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
