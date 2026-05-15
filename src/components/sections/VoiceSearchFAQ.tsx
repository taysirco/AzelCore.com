// ═══ VoiceSearchFAQ — Local FAQ Section ═══
// Hijazi dialect FAQ block
// Targets voice search intents in ar-SA locale

import { localVoiceFaqs } from '@/data/frequently-asked-questions';
import styles from './VoiceSearchFAQ.module.css';

export default function VoiceSearchFAQ({ isAr = true }: { isAr?: boolean }) {
  const title = isAr ? 'أسئلة الناس في جدة عن التظليل' : 'People\'s Questions about Tinting in Jeddah';
  const subtitle = isAr ? 'إجابات صريحة — نفس الأسئلة اللي نسمعها كل يوم في المركز.' : 'Candid answers — the exact questions our clients ask every day.';
  const overline = isAr ? '🎤 أسئلة بلهجتك' : '🎤 Local Questions';
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>{overline}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        </div>

        <div className={styles.faqGrid}>
          {localVoiceFaqs.map(faq => (
            <details key={faq.id} className={styles.faqItem}>
              <summary className={styles.question}>
                <span className={styles.voiceBadge}>🎤</span>
                {isAr ? faq.question : (faq.questionEn || faq.question)}
                <span className={styles.chevron} aria-hidden="true">▾</span>
              </summary>
              <p className={styles.answer}>{isAr ? faq.answer : (faq.answerEn || faq.answer)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
