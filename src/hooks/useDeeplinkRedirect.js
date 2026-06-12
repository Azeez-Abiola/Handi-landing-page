import { useCallback, useEffect } from 'react';
import { storeLink } from '../lib/appLinks';

// Where to send the user if the app isn't installed (deep link fails).
const WEB_FALLBACK = 'https://tryhandi.com';

/**
 * Redirects an in-app browser back into the Handi app via a custom-scheme deep link.
 *
 * Flow: await onMount (e.g. a delay to let openAuthSession redirect first) ->
 * force redirect to the deep link -> after 2s, fall back to the correct
 * store / website if the app didn't open.
 *
 * @param {object}   opts
 * @param {string}   opts.path           - deep-link path, e.g. "payment/complete"
 * @param {object}   [opts.query]        - params to forward into the deep link
 * @param {Function} [opts.onMount]      - awaited before redirecting (use for a delay)
 * @param {Function} [opts.onError]
 * @returns {{ appUrl: string, goToApp: () => void }} - manual redirect helper for a button
 */
export default function useDeeplinkRedirect({ path, query = {}, onMount, onError }) {
  // Serialize query so the effect doesn't re-run on every render (object identity changes otherwise).
  const queryString = new URLSearchParams(query).toString();
  const fullPath = queryString ? `${path}?${queryString}` : path;
  const appUrl = `handiapp://${fullPath}`;

  // Manual redirect (for the "click here" button) — shares the exact same deep link.
  const goToApp = useCallback(() => {
    window.location.href = appUrl;
  }, [appUrl]);

  useEffect(() => {
    const ua = navigator.userAgent || window.opera || '';
    const isAndroid = /android/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;

    let fallbackUrl = WEB_FALLBACK;
    if (isAndroid && !isIOS) fallbackUrl = storeLink('customer', 'android');
    else if (isIOS && !isAndroid) fallbackUrl = storeLink('customer', 'ios');

    let timer;
    const redirect = async () => {
      try {
        // Give openAuthSession (or whatever opened this page) a chance to redirect first.
        await onMount?.();
        // Force the redirect, keeping the provider's query params.
        window.location.href = appUrl;
        // If the app didn't grab the URL, send them to the fallback.
        timer = setTimeout(() => { window.location.href = fallbackUrl; }, 2000);
      } catch (err) {
        await onError?.(err);
      }
    };
    redirect();

    return () => { if (timer) clearTimeout(timer); };
    // Callbacks intentionally excluded — this page mounts once and redirects.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, queryString]);

  return { appUrl, goToApp };
}
