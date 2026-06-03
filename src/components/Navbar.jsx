import React from 'react';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-center items-center">
        <a href="#" className="flex items-center justify-center gap-2.5 transition-transform duration-300 hover:scale-105">
          <img 
            src="/images/handi-logo-light-green.png" 
            alt="Handi Logo" 
            className="h-8 w-auto object-contain"
          />
          <span 
            className="text-white"
            style={{
              fontFamily: "'Google Sans Flex', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '1.15',
              letterSpacing: '-0.01em',
            }}
          >
            Handi
          </span>
        </a>
      </div>
    </header>
  );
}
