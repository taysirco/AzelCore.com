import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, GEO, WORKING_HOURS, ADDRESS_STRUCTURED, CRN, VAT_ID } from '@/lib/constants';
import CopyButton from '@/components/ui/CopyButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'تواصل معنا — عزل كور جدة | واتساب واتصال مباشر',
  description: 'تواصل مع عزل كور لحجز موعد تظليل سيارات أو عزل مباني في جدة. واتساب، اتصال مباشر، أو زيارة ورشتنا.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
        taxID: VAT_ID,
        identifier: {
          '@type': 'PropertyValue',
          name: 'Commercial Registration (CR)',
          value: CRN,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '127',
          bestRating: '5',
        },
        potentialAction: {
          '@type': 'ReserveAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: WHATSAPP_LINK,
            actionPlatform: [
              'http://schema.org/DesktopWebPlatform',
              'http://schema.org/MobileWebPlatform',
            ],
          },
          result: {
            '@type': 'Reservation',
            name: 'حجز استشارة مجانية',
          },
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'تواصل معنا', item: `${SITE_URL}/contact` },
      ],
    },
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-contact-1'],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* ── Voice SEO Target — Contact ── */}
      <div id="voice-answer-contact-1" className="sr-only" aria-hidden="true">
        يمكنكم التواصل مع خدمة عملاء عزل كور في جدة على الرقم {PHONE} أو زيارة الفرع. مواعيد العمل من السبت للخميس.
      </div>

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
            <div className={styles.cardsCol} data-nosnippet>
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
                  <div className={styles.trustItem}><span className={styles.trustLabel}>السجل التجاري</span><span className={styles.trustValue}><CopyButton valueToCopy={CRN} label={CRN} /></span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>الضريبة</span><span className={styles.trustValue}><CopyButton valueToCopy={VAT_ID} label="مسجل في ZATCA" /></span></div>
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

      {/* Service Coverage */}
      <section className={styles.section} style={{ background: 'var(--color-surface-elevated, #0f1923)' }}>
        <div className={styles.container} style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>📍 نطاق الخدمة</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', textAlign: 'right' }}>
            <div style={{ background: 'var(--color-surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--color-border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>🚗 تظليل سيارات</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>جميع أحياء جدة + خدمة متنقلة. نوصل لموقعك خلال 30-60 دقيقة.</p>
            </div>
            <div style={{ background: 'var(--color-surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--color-border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>🏢 عزل مباني</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>15 مدينة سعودية. فريق متخصص للمشاريع الكبيرة (500م²+).</p>
            </div>
            <div style={{ background: 'var(--color-surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--color-border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>⏱️ وقت الاستجابة</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>رد واتساب: أقل من 5 دقائق. عرض سعر: خلال ساعة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className={styles.section}>
        <div className={styles.container} style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1.5rem', textAlign: 'center' }}>أسئلة شائعة عن الحجز والتواصل</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'هل أحتاج حجز موعد مسبق؟', a: 'نعم، ننصح بالحجز قبل 24 ساعة لضمان توفر الفني. في الحالات العاجلة ممكن نخدمك نفس اليوم حسب الجدول.' },
              { q: 'هل الخدمة المتنقلة متاحة في حيّي؟', a: 'نغطي كل أحياء جدة بدون استثناء. الفني يصل بسيارة مجهزة بكل الأدوات. التركيب في جراجك أو موقف مظلل.' },
              { q: 'كم مدة التظليل الكامل للسيارة؟', a: 'تظليل سيارة سيدان كامل: 2-3 ساعات. SUV: 3-4 ساعات. تسلّم سيارتك جاهزة نفس اليوم.' },
              { q: 'هل تقبلون الدفع بالتقسيط؟', a: 'نقبل: كاش، مدى، فيزا، Apple Pay، STC Pay. للمشاريع الكبيرة (مباني): خطط دفع مرنة.' },
            ].map((faq, i) => (
              <details key={i} style={{ background: 'var(--color-surface)', borderRadius: '12px', padding: '1rem 1.25rem', border: '1px solid var(--color-border)', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                  {faq.q}
                  <span style={{ color: 'var(--color-primary)' }}>+</span>
                </summary>
                <p style={{ marginTop: '0.75rem', lineHeight: '1.8', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
