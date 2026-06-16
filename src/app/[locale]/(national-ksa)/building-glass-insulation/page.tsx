import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_NAME_EN, OWNER_TITLE, VAT_ID, GEO, ADDRESS_STRUCTURED } from '@/lib/constants';
import { getFaqs } from '@/data/faqs';
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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'عزل مباني جدة — عزل واجهات زجاج حراري يوفّر 40%' : 'Building Glass Insulation Jeddah — Save 40% on Energy',
    description: isAr ? 'عزل مباني وواجهات زجاج حراري في جدة بأفلام نانو سيراميك تحجب 97% حرارة وتوفّر 40% كهرباء. ضمان 15 سنة. اطلب معاينة مجانية.' : 'Building & glass facade thermal insulation in Jeddah. Nano-ceramic films block 97% heat, cut AC bills 40%. 15-yr warranty. Free site survey.',
    alternates: getAlternates(locale as Locale, '/building-glass-insulation'),
    openGraph: {
      title: isAr ? 'عزل زجاج واجهات المباني في جدة' : 'Building Glass Insulation in Jeddah',
      description: isAr ? 'وفّر حتى 40% من فاتورة الكهرباء — عزل حراري متوافق مع كود البناء السعودي.' : 'Save up to 40% on electricity — thermal insulation compliant with the Saudi Building Code.',
      url: `${SITE_URL}${localePath(locale as Locale, '/building-glass-insulation')}`,
      images: [{ url: `${SITE_URL}/api/og?title=${encodeURIComponent(isAr ? 'عزل زجاج المباني' : 'Building Glass Insulation')}&type=building`, width: 1200, height: 630 }],
    },
  };
}

const getBuildingTypes = (isAr: boolean) => [
  { icon: '🏠', name: isAr ? 'فلل وقصور' : 'Villas & Palaces', desc: isAr ? 'عزل نوافذ الفلل والقصور لتقليل الحرارة وحماية الأثاث من الأشعة فوق البنفسجية مع الحفاظ على المنظر الخارجي.' : 'Window insulation for villas and palaces to reduce heat and protect furniture from UV rays while preserving the exterior view.' },
  { icon: '🏢', name: isAr ? 'أبراج ومكاتب' : 'Towers & Offices', desc: isAr ? 'عزل الواجهات الزجاجية الكاملة للأبراج التجارية — توفير طاقة ضخم وتحسين بيئة العمل.' : 'Full glass facade insulation for commercial towers — massive energy savings and improved work environment.' },
  { icon: '🏬', name: isAr ? 'محلات تجارية' : 'Retail Stores', desc: isAr ? 'عزل واجهات المعارض والمحلات — حماية البضائع من أشعة الشمس مع الحفاظ على الإضاءة الطبيعية.' : 'Storefront and showroom insulation — protecting merchandise from sun damage while maintaining natural lighting.' },
  { icon: '🏥', name: isAr ? 'مستشفيات ومدارس' : 'Hospitals & Schools', desc: isAr ? 'عزل حراري آمن صحياً للمنشآت الحساسة — شهادات NFRC و AIMCAL معتمدة.' : 'Health-safe thermal insulation for sensitive facilities — NFRC and AIMCAL certified.' },
];

const getFilmTypes = (isAr: boolean) => [
  { name: isAr ? 'نانو سيراميك شفاف' : 'Clear Nano-Ceramic', ir: '95%', uv: '99%', light: '70-80%', warranty: isAr ? '15 سنة' : '15 Years', best: true },
  { name: isAr ? 'عاكس فضي' : 'Silver Reflective', ir: '85%', uv: '99%', light: '15-35%', warranty: isAr ? '10 سنوات' : '10 Years', best: false },
  { name: isAr ? 'عاكس رمادي' : 'Grey Reflective', ir: '80%', uv: '99%', light: '20-40%', warranty: isAr ? '10 سنوات' : '10 Years', best: false },
  { name: isAr ? 'أمان وحماية' : 'Safety & Security', ir: '60%', uv: '99%', light: '50-70%', warranty: isAr ? '12 سنة' : '12 Years', best: false },
];

