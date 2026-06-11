import { useEffect } from 'react';
import { storeLink } from '../lib/appLinks';

// Where to send the user if the app isn't installed (deep link fails).
const WEB_FALLBACK = 'https://tryhandi.com';

/**
 * Redirects an in-app browser back into the Handi app via a custom-scheme deep link.
 * On failure (app not installed), falls back to the correct store / website after 2s.
 *
 * @param {object}   opts
 * @param {string}   opts.path           - deep-link path, e.g. "payment/complete"
 * @param {object}   [opts.query]        - params to forward into the deep link
 * @param {Function} [opts.beforeRedirect]
 * @param {Function} [opts.onMount]
 * @param {Function} [opts.onError]
 */
export default function useDeeplinkRedirect({ path, query = {}, beforeRedirect, onMount, onError }) {
  // Serialize query so the effect doesn't re-run on every render (the object identity changes otherwise).
  const queryString = new URLSearchParams(query).toString();

  useEffect(() => {
    const ua = navigator.userAgent || window.opera || '';
    const isAndroid = /android/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;

    const fullPath = queryString ? `${path}?${queryString}` : path;
    const appUrl = `handiapp://${fullPath}`;

    let fallbackUrl = WEB_FALLBACK;
    if (isAndroid && !isIOS) fallbackUrl = storeLink('customer', 'android');
    else if (isIOS && !isAndroid) fallbackUrl = storeLink('customer', 'ios');

    let timer;
    const redirect = async () => {
      try {
        await onMount?.();
        await beforeRedirect?.();
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
}
