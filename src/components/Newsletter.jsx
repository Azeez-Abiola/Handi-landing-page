import ScrollReveal from './ScrollReveal';

export default function Newsletter() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 select-none">
      <ScrollReveal className="max-w-[1280px] mx-auto bg-[#044422] rounded-[24px] overflow-hidden relative px-8 md:px-14 py-12 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">

        <div className="z-10 max-w-[420px]">
          <h2 className="font-heading font-medium text-2xl md:text-[32px] text-white leading-tight tracking-[-0.02em] mb-7">
            Subscribe to our newsletter for weekly tips and stories.
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your e-mail address"
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 h-12 text-sm text-white placeholder-white/50 outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-[#0C9348] text-white font-body font-semibold text-sm rounded-xl px-6 h-12 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#0a7d3d] hover:-translate-y-0.5 shrink-0"
            >
              Subscribe
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>

        {/* Illustration placeholder — replace with provided asset */}
        <div className="hidden lg:flex items-end justify-center w-[300px] h-[200px] shrink-0">
          <div className="w-full h-full rounded-2xl bg-white/5 border border-dashed border-white/15 flex items-center justify-center">
            <span className="font-body text-xs text-white/30">Illustration</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
