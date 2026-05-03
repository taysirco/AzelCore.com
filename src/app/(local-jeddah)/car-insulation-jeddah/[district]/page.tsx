import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, VAT_ID } from '@/lib/constants';
import { jeddahDistricts } from '@/data/local-jeddah';
import ServiceSummary from '@/components/seo/ServiceSummary';
import CrossSellCards from '@/components/sections/CrossSellCards';
import { districtsContent } from '@/data/districts-content';
import OfficialPartnerBar from '@/components/seo/OfficialPartnerBar';
import AuthorProfile from '@/components/seo/AuthorProfile';
import Certifications from '@/components/seo/Certifications';
import styles from '../page.module.css';

// ═══ SSG: Pre-build all 10 district routes at build time ═══
export const dynamicParams = false; // 404 for unknown districts — all pages are pre-built

export function generateStaticParams() {
  return jeddahDistricts.map(d => ({ district: d.id }));
}

// ═══ Dynamic Metadata per District (Next.js 16 — params is Promise) ═══
export async function generateMetadata({ params }: { params: Promise<{ district: string }> }): Promise<Metadata> {
  const { district } = await params;
  const d = jeddahDistricts.find(x => x.id === district);
  if (!d) return {};

  return {
    title: `تظليل سيارات ${d.nameAr} جدة — نانو سيراميك`,
    description: `أفضل تظليل سيارات في ${d.nameAr} بجدة. رطوبة ${d.humidity}، أشعة UV ${d.uvIndex}. نوصي بـ ${d.recommendation.split('—')[0].trim()}. وكيل جونسون المعتمد.`,
    alternates: { canonical: `${SITE_URL}/car-insulation-jeddah/${district}` },
    openGraph: {
      title: `تظليل سيارات ${d.nameAr} — جدة`,
      description: `حلول تظليل مخصصة لـ ${d.nameAr} حسب المناخ المحلي`,
      url: `${SITE_URL}/car-insulation-jeddah/${district}`,
      images: [{ url: `${SITE_URL}/api/og?title=${encodeURIComponent(`تظليل سيارات ${d.nameAr}`)}&subtitle=${encodeURIComponent(`حماية من رطوبة ${d.humidity} وأشعة UV ${d.uvIndex}`)}&type=car`, width: 1200, height: 630 }],
    },
  };
}

// ═══ District-Specific @graph Schema ═══
function buildDistrictSchema(d: typeof jeddahDistricts[0]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoBodyShop',
        '@id': `${SITE_URL}/car-insulation-jeddah/${d.id}#shop`,
        name: `عزل كور — تظليل سيارات ${d.nameAr}`,
        url: `${SITE_URL}/car-insulation-jeddah/${d.id}`,
        telephone: PHONE,
        image: `${SITE_URL}/images/hero-car-tinting-process.webp`,
        description: `تظليل سيارات احترافي في ${d.nameAr} بجدة. رطوبة ${d.humidity} و UV ${d.uvIndex} تتطلب ${d.recommendation.split('—')[0].trim()}.`,
        areaServed: {
          '@type': 'Place',
          name: `${d.nameAr}، جدة`,
          geo: { '@type': 'GeoCoordinates', latitude: 21.5424, longitude: 39.1727 },
          containedInPlace: {
            '@type': 'City',
            name: 'جدة',
            sameAs: 'https://www.wikidata.org/wiki/Q5880',
          },
        },
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        priceRange: '200-3200 SAR',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '127',
          bestRating: '5',
        },
      },
      {
        '@type': 'Service',
        name: `تظليل نانو سيراميك — ${d.nameAr}`,
        provider: { '@id': `${SITE_URL}/car-insulation-jeddah/${d.id}#shop` },
        serviceType: 'تظليل سيارات',
        areaServed: { '@type': 'Place', name: `${d.nameAr}، جدة` },
        description: d.recommendation,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'تظليل سيارات جدة', item: `${SITE_URL}/car-insulation-jeddah` },
          { '@type': 'ListItem', position: 3, name: `تظليل ${d.nameAr}`, item: `${SITE_URL}/car-insulation-jeddah/${d.id}` },
        ],
      },
    ],
  };
}

