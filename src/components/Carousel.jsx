import { useRef, useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Carousel() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const categories = [
    { name: "Cleaning", img: "/images/handi-img1.webp" },
    { name: "General Repairs", img: "/images/handi-img2.webp" },
    { name: "Home Beauty Services", img: "/images/handi-img3.webp" },
    { name: "Plumbing", img: "/images/handi-img4.webp" },
    { name: "Electrical Repairs", img: "/images/handi-img5.webp" },
    { name: "Chefs", img: "/images/handi-img6.webp" }
  ];

  const scrollAmount = 315; // card width (291px) + gap (24px)

  // Auto-scrolling interval effect
  useEffect(() => {
    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (trackRef.current && !isDragging) {
          const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
          // Check if we are at the end of the carousel
          if (scrollLeft + clientWidth >= scrollWidth - 20) {
            // Smoothly return to the start
            trackRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            // Scroll forward by one card amount
            trackRef.current.scrollBy({
              left: scrollAmount,
              behavior: 'smooth'
            });
          }
        }
      }, 5000); // Scroll every 5 seconds
    };

    startAutoScroll();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isDragging]);

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Click & Drag-to-Scroll support
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    trackRef.current.style.scrollBehavior = 'smooth';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    trackRef.current.style.scrollBehavior = 'smooth';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-white py-14 md:py-24 overflow-hidden select-none">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Block */}
        <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-12">
          <h2
            className="font-heading text-gray-900"
            style={{ fontWeight: 500, fontSize: '33.14px', lineHeight: '1.05', letterSpacing: '-0.02em', maxWidth: '382px' }}
          >
            1000+ Vetted Professionals Ready to Help — Today
          </h2>
          
          {/* Arrows — desktop: beside heading; hidden on mobile (shown below carousel) */}
          <div className="hidden md:flex gap-3 self-end">
            <button onClick={handlePrev} className="border border-gray-200 bg-white text-gray-900 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:border-gray-900 active:scale-95" style={{ width: '32px', height: '32px', borderRadius: '35.3px' }} aria-label="Previous category">
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 5.31676L5.31655 0.000195503L6.0654 0.749041L2.0272 4.78725L12.7512 4.78725V5.84627L2.02721 5.84627L6.0654 9.88445L5.31655 10.6333L0 5.31676Z" fill="#888888"/></svg>
            </button>
            <button onClick={handleNext} className="border border-gray-200 bg-white text-gray-900 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:border-gray-900 active:scale-95" style={{ width: '32px', height: '32px', borderRadius: '35.3px' }} aria-label="Next category">
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180"><path fillRule="evenodd" clipRule="evenodd" d="M0 5.31676L5.31655 0.000195503L6.0654 0.749041L2.0272 4.78725L12.7512 4.78725V5.84627L2.02721 5.84627L6.0654 9.88445L5.31655 10.6333L0 5.31676Z" fill="#888888"/></svg>
            </button>
          </div>
        </div>
        </ScrollReveal>

        {/* Draggable Snapping Track */}
        <div className={`relative w-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
          <div 
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-5 pl-6 -ml-6 w-[calc(100%+48px)]"
          >
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className="flex-none w-[291px] h-[367px] rounded-[10px] relative overflow-hidden snap-start shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
              >
                <img
                  src={cat.img}
                  alt={`${cat.name} Category`}
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-105"
                  draggable="false"
                  loading="lazy"
                  decoding="async"
                />
                {/* Label is baked into each image — no text overlay (avoids the doubled label) */}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-only arrows — below carousel, left-aligned */}
        <div className="flex md:hidden gap-3 mt-5">
          <button onClick={handlePrev} className="border border-gray-200 bg-white text-gray-900 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:border-gray-900 active:scale-95" style={{ width: '40px', height: '40px', borderRadius: '50%' }} aria-label="Previous category">
            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 5.31676L5.31655 0.000195503L6.0654 0.749041L2.0272 4.78725L12.7512 4.78725V5.84627L2.02721 5.84627L6.0654 9.88445L5.31655 10.6333L0 5.31676Z" fill="#888888"/></svg>
          </button>
          <button onClick={handleNext} className="border border-gray-200 bg-white text-gray-900 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:border-gray-900 active:scale-95" style={{ width: '40px', height: '40px', borderRadius: '50%' }} aria-label="Next category">
            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180"><path fillRule="evenodd" clipRule="evenodd" d="M0 5.31676L5.31655 0.000195503L6.0654 0.749041L2.0272 4.78725L12.7512 4.78725V5.84627L2.02721 5.84627L6.0654 9.88445L5.31655 10.6333L0 5.31676Z" fill="#888888"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}
