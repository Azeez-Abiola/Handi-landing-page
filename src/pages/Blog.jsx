import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import FooterCTA from '../components/FooterCTA';
import FooterLinks from '../components/FooterLinks';
import ScrollReveal from '../components/ScrollReveal';

const categories = ['All', 'For Customers', 'For Professionals', 'Home Maintenance', 'Lagos Living'];
const posts = Array.from({ length: 9 });

function Meta() {
  return (
    <div className="flex items-center gap-2 font-body text-[11px] text-gray-400">
      <span>[Author]</span><span>•</span><span>Jan 3</span><span>•</span><span>6 min read</span>
    </div>
  );
}

export default function Blog() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [active, setActive] = useState('All');

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      {/* Hero + featured post */}
      <section className="bg-hero-bg pt-32 md:pt-36 pb-12 px-6">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h1 className="font-heading font-medium text-4xl md:text-[52px] text-white leading-[1.05] tracking-[-0.02em] mb-3">
              The Handi Blog
            </h1>
            <p className="font-body text-sm text-white/80 mb-10">
              Tips, stories, and insights for getting things done right in Lagos
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#044422] rounded-[24px] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col justify-between min-h-[280px]">
                <div>
                  <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#00F676] mb-4 block">Latest Post</span>
                  <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-3">[Blog Title]</h2>
                  <p className="font-body text-sm text-white/60 mb-4">[Blog subheading + summary]</p>
                  <Meta />
                </div>
                <button className="mt-8 self-start bg-white text-gray-900 font-body font-semibold text-sm rounded-xl px-5 py-3 flex items-center gap-2 transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5">
                  Read Blog Post
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
              {/* Featured image placeholder */}
              <div className="rounded-2xl bg-[#06C167] min-h-[260px] flex items-center justify-center">
                <span className="font-body text-xs text-white/40">Image</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mb-10 border-b border-gray-100 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-sm transition-colors flex items-center gap-2 ${active === cat ? 'text-gray-900 font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {active === cat && <span className="w-1.5 h-1.5 rounded-full bg-[#0C9348]" />}
                {cat}
              </button>
            ))}
          </div>

          {/* 3x3 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
            {posts.map((_, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 80}>
                <article className="flex flex-col cursor-pointer group">
                  <div className="rounded-xl bg-[#044422] aspect-[16/10] mb-4 flex items-center justify-center overflow-hidden">
                    <span className="font-body text-xs text-white/30">Image</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-gray-900 mb-1 group-hover:text-[#0C9348] transition-colors">[Blog Title]</h3>
                  <p className="font-body text-sm text-gray-500 mb-3">[Blog subheading + summary]</p>
                  <Meta />
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Load more */}
          <div className="flex justify-center mt-14 border-t border-gray-100 pt-10">
            <button className="bg-white border border-gray-200 text-gray-900 font-body font-semibold text-sm rounded-xl px-7 py-3 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5">
              Load More
            </button>
          </div>
        </div>
      </section>

      <Newsletter />
      <FooterCTA />
      <FooterLinks />
    </div>
  );
}
