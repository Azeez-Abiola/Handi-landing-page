import { Link } from 'react-router-dom';

const navColumns = [
  {
    heading: 'Navigation',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Security', to: '/privacy' },
    ],
  },
];

const socialIcons = [
  {
    label: 'Facebook',
    href: '#',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
];

export default function FooterLinks() {
  return (
    <footer className="bg-black select-none">
      <div className="max-w-[1200px] mx-auto px-6 py-14 flex flex-col lg:flex-row justify-between gap-12">

        {/* Brand */}
        <div className="shrink-0">
          <div className="flex items-center gap-2">
            <img
              src="/images/handi-logo-light-green.webp"
              alt="Handi Logo"
              className="h-6 w-auto object-contain"
            />
            <span
              className="text-white"
              style={{
                fontFamily: "'Google Sans Flex', 'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '18px',
                letterSpacing: '-0.01em',
              }}
            >
              Handi
            </span>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

          {navColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <span className="font-body text-sm font-bold text-white">{col.heading}</span>
              <div className="flex flex-col gap-3">
                {col.links.map((link) =>
                  link.to ? (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="font-body text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-body text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}

          {/* Contact Us column */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-sm font-bold text-white">Contact Us</span>
            <div className="flex flex-col gap-3">
              <span className="font-body text-sm text-white/50">
                290a Ajose Adeogun St,<br />Lagos, 106104, Nigeria
              </span>
              <a
                href="mailto:support@tryhandi.com"
                className="font-body text-sm text-white/50 hover:text-white transition-colors duration-300"
              >
                support@tryhandi.com
              </a>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialIcons.map((icon) => (
                <a
                  key={icon.label}
                  href={icon.href}
                  aria-label={icon.label}
                  className="text-white/50 hover:text-white transition-colors duration-300"
                >
                  {icon.svg}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom strip — copyright far left */}
      <div className="border-t border-white/10 py-5 px-6">
        <p className="max-w-[1200px] mx-auto font-body text-xs text-white/60">
          © 2026 Handi. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
