import styles from './ServiceSummary.module.css';

interface ServiceSummaryProps {
  summary: string;
  label?: string;
}

/**
 * TL;DR Highlights — 40-60 word summary designed to be scraped by AI Overviews.
 * Follows the formula: problem → technology + number → guarantee → value.
 * Place above the hero section on every service page.
 */
export default function ServiceSummary({ summary, label = 'خلاصة الخدمة' }: ServiceSummaryProps) {
  return (
    <div className={styles.serviceSummary} role="complementary" aria-label="ملخص الخدمة">
      <div className={styles.baitBox}>
        <span className={styles.baitLabel}>{label}</span>
        <p className={styles.baitText}>{summary}</p>
      </div>
    </div>
  );
}
