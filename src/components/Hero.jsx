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
    <section className="bg-hero-bg min-h-screen lg:min-h-[920px] pt-32 pb-16 flex items-start justify-center relative overflow-hidden">

      {/* Background Ornament — moved down so download buttons sit on it */}
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

      {/* Illustrations — z-30 (in front of card), bottom-anchored */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1440px] pointer-events-none z-30 overflow-visible hidden lg:block">
        {/* Painter - Left */}
        <img
          src="/images/illustrations/painter.png"
          alt="Handi Painter"
          className="absolute transition-all duration-500"
          style={{
            width: '800px',
            height: '760px',
            bottom: 0,
            left: '-60px',
            opacity: 1,
            objectFit: 'contain',
            objectPosition: 'bottom'
          }}
        />
        {/* Lady Seating - Right */}
        <img
          src="/images/illustrations/lady-seating.png"
          alt="Handi Lady Seating"
          className="absolute transition-all duration-500"
          style={{
            width: '580px',
            height: '620px',
            bottom: 0,
            left: '890px',
            opacity: 1,
            objectFit: 'contain',
            objectPosition: 'bottom'
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 z-20 flex flex-col items-center w-full">
        {/* Floating White Input Card — flex-col so button stays at the bottom */}
        <div className="bg-white rounded-[20px] p-8 md:p-12 w-full max-w-[800px] shadow-2xl relative z-20 mb-8 transition-all duration-300 hover:-translate-y-1 flex flex-col">
          <span className="font-body text-[#777777] text-base font-normal mb-4 block">
            What do you need done?
          </span>
          <h1 className="font-heading font-medium text-4xl md:text-[56px] text-gray-900 leading-[1.05] tracking-[-0.02em] mb-4 min-h-[120px] md:min-h-[160px]">
            {displayText}
            <span className="caret"></span>
          </h1>

          <div className="flex justify-end mt-8">
            <a
              href="#"
              className="bg-dark-green text-white rounded-xl px-7 py-3.5 font-body font-semibold text-sm flex items-center gap-2.5 transition-all duration-300 hover:bg-[#03361a] hover:-translate-y-0.5"
            >
              Get Help
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Subtext */}
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

        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row gap-3 z-30">
          <a href="#" className="bg-white text-gray-900 border border-gray-100 flex items-center h-[44px] rounded-xl overflow-hidden transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 shadow-md w-full sm:w-[245px]">
            <span className="flex-1 px-[15px] font-body font-semibold text-xs leading-none">Download on the App Store</span>
            <div className="w-px self-stretch bg-gray-200 shrink-0" />
            <div className="w-11 flex items-center justify-center shrink-0">
              <img src="/apple-icon.png" alt="Apple" className="w-[18px] h-auto object-contain" />
            </div>
          </a>
          <a href="#" className="text-white border border-white/10 flex items-center h-[44px] rounded-xl overflow-hidden transition-all duration-300 hover:bg-black/80 hover:-translate-y-0.5 shadow-md w-full sm:w-[206px]" style={{ backgroundColor: '#1E1E20' }}>
            <span className="flex-1 px-[15px] font-body font-semibold text-xs leading-none">Get it on Google Play</span>
            <div className="w-px self-stretch bg-white/15 shrink-0" />
            <div className="w-11 flex items-center justify-center shrink-0">
              <img src="/googleplay-icon.png" alt="Google Play" className="w-[18px] h-auto object-contain" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