const getSavings = (isAr: boolean) => [
  { label: isAr ? 'توفير فاتورة الكهرباء' : 'Electricity Savings', value: '40%', desc: isAr ? 'تقليل حمل التكييف بشكل ملحوظ' : 'Significantly reducing AC load' },
  { label: isAr ? 'حجب الأشعة تحت الحمراء' : 'IR Rejection', value: '97%', desc: isAr ? 'أقصى حماية حرارية' : 'Maximum thermal protection' },
  { label: isAr ? 'حجب الأشعة فوق البنفسجية' : 'UV Rejection', value: '99%', desc: isAr ? 'حماية الأثاث والديكور' : 'Furniture & decor protection' },
  { label: isAr ? 'عمر الفيلم المتوقع' : 'Expected Film Lifespan', value: isAr ? '+15 سنة' : '+15 Years', desc: isAr ? 'ضمان مصنع رسمي' : 'Official factory warranty' },
];

// ═══ Unified @graph — B2BService + FAQ + Breadcrumb ═══

const getGraphSchema = (isAr: boolean) => {
  const buildingFaqs = getFaqs(isAr).filter(f => f.service === 'building-glass').slice(0, 5);

  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/building-glass-insulation#service`,
      name: isAr ? 'عزل واجهات زجاج المباني — جدة والمملكة' : 'Building Glass Insulation — Jeddah & KSA',
      image: `${SITE_URL}/images/hero-building-glass-insulation.webp`,
      description: isAr ? 'عزل حراري احترافي لواجهات المباني التجارية والفلل — توفير 40% كهرباء. متوافق مع كود البناء السعودي SBC 601 ومعايير ASHRAE 90.1.' : 'Professional thermal insulation for commercial building facades and villas — save 40% on electricity. Compliant with Saudi Building Code SBC 601 and ASHRAE 90.1 standards.',
      brand: { '@type': 'Brand', name: isAr ? 'عزل كور' : 'AzelCore' },
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'City', name: isAr ? 'جدة' : 'Jeddah', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
        { '@type': 'Country', name: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia' },
      ],
      serviceType: isAr ? 'عزل واجهات زجاج مباني' : 'Building Glass Facade Insulation',
      offers: { '@type': 'AggregateOffer', priceCurrency: 'SAR', lowPrice: '50', highPrice: '200', unitText: isAr ? 'ر.س/م²' : 'SAR/m²' },
      termsOfService: `${SITE_URL}/about`,
      audience: { '@type': 'BusinessAudience', audienceType: isAr ? 'مقاولون، شركات عقارية، ملاك مباني تجارية' : 'Contractors, Real Estate Companies, Commercial Building Owners' },
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
          name: isAr ? 'حجز معاينة عزل مباني' : 'Book Building Insulation Inspection',
        },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/building-glass-insulation#faq`,
      mainEntity: buildingFaqs.map(f => ({
        '@type': 'Question', name: isAr ? f.question : (f.questionEn || f.question),
        acceptedAnswer: { '@type': 'Answer', text: isAr ? f.answer : (f.answerEn || f.answer) },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'عزل واجهات مباني' : 'Building Facade Insulation', item: `${SITE_URL}/building-glass-insulation` },
      ],
    },
    // ── SpeakableSpecification — Voice Search Monopoly (B2B) ──
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-b2b-1', '#voice-answer-b2b-2', '#voice-answer-b2b-3'],
    },
  ],
  };
};

