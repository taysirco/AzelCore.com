// ═══ VoiceSearchFAQ — Local FAQ Section ═══
// Hijazi dialect FAQ block
// Targets voice search intents in ar-SA locale

import { localVoiceFaqs } from '@/data/frequently-asked-questions';
import styles from './VoiceSearchFAQ.module.css';

export default function VoiceSearchFAQ() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>🎤 أسئلة بلهجتك</span>
          <h2 className={styles.title}>أسئلة الناس في جدة عن التظليل</h2>
          <p className={styles.subtitle}>
            أجوبة صريحة بلهجة جداوية — نفس الأسئلة اللي يسألونها العملاء كل يوم.
          </p>
        </div>

        <div className={styles.faqGrid}>
          {localVoiceFaqs.map(faq => (
            <details key={faq.id} className={styles.faqItem}>
              <summary className={styles.question}>
                <span className={styles.voiceBadge}>🎤</span>
                {faq.question}
                <span className={styles.chevron} aria-hidden="true">▾</span>
              </summary>
              <p className={styles.answer}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
