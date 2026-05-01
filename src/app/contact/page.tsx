import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, GEO, WORKING_HOURS, ADDRESS_STRUCTURED } from '@/lib/constants';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'تواصل معنا — عزل كور جدة | واتساب واتصال مباشر',
  description: 'تواصل مع عزل كور لحجز موعد تظليل سيارات أو عزل مباني في جدة. واتساب، اتصال مباشر، أو زيارة ورشتنا.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'تواصل معنا — عزل كور',
  url: `${SITE_URL}/contact`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: 'عزل كور',
    telephone: PHONE,
    address: { '@type': 'PostalAddress', ...ADDRESS_STRUCTURED },
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
    openingHours: 'Sa-Th 08:00-22:00',
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'الرئيسية', href: '/' },
        { name: 'تواصل معنا', href: '/contact' },
      ]} />

      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>تواصل معنا</span>
          </nav>
          <h1 className={styles.pageTitle}>تواصل <span className={styles.highlight}>معنا</span></h1>
          <p className={styles.pageSubtitle}>جاهزين نخدمك — اختر الطريقة اللي تناسبك.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>

            {/* Contact Cards */}
            <div className={styles.cardsCol}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.whatsappCard}`}>
                <span className={styles.cardIcon}>💬</span>
                <h2 className={styles.cardTitle}>واتساب</h2>
                <p className={styles.cardDesc}>أسرع طريقة للتواصل — رد فوري</p>
                <span className={styles.cardAction}>{PHONE}</span>
              </a>

              <a href={`tel:${PHONE}`} className={styles.contactCard}>
                <span className={styles.cardIcon}>📞</span>
                <h2 className={styles.cardTitle}>اتصال مباشر</h2>
                <p className={styles.cardDesc}>تكلم معنا مباشرة لأي استفسار</p>
                <span className={styles.cardAction}>{PHONE}</span>
              </a>

              <div className={styles.contactCard}>
                <span className={styles.cardIcon}>🕐</span>
                <h2 className={styles.cardTitle}>ساعات العمل</h2>
                <p className={styles.cardDesc}>{WORKING_HOURS}</p>
                <span className={styles.cardMeta}>الجمعة: إجازة</span>
              </div>

              <div className={styles.contactCard}>
                <span className={styles.cardIcon}>📍</span>
                <h2 className={styles.cardTitle}>الموقع</h2>
                <p className={styles.cardDesc}>جدة، المملكة العربية السعودية</p>
                <span className={styles.cardMeta}>خدمة متنقلة متاحة</span>
              </div>
            </div>

            {/* Info Panel */}
            <div className={styles.infoPanel}>
              <div className={styles.expertBox}>
                <h3 className={styles.expertTitle}>👨‍🔧 {OWNER_NAME}</h3>
                <p className={styles.expertRole}>{OWNER_TITLE}</p>
                <p className={styles.expertQuote}>
                  &ldquo;نقدم استشارة مجانية لكل عميل — نساعدك تختار أفضل نوع فيلم يناسب سيارتك أو مبناك بناءً على احتياجك الحقيقي، مش اللي يحقق أعلى ربح.&rdquo;
                </p>
              </div>

              <div className={styles.trustBox}>
                <h3 className={styles.trustTitle}>بيانات النشاط</h3>
                <div className={styles.trustGrid}>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>الحالة</span><span className={styles.trustValue}>منشأة مسجلة ✅</span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>الضريبة</span><span className={styles.trustValue}>مسجل في ZATCA</span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>الوكالة</span><span className={styles.trustValue}>Johnson Window Films</span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>المدينة</span><span className={styles.trustValue}>جدة</span></div>
                </div>
              </div>

              <div className={styles.mapPlaceholder}>
                <iframe
                  src={`https://maps.google.com/maps?q=${GEO.lat},${GEO.lng}&z=14&output=embed`}
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع عزل كور جدة"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
