import React from 'react';
import ScrollReveal from './ScrollReveal';

const ArrowRightIcon = () => (
  <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.22461 0.373781L12.1582 5.30739L7.22461 10.241M12.1582 5.30739L0.000421464 5.30739" stroke="black" strokeWidth="1.0572"/>
  </svg>
);

const PaymentDetailsIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.57729 2.81916H0.529297M7.57729 2.81916C7.57729 1.55361 8.60233 0.528564 9.86788 0.528564C11.1334 0.528564 12.1585 1.55361 12.1585 2.81916C12.1585 4.08472 11.1334 5.10976 9.86788 5.10976C8.60233 5.10976 7.57729 4.08472 7.57729 2.81916ZM12.1585 9.86715H6.52009M6.52009 9.86715C6.52009 11.1327 5.49505 12.1577 4.22949 12.1577C2.96394 12.1577 1.93889 11.1327 1.93889 9.86715M6.52009 9.86715C6.52009 8.6016 5.49505 7.57655 4.22949 7.57655C2.96394 7.57655 1.93889 8.6016 1.93889 9.86715M1.93889 9.86715H0.529297" stroke="black" strokeWidth="1.0572" strokeLinecap="square"/>
  </svg>
);

const VerifiedIcon = () => (
  <span className="relative inline-block" style={{width: '12.76px', height: '12.64px'}}>
    <svg
      width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{position: 'absolute', top: '1.06px', left: '1px', width: '10.76px', height: '10.64px'}}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M4.34073 0.473941C4.88978 -0.157979 5.87095 -0.157981 6.42 0.47394L6.84768 0.966174C6.91858 1.04777 7.02654 1.08707 7.1333 1.07013L7.77733 0.967968C8.60412 0.836813 9.35574 1.46749 9.37014 2.3045L9.38137 2.95648C9.38323 3.06456 9.44067 3.16406 9.53334 3.21971L10.0924 3.55542C10.81 3.9864 10.9804 4.95266 10.4534 5.6031L10.0429 6.10976C9.97489 6.19376 9.95494 6.30689 9.99016 6.4091L10.2026 7.0256C10.4753 7.81705 9.98475 8.66677 9.16297 8.8263L8.52284 8.95057C8.41672 8.97117 8.32871 9.04501 8.29 9.14594L8.05646 9.75477C7.75665 10.5364 6.83466 10.8719 6.10259 10.4659L5.53234 10.1496C5.4378 10.0972 5.32292 10.0972 5.22839 10.1496L4.65815 10.4659C3.92608 10.8719 3.00408 10.5364 2.70427 9.75477L2.47073 9.14594C2.43202 9.04501 2.34401 8.97117 2.23789 8.95057L1.59776 8.8263C0.775979 8.66677 0.285394 7.81705 0.558128 7.0256L0.770573 6.4091C0.805791 6.30689 0.785842 6.19376 0.717793 6.10976L0.307304 5.6031C-0.219674 4.95266 -0.0492985 3.9864 0.668365 3.55542L1.22739 3.21971C1.32006 3.16406 1.3775 3.06456 1.37936 2.95648L1.39059 2.3045C1.40499 1.4675 2.15661 0.836813 2.9834 0.967968L3.62743 1.07013C3.73419 1.08707 3.84215 1.04777 3.91304 0.966175L4.34073 0.473941ZM7.0864 4.89775C7.29414 4.69001 7.29414 4.3532 7.0864 4.14546C6.87866 3.93772 6.54184 3.93772 6.3341 4.14546L4.84841 5.63115L4.42663 5.20936C4.21889 5.00162 3.88207 5.00162 3.67433 5.20936C3.46659 5.4171 3.46659 5.75392 3.67433 5.96166L4.28419 6.57152C4.5958 6.88313 5.10102 6.88313 5.41263 6.57152L7.0864 4.89775Z" fill="#C88149"/>
    </svg>
  </span>
);

