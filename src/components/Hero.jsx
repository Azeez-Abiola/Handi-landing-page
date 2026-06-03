import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState("I need someone to fix my air-conditioning today in Yaba.");

  const phrases = [
    "I need someone to fix my air-conditioning today in Yaba.",
    "I need a professional plumber to fix my kitchen leak.",
    "I need an expert electrician to mount my brand new TV.",
    "I need a top cosmetologist for my home beauty session."
  ];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = false;
    let typingSpeed = 60;
    const pauseTime = 3000;
    let timer;

    const typeLoop = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
        typingSpeed = 30;
      } else {
        setDisplayText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        typingSpeed = 60;
      }
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        timer = setTimeout(typeLoop, pauseTime);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timer = setTimeout(typeLoop, 400);
      } else {
        timer = setTimeout(typeLoop, typingSpeed);
      }
    };

    timer = setTimeout(typeLoop, pauseTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-hero-bg min-h-screen lg:min-h-[920px] pt-32 pb-0 lg:pb-16 flex items-start justify-center relative overflow-hidden">

      {/* Background Ornament */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1440px] h-full pointer-events-none z-0 overflow-visible">
        <div
          className="absolute pointer-events-none opacity-100 animate-pulse duration-4000"
          style={{
            width: '1204px',
            height: '1390px',
            top: '-280px',
            left: '-140px',
            backgroundImage: "url('/images/handi-logo-green.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Desktop-only illustrations */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1440px] pointer-events-none z-30 overflow-visible hidden lg:block">
        <img
          src="/images/illustrations/painter.png"
          alt="Handi Painter"
          className="absolute"
          style={{ width: '800px', height: '760px', bottom: 0, left: '-60px', objectFit: 'contain', objectPosition: 'bottom' }}
        />
        <img
          src="/images/illustrations/lady-seating.png"
          alt="Handi Lady Seating"
          className="absolute"
          style={{ width: '580px', height: '620px', bottom: 0, left: '890px', objectFit: 'contain', objectPosition: 'bottom' }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 z-20 flex flex-col items-center w-full">

        {/* Floating White Card */}
        <div className="bg-white rounded-[20px] p-8 md:p-12 w-full max-w-[800px] shadow-2xl relative z-20 mb-8 transition-all duration-300 hover:-translate-y-1 flex flex-col">

          {/* Label — 14px on mobile, 16px on desktop */}
          <span
            className="text-[#777777] font-normal mb-4 block"
            style={{
              fontFamily: "'Google Sans', 'Plus Jakarta Sans', sans-serif",
              fontSize: '14px',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            Find Trusted Service Professionals in Lagos
          </span>

          {/* Typing h1 — 32px on mobile, 56px on desktop, no forced breaks */}
          <h1
            className="font-heading font-medium text-gray-900 tracking-[-0.02em] mb-4"
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              lineHeight: '1.05',
              minHeight: 'clamp(100px, 12vw, 160px)',
            }}
          >
            {displayText}
            <span className="caret"></span>
          </h1>

          <div className="flex justify-end mt-8">
            <a
              href="#"
              className="bg-dark-green text-white rounded-xl px-7 py-3.5 font-body font-semibold text-sm flex items-center gap-2.5 transition-all duration-300 hover:bg-[#03361a] hover:-translate-y-0.5"
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Subtext */}
        <p
          className="text-white text-center mb-8"
          style={{
            maxWidth: '381px',
            fontFamily: "'Google Sans', 'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
          }}
        >
          No more WhatsApp messages. No surprise charges. No flaky artisans. Just reliable professionals rated by real customers, available when you need them.
        </p>

        {/* App Store Badges — specific widths on all screen sizes, centered stack on mobile */}
        <div className="flex flex-col items-center sm:flex-row gap-3 z-30">
          <a
            href="#"
            className="bg-white text-gray-900 border border-gray-100 flex items-center overflow-hidden transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 shadow-md shrink-0"
            style={{ width: '245px', height: '44px', borderRadius: '12px', gap: '12px' }}
          >
            <span className="flex-1 pl-[15px] font-body font-semibold text-xs leading-none">Download on the App Store</span>
            <div className="w-px self-stretch bg-gray-200 shrink-0" />
            <div className="w-11 flex items-center justify-center shrink-0">
              <img src="/apple-icon.png" alt="Apple" className="w-[18px] h-auto object-contain" />
            </div>
          </a>
          <a
            href="#"
            className="text-white border border-white/10 flex items-center overflow-hidden transition-all duration-300 hover:bg-black/80 hover:-translate-y-0.5 shadow-md shrink-0"
            style={{ width: '206px', height: '44px', borderRadius: '12px', gap: '12px', backgroundColor: '#1E1E20' }}
          >
            <span className="flex-1 pl-[15px] font-body font-semibold text-xs leading-none">Get it on Google Play</span>
            <div className="w-px self-stretch bg-white/15 shrink-0" />
            <div className="w-11 flex items-center justify-center shrink-0">
              <img src="/googleplay-icon.png" alt="Google Play" className="w-[18px] h-auto object-contain" />
            </div>
          </a>
        </div>

        {/* Mobile-only illustration — lady seating below download buttons */}
        <div className="block lg:hidden mt-6 w-full overflow-visible self-start" style={{ marginLeft: '-12px' }}>
          <img
            src="/images/illustrations/lady-seating.png"
            alt=""
            draggable="false"
            style={{ width: '484px', height: '518px', objectFit: 'contain', objectPosition: 'bottom left' }}
          />
        </div>

      </div>
    </section>
  );
}
