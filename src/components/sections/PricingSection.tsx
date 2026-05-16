import Link from 'next/link';
import { carTintingPrices } from '@/data/pricing-tiers';
import { getWhatsAppLink } from '@/lib/constants';
import { getDictionary } from '@/lib/dictionaries';
import { localePath, type Locale } from '@/lib/i18n';
import PriceReveal from '@/components/ui/PriceReveal';
import styles from './PricingSection.module.css';

export default function PricingSection({ locale = 'ar' }: { locale?: string }) {
  const isAr = locale === 'ar';
  const tiers = carTintingPrices.tiers.slice(0, 4); // top 4
  const dict = getDictionary(locale as Locale);
  const whatsappLink = getWhatsAppLink(locale as Locale);

  return (
    <section className={styles.section} id="pricing" aria-label={dict.pricing.ariaLabel}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>{dict.pricing.overline}</span>
          <h2 className={styles.title}>{!isAr && carTintingPrices.titleEn ? carTintingPrices.titleEn : dict.pricing.title}</h2>
          <p className={styles.subtitle}>{dict.pricing.subtitle}</p>
        </div>

        <div className={styles.pricingGrid}>
          {tiers.map((tier, i) => (
            <div key={i} className={`${styles.pricingCard} ${i === 0 ? styles.pricingCardBest : ''}`}>
              {i === 0 && <div className={styles.bestBadge}>{dict.pricing.mostPopular}</div>}
              
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>{!isAr && tier.filmTypeEn ? tier.filmTypeEn : tier.filmType}</h3>
                <div className={styles.pricingPrice}>
                  <PriceReveal price={tier.sedan.price} />
                </div>
                <p className={styles.pricingDesc}>{dict.pricing.sedan}</p>
              </div>

              <div className={styles.pricingFeatures}>
                <div className={styles.featureItem}>
                  <span className={styles.featureLabel}>{dict.pricing.suv}</span>
                  <span className={styles.featureValue}><PriceReveal price={tier.suv.price} /></span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureLabel}>{dict.pricing.warranty}</span>
                  <span className={styles.featureValueHighlight}>{!isAr && tier.warrantyEn ? tier.warrantyEn : tier.warranty}</span>
                </div>
                <ul className={styles.includes}>
                  {(!isAr && tier.includesEn ? tier.includesEn : tier.includes).map((item: string, j: number) => (
                    <li key={j}>✓ {item}</li>
                  ))}
                </ul>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={i === 0 ? styles.primaryBtn : styles.secondaryBtn} style={{ width: '100%', justifyContent: 'center' }} data-nosnippet>
                {dict.pricing.bookNow}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.addons}>
          <h3 className={styles.addonsTitle}>{dict.pricing.addonsTitle}</h3>
          <div className={styles.addonsList}>
            {carTintingPrices.addons.map((addon, i) => (
              <div key={i} className={styles.addonItem}>
                <span>{!isAr && addon.nameEn ? addon.nameEn : addon.name}</span>
                <span className={styles.addonPrice}>{!isAr && addon.priceEn ? addon.priceEn : addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.note}>
          {dict.pricing.note}{' '}
          <Link href={localePath(locale as Locale, '/contact')} className={styles.noteLink}>{dict.pricing.noteLink}</Link>
        </p>
      </div>
    </section>
  );
}
