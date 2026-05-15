import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, GEO, WORKING_HOURS, ADDRESS_STRUCTURED, CRN, VAT_ID } from '@/lib/constants';
import CopyButton from '@/components/ui/CopyButton';
import styles from './page.module.css';

import { getDictionary } from '@/lib/dictionaries';
import { Locale, localePath } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'تواصل معنا — واتساب واتصال مباشر | جدة' : 'Contact Us — WhatsApp & Direct Call | Jeddah',
    description: isAr ? 'تواصل مع عزل كور لحجز موعد تظليل سيارات أو عزل مباني في جدة.' : 'Contact AzelCore to book your car tinting or building insulation appointment in Jeddah.',
    alternates: { canonical: `${SITE_URL}${localePath(locale as Locale, '/contact')}` },
  };
}

const getContactSchema = (isAr: boolean) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      name: isAr ? 'تواصل معنا — عزل كور' : 'Contact Us — AzelCore',
      url: `${SITE_URL}/contact`,
      mainEntity: {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#organization`,
        name: isAr ? 'عزل كور' : 'AzelCore',
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
            name: isAr ? 'حجز استشارة مجانية' : 'Book a free consultation',
          },
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'تواصل معنا' : 'Contact Us', item: `${SITE_URL}/contact` },
      ],
    },
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-contact-1'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: isAr ? 'هل أحتاج حجز موعد مسبق؟' : 'Do I need to book in advance?', acceptedAnswer: { '@type': 'Answer', text: isAr ? 'نعم، ننصح بالحجز قبل 24 ساعة لضمان توفر الفني. في الحالات العاجلة ممكن نخدمك نفس اليوم حسب الجدول.' : 'Yes, we recommend booking 24 hours in advance. For urgent cases, same-day service may be available depending on schedule.' } },
        { '@type': 'Question', name: isAr ? 'هل الخدمة المتنقلة متاحة في حيّي؟' : 'Is mobile service available in my neighborhood?', acceptedAnswer: { '@type': 'Answer', text: isAr ? 'نغطي كل أحياء جدة بدون استثناء. الفني يصل بسيارة مجهزة بكل الأدوات.' : 'We cover all Jeddah neighborhoods without exception. The technician arrives with a fully equipped vehicle.' } },
        { '@type': 'Question', name: isAr ? 'كم مدة التظليل الكامل للسيارة؟' : 'How long does full car tinting take?', acceptedAnswer: { '@type': 'Answer', text: isAr ? 'تظليل سيارة سيدان كامل: 2-3 ساعات. SUV: 3-4 ساعات. تسلّم سيارتك جاهزة نفس اليوم.' : 'Full sedan tinting: 2-3 hours. SUV: 3-4 hours. Your car will be ready the same day.' } },
        { '@type': 'Question', name: isAr ? 'هل تقبلون الدفع بالتقسيط؟' : 'Do you accept installment payments?', acceptedAnswer: { '@type': 'Answer', text: isAr ? 'نقبل: كاش، مدى، فيزا، Apple Pay، STC Pay. للمشاريع الكبيرة: خطط دفع مرنة.' : 'We accept Cash, Mada, Visa, Apple Pay, and STC Pay. For large projects: flexible payment plans.' } },
      ],
    },
  ],
});

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContactSchema(isAr)) }} />

      <div id="voice-answer-contact-1" className="sr-only" aria-hidden="true">
        {isAr 
          ? `يمكنكم التواصل مع خدمة عملاء عزل كور في جدة على الرقم ${PHONE} أو زيارة الفرع. مواعيد العمل من السبت للخميس.`
          : `You can contact AzelCore customer service in Jeddah at ${PHONE} or visit our branch. Working hours are Saturday to Thursday.`}
      </div>

      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumbs"}>
            <Link href={localePath(locale as Locale, '/')}>{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'تواصل معنا' : 'Contact Us'}</span>
          </nav>
          <h1 className={styles.pageTitle}>{isAr ? 'تواصل ' : 'Contact '}<span className={styles.highlight}>{isAr ? 'معنا' : 'Us'}</span></h1>
          <p className={styles.pageSubtitle}>{isAr ? 'جاهزين نخدمك — اختر الطريقة اللي تناسبك.' : 'We are ready to serve you — choose your preferred method.'}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>

            {/* Contact Cards */}
            <div className={styles.cardsCol} data-nosnippet>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.whatsappCard}`}>
                <span className={styles.cardIcon}>💬</span>
                <h2 className={styles.cardTitle}>{isAr ? 'واتساب' : 'WhatsApp'}</h2>
                <p className={styles.cardDesc}>{isAr ? 'أسرع طريقة للتواصل — رد فوري' : 'Fastest way to connect — Instant reply'}</p>
                <span className={styles.cardAction}>{PHONE}</span>
              </a>

              <a href={`tel:${PHONE}`} className={styles.contactCard}>
                <span className={styles.cardIcon}>📞</span>
                <h2 className={styles.cardTitle}>{isAr ? 'اتصال مباشر' : 'Direct Call'}</h2>
                <p className={styles.cardDesc}>{isAr ? 'تكلم معنا مباشرة لأي استفسار' : 'Speak with us directly for any inquiry'}</p>
                <span className={styles.cardAction}>{PHONE}</span>
              </a>

              <div className={styles.contactCard}>
                <span className={styles.cardIcon}>🕐</span>
                <h2 className={styles.cardTitle}>{isAr ? 'ساعات العمل' : 'Working Hours'}</h2>
                <p className={styles.cardDesc}>{isAr ? WORKING_HOURS : 'Sa-Th 08:00 AM - 10:00 PM'}</p>
                <span className={styles.cardMeta}>{isAr ? 'الجمعة: إجازة' : 'Friday: Closed'}</span>
              </div>

              <div className={styles.contactCard}>
                <span className={styles.cardIcon}>📍</span>
                <h2 className={styles.cardTitle}>{isAr ? 'الموقع' : 'Location'}</h2>
                <p className={styles.cardDesc}>{isAr ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia'}</p>
                <span className={styles.cardMeta}>{isAr ? 'خدمة متنقلة متاحة' : 'Mobile Service Available'}</span>
              </div>
            </div>

            {/* Info Panel */}
            <div className={styles.infoPanel}>
              <div className={styles.expertBox}>
                <h3 className={styles.expertTitle}>👨‍🔧 {isAr ? OWNER_NAME : 'Ahmed Salem'}</h3>
                <p className={styles.expertRole}>{isAr ? OWNER_TITLE : 'Technical Director'}</p>
                <p className={styles.expertQuote}>
                  {isAr ? '“نقدم استشارة مجانية لكل عميل — نساعدك تختار أفضل نوع فيلم يناسب سيارتك أو مبناك بناءً على احتياجك الحقيقي، مش اللي يحقق أعلى ربح.”' : '“We offer a free consultation for every client — we help you choose the best film type for your car or building based on your real needs, not what yields the highest profit.”'}
                </p>
              </div>

              <div className={styles.trustBox}>
                <h3 className={styles.trustTitle}>{isAr ? 'بيانات النشاط' : 'Business Details'}</h3>
                <div className={styles.trustGrid}>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>{isAr ? 'الحالة' : 'Status'}</span><span className={styles.trustValue}>{isAr ? 'منشأة مسجلة ✅' : 'Registered Business ✅'}</span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>{isAr ? 'السجل التجاري' : 'CR Number'}</span><span className={styles.trustValue}><CopyButton valueToCopy={CRN} label={CRN} /></span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>{isAr ? 'الضريبة' : 'Tax ID'}</span><span className={styles.trustValue}><CopyButton valueToCopy={VAT_ID} label={isAr ? 'مسجل في ZATCA' : 'ZATCA Registered'} /></span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>{isAr ? 'الوكالة' : 'Dealership'}</span><span className={styles.trustValue}>Johnson & 3M Window Films</span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>{isAr ? 'المدينة' : 'City'}</span><span className={styles.trustValue}>{isAr ? 'جدة' : 'Jeddah'}</span></div>
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
                  title={isAr ? "موقع عزل كور جدة" : "AzelCore Jeddah Location"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className={styles.section} style={{ background: 'var(--surface-elevated, #0f1923)' }}>
        <div className={styles.container} style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>📍 {isAr ? 'نطاق الخدمة' : 'Service Coverage'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', textAlign: isAr ? 'right' : 'left' }}>
            <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>🚗 {isAr ? 'تظليل سيارات' : 'Car Tinting'}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{isAr ? 'جميع أحياء جدة + خدمة متنقلة. نوصل لموقعك خلال 30-60 دقيقة.' : 'All Jeddah neighborhoods + Mobile Service. We reach your location within 30-60 mins.'}</p>
            </div>
            <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>🏢 {isAr ? 'عزل مباني' : 'Building Insulation'}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{isAr ? '15 مدينة سعودية. فريق متخصص للمشاريع الكبيرة (500م²+).' : '15 Saudi cities. Specialized team for large projects (500m²+).'}</p>
            </div>
            <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>⏱️ {isAr ? 'وقت الاستجابة' : 'Response Time'}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{isAr ? 'رد واتساب: أقل من 5 دقائق. عرض سعر: خلال ساعة.' : 'WhatsApp reply: under 5 mins. Quote: within an hour.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className={styles.section}>
        <div className={styles.container} style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem', textAlign: 'center' }}>{isAr ? 'أسئلة شائعة عن الحجز والتواصل' : 'Booking & Contact FAQ'}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { 
                q: isAr ? 'هل أحتاج حجز موعد مسبق؟' : 'Do I need an appointment?', 
                a: isAr ? 'نعم، ننصح بالحجز قبل 24 ساعة لضمان توفر الفني. في الحالات العاجلة ممكن نخدمك نفس اليوم حسب الجدول.' : 'Yes, we recommend booking 24 hours in advance. Urgent same-day service may be available.' 
              },
              { 
                q: isAr ? 'هل الخدمة المتنقلة متاحة في حيّي؟' : 'Is mobile service available in my area?', 
                a: isAr ? 'نغطي كل أحياء جدة بدون استثناء. الفني يصل بسيارة مجهزة بكل الأدوات. التركيب في جراجك أو موقف مظلل.' : 'We cover all Jeddah neighborhoods. The technician arrives with full equipment. Installation in your garage or shaded parking.' 
              },
              { 
                q: isAr ? 'كم مدة التظليل الكامل للسيارة؟' : 'How long does car tinting take?', 
                a: isAr ? 'تظليل سيارة سيدان كامل: 2-3 ساعات. SUV: 3-4 ساعات. تسلّم سيارتك جاهزة نفس اليوم.' : 'Full sedan tinting: 2-3 hours. SUV: 3-4 hours. Car is ready the same day.' 
              },
              { 
                q: isAr ? 'هل تقبلون الدفع بالتقسيط؟' : 'Do you accept installments?', 
                a: isAr ? 'نقبل: كاش، مدى، فيزا، Apple Pay، STC Pay. للمشاريع الكبيرة (مباني): خطط دفع مرنة.' : 'We accept Cash, Mada, Visa, Apple Pay, STC Pay. Large projects have flexible plans.' 
              },
            ].map((faq, i) => (
              <details key={i} style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1rem 1.25rem', border: '1px solid var(--border)', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                  {faq.q}
                  <span style={{ color: 'var(--primary)' }}>+</span>
                </summary>
                <p style={{ marginTop: '0.75rem', lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
