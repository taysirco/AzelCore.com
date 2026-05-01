'use client';
import { useEffect, useState } from 'react';
import styles from './GeoBanner.module.css';

/**
 * GeoBanner — Reads x-geo-city cookie after hydration.
 * Shows personalized banner for Jeddah visitors.
 * 
 * ⚠️ Reads document.cookie ONLY — does NOT use headers()
 *    to avoid SSR de-opt. SSG pages remain fully static.
 */
export default function GeoBanner() {
  const [isJeddah, setIsJeddah] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(';').map(c => c.trim());
    const geoCookie = cookies.find(c => c.startsWith('x-geo-city='));
    if (geoCookie?.split('=')[1] === 'jeddah') {
      // Check if already dismissed this session
      if (!sessionStorage.getItem('geo-banner-dismissed')) {
        setIsJeddah(true);
      }
    }
  }, []);

  if (!isJeddah || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('geo-banner-dismissed', '1');
  };

  return (
    <div className={styles.banner} role="status" aria-live="polite">
      <div className={styles.inner}>
        <span className={styles.icon}>📍</span>
        <p className={styles.text}>
          <strong>عرض خاص لسكان جدة</strong> — خصم 15% على تظليل نانو سيراميك لفترة محدودة
        </p>
        <button onClick={handleDismiss} className={styles.close} aria-label="إغلاق">✕</button>
      </div>
    </div>
  );
}
