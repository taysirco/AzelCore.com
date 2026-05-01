import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, WHATSAPP_LINK, PHONE, OWNER_NAME } from '@/lib/constants';
import { faqs } from '@/data/faqs';
import { quickAnswers } from '@/data/quick-answers';
import TldrBait from '@/components/seo/TldrBait';
import CrossSellCards from '@/components/sections/CrossSellCards';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'تظليل سيارات جدة — نانو سيراميك + ضمان 10 سنوات',
  description: 'أفضل تظليل سيارات في جدة بأفلام نانو سيراميك أمريكية من جونسون و 3M. حجب 97% حرارة، ضمان 10 سنوات، لا يحجب الإشارات. احجز الآن.',
  keywords: ['تظليل سيارات جدة', 'تظليل نانو سيراميك', 'عزل حراري سيارات', 'تظليل 3M جدة', 'تظليل جونسون'],
  alternates: { canonical: `${SITE_URL}/car-insulation-jeddah` },
  openGraph: {
    title: 'تظليل سيارات جدة — نانو سيراميك أمريكي | عزل كور',
    description: 'أفلام نانو سيراميك تحجب 97% IR — ضمان 10 سنوات — وكيل جونسون المعتمد',
    url: `${SITE_URL}/car-insulation-jeddah`,
    images: [{ url: '/images/hero-car-tinting-process.png', width: 1200, height: 630 }],
  },
};

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

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'تظليل سيارات جدة — نانو سيراميك أمريكي',
  provider: { '@type': 'Organization', name: 'عزل كور', url: SITE_URL },
  areaServed: { '@type': 'City', name: 'جدة' },
  description: 'تظليل سيارات احترافي بأفلام نانو سيراميك أمريكية من جونسون و 3M مع ضمان 10 سنوات',
  offers: { '@type': 'AggregateOffer', priceCurrency: 'SAR', lowPrice: '200', highPrice: '3200' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'تظليل سيارات جدة', item: `${SITE_URL}/car-insulation-jeddah` },
  ],
};

// FAQPage Schema — Tier 3 (top 5 car-tinting FAQs)
const carFaqs = faqs.filter(f => f.service === 'car-tinting').slice(0, 5);
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: carFaqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function CarTintingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* TL;DR Bait — AI Overviews Magnet */}
      <TldrBait summary={quickAnswers.carTinting.text} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/hero-car-tinting-process.png" alt="فني يركب تظليل نانو سيراميك على سيارة في جدة" fill priority style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>تظليل سيارات</span>
          </nav>
          <h1 className={styles.heroTitle}>تظليل سيارات في <span className={styles.blueGradient}>جدة</span></h1>
          <p className={styles.heroSubtitle}>
            أفلام نانو سيراميك أمريكية تحجب <strong>97% من الأشعة تحت الحمراء</strong> — ضمان حتى عمر السيارة.
            وكيل جونسون المعتمد الوحيد في جدة.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>احجز موعد تظليل</a>
            <a href="#types" className={styles.secondaryBtn}>أنواع التظليل ↓</a>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>لماذا عزل كور</span>
            <h2 className={styles.sectionTitle}>تظليل سيارات احترافي — مش مجرد لصق فيلم</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {[
              { icon: '🔬', title: 'فحص بكاميرا FLIR', desc: 'نثبت الفرق بالأرقام — اختبار حقيقي بالكاميرا الحرارية قبل وبعد التركيب.' },
              { icon: '🖥️', title: 'قص كمبيوتر دقيق', desc: 'قص بالكمبيوتر حسب موديل السيارة — بدون شفرة تلمس الزجاج.' },
              { icon: '🏭', title: 'بيئة نظيفة', desc: 'تركيب في ورشة مغلقة ومكيفة — صفر غبار وصفر فقاعات.' },
              { icon: '📜', title: 'شهادة ضمان رسمية', desc: 'ضمان مكتوب من المصنع + فاتورة ضريبية رسمية.' },
              { icon: '⏱️', title: 'تركيب سريع', desc: 'سيدان كاملة في 2-3 ساعات — SUV في 3-5 ساعات.' },
              { icon: '📡', title: 'لا يحجب الإشارات', desc: 'أفلام غير معدنية — الهاتف و GPS و Apple Pay يعملون بشكل طبيعي.' },
            ].map((b, i) => (
              <div key={i} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tint Types */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="types">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أنواع التظليل</span>
            <h2 className={styles.sectionTitle}>اختر النوع المناسب لسيارتك</h2>
            <p className={styles.sectionSubtitle}>كل الأرقام حقيقية من الداتاشيت الرسمي — لا مبالغات.</p>
          </div>
          <div className={styles.typesTable}>
            <table className={styles.table}>
              <thead>
                <tr><th>النوع</th><th>حجب IR</th><th>حجب UV</th><th>الضمان</th><th>السعر (سيدان)</th><th>الإشارات</th></tr>
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

      {/* VLT Guide */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>دليل الدرجات</span>
            <h2 className={styles.sectionTitle}>درجات التظليل — أي VLT يناسبك؟</h2>
          </div>
          <div className={styles.vltGrid}>
            {vltGuide.map((v, i) => (
              <div key={i} className={styles.vltCard}>
                <div className={styles.vltLevel}>{v.level}</div>
                <p className={styles.vltDesc}>{v.desc}</p>
                <span className={styles.vltLegal}>{v.legal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>خطوات العمل</span>
            <h2 className={styles.sectionTitle}>كيف نظلل سيارتك</h2>
          </div>
          <div className={styles.processGrid}>
            {[
              { step: '01', title: 'الاستشارة', desc: 'نحلل نوع سيارتك واحتياجك ونقترح أفضل فيلم ودرجة VLT.', icon: '💬' },
              { step: '02', title: 'التنظيف العميق', desc: 'تنظيف شامل للزجاج بمحلول خاص لضمان التصاق مثالي.', icon: '🧹' },
              { step: '03', title: 'القص والتركيب', desc: 'قص كمبيوتر دقيق + تركيب احترافي في بيئة مغلقة ونظيفة.', icon: '✂️' },
              { step: '04', title: 'الفحص والتسليم', desc: 'فحص جودة + اختبار حراري + شهادة ضمان + تعليمات العناية.', icon: '✅' },
            ].map((s, i) => (
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

      {/* Gallery Preview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أعمالنا</span>
            <h2 className={styles.sectionTitle}>من أعمالنا في تظليل السيارات</h2>
          </div>
          <div className={styles.galleryGrid}>
            {['gallery-car-after-01', 'gallery-car-after-02', 'gallery-car-after-03', 'car-tint-heat-comparison', 'thermal-camera-car-test', 'nano-ceramic-tint-applied'].map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image src={`/images/${img}.png`} alt={`تظليل سيارات جدة — عمل ${i + 1}`} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link href="/gallery" className={styles.secondaryBtn}>شاهد كل أعمالنا ←</Link>
          </div>
        </div>
      </section>

      {/* Cross-sell — Causal Internal Linking */}
      <CrossSellCards currentPage="car-insulation-jeddah" />

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>جاهز تحمي سيارتك من <span className={styles.blueGradient}>حرارة جدة</span>؟</h2>
          <p className={styles.ctaSubtitle}>استشارة مجانية + عرض سعر فوري — وكيل جونسون المعتمد في جدة</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>تواصل عبر واتساب</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
