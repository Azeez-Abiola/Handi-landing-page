import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import FooterCTA from '../components/FooterCTA';
import FooterLinks from '../components/FooterLinks';

function Blocks({ blocks }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        if (b.type === 'subheading') {
          return <h3 key={i} className="font-body text-sm font-semibold text-gray-900 pt-2">{b.text}</h3>;
        }
        if (b.type === 'list') {
          return (
            <ul key={i} className="space-y-2">
              {b.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 font-body text-sm text-gray-600 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0C9348] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return <p key={i} className="font-body text-sm text-gray-600 leading-relaxed">{b.text}</p>;
      })}
    </div>
  );
}

export default function LegalLayout({ title, subtitle, sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-bg pt-32 md:pt-36 pb-14 px-6">
        <div className="max-w-[1080px] mx-auto">
          <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#00F676] mb-3 block">Legal</span>
          <h1 className="font-heading font-medium text-4xl md:text-[52px] text-white leading-[1.05] tracking-[-0.02em] mb-3">
            {title}
          </h1>
          <p className="font-body text-sm text-white/80 max-w-[340px]">{subtitle}</p>
        </div>
      </section>

      {/* TOC + content */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4 block">On this page</span>
              <nav className="flex flex-col gap-1 border-l border-gray-100">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`font-body text-sm py-1.5 pl-4 -ml-px border-l transition-colors ${
                      activeId === s.id
                        ? 'border-[#0C9348] text-gray-900 font-medium'
                        : 'border-transparent text-gray-400 hover:text-gray-700'
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="divide-y divide-gray-100">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="py-8 scroll-mt-28 first:pt-0">
                <h2 className="font-heading font-semibold text-xl text-gray-900 mb-4">{s.title}</h2>
                <Blocks blocks={s.blocks} />
              </section>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <FooterCTA />
      <FooterLinks />
    </div>
  );
}
