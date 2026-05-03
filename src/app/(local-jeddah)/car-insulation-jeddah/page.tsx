import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, SITE_NAME_EN, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, VAT_ID, CRN, GEO, ADDRESS_STRUCTURED } from '@/lib/constants';
import { faqs } from '@/data/faqs';
import { quickAnswers } from '@/data/quick-answers';
import { jeddahDistricts } from '@/data/local-jeddah';
import ServiceSummary from '@/components/seo/ServiceSummary';
import CrossSellCards from '@/components/sections/CrossSellCards';
import ServiceDisclaimer from '@/components/seo/ServiceDisclaimer';
import LiveJeddahWeatherBanner from '@/components/sections/LiveJeddahWeatherBanner';
import ThermalSliderBeforeAfter from '@/components/sections/ThermalSliderBeforeAfter';
import VoiceSearchFAQ from '@/components/sections/VoiceSearchFAQ';
import { datasetMeta } from '@/data/jeddah-thermal-research';
import OfficialPartnerBar from '@/components/seo/OfficialPartnerBar';
import AuthorProfile from '@/components/seo/AuthorProfile';
import Certifications from '@/components/seo/Certifications';
import styles from './page.module.css';

// ════════════════════════════════════════════
// Metadata — generateMetadata (static export)
// ════════════════════════════════════════════

export const metadata: Metadata = {
  title: 'تظليل سيارات جدة — نانو سيراميك + ضمان 10 سنوات',
  description: 'أفضل تظليل سيارات في جدة بأفلام نانو سيراميك أمريكية من جونسون و 3M. حجب 97% حرارة، ضمان 10 سنوات، لا يحجب الإشارات. وكيل جونسون المعتمد.',
  keywords: ['تظليل سيارات جدة', 'تظليل نانو سيراميك', 'عزل حراري سيارات', 'تظليل 3M جدة', 'تظليل جونسون', 'أفضل محل تظليل جدة'],
  alternates: { canonical: `${SITE_URL}/car-insulation-jeddah` },
  openGraph: {
    title: 'تظليل سيارات جدة — نانو سيراميك أمريكي',
    description: 'أفلام نانو سيراميك تحجب 97% IR — ضمان 10 سنوات — وكيل جونسون المعتمد',
    url: `${SITE_URL}/car-insulation-jeddah`,
    images: [{ url: '/images/hero-car-tinting-process.webp', width: 1200, height: 630 }],
  },
};

// ════════════════════════════════════════════
// Data Constants
// ════════════════════════════════════════════

const tintTypes = [
  { name: 'نانو سيراميك', ir: '95-97%', uv: '99%', warranty: '10 سنوات', price: '1,200 - 3,200', signal: '✅ لا يحجب', best: true },
  { name: 'كربوني متقدم', ir: '70-85%', uv: '99%', warranty: '7 سنوات', price: '800 - 1,500', signal: '✅ لا يحجب', best: false },
  { name: 'هايبرد', ir: '80-86%', uv: '99%', warranty: '5 سنوات', price: '600 - 1,200', signal: '⚠️ قد يحجب', best: false },
  { name: 'مصبوغ (عادي)', ir: '25-40%', uv: '70%', warranty: '1 سنة', price: '200 - 500', signal: '✅ لا يحجب', best: false },
];

const vltGuide = [
  { level: '5% (ليموزين)', desc: 'أغمق درجة — حماية خصوصية كاملة. مناسب للزجاج الخلفي.', legal: '⚠️ غير مسموح للأمامي' },
  { level: '15%', desc: 'غامق جداً — خصوصية عالية مع رؤية مقبولة.', legal: '⚠️ الخلفي فقط' },
  { level: '35%', desc: 'توازن بين الخصوصية والرؤية — الأكثر طلباً في جدة.', legal: '✅ الأكثر شيوعاً' },
  { level: '50%', desc: 'فاتح — حماية حرارية ممتازة مع وضوح عالي.', legal: '✅ مسموح' },
  { level: '70%', desc: 'شبه شفاف — للزجاج الأمامي. حماية UV/IR بدون تغيير المظهر.', legal: '✅ الأمامي' },
];

