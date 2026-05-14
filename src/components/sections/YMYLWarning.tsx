import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';
import styles from './YMYLWarning.module.css';

/**
 * YMYL (Your Money or Your Life) Warning Component
 * Implements the U-Curve Sentiment Analysis (Behavioral Engineering) from the Master Plan.
 * Agitates the pain point (fake cheap tint) before providing the AzelCore solution.
 */
export default function YMYLWarning({ locale = 'ar' }: { locale?: string }) {
  const dict = getDictionary(locale as Locale);

  return (
    <section className={styles.section} aria-label={dict.ymyl.ariaLabel}>
      <div className={styles.container}>
        <div className={styles.warningBox}>
          
          <div className={styles.iconWrapper}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>
              {dict.ymyl.title} <span className={styles.highlight}>{dict.ymyl.titleHighlight}</span>
            </h2>
            
            <p className={styles.text}>
              {dict.ymyl.intro} <strong style={{color: 'var(--text)'}}>{dict.ymyl.introStrong}</strong> {dict.ymyl.introEnd}
            </p>

            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>{dict.ymyl.bullet1}</li>
              <li className={styles.bulletItem}>{dict.ymyl.bullet2}</li>
              <li className={styles.bulletItem}>{dict.ymyl.bullet3}</li>
              <li className={styles.bulletItem}>{dict.ymyl.bullet4}</li>
            </ul>

            <div className={styles.solutionBox}>
              <h3 className={styles.solutionTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                {dict.ymyl.solutionTitle}
              </h3>
              <p className={styles.solutionText}>{dict.ymyl.solutionText}</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
