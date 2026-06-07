import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterCTA from '../components/FooterCTA';
import FooterLinks from '../components/FooterLinks';
import ScrollReveal from '../components/ScrollReveal';

const perkIcons = [
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#F3F1FE"/>
      <path d="M25.9993 27H27.9989C29.1589 27 30.1077 25.9982 29.7526 24.894C28.7747 21.8524 26.2547 20.5926 23.9994 21.1147M18.9994 15C18.9994 16.6569 17.6562 18 15.9994 18C14.3425 18 12.9994 16.6569 12.9994 15C12.9994 13.3431 14.3425 12 15.9994 12C17.6562 12 18.9994 13.3431 18.9994 15ZM27.4994 15.5C27.4994 16.8807 26.3801 18 24.9994 18C23.6187 18 22.4994 16.8807 22.4994 15.5C22.4994 14.1193 23.6187 13 24.9994 13C26.3801 13 27.4994 14.1193 27.4994 15.5ZM19.8534 28H12.1453C10.9854 28 10.0435 26.9995 10.3552 25.8822C12.1713 19.3726 19.8275 19.3726 21.6435 25.8822C21.9552 26.9995 21.0134 28 19.8534 28Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#FFF9E4"/>
      <path d="M27.5657 17H21.5C21.2239 17 21 16.7761 21 16.5V10.4014C21 9.90668 20.3584 9.71242 20.084 10.124L12.0182 22.2226C11.7967 22.5549 12.0349 23 12.4343 23H18.5C18.7761 23 19 23.2239 19 23.5V29.5986C19 30.0933 19.6416 30.2876 19.916 29.876L27.9818 17.7774C28.2033 17.4451 27.9651 17 27.5657 17Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#E0FAF2"/>
      <path d="M12.75 17.75V17.5C12.75 13.7721 15.9959 10.75 20 10.75C24.0041 10.75 27.25 13.7721 27.25 17.5V17.75M20 27.6429V29.25H23C25.4853 29.25 27.5 27.2353 27.5 24.75M12.25 17.75H13.75V24.25H12.25C11.4216 24.25 10.75 23.5784 10.75 22.75V19.25C10.75 18.4216 11.4216 17.75 12.25 17.75ZM26.25 17.75H27.75C28.5784 17.75 29.25 18.4216 29.25 19.25V22.75C29.25 23.5784 28.5784 24.25 27.75 24.25H26.25V17.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="square"/>
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#FFEFF5"/>
      <path d="M16.5 28H15C13.3431 28 12 26.6569 12 25V16C12 14.3431 13.3431 13 15 13H25C26.6569 13 28 14.3431 28 16V16.5M16 13V11M24 13V11M25 23.0002V24.9999L26.5 26.5002M23.0873 20.3818C25.6382 19.3252 28.5615 20.5368 29.6182 23.0876C30.6748 25.6383 29.4632 28.5615 26.9123 29.6182C24.3615 30.6748 21.4382 29.4632 20.3815 26.9124C19.3257 24.3625 20.5365 21.4385 23.0873 20.3818Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
];

const perks = [
  { title: "We're solving real problems", desc: "Every line of code and every customer conversation matters. We're not building another social app — we're building infrastructure that changes how people live." },
  { title: "You'll have impact", desc: 'Small team means big leverage. Your ideas get heard and implemented. Your work directly affects thousands of customers and professionals.' },
  { title: 'We respect your time', desc: 'We value output, not hours. Work smart, take time off, and actually have a life outside of work. We trust you to get things done.' },
  { title: "You'll learn fast", desc: "Startup pace means constant learning. You'll wear multiple hats, solve diverse problems, and grow your skills way faster than at a big company." },
];

const roles = [
  { title: 'UI/UX Designer', dept: 'Design', place: 'Lagos, NG • Remote', type: 'Full Time', slug: 'ui-ux-designer' },
  { title: 'Product Manager', dept: 'Product', place: 'Lagos, NG • Hybrid', type: 'Full Time', slug: 'product-manager' },
  { title: 'Frontend Developer', dept: 'Development', place: 'Lagos, NG • On-site', type: 'Part Time', slug: 'frontend-developer' },
  { title: 'Data Analyst', dept: 'Analytics', place: 'Lagos, NG • Remote', type: 'Contract', slug: 'data-analyst' },
  { title: 'Content Writer', dept: 'Marketing', place: 'Lagos, NG • Remote', type: 'Freelance', slug: 'content-writer' },
  { title: 'SEO Specialist', dept: 'Marketing', place: 'Lagos, NG • Hybrid', type: 'Full Time', slug: 'seo-specialist' },
  { title: 'Backend Developer', dept: 'Development', place: 'Lagos, NG • Remote', type: 'Full Time', slug: 'backend-developer' },
  { title: 'Front Desk Officer / Customer Support', dept: 'Operations', place: 'Lagos, NG • On-site', type: 'Full Time', slug: 'front-desk-officer' },
];

