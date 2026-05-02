'use client';

import { useState } from 'react';
import styles from './PriceReveal.module.css';

interface PriceRevealProps {
  price: string | number;
  label?: string;
}

/**
 * Price Reveal Component
 * Behavioral engineering element: Hiding the price behind an interaction forces 
 * psychological commitment (micro-conversion) before the price anchors their perception.
 */
export default function PriceReveal({ price, label = 'اكتشف السعر' }: PriceRevealProps) {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    // Optional: Add analytics tracking here for 'Price_Viewed' intent
  };

  return (
    <div className={styles.wrapper}>
      {!revealed ? (
        <button 
          onClick={handleReveal} 
          className={styles.revealBtn}
          aria-label="انقر لمعرفة السعر"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {label}
        </button>
      ) : (
        <div className={styles.priceDisplay}>
          <span>{price}</span>
          <span className={styles.currency}>ر.س</span>
        </div>
      )}
    </div>
  );
}
