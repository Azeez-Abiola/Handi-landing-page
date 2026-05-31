import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">

      <header className="bg-[#0C9348] py-5 px-6">
        <div className="max-w-[800px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/handi-logo-light-green.png" alt="Handi" className="h-6 w-auto object-contain brightness-[10]" />
            <span className="text-white font-body font-semibold text-lg">handi</span>
          </Link>
          <Link to="/" className="font-body text-xs text-white/70 hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-6 py-16">
        <div className="mb-12 pb-10 border-b border-gray-100">
          <span className="inline-block font-body text-[11px] font-semibold uppercase tracking-widest text-[#0C9348] mb-4">
            Legal
          </span>
          <h1 className="font-heading font-medium text-4xl md:text-[48px] text-gray-900 tracking-[-0.02em] leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="font-body text-sm text-gray-400">
            Handi Digital Services LTD · Last updated 2026
          </p>
        </div>

        <p className="font-body text-sm text-gray-500 leading-relaxed">
          Terms of Service content coming soon. For questions, contact{' '}
          <a href="mailto:support@tryhandi.com" className="text-[#0C9348] hover:underline">support@tryhandi.com</a>.
        </p>
      </main>

      <footer className="border-t border-gray-100 py-8 mt-8">
        <div className="max-w-[800px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body text-gray-400">
          <span>© 2026 Handi Digital Services LTD. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
