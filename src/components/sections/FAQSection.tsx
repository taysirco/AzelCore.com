import Link from 'next/link';
import { faqs } from '@/data/faqs';
import { getDictionary } from '@/lib/dictionaries';
import { localePath, type Locale } from '@/lib/i18n';
import styles from './FAQSection.module.css';

const topFAQs = faqs.slice(0, 6);

export default function FAQSection({ locale = 'ar' }: { locale?: string }) {
  const dict = getDictionary(locale as Locale);

  return (
    <section className={styles.section} id="faq" aria-label={dict.faqSection.ariaLabel}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>{dict.faqSection.overline}</span>
          <h2 className={styles.title}>{dict.faqSection.title}</h2>
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
          <Link href={localePath(locale as Locale, '/faq')} className={styles.seeAllLink}>
            {dict.faqSection.seeAll} ({faqs.length}) ←
          </Link>
        </div>
      </div>
    </section>
  );
}
