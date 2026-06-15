import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';
import { SITE_URL, SITE_NAME, SITE_NAME_EN, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_NAME_EN, OWNER_TITLE, VAT_ID, CRN, GEO, ADDRESS_STRUCTURED } from '@/lib/constants';
import ServiceSummary from '@/components/seo/ServiceSummary';
import CrossSellCards from '@/components/sections/CrossSellCards';
import LiveJeddahWeatherBanner from '@/components/sections/LiveJeddahWeatherBanner';
import OfficialPartnerBar from '@/components/seo/OfficialPartnerBar';
import ServiceDisclaimer from '@/components/seo/ServiceDisclaimer';
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
    title: isAr ? 'حماية طلاء السيارات PPF جدة — أفلام إكس بيل XPEL الأفضل' : 'PPF Paint Protection Film Jeddah — Best XPEL Protection',
    description: isAr ? 'أفضل مركز لتركيب أفلام حماية الطلاء PPF في جدة. حماية كاملة للسيارة من الخدوش والرمال باستخدام XPEL Paint Protection Film مع معالجة ذاتية للخدوش.' : 'Top PPF paint protection film near me in Jeddah. Full car protection against scratches and sand using XPEL with self-healing technology.',
    alternates: getAlternates(locale as Locale, '/paint-protection-film-jeddah'),
    openGraph: {
      title: isAr ? 'حماية طلاء السيارات PPF في جدة' : 'PPF Paint Protection Film in Jeddah',
      description: isAr ? 'أفلام XPEL ذاتية المعالجة لحماية طلاء سيارتك من الخدوش والرمال.' : 'Self-healing XPEL film protecting your car paint from scratches and sand.',
      url: `${SITE_URL}${localePath(locale as Locale, '/paint-protection-film-jeddah')}`,
      images: [{ url: `${SITE_URL}/api/og?title=${encodeURIComponent(isAr ? 'حماية طلاء PPF جدة' : 'PPF Paint Protection Jeddah')}&type=car`, width: 1200, height: 630 }],
    },
    keywords: isAr ? 'ppf, حماية الطلاء ppf, xpel paint protection film, حماية سيارات, افلام الحماية ppf' : 'ppf, paint protection film, paint protection film near me, ppf near me, xpel paint protection film, ppf car, ppf car protection',
  };
}

// ════════════════════════════════════════════
// Data Constants
// ════════════════════════════════════════════

const quickAnswerPPF = {
  text: `على عكس النانو سيراميك الذي يمنح لمعاناً وحماية خفيفة فقط، تعتبر أفلام حماية الطلاء (PPF) درعاً مادياً حقيقياً بسماكة تصل إلى 8 ميل. في أجواء جدة المليئة بالغبار والرمال على الطرق السريعة، يحمي فيلم XPEL سيارتك من الخدوش العميقة والترميل بفضل خاصية المعالجة الذاتية (Self-Healing) بالحرارة، مما يحافظ على قيمة سيارتك الأصلية عند البيع.`,
  textEn: `Unlike nano-ceramic which only provides gloss and light protection, Paint Protection Film (PPF) is a physical shield up to 8 mil thick. In Jeddah's dusty highway conditions, XPEL film protects your car from deep scratches and sandblasting with heat-activated Self-Healing technology, perfectly preserving your car's resale value.`
};

const getPPFTypes = (isAr: boolean) => [
  { name: isAr ? 'شفاف لامع (Gloss)' : 'Glossy Clear', thickness: '8 Mil', selfHealing: isAr ? '✅ بالحرارة' : '✅ Heat-Activated', warranty: isAr ? '10 سنوات' : '10 Years', price: '7,000 - 15,000', best: true },
  { name: isAr ? 'مطفي (Matte)' : 'Matte Finish', thickness: '8 Mil', selfHealing: isAr ? '✅ بالحرارة' : '✅ Heat-Activated', warranty: isAr ? '10 سنوات' : '10 Years', price: '8,500 - 18,000', best: false },
  { name: isAr ? 'حماية المقدمة فقط' : 'Front-End Protection', thickness: '8 Mil', selfHealing: isAr ? '✅ بالحرارة' : '✅ Heat-Activated', warranty: isAr ? '10 سنوات' : '10 Years', price: '2,500 - 4,500', best: false },
];