export default function ProviderEarnings() {
  const listItems = [
    {
      title: "Steady Work",
      desc: "Get 3-10 active jobs per week, no more waiting for referrals.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16602 6.66675H4.99935M14.9993 13.3334H15.8327M11.666 10.0001C11.666 10.9206 10.9198 11.6667 9.99935 11.6667C9.07887 11.6667 8.33268 10.9206 8.33268 10.0001C8.33268 9.07961 9.07887 8.33341 9.99935 8.33341C10.9198 8.33341 11.666 9.07961 11.666 10.0001ZM1.66602 13.3334V6.66675C1.66602 5.28604 2.7853 4.16675 4.16602 4.16675H15.8327C17.2134 4.16675 18.3327 5.28604 18.3327 6.66675V13.3334C18.3327 14.7141 17.2134 15.8334 15.8327 15.8334H4.16602C2.7853 15.8334 1.66602 14.7141 1.66602 13.3334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Higher Earnings",
      desc: "Earn ₦100k - ₦200k per week.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.08398 16.6667H5.83398C4.45327 16.6667 3.33398 15.5474 3.33398 14.1667V6.66667C3.33398 5.28595 4.45327 4.16667 5.83398 4.16667H14.1673C15.548 4.16667 16.6673 5.28595 16.6673 6.66667V7.08333M6.66732 4.16667V2.5M13.334 4.16667V2.5M14.1673 12.5002V14.1665L15.4173 15.4169M12.5734 10.3182C14.6991 9.43767 17.1352 10.4474 18.0158 12.573C18.8963 14.6986 17.8866 17.1346 15.7609 18.0151C13.6352 18.8957 11.1991 17.886 10.3186 15.7604C9.4387 13.6354 10.4477 11.1987 12.5734 10.3182Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Fast Payments",
      desc: "Get paid within 24 hours, no waiting for customer cash.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.15957 2.19209C9.49715 1.49163 10.5042 1.49163 10.8417 2.19209L12.521 5.67644C12.6568 5.95834 12.9275 6.15305 13.2403 6.19387L17.1061 6.69842C17.8832 6.79985 18.1944 7.7481 17.6259 8.28243L14.7979 10.9404C14.5691 11.1555 14.4657 11.4705 14.5232 11.7776L15.2331 15.5738C15.3759 16.337 14.5612 16.923 13.8722 16.5528L10.4452 14.7112C10.1679 14.5622 9.83337 14.5622 9.55611 14.7112L6.12906 16.5528C5.44012 16.923 4.62544 16.337 4.76816 15.5738L5.47812 11.7776C5.53556 11.4705 5.43217 11.1555 5.20337 10.9404L2.37538 8.28243C1.80687 7.7481 2.11806 6.79985 2.8952 6.69842L6.76103 6.19387C7.07379 6.15305 7.34446 5.95834 7.48032 5.67644L9.15957 2.19209Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Professional Profile",
      desc: "Build reputation, get repeat customers.",
      icon: (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.41667 6.58333V6.375C2.41667 3.2684 5.12161 0.75 8.45833 0.75C11.7951 0.75 14.5 3.2684 14.5 6.375V6.58333M8.45833 14.8274V16.1667H10.9583C13.0294 16.1667 14.7083 14.4877 14.7083 12.4167M2 6.58333H3.25V12H2C1.30964 12 0.75 11.4404 0.75 10.75V7.83333C0.75 7.14298 1.30964 6.58333 2 6.58333ZM13.6667 6.58333H14.9167C15.607 6.58333 16.1667 7.14298 16.1667 7.83333V10.75C16.1667 11.4404 15.607 12 14.9167 12H13.6667V6.58333Z" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-hero-bg py-12 md:py-20 px-4 select-none overflow-x-hidden">
      <div
        className="max-w-[1483px] min-h-[759px] bg-[#044422] rounded-[24px] mx-auto p-8 lg:p-16 flex flex-col lg:flex-row items-center lg:items-stretch justify-between relative overflow-hidden shadow-2xl"
      >

        {/* Left Column: Text & Features */}
        <div className="flex flex-col max-w-[540px] justify-center z-10 w-full mb-12 lg:mb-0">
          <ScrollReveal direction="left">
            <span className="text-[#00F676] font-body text-xs font-semibold uppercase tracking-wider mb-3 block">
              FOR PROVIDERS
            </span>
            <h2 className="font-heading font-medium text-4xl md:text-[44px] text-white leading-tight mb-5 tracking-[-0.02em]">
              Get Consistent Jobs,<br />Without Chasing Clients.
            </h2>
            <p
              className="text-white/70 mb-8 max-w-[480px]"
              style={{
                fontFamily: "'Google Sans', 'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
              }}
            >
              You control your schedule. You set your rates.<br />We connect you with customers who need your<br />skills. Fast payment, zero disputes, zero stress.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-body font-semibold text-sm text-gray-900 bg-white border border-white/30 transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5"
              style={{
                width: '221px',
                height: '44px',
                borderRadius: '12px',
                paddingTop: '9px',
                paddingBottom: '9px',
                paddingLeft: '15.04px',
                paddingRight: '15.04px',
                gap: '12px',
              }}
            >
              Start Earning with Handi
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </ScrollReveal>

          {/* List items — each slides in from left with stagger */}
          <div className="flex flex-col">
            {listItems.map((item, idx) => (
              <ScrollReveal key={idx} direction="left" delay={100 + idx * 120}>
                <div className={`flex gap-4 py-5 hover:bg-white/5 px-2 rounded-lg transition-colors duration-300 ${idx < listItems.length - 1 ? 'border-b border-white/10' : ''}`}>
                  <div className="mt-1 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-white/60 leading-relaxed max-w-[440px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right Column: Layered Collage & Floating cards */}
        <ScrollReveal direction="right" className="relative w-full lg:w-[700px] flex justify-center lg:block items-center h-auto lg:min-h-[680px] shrink-0 z-10">

          {/* Main Technician Image */}
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#E0FAF2',
            }}
            className="shadow-2xl relative lg:absolute lg:top-[33px] lg:left-[161px] select-none pointer-events-none w-full lg:w-[485px] h-[340px] sm:h-[420px] lg:h-[566px]"
          >
            <img
              src="/images/expand-yourearnings-img.png"
              alt="Expand your earnings"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              draggable="false"
            />
          </div>

          {/* 1. Earnings Card (Floating Left-Center) */}
          <div
            style={{
              width: '310.11px',
              height: 'auto',
              borderRadius: '11.42px',
              paddingTop: '16.92px',
              paddingRight: '22.55px',
              paddingBottom: '16.92px',
              paddingLeft: '22.55px',
              gap: '23.57px',
            }}
            className="absolute bg-white text-gray-900 shadow-2xl z-20 hidden lg:flex flex-col justify-between transition-transform duration-300 hover:scale-105 select-none lg:top-[170px] lg:left-[-12px]"
          >
            <span
              style={{
                fontFamily: "'Google Sans Flex', 'Google Sans', 'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: '9.87px',
                lineHeight: '1.15',
                letterSpacing: '-0.01em',
              }}
              className="text-gray-400 uppercase block"
            >
              Earnings this week
            </span>
            <h3 className="font-heading text-2xl md:text-[28px] font-bold text-gray-900 leading-none">
              ₦180,000.00
            </h3>
            <div className="flex gap-2">
              <button className="bg-gray-100 text-gray-900 rounded-xl px-4 py-1.5 text-xs font-body font-semibold flex items-center gap-1.5 transition-colors duration-300 hover:bg-gray-200">
                Withdraw
                <ArrowRightIcon />
              </button>
              <button className="border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-body font-semibold flex items-center gap-1.5 transition-colors duration-300 hover:bg-gray-50 hover:border-gray-900">
                Payment details
                <PaymentDetailsIcon />
              </button>
            </div>
          </div>

          {/* 2. Progress Badge Card (Floating Top-Right) */}
          <div
            className="absolute bg-white text-gray-900 shadow-2xl z-20 hidden lg:flex flex-col justify-between transition-transform duration-300 hover:scale-105 lg:top-[16px] lg:left-[442px]"
            style={{
              width: '271px',
              height: '72.89px',
              gap: '12.77px',
              borderRadius: '10.24px',
              padding: '14.9px',
            }}
          >
            <div className="flex justify-between items-center">
              <span className="font-heading text-sm font-extrabold text-gray-900 leading-none">
                10 <span className="text-gray-400 font-normal">/50 jobs done</span>
              </span>
              <span className="bg-[#FFF5E6] text-[#C88149] text-[9px] font-extrabold px-2 py-0.5 rounded flex items-center gap-1">
                <VerifiedIcon /> VERIFIED
              </span>
            </div>

            {/* Active green progress bar */}
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#00F676] h-full w-[25%]" />
            </div>
          </div>

          {/* 3. Install Ceiling Fan Active Order Card (Floating Bottom-Right) */}
          <div
            className="absolute bg-white text-gray-900 shadow-2xl z-20 hidden lg:flex flex-col justify-between transition-transform duration-300 hover:scale-105 lg:top-[462px] lg:left-[411px]"
            style={{
              width: '302px',
              height: 'auto',
              minHeight: '166.86px',
              gap: '12.89px',
              paddingTop: '12.89px',
              paddingRight: '8.05px',
              paddingBottom: '12.89px',
              paddingLeft: '8.05px',
              borderRadius: '12.89px',
              borderBottomWidth: '0.81px',
              borderColor: '#e5e7eb',
            }}
          >
            <div className="flex justify-between items-start mb-1 px-1">
              <h4 className="font-heading text-xs font-bold text-gray-900 leading-none">Install Ceiling Fan</h4>
              <span className="font-heading text-xs font-extrabold text-[#0C9348] leading-none">₦10,000.00</span>
            </div>

            <p className="font-body text-[10px] text-gray-500 leading-normal mb-2 px-1">
              I need a ceiling fan installed in my living room to improve airflow.
            </p>

            {/* Metadata (Location & Date) */}
            <div className="flex flex-col gap-1 border-b border-gray-100 pb-2 mb-2 px-1">
              <div className="flex items-center gap-1.5 text-[9px] text-gray-400 font-medium">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M7.91967 5.36901C7.91967 6.18442 7.25864 6.84545 6.44323 6.84545C5.62781 6.84545 4.96678 6.18442 4.96678 5.36901C4.96678 4.55359 5.62781 3.89256 6.44323 3.89256C7.25864 3.89256 7.91967 4.55359 7.91967 5.36901Z" stroke="#393939" strokeWidth="1.208"/>
                  <path d="M10.3357 5.36901C10.3357 8.63087 6.44323 11.4857 6.44323 11.4857C6.44323 11.4857 2.55078 8.63087 2.55078 5.36901C2.55078 3.21927 4.29349 1.47656 6.44323 1.47656C8.59296 1.47656 10.3357 3.21927 10.3357 5.36901Z" stroke="#393939" strokeWidth="1.208"/>
                </svg>
                <span className="truncate">Greenfield Estates, 200034, Lekki, Lagos</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] text-gray-400 font-medium">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <g clipPath="url(#clip0_6109_3670)">
                    <path d="M4.16123 2.55034H2.55056C2.25405 2.55034 2.01367 2.79071 2.01367 3.08723V4.96634M4.16123 2.55034H8.72478M4.16123 2.55034V1.47656M8.72478 2.55034H10.3354C10.632 2.55034 10.8723 2.79071 10.8723 3.08723V4.96634M8.72478 2.55034V1.47656M6.04034 10.8721H2.55056C2.25405 10.8721 2.01367 10.6317 2.01367 10.3352V4.96634M2.01367 4.96634H10.8723M10.8723 4.96634V6.57701M11.4092 8.45612L9.08271 11.409L7.91945 10.2279" stroke="#393939" strokeWidth="1.208" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_6109_3670">
                      <rect width="12.8853" height="12.8853" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span>On 15th July, 2026</span>
              </div>
            </div>

            {/* Provider details */}
            <div className="flex items-center gap-2 px-1">
              <div className="w-7 h-7 rounded-full bg-[#EBF5FF] text-[#0066CC] font-heading text-[10px] font-bold flex items-center justify-center shrink-0">
                CO
              </div>
              <div className="flex flex-col">
                <span className="font-body text-[10px] font-bold text-gray-900 leading-none mb-0.5">Chisom Okeke</span>
                <span className="text-[8px] text-gray-400">11 km • 2 mins ago</span>
              </div>
            </div>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}
