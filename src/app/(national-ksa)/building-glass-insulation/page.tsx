import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, VAT_ID, GEO, ADDRESS_STRUCTURED } from '@/lib/constants';
import { faqs } from '@/data/faqs';
import { quickAnswers } from '@/data/quick-answers';
import ServiceSummary from '@/components/seo/ServiceSummary';
import CrossSellCards from '@/components/sections/CrossSellCards';
import dynamic from 'next/dynamic';
import ServiceDisclaimer from '@/components/seo/ServiceDisclaimer';
const CorporateRoiCalculator = dynamic(() => import('@/components/sections/CorporateRoiCalculator'));
import LiveJeddahWeatherBanner from '@/components/sections/LiveJeddahWeatherBanner';
import { ksaCities } from '@/data/local-jeddah';
import { citiesContent as citiesContentData } from '@/data/cities-content';
import OfficialPartnerBar from '@/components/seo/OfficialPartnerBar';
import AuthorProfile from '@/components/seo/AuthorProfile';
import Certifications from '@/components/seo/Certifications';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'عزل واجهات زجاج المباني في جدة — وفّر 40% من فاتورة الكهرباء',
  description: 'عزل حراري احترافي لواجهات المباني والفلل في جدة. أفلام نانو سيراميك تحجب 97% حرارة وتوفر 40% من تكاليف التكييف. ضمان 15 سنة.',
  keywords: ['عزل مباني جدة', 'عزل واجهات زجاج', 'فيلم حراري مباني', 'عزل فلل جدة', 'توفير كهرباء'],
  alternates: { canonical: `${SITE_URL}/building-glass-insulation` },
  openGraph: {
    title: 'عزل واجهات زجاج المباني — توفير 40% كهرباء | جدة',
    description: 'أفلام نانو سيراميك للمباني تحجب 97% حرارة — ضمان 15 سنة',
    url: `${SITE_URL}/building-glass-insulation`,
    images: [{ url: '/images/hero-building-glass-insulation.webp', width: 1200, height: 630 }],
  },
};

const buildingTypes = [
  { icon: '🏠', name: 'فلل وقصور', desc: 'عزل نوافذ الفلل والقصور لتقليل الحرارة وحماية الأثاث من الأشعة فوق البنفسجية مع الحفاظ على المنظر الخارجي.' },
  { icon: '🏢', name: 'أبراج ومكاتب', desc: 'عزل الواجهات الزجاجية الكاملة للأبراج التجارية — توفير طاقة ضخم وتحسين بيئة العمل.' },
  { icon: '🏬', name: 'محلات تجارية', desc: 'عزل واجهات المعارض والمحلات — حماية البضائع من أشعة الشمس مع الحفاظ على الإضاءة الطبيعية.' },
  { icon: '🏥', name: 'مستشفيات ومدارس', desc: 'عزل حراري آمن صحياً للمنشآت الحساسة — شهادات NFRC و AIMCAL معتمدة.' },
];

const filmTypes = [
  { name: 'نانو سيراميك شفاف', ir: '95%', uv: '99%', light: '70-80%', warranty: '15 سنة', best: true },
  { name: 'عاكس فضي', ir: '85%', uv: '99%', light: '15-35%', warranty: '10 سنوات', best: false },
  { name: 'عاكس رمادي', ir: '80%', uv: '99%', light: '20-40%', warranty: '10 سنوات', best: false },
  { name: 'أمان وحماية', ir: '60%', uv: '99%', light: '50-70%', warranty: '12 سنة', best: false },
];

const savings = [
  { label: 'توفير فاتورة الكهرباء', value: '40%', desc: 'تقليل حمل التكييف بشكل ملحوظ' },
  { label: 'حجب الأشعة تحت الحمراء', value: '97%', desc: 'أقصى حماية حرارية' },
  { label: 'حجب الأشعة فوق البنفسجية', value: '99%', desc: 'حماية الأثاث والديكور' },
  { label: 'عمر الفيلم المتوقع', value: '+15 سنة', desc: 'ضمان مصنع رسمي' },
];

// ═══ Unified @graph — B2BService + FAQ + Breadcrumb ═══
const buildingFaqs = faqs.filter(f => f.service === 'building-glass').slice(0, 5);

const graphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Service', 'B2BService' as string],
      '@id': `${SITE_URL}/building-glass-insulation#service`,
      name: 'عزل واجهات زجاج المباني — جدة والمملكة',
      description: 'عزل حراري احترافي لواجهات المباني التجارية والفلل — توفير 40% كهرباء. متوافق مع كود البناء السعودي SBC 601 ومعايير ASHRAE 90.1.',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'جدة', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
        { '@type': 'Country', name: 'المملكة العربية السعودية' },
      ],
      serviceType: 'عزل واجهات زجاج مباني',
      offers: { '@type': 'AggregateOffer', priceCurrency: 'SAR', lowPrice: '50', highPrice: '200', unitText: 'ر.س/م²' },
      termsOfService: `${SITE_URL}/about`,
      audience: { '@type': 'BusinessAudience', audienceType: 'مقاولون، شركات عقارية، ملاك مباني تجارية' },
      // ── Agentic Schema: ReserveAction ──
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
          name: 'حجز معاينة عزل مباني',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '38',
        bestRating: '5',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/building-glass-insulation#faq`,
      mainEntity: buildingFaqs.map(f => ({
        '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'عزل واجهات مباني', item: `${SITE_URL}/building-glass-insulation` },
      ],
    },
    // ── SpeakableSpecification — Voice Search Monopoly (B2B) ──
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-b2b-1', '#voice-answer-b2b-2', '#voice-answer-b2b-3'],
    },
  ],
};

