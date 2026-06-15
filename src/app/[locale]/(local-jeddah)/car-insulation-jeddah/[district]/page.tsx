import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, VAT_ID } from '@/lib/constants';
import { jeddahDistricts } from '@/data/local-jeddah';
import ServiceSummary from '@/components/seo/ServiceSummary';
import CrossSellCards from '@/components/sections/CrossSellCards';
import SiloNav from '@/components/seo/SiloNav';
import { districtsContent } from '@/data/districts-content';
import OfficialPartnerBar from '@/components/seo/OfficialPartnerBar';
import AuthorProfile from '@/components/seo/AuthorProfile';
import Certifications from '@/components/seo/Certifications';
import { Locale, localePath } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';
import styles from '../page.module.css';

// ═══ SSG: Pre-build all 10 district routes at build time ═══
export const dynamicParams = false; // 404 for unknown districts — all pages are pre-built

export function generateStaticParams() {
  return jeddahDistricts.map(d => ({ district: d.id }));
}

// ═══ Dynamic Metadata per District (Next.js 16 — params is Promise) ═══
export async function generateMetadata({ params }: { params: Promise<{ locale: string; district: string }> }): Promise<Metadata> {
  const { locale, district } = await params;
  const isAr = locale === 'ar';
  const d = jeddahDistricts.find(x => x.id === district);
  if (!d) return {};

  return {
    title: isAr ? `تظليل سيارات ${d.nameAr} جدة — نانو سيراميك` : `Car Tinting in ${d.nameEn} Jeddah — Nano Ceramic`,
    description: isAr ? `أفضل تظليل سيارات في ${d.nameAr} بجدة. رطوبة ${d.humidity}، أشعة UV ${d.uvIndex}. نوصي بـ ${d.recommendation.split('—')[0].trim()}. وكيل جونسون و 3M المعتمد.` : `Best car tinting in ${d.nameEn} Jeddah. Humidity ${d.humidity}, UV ${d.uvIndex}. We recommend ${d.recommendationEn.split('—')[0].trim()}. Authorized Johnson & 3M Dealer.`,
    alternates: getAlternates(locale as Locale, `/car-insulation-jeddah/${district}`),
    openGraph: {
      title: isAr ? `تظليل سيارات ${d.nameAr} — جدة` : `Car Tinting ${d.nameEn} — Jeddah`,
      description: isAr ? `حلول تظليل مخصصة لـ ${d.nameAr} حسب المناخ المحلي` : `Custom tinting solutions for ${d.nameEn} based on local climate`,
      url: `${SITE_URL}/car-insulation-jeddah/${district}`,
      images: [{ url: `${SITE_URL}/api/og?title=${encodeURIComponent(isAr ? `تظليل سيارات ${d.nameAr}` : `Car Tinting ${d.nameEn}`)}&subtitle=${encodeURIComponent(isAr ? `حماية من رطوبة ${d.humidity} وأشعة UV ${d.uvIndex}` : `Protection from ${d.humidity} humidity and UV ${d.uvIndex}`)}&type=car`, width: 1200, height: 630 }],
    },
  };
}

// ═══ District-Specific @graph Schema ═══
function buildDistrictSchema(d: typeof jeddahDistricts[0], isAr: boolean) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoBodyShop',
        '@id': `${SITE_URL}/car-insulation-jeddah/${d.id}#shop`,
        name: isAr ? `عزل كور — تظليل سيارات ${d.nameAr}` : `AzelCore — Car Tinting in ${d.nameEn}`,
        url: `${SITE_URL}/car-insulation-jeddah/${d.id}`,
        telephone: PHONE,
        image: `${SITE_URL}/images/hero-car-tinting-process.webp`,
        description: isAr ? `تظليل سيارات احترافي في ${d.nameAr} بجدة. رطوبة ${d.humidity} و UV ${d.uvIndex} تتطلب ${d.recommendation.split('—')[0].trim()}.` : `Professional car tinting in ${d.nameEn} Jeddah. Humidity ${d.humidity} and UV ${d.uvIndex} require ${d.recommendationEn.split('—')[0].trim()}.`,
        areaServed: {
          '@type': 'Place',
          name: isAr ? `${d.nameAr}، جدة` : `${d.nameEn}, Jeddah`,
          geo: { '@type': 'GeoCoordinates', latitude: 21.5424, longitude: 39.1727 },
          containedInPlace: {
            '@type': 'City',
            name: isAr ? 'جدة' : 'Jeddah',
            sameAs: 'https://www.wikidata.org/wiki/Q5880',
          },
        },
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        priceRange: '200-3200 SAR',
      },
      {
        '@type': 'Service',
        name: isAr ? `تظليل نانو سيراميك — ${d.nameAr}` : `Nano Ceramic Tinting — ${d.nameEn}`,
        provider: { '@id': `${SITE_URL}/car-insulation-jeddah/${d.id}#shop` },
        serviceType: isAr ? 'تظليل سيارات' : 'Car Tinting',
        areaServed: { '@type': 'Place', name: isAr ? `${d.nameAr}، جدة` : `${d.nameEn}, Jeddah` },
        description: isAr ? d.recommendation : d.recommendationEn,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: isAr ? 'تظليل سيارات جدة' : 'Car Tinting Jeddah', item: `${SITE_URL}/car-insulation-jeddah` },
          { '@type': 'ListItem', position: 3, name: isAr ? `تظليل ${d.nameAr}` : `Tinting ${d.nameEn}`, item: `${SITE_URL}/car-insulation-jeddah/${d.id}` },
        ],
      },
    ],
  };
}

