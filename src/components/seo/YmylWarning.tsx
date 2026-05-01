import styles from './YmylWarning.module.css';

interface YmylWarningProps {
  title: string;
  text: string;
}

/**
 * YMYL Safety Warning — Required for health/safety/money topics.
 * Signals to Google that we transparently disclose risks (E-E-A-T Trust).
 */
export default function YmylWarning({ title, text }: YmylWarningProps) {
  return (
    <aside className={styles.warning} role="alert" aria-label="تحذير سلامة">
      <div className={styles.warningBox}>
        <span className={styles.warningIcon}>⚠️</span>
        <div className={styles.warningContent}>
          <h4 className={styles.warningTitle}>{title}</h4>
          <p className={styles.warningText}>{text}</p>
        </div>
      </div>
    </aside>
  );
}