export default function Careers() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-bg pt-32 md:pt-36 pb-0 px-6">
        <div className="max-w-[1313px] mx-auto">
          <ScrollReveal>
            <h1 className="font-heading font-medium text-4xl md:text-[52px] text-white leading-[1.05] tracking-[-0.02em] mb-4">
              Join the Handi Team
            </h1>
            <p className="font-body text-sm text-white/80 max-w-[440px] mb-10">
              We're building the trusted platform for service professionals in Lagos and beyond. Help us change how Nigerians get things done.
            </p>
          </ScrollReveal>
          {/* Hero image placeholder — cuts into the white section below */}
          <ScrollReveal className="relative z-10 mb-[-40px] md:mb-[-44px]">
            <div className="rounded-[16px] bg-[#044422] h-[467px] md:h-[489px] flex items-center justify-center">
              <span className="font-body text-xs text-white/30">Image</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Handi */}
      <section className="bg-white pt-20 md:pt-28 pb-16 md:pb-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#0C9348] mb-3 block">Why Handi</span>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-gray-900 mb-3">Do work that actually matters</h2>
            <p className="font-body text-sm text-gray-500 max-w-[360px] mb-12">
              Small team, big leverage. Here's what it's like to build Handi with us.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="flex flex-col">
                  <div className="mb-4">{perkIcons[i]}</div>
                  <h3 className="font-body text-base font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="font-body text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-hero-bg py-16 md:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="bg-[#044422] rounded-[24px] p-7 md:p-12">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#00F676] mb-3 block">Open Positions</span>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-3">Roles we're hiring for</h2>
              <p className="font-body text-sm text-white/60 max-w-[360px] mb-8">
                {roles.length} roles open right now. Don't see your fit? We still want to hear from you.
              </p>

              <div className="divide-y divide-white/10 border-t border-white/10">
                {roles.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/careers/${r.slug}`}
                    className="group flex items-center justify-between gap-3 md:grid md:grid-cols-[1.6fr_1fr_1.2fr_0.8fr_auto] md:gap-4 md:items-center py-5 transition-colors hover:bg-white/[0.03] -mx-3 px-3 rounded-lg"
                  >
                    <div className="flex flex-col gap-0.5 md:contents">
                      <span className="md:hidden font-body text-[11px] text-white/40">{r.dept}</span>
                      <span className="font-body text-base font-semibold text-white">{r.title}</span>
                      <span className="hidden md:block font-body text-sm text-white/50">{r.dept}</span>
                      <span className="font-body text-xs md:text-sm text-white/50">{r.place}</span>
                      <span className="hidden md:block font-body text-sm text-white/50">{r.type}</span>
                    </div>
                    <svg className="shrink-0 self-center md:justify-self-end transition-transform group-hover:translate-x-1" width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M1 7h17M13 1l6 6-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Don't see a role */}
      <section className="bg-hero-bg pt-10 md:pt-14 pb-20 md:pb-28 px-6 relative">
        {/* Squiggle line — flush to the page's right edge, fully visible */}
        <svg
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[600px] lg:w-[765px] h-auto z-0 pointer-events-none"
          width="765" height="198" viewBox="0 0 765 198" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M9.40568 57.3019C16.7014 49.4899 33.2935 32.1423 35.2871 33.6938C37.3668 35.3123 36.7621 42.1131 35.0555 56.2792C33.349 70.4452 29.3183 92.6638 27.2508 105.419C25.1833 118.175 25.2011 120.794 25.6281 121.507C26.3374 122.692 32.5961 111.032 40.0002 98.5838C42.3603 94.6159 42.6887 95.9246 42.6293 100.908C42.3152 127.23 44.0982 135.734 45.6897 137.709C47.4668 139.914 54.3518 136.234 63.7373 129.338C69.0658 125.423 74.4017 119.218 85.0704 105.834C95.7391 92.4496 111.287 71.7039 119.803 60.5937C128.319 49.4835 129.331 48.6375 129.884 61.3151C130.437 73.9927 130.5 100.22 131.734 121.884C132.968 143.548 135.371 159.855 137.628 170.4C139.884 180.945 141.922 185.235 143.552 187.004C145.182 188.773 146.345 187.891 148.968 184.632C151.592 181.373 155.642 175.763 169.563 149.452C183.484 123.14 207.152 76.2969 221.447 48.924C235.742 21.5511 239.946 15.0679 242.593 11.3797C245.24 7.69156 246.201 6.99493 247.149 29.2103C248.097 51.4256 249.003 96.5741 251.032 124.267C253.061 151.96 256.186 160.83 259.795 166.61C263.403 172.39 267.402 174.812 270.394 175.384C273.387 175.956 275.254 174.605 290.744 147.58C306.233 120.555 335.288 67.898 351.703 39.3882C368.117 10.8783 371.01 8.11157 377.742 19.3965C384.475 30.6814 394.961 56.1018 401.861 71.2094C408.761 86.3171 411.759 90.3417 414.728 93.2573C417.697 96.1729 420.547 97.8576 424.782 97.8039C434.735 97.6779 446.253 88.614 461.565 70.3527C471.771 58.1805 483.334 37.3105 489.132 27.974C494.93 18.6374 493.695 20.7512 490.874 27.1875C488.054 33.6238 483.685 44.3186 480.529 54.168C474.675 72.4365 473.891 87.8848 475.08 99.6426C475.644 105.216 477.866 109.748 480.507 112.711C483.149 115.674 486.586 116.869 492.418 116.502C498.25 116.134 506.372 114.168 522.517 106.471C538.662 98.7746 562.583 85.407 578.156 78.1134C593.728 70.8199 600.227 70.0054 607.949 72.6582C615.67 75.311 624.419 81.4557 632.524 86.0561C640.629 90.6565 647.825 93.5264 656.486 95.8808C665.148 98.2353 675.057 99.9873 686.082 100.668C697.106 101.349 708.946 100.905 726.664 97.161C744.381 93.4174 767.617 86.3873 780.717 82.5611C793.818 78.7349 796.079 78.3255 798.408 77.9037" stroke="#044422" strokeWidth="18.8097" strokeLinecap="round"/>
          </svg>

        <div className="max-w-[1280px] mx-auto relative">
          <ScrollReveal direction="left" className="relative z-10">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-3">Don't see a role that fits?</h2>
            <p className="font-body text-sm text-white/70 mb-6 max-w-[320px]">
              Send us your resume anyway. Great people are always worth meeting.
            </p>
            <a
              href="mailto:careers@tryhandi.com"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-body font-semibold text-sm rounded-xl px-5 py-3 transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5"
            >
              careers@tryhandi.com
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
            </a>
          </ScrollReveal>

          {/* Squiggle — mobile, in flow below the content */}
          <svg
            className="md:hidden w-full h-auto mt-10"
            width="765" height="198" viewBox="0 0 765 198" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.40568 57.3019C16.7014 49.4899 33.2935 32.1423 35.2871 33.6938C37.3668 35.3123 36.7621 42.1131 35.0555 56.2792C33.349 70.4452 29.3183 92.6638 27.2508 105.419C25.1833 118.175 25.2011 120.794 25.6281 121.507C26.3374 122.692 32.5961 111.032 40.0002 98.5838C42.3603 94.6159 42.6887 95.9246 42.6293 100.908C42.3152 127.23 44.0982 135.734 45.6897 137.709C47.4668 139.914 54.3518 136.234 63.7373 129.338C69.0658 125.423 74.4017 119.218 85.0704 105.834C95.7391 92.4496 111.287 71.7039 119.803 60.5937C128.319 49.4835 129.331 48.6375 129.884 61.3151C130.437 73.9927 130.5 100.22 131.734 121.884C132.968 143.548 135.371 159.855 137.628 170.4C139.884 180.945 141.922 185.235 143.552 187.004C145.182 188.773 146.345 187.891 148.968 184.632C151.592 181.373 155.642 175.763 169.563 149.452C183.484 123.14 207.152 76.2969 221.447 48.924C235.742 21.5511 239.946 15.0679 242.593 11.3797C245.24 7.69156 246.201 6.99493 247.149 29.2103C248.097 51.4256 249.003 96.5741 251.032 124.267C253.061 151.96 256.186 160.83 259.795 166.61C263.403 172.39 267.402 174.812 270.394 175.384C273.387 175.956 275.254 174.605 290.744 147.58C306.233 120.555 335.288 67.898 351.703 39.3882C368.117 10.8783 371.01 8.11157 377.742 19.3965C384.475 30.6814 394.961 56.1018 401.861 71.2094C408.761 86.3171 411.759 90.3417 414.728 93.2573C417.697 96.1729 420.547 97.8576 424.782 97.8039C434.735 97.6779 446.253 88.614 461.565 70.3527C471.771 58.1805 483.334 37.3105 489.132 27.974C494.93 18.6374 493.695 20.7512 490.874 27.1875C488.054 33.6238 483.685 44.3186 480.529 54.168C474.675 72.4365 473.891 87.8848 475.08 99.6426C475.644 105.216 477.866 109.748 480.507 112.711C483.149 115.674 486.586 116.869 492.418 116.502C498.25 116.134 506.372 114.168 522.517 106.471C538.662 98.7746 562.583 85.407 578.156 78.1134C593.728 70.8199 600.227 70.0054 607.949 72.6582C615.67 75.311 624.419 81.4557 632.524 86.0561C640.629 90.6565 647.825 93.5264 656.486 95.8808C665.148 98.2353 675.057 99.9873 686.082 100.668C697.106 101.349 708.946 100.905 726.664 97.161C744.381 93.4174 767.617 86.3873 780.717 82.5611C793.818 78.7349 796.079 78.3255 798.408 77.9037" stroke="#044422" strokeWidth="18.8097" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      <FooterCTA />
      <FooterLinks />
    </div>
  );
}
