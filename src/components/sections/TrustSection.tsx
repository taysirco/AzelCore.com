import { OWNER_NAME, OWNER_TITLE } from '@/lib/constants';
import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';
import AuthorProfile from '../seo/AuthorProfile';
import OfficialPartnerBar from '../seo/OfficialPartnerBar';
import styles from './TrustSection.module.css';

export default function TrustSection({ locale = 'ar' }: { locale?: string }) {
  const dict = getDictionary(locale as Locale);
  const isAr = locale === 'ar';

  return (
    <section className={styles.section} id="trust" aria-label={dict.trust.ariaLabel}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>{dict.trust.overline}</span>
          <h2 className={styles.title}>{dict.trust.title}</h2>
          <p className={styles.subtitle}>{dict.trust.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {dict.trust.credentials.map((cred: { icon: string; title: string; value: string; desc: string }, i: number) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardIcon}>{cred.icon}</span>
              <h3 className={styles.cardTitle}>{cred.title}</h3>
              <span className={styles.cardValue}>{cred.value}</span>
              <p className={styles.cardDesc}>{cred.desc}</p>
            </div>
          ))}
        </div>

        {/* Expert Box (Centralized E-E-A-T Component) */}
        <div style={{ marginTop: '2rem' }}>
          <AuthorProfile 
            isAr={isAr}
            expertName={OWNER_NAME}
            expertTitle={isAr ? OWNER_TITLE : 'Certified Insulation & Tinting Technician — Official Johnson & 3M Dealer'}
            organization={isAr ? "Johnson Window Films + 3M (وكيل معتمد)" : "Johnson Window Films + 3M (Authorized Dealer)"}
            quote={dict.trust.expertQuote}
            reviewDate="2026-05-01"
          />
        </div>

        {/* Government Trust Anchors */}
        <div style={{ marginTop: '2rem' }}>
          <OfficialPartnerBar entityKeys={['GOV.SASO', 'GOV.TRAFFIC', 'GOV.SBC', 'GOV.BALADI']} />
        </div>
      </div>
    </section>
  );
}
