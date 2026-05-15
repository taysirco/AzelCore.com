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
export default function ServiceSummary({ summary, label, isAr = true }: ServiceSummaryProps & { isAr?: boolean }) {
  const finalLabel = label || (isAr ? 'خلاصة الخدمة' : 'Service Summary');
  return (
    <div className={styles.serviceSummary} role="complementary" aria-label={isAr ? "ملخص الخدمة" : "Service Summary"}>
      <div className={styles.summaryBox}>
        <span className={styles.summaryLabel}>{label}</span>
        <p className={styles.summaryText}>{summary}</p>
      </div>
    </div>
  );
}
