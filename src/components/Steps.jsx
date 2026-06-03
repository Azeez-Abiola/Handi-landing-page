import { useState, useEffect, useRef } from 'react';

const stepsData = [
  {
    id: 1,
    num: "1",
    title: "Setup and post your task",
    desc: "Tell us what you need, describe the job, add photos, and set your budget. It's free and takes 2 minutes.",
  },
  {
    id: 2,
    num: "2",
    title: "Get quotes from vetted professionals",
    desc: "Compare quotes from verified professionals near you. See prices upfront, read ratings from real customers, choose the right fit.",
  },
  {
    id: 3,
    num: "3",
    title: "Confirm and book",
    desc: "Message or call your professional in-app. Confirm timing, details, and any questions before they arrive.",
  },
  {
    id: 4,
    num: "4",
    title: "Pay securely and rate",
    desc: "The professional completes the job. You confirm satisfaction and release payment. Then rate their work.",
  },
];

/* ─── Mobile card (click / auto-rotate) ─────────────────────── */
function MobileSteps({ activeStep, onStepClick }) {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 rounded-xl overflow-hidden bg-[#F5F5F5]">
      <div className="grid grid-cols-2 gap-[10px] p-[9px]">
        {stepsData.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <div
              key={step.id}
              onClick={() => onStepClick(step.id)}
              style={{ borderRadius: '12px', minHeight: '180px' }}
              className={`p-5 flex flex-col justify-between cursor-pointer transition-all duration-500 border ${
                isActive
                  ? 'bg-white border-[#06C167]/20 shadow-md'
                  : 'bg-[#F2F2F2] border-transparent'
              }`}
            >
              <span className={`font-heading font-semibold text-2xl transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-[#ccc]'}`}>
                {step.num}
              </span>
              <div>
                <p className={`font-body text-xs font-semibold mb-1 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-[#888]'}`}>
                  {step.title}
                </p>
                <p className={`font-body text-[11px] leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-700' : 'text-[#aaa]'}`}>
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-px bg-gray-200 mx-[9px]" />
      <div className="p-[9px]">
        <img
          key={activeStep}
          src={`/images/get-help-images/card-${activeStep}.png`}
          alt={`Step ${activeStep}`}
          draggable="false"
          className="w-full rounded-xl object-cover fade-swap"
          style={{ height: '280px' }}
        />
      </div>
    </div>
  );
}

/* ─── Desktop card grid ──────────────────────────────────────── */
function DesktopSteps({ activeStep }) {
  return (
    <div
      className="flex bg-[#F5F5F5] border border-gray-200 rounded-xl overflow-hidden"
      style={{ width: '1301px' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '346.08px 346.08px',
          columnGap: '9.84px',
          rowGap: '13px',
          padding: '9px',
          flexShrink: 0,
        }}
      >
        {stepsData.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <div
              key={step.id}
              style={{ height: '285px', borderRadius: '12px' }}
              className={`p-8 flex flex-col justify-between transition-all duration-500 border ${
                isActive
                  ? 'bg-white border-[#06C167]/20 shadow-md -translate-y-0.5'
                  : 'bg-[#F2F2F2] border-transparent'
              }`}
            >
              <span className={`font-heading font-semibold text-3xl transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-[#ccc]'}`}>
                {step.num}
              </span>
              <div>
                <p className={`font-body text-sm font-semibold mb-2 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-[#aaa]'}`}>
                  {step.title}
                </p>
                <p className={`font-body text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-700' : 'text-[#bbb]'}`}>
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-200 self-stretch flex-shrink-0" style={{ width: '1px' }} />

      <img
        key={`d-${activeStep}`}
        src={`/images/get-help-images/card-${activeStep}.png`}
        alt={`Step ${activeStep}`}
        draggable="false"
        className="flex-shrink-0 object-cover fade-swap"
        style={{ width: '561px', height: '583px', margin: '9px', borderRadius: '12px' }}
      />
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function Steps() {
  const [activeStep, setActiveStep] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef(null);
  const autoRotateRef = useRef(null);

  /* Detect desktop */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Desktop: scroll-driven step reveal ─── */
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerH = containerRef.current.offsetHeight;
      const vpH = window.innerHeight;
      const maxScroll = containerH - vpH;
      if (maxScroll <= 0) return;
      const scrolledIn = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolledIn / maxScroll);
      // Map 0→1 into steps 1→4 with equal bands
      const idx = Math.min(3, Math.floor(progress * 4));
      setActiveStep(idx + 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  /* ── Mobile: auto-rotate every 5 s ─── */
  useEffect(() => {
    if (isDesktop) {
      clearInterval(autoRotateRef.current);
      return;
    }
    autoRotateRef.current = setInterval(() => {
      setActiveStep(prev => (prev % 4) + 1);
    }, 5000);
    return () => clearInterval(autoRotateRef.current);
  }, [isDesktop]);

  const handleMobileClick = (id) => {
    setActiveStep(id);
    clearInterval(autoRotateRef.current);
    autoRotateRef.current = setInterval(() => {
      setActiveStep(prev => (prev % 4) + 1);
    }, 5000);
  };

  /* ── Shared intro ─── */
  const Intro = () => (
    <div className="mb-8 md:mb-12">
      <h2 className="font-heading font-medium text-2xl md:text-[38px] text-gray-900 tracking-[-0.02em] mb-3">
        Get help in minutes.
      </h2>
      <p
        className="text-[#555]"
        style={{
          fontFamily: "'Google Sans', 'Plus Jakarta Sans', sans-serif",
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '1.15',
          letterSpacing: '-0.02em',
          maxWidth: '590px',
        }}
      >
        Say goodbye to unreliable artisans and surprise pricing. Handi connects you with vetted, rated professionals who show up, do the work, and get paid transparently.
      </p>
    </div>
  );

  /* ── MOBILE render (no scroll-jacking) ─── */
  if (!isDesktop) {
    return (
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-[1380px] mx-auto px-6">
          <Intro />
          <MobileSteps activeStep={activeStep} onStepClick={handleMobileClick} />
        </div>
      </section>
    );
  }

  /* ── DESKTOP render (scroll-jacking) ─── */
  // Container height = 500vh → 400vh scroll space → 100vh per step
  return (
    <div ref={containerRef} style={{ height: '500vh' }}>
      <div
        className="sticky top-0 bg-white overflow-hidden flex flex-col justify-center"
        style={{ height: '100vh' }}
      >
        <div className="max-w-[1380px] mx-auto px-6 w-full">
          <Intro />
          <DesktopSteps activeStep={activeStep} />
        </div>
      </div>
    </div>
  );
}
