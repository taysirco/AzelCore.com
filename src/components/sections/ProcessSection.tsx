import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';
import styles from './ProcessSection.module.css';

export default function ProcessSection({ locale = 'ar' }: { locale?: string }) {
  const dict = getDictionary(locale as Locale);

  return (
    <section className={styles.section} id="process" aria-label={dict.process.ariaLabel}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>{dict.process.overline}</span>
          <h2 className={styles.title}>{dict.process.title}</h2>
        </div>

        <div className={styles.steps}>
          {dict.process.steps.map((step: { number: string; title: string; desc: string; icon: string }, i: number) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              {i < dict.process.steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
