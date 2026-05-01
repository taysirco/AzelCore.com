import Link from 'next/link';
import { faqs } from '@/data/faqs';
import styles from './FAQSection.module.css';

const topFAQs = faqs.slice(0, 6);

export default function FAQSection() {
  return (
    <section className={styles.section} id="faq" aria-label="أسئلة شائعة">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>أسئلة شائعة</span>
          <h2 className={styles.title}>كل ما تحتاج تعرفه</h2>
        </div>

        <div className={styles.faqGrid}>
          {topFAQs.map((faq) => (
            <details key={faq.id} className={styles.faqItem}>
              <summary className={styles.question}>
                <span>{faq.question}</span>
                <svg className={styles.chevron} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className={styles.answer}>{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className={styles.seeAll}>
          <Link href="/faq" className={styles.seeAllLink}>عرض جميع الأسئلة ({faqs.length}) ←</Link>
        </div>
      </div>
    </section>
  );
}
