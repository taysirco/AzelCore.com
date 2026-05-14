import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { SITE_URL, SITE_NAME, SITE_NAME_EN, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, VAT_ID, CRN, GEO, ADDRESS_STRUCTURED } from '@/lib/constants';
import { getFaqs } from '@/data/faqs';
import { localVoiceFaqs } from '@/data/frequently-asked-questions';
import { quickAnswers } from '@/data/quick-answers';
import { jeddahDistricts } from '@/data/local-jeddah';
import ServiceSummary from '@/components/seo/ServiceSummary';
import CrossSellCards from '@/components/sections/CrossSellCards';
import ServiceDisclaimer from '@/components/seo/ServiceDisclaimer';
import LiveJeddahWeatherBanner from '@/components/sections/LiveJeddahWeatherBanner';
import dynamic from 'next/dynamic';
const ThermalSliderBeforeAfter = dynamic(() => import('@/components/sections/ThermalSliderBeforeAfter'));
import VoiceSearchFAQ from '@/components/sections/VoiceSearchFAQ';
import { datasetMeta } from '@/data/jeddah-thermal-research';
import OfficialPartnerBar from '@/components/seo/OfficialPartnerBar';
import AuthorProfile from '@/components/seo/AuthorProfile';
import Certifications from '@/components/seo/Certifications';
import styles from './page.module.css';

// ════════════════════════════════════════════
// Metadata — generateMetadata (static export)
// ════════════════════════════════════════════

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'تظليل سيارات جدة — نانو سيراميك + ضمان عمر السيارة' : 'تظليل سيارات جدة — نانو سيراميك + ضمان عمر السيارة | AzelCore',
    description: isAr ? 'أفضل تظليل سيارات في جدة بأفلام نانو سيراميك أمريكية من جونسون و 3M. حجب 97% حرارة، ضمان عمر السيارة، لا يحجب الإشارات. وكيل جونسون و 3M المعتمد.' : 'أفضل تظليل سيارات في جدة بأفلام نانو سيراميك أمريكية من جونسون و 3M. حجب 97% حرارة، ضمان عمر السيارة، لا يحجب الإشارات. وكيل جونسون و 3M المعتمد.',
    alternates: { canonical: `${SITE_URL}${localePath(locale as Locale, '/(local-jeddah)/car-insulation-jeddah')}` },
  };
}

// ════════════════════════════════════════════
// Data Constants
// ════════════════════════════════════════════

const getTintTypes = (isAr: boolean) => [
  { name: isAr ? 'نانو سيراميك' : 'Nano Ceramic', ir: '95-97%', uv: '99%', warranty: isAr ? 'عمر السيارة' : 'Lifetime', price: '1,200 - 3,200', signal: isAr ? '✅ لا يحجب' : '✅ No Interference', best: true },
  { name: isAr ? 'كربوني متقدم' : 'Advanced Carbon', ir: '70-85%', uv: '99%', warranty: isAr ? '7 سنوات' : '7 Years', price: '800 - 1,500', signal: isAr ? '✅ لا يحجب' : '✅ No Interference', best: false },
  { name: isAr ? 'هايبرد' : 'Hybrid', ir: '80-86%', uv: '99%', warranty: isAr ? '5 سنوات' : '5 Years', price: '600 - 1,200', signal: isAr ? '⚠️ قد يحجب' : '⚠️ May Interfere', best: false },
  { name: isAr ? 'مصبوغ (عادي)' : 'Dyed (Standard)', ir: '25-40%', uv: '70%', warranty: isAr ? '1 سنة' : '1 Year', price: '200 - 500', signal: isAr ? '✅ لا يحجب' : '✅ No Interference', best: false },
];