const benefits = [
  { icon: '🔬', title: 'فحص بكاميرا FLIR', desc: 'نثبت الفرق بالأرقام — اختبار حقيقي بالكاميرا الحرارية قبل وبعد التركيب.' },
  { icon: '🖥️', title: 'قص كمبيوتر دقيق', desc: 'قص بالكمبيوتر حسب موديل السيارة — بدون شفرة تلمس الزجاج.' },
  { icon: '🏭', title: 'بيئة نظيفة', desc: 'تركيب في ورشة مغلقة ومكيفة — صفر غبار وصفر فقاعات.' },
  { icon: '📜', title: 'شهادة ضمان رسمية', desc: 'ضمان مكتوب من المصنع + فاتورة ضريبية رسمية.' },
  { icon: '⏱️', title: 'تركيب سريع', desc: 'سيدان كاملة في 2-3 ساعات — SUV في 3-5 ساعات.' },
  { icon: '📡', title: 'لا يحجب الإشارات', desc: 'أفلام غير معدنية — الهاتف و GPS و Apple Pay يعملون بشكل طبيعي.' },
];

const processSteps = [
  { step: '01', title: 'الاستشارة', desc: 'نحلل نوع سيارتك واحتياجك ونقترح أفضل فيلم ودرجة VLT.', icon: '💬' },
  { step: '02', title: 'التنظيف العميق', desc: 'تنظيف شامل للزجاج بمحلول خاص لضمان التصاق مثالي.', icon: '🧹' },
  { step: '03', title: 'القص والتركيب', desc: 'قص كمبيوتر دقيق + تركيب احترافي في بيئة مغلقة ونظيفة.', icon: '✂️' },
  { step: '04', title: 'الفحص والتسليم', desc: 'فحص جودة + اختبار حراري + شهادة ضمان + تعليمات العناية.', icon: '✅' },
];

// ════════════════════════════════════════════
// JSON-LD @graph — Unified Knowledge Graph
// Combines: AutoBodyShop + Organization + Service + FAQ + Breadcrumb
// ════════════════════════════════════════════

const carFaqs = faqs.filter(f => f.service === 'car-tinting').slice(0, 5);

const graphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── 1. AutoBodyShop (Local Entity — Jeddah) ──
    {
      '@type': 'AutoBodyShop',
      '@id': `${SITE_URL}/#autobodyshop`,
      name: 'عزل كور — تظليل سيارات جدة',
      alternateName: 'AzelCore Car Tinting Jeddah',
      url: `${SITE_URL}/car-insulation-jeddah`,
      telephone: PHONE,
      image: `${SITE_URL}/images/hero-car-tinting-process.webp`,
      logo: `${SITE_URL}/images/azelcore-logo.webp`,
      description: 'ورشة تظليل سيارات احترافية في جدة — وكيل جونسون و 3M المعتمد. أفلام نانو سيراميك أمريكية تحجب 97% حرارة مع ضمان 10 سنوات.',
      priceRange: '200-3200 SAR',
      currenciesAccepted: 'SAR',
      paymentAccepted: 'نقدي, تحويل بنكي, مدى, Apple Pay',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: GEO.lat,
        longitude: GEO.lng,
      },
      address: {
        '@type': 'PostalAddress',
        ...ADDRESS_STRUCTURED,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '08:00',
          closes: '22:00',
        },
      ],
      sameAs: [
        'https://www.instagram.com/azelcore',
      ],
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '127',
        bestRating: '5',
      },
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
          name: 'حجز موعد تظليل سيارة',
        },
      },
    },

    // ── 2. Organization (Parent KSA Company) ──
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: SITE_NAME_EN,
      url: SITE_URL,
      logo: `${SITE_URL}/images/azelcore-logo.webp`,
      foundingDate: '2024',
      taxID: VAT_ID,
      legalName: `مؤسسة ${OWNER_NAME} للتجارة`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'جدة',
        addressRegion: 'منطقة مكة المكرمة',
        addressCountry: 'SA',
      },
      founder: {
        '@type': 'Person',
        name: OWNER_NAME,
        jobTitle: OWNER_TITLE,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: PHONE,
        contactType: 'customer service',
        availableLanguage: ['ar', 'en'],
      },
    },

    // ── 3. Service + AggregateOffer + WarrantyPromise ──
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/car-insulation-jeddah#service`,
      name: 'تظليل سيارات جدة — نانو سيراميك أمريكي',
      description: 'تظليل سيارات احترافي بأفلام نانو سيراميك أمريكية من جونسون و 3M مع ضمان 10 سنوات وقص كمبيوتر دقيق',
      provider: { '@id': `${SITE_URL}/#autobodyshop` },
      areaServed: {
        '@type': 'City',
        name: 'جدة',
        sameAs: 'https://www.wikidata.org/wiki/Q5880',
      },
      serviceType: 'تظليل سيارات',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'SAR',
        lowPrice: '200',
        highPrice: '3200',
        offerCount: '4',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'أنواع التظليل',
        itemListElement: tintTypes.map((t, i) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: t.name,
            description: `حجب IR: ${t.ir} | UV: ${t.uv} | ضمان: ${t.warranty}`,
          },
          price: t.price.split(' - ')[0].replace(',', ''),
          priceCurrency: 'SAR',
          position: i + 1,
        })),
      },
      termsOfService: `${SITE_URL}/about`,
      warranty: {
        '@type': 'WarrantyPromise',
        warrantyScope: {
          '@type': 'WarrantyScope',
          name: 'ضمان شامل ضد التغير اللوني والفقاعات',
        },
        durationOfWarranty: {
          '@type': 'QuantitativeValue',
          value: 10,
          unitCode: 'ANN',
        },
      },
    },

    // ── 4. FAQPage ──
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/car-insulation-jeddah#faq`,
      mainEntity: carFaqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },

    // ── 5. BreadcrumbList ──
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/car-insulation-jeddah#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'تظليل سيارات جدة', item: `${SITE_URL}/car-insulation-jeddah` },
      ],
    },

    // ── 6. Dataset Schema — AI Citation Feature ──
    {
      '@type': 'Dataset',
      '@id': `${SITE_URL}/api/research/jeddah-thermal-data#dataset`,
      name: datasetMeta.name,
      alternateName: datasetMeta.nameAr,
      description: datasetMeta.description,
      url: `${SITE_URL}/api/research/jeddah-thermal-data`,
      license: datasetMeta.license,
      isAccessibleForFree: true,
      datePublished: datasetMeta.datePublished,
      dateModified: datasetMeta.dateModified,
      creator: { '@id': `${SITE_URL}/#organization` },
      spatialCoverage: {
        '@type': 'Place',
        name: 'Jeddah, Saudi Arabia',
        geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
      },
      temporalCoverage: datasetMeta.temporalCoverage,
      measurementTechnique: datasetMeta.measurementMethod,
      distribution: {
        '@type': 'DataDownload',
        encodingFormat: 'application/json',
        contentUrl: `${SITE_URL}/api/research/jeddah-thermal-data`,
      },
    },

    // ── 7. SpeakableSpecification — Voice Search Monopoly ──
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-1', '#voice-answer-2', '#voice-answer-3'],
    },
  ],
};

// ════════════════════════════════════════════
// Page Component — RSC (Server Component)
// ════════════════════════════════════════════

