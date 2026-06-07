import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navbar({ variant = 'dark' }) {
  const [open, setOpen] = useState(false);
  const light = variant === 'light';

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 md:py-8">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-105 shrink-0">
          <img
            src="/images/handi-logo-light-green.png"
            alt="Handi Logo"
            className={`h-8 w-auto object-contain ${light ? '' : 'brightness-0 invert'}`}
          />
          <span
            className={light ? 'text-gray-900' : 'text-white'}
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
        </Link>

        {/* Center nav links — desktop */}
        <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-body text-sm transition-colors duration-300 ${light ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons — desktop */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="bg-dark-green text-white font-body font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-[#03361a] hover:-translate-y-0.5"
          >
            Post a Task
          </a>
          <a
            href="#"
            className={`font-body font-semibold text-sm px-5 py-2.5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${light ? 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50' : 'bg-white text-gray-900 border-white/30 hover:bg-gray-100'}`}
          >
            Earn Money on Handi
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden shadow-sm rounded-lg"
        >
          {open ? (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="white" />
              <path d="M13.75 13.75L26.25 26.25M26.25 13.75L13.75 26.25" stroke="black" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          ) : (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="white" />
              <path d="M10.75 20H29.25M10.75 13.75H29.25M10.75 26.25H29.25" stroke="black" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden mx-6 mt-4 rounded-2xl bg-dark-green/95 backdrop-blur-sm border border-white/10 p-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className="font-body text-sm text-white/90 hover:text-white py-2.5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-3 pt-4 border-t border-white/10">
            <a href="#" className="bg-[#0C9348] text-white text-center font-body font-semibold text-sm px-5 py-3 rounded-xl">
              Post a Task
            </a>
            <a href="#" className="bg-white text-gray-900 text-center font-body font-semibold text-sm px-5 py-3 rounded-xl">
              Earn Money on Handi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
