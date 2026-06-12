import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDeeplinkRedirect from '../hooks/useDeeplinkRedirect';

// How long to wait for openAuthSession to redirect before we force it.
const REDIRECT_DELAY_MS = 3000;

export default function SessionRedirect() {
  const [params] = useSearchParams();
  // Forward every query param the payment provider sent into the deep link.
  const query = Object.fromEntries(params.entries());

  const { goToApp } = useDeeplinkRedirect({
    path: 'payment/complete',
    query,
    // Delay the forced redirect to give the native session a chance to handle it first.
    onMount: () => new Promise((resolve) => setTimeout(resolve, REDIRECT_DELAY_MS)),
  });

  // Countdown that mirrors the delay and gates the manual button.
  const [seconds, setSeconds] = useState(Math.round(REDIRECT_DELAY_MS / 1000));
  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const counting = seconds > 0;

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

      <button
        type="button"
        onClick={goToApp}
        disabled={counting}
        className="mt-9 inline-flex items-center justify-center bg-white text-gray-900 font-body font-semibold text-sm rounded-xl px-5 py-3 transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-white"
      >
        {counting ? `Click here if you're not redirected (${seconds})` : "Click here if you're not redirected"}
      </button>

      <noscript>
        <p className="font-body text-xs text-white/60 mt-6">
          Please return to the Handi app to continue.
        </p>
      </noscript>
    </main>
  );
}
