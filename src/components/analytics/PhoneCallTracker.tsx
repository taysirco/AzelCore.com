'use client';

import { useEffect } from 'react';

/**
 * PhoneCallTracker — fires a GA4 `phone_call_click` event whenever any
 * `tel:` link is clicked, anywhere on the site.
 *
 * GA4 Enhanced Measurement auto-captures http/https outbound clicks (e.g. the
 * WhatsApp CTA → api.whatsapp.com) but NOT `tel:` links — those are not
 * outbound web links, so the phone-call conversion would otherwise never be
 * measured. Rather than convert ~13 server-rendered `<a href="tel:…">` CTAs
 * into client components, we attach ONE capture-phase delegated listener here
 * and mount it once in the root layout. `window.gtag` is the global installed
 * by the gtag.js snippet in [locale]/layout.tsx.
 */
export default function PhoneCallTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag !== 'function') return;

      gtag('event', 'phone_call_click', {
        method: 'tel',
        link_url: link.getAttribute('href') ?? undefined,
        link_text: link.textContent?.trim().slice(0, 100) || undefined,
      });
    }

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  return null;
}
