import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, PHONE, OWNER_NAME, VAT_ID } from '@/lib/constants';
import { jeddahDistricts } from '@/data/local-jeddah';
import TldrBait from '@/components/seo/TldrBait';
import CrossSellCards from '@/components/sections/CrossSellCards';
import styles from '../page.module.css';

// ═══ SSG: Pre-build all 10 district routes at build time ═══
export const dynamicParams = false; // 404 for unknown districts — all pages are pre-built

export function generateStaticParams() {
  return jeddahDistricts.map(d => ({ district: d.id }));
}

// ═══ Dynamic Metadata per District ═══
export function generateMetadata({ params }: { params: { district: string } }): Metadata {
  const d = jeddahDistricts.find(x => x.id === params.district);
  if (!d) return {};

  return {
    title: `تظليل سيارات ${d.nameAr} جدة — نانو سيراميك | عزل كور`,
    description: `أفضل تظليل سيارات في ${d.nameAr} بجدة. رطوبة ${d.humidity}، أشعة UV ${d.uvIndex}. نوصي بـ ${d.recommendation.split('—')[0].trim()}. وكيل جونسون المعتمد.`,
    alternates: { canonical: `${SITE_URL}/car-insulation-jeddah/${params.district}` },
    openGraph: {
      title: `تظليل سيارات ${d.nameAr} — عزل كور جدة`,
      description: `حلول تظليل مخصصة لـ ${d.nameAr} حسب المناخ المحلي`,
      url: `${SITE_URL}/car-insulation-jeddah/${params.district}`,
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
        image: `${SITE_URL}/images/hero-car-tinting-process.png`,
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

// ═══ Page Component (SSG) ═══
export default function DistrictPage({ params }: { params: { district: string } }) {
  const d = jeddahDistricts.find(x => x.id === params.district);
  if (!d) notFound();

  const schema = buildDistrictSchema(d);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <TldrBait summary={`في ${d.nameAr} بجدة، الرطوبة تصل ${d.humidity} مع أشعة UV بمستوى ${d.uvIndex} وتآكل ملحي ${d.saltCorrosion}. نوصي بـ ${d.recommendation}. وكيل جونسون المعتمد — ضمان 10 سنوات.`} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/hero-car-tinting-process.png" alt={`تظليل سيارات في ${d.nameAr} جدة`} fill priority fetchPriority="high" quality={80} sizes="100vw" style={{ objectFit: 'cover' }} />
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
        </div>
      </section>

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

      <CrossSellCards currentPage="car-insulation-jeddah" />
    </>
  );
}
