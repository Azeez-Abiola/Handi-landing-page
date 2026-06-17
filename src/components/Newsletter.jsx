import ScrollReveal from './ScrollReveal';

export default function Newsletter() {
  return (
    <section className="bg-hero-bg py-12 md:py-16 px-4 select-none">
      <ScrollReveal className="max-w-[1483px] mx-auto bg-[#044422] rounded-[24px] overflow-hidden relative px-8 md:px-14 py-12 md:py-16 lg:min-h-[420px] flex flex-col lg:flex-row items-center justify-between gap-8">

        <div className="z-10 max-w-[420px]">
          <h2 className="font-heading font-medium text-2xl md:text-[32px] text-white leading-tight tracking-[-0.02em] mb-7">
            Subscribe to our newsletter for weekly tips and stories.
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <input
              type="email"
              placeholder="Enter your e-mail address"
              className="w-full max-w-[376px] sm:w-[409px] sm:max-w-none h-[45px] rounded-[12px] bg-white/10 border border-white/20 px-4 text-sm text-white placeholder-white/50 outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="self-start sm:self-auto w-[128px] h-[45px] rounded-[12px] bg-[#0C9348] text-white font-body font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#0a7d3d] hover:-translate-y-0.5 shrink-0"
            >
              Subscribe
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>

        {/* Newsletter illustration — in flow on mobile, bottom-anchored on desktop */}
        <div className="w-full lg:w-0 shrink-0 flex items-end justify-center">
          <img
            src="/images/illustrations/lady-on-phone.webp"
            alt=""
            draggable="false"
            loading="lazy"
            decoding="async"
            className="w-full max-w-[379px] object-contain object-bottom lg:w-auto lg:max-w-none lg:h-[522px] lg:absolute lg:top-[64px] lg:right-[7%]"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
