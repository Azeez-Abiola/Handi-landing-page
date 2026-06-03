import ScrollReveal from './ScrollReveal';

export default function FooterCTA() {
  const images = [
    "/images/handi-img1.png",
    "/images/handi-img2.png",
    "/images/handi-img3.png",
    "/images/handi-img4.png",
    "/images/handi-img5.png"
  ];

  const repeatedImages = [...images, ...images, ...images, ...images];

  return (
    <section className="bg-black py-20 md:py-24 select-none relative overflow-hidden flex flex-col items-center justify-center min-h-[480px] md:min-h-[560px]">

      {/* Background carousel */}
      <div className="absolute inset-0 flex items-center opacity-75 md:opacity-90 pointer-events-none z-0">
        <div className="w-full overflow-hidden relative">
          <div className="flex gap-6 w-max animate-marquee py-4" style={{ willChange: 'transform' }}>
            {repeatedImages.map((img, idx) => (
              <div
                key={idx}
                className="w-[150px] md:w-[230px] h-[220px] md:h-[320px] rounded-2xl overflow-hidden shadow-2xl shrink-0 brightness-[0.75] border border-white/5"
              >
                <img src={img} alt="" className="w-full h-full object-cover" draggable="false" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <ScrollReveal className="w-full max-w-[500px] z-10 px-6 flex flex-col items-center justify-center text-center">
        <h2
          className="font-heading font-medium text-3xl md:text-[40px] leading-tight text-white mb-8 tracking-[-0.02em]"
          style={{ maxWidth: '381px' }}
        >
          Ready to fix it?<br />Download Handi now.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="bg-[#0C9348] text-white font-body font-semibold text-sm flex items-center justify-center transition-all duration-300 hover:bg-[#096a34] hover:-translate-y-0.5"
            style={{ width: '135px', height: '44px', borderRadius: '12px', paddingTop: '9px', paddingBottom: '9px', paddingLeft: '15.04px', paddingRight: '15.04px', gap: '12px' }}
          >
            Post a Task
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#"
            className="bg-white text-gray-900 font-body font-semibold text-sm flex items-center justify-center border transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5"
            style={{ width: '203px', height: '44px', borderRadius: '12px', paddingTop: '9px', paddingBottom: '9px', paddingLeft: '15.04px', paddingRight: '15.04px', gap: '12px', borderWidth: '1px' }}
          >
            Earn Money on Handi
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </ScrollReveal>

    </section>
  );
}
