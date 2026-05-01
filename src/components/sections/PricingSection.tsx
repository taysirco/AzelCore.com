import Link from 'next/link';
import { carTintingPrices } from '@/data/pricing-tiers';
import { WHATSAPP_LINK } from '@/lib/constants';
import styles from './PricingSection.module.css';

export default function PricingSection() {
  const tiers = carTintingPrices.tiers.slice(0, 4); // top 4

  return (
    <section className={styles.section} id="pricing" aria-label="أسعار التظليل">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>أسعار شفافة</span>
          <h2 className={styles.title}>أسعار تظليل السيارات في جدة</h2>
          <p className={styles.subtitle}>لا رسوم مخفية — السعر يشمل التركيب + الضمان + الفاتورة الضريبية.</p>
        </div>

        <div className={styles.grid}>
          {tiers.map((tier, i) => (
            <div key={i} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
              {i === 0 && <span className={styles.badge}>⭐ الأكثر طلباً</span>}
              <h3 className={styles.cardTitle}>{tier.filmType}</h3>
              <div className={styles.priceRow}>
                <span className={styles.priceLabel}>سيدان</span>
                <span className={styles.priceValue}>{tier.sedan.price} <small>ر.س</small></span>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.priceLabel}>SUV / دبل</span>
                <span className={styles.priceValue}>{tier.suv.price} <small>ر.س</small></span>
              </div>
              <div className={styles.warrantyRow}>
                <span>🛡️ ضمان</span>
                <strong>{tier.warranty}</strong>
              </div>
              <ul className={styles.includes}>
                {tier.includes.map((item, j) => (
                  <li key={j}>✓ {item}</li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${styles.cardBtn} ${i === 0 ? styles.cardBtnPrimary : ''}`}>
                احجز الآن
              </a>
            </div>
          ))}
        </div>

        <div className={styles.addons}>
          <h3 className={styles.addonsTitle}>خدمات إضافية</h3>
          <div className={styles.addonsList}>
            {carTintingPrices.addons.map((addon, i) => (
              <div key={i} className={styles.addonItem}>
                <span>{addon.name}</span>
                <span className={styles.addonPrice}>{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.note}>
          * الأسعار تقريبية وتختلف حسب حجم السيارة ونوع الفيلم.{' '}
          <Link href="/contact" className={styles.noteLink}>تواصل معنا لعرض سعر دقيق →</Link>
        </p>
      </div>
    </section>
  );
}