// ═══ Page Component (SSG — Next.js 16 async params) ═══
export default async function DistrictPage({ params }: { params: Promise<{ locale: string; district: string }> }) {
  const { locale, district } = await params;
  const isAr = locale === 'ar';
  const d = jeddahDistricts.find(x => x.id === district);
  if (!d) notFound();

  const schema = buildDistrictSchema(d, isAr);
  const localContent = districtsContent[district];

  // Helper translations for data that is only stored in Arabic
  const zoneEn = { 'شمال': 'North', 'جنوب': 'South', 'وسط': 'Central', 'شرق': 'East', 'غرب': 'West' }[d.zone] || d.zone;
  const saltCorrosionEn = { 'عالي': 'High', 'متوسط': 'Medium', 'منخفض': 'Low' }[d.saltCorrosion] || d.saltCorrosion;
  const economicLevelEn = { 'فاخر': 'Luxury', 'متوسط-عالي': 'Upper-Medium', 'متوسط': 'Medium', 'شعبي': 'Economy' }[d.economicLevel] || d.economicLevel;
  const avgTempEn = d.avgTemp.replace('°م', '°C');
  const distanceFromSeaEn = d.distanceFromSea.replace(' كم', ' km');

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

      <ServiceSummary summary={isAr ? `في ${d.nameAr} بجدة، الرطوبة تصل ${d.humidity} مع أشعة UV بمستوى ${d.uvIndex} وتآكل ملحي ${d.saltCorrosion}. نوصي بـ ${d.recommendation}. وكيل جونسون و 3M المعتمد — ضمان عمر السيارة.` : `In ${d.nameEn} Jeddah, Humidity reaches ${d.humidity} with UV index ${d.uvIndex} and salt corrosion ${d.saltCorrosion}. We recommend ${d.recommendationEn}. Authorized Johnson & 3M dealer — Lifetime warranty.`} isAr={isAr} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/hero-car-tinting-process.webp" alt={isAr ? `تظليل سيارات في ${d.nameAr} جدة` : `Car Tinting in ${d.nameEn} Jeddah`} fill priority fetchPriority="high" quality={75} sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumbs"}>
            <Link href={localePath(locale as Locale, '/')}>{isAr ? 'الرئيسية' : 'Home'}</Link> / <Link href={localePath(locale as Locale, '/car-insulation-jeddah')}>{isAr ? 'تظليل سيارات جدة' : 'Car Tinting Jeddah'}</Link> / <span>{isAr ? d.nameAr : d.nameEn}</span>
          </nav>
          <h1 className={styles.heroTitle}>{isAr ? 'تظليل سيارات ' : 'Car Tinting '}<span className={styles.blueGradient}>{isAr ? d.nameAr : d.nameEn}</span>{isAr ? ' جدة' : ' Jeddah'}</h1>
          <p className={styles.heroSubtitle}>
            {isAr ? `حلول تظليل مخصصة لمناخ ${d.nameAr} — رطوبة ${d.humidity}، أشعة UV بمستوى ${d.uvIndex}.` : `Custom tinting solutions for ${d.nameEn} climate — humidity ${d.humidity}, UV level ${d.uvIndex}.`}
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'احجز موعد تظليل' : 'Book a Tinting Appointment'}</a>
          </div>
        </div>
      </section>

      {/* Local Paragraph — Unique Content per District */}
      {localContent && (
        <section className={styles.section}>
          <div className={styles.container}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              {isAr ? localContent.localParagraph : localContent.localParagraphEn}
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
            <span className={styles.overline}>{isAr ? `بيانات مناخية — ${d.nameAr}` : `Climate Data — ${d.nameEn}`}</span>
            <h2 className={styles.sectionTitle}>{isAr ? `لماذا ${d.nameAr} تحتاج تظليل متخصص؟` : `Why does ${d.nameEn} need specialized tinting?`}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'بيانات مناخية حقيقية تحدد نوع الفيلم المثالي لحيّك.' : 'Real climate data determines the perfect film for your neighborhood.'}</p>
          </div>
          <dl className={styles.benefitsDl}>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">🌡️</span>{isAr ? 'درجة الحرارة' : 'Temperature'}</dt>
              <dd>{isAr ? `متوسط ${d.avgTemp} — ${d.zone} جدة. حرارة المقصورة تتجاوز 72°م بدون تظليل.` : `Average ${avgTempEn} — ${zoneEn} Jeddah. Cabin heat exceeds 72°C without tint.`}</dd>
            </div>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">💧</span>{isAr ? 'الرطوبة' : 'Humidity'}</dt>
              <dd>{d.humidity} — {Number(d.humidity.replace('%', '')) > 70 ? (isAr ? 'رطوبة عالية تتطلب فيلم مقاوم للتآكل والتقشر' : 'High humidity requires corrosion-resistant film') : (isAr ? 'رطوبة معتدلة — معظم الأفلام مناسبة' : 'Moderate humidity — most films are suitable')}.</dd>
            </div>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">☀️</span>{isAr ? 'الأشعة فوق البنفسجية' : 'UV Rays'}</dt>
              <dd>{isAr ? `مستوى UV: ${d.uvIndex}. تسبب تشقق الجلد الداخلي وبهتان لون السيارة.` : `UV Index: ${d.uvIndex}. Causes interior leather cracking and car paint fading.`}</dd>
            </div>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">🧂</span>{isAr ? 'التآكل الملحي' : 'Salt Corrosion'}</dt>
              <dd>{isAr ? `مستوى ${d.saltCorrosion} — المسافة من البحر: ${d.distanceFromSea}. ${d.saltCorrosion === 'عالي' ? 'يجب استخدام فيلم مقاوم للملوحة.' : 'تآكل محدود — خيارات أوسع.'}` : `Level ${saltCorrosionEn} — Distance from sea: ${distanceFromSeaEn}. ${d.saltCorrosion === 'عالي' ? 'Must use salt-resistant film.' : 'Limited corrosion — wider options.'}`}</dd>
            </div>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">💎</span>{isAr ? 'المستوى الاقتصادي' : 'Economic Level'}</dt>
              <dd>{isAr ? `${d.economicLevel} — السيارات الشائعة: ${d.popularCars.join('، ')}.` : `${economicLevelEn} — Popular cars: ${d.popularCarsEn.join(', ')}.`}</dd>
            </div>
            <div>
              <dt><span className={styles.benefitIcon} aria-hidden="true">✅</span>{isAr ? 'التوصية' : 'Recommendation'}</dt>
              <dd><strong>{isAr ? d.recommendation : d.recommendationEn}</strong></dd>
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
            <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: 600 }}>💡 {isAr ? 'نصيحة الخبير' : 'Expert Tip'}</p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--text)' }}>{isAr ? localContent.expertTip : localContent.expertTipEn}</p>
          </div>
        </section>
      )}

      {/* FAQ — District-Specific (3 unique questions per district) */}
      {localContent && (
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.overline}>{isAr ? `أسئلة سكان ${d.nameAr}` : `Questions from ${d.nameEn} Residents`}</span>
              <h2 className={styles.sectionTitle}>{isAr ? `أسئلة شائعة عن التظليل في ${d.nameAr}` : `Frequently Asked Questions about Tinting in ${d.nameEn}`}</h2>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {localContent.faqs.map((faq, i) => (
                <details key={i} style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {isAr ? faq.question : faq.questionEn}
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>+</span>
                  </summary>
                  <p style={{ marginTop: '0.75rem', lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{isAr ? faq.answer : faq.answerEn}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — data-nosnippet (vector density) */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>{isAr ? 'ساكن في ' : 'Living in '}<span className={styles.blueGradient}>{isAr ? d.nameAr : d.nameEn}</span>؟</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'احصل على استشارة مجانية + عرض سعر مخصص لمناخ حيّك' : 'Get a free consultation + a custom quote for your neighborhood\'s climate'}</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>

      {/* ═══ E-E-A-T: Expert Review Entity ═══ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <AuthorProfile
            isAr={isAr}
            expertName={OWNER_NAME}
            expertTitle={OWNER_TITLE}
            organization={isAr ? 'خبراء العزل وتظليل السيارات بجدة' : 'Car Tinting & Insulation Experts in Jeddah'}
            quote={isAr ? `نضمن لك في ${d.nameAr} تركيب تظليل نانو سيراميك أصلي يتناسب مع الرطوبة والحرارة العالية، مع التزامنا التام بنظام المرور السعودي ونسبة 30%.` : `We guarantee the installation of original nano-ceramic tinting in ${d.nameEn} that withstands high humidity and heat, with our full commitment to the Saudi traffic system and the 30% limit.`}
            reviewDate="2026-05-01"
          />
        </div>
      </section>

      <SiloNav
        items={jeddahDistricts.map(x => ({ id: x.id, nameAr: isAr ? x.nameAr : x.nameEn }))}
        currentId={district}
        basePath="/car-insulation-jeddah"
        label={isAr ? 'أحياء جدة الأخرى' : 'Other Jeddah Neighborhoods'}
      />

      <CrossSellCards currentPage="car-insulation-jeddah" locale={locale} />
    </>
  );
}