export default async function BuildingInsulationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      {/* Unified @graph — B2BService + FAQ + Breadcrumb + Speakable */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGraphSchema(isAr)) }} />



      {/* ═══ Live Weather Banner — QDF ISR Signal ═══ */}
      <LiveJeddahWeatherBanner />

      {/* TL;DR Highlights — Page Summary */}
      <ServiceSummary summary={isAr ? quickAnswers.buildingGlass.text : quickAnswers.buildingGlass.textEn!} isAr={isAr} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/hero-building-glass-insulation.webp" alt={isAr ? "عزل واجهات زجاج مبنى تجاري في جدة" : "Commercial Building Glass Insulation in Jeddah"} fill priority fetchPriority="high" quality={75} sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'}>
            <Link href={localePath(locale as Locale, '/')}>{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'عزل واجهات مباني' : 'Building Facade Insulation'}</span>
          </nav>
          <h1 className={styles.heroTitle}>{isAr ? 'عزل ' : 'Building '}<span className={styles.greenGradient}>{isAr ? 'مباني جدة' : 'Glass Facade Insulation'}</span>{isAr ? ' — عزل واجهات الزجاج الحراري' : ' in Jeddah'}</h1>
          <p className={styles.heroSubtitle}>
            {isAr ? 'وفّر ' : 'Save '}<strong>{isAr ? '40% من فاتورة الكهرباء' : '40% on electricity bills'}</strong>{isAr ? ' بأفلام عزل حراري أمريكية — حجب 97% من الحرارة مع الحفاظ على الإضاءة الطبيعية والمنظر الخارجي.' : ' with American thermal insulation films — blocking 97% of heat while maintaining natural lighting and exterior views.'}
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'طلب عرض سعر' : 'Get a Quote'}</a>
            <a href="#types" className={styles.secondaryBtn}>{isAr ? 'أنواع العزل ↓' : 'Insulation Types ↓'}</a>
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
            {getSavings(isAr).map((s, i) => (
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
            <span className={styles.overline}>{isAr ? 'أنواع المباني' : 'Building Types'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'حلول عزل لكل نوع مبنى' : 'Insulation Solutions for Every Building Type'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'نخدم المشاريع السكنية والتجارية — عقود شركات ومناقصات حكومية' : 'We serve residential and commercial projects — corporate contracts and government tenders'}</p>
          </div>
          <dl className={styles.typesGrid}>
            {getBuildingTypes(isAr).map((b, i) => (
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

      {/* Film Types — Premium Pricing Cards */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="types">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أنواع الأفلام' : 'Film Types'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'اختر الفيلم المناسب لمبناك' : 'Choose the Right Film for Your Building'}</h2>
          </div>
          
          <div className={styles.pricingGrid}>
            {getFilmTypes(isAr).map((f, i) => (
              <div key={i} className={`${styles.pricingCard} ${f.best ? styles.pricingCardBest : ''}`}>
                {f.best && <div className={styles.bestBadge}>{isAr ? 'الأكثر طلباً' : 'Most Popular'}</div>}
                
                <div className={styles.pricingHeader}>
                  <h3 className={styles.pricingTitle}>{f.name}</h3>
                </div>
                
                <div className={styles.pricingFeatures}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureLabel}>{isAr ? 'حجب الحرارة (IR)' : 'IR Rejection'}</span>
                    <span className={styles.featureValueHighlight}>{f.ir}</span>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureLabel}>{isAr ? 'حجب الأشعة (UV)' : 'UV Rejection'}</span>
                    <span className={styles.featureValue} style={{ color: 'hsl(142, 70%, 45%)' }}>{f.uv}</span>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureLabel}>{isAr ? 'نفاذية الضوء (VLT)' : 'Light Transmission'}</span>
                    <span className={styles.featureValue}>{f.light}</span>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureLabel}>{isAr ? 'الضمان' : 'Warranty'}</span>
                    <span className={styles.featureValue}>{f.warranty}</span>
                  </div>
                </div>
                
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={f.best ? styles.primaryBtn : styles.secondaryBtn} style={{ width: '100%', justifyContent: 'center' }}>
                  {isAr ? 'طلب معاينة وعرض سعر' : 'Request Inspection'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — SGE Semantic dl/dt/dd */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'المزايا' : 'Benefits'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'لماذا عزل واجهات المباني ضرورة في جدة' : 'Why Building Facade Insulation is a Necessity in Jeddah'}</h2>
          </div>
          <dl className={styles.benefitsGrid}>
            {[
              { icon: '💰', title: isAr ? 'توفير مالي ضخم' : 'Massive Financial Savings', desc: isAr ? 'تقليل استهلاك الكهرباء بنسبة تصل إلى 40% — استرداد التكلفة خلال 2-3 سنوات. متوافق مع SBC 601.' : 'Reduce electricity consumption by up to 40% — ROI within 2-3 years. Compliant with SBC 601.' },
              { icon: '🌡️', title: isAr ? 'راحة حرارية' : 'Thermal Comfort', desc: isAr ? 'تقليل درجة حرارة الزجاج بمقدار 15-20 درجة — بيئة مريحة بدون بقع حرارية. معيار ASHRAE 55.' : 'Reduce glass temperature by 15-20 degrees — comfortable environment with no hot spots. ASHRAE 55 standard.' },
              { icon: '🛋️', title: isAr ? 'حماية الأثاث' : 'Furniture Protection', desc: isAr ? 'حجب 99% من الأشعة فوق البنفسجية المسببة لبهتان الأثاث والستائر والأرضيات.' : 'Block 99% of UV rays that cause fading to furniture, curtains, and flooring.' },
              { icon: '🔒', title: isAr ? 'أمان إضافي' : 'Added Security', desc: isAr ? 'أفلام الأمان تمنع تناثر الزجاج عند الكسر — مطلوب في المباني التجارية حسب كود البناء السعودي.' : 'Safety films prevent glass shattering upon impact — required in commercial buildings per Saudi Building Code.' },
              { icon: '👁️', title: isAr ? 'خصوصية ذكية' : 'Smart Privacy', desc: isAr ? 'أفلام عاكسة توفر خصوصية نهارية كاملة مع الحفاظ على الرؤية من الداخل.' : 'Reflective films provide full daytime privacy while maintaining visibility from the inside.' },
              { icon: '🌿', title: isAr ? 'صديق للبيئة' : 'Eco-Friendly', desc: isAr ? 'تقليل البصمة الكربونية بتخفيض استهلاك الطاقة — متوافق مع رؤية 2030 وأهداف LEED.' : 'Reduce carbon footprint by lowering energy consumption — compliant with Vision 2030 and LEED goals.' },
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
            <span className={styles.overline}>{isAr ? 'عقود الشركات' : 'Corporate Contracts'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'حاسبة العائد على الاستثمار — مشاريع المباني' : 'ROI Calculator — Building Projects'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'أداة للمقاولين وملاك العقارات التجارية — احسب توفيرك حسب معايير كود البناء السعودي' : 'Tool for contractors and commercial property owners — calculate your savings based on Saudi Building Code standards'}</p>
          </div>
          <CorporateRoiCalculator locale={locale} />
        </div>
      </section>

      {/* Gallery */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أعمالنا' : 'Our Work'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'من مشاريعنا في عزل المباني' : 'From Our Building Insulation Projects'}</h2>
          </div>
          <div className={styles.galleryGrid}>
            {['building-tint-before-after', 'commercial-facade-tinting', 'villa-window-insulation-jeddah', 'office-window-tinting', 'reflective-film-building', 'gallery-building-after-01'].map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image src={`/images/${img}.webp`} alt={isAr ? `عزل واجهات مباني جدة — مشروع ${i + 1}` : `Jeddah Building Facade Insulation — Project ${i + 1}`} width={400} height={300} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YMYL Safety Warning — E-E-A-T Trust */}
      <ServiceDisclaimer
        title={isAr ? 'أمان الزجاج: المباني' : 'Glass Safety: Buildings'}
        text={isAr ? 'فيلم الأمان (Safety Film) يمنع تناثر الزجاج عند الكسر ويحمي من الإصابات. مطلوب في المباني التجارية والمدارس حسب كود البناء السعودي.' : 'Safety Film prevents glass from shattering upon breakage and protects against injuries. Required in commercial buildings and schools per the Saudi Building Code.'}
      />

      {/* KSA Cities Coverage — dynamic-pages Content from cities-content.ts */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'تغطية وطنية' : 'National Coverage'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'نخدم 15 مدينة سعودية' : 'We Serve 15 Saudi Cities'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'عزل واجهات مباني احترافي في كل أنحاء المملكة — كل مدينة بتوصية مخصصة لمناخها.' : 'Professional building facade insulation across the Kingdom — with customized recommendations for each city’s climate.'}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
            {ksaCities.map(city => {
              const content = citiesContentData[city.id];
              return (
                <details key={city.id} style={{ background: 'var(--surface)', borderRadius: '14px', padding: '1.25rem', border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>🏙️ {isAr ? city.nameAr : city.nameEn} <span style={{ fontSize: '0.8rem', color: 'hsl(220, 10%, 65%)', fontWeight: 400 }}>({city.avgTemp} | {isAr ? `${city.humidity} رطوبة` : `${city.humidity} humidity`})</span></span>
                    <span style={{ fontSize: '1.2rem', color: 'hsl(210, 100%, 72%)' }}>+</span>
                  </summary>
                  {content && (
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <p style={{ lineHeight: '1.8', color: 'hsl(220, 10%, 65%)', fontSize: '0.95rem' }}>{isAr ? content.paragraph : ((content as any).paragraphEn || content.paragraph)}</p>
                      <div style={{ background: 'var(--surface-elevated, #0f1923)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                        <p style={{ fontSize: '0.85rem', color: 'hsl(210, 100%, 72%)', fontWeight: 600 }}>💰 {isAr ? 'تقدير التوفير' : 'Savings Estimate'}</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text)', marginTop: '0.25rem' }}>{isAr ? content.savingsEstimate : ((content as any).savingsEstimateEn || content.savingsEstimate)}</p>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'hsl(220, 10%, 65%)' }}><strong>{isAr ? 'الفيلم الموصى:' : 'Recommended Film:'}</strong> {isAr ? content.recommendedFilm : ((content as any).recommendedFilmEn || content.recommendedFilm)}</p>
                    </div>
                  )}
                  <Link href={localePath(locale as Locale, `/building-glass-insulation/${city.id}`)} style={{ display: 'inline-block', marginTop: '0.85rem', color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>
                    {isAr ? `تفاصيل عزل المباني في ${city.nameAr} ←` : `Building insulation in ${city.nameEn} →`}
                  </Link>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Indexable price table (server-rendered for SEO/AI) ═══ */}
      {(() => {
        const c: React.CSSProperties = { padding: '0.7rem 0.9rem', borderBottom: '1px solid var(--border)', textAlign: isAr ? 'right' : 'left' };
        const th: React.CSSProperties = { ...c, fontWeight: 700, color: 'var(--text)', background: 'var(--surface)' };
        const rows = [
          { film: isAr ? 'فيلم عاكس (فضي/رمادي)' : 'Reflective (Silver/Grey)', use: isAr ? 'أبراج ومكاتب' : 'Towers & Offices', price: isAr ? 'من 50 ر.س/م²' : 'from 50 SAR/m²' },
          { film: isAr ? 'نانو سيراميك شفاف' : 'Clear Nano-Ceramic', use: isAr ? 'فلل وواجهات تحافظ على المنظر' : 'Villas & view-preserving facades', price: isAr ? 'من 90 ر.س/م²' : 'from 90 SAR/m²' },
          { film: isAr ? 'فيلم أمان وحماية' : 'Safety & Security', use: isAr ? 'مدارس ومستشفيات وواجهات أرضية' : 'Schools, hospitals, ground floors', price: isAr ? 'من 120 ر.س/م²' : 'from 120 SAR/m²' },
        ];
        return (
          <section style={{ maxWidth: '900px', margin: '3rem auto 0', padding: '0 1.5rem' }} aria-labelledby="prices-building">
            <h2 id="prices-building" style={{ marginBottom: '0.75rem' }}>{isAr ? 'كم تكلفة عزل المباني في جدة؟ (أسعار 2026)' : 'How Much Does Building Insulation Cost in Jeddah? (2026)'}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{isAr ? 'تبدأ تكلفة عزل المباني وواجهات الزجاج في جدة من نحو 50 ريالاً للمتر المربع، وتختلف حسب نوع الفيلم والمساحة. تُسترد التكلفة عادةً خلال 12–18 شهرًا من توفير فاتورة الكهرباء — فيلا متوسطة تبدأ من ~8,000 ريال، والمباني التجارية تُسعّر حسب مساحة الواجهة.' : 'Building & glass facade insulation in Jeddah starts at about 50 SAR per square meter, depending on film type and area. The cost typically pays back within 12–18 months from electricity savings — a mid-size villa starts from ~8,000 SAR, and commercial buildings are priced by facade area.'}</p>
            <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <thead><tr>
                  <th style={th}>{isAr ? 'نوع الفيلم' : 'Film Type'}</th>
                  <th style={th}>{isAr ? 'الأنسب لـ' : 'Best for'}</th>
                  <th style={{ ...th, textAlign: 'center' }}>{isAr ? 'السعر' : 'Price'}</th>
                </tr></thead>
                <tbody>
                  {rows.map(r => (
                    <tr key={r.film}>
                      <td style={{ ...c, fontWeight: 600 }}>{r.film}</td>
                      <td style={{ ...c, color: 'var(--text-secondary)' }}>{r.use}</td>
                      <td style={{ ...c, textAlign: 'center', color: 'var(--primary)', fontWeight: 700 }}>{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.6rem' }}>{isAr ? 'الأسعار تقديرية لعام 2026. استخدم حاسبة العائد للحصول على تقدير دقيق لمبناك.' : 'Estimated 2026 prices. Use the ROI calculator for a precise estimate for your building.'}</p>
          </section>
        );
      })()}

      {/* ═══ Further Reading — Service → Blog (bidirectional internal linking) ═══ */}
      <section aria-labelledby="further-reading-bld" style={{ maxWidth: '900px', margin: '3rem auto 0', padding: '0 1.5rem' }}>
        <h2 id="further-reading-bld" style={{ marginBottom: '1rem' }}>{isAr ? 'اقرأ أيضًا' : 'Further Reading'}</h2>
        <ul style={{ display: 'grid', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
          <li><Link href={localePath(locale as Locale, '/blog/building-insulation-saudi-arabia-guide')} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>{isAr ? 'دليل عزل المباني في السعودية وكود البناء SBC ←' : 'Building Insulation in Saudi Arabia & SBC Code Guide ←'}</Link></li>
          <li><Link href={localePath(locale as Locale, '/blog/building-insulation-electricity-savings')} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>{isAr ? 'كم توفّر فاتورة الكهرباء بعزل المباني؟ ←' : 'How Much Do You Save on Electricity? ←'}</Link></li>
          <li><Link href={localePath(locale as Locale, '/blog/vision-2030-energy-efficiency')} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>{isAr ? 'كفاءة الطاقة ورؤية 2030 ←' : 'Energy Efficiency & Vision 2030 ←'}</Link></li>
          <li><Link href={localePath(locale as Locale, '/blog/commercial-building-tint-jeddah')} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>{isAr ? 'عزل المباني التجارية في جدة ←' : 'Commercial Building Insulation in Jeddah ←'}</Link></li>
        </ul>
      </section>

      <CrossSellCards currentPage="building-glass-insulation" locale={locale} />

      {/* ═══ E-E-A-T: Expert Review Entity ═══ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <AuthorProfile
            isAr={isAr}
            expertName={isAr ? OWNER_NAME : OWNER_NAME_EN}
            expertTitle={isAr ? OWNER_TITLE : "Tinting Expert"}
            organization={isAr ? "عزل كور لخدمات مشاريع المباني" : "AzelCore Building Projects Services"}
            quote={isAr ? "تطبيق معايير كود البناء السعودي (SBC) في العزل الزجاجي ليس خياراً بل ضرورة لتقليل الهدر المالي. نضمن لك أفلام عزل معتمدة توفر حتى 40% من استهلاك التكييف وتطيل عمر الأثاث والمعدات داخل المبنى." : "Applying Saudi Building Code (SBC) standards in glass insulation is not an option but a necessity to reduce financial waste. We guarantee certified insulation films that save up to 40% of AC consumption and prolong the lifespan of furniture and equipment inside the building."}
            reviewDate="2026-05-01"
          />
        </div>
      </section>

      {/* CTA — data-nosnippet (vector density) */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>{isAr ? 'جاهز توفّر في ' : 'Ready to save on your '}<span className={styles.greenGradient}>{isAr ? 'فاتورة الكهرباء' : 'electricity bill'}</span>؟</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'معاينة مجانية + عرض سعر فوري — وكيل جونسون و 3M المعتمد في جدة' : 'Free inspection + instant quote — Authorized Johnson and 3M dealer in Jeddah'}</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'طلب معاينة مجانية' : 'Request Free Inspection'}</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>
      {/* ═══ Voice Search Speakable Answers — B2B TTS Targets ═══ */}
      <div id="voice-answer-b2b-1" style={{ display: 'none' }} aria-hidden="true">
        {isAr 
          ? 'عزل واجهات المباني يوفر 40% من فاتورة الكهرباء. أفلام نانو سيراميك أمريكية متوافقة مع كود البناء السعودي. ضمان 15 سنة.'
          : 'Building facade insulation saves 40% on electricity bills. American nano-ceramic films compliant with Saudi Building Code. 15-year warranty.'}
      </div>
      <div id="voice-answer-b2b-2" style={{ display: 'none' }} aria-hidden="true">
        {isAr
          ? 'تكلفة عزل زجاج المباني تبدأ من 50 ريال للمتر المربع. العائد على الاستثمار خلال 7 إلى 18 شهر حسب مساحة الواجهة.'
          : 'Building glass insulation costs start at 50 SAR per square meter. Return on investment within 7 to 18 months depending on the facade area.'}
      </div>
      <div id="voice-answer-b2b-3" style={{ display: 'none' }} aria-hidden="true">
        {isAr
          ? 'عزل كور يخدم المباني التجارية والفلل والمدارس في 15 مدينة سعودية. فريق متخصص وعقود شركات ومناقصات حكومية.'
          : 'AzelCore serves commercial buildings, villas, and schools in 15 Saudi cities. Specialized team, corporate contracts, and government tenders.'}
      </div>
    </>
  );
}
