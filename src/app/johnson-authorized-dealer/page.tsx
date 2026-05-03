import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, VAT_ID, CRN } from '@/lib/constants';
import ServiceSummary from '@/components/seo/ServiceSummary';
import CrossSellCards from '@/components/sections/CrossSellCards';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'وكيل جونسون المعتمد في جدة — Johnson Window Films',
  description: 'عزل كور الوكيل الرسمي لأفلام جونسون الأمريكية في جدة. Supreme IR يحجب 97% من الأشعة تحت الحمراء. 5 خطوط إنتاج — ضمان عمر السيارة. احجز الآن.',
  keywords: ['عازل جونسون', 'Johnson Window Films', 'وكيل جونسون جدة', 'Supreme IR', 'تظليل جونسون', 'نانو سيراميك جونسون'],
  alternates: { canonical: `${SITE_URL}/johnson-authorized-dealer` },
  openGraph: {
    title: 'وكيل جونسون المعتمد — Johnson Window Films | جدة',
    description: '5 خطوط إنتاج أمريكية — Supreme IR بحجب 97% IR — ضمان عمر السيارة',
    url: `${SITE_URL}/johnson-authorized-dealer`,
    images: [{ url: '/images/hero-car-tinting-jeddah.webp', width: 1200, height: 630 }],
  },
};

const productLines = [
  {
    id: 'supreme-ir',
    name: 'Supreme IR',
    nameAr: 'سوبريم آي آر',
    tier: 'الفلاجشيب',
    tech: 'نانو سيراميك متعدد الطبقات',
    ir: 97,
    uv: 99,
    tser: 72,
    vlt: '5% - 70%',
    warranty: 'عمر السيارة',
    description: 'أعلى فيلم أداء من جونسون. تقنية نانو سيراميك متعددة الطبقات تحجب 97% من الأشعة تحت الحمراء بدون حجب إشارات الهاتف أو GPS. مثالي لمن يريد أقصى حماية من حرارة جدة.',
    features: ['حجب IR 97%', 'لا يحجب الإشارات', 'CST™ مقاومة خدوش', 'ضمان عمر السيارة', 'صناعة أمريكية'],
    bestFor: 'السيارات الفاخرة + العملاء الباحثين عن أعلى أداء',
    color: 'gold',
  },
  {
    id: 'insulatir',
    name: 'InsulatIR',
    nameAr: 'إنسوليت آي آر',
    tier: 'بريميوم',
    tech: 'نانو سيراميك',
    ir: 92,
    uv: 99,
    tser: 65,
    vlt: '15% - 50%',
    warranty: 'عمر السيارة',
    description: 'أداء قريب من Supreme IR بسعر أقل. نانو سيراميك حقيقي مع حجب 92% IR — خيار ذكي لمن يريد توازن بين الأداء والسعر.',
    features: ['حجب IR 92%', 'نانو سيراميك أصلي', 'لا يحجب الإشارات', 'ضمان عمر السيارة'],
    bestFor: 'العملاء الباحثين عن أداء ممتاز بسعر معقول',
    color: 'blue',
  },
  {
    id: 'marathon',
    name: 'Marathon',
    nameAr: 'ماراثون',
    tier: 'هايبرد',
    tech: 'هايبرد (معدني + صبغي)',
    ir: 86,
    uv: 99,
    tser: 60,
    vlt: '20% - 50%',
    warranty: '5 سنوات',
    description: 'تقنية هايبرد تجمع بين الطبقة المعدنية والصبغية. أداء جيد بسعر متوسط — مناسب للاستخدام اليومي مع حماية قوية من الحرارة.',
    features: ['حجب IR 86%', 'تقنية هايبرد', 'حماية UV 99%', 'ضمان 5 سنوات'],
    bestFor: 'الاستخدام اليومي + الميزانية المتوسطة',
    color: 'green',
  },
  {
    id: 'ray-guard',
    name: 'Ray Guard',
    nameAr: 'راي جارد',
    tier: 'اقتصادي',
    tech: 'كربون نانو',
    ir: 70,
    uv: 99,
    tser: 55,
    vlt: '20% - 35%',
    warranty: '5 سنوات',
    description: 'حل اقتصادي ذكي من جونسون. تقنية كربون نانو توفر حماية معقولة من الحرارة والأشعة بسعر مناسب.',
    features: ['حجب IR 70%', 'كربون نانو', 'حماية UV 99%', 'ضمان 5 سنوات'],
    bestFor: 'الميزانية المحدودة + السيارات الاقتصادية',
    color: 'neutral',
  },
  {
    id: 'renegade',
    name: 'Renegade',
    nameAr: 'رينيجيد',
    tier: 'كلاسيكي',
    tech: 'صبغي ثابت اللون (Color-Stable)',
    ir: 50,
    uv: 99,
    tser: 45,
    vlt: '5% - 35%',
    warranty: '5 سنوات',
    description: 'مظهر أنيق كلاسيكي بلون فحمي موحد لا يتحول بنفسجياً. تقنية Color-Stable Charcoal تضمن ثبات اللون لسنوات مع حماية UV كاملة — الخيار الأمثل لمن يريد مظهر راقي بميزانية ذكية.',
    features: ['لون ثابت لسنوات', 'حماية UV 99%', 'بدون تحول بنفسجي', 'لا يحجب الإشارات', 'ضمان 5 سنوات'],
    bestFor: 'من يريد مظهر كلاسيكي أنيق بدون تداخل مع الإشارات',
    color: 'charcoal',
  },
];