const getBenefits = (isAr: boolean) => [
  { icon: '🛡️', title: isAr ? 'معالجة ذاتية للخدوش' : 'Self-Healing Technology', desc: isAr ? 'الخدوش السطحية تختفي تماماً عند تعرض الفيلم لحرارة الشمس (شمس جدة تكفي).' : 'Surface scratches vanish completely when exposed to heat (Jeddah sun is enough).' },
  { icon: '💎', title: isAr ? 'لمعان كريستالي' : 'Crystal Clear Finish', desc: isAr ? 'يحسن من مظهر الطلاء الأصلي ويزيد من لمعانه وعمقه بدون تشوه أو اصفرار.' : 'Enhances the original paintwork, adding gloss and depth without yellowing or distortion.' },
  { icon: '💻', title: isAr ? 'قص كمبيوتر دقيق XPEL DAP' : 'XPEL DAP Precise Computer Cut', desc: isAr ? 'نستخدم برنامج XPEL للقص بالكمبيوتر — الفيلم يركب كأنه قطعة واحدة بدون شفرات.' : 'We use XPEL software for pre-cut patterns — zero blades touch your car.' },
  { icon: '🏜️', title: isAr ? 'مضاد للترميل والحصى' : 'Anti-Sand & Rock Chips', desc: isAr ? 'حماية فيزيائية قوية ضد حصى الطرق السريعة (خط الساحل ومكة).' : 'Strong physical defense against highway rocks and sandblasting (Makkah & Coastal roads).' },
  { icon: '💰', title: isAr ? 'حفظ قيمة البيع' : 'Resale Value Protection', desc: isAr ? 'الطلاء الأصلي 100% يحافظ على قيمة سيارتك. سيارة بدون إعادة رش = سعر بيع أعلى بـ 15-25%.' : 'Keeping 100% original paint preserves your car\'s value. No repaint = 15-25% higher resale price.' },
  { icon: '🏭', title: isAr ? 'غرف عزل مكيفة HEPA' : 'HEPA Clean Room Install', desc: isAr ? 'تركيب في غرف مغلقة بتنقية هواء HEPA — صفر غبار وصفر فقاعات تحت الفيلم.' : 'Installation in enclosed rooms with HEPA air filtration — zero dust, zero bubbles under the film.' },
];

const getProcessSteps = (isAr: boolean) => [
  { step: '01', title: isAr ? 'غسيل احترافي وتلميع' : 'Prep Wash & Polish', desc: isAr ? 'إزالة الشوائب وتلميع الطلاء بالكامل لضمان سطح زجاجي قبل التركيب.' : 'Decontamination and full paint correction to ensure a glass-like surface.', icon: '🧼' },
  { step: '02', title: isAr ? 'القص المسبق' : 'Pre-Cutting', desc: isAr ? 'قص الفيلم بالكمبيوتر حسب موديل السيارة بدقة مليمترية.' : 'Pre-cutting the film via computer with millimeter precision for your exact car model.', icon: '🖥️' },
  { step: '03', title: isAr ? 'التركيب المغلق' : 'Enclosed Installation', desc: isAr ? 'يتم التركيب في غرف معزولة خالية من الغبار بجل خاص.' : 'Installation in a dust-free, isolated room using specialized slip gel.', icon: '🛡️' },
  { step: '04', title: isAr ? 'المعالجة والتسليم' : 'Curing & Handover', desc: isAr ? 'تثبيت الأطراف بالحرارة والفحص النهائي بلمبات كشف العيوب.' : 'Edge wrapping with heat guns and final inspection with defect-revealing lights.', icon: '✨' },
];

