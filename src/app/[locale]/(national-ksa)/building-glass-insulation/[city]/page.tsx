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
import styles from '../page.module.css';

// ═══ SSG: Pre-build 15 city routes at build time ═══
export function generateStaticParams() {
  return ksaCities.map((city) => ({
    city: city.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityObj = ksaCities.find(c => c.id === city);
  if (!cityObj) return {};

  return {
    title: `عزل واجهات زجاج المباني في ${cityObj.nameAr} — وفّر 40% كهرباء`,
    description: `عزل حراري احترافي لواجهات المباني والفلل في ${cityObj.nameAr}. نانو سيراميك يحجب 97% حرارة، متوافق مع كود البناء السعودي. خصم للمشاريع.`,
    alternates: { canonical: `${SITE_URL}/building-glass-insulation/${cityObj.id}` },
    openGraph: {
      title: `عزل مباني في ${cityObj.nameAr} | ضمان 15 سنة`,
      description: `أفضل عزل زجاج مباني في ${cityObj.nameAr}. تقليل التكييف 40%.`,
      url: `${SITE_URL}/building-glass-insulation/${cityObj.id}`,
      images: [{ url: `${SITE_URL}/api/og?title=${encodeURIComponent(`عزل مباني ${cityObj.nameAr}`)}&subtitle=${encodeURIComponent(`تخفيض فاتورة التكييف 40%`)}&type=building`, width: 1200, height: 630 }],
    },
  };
}

// ═══ City-Specific @graph Schema ═══
function buildCitySchema(cityObj: typeof ksaCities[0], content: any) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/building-glass-insulation/${cityObj.id}#service`,
        name: `عزل واجهات زجاج المباني في ${cityObj.nameAr}`,
        serviceType: 'عزل حراري للمباني',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: {
          '@type': 'City',
          name: cityObj.nameAr,
          containedInPlace: { '@type': 'Country', name: 'المملكة العربية السعودية' },
        },
        description: `عزل حراري احترافي لواجهات المباني والفلل في ${cityObj.nameAr}. حرارة تصل ${cityObj.avgTemp} ورطوبة ${cityObj.humidity}.`,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'SAR',
          lowPrice: '50',
          highPrice: '200',
          unitText: 'متر مربع',
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
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'عزل المباني', item: `${SITE_URL}/building-glass-insulation` },
          { '@type': 'ListItem', position: 3, name: `عزل مباني ${cityObj.nameAr}`, item: `${SITE_URL}/building-glass-insulation/${cityObj.id}` },
        ],
      },
    ],
  };
}

export default async function BuildingInsulationCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityObj = ksaCities.find(c => c.id === city);
  const content = citiesContent[city];

  if (!cityObj || !content) {
    notFound();
  }

  const citySchema = buildCitySchema(cityObj, content);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <section className={styles.hero} style={{ minHeight: '50vh', paddingTop: '100px', paddingBottom: '60px' }}>
        <div className={styles.heroBg} style={{ background: 'var(--bg)' }}>
          <div className={styles.heroOverlay} style={{ background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 100%)' }} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <Link href="/building-glass-insulation">عزل المباني</Link> / <span>{cityObj.nameAr}</span>
          </nav>
          <h1 className={styles.heroTitle}>
            عزل زجاج المباني في <span className={styles.greenGradient}>{cityObj.nameAr}</span>
          </h1>
          <p className={styles.heroSubtitle}>
            حلول متوافقة مع مناخ {cityObj.nameAr} (رطوبة {cityObj.humidity}، حرارة تصل {cityObj.avgTemp})
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>حجز معاينة في {cityObj.nameAr}</a>
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
            <span className={styles.overline}>خبراء العزل في {cityObj.nameAr}</span>
            <h2 className={styles.sectionTitle}>لماذا العزل الحراري ضروري في {cityObj.nameAr}؟</h2>
          </div>

          {/* Sentiment U-Curve Matrix */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(255,100,100,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--danger)' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong style={{ color: 'var(--danger)' }}>التحدي: </strong>
                {content.paragraph}
              </p>
            </div>
            
            <div style={{ background: 'rgba(100,255,100,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--success)' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong style={{ color: 'var(--success)' }}>العائد المتوقع: </strong>
                {content.savingsEstimate}
              </p>
            </div>

            <div style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong style={{ color: 'var(--primary)' }}>التوصية الهندسية: </strong>
                نوصي بـ <strong>{content.recommendedFilm}</strong> لتحقيق أعلى كفاءة وتوافق مع كود البناء السعودي في {cityObj.nameAr}.
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
                <summary style={{ fontWeight: 600, color: 'var(--text)', listStyle: 'none' }}>{faq.question}</summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{faq.answer}</p>
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
