import { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Steps() {
  const [activeStep, setActiveStep] = useState(1);
  const autoRotateInterval = useRef(null);

  const stepsData = [
    {
      id: 1,
      num: "1",
      desc: <>Download the Handi Mobile app,<br />complete the sign up process and<br />tell us what you need done.</>
    },
    {
      id: 2,
      num: "2",
      desc: <>Trusted service providers will submit<br />offers, and you can review, pick a<br />provider and securely make payment.</>
    },
    {
      id: 3,
      num: "3",
      desc: <>Chat and make calls in-app to<br />confirm details and go over the<br />specifics and delivery details.</>
    },
    {
      id: 4,
      num: "4",
      desc: <>Your payment sits in escrow until<br />you mark the service as delivered,<br />so you're always covered.</>
    }
  ];

  const startAutoRotation = () => {
    stopAutoRotation();
    autoRotateInterval.current = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 6000);
  };

  const stopAutoRotation = () => {
    if (autoRotateInterval.current) {
      clearInterval(autoRotateInterval.current);
    }
  };

  useEffect(() => {
    startAutoRotation();
    return () => stopAutoRotation();
  }, []);

  const handleStepClick = (id) => {
    setActiveStep(id);
    startAutoRotation(); // reset interval timer on click
  };

  return (
    <section className="bg-white pt-24 pb-16">
      <div className="max-w-[1380px] mx-auto px-6">

        {/* Intro copy */}
        <ScrollReveal>
          <div className="mb-10 md:mb-14">
            <h2 className="font-heading font-medium text-2xl md:text-[38px] text-gray-900 tracking-[-0.02em] mb-3">
              Get help in minutes.
            </h2>
            <p className="font-body text-[#555] text-sm md:text-base leading-relaxed max-w-[500px]">
              Say goodbye to unreliable artisans and surprise pricing. Handi connects you with vetted, rated professionals who show up, do the work, and get paid transparently.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile: stacked layout. Desktop: side-by-side with fixed widths */}
        <ScrollReveal delay={100}>

          {/* ── MOBILE layout ── */}
          <div className="lg:hidden flex flex-col gap-4 border border-gray-200 rounded-xl overflow-hidden bg-[#F5F5F5]">
            <div className="grid grid-cols-2 gap-[10px] p-[9px]">
              {stepsData.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    style={{ borderRadius: '12px', minHeight: '180px' }}
                    className={`p-5 flex flex-col justify-between cursor-pointer transition-all duration-500 border ${
                      isActive
                        ? 'bg-white border-[#06C167]/20 shadow-md'
                        : 'bg-[#F2F2F2] border-transparent'
                    }`}
                  >
                    <span className={`font-heading font-semibold text-2xl transition-colors duration-300 ${
                      isActive ? 'text-gray-900' : 'text-[#ccc]'
                    }`}>{step.num}</span>
                    <p className={`font-body text-xs leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-gray-900 font-medium' : 'text-[#888]'
                    }`}>{step.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="h-px bg-gray-200 mx-[9px]" />
            <div className="p-[9px]">
              <img
                key={activeStep}
                src={`/images/get-help-images/card-${activeStep}.png`}
                alt={`Step ${activeStep} illustration`}
                draggable="false"
                className="w-full rounded-xl object-cover fade-swap"
                style={{ height: '280px' }}
              />
            </div>
          </div>

          {/* ── DESKTOP layout ── */}
          <div className="hidden lg:flex bg-[#F5F5F5] border border-gray-200 rounded-xl overflow-hidden" style={{ width: '1301px' }}>
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
                    onClick={() => handleStepClick(step.id)}
                    onMouseEnter={stopAutoRotation}
                    onMouseLeave={startAutoRotation}
                    style={{ height: '285px', borderRadius: '12px' }}
                    className={`p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 border ${
                      isActive
                        ? 'bg-white border-[#06C167]/20 shadow-md -translate-y-0.5'
                        : 'bg-[#F2F2F2] border-transparent hover:bg-gray-100'
                    }`}
                  >
                    <span className={`font-heading font-semibold text-3xl transition-colors duration-300 ${
                      isActive ? 'text-gray-900' : 'text-[#ccc]'
                    }`}>{step.num}</span>
                    <p className={`font-body text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-gray-900 font-medium' : 'text-[#888]'
                    }`}>{step.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="bg-gray-200 self-stretch flex-shrink-0" style={{ width: '1px' }} />
            <img
              key={`d-${activeStep}`}
              src={`/images/get-help-images/card-${activeStep}.png`}
              alt={`Step ${activeStep} illustration`}
              draggable="false"
              className="flex-shrink-0 object-cover fade-swap"
              style={{ width: '561px', height: '583px', margin: '9px', borderRadius: '12px' }}
            />
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