const getVltGuide = (isAr: boolean) => [
  { level: isAr ? '5% (ليموزين)' : '5% (Limo)', desc: isAr ? 'أغمق درجة — حماية خصوصية كاملة. مناسب للزجاج الخلفي.' : 'Darkest shade — Total privacy protection. Suitable for rear glass.', legal: isAr ? '⚠️ غير مسموح للأمامي' : '⚠️ Not allowed for front' },
  { level: '15%', desc: isAr ? 'غامق جداً — خصوصية عالية مع رؤية مقبولة.' : 'Very dark — High privacy with acceptable visibility.', legal: isAr ? '⚠️ الخلفي فقط' : '⚠️ Rear only' },
  { level: '35%', desc: isAr ? 'توازن بين الخصوصية والرؤية — الأكثر طلباً في جدة.' : 'Balance between privacy and visibility — Most requested in Jeddah.', legal: isAr ? '✅ الأكثر شيوعاً' : '✅ Most common' },
  { level: '50%', desc: isAr ? 'فاتح — حماية حرارية ممتازة مع وضوح عالي.' : 'Light — Excellent heat protection with high clarity.', legal: isAr ? '✅ مسموح' : '✅ Legal' },
  { level: '70%', desc: isAr ? 'شبه شفاف — للزجاج الأمامي. حماية UV/IR بدون تغيير المظهر.' : 'Semi-transparent — For windshield. UV/IR protection without altering appearance.', legal: isAr ? '✅ الأمامي' : '✅ Windshield' },
];

const getBenefits = (isAr: boolean) => [
  { icon: '🔬', title: isAr ? 'فحص بكاميرا FLIR' : 'FLIR Camera Inspection', desc: isAr ? 'نثبت الفرق بالأرقام — اختبار حقيقي بالكاميرا الحرارية قبل وبعد التركيب.' : 'We prove the difference in numbers — Real thermal camera test before and after installation.' },
  { icon: '🖥️', title: isAr ? 'قص كمبيوتر دقيق' : 'Precise Computer Cut', desc: isAr ? 'قص بالكمبيوتر حسب موديل السيارة — بدون شفرة تلمس الزجاج.' : 'Computer cut according to your car model — No blades touching the glass.' },
  { icon: '🏭', title: isAr ? 'بيئة نظيفة' : 'Clean Environment', desc: isAr ? 'تركيب في ورشة مغلقة ومكيفة — صفر غبار وصفر فقاعات.' : 'Installation in an enclosed, air-conditioned workshop — Zero dust, zero bubbles.' },
  { icon: '📜', title: isAr ? 'شهادة ضمان رسمية' : 'Official Warranty Certificate', desc: isAr ? 'ضمان مكتوب من المصنع + فاتورة ضريبية رسمية.' : 'Written factory warranty + Official tax invoice.' },
  { icon: '⏱️', title: isAr ? 'تركيب سريع' : 'Fast Installation', desc: isAr ? 'سيدان كاملة في 2-3 ساعات — SUV في 3-5 ساعات.' : 'Full sedan in 2-3 hours — SUV in 3-5 hours.' },
  { icon: '📡', title: isAr ? 'لا يحجب الإشارات' : 'Zero Signal Interference', desc: isAr ? 'أفلام غير معدنية — الهاتف و GPS و Apple Pay يعملون بشكل طبيعي.' : 'Non-metallic films — Phone, GPS, and Apple Pay work normally.' },
];

const getProcessSteps = (isAr: boolean) => [
  { step: '01', title: isAr ? 'الاستشارة' : 'Consultation', desc: isAr ? 'نحلل نوع سيارتك واحتياجك ونقترح أفضل فيلم ودرجة VLT.' : 'We analyze your car type and needs, proposing the best film and VLT level.', icon: '💬' },
  { step: '02', title: isAr ? 'التنظيف العميق' : 'Deep Cleaning', desc: isAr ? 'تنظيف شامل للزجاج بمحلول خاص لضمان التصاق مثالي.' : 'Comprehensive glass cleaning with a special solution to ensure perfect adhesion.', icon: '🧹' },
  { step: '03', title: isAr ? 'القص والتركيب' : 'Cutting & Installation', desc: isAr ? 'قص كمبيوتر دقيق + تركيب احترافي في بيئة مغلقة ونظيفة.' : 'Precise computer cutting + Professional installation in a clean, enclosed environment.', icon: '✂️' },
  { step: '04', title: isAr ? 'الفحص والتسليم' : 'Inspection & Delivery', desc: isAr ? 'فحص جودة + اختبار حراري + شهادة ضمان + تعليمات العناية.' : 'Quality inspection + Thermal test + Warranty certificate + Care instructions.', icon: '✅' },
];

