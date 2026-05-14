import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import { localePath, type Locale } from '@/lib/i18n';
import styles from './JohnsonSection.module.css';

export default function JohnsonSection({ locale = 'ar' }: { locale?: string }) {
  const dict = getDictionary(locale as Locale);

  return (
    <section className={styles.section} id="johnson" aria-label={dict.johnson.ariaLabel}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.dealerBadge}>
            <span className={styles.badgeGlow} aria-hidden="true" />
            {dict.johnson.dealerBadge}
          </div>
          <h2 className={styles.title}>
            {dict.johnson.title} <span className={styles.gradient}>{dict.johnson.titleBrand}</span>
          </h2>
          <p className={styles.subtitle}>{dict.johnson.subtitle}</p>
        </div>

        {/* Product Lines */}
        <div className={styles.products}>
          {dict.johnson.products.map((product: { name: string; nameLocal: string; tech: string; ir: string; tser: string; warranty: string; tier: string }, i: number) => (
            <div key={i} className={`${styles.productCard} ${styles[product.tier] || ''}`}>
              <div className={styles.productHeader}>
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.productNameAr}>{product.nameLocal}</span>
              </div>
              <div className={styles.productStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>{product.ir}</span>
                  <span className={styles.statLabel}>{dict.johnson.irLabel}</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>{product.tser}</span>
                  <span className={styles.statLabel}>TSER</span>
                </div>
              </div>
              <div className={styles.productMeta}>
                <span className={styles.techBadge}>{product.tech}</span>
                <span className={styles.warranty}>🛡️ {product.warranty}</span>
              </div>
            </div>
          ))}
        </div>

        {/* USPs */}
        <div className={styles.usps}>
          {dict.johnson.usps.map((usp: { icon: string; text: string }, i: number) => (
            <div key={i} className={styles.uspItem}>
              <span className={styles.uspIcon}>{usp.icon}</span>
              <span>{usp.text}</span>
            </div>
          ))}
        </div>

        <Link href={localePath(locale as Locale, '/johnson-authorized-dealer')} className={styles.ctaBtn}>
          {dict.johnson.ctaBtn}
        </Link>
      </div>
    </section>
  );
}