const ppfFaqs = [
  {
    question: 'ما هو الفرق بين النانو سيراميك و PPF لحماية الطلاء؟',
    questionEn: 'What is the difference between Nano Ceramic and PPF?',
    answer: 'النانو سيراميك سائل بسماكة 1-3 ميكرون يحمي من بهتان اللون ويعطي لمعان وسهولة غسيل، لكنه لا يحمي من الخدوش العميقة أو حصى الطرق. الـ PPF فيلم فيزيائي بسماكة 150-200 ميكرون (8 ميل) — أي أسمك بـ 50-100 مرة — يحمي الطلاء من الخدوش العميقة والترميل والحصى بفضل المعالجة الذاتية بالحرارة. الحل المثالي: تركيب PPF أولاً ثم نانو سيراميك فوقه.',
    answerEn: 'Nano Ceramic is a liquid at 1-3 microns that protects against fading and adds gloss, but cannot protect against deep scratches or rock chips. PPF is a physical film at 150-200 microns (8 mil) — 50-100x thicker — protecting paint from deep scratches, sandblasting, and rock chips with heat-activated self-healing. Ideal solution: install PPF first, then Nano Ceramic on top.',
  },
  {
    question: 'هل يمكن تركيب PPF لجزء من السيارة فقط؟',
    questionEn: 'Can I install PPF on just a part of the car?',
    answer: 'نعم، الباقة الأكثر طلباً هي (حماية المقدمة) وتشمل الكبوت، الصدام الأمامي، الرفارف، والمرايا الجانبية — وهي الأجزاء الأكثر عرضة للحصى في طرق جدة السريعة (خط الساحل وطريق مكة). هذه الباقة توفر 80% من الحماية بـ 40% من التكلفة.',
    answerEn: 'Yes, the most popular package is (Front-End Protection), covering the hood, front bumper, fenders, and side mirrors — the parts most vulnerable to road debris on Jeddah highways (Coastal road and Makkah road). This package provides 80% of the protection at 40% of the cost.',
  },
  {
    question: 'هل فيلم PPF يصفر مع الوقت؟',
    questionEn: 'Does PPF film turn yellow over time?',
    answer: 'الأفلام الرخيصة (PVC) تصفر خلال 6-12 شهراً. أفلام TPU الأصلية مثل XPEL مصممة بطبقة Top Coat مضادة للاصفرار (Non-Yellowing) مع ضمان 10 سنوات ضد الاصفرار والتشقق والتقشير. في عزل كور نستخدم فقط أفلام TPU أصلية.',
    answerEn: 'Cheap PVC films yellow within 6-12 months. Original TPU films like XPEL are engineered with a Non-Yellowing Top Coat, backed by a 10-year warranty against yellowing, cracking, and peeling. At AzelCore, we use only original TPU films.',
  },
  {
    question: 'هل يغطي الضمان عيوب التركيب؟',
    questionEn: 'Does the warranty cover installation defects?',
    answer: 'نعم، ضماننا مزدوج: ضمان المصنع يغطي جودة الفيلم (اصفرار، تشقق، تقشير)، وضمان عزل كور يغطي جودة التركيب (فقاعات، رفع أطراف، تلوث غبار). الضمان إلكتروني برقم تسلسلي يمكنك التحقق منه أونلاين.',
    answerEn: 'Yes, our warranty is dual: the manufacturer warranty covers film quality (yellowing, cracking, peeling), and AzelCore warranty covers installation quality (bubbles, lifting edges, dust contamination). The warranty is electronic with a serial number verifiable online.',
  },
  {
    question: 'متى أقدر أغسل سيارتي بعد تركيب الـ PPF؟',
    questionEn: 'When can I wash my car after installing PPF?',
    answer: 'يجب الانتظار 7 أيام قبل غسيل السيارة بالضغط العالي (البستم) لضمان جفاف اللاصق تماماً. بعد ذلك، اغسل بشامبو PH محايد وتجنب الغسيل الآلي (الفراشي) نهائياً لأنها تخدش طبقة الـ Top Coat.',
    answerEn: 'Wait 7 days before high-pressure washing to ensure the adhesive fully cures. After that, wash with pH-neutral shampoo and permanently avoid automatic (brush) car washes as they scratch the Top Coat layer.',
  },
  {
    question: 'ما الفرق بين القص اليدوي والقص بالكمبيوتر للـ PPF؟',
    questionEn: 'What is the difference between manual and computer-cut PPF?',
    answer: 'القص اليدوي يتطلب تمرير مشرط حاد على هيكل سيارتك لقص الفيلم الزائد — مما يخدش الطلاء الأصلي حتماً. القص الآلي (XPEL DAP) يجهز الفيلم مسبقاً بدقة 0.1 ملم حسب موديل سيارتك — صفر شفرات على الهيكل. في عزل كور نستخدم القص الآلي حصرياً.',
    answerEn: 'Manual cutting requires running a sharp blade over your car body to trim excess film — inevitably scratching original paint. Computer-cut (XPEL DAP) pre-cuts the film with 0.1mm precision for your exact model — zero blades on the body. At AzelCore, we exclusively use computer cutting.',
  },
  {
    question: 'هل PPF يحمي من الرمال والترميل في طرق جدة؟',
    questionEn: 'Does PPF protect against sand and sandblasting on Jeddah roads?',
    answer: 'نعم — وهذا هو السبب الرئيسي لتركيب PPF في السعودية. الفيلم بسماكة 8 ميل (200 ميكرون) يمتص صدمات حصى الطرق السريعة وذرات الرمل. طرق جدة الساحلية وطريق مكة المكرمة من أكثر الطرق عرضة للترميل — PPF هو الحل الوحيد الفعلي.',
    answerEn: 'Yes — this is the primary reason for PPF installation in Saudi Arabia. The 8-mil (200 micron) film absorbs highway rock chip impacts and sand particles. Jeddah coastal roads and Makkah highway are among the most sandblasting-prone — PPF is the only real solution.',
  },
  {
    question: 'كم سعر تركيب PPF كامل للسيارة في جدة؟',
    questionEn: 'How much does full car PPF cost in Jeddah?',
    answer: 'تغليف كامل (Full Body) بفيلم XPEL الأصلي: سيدان 7,000-12,000 ر.س، SUV 10,000-15,000 ر.س، سيارات فارهة 12,000-18,000 ر.س. حماية المقدمة فقط (كبوت + صدام + رفارف): 2,500-4,500 ر.س. الأسعار تعتمد على حجم وموديل السيارة.',
    answerEn: 'Full Body wrap with original XPEL film: Sedan 7,000-12,000 SAR, SUV 10,000-15,000 SAR, Luxury cars 12,000-18,000 SAR. Front-End only (hood + bumper + fenders): 2,500-4,500 SAR. Prices depend on car size and model.',
  }
];

