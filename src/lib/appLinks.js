// Central place for the app store links + device detection.
//
// ⚠️ PLACEHOLDERS — replace these four URLs once the apps are published.
// Two separate apps: a Customer app and a Provider app, each on both stores.
const STORE_LINKS = {
  customer: {
    ios: 'https://apps.apple.com/app/idCUSTOMER_APP_ID',                              // TODO: Customer app — App Store URL
    android: 'https://play.google.com/store/apps/details?id=com.handi.customer',      // TODO: Customer app — Google Play URL
  },
  provider: {
    ios: 'https://apps.apple.com/app/idPROVIDER_APP_ID',                              // TODO: Provider app — App Store URL
    android: 'https://play.google.com/store/apps/details?id=com.handi.provider',      // TODO: Provider app — Google Play URL
  },
};

// Returns 'ios' (App Store) or 'android' (Google Play) for the current device.
// iOS/iPhone/iPad and macOS  -> App Store
// Android and Windows        -> Google Play
// Anything else (e.g. Linux) -> Google Play (fallback)
export function detectStore() {
  if (typeof navigator === 'undefined') return 'android';
  const ua = navigator.userAgent || '';
  const platform = navigator.platform || '';
  const touch = navigator.maxTouchPoints || 0;

  // iPhone / iPod / iPad (iPadOS 13+ reports as "MacIntel" with touch points)
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (platform === 'MacIntel' && touch > 1);
  if (isIOS) return 'ios';

  if (/Android/i.test(ua)) return 'android';
  if (/Mac/i.test(platform) || /Mac OS X/i.test(ua)) return 'ios';        // macOS desktop
  if (/Win/i.test(platform) || /Windows/i.test(ua)) return 'android';     // Windows desktop

  return 'android';
}

// Explicit link for a given role + store (used by the fixed store badges).
export function storeLink(role, store) {
  return STORE_LINKS[role][store];
}

// Device-aware link for a role.
export function appLink(role) {
  return STORE_LINKS[role][detectStore()];
}

// Open the correct store for a role, detecting the device at click time.
export function openApp(role) {
  if (typeof window === 'undefined') return;
  window.open(appLink(role), '_blank', 'noopener,noreferrer');
}

export const openCustomerApp = () => openApp('customer');
export const openProviderApp = () => openApp('provider');
