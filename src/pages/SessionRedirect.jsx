import { useSearchParams } from 'react-router-dom';
import useDeeplinkRedirect from '../hooks/useDeeplinkRedirect';

export default function SessionRedirect() {
  const [params] = useSearchParams();
  // Forward every query param the payment provider sent into the deep link.
  const query = Object.fromEntries(params.entries());

  useDeeplinkRedirect({ path: 'payment/complete', query });

  return (
    <main className="min-h-screen bg-hero-bg flex flex-col items-center justify-center px-6 text-center select-none">
      <img
        src="/images/handi-logo-light-green.png"
        alt="Handi"
        className="h-9 w-auto object-contain brightness-0 invert mb-10"
        draggable="false"
      />

      {/* Spinner */}
      <div className="w-11 h-11 mb-7 rounded-full border-[3px] border-white/25 border-t-white animate-spin" />

      <h1 className="font-heading font-medium text-2xl md:text-[28px] text-white tracking-[-0.02em] mb-2">
        Payment received!
      </h1>
      <p className="font-body text-sm text-white/80 max-w-[300px] leading-relaxed">
        Redirecting you back to the app…
      </p>

      <noscript>
        <p className="font-body text-xs text-white/60 mt-6">
          Please return to the Handi app to continue.
        </p>
      </noscript>
    </main>
  );
}
