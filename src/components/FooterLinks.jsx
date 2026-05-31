import React from 'react';

export default function FooterLinks() {
  return (
    <footer className="bg-black py-8 border-t border-white/10 select-none">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-body text-white/50">
        
        {/* Left Side Brand Logo, Name & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/images/handi-logo-light-green.png" 
              alt="Handi Logo" 
              className="h-6 w-auto object-contain"
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
              handi
            </span>
          </div>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span className="text-white/40">
            © 2026 Handi. All rights reserved.
          </span>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
          <span className="text-white/20 select-none">|</span>
          <a href="#" className="hover:text-white transition-colors duration-300">
            Terms of Service
          </a>
        </div>

      </div>
    </footer>
  );
}