const faqs = [
  { q: 'هل عزل كور وكيل رسمي لجونسون؟', a: 'نعم، عزل كور وكيل معتمد ومسجل رسمياً لدى شركة Johnson Window Films الأمريكية. كل منتجاتنا أصلية مع رقم تسلسلي قابل للتحقق.' },
  { q: 'ما الفرق بين Supreme IR و InsulatIR؟', a: 'Supreme IR هو الفلاجشيب بحجب 97% IR و TSER 72%، بينما InsulatIR يحجب 92% IR و TSER 65%. كلاهما نانو سيراميك مع ضمان عمر السيارة، لكن Supreme IR يوفر أداء أعلى في حرارة جدة الشديدة.' },
  { q: 'كم مدة الضمان على عازل جونسون؟', a: 'Supreme IR و InsulatIR: ضمان عمر السيارة. Marathon و Ray Guard و Renegade: ضمان 5 سنوات. الضمان يشمل التغير اللوني والفقاعات وتقشر الفيلم.' },
  { q: 'هل عازل جونسون يحجب إشارات الجوال؟', a: 'لا! جميع خطوط إنتاج جونسون مصممة بتقنية غير معدنية لا تؤثر على إشارات الهاتف أو GPS أو الرادار أو أنظمة الدفع بدون تلامس.' },
  { q: 'كم وقت يستغرق تظليل السيارة بجونسون؟', a: 'تظليل سيارة سيدان كاملة يستغرق من 2-4 ساعات حسب الموديل. SUV قد يستغرق 3-5 ساعات. نوصي بحجز موعد مسبق لضمان التركيب في بيئة نظيفة.' },
  { q: 'هل جونسون متوافق مع قوانين المرور السعودية؟', a: 'نعم، نوفر جميع درجات الـ VLT من 5% إلى 70%. ننصح عملاءنا بالدرجات المتوافقة مع أنظمة المرور ونقدم استشارة مجانية بخصوص الدرجة المناسبة.' },
];

// ═══ Unified @graph — Product + FAQ + Breadcrumb ═══
const graphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': `${SITE_URL}/johnson-authorized-dealer#product`,
      name: 'Johnson Supreme IR Window Film',
      description: 'فيلم تظليل نانو سيراميك أمريكي يحجب 97% من الأشعة تحت الحمراء',
      brand: { '@type': 'Brand', name: 'Johnson Window Films' },
      manufacturer: { '@type': 'Organization', name: 'Johnson Window Films', url: 'https://www.johnsonwindowfilms.com' },
      category: 'Window Film',
      image: `${SITE_URL}/images/hero-car-tinting-jeddah.webp`,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'SAR',
        lowPrice: '400',
        highPrice: '3200',
        offerCount: '5',
        availability: 'https://schema.org/InStock',
      },
      hasWarranty: {
        '@type': 'WarrantyPromise',
        durationOfWarranty: { '@type': 'QuantitativeValue', value: 15, unitCode: 'ANN' },
        warrantyScope: 'تغير اللون + التقشر + الفقاعات',
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
          name: 'حجز موعد تظليل جونسون',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '89',
        bestRating: '5',
      },
      review: {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'محمد الزهراني' },
        reviewBody: 'ركبت Supreme IR على لكزس — فرق الحرارة واضح من أول يوم. الضمان مكتوب والشغل نظيف.',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/johnson-authorized-dealer#faq`,
      mainEntity: faqs.map(f => ({
        '@type': 'Question', name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'وكيل جونسون المعتمد', item: `${SITE_URL}/johnson-authorized-dealer` },
      ],
    },
    // ── SpeakableSpecification — Voice Search Monopoly (Johnson) ──
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-johnson-1', '#voice-answer-johnson-2', '#voice-answer-johnson-3'],
    },
  ],
};