export default function BuildingInsulationPage() {
  return (
    <>
      {/* Unified @graph — B2BService + FAQ + Breadcrumb + Speakable */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />



      {/* ═══ Live Weather Banner — QDF ISR Signal ═══ */}
      <LiveJeddahWeatherBanner />

      {/* TL;DR Highlights — Page Summary */}
      <ServiceSummary summary={quickAnswers.buildingGlass.text} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/hero-building-glass-insulation.webp" alt="عزل واجهات زجاج مبنى تجاري في جدة" fill priority fetchPriority="high" quality={75} sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>عزل واجهات مباني</span>
          </nav>
          <h1 className={styles.heroTitle}>عزل واجهات <span className={styles.greenGradient}>المباني</span> في جدة</h1>
          <p className={styles.heroSubtitle}>
            وفّر <strong>40% من فاتورة الكهرباء</strong> بأفلام عزل حراري أمريكية — حجب 97% من الحرارة
            مع الحفاظ على الإضاءة الطبيعية والمنظر الخارجي.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>طلب عرض سعر</a>
            <a href="#types" className={styles.secondaryBtn}>أنواع العزل ↓</a>
          </div>
        </div>
      </section>

      {/* ═══ E-E-A-T: Government Trust Signals ═══ */}
      <div style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>
        <OfficialPartnerBar entityKeys={['GOV.SASO', 'GOV.SBC', 'GOV.BALADI']} />
      </div>

      {/* Savings Stats */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {savings.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statDesc}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Types — SGE Semantic dl/dt/dd */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أنواع المباني</span>
            <h2 className={styles.sectionTitle}>حلول عزل لكل نوع مبنى</h2>
            <p className={styles.sectionSubtitle}>نخدم المشاريع السكنية والتجارية — عقود شركات ومناقصات حكومية</p>
          </div>
          <dl className={styles.typesGrid}>
            {buildingTypes.map((b, i) => (
              <div key={i} className={styles.typeCard}>
                <dt>
                  <span className={styles.typeIcon}>{b.icon}</span>
                  {b.name}
                </dt>
                <dd>{b.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Film Types */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="types">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أنواع الأفلام</span>
            <h2 className={styles.sectionTitle}>اختر الفيلم المناسب لمبناك</h2>
          </div>
          <div className={styles.filmTable}>
            <table className={styles.table} itemScope itemType="http://schema.org/Table">
              <caption className={styles.tableCaption} itemProp="about">مقارنة أنواع أفلام عزل المباني في السعودية 2026 — حسب معايير ASHRAE و SBC</caption>
              <thead>
                <tr><th scope="col">نوع الفيلم</th><th scope="col">حجب IR</th><th scope="col">حجب UV</th><th scope="col">نفاذية الضوء</th><th scope="col">الضمان</th></tr>
              </thead>
              <tbody>
                {filmTypes.map((f, i) => (
                  <tr key={i} className={f.best ? styles.bestRow : ''}>
                    <td className={styles.filmName}>{f.name} {f.best && '⭐'}</td>
                    <td>{f.ir}</td><td>{f.uv}</td><td>{f.light}</td><td>{f.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits — SGE Semantic dl/dt/dd */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>المزايا</span>
            <h2 className={styles.sectionTitle}>لماذا عزل واجهات المباني ضرورة في جدة</h2>
          </div>
          <dl className={styles.benefitsGrid}>
            {[
              { icon: '💰', title: 'توفير مالي ضخم', desc: 'تقليل استهلاك الكهرباء بنسبة تصل إلى 40% — استرداد التكلفة خلال 2-3 سنوات. متوافق مع SBC 601.' },
              { icon: '🌡️', title: 'راحة حرارية', desc: 'تقليل درجة حرارة الزجاج بمقدار 15-20 درجة — بيئة مريحة بدون بقع حرارية. معيار ASHRAE 55.' },
              { icon: '🛋️', title: 'حماية الأثاث', desc: 'حجب 99% من الأشعة فوق البنفسجية المسببة لبهتان الأثاث والستائر والأرضيات.' },
              { icon: '🔒', title: 'أمان إضافي', desc: 'أفلام الأمان تمنع تناثر الزجاج عند الكسر — مطلوب في المباني التجارية حسب كود البناء السعودي.' },
              { icon: '👁️', title: 'خصوصية ذكية', desc: 'أفلام عاكسة توفر خصوصية نهارية كاملة مع الحفاظ على الرؤية من الداخل.' },
              { icon: '🌿', title: 'صديق للبيئة', desc: 'تقليل البصمة الكربونية بتخفيض استهلاك الطاقة — متوافق مع رؤية 2030 وأهداف LEED.' },
            ].map((b, i) => (
              <div key={i} className={styles.benefitCard}>
                <dt><span className={styles.benefitIcon}>{b.icon}</span>{b.title}</dt>
                <dd>{b.desc}</dd>
              </div>
            ))}
          </dl>

          {/* ═══ E-E-A-T: Verification Badges ═══ */}
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Certifications sector="المباني" />
          </div>
        </div>
      </section>

      {/* Corporate ROI Calculator — B2B Information Gain */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>عقود الشركات</span>
            <h2 className={styles.sectionTitle}>حاسبة العائد على الاستثمار — مشاريع المباني</h2>
            <p className={styles.sectionSubtitle}>أداة للمقاولين وملاك العقارات التجارية — احسب توفيرك حسب معايير كود البناء السعودي</p>
          </div>
          <CorporateRoiCalculator />
        </div>
      </section>

      {/* Gallery */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أعمالنا</span>
            <h2 className={styles.sectionTitle}>من مشاريعنا في عزل المباني</h2>
          </div>
          <div className={styles.galleryGrid}>
            {['building-tint-before-after', 'commercial-facade-tinting', 'villa-window-insulation-jeddah', 'office-window-tinting', 'reflective-film-building', 'gallery-building-after-01'].map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image src={`/images/${img}.webp`} alt={`عزل واجهات مباني جدة — مشروع ${i + 1}`} width={400} height={300} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YMYL Safety Warning — E-E-A-T Trust */}
      <ServiceDisclaimer
        title="أمان الزجاج: المباني"
        text="فيلم الأمان (Safety Film) يمنع تناثر الزجاج عند الكسر ويحمي من الإصابات. مطلوب في المباني التجارية والمدارس حسب كود البناء السعودي."
      />

      {/* KSA Cities Coverage — dynamic-pages Content from cities-content.ts */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>تغطية وطنية</span>
            <h2 className={styles.sectionTitle}>نخدم 15 مدينة سعودية</h2>
            <p className={styles.sectionSubtitle}>عزل واجهات مباني احترافي في كل أنحاء المملكة — كل مدينة بتوصية مخصصة لمناخها.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
            {ksaCities.map(city => {
              const content = citiesContentData[city.id];
              return (
                <details key={city.id} style={{ background: 'var(--surface)', borderRadius: '14px', padding: '1.25rem', border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>🏙️ {city.nameAr} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>({city.avgTemp} | {city.humidity} رطوبة)</span></span>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>+</span>
                  </summary>
                  {content && (
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <p style={{ lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{content.paragraph}</p>
                      <div style={{ background: 'var(--surface-elevated, #0f1923)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                        <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>💰 تقدير التوفير</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text)', marginTop: '0.25rem' }}>{content.savingsEstimate}</p>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}><strong>الفيلم الموصى:</strong> {content.recommendedFilm}</p>
                    </div>
                  )}
                </details>
              );
            })}
          </div>
        </div>
      </section>

      <CrossSellCards currentPage="building-glass-insulation" />

      {/* ═══ E-E-A-T: Expert Review Entity ═══ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <AuthorProfile
            expertName={OWNER_NAME}
            expertTitle={OWNER_TITLE}
            organization="عزل كور لخدمات مشاريع المباني"
            quote="تطبيق معايير كود البناء السعودي (SBC) في العزل الزجاجي ليس خياراً بل ضرورة لتقليل الهدر المالي. نضمن لك أفلام عزل معتمدة توفر حتى 40% من استهلاك التكييف وتطيل عمر الأثاث والمعدات داخل المبنى."
            reviewDate="2026-05-01"
          />
        </div>
      </section>

      {/* CTA — data-nosnippet (vector density) */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>جاهز توفّر في <span className={styles.greenGradient}>فاتورة الكهرباء</span>؟</h2>
          <p className={styles.ctaSubtitle}>معاينة مجانية + عرض سعر فوري — وكيل جونسون و 3M المعتمد في جدة</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>طلب معاينة مجانية</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>
      {/* ═══ Voice Search Speakable Answers — B2B TTS Targets ═══ */}
      <div id="voice-answer-b2b-1" style={{ display: 'none' }} aria-hidden="true">
        عزل واجهات المباني يوفر 40% من فاتورة الكهرباء. أفلام نانو سيراميك أمريكية متوافقة مع كود البناء السعودي. ضمان 15 سنة.
      </div>
      <div id="voice-answer-b2b-2" style={{ display: 'none' }} aria-hidden="true">
        تكلفة عزل زجاج المباني تبدأ من 50 ريال للمتر المربع. العائد على الاستثمار خلال 7 إلى 18 شهر حسب مساحة الواجهة.
      </div>
      <div id="voice-answer-b2b-3" style={{ display: 'none' }} aria-hidden="true">
        عزل كور يخدم المباني التجارية والفلل والمدارس في 15 مدينة سعودية. فريق متخصص وعقود شركات ومناقصات حكومية.
      </div>
    </>
  );
}
