import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE } from '@/lib/constants';
import { citiesContent } from '@/data/cities-content';
import { ksaCities } from '@/data/local-jeddah';
import CrossSellCards from '@/components/sections/CrossSellCards';
import SiloNav from '@/components/seo/SiloNav';
import ServiceDisclaimer from '@/components/seo/ServiceDisclaimer';
import CorporateRoiCalculator from '@/components/sections/CorporateRoiCalculator';
import OfficialPartnerBar from '@/components/seo/OfficialPartnerBar';
import AuthorProfile from '@/components/seo/AuthorProfile';
import Certifications from '@/components/seo/Certifications';
import { Locale } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';
import styles from '../page.module.css';

// ═══ SSG: Pre-build 15 city routes at build time ═══
export function generateStaticParams() {
  return ksaCities.map((city) => ({
    city: city.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; city: string }> }): Promise<Metadata> {
  const { locale, city } = await params;
  const isAr = locale === 'ar';
  const cityObj = ksaCities.find(c => c.id === city);
  if (!cityObj) return {};

  return {
    title: isAr ? `عزل واجهات زجاج المباني في ${cityObj.nameAr} — وفّر 40% كهرباء` : `Building Glass Facade Insulation in ${cityObj.nameEn} — Save 40% Electricity`,
    description: isAr ? `عزل حراري احترافي لواجهات المباني والفلل في ${cityObj.nameAr}. نانو سيراميك يحجب 97% حرارة، متوافق مع كود البناء السعودي. خصم للمشاريع.` : `Professional thermal insulation for building facades and villas in ${cityObj.nameEn}. Nano ceramic blocks 97% of heat, compliant with Saudi Building Code. Project discounts.`,
    alternates: getAlternates(locale as Locale, `/building-glass-insulation/${cityObj.id}`),
    openGraph: {
      title: isAr ? `عزل مباني في ${cityObj.nameAr} | ضمان 15 سنة` : `Building Insulation in ${cityObj.nameEn} | 15 Year Warranty`,
      description: isAr ? `أفضل عزل زجاج مباني في ${cityObj.nameAr}. تقليل التكييف 40%.` : `Best building glass insulation in ${cityObj.nameEn}. Reduce AC usage by 40%.`,
      url: `${SITE_URL}/building-glass-insulation/${cityObj.id}`,
      images: [{ url: `${SITE_URL}/api/og?title=${encodeURIComponent(isAr ? `عزل مباني ${cityObj.nameAr}` : `Building Insulation ${cityObj.nameEn}`)}&subtitle=${encodeURIComponent(isAr ? `تخفيض فاتورة التكييف 40%` : `Reduce AC Bill by 40%`)}&type=building`, width: 1200, height: 630 }],
    },
  };
}

// ═══ City-Specific @graph Schema ═══
function buildCitySchema(cityObj: typeof ksaCities[0], content: any, isAr: boolean) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/building-glass-insulation/${cityObj.id}#service`,
        name: isAr ? `عزل واجهات زجاج المباني في ${cityObj.nameAr}` : `Building Glass Facade Insulation in ${cityObj.nameEn}`,
        serviceType: isAr ? 'عزل حراري للمباني' : 'Building Thermal Insulation',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: {
          '@type': 'City',
          name: isAr ? cityObj.nameAr : cityObj.nameEn,
          containedInPlace: { '@type': 'Country', name: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia' },
        },
        description: isAr ? `عزل حراري احترافي لواجهات المباني والفلل في ${cityObj.nameAr}. حرارة تصل ${cityObj.avgTemp} ورطوبة ${cityObj.humidity}.` : `Professional thermal insulation for building facades and villas in ${cityObj.nameEn}. Heat up to ${cityObj.avgTemp} and humidity ${cityObj.humidity}.`,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'SAR',
          lowPrice: '50',
          highPrice: '200',
          unitText: isAr ? 'متر مربع' : 'Square Meter',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((faq: any) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: isAr ? 'عزل المباني' : 'Building Insulation', item: `${SITE_URL}/building-glass-insulation` },
          { '@type': 'ListItem', position: 3, name: isAr ? `عزل مباني ${cityObj.nameAr}` : `Building Insulation in ${cityObj.nameEn}`, item: `${SITE_URL}/building-glass-insulation/${cityObj.id}` },
        ],
      },
    ],
  };
}

