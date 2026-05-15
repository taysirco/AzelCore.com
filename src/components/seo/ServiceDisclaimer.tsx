import styles from './ServiceDisclaimer.module.css';

interface ServiceDisclaimerProps {
  title: string;
  text: string;
  isAr?: boolean;
}

/**
 * YMYL Safety Warning — Required for health/safety/money topics.
 * Signals to Google that we transparently disclose risks (E-E-A-T Trust).
 */
export default function ServiceDisclaimer({ title, text, isAr = true }: ServiceDisclaimerProps) {
  return (
    <aside className={styles.warning} role="alert" aria-label={isAr ? "تحذير سلامة" : "Safety warning"}>
      <div className={styles.warningBox}>
        <span className={styles.warningIcon}>⚠️</span>
        <div className={styles.warningContent}>
          <h3 className={styles.warningTitle}>{title}</h3>
          <p className={styles.warningText}>{text}</p>
        </div>
      </div>
    </aside>
  );
}