// ════════════════════════════════════════════
// JSON-LD @graph — Unified Knowledge Graph
// Combines: AutoBodyShop + Organization + Service + FAQ + Breadcrumb
// ════════════════════════════════════════════

const getGraphSchema = (isAr: boolean) => {
  const carFaqs = getFaqs(isAr).filter(f => f.service === 'car-tinting').slice(0, 5);

  return {
  '@context': 'https://schema.org',
  '@graph': [
    // ── 1. AutoBodyShop (Local Entity — Jeddah) ──
    {
      '@type': 'AutoBodyShop',
      '@id': `${SITE_URL}/#autobodyshop`,
      name: isAr ? 'عزل كور — تظليل سيارات جدة' : 'AzelCore — Car Tinting Jeddah',
      alternateName: 'AzelCore Car Tinting Jeddah',
      url: `${SITE_URL}/car-insulation-jeddah`,
      telephone: PHONE,
      image: `${SITE_URL}/images/hero-car-tinting-process.webp`,
      logo: `${SITE_URL}/images/azelcore-logo.webp`,
      description: isAr ? 'ورشة تظليل سيارات احترافية في جدة — وكيل جونسون و 3M المعتمد. أفلام نانو سيراميك أمريكية تحجب 97% حرارة مع ضمان عمر السيارة.' : 'Professional car tinting workshop in Jeddah — Authorized Johnson & 3M dealer. American nano-ceramic films rejecting 97% of heat with a lifetime warranty.',
      priceRange: '200-3200 SAR',
      currenciesAccepted: 'SAR',
      paymentAccepted: isAr ? 'نقدي, تحويل بنكي, مدى, Apple Pay' : 'Cash, Bank Transfer, Mada, Apple Pay',
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
          name: isAr ? 'حجز موعد تظليل سيارة' : 'Book a car tinting appointment',
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
      description: 'تظليل سيارات احترافي بأفلام نانو سيراميك أمريكية من جونسون و 3M مع ضمان عمر السيارة وقص كمبيوتر دقيق',
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
        itemListElement: getTintTypes(isAr).map((t, i) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
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
          value: 15,
          unitCode: 'ANN',
        },
      },
    },

    // ── 4. FAQPage ──
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/car-insulation-jeddah#faq`,
      mainEntity: [...carFaqs, ...localVoiceFaqs].map(f => ({
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
};

// ════════════════════════════════════════════
// Page Component — RSC (Server Component)
// ════════════════════════════════════════════

export default async function CarTintingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      {/* Single @graph — unified Knowledge Graph */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGraphSchema(isAr)) }} />



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
            quality={75}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumb"}>
            <Link href="/">{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'تظليل سيارات' : 'Car Tinting'}</span>
          </nav>
          <h1 className={styles.heroTitle}>{isAr ? 'تظليل سيارات في ' : 'Car Tinting in '}<span className={styles.blueGradient}>{isAr ? 'جدة' : 'Jeddah'}</span></h1>
          <p className={styles.heroSubtitle}>
            {isAr ? <>أفلام نانو سيراميك أمريكية تحجب <strong>97% من الأشعة تحت الحمراء</strong> — ضمان حتى عمر السيارة. وكيل جونسون و 3M المعتمد في جدة.</> : <>American nano-ceramic films rejecting <strong>97% of infrared rays</strong> — lifetime warranty. Authorized Johnson & 3M dealer in Jeddah.</>}
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'احجز موعد تظليل' : 'Book Tinting Appointment'}</a>
            <a href="#types" className={styles.secondaryBtn}>{isAr ? 'أنواع التظليل ↓' : 'Tint Types ↓'}</a>
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
            <span className={styles.overline}>{isAr ? 'لماذا عزل كور' : 'Why AzelCore'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'تظليل سيارات احترافي — مش مجرد لصق فيلم' : 'Professional Car Tinting — Not Just Pasting Film'}</h2>
          </div>
          <dl className={styles.benefitsDl}>
            {getBenefits(isAr).map((b, i) => (
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
            <span className={styles.overline}>{isAr ? 'أنواع التظليل' : 'Tint Types'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'اختر النوع المناسب لسيارتك' : 'Choose the Right Type for Your Car'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'كل الأرقام حقيقية من الداتاشيت الرسمي — لا مبالغات.' : 'All numbers are real from official datasheets — no exaggerations.'}</p>
          </div>
          <div className={styles.typesTable}>
            <table
              className={styles.table}
              itemScope
              itemType="http://schema.org/Table"
            >
              <caption className={styles.tableCaption} itemProp="about">
                {isAr ? 'مقارنة أنواع تظليل السيارات في جدة 2026 — نانو سيراميك vs كربوني vs هايبرد' : 'Car Tinting Comparison in Jeddah 2026 — Nano Ceramic vs Carbon vs Hybrid'}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{isAr ? 'النوع' : 'Type'}</th>
                  <th scope="col">{isAr ? 'حجب IR' : 'IR Block'}</th>
                  <th scope="col">{isAr ? 'حجب UV' : 'UV Block'}</th>
                  <th scope="col">{isAr ? 'الضمان' : 'Warranty'}</th>
                  <th scope="col">{isAr ? 'السعر (سيدان)' : 'Price (Sedan)'}</th>
                  <th scope="col">{isAr ? 'الإشارات' : 'Signals'}</th>
                </tr>
              </thead>
              <tbody>
                {getTintTypes(isAr).map((t, i) => (
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
            {getVltGuide(isAr).map((v, i) => (
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
            <span className={styles.overline}>{isAr ? 'خطوات العمل' : 'Our Process'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'كيف نظلل سيارتك' : 'How We Tint Your Car'}</h2>
          </div>
          <div className={styles.processGrid}>
            {getProcessSteps(isAr).map((s, i) => (
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
            <span className={styles.overline}>{isAr ? 'أعمالنا' : 'Our Work'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'من أعمالنا في تظليل السيارات' : 'Our Car Tinting Gallery'}</h2>
          </div>
          <div className={styles.galleryGrid}>
            {['gallery-car-after-01', 'gallery-car-after-02', 'gallery-car-after-03', 'car-tint-heat-comparison', 'thermal-camera-car-test', 'nano-ceramic-tint-applied'].map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image src={`/images/${img}.webp`} alt={isAr ? `تظليل سيارات جدة — عمل ${i + 1}` : `Car Tinting Jeddah — Work ${i + 1}`} width={400} height={300} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link href="/gallery" className={styles.secondaryBtn}>{isAr ? 'شاهد كل أعمالنا ←' : 'View All Gallery ←'}</Link>
          </div>
        </div>
      </section>

      {/* ═══ Local FAQ Section — Hijazi FAQ ═══ */}
      <VoiceSearchFAQ />

      {/* ═══ YMYL Safety Warnings — E-E-A-T Trust ═══ */}
      <ServiceDisclaimer
        title={isAr ? 'تحذير: التظليل المقلد' : 'Warning: Fake Tint Films'}
        text={isAr ? 'أفلام التظليل المقلدة تحتوي مواد كيميائية تتحلل بالحرارة وتطلق أبخرة سامة داخل المقصورة. تأكد من شهادة المنتج الأصلية.' : 'Fake tint films contain chemicals that degrade under heat and release toxic fumes inside the cabin. Always verify the original product certificate.'}
      />
      <ServiceDisclaimer
        title={isAr ? 'تحذير قانوني: نسبة التظليل' : 'Legal Warning: Tint Percentage'}
        text={isAr ? 'تجاوز نسبة 30% VLT = مخالفة 500-900 ر.س + رفض الفحص الدوري + إلزام بالإزالة على حسابك.' : 'Exceeding 30% VLT = 500-900 SAR fine + rejection in periodic inspection + mandatory removal at your expense.'}
      />

      {/* ═══ E-E-A-T: Expert Review Entity ═══ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <AuthorProfile
            expertName={isAr ? OWNER_NAME : 'Ahmed Salem'}
            expertTitle={isAr ? OWNER_TITLE : 'Technical Director'}
            organization={isAr ? 'عزل كور (وكيل جونسون و 3M)' : 'AzelCore (Johnson & 3M Authorized)'}
            quote={isAr ? 'تظليل النانو سيراميك الأصلي هو استثمار حقيقي لحماية سيارتك وصحتك من أشعة UV الضارة. احرص دائماً على الالتزام بنسبة 30% المقررة من المرور وتأكد من شهادة الضمان المعتمدة.' : 'Original nano-ceramic tinting is a true investment to protect your car and health from harmful UV rays. Always adhere to the 30% limit set by traffic laws and ensure you receive a certified warranty.'}
            reviewDate="2026-05-01"
          />
        </div>
      </section>

      {/* ═══ Cross-sell — Causal Internal Linking ═══ */}
      <CrossSellCards currentPage="car-insulation-jeddah" />

      {/* ═══ District Hub → Spoke Links — dynamic-pages Internal Linking ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'تغطية أحياء جدة' : 'Jeddah Districts Coverage'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'نخدم جميع أحياء جدة — حلول مخصصة لكل حي' : 'We Serve All Jeddah Districts — Tailored Solutions'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'كل حي له مناخه الخاص — نوصي بالفيلم المثالي حسب الرطوبة والحرارة والقرب من البحر.' : 'Every district has its own microclimate — we recommend the perfect film based on humidity, heat, and proximity to the sea.'}</p>
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
                <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-2)' }}>{isAr ? `تظليل سيارات ${d.nameAr}` : `Car Tinting ${d.nameEn}`} 🚗</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.6 }}>
                  {isAr ? `رطوبة ${d.humidity} • UV ${d.uvIndex} • ${d.zone} جدة` : `Humidity ${d.humidity} • UV ${d.uvIndex} • ${d.zone} Jeddah`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — data-nosnippet (vector density) ═══ */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>{isAr ? 'جاهز تحمي سيارتك من ' : 'Ready to protect your car from '}<span className={styles.blueGradient}>{isAr ? 'حرارة جدة' : 'Jeddah heat'}</span>؟</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'استشارة مجانية + عرض سعر فوري — وكيل جونسون و 3M المعتمد في جدة' : 'Free consultation + instant quote — Authorized Johnson & 3M dealer in Jeddah'}</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>
      {/* ═══ Voice Search Speakable Answers — TTS/CarPlay/Siri Targets ═══ */}
      <div id="voice-answer-1" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'أفضل تظليل سيارات في جدة عند عزل كور. أفلام نانو سيراميك أمريكية تحجب 97% من الحرارة مع ضمان يمتد لعمر السيارة. وكيل جونسون و 3M المعتمد.' : 'Best car tinting in Jeddah at AzelCore. American nano-ceramic films block 97% of heat with a lifetime warranty. Authorized Johnson & 3M dealer.'}
      </div>
      <div id="voice-answer-2" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'سعر تظليل السيارة في جدة يبدأ من 200 ريال للزجاج الأمامي ويوصل 3200 ريال تظليل كامل نانو سيراميك. ضمان مكتوب يمتد لعمر السيارة.' : 'Car tinting price in Jeddah starts at 200 SAR for windshields and reaches 3200 SAR for full nano-ceramic tint. Written lifetime warranty.'}
      </div>
      <div id="voice-answer-3" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'تظليل نانو سيراميك ما يحجب إشارة الجوال ولا الرادار لأنه خالي من المعادن. آمن على كل الأجهزة الإلكترونية.' : 'Nano-ceramic tinting does not block mobile or radar signals because it is metal-free. Safe for all electronic devices.'}
      </div>
    </>
  );
}
