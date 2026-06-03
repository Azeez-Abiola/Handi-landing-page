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

function StepCard({ step, isActive, onClick, onMouseEnter, onMouseLeave, mobile }) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        height: mobile ? undefined : '285px',
        minHeight: mobile ? '160px' : undefined,
        borderRadius: '12px',
      }}
      className={`p-6 lg:p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 border ${
        isActive
          ? 'bg-white border-[#06C167]/20 shadow-md'
          : 'bg-[#F2F2F2] border-transparent'
      }`}
    >
      <span className={`font-heading font-semibold text-2xl lg:text-3xl transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-[#ccc]'}`}>
        {step.num}
      </span>
      <div>
        <p className={`font-body text-xs lg:text-sm font-semibold mb-1 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-[#aaa]'}`}>
          {step.title}
        </p>
        <p className={`font-body text-[11px] lg:text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-700' : 'text-[#bbb]'}`}>
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function Steps() {
  // Initialise synchronously so there's never a flash of wrong layout
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  );
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef(null);
  const autoRotateRef = useRef(null);

  /* Keep isDesktop in sync with window width */
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ── Desktop: scroll drives the active step ──────────────────── */
  useEffect(() => {
    if (!isDesktop) return;

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // How far we have scrolled INTO the container past the top of the viewport
      const scrolledIn = Math.max(0, -top);
      // Total amount we can scroll before the container bottom exits the viewport
      const maxScroll = height - vh;
      if (maxScroll <= 0) return;
      const progress = Math.min(1, scrolledIn / maxScroll);
      // 4 equal bands: 0–0.25 → step1, 0.25–0.5 → step2, etc.
      setActiveStep(Math.min(4, Math.floor(progress * 4) + 1));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // sync on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [isDesktop]);

  /* ── Mobile: auto-rotate every 5 s ──────────────────────────── */
  useEffect(() => {
    if (isDesktop) {
      clearInterval(autoRotateRef.current);
      return;
    }
    autoRotateRef.current = setInterval(
      () => setActiveStep(p => (p % 4) + 1),
      5000
    );
    return () => clearInterval(autoRotateRef.current);
  }, [isDesktop]);

  const handleMobileClick = id => {
    setActiveStep(id);
    clearInterval(autoRotateRef.current);
    autoRotateRef.current = setInterval(
      () => setActiveStep(p => (p % 4) + 1),
      5000
    );
  };

  const stopAuto = () => clearInterval(autoRotateRef.current);
  const startAuto = () => {
    if (!isDesktop) return;
    stopAuto();
    autoRotateRef.current = setInterval(
      () => setActiveStep(p => (p % 4) + 1),
      5000
    );
  };

  /* ── Shared intro block ──────────────────────────────────────── */
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
        Say goodbye to unreliable artisans and surprise pricing. Handi connects you
        with vetted, rated professionals who show up, do the work, and get paid
        transparently.
      </p>
    </div>
  );

  /* ── MOBILE layout (normal document flow) ────────────────────── */
  if (!isDesktop) {
    return (
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-[1380px] mx-auto px-6">
          <Intro />
          <div className="flex flex-col gap-4 border border-gray-200 rounded-xl overflow-hidden bg-[#F5F5F5]">
            <div className="grid grid-cols-2 gap-[10px] p-[9px]">
              {stepsData.map(step => (
                <StepCard
                  key={step.id}
                  step={step}
                  isActive={activeStep === step.id}
                  onClick={() => handleMobileClick(step.id)}
                  mobile
                />
              ))}
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
        </div>
      </section>
    );
  }

  /* ── DESKTOP layout — scroll-jacking ─────────────────────────── */
  // Container is 300 vh tall.
  // Sticky element is 100 vh → 200 vh of scroll space → 50 vh per step.
  // After 200 vh scroll the container bottom exits the viewport and the
  // next section naturally scrolls into view — no JavaScript needed.
  return (
    <div ref={containerRef} style={{ height: '300vh' }}>
      <div
        className="sticky top-0 bg-white flex flex-col justify-center"
        style={{ height: '100vh' }}
      >
        <div className="max-w-[1380px] mx-auto px-6 w-full">
          <Intro />

          {/* Desktop card grid + image */}
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
              {stepsData.map(step => (
                <StepCard
                  key={step.id}
                  step={step}
                  isActive={activeStep === step.id}
                  onMouseEnter={stopAuto}
                  onMouseLeave={startAuto}
                />
              ))}
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
        </div>
      </div>
    </div>
  );
}
