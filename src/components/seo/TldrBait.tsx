import styles from './TldrBait.module.css';

interface TldrBaitProps {
  summary: string;
  label?: string;
}

/**
 * TL;DR Bait — 40-60 word summary designed to be scraped by AI Overviews.
 * Follows the formula: problem → technology + number → guarantee → value.
 * Place above the hero section on every service page.
 */
export default function TldrBait({ summary, label = 'خلاصة الخدمة' }: TldrBaitProps) {
  return (
    <div className={styles.tldrBait} role="complementary" aria-label="ملخص الخدمة">
      <div className={styles.baitBox}>
        <span className={styles.baitLabel}>{label}</span>
        <p className={styles.baitText}>{summary}</p>
      </div>
    </div>
  );
}