export default function CarTintingPage() {
  return (
    <>
      {/* Single @graph — unified Knowledge Graph */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />



      {/* ═══ Live Weather Banner — QDF ISR Signal ═══ */}
      <LiveJeddahWeatherBanner />

      {/* TL;DR Highlights — Page Summary */}
      <ServiceSummary summary={quickAnswers.carTinting.text} />

      {/* ═══ Hero — RSC above the fold, priority LCP image ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero-car-tinting-process.webp"
            alt="فني يركب تظليل نانو سيراميك على سيارة في ورشة عزل كور جدة"
            fill
            priority={true}
            fetchPriority="high"
            quality={80}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>تظليل سيارات</span>
          </nav>
          <h1 className={styles.heroTitle}>تظليل سيارات في <span className={styles.blueGradient}>جدة</span></h1>
          <p className={styles.heroSubtitle}>
            أفلام نانو سيراميك أمريكية تحجب <strong>97% من الأشعة تحت الحمراء</strong> — ضمان حتى عمر السيارة.
            وكيل جونسون و 3M المعتمد في جدة.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>احجز موعد تظليل</a>
            <a href="#types" className={styles.secondaryBtn}>أنواع التظليل ↓</a>
          </div>
        </div>
      </section>

      {/* ═══ E-E-A-T: Government Trust Signals ═══ */}
      <div style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>
        <OfficialPartnerBar entityKeys={['GOV.SASO', 'GOV.TRAFFIC', 'GOV.BALADI']} />
      </div>

      {/* ═══ Why Us — Semantic <dl> for SGE extraction ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>لماذا عزل كور</span>
            <h2 className={styles.sectionTitle}>تظليل سيارات احترافي — مش مجرد لصق فيلم</h2>
          </div>
          <dl className={styles.benefitsDl}>
            {benefits.map((b, i) => (
              <div key={i}>
                <dt>
                  <span className={styles.benefitIcon} aria-hidden="true">{b.icon}</span>
                  {b.title}
                </dt>
                <dd>{b.desc}</dd>
              </div>
            ))}
          </dl>

          {/* ═══ E-E-A-T: Verification Badges ═══ */}
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Certifications sector="التظليل" />
          </div>
        </div>
      </section>

      {/* ═══ Interaction Engagement Feature — Interactive Thermal Slider ═══ */}
      <ThermalSliderBeforeAfter />

      {/* ═══ Tint Comparison — schema.org/Table for SGE ═══ */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="types">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أنواع التظليل</span>
            <h2 className={styles.sectionTitle}>اختر النوع المناسب لسيارتك</h2>
            <p className={styles.sectionSubtitle}>كل الأرقام حقيقية من الداتاشيت الرسمي — لا مبالغات.</p>
          </div>
          <div className={styles.typesTable}>
            <table
              className={styles.table}
              itemScope
              itemType="http://schema.org/Table"
            >
              <caption className={styles.tableCaption} itemProp="about">
                مقارنة أنواع تظليل السيارات في جدة 2026 — نانو سيراميك vs كربوني vs هايبرد
              </caption>
              <thead>
                <tr>
                  <th scope="col">النوع</th>
                  <th scope="col">حجب IR</th>
                  <th scope="col">حجب UV</th>
                  <th scope="col">الضمان</th>
                  <th scope="col">السعر (سيدان)</th>
                  <th scope="col">الإشارات</th>
                </tr>
              </thead>
              <tbody>
                {tintTypes.map((t, i) => (
                  <tr key={i} className={t.best ? styles.bestRow : ''}>
                    <td className={styles.typeName}>{t.name} {t.best && '⭐'}</td>
                    <td>{t.ir}</td><td>{t.uv}</td><td>{t.warranty}</td>
                    <td className={styles.price}>{t.price} ر.س</td><td>{t.signal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ VLT Guide ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>دليل الدرجات</span>
            <h2 className={styles.sectionTitle}>درجات التظليل — أي VLT يناسبك؟</h2>
          </div>
          <dl className={styles.vltGrid}>
            {vltGuide.map((v, i) => (
              <div key={i} className={styles.vltCard}>
                <dt className={styles.vltLevel}>{v.level}</dt>
                <dd>
                  <p className={styles.vltDesc}>{v.desc}</p>
                  <span className={styles.vltLegal}>{v.legal}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══ Process Steps ═══ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>خطوات العمل</span>
            <h2 className={styles.sectionTitle}>كيف نظلل سيارتك</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((s, i) => (
              <div key={i} className={styles.processCard}>
                <span className={styles.processStep}>{s.step}</span>
                <span className={styles.processIcon}>{s.icon}</span>
                <h3 className={styles.processTitle}>{s.title}</h3>
                <p className={styles.processDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Gallery Preview ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أعمالنا</span>
            <h2 className={styles.sectionTitle}>من أعمالنا في تظليل السيارات</h2>
          </div>
          <div className={styles.galleryGrid}>
            {['gallery-car-after-01', 'gallery-car-after-02', 'gallery-car-after-03', 'car-tint-heat-comparison', 'thermal-camera-car-test', 'nano-ceramic-tint-applied'].map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image src={`/images/${img}.webp`} alt={`تظليل سيارات جدة — عمل ${i + 1}`} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link href="/gallery" className={styles.secondaryBtn}>شاهد كل أعمالنا ←</Link>
          </div>
        </div>
      </section>

      {/* ═══ Local FAQ Section — Hijazi FAQ ═══ */}
      <VoiceSearchFAQ />

      {/* ═══ YMYL Safety Warnings — E-E-A-T Trust ═══ */}
      <ServiceDisclaimer
        title="تحذير: التظليل المقلد"
        text="أفلام التظليل المقلدة تحتوي مواد كيميائية تتحلل بالحرارة وتطلق أبخرة سامة داخل المقصورة. تأكد من شهادة المنتج الأصلية."
      />
      <ServiceDisclaimer
        title="تحذير قانوني: نسبة التظليل"
        text="تجاوز نسبة 30% VLT = مخالفة 500-900 ر.س + رفض الفحص الدوري + إلزام بالإزالة على حسابك."
      />

      {/* ═══ E-E-A-T: Expert Review Entity ═══ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <AuthorProfile
            expertName={OWNER_NAME}
            expertTitle={OWNER_TITLE}
            organization="عزل كور (وكيل جونسون و 3M)"
            quote="تظليل النانو سيراميك الأصلي هو استثمار حقيقي لحماية سيارتك وصحتك من أشعة UV الضارة. احرص دائماً على الالتزام بنسبة 30% المقررة من المرور وتأكد من شهادة الضمان المعتمدة."
            reviewDate={new Date().toISOString().split('T')[0]}
          />
        </div>
      </section>

      {/* ═══ Cross-sell — Causal Internal Linking ═══ */}
      <CrossSellCards currentPage="car-insulation-jeddah" />

      {/* ═══ District Hub → Spoke Links — dynamic-pages Internal Linking ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>تغطية أحياء جدة</span>
            <h2 className={styles.sectionTitle}>نخدم جميع أحياء جدة — حلول مخصصة لكل حي</h2>
            <p className={styles.sectionSubtitle}>كل حي له مناخه الخاص — نوصي بالفيلم المثالي حسب الرطوبة والحرارة والقرب من البحر.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
            {jeddahDistricts.map(d => (
              <Link
                key={d.id}
                href={`/car-insulation-jeddah/${d.id}`}
                style={{
                  display: 'block',
                  padding: 'var(--space-5)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--glass)',
                  border: '1px solid var(--glass-border)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.2s, border-color 0.2s',
                }}
              >
                <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-2)' }}>تظليل سيارات {d.nameAr} 🚗</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.6 }}>
                  رطوبة {d.humidity} • UV {d.uvIndex} • {d.zone} جدة
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — data-nosnippet (vector density) ═══ */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>جاهز تحمي سيارتك من <span className={styles.blueGradient}>حرارة جدة</span>؟</h2>
          <p className={styles.ctaSubtitle}>استشارة مجانية + عرض سعر فوري — وكيل جونسون و 3M المعتمد في جدة</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>تواصل عبر واتساب</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>
      {/* ═══ Voice Search Speakable Answers — TTS/CarPlay/Siri Targets ═══ */}
      <div id="voice-answer-1" style={{ display: 'none' }} aria-hidden="true">
        أفضل تظليل سيارات في جدة عند عزل كور. أفلام نانو سيراميك أمريكية تحجب 97% من الحرارة مع ضمان 10 سنوات. وكيل جونسون و 3M المعتمد.
      </div>
      <div id="voice-answer-2" style={{ display: 'none' }} aria-hidden="true">
        سعر تظليل السيارة في جدة يبدأ من 200 ريال للزجاج الأمامي ويوصل 3200 ريال تظليل كامل نانو سيراميك. ضمان 10 سنوات.
      </div>
      <div id="voice-answer-3" style={{ display: 'none' }} aria-hidden="true">
        تظليل نانو سيراميك ما يحجب إشارة الجوال ولا الرادار لأنه خالي من المعادن. آمن على كل الأجهزة الإلكترونية.
      </div>
    </>
  );
}
