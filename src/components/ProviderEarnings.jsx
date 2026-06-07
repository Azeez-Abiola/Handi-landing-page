import ScrollReveal from './ScrollReveal';
import { openProviderApp } from '../lib/appLinks';

const listItems = [
  { title:"Steady Work", desc:"Get 3-10 active jobs per week, no more waiting for referrals.", icon:(<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16602 6.66675H4.99935M14.9993 13.3334H15.8327M11.666 10.0001C11.666 10.9206 10.9198 11.6667 9.99935 11.6667C9.07887 11.6667 8.33268 10.9206 8.33268 10.0001C8.33268 9.07961 9.07887 8.33341 9.99935 8.33341C10.9198 8.33341 11.666 9.07961 11.666 10.0001ZM1.66602 13.3334V6.66675C1.66602 5.28604 2.7853 4.16675 4.16602 4.16675H15.8327C17.2134 4.16675 18.3327 5.28604 18.3327 6.66675V13.3334C18.3327 14.7141 17.2134 15.8334 15.8327 15.8334H4.16602C2.7853 15.8334 1.66602 14.7141 1.66602 13.3334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { title:"Higher Earnings", desc:"Earn ₦100k - ₦200k per week.", icon:(<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.08398 16.6667H5.83398C4.45327 16.6667 3.33398 15.5474 3.33398 14.1667V6.66667C3.33398 5.28595 4.45327 4.16667 5.83398 4.16667H14.1673C15.548 4.16667 16.6673 5.28595 16.6673 6.66667V7.08333M6.66732 4.16667V2.5M13.334 4.16667V2.5M14.1673 12.5002V14.1665L15.4173 15.4169M12.5734 10.3182C14.6991 9.43767 17.1352 10.4474 18.0158 12.573C18.8963 14.6986 17.8866 17.1346 15.7609 18.0151C13.6352 18.8957 11.1991 17.886 10.3186 15.7604C9.4387 13.6354 10.4477 11.1987 12.5734 10.3182Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { title:"Fast Payments", desc:"Get paid within 24 hours, no waiting for customer cash.", icon:(<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.15957 2.19209C9.49715 1.49163 10.5042 1.49163 10.8417 2.19209L12.521 5.67644C12.6568 5.95834 12.9275 6.15305 13.2403 6.19387L17.1061 6.69842C17.8832 6.79985 18.1944 7.7481 17.6259 8.28243L14.7979 10.9404C14.5691 11.1555 14.4657 11.4705 14.5232 11.7776L15.2331 15.5738C15.3759 16.337 14.5612 16.923 13.8722 16.5528L10.4452 14.7112C10.1679 14.5622 9.83337 14.5622 9.55611 14.7112L6.12906 16.5528C5.44012 16.923 4.62544 16.337 4.76816 15.5738L5.47812 11.7776C5.53556 11.4705 5.43217 11.1555 5.20337 10.9404L2.37538 8.28243C1.80687 7.7481 2.11806 6.79985 2.8952 6.69842L6.76103 6.19387C7.07379 6.15305 7.34446 5.95834 7.48032 5.67644L9.15957 2.19209Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { title:"Professional Profile", desc:"Build reputation, get repeat customers.", icon:(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.41667 6.58333V6.375C2.41667 3.2684 5.12161 0.75 8.45833 0.75C11.7951 0.75 14.5 3.2684 14.5 6.375V6.58333M8.45833 14.8274V16.1667H10.9583C13.0294 16.1667 14.7083 14.4877 14.7083 12.4167M2 6.58333H3.25V12H2C1.30964 12 0.75 11.4404 0.75 10.75V7.83333C0.75 7.14298 1.30964 6.58333 2 6.58333ZM13.6667 6.58333H14.9167C15.607 6.58333 16.1667 7.14298 16.1667 7.83333V10.75C16.1667 11.4404 15.607 12 14.9167 12H13.6667V6.58333Z" stroke="white" strokeWidth="1.5" strokeLinecap="square"/></svg>) },
];

function ListItems() {
  return (
    <div className="flex flex-col">
      {listItems.map((item, idx) => (
        <ScrollReveal key={idx} direction="left" delay={100 + idx * 120}>
          <div className={`flex gap-4 py-5 hover:bg-white/5 px-2 rounded-lg transition-colors duration-300 ${idx < listItems.length - 1 ? 'border-b border-white/10' : ''}`}>
            <div className="mt-1 shrink-0">{item.icon}</div>
            <div className="flex flex-col gap-1">
              <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
              <p className="font-body text-xs text-white/60 leading-relaxed max-w-[440px]">{item.desc}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export default function ProviderEarnings() {
  return (
    <section className="bg-hero-bg py-12 md:py-20 px-4 select-none overflow-x-hidden">
      {/* Main card — position:relative so mobile absolute cards use it as origin */}
      <div className="max-w-[1483px] min-h-[759px] bg-[#044422] rounded-[24px] mx-auto p-8 lg:p-16 flex flex-col lg:flex-row items-start lg:items-stretch justify-between relative overflow-hidden shadow-2xl">

        {/* Left Column */}
        <div className="flex flex-col max-w-[540px] justify-center z-10 w-full mb-8 lg:mb-0">
          <ScrollReveal direction="left">
            <span className="text-[#00F676] font-body text-xs font-semibold uppercase tracking-wider mb-3 block">FOR PROVIDERS</span>
            <h2 className="font-heading font-medium text-4xl md:text-[44px] text-white leading-tight mb-5 tracking-[-0.02em]">
              Get Consistent Jobs,<br />Without Chasing Clients.
            </h2>
            <p className="text-white/70 mb-8 max-w-[480px]" style={{fontFamily:"'Google Sans', 'Plus Jakarta Sans', sans-serif",fontWeight:400,fontSize:'16px',lineHeight:'1.15',letterSpacing:'-0.02em'}}>
              You control your schedule. You set your rates. We connect you with customers who need your skills. Fast payment, zero disputes, zero stress.
            </p>
            <button type="button" onClick={openProviderApp} className="inline-flex items-center font-body font-semibold text-sm text-gray-900 bg-white border border-white/30 transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5" style={{width:'221px',height:'44px',borderRadius:'12px',paddingTop:'9px',paddingBottom:'9px',paddingLeft:'15.04px',paddingRight:'15.04px',gap:'12px'}}>
              Start Earning with Handi
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </ScrollReveal>
          {/* List — desktop only */}
          <div className="hidden lg:block"><ListItems /></div>
        </div>

        {/* Right Column — single composed image (technician + floating cards baked in) */}
        <ScrollReveal direction="right" className="relative w-full lg:w-[700px] shrink-0 z-10 flex items-center justify-center">
          <img src="/for-providers-img.png" alt="Expand your earnings" className="w-full h-auto max-w-[640px] select-none pointer-events-none" draggable="false" />
        </ScrollReveal>

        {/* Mobile-only list */}
        <div className="block lg:hidden w-full z-10 mt-8"><ListItems /></div>

      </div>
    </section>
  );
}
