import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { SITE_URL, SITE_NAME, SITE_NAME_EN, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_NAME_EN, OWNER_TITLE, VAT_ID, GEO, ADDRESS_STRUCTURED } from '@/lib/constants';
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
    title: isAr ? 'حماية طلاء السيارات PPF جدة — أفلام إكس بيل XPEL الأفضل' : 'PPF Paint Protection Film Jeddah — Best XPEL Protection | AzelCore',
    description: isAr ? 'أفضل مركز لتركيب أفلام حماية الطلاء PPF في جدة. حماية كاملة للسيارة من الخدوش والرمال باستخدام XPEL Paint Protection Film مع معالجة ذاتية للخدوش.' : 'Top PPF paint protection film near me in Jeddah. Full car protection against scratches and sand using XPEL with self-healing technology.',
    alternates: { canonical: `${SITE_URL}${localePath(locale as Locale, '/(local-jeddah)/paint-protection-film-jeddah')}` },
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
    answer: 'النانو سيراميك سائل يحمي من بهتان اللون ويعطي لمعان، لكن لا يحمي من الخدوش أو الحصى. الـ PPF هو فيلم فيزيائي بسماكة 8 ميل يحمي الطلاء من الخدوش العميقة والترميل والحصى بفضل المعالجة الذاتية.',
    answerEn: 'Nano Ceramic is a liquid that protects against fading and adds gloss, but not against scratches or rocks. PPF is a physical 8-mil film that protects against deep scratches, sandblasting, and rock chips thanks to self-healing.',
  },
  {
    question: 'هل يمكن تركيب PPF لجزء من السيارة فقط؟',
    questionEn: 'Can I install PPF on just a part of the car?',
    answer: 'نعم، الباقة الأكثر طلباً هي (حماية المقدمة) وتشمل الكبوت، الصدام الأمامي، الرفارف، والمرايا الجانبية — وهي الأجزاء الأكثر عرضة للحصى في طرق جدة.',
    answerEn: 'Yes, the most popular package is (Front-End Protection), covering the hood, front bumper, fenders, and side mirrors — the parts most vulnerable to road debris in Jeddah.',
  },
  {
    question: 'هل فيلم PPF يصفر مع الوقت؟',
    questionEn: 'Does PPF film turn yellow over time?',
    answer: 'نحن نستخدم أفلام عالية الجودة (مثل XPEL) المصممة بطبقة مضادة للاصفرار (Non-Yellowing) مع ضمان يمتد لـ 10 سنوات ضد الاصفرار والتشقق.',
    answerEn: 'We use high-quality films (like XPEL) engineered with a non-yellowing topcoat, backed by a 10-year warranty against yellowing and cracking.',
  },
  {
    question: 'هل يغطي الضمان عيوب التركيب؟',
    questionEn: 'Does the warranty cover installation defects?',
    answer: 'نعم، ضماننا يغطي جودة الفيلم ضد الاصفرار والتشقق والتقشير، ويغطي أيضاً عيوب التركيب مثل الفقاعات، لضمان راحة بالك التامة.',
    answerEn: 'Yes, our warranty covers the film quality against yellowing, cracking, and peeling, and also covers installation defects like bubbling, ensuring your complete peace of mind.',
  },
  {
    question: 'متى أقدر أغسل سيارتي بعد تركيب الـ PPF؟',
    questionEn: 'When can I wash my car after installing PPF?',
    answer: 'يجب الانتظار 7 أيام بعد التركيب قبل غسيل السيارة بالضغط العالي (البستم) لضمان جفاف المادة اللاصقة تماماً وتثبيت الفيلم على بودي السيارة.',
    answerEn: 'You must wait 7 days after installation before washing the car with high-pressure water. This ensures the adhesive cures completely and bonds to the car body.',
  }
];

// ════════════════════════════════════════════
// JSON-LD @graph
// ════════════════════════════════════════════

const getGraphSchema = (isAr: boolean) => {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoBodyShop',
      '@id': `${SITE_URL}/#autobodyshop`,
      name: isAr ? 'عزل كور — حماية طلاء السيارات PPF' : 'AzelCore — Paint Protection Film (PPF)',
      url: `${SITE_URL}/paint-protection-film-jeddah`,
      telephone: PHONE,
      image: `${SITE_URL}/images/xpel-ppf-protection-jeddah.webp`,
      logo: `${SITE_URL}/images/azelcore-logo.webp`,
      description: isAr ? 'أفضل مركز لتركيب أفلام حماية الطلاء PPF في جدة. حماية كاملة ضد الترميل والخدوش باستخدام أفلام XPEL مع خاصية المعالجة الذاتية وقص كمبيوتر دقيق.' : 'Top center for Paint Protection Film (PPF) installation in Jeddah. Full defense against sandblasting and scratches using XPEL with self-healing and computer cut.',
      priceRange: '2500-15000 SAR',
      currenciesAccepted: 'SAR',
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
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: WHATSAPP_LINK,
        },
        result: {
          '@type': 'Reservation',
          name: isAr ? 'حجز موعد حماية طلاء PPF' : 'Book PPF appointment',
        },
      },
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/paint-protection-film-jeddah#service`,
      name: isAr ? 'حماية الطلاء PPF' : 'Paint Protection Film (PPF)',
      description: isAr ? 'تركيب فيلم حماية الطلاء XPEL للسيارات لحمايتها من الخدوش والترميل.' : 'Installation of XPEL Paint Protection Film for cars to protect against scratches and sandblasting.',
      provider: { '@id': `${SITE_URL}/#autobodyshop` },
      serviceType: 'Paint Protection Film',
    },
    {
      '@type': 'FAQPage',
      mainEntity: ppfFaqs.map(f => ({
        '@type': 'Question',
        name: isAr ? f.question : f.questionEn,
        acceptedAnswer: { '@type': 'Answer', text: isAr ? f.answer : f.answerEn },
      })),
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

      <CrossSellCards
        currentPage="car-insulation-jeddah"
        locale={locale as Locale}
      />

      {/* ═══ Voice Search Speakable Answers — TTS/CarPlay/Siri Targets ═══ */}
      <div id="voice-answer-1" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'أفضل حماية لطلاء السيارة هي أفلام بي بي اف PPF وتحديداً من شركة إكس بيل لأنها تتميز بالمعالجة الذاتية للخدوش بضمان يصل لعشر سنوات.' : 'The best car paint protection is PPF films, specifically from XPEL, as they feature self-healing scratches with a warranty of up to ten years.'}
      </div>
      <div id="voice-answer-2" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'سعر تظليل وتغليف السيارة بي بي اف كامل في جدة يتراوح بين سبعة آلاف إلى خمسة عشر ألف ريال سعودي حسب حجم السيارة ونوع الفيلم.' : 'The price of full car PPF wrapping in Jeddah ranges between seven thousand to fifteen thousand Saudi Riyals depending on the car size and film type.'}
      </div>
    </>
  );
}