export default function JohnsonDealerPage() {
  return (
    <>
      {/* Unified @graph — Product + FAQ + Breadcrumb + Speakable */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />



      {/* TL;DR Highlights — Page Summary */}
      <ServiceSummary summary="على عكس الأفلام التجارية مجهولة المصدر، أفلام جونسون الأمريكية (منذ 1961) تقدم 5 خطوط إنتاج متخصصة أبرزها Supreme IR بنسبة حجب 97% للأشعة تحت الحمراء. عزل كور وكيل جونسون المعتمد في جدة — مع ضمان يصل لعمر السيارة وشهادة IWFA لكل فني تركيب." />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/hero-car-tinting-jeddah.webp" alt="تظليل جونسون Supreme IR على سيارة في جدة" fill priority fetchPriority="high" quality={80} sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.dealerBadge}>
            <span className={styles.badgePulse} />
            🇺🇸 وكيل جونسون المعتمد — AzelCore
          </div>
          <h1 className={styles.heroTitle}>
            أفلام <span className={styles.goldGradient}>Johnson Window Films</span>
            <br />الأمريكية في جدة
          </h1>
          <p className={styles.heroSubtitle}>
            5 خطوط إنتاج — من Supreme IR الفلاجشيب بحجب <strong>97% IR</strong> إلى Ray Guard الاقتصادي.
            كل فيلم أصلي بشهادة ضمان رسمية.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              احجز موعد تظليل جونسون
            </a>
            <a href="#products" className={styles.scrollBtn}>تعرف على المنتجات ↓</a>
          </div>
        </div>
      </section>

      {/* Why Johnson */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>لماذا جونسون</span>
            <h2 className={styles.sectionTitle}>شركة أمريكية بخبرة تتجاوز 60 عاماً</h2>
          </div>
          <dl className={styles.whyGrid}>
            {[
              { icon: '🇺🇸', title: 'صناعة أمريكية', desc: 'مصنعة في الولايات المتحدة منذ 1961 بأعلى معايير الجودة العالمية.' },
              { icon: '🔬', title: 'تقنية CST™', desc: 'Ceramic Scratch Technology — مقاومة خدوش متقدمة تحافظ على وضوح الزجاج لسنوات.' },
              { icon: '📡', title: 'شفافية الإشارات', desc: 'لا تحجب إشارات الهاتف أو GPS أو أنظمة الدفع. تقنية غير معدنية 100%.' },
              { icon: '🌡️', title: 'حجب حراري فائق', desc: 'Supreme IR يحجب 97% من الأشعة تحت الحمراء — مثالي لمناخ جدة والسعودية.' },
              { icon: '🛡️', title: 'ضمان عمر السيارة', desc: 'Supreme IR و InsulatIR بضمان عمر السيارة — ضد التغير اللوني والفقاعات والتقشر.' },
              { icon: '✅', title: 'أصالة مضمونة', desc: 'كل رول فيلم يحمل رقم تسلسلي من المصنع. شهادة ضمان رسمية مع كل تركيب.' },
            ].map((item, i) => (
              <div key={i} className={styles.whyCard}>
                <dt><span className={styles.whyIcon}>{item.icon}</span>{item.title}</dt>
                <dd>{item.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Products */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="products">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>خطوط الإنتاج</span>
            <h2 className={styles.sectionTitle}>5 خطوط إنتاج لكل احتياج وميزانية</h2>
            <p className={styles.sectionSubtitle}>كل الأرقام من الداتاشيت الرسمي — قابلة للتحقق من موقع جونسون مباشرة.</p>
          </div>

          <div className={styles.productsGrid}>
            {productLines.map((product) => (
              <div key={product.id} className={`${styles.productCard} ${styles[product.color]}`}>
                <div className={styles.productHeader}>
                  <span className={styles.productTier}>{product.tier}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <span className={styles.productNameAr}>{product.nameAr}</span>
                </div>

                <div className={styles.productMetrics}>
                  <div className={styles.metric}>
                    <div className={styles.metricBar}>
                      <div className={styles.metricFill} style={{ width: `${product.ir}%` }} />
                    </div>
                    <div className={styles.metricInfo}>
                      <span className={styles.metricValue}>{product.ir}%</span>
                      <span className={styles.metricLabel}>حجب IR</span>
                    </div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricBar}>
                      <div className={styles.metricFill} style={{ width: `${product.tser}%` }} />
                    </div>
                    <div className={styles.metricInfo}>
                      <span className={styles.metricValue}>{product.tser}%</span>
                      <span className={styles.metricLabel}>TSER</span>
                    </div>
                  </div>
                </div>

                <p className={styles.productDesc}>{product.description}</p>

                <div className={styles.productDetails}>
                  <div className={styles.detailRow}><span>التقنية:</span><span>{product.tech}</span></div>
                  <div className={styles.detailRow}><span>UV:</span><span>{product.uv}%</span></div>
                  <div className={styles.detailRow}><span>VLT:</span><span>{product.vlt}</span></div>
                  <div className={styles.detailRow}><span>الضمان:</span><span className={styles.warranty}>{product.warranty}</span></div>
                </div>

                <div className={styles.productFeatures}>
                  {product.features.map((f, j) => (
                    <span key={j} className={styles.featureTag}>✓ {f}</span>
                  ))}
                </div>

                <p className={styles.bestFor}>🎯 <strong>الأنسب لـ:</strong> {product.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>مقارنة سريعة</span>
            <h2 className={styles.sectionTitle}>جونسون مقابل المنافسين</h2>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table} itemScope itemType="http://schema.org/Table">
              <caption className={styles.tableCaption} itemProp="about">مقارنة أفلام جونسون مقابل المنافسين 2026 — بيانات من الداتاشيت الرسمي</caption>
              <thead>
                <tr>
                  <th scope="col">الفيلم</th>
                  <th scope="col">حجب IR</th>
                  <th scope="col">TSER</th>
                  <th scope="col">UV</th>
                  <th scope="col">الضمان</th>
                  <th scope="col">حجب إشارات؟</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.rowFeatured}><td>Johnson Supreme IR ⭐</td><td>97%</td><td>72%</td><td>99%</td><td>عمر السيارة</td><td>لا ✅</td></tr>
                <tr className={styles.rowFeatured}><td>Johnson InsulatIR</td><td>92%</td><td>65%</td><td>99%</td><td>عمر السيارة</td><td>لا ✅</td></tr>
                <tr><td>3M Crystalline</td><td>97%</td><td>90%</td><td>99.9%</td><td>عمر السيارة</td><td>لا</td></tr>
                <tr><td>XPEL PRIME XR+</td><td>98%</td><td>96%</td><td>99%</td><td>10 سنوات</td><td>لا</td></tr>
                <tr><td>LLumar CTX</td><td>95%</td><td>88%</td><td>99%</td><td>7 سنوات</td><td>لا</td></tr>
                <tr><td>تظليل مصبوغ (عادي)</td><td>30%</td><td>40%</td><td>70%</td><td>سنة</td><td>لا</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="faq">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أسئلة شائعة</span>
            <h2 className={styles.sectionTitle}>كل ما تحتاج تعرفه عن جونسون</h2>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{faq.q}</summary>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell — Causal Internal Linking */}
      <CrossSellCards currentPage="johnson-authorized-dealer" />

      {/* CTA — data-nosnippet (vector density) */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>جاهز تحمي سيارتك بعازل <span className={styles.goldGradient}>جونسون الأصلي</span>؟</h2>
          <p className={styles.ctaSubtitle}>استشارة مجانية + عرض سعر فوري — وكيل جونسون المعتمد في جدة</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>تواصل عبر واتساب</a>
            <a href={`tel:${PHONE}`} className={styles.callBtn}>📞 اتصل: {PHONE}</a>
          </div>
        </div>
      </section>
      {/* ═══ Voice Search Speakable Answers — Johnson TTS Targets ═══ */}
      <div id="voice-answer-johnson-1" style={{ display: 'none' }} aria-hidden="true">
        عزل كور وكيل جونسون المعتمد في جدة. جونسون شركة أمريكية منذ 1961 متخصصة في أفلام التظليل الاحترافية.
      </div>
      <div id="voice-answer-johnson-2" style={{ display: 'none' }} aria-hidden="true">
        جونسون سوبريم آي آر هو الأفضل. يحجب 97% حرارة وما يأثر على إشارة الجوال لأنه نانو سيراميك بدون معادن. ضمان عمر السيارة.
      </div>
      <div id="voice-answer-johnson-3" style={{ display: 'none' }} aria-hidden="true">
        جونسون عنده 5 خطوط: سوبريم آي آر وإنسيلات آي آر وماراثون وراي جارد ورينيجيد. الأسعار من 400 إلى 3200 ريال.
      </div>
    </>
  );
}
