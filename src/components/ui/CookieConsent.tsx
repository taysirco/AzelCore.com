'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/i18n';
import styles from './CookieConsent.module.css';

/**
 * CookieConsent — PDPL-aligned consent banner driving Google Consent Mode v2.
 *
 * The gtag init in [locale]/layout.tsx sets all consent signals to "denied" by
 * default (analytics_storage restored from localStorage for returning visitors),
 * so NO analytics cookie/ID is written before the visitor decides. This banner
 * captures that decision and calls gtag('consent','update',…):
 *   - Accept → analytics_storage:'granted' (ad_* stay denied — the site runs no ads)
 *   - Reject → analytics_storage:'denied' (GA falls back to cookieless pings)
 * The choice persists in localStorage('azelcore-consent'); the banner only shows
 * to visitors who haven't chosen yet.
 */

const STORAGE_KEY = 'azelcore-consent';

interface CookieConsentProps {
  locale?: Locale;
}

type Gtag = (...args: unknown[]) => void;

export default function CookieConsent({ locale = 'ar' }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);
  const isAr = locale === 'ar';

  useEffect(() => {
    try {
      const choice = localStorage.getItem(STORAGE_KEY);
      if (choice !== 'granted' && choice !== 'denied') setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied');
    } catch {
      /* storage blocked — still update consent for this page view */
    }
    const gtag = (window as typeof window & { gtag?: Gtag }).gtag;
    if (typeof gtag === 'function') {
      gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite"
      aria-label={isAr ? 'إشعار ملفات تعريف الارتباط' : 'Cookie notice'}>
      <div className={styles.inner}>
        <p className={styles.text}>
          <span className={styles.icon} aria-hidden="true">🍪</span>
          {isAr
            ? 'نستخدم ملفات تعريف الارتباط (الكوكيز) لقياس أداء الموقع وتحسين تجربتك فقط. لا نُفعّل أي تتبّع تحليلي قبل موافقتك.'
            : 'We use cookies only to measure site performance and improve your experience. No analytics tracking runs before you agree.'}
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.reject} onClick={() => decide(false)}>
            {isAr ? 'رفض' : 'Reject'}
          </button>
          <button type="button" className={styles.accept} onClick={() => decide(true)}>
            {isAr ? 'أوافق' : 'Accept'}
          </button>
        </div>
      </div>
    </div>
  );
}