// ════════════════════════════════════════════
// JSON-LD @graph
// ════════════════════════════════════════════

const getGraphSchema = (isAr: boolean) => {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    // ── 1. AutoBodyShop (Local Entity — Jeddah) ──
    {
      '@type': 'AutoBodyShop',
      '@id': `${SITE_URL}/#autobodyshop`,
      name: isAr ? 'عزل كور — حماية طلاء السيارات PPF جدة' : 'AzelCore — PPF Paint Protection Film Jeddah',
      alternateName: 'AzelCore PPF Jeddah',
      url: `${SITE_URL}/paint-protection-film-jeddah`,
      telephone: PHONE,
      image: `${SITE_URL}/images/xpel-ppf-protection-jeddah.webp`,
      logo: `${SITE_URL}/images/azelcore-logo.webp`,
      description: isAr ? 'أفضل مركز لتركيب أفلام حماية الطلاء PPF في جدة. حماية كاملة ضد الترميل والخدوش باستخدام أفلام XPEL مع خاصية المعالجة الذاتية وقص كمبيوتر دقيق.' : 'Top center for Paint Protection Film (PPF) installation in Jeddah. Full defense against sandblasting and scratches using XPEL with self-healing and computer cut.',
      priceRange: '2500-18000 SAR',
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
      sameAs: ['https://www.instagram.com/azelcore'],
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: WHATSAPP_LINK,
          actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
        },
        result: {
          '@type': 'Reservation',
          name: isAr ? 'حجز موعد حماية طلاء PPF' : 'Book PPF appointment',
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
      legalName: isAr ? `مؤسسة ${OWNER_NAME} للتجارة` : `${OWNER_NAME} Trading Est.`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: isAr ? 'جدة' : 'Jeddah',
        addressRegion: isAr ? 'منطقة مكة المكرمة' : 'Makkah Province',
        addressCountry: 'SA',
      },
      founder: {
        '@type': 'Person',
        name: isAr ? OWNER_NAME : OWNER_NAME_EN,
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
      '@id': `${SITE_URL}/paint-protection-film-jeddah#service`,
      name: isAr ? 'حماية الطلاء PPF — أفلام XPEL' : 'Paint Protection Film (PPF) — XPEL Films',
      description: isAr ? 'تركيب أفلام حماية الطلاء XPEL بالقص الآلي مع معالجة ذاتية للخدوش وضمان 10 سنوات' : 'XPEL Paint Protection Film installation with computer-cut precision, self-healing technology, and 10-year warranty',
      provider: { '@id': `${SITE_URL}/#autobodyshop` },
      areaServed: {
        '@type': 'City',
        name: isAr ? 'جدة' : 'Jeddah',
        sameAs: 'https://www.wikidata.org/wiki/Q5880',
      },
      serviceType: 'Paint Protection Film',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'SAR',
        lowPrice: '2500',
        highPrice: '18000',
        offerCount: '3',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: isAr ? 'باقات PPF' : 'PPF Packages',
        itemListElement: getPPFTypes(isAr).map((t, i) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: t.name,
            description: isAr ? `سماكة: ${t.thickness} | معالجة ذاتية: ${t.selfHealing} | ضمان: ${t.warranty}` : `Thickness: ${t.thickness} | Self-Healing: ${t.selfHealing} | Warranty: ${t.warranty}`,
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
          name: isAr ? 'ضمان شامل ضد الاصفرار والتشقق والتقشير وعيوب التركيب' : 'Comprehensive warranty against yellowing, cracking, peeling, and installation defects',
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
      '@id': `${SITE_URL}/paint-protection-film-jeddah#faq`,
      mainEntity: ppfFaqs.map(f => ({
        '@type': 'Question',
        name: isAr ? f.question : f.questionEn,
        acceptedAnswer: { '@type': 'Answer', text: isAr ? f.answer : f.answerEn },
      })),
    },
    // ── 5. BreadcrumbList ──
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/paint-protection-film-jeddah#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'حماية الطلاء PPF جدة' : 'PPF Jeddah', item: `${SITE_URL}/paint-protection-film-jeddah` },
      ],
    },
    // ── 6. SpeakableSpecification — Voice Search ──
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-1', '#voice-answer-2', '#voice-answer-3'],
    },
  ],
  };
};