export default async function BuildingInsulationCityPage({ params }: { params: Promise<{ locale: string; city: string }> }) {
  const { locale, city } = await params;
  const isAr = locale === 'ar';
  const cityObj = ksaCities.find(c => c.id === city);
  const content = citiesContent[city];

  if (!cityObj || !content) {
    notFound();
  }

  const citySchema = buildCitySchema(cityObj, content, isAr);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <section className={styles.hero} style={{ minHeight: '50vh', paddingTop: '100px', paddingBottom: '60px' }}>
        <div className={styles.heroBg} style={{ background: 'var(--bg)' }}>
          <div className={styles.heroOverlay} style={{ background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 100%)' }} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">{isAr ? 'الرئيسية' : 'Home'}</Link> / <Link href="/building-glass-insulation">{isAr ? 'عزل المباني' : 'Building Insulation'}</Link> / <span>{isAr ? cityObj.nameAr : cityObj.nameEn}</span>
          </nav>
          <h1 className={styles.heroTitle}>
            {isAr ? 'عزل زجاج المباني في ' : 'Building Glass Insulation in '}<span className={styles.greenGradient}>{isAr ? cityObj.nameAr : cityObj.nameEn}</span>
          </h1>
          <p className={styles.heroSubtitle}>
            {isAr ? `حلول متوافقة مع مناخ ${cityObj.nameAr} (رطوبة ${cityObj.humidity}، حرارة تصل ${cityObj.avgTemp})` : `Solutions compatible with ${cityObj.nameEn} climate (Humidity ${cityObj.humidity}, Heat up to ${cityObj.avgTemp})`}
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? `حجز معاينة في ${cityObj.nameAr}` : `Book an inspection in ${cityObj.nameEn}`}</a>
          </div>
        </div>
      </section>

      {/* ═══ E-E-A-T: Government Trust Signals ═══ */}
      <div style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>
        <OfficialPartnerBar entityKeys={['GOV.SASO', 'GOV.SBC', 'GOV.BALADI']} />
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? `خبراء العزل في ${cityObj.nameAr}` : `Insulation Experts in ${cityObj.nameEn}`}</span>
            <h2 className={styles.sectionTitle}>{isAr ? `لماذا العزل الحراري ضروري في ${cityObj.nameAr}؟` : `Why is thermal insulation essential in ${cityObj.nameEn}?`}</h2>
          </div>

          {/* Sentiment U-Curve Matrix */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(255,100,100,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--danger)' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong style={{ color: 'var(--danger)' }}>{isAr ? 'التحدي:' : 'The Challenge:'} </strong>
                {isAr ? content.paragraph : content.paragraphEn}
              </p>
            </div>
            
            <div style={{ background: 'rgba(100,255,100,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--success)' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong style={{ color: 'var(--success)' }}>{isAr ? 'العائد المتوقع:' : 'Expected Return:'} </strong>
                {isAr ? content.savingsEstimate : content.savingsEstimateEn}
              </p>
            </div>

            <div style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong style={{ color: 'var(--primary)' }}>التوصية الهندسية: </strong>
                نوصي بـ <strong>{isAr ? content.recommendedFilm : content.recommendedFilmEn}</strong> لتحقيق أعلى كفاءة وتوافق مع كود البناء السعودي في {cityObj.nameAr}.
              </p>
            </div>
          </div>

          {/* ═══ E-E-A-T: Verification Badges ═══ */}
          <div style={{ marginTop: 'var(--space-8)' }}>
            <Certifications sector="المباني" />
          </div>
        </div>
      </section>

      {/* ═══ Localized FAQ for this specific city ═══ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أسئلة شائعة</span>
            <h2 className={styles.sectionTitle}>استفسارات مشاريع {cityObj.nameAr}</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {content.faqs.map((faq, i) => (
              <details key={i} style={{ background: 'var(--surface)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border)', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 600, color: 'var(--text)', listStyle: 'none' }}>{isAr ? faq.question : faq.questionEn}</summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{isAr ? faq.answer : faq.answerEn}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CorporateRoiCalculator />

      <ServiceDisclaimer
        title="أمان الزجاج وكود البناء SBC"
        text={`المشاريع التجارية في ${cityObj.nameAr} مُلزمة بتطبيق كود البناء السعودي (SBC 601) لترشيد الطاقة. العزل التجاري الغير معتمد يعرضك لمخالفات بلدية وعدم اجتياز فحص الدفاع المدني.`}
      />

      {/* ═══ E-E-A-T: Expert Review Entity ═══ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <AuthorProfile
            expertName={OWNER_NAME}
            expertTitle={OWNER_TITLE}
            organization="عزل كور لخدمات مشاريع المباني"
            quote={`أشرفنا على العديد من مشاريع العزل في ${cityObj.nameAr}. التعامل مع مناخ المنطقة (حرارة تصل ${cityObj.avgTemp} ورطوبة ${cityObj.humidity}) يتطلب اختيار فيلم نانو سيراميك بمواصفات دقيقة جداً لتجنب الكسر الحراري للزجاج.`}
            reviewDate="2026-05-01"
          />
        </div>
      </section>

      <SiloNav
        items={ksaCities.map(c => ({ id: c.id, nameAr: c.nameAr }))}
        currentId={city}
        basePath="/building-glass-insulation"
        label="عزل مباني في مدن أخرى"
      />

      <CrossSellCards currentPage={`building-glass-insulation-${cityObj.id}`} />
    </>
  );
}
