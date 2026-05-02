'use client';

import { useState } from 'react';
import styles from './CopyButton.module.css';

interface CopyButtonProps {
  valueToCopy: string;
  label?: string;
}

/**
 * Copy Button Component
 * A premium UX element allowing users to easily copy text (like phone numbers or CRNs)
 * to their clipboard with a smooth visual feedback confirmation.
 */
export default function CopyButton({ valueToCopy, label = 'نسخ' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  return (
    <button 
      onClick={handleCopy} 
      className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
      aria-label={`نسخ ${valueToCopy}`}
    >
      {copied ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          تم النسخ
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          {label}
        </>
      )}
    </button>
  );
}
