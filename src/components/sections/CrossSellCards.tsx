import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import { localePath, type Locale } from '@/lib/i18n';
import styles from './CrossSellCards.module.css';

interface CrossSellCardsProps {
  currentPage: string;
  locale?: string;
}

/**
 * CrossSellCards — Contextual internal linking with causal reasoning.
 * Blueprint §3 #10: "الربط سببي وليس عشوائي"
 */
export default function CrossSellCards({ currentPage, locale = 'ar' }: CrossSellCardsProps) {
  const dict = getDictionary(locale as Locale);
  const serviceMap = dict.crossSell.services as Record<string, Array<{ icon: string; title: string; description: string; href: string; linkText: string }>>;
  const items = serviceMap[currentPage];
  if (!items) return null;

  return (
    <section className={styles.crossSell} aria-label={dict.crossSell.ariaLabel} data-nosnippet>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {dict.crossSell.sectionTitle} <span>{dict.crossSell.sectionTitleHighlight}</span> {dict.crossSell.sectionTitleSuffix}
        </h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <Link key={item.href} href={localePath(locale as Locale, item.href)} className={styles.card}>
              <span className={styles.cardIcon}>{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <span className={styles.cardLink}>{item.linkText} ←</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