// ═══ Page Component (SSG — Next.js 16 async params) ═══
export default async function DistrictPage({ params }: { params: Promise<{ district: string }> }) {
  const { district } = await params;
  const d = jeddahDistricts.find(x => x.id === district);
  if (!d) notFound();

  const schema = buildDistrictSchema(d);
  const localContent = districtsContent[district];

  // FAQPage Schema for district-specific FAQs
  const faqSchema = localContent ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localContent.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <ServiceSummary summary={`في ${d.nameAr} بجدة، الرطوبة تصل ${d.humidity} مع أشعة UV بمستوى ${d.uvIndex} وتآكل ملحي ${d.saltCorrosion}. نوصي بـ ${d.recommendation}. وكيل جونسون المعتمد — ضمان 10 سنوات.`} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/hero-car-tinting-process.webp" alt={`تظليل سيارات في ${d.nameAr} جدة`} fill priority fetchPriority="high" quality={80} sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <Link href="/car-insulation-jeddah">تظليل سيارات</Link> / <span>{d.nameAr}</span>
          </nav>
          <h1 className={styles.heroTitle}>تظليل سيارات في <span className={styles.blueGradient}>{d.nameAr}</span></h1>
          <p className={styles.heroSubtitle}>
            حلول تظليل مخصصة لمناخ {d.nameAr} — رطوبة {d.humidity}، أشعة UV بمستوى {d.uvIndex}.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>احجز موعد تظليل</a>
          </div>
        </div>
      </section>

      {/* Local Paragraph — Unique Content per District */}
      {localContent && (
        <section className={styles.section}>
          <div className={styles.container}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              {localContent.localParagraph}
            </p>
          </div>
        </section>
      )}

      {/* ═══ E-E-A-T: Government Trust Signals ═══ */}
      <div className={styles.container} style={{ marginBottom: 'var(--space-8)' }}>
        <OfficialPartnerBar entityKeys={['GOV.SASO', 'GOV.TRAFFIC', 'GOV.BALADI']} />
      </div>

      {/* Climate Data — dl/dt/dd for SGE */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>بيانات مناخية — {d.nameAr}</span>
            <h2 className={styles.sectionTitle}>لماذا {d.nameAr} تحتاج تظليل متخصص؟</h2>
            <p className={styles.sectionSubtitle}>بيانات مناخية حقيقية تحدد نوع الفيلم المثالي لحيّك.</p>
          </div>
          <dl className={styles.benefitsDl}>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">🌡️</span>درجة الحرارة</dt>
              <dd>متوسط {d.avgTemp} — {d.zone} جدة. حرارة المقصورة تتجاوز 72°م بدون تظليل.</dd>
            </div>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">💧</span>الرطوبة</dt>
              <dd>{d.humidity} — {Number(d.humidity.replace('%', '')) > 70 ? 'رطوبة عالية تتطلب فيلم مقاوم للتآكل والتقشر' : 'رطوبة معتدلة — معظم الأفلام مناسبة'}.</dd>
            </div>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">☀️</span>الأشعة فوق البنفسجية</dt>
              <dd>مستوى UV: {d.uvIndex}. تسبب تشقق الجلد الداخلي وبهتان لون السيارة.</dd>
            </div>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">🧂</span>التآكل الملحي</dt>
              <dd>مستوى {d.saltCorrosion} — المسافة من البحر: {d.distanceFromSea}. {d.saltCorrosion === 'عالي' ? 'يجب استخدام فيلم مقاوم للملوحة.' : 'تآكل محدود — خيارات أوسع.'}</dd>
            </div>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">💎</span>المستوى الاقتصادي</dt>
              <dd>{d.economicLevel} — السيارات الشائعة: {d.popularCars.join('، ')}.</dd>
            </div>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">✅</span>التوصية</dt>
              <dd><strong>{d.recommendation}</strong></dd>
            </div>
          </dl>

          {/* ═══ E-E-A-T: Verification Badges ═══ */}
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Certifications sector="التظليل" />
          </div>
        </div>
      </section>

      {/* Expert Tip */}
      {localContent && (
        <section className={styles.section} style={{ background: 'var(--surface-elevated, #1a1a2e)' }}>
          <div className={styles.container} style={{ maxWidth: '700px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: 600 }}>💡 نصيحة الخبير</p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--text)' }}>{localContent.expertTip}</p>
          </div>
        </section>
      )}

      {/* FAQ — District-Specific (3 unique questions per district) */}
      {localContent && (
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.overline}>أسئلة سكان {d.nameAr}</span>
              <h2 className={styles.sectionTitle}>أسئلة شائعة عن التظليل في {d.nameAr}</h2>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {localContent.faqs.map((faq, i) => (
                <details key={i} style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.question}
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>+</span>
                  </summary>
                  <p style={{ marginTop: '0.75rem', lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — data-nosnippet (vector density) */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>ساكن في <span className={styles.blueGradient}>{d.nameAr}</span>؟</h2>
          <p className={styles.ctaSubtitle}>احصل على استشارة مجانية + عرض سعر مخصص لمناخ حيّك</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>تواصل عبر واتساب</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>

      {/* ═══ E-E-A-T: Expert Review Entity ═══ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <AuthorProfile
            expertName={OWNER_NAME}
            expertTitle={OWNER_TITLE}
            organization="خبراء العزل وتظليل السيارات بجدة"
            quote={`نضمن لك في ${d.nameAr} تركيب تظليل نانو سيراميك أصلي يتناسب مع الرطوبة والحرارة العالية، مع التزامنا التام بنظام المرور السعودي ونسبة 30%.`}
            reviewDate={new Date().toISOString().split('T')[0]}
          />
        </div>
      </section>

      <CrossSellCards currentPage="car-insulation-jeddah" />
    </>
  );
}