// ════════════════════════════════════════════
// Page Component
// ════════════════════════════════════════════

export default async function PPFTintingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGraphSchema(isAr)) }} />

      <LiveJeddahWeatherBanner />

      <ServiceSummary summary={isAr ? quickAnswerPPF.text : quickAnswerPPF.textEn} isAr={isAr} />

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/xpel-ppf-protection-jeddah.webp"
            alt={isAr ? "فني يركب فيلم حماية الطلاء PPF XPEL على سيارة في جدة" : "Technician installing XPEL PPF Paint Protection Film on a car in Jeddah"}
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
          <nav className={styles.breadcrumb}>
            <Link href={localePath(locale as Locale, '/')}>{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'حماية الطلاء PPF' : 'Paint Protection Film'}</span>
          </nav>
          <h1 className={styles.heroTitle}>{isAr ? 'أفلام حماية الطلاء PPF في ' : 'PPF Car Protection in '}<span className={styles.blueGradient}>{isAr ? 'جدة' : 'Jeddah'}</span></h1>
          <p className={styles.heroSubtitle}>
            {isAr ? <>ودّع الخدوش العميقة والترميل. ركّب <strong>XPEL Paint Protection Film</strong> لحماية فيزيائية كاملة مع <strong>معالجة ذاتية</strong> بالحرارة لطلاء سيارتك.</> : <>Say goodbye to deep scratches and sandblasting. Install <strong>XPEL Paint Protection Film</strong> for physical defense with <strong>heat-activated self-healing</strong>.</>}
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'اطلب تسعيرة PPF الآن' : 'Get PPF Quote Now'}</a>
            <a href="#types" className={styles.secondaryBtn}>{isAr ? 'تفاصيل الباقات ↓' : 'Package Details ↓'}</a>
          </div>
        </div>
      </section>

      <div style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>
        <OfficialPartnerBar entityKeys={['GOV.SASO']} />
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'لماذا الـ PPF؟' : 'Why PPF Car Protection?'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'الدرع الخفي لسيارتك' : 'The Invisible Shield for Your Car'}</h2>
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
        </div>
      </section>

      {/* ═══ Tint Comparison — Premium Cards ═══ */}
      <section id="types" className={styles.section} style={{ backgroundColor: 'var(--gray-900)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أنواع حماية الطلاء' : 'PPF Types'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'باقات Paint Protection Film' : 'PPF Packages'}</h2>
            <p className={styles.sectionSubtitle} style={{ color: 'var(--gray-400)' }}>{isAr ? 'أسعار تقريبية تعتمد على حجم السيارة.' : 'Approximate prices based on car size.'}</p>
          </div>
          
          <div className={styles.pricingGrid}>
            {getPPFTypes(isAr).map((t, i) => (
              <div key={i} className={`${styles.pricingCard} ${t.best ? styles.pricingCardBest : ''}`}>
                {t.best && <div className={styles.bestBadge}>{isAr ? 'الأكثر طلباً' : 'Most Popular'}</div>}
                <div className={styles.pricingHeader}>
                  <h3 className={styles.pricingTitle}>{t.name}</h3>
                  <div className={styles.pricingPrice}>
                    <span className={styles.priceValue}>{t.price}</span>
                    <span className={styles.priceCurrency}>{isAr ? 'ر.س' : 'SAR'}</span>
                  </div>
                  <p className={styles.pricingDesc}>{isAr ? 'السعر يعتمد على موديل وحجم السيارة' : 'Price depends on car model and size'}</p>
                </div>
                <div className={styles.pricingFeatures}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureLabel}>{isAr ? 'السماكة' : 'Thickness'}</span>
                    <span className={styles.featureValueHighlight}>{t.thickness}</span>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureLabel}>{isAr ? 'المعالجة الذاتية (الخدوش)' : 'Self Healing'}</span>
                    <span className={styles.featureValue} style={{ color: 'hsl(142, 70%, 45%)' }}>{t.selfHealing}</span>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureLabel}>{isAr ? 'الضمان (اصفرار/تشقق)' : 'Warranty'}</span>
                    <span className={styles.featureValue}>{t.warranty}</span>
                  </div>
                </div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={t.best ? styles.primaryBtn : styles.secondaryBtn} style={{ width: '100%', justifyContent: 'center' }}>
                  {isAr ? 'اطلب تسعيرة دقيقة لسيارتك' : 'Get Exact Quote'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'طريقة العمل' : 'Our Process'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'خطوات التركيب الاحترافي' : 'Professional Installation Steps'}</h2>
          </div>
          <div className={styles.processGrid}>
            {getProcessSteps(isAr).map((s, i) => (
              <div key={i} className={styles.processCard}>
                <div className={styles.processHeader}>
                  <span className={styles.processStep}>{s.step}</span>
                  <span className={styles.processIcon} aria-hidden="true">{s.icon}</span>
                </div>
                <h3 className={styles.processTitle}>{s.title}</h3>
                <p className={styles.processDesc}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* ═══ E-E-A-T: Verification Badges ═══ */}
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Certifications sector="حماية الطلاء" />
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ backgroundColor: 'var(--gray-900)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{isAr ? 'الأسئلة الشائعة حول الـ PPF' : 'PPF Near Me FAQs'}</h2>
          </div>
          <div className={styles.faqList}>
            {ppfFaqs.map((faq, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  {isAr ? faq.question : faq.questionEn}
                  <span className={styles.faqIcon}>+</span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{isAr ? faq.answer : faq.answerEn}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ YMYL Safety Warnings — E-E-A-T Trust ═══ */}
      <ServiceDisclaimer
        title={isAr ? 'تحذير: الـ PPF الرخيص يدمر طلاء سيارتك' : 'Warning: Cheap PPF Ruins Your Paint'}
        text={isAr ? 'تركيب PPF بسعر 3,000 ريال يعني غالباً استخدام فيلم PVC صيني رخيص، يصفر خلال 6 أشهر ويترك صمغاً يابساً يتلف بوية سيارتك الأصلية عند إزالته. استثمر في أفلام بولي يوريثان (TPU) الأصلية.' : 'Installing PPF for 3,000 SAR usually means cheap Chinese PVC film, which yellows within 6 months and leaves hardened glue that destroys your original paint upon removal. Invest in genuine TPU films.'}
      />
      <ServiceDisclaimer
        title={isAr ? 'تحذير تقني: شفرات القص اليدوي' : 'Technical Warning: Manual Cutting Blades'}
        text={isAr ? 'احذر من المراكز التي تستخدم المشرط (الشفرة اليدوية) لقص الفيلم على سيارتك! قد يتسبب ذلك بخدوش عميقة في الطلاء لا تكتشفها إلا بعد إزالة الفيلم. في عزل كور نستخدم نظام قص الكمبيوتر XPEL DAP.' : 'Beware of centers using manual blades to cut the film on your car! This causes deep paint scratches you only discover after removing the film. At AzelCore, we use the XPEL DAP computer cutting system.'}
      />

      {/* ═══ E-E-A-T: Expert Review Entity ═══ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <AuthorProfile
            isAr={isAr}
            expertName={isAr ? OWNER_NAME : OWNER_NAME_EN}
            expertTitle={isAr ? OWNER_TITLE : 'Technical Director'}
            organization={isAr ? 'عزل كور (وكيل معتمد)' : 'AzelCore (Authorized Dealer)'}
            quote={isAr ? 'حماية الطلاء PPF هي خط الدفاع الأول والأقوى ضد الترميل وحصى الطرقات في السعودية. اختيار فيلم TPU مقصوص بالكمبيوتر يوفر عليك آلاف الريالات من إعادة رش الطلاء.' : 'PPF is the first and strongest line of defense against sandblasting and road chips in Saudi Arabia. Choosing a computer-cut TPU film saves you thousands of Riyals in repainting costs.'}
            reviewDate="2026-05-15"
          />
        </div>
      </section>

      {/* ═══ Further Reading — Service → Blog (bidirectional internal linking) ═══ */}
      <section aria-labelledby="further-reading-ppf" style={{ maxWidth: '900px', margin: '3rem auto 0', padding: '0 1.5rem' }}>
        <h2 id="further-reading-ppf" style={{ marginBottom: '1rem' }}>{isAr ? 'اقرأ أيضًا' : 'Further Reading'}</h2>
        <ul style={{ display: 'grid', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
          <li><Link href={localePath(locale as Locale, '/blog/ppf-vs-ceramic-coating')} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>{isAr ? 'PPF مقابل النانو سيراميك — أيهما أفضل؟ ←' : 'PPF vs Ceramic Coating — Which Is Better? ←'}</Link></li>
          <li><Link href={localePath(locale as Locale, '/blog/ppf-vs-car-polish-paint-damage')} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>{isAr ? 'PPF مقابل تلميع السيارة وحماية الطلاء ←' : 'PPF vs Car Polish & Paint Damage ←'}</Link></li>
          <li><Link href={localePath(locale as Locale, '/blog/computer-cut-vs-manual-ppf-jeddah')} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>{isAr ? 'القص الكمبيوتري مقابل اليدوي في PPF ←' : 'Computer-Cut vs Manual PPF ←'}</Link></li>
        </ul>
      </section>

      <CrossSellCards currentPage="paint-protection-film-jeddah" locale={locale as Locale} />

      {/* ═══ Gallery Preview ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أعمالنا' : 'Our Work'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'من أعمالنا في حماية الطلاء PPF' : 'Our PPF Installation Gallery'}</h2>
          </div>
          <div className={styles.galleryGrid}>
            {['gallery-car-after-01', 'gallery-car-after-02', 'gallery-car-after-03', 'gallery-car-before-01', 'gallery-car-before-02', 'gallery-car-before-03'].map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image src={`/images/${img}.webp`} alt={isAr ? `حماية طلاء PPF جدة — عمل ${i + 1}` : `PPF Paint Protection Jeddah — Work ${i + 1}`} width={400} height={300} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link href={localePath(locale as Locale, '/gallery')} className={styles.secondaryBtn}>{isAr ? 'شاهد كل أعمالنا ←' : 'View All Gallery ←'}</Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA — data-nosnippet ═══ */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>{isAr ? 'جاهز تحمي طلاء سيارتك من ' : 'Ready to protect your paint from '}<span className={styles.blueGradient}>{isAr ? 'خدوش طرق جدة' : 'Jeddah road damage'}</span>؟</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'استشارة مجانية + تسعيرة دقيقة حسب موديل سيارتك — أفلام XPEL الأصلية بضمان 10 سنوات' : 'Free consultation + precise quote for your car model — Original XPEL films with 10-year warranty'}</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>

      {/* ═══ Voice Search Speakable Answers ═══ */}
      <div id="voice-answer-1" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'أفضل حماية لطلاء السيارة هي أفلام بي بي اف PPF وتحديداً من شركة إكس بيل لأنها تتميز بالمعالجة الذاتية للخدوش بضمان يصل لعشر سنوات.' : 'The best car paint protection is PPF films, specifically from XPEL, as they feature self-healing scratches with a warranty of up to ten years.'}
      </div>
      <div id="voice-answer-2" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'سعر تظليل وتغليف السيارة بي بي اف كامل في جدة يتراوح بين سبعة آلاف إلى خمسة عشر ألف ريال سعودي حسب حجم السيارة ونوع الفيلم.' : 'The price of full car PPF wrapping in Jeddah ranges between seven thousand to fifteen thousand Saudi Riyals depending on the car size and film type.'}
      </div>
      <div id="voice-answer-3" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'الفرق بين بي بي اف والنانو سيراميك أن البي بي اف فيلم فيزيائي سميك يحمي من الخدوش والحصى بينما النانو سيراميك سائل رقيق يعطي لمعان فقط.' : 'The difference between PPF and Nano Ceramic is that PPF is a thick physical film protecting against scratches and rocks, while Nano Ceramic is a thin liquid that only provides gloss.'}
      </div>
    </>
  );
}

