import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK } from '@/lib/constants';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'معرض أعمالنا — تظليل سيارات وعزل مباني في جدة',
  description: 'شاهد أعمالنا في تظليل السيارات وعزل واجهات المباني في جدة. صور حقيقية قبل وبعد — أفلام جونسون و 3M الأمريكية.',
  alternates: { canonical: `${SITE_URL}/gallery` },
};

const carPhotos = [
  { src: 'gallery-car-before-01.png', caption: 'سيارة قبل التظليل', detail: 'لكزس ES 350 — حي الروضة | الفيلم: جونسون Supreme IR | حجب: 97% IR' },
  { src: 'gallery-car-after-01.png', caption: 'سيارة بعد تظليل جونسون Supreme IR', detail: 'النتيجة: حرارة المقصورة انخفضت من 74°م إلى 38°م' },
  { src: 'gallery-car-before-02.png', caption: 'SUV قبل التظليل', detail: 'رنج روفر سبورت — حي الصفا | تظليل XPEL PRIME XR Plus' },
  { src: 'gallery-car-after-02.png', caption: 'SUV بعد تظليل نانو سيراميك', detail: 'النتيجة: وضوح رؤية 95% مع حماية UV 99% وحجب حرارة 98%' },
  { src: 'gallery-car-before-03.png', caption: 'سيارة سيدان قبل العزل', detail: 'تويوتا كامري — حي الحمدانية | الفيلم: 3M CR70' },
  { src: 'gallery-car-after-03.png', caption: 'سيارة سيدان بعد التظليل الكامل', detail: 'النتيجة: توفير بنزين 18% شهرياً — المكيف يبرد في 4 دقائق بدل 12' },
  { src: 'nano-ceramic-tint-applied.png', caption: 'فيلم نانو سيراميك أثناء التركيب', detail: 'قص كمبيوتري دقيق بتقنية DAP — صفر فقاعات' },
  { src: 'thermal-camera-car-test.png', caption: 'اختبار كاميرا حرارية — قبل وبعد', detail: 'كاميرا FLIR تُظهر فرق 34°م بين الزجاج المظلل وغير المظلل' },
  { src: 'car-tint-heat-comparison.png', caption: 'مقارنة حرارية — فيلم عادي vs نانو سيراميك', detail: 'فيلم عادي: 52°م داخل المقصورة | نانو سيراميك: 38°م فقط' },
];

const buildingPhotos = [
  { src: 'gallery-building-before-01.png', caption: 'مبنى قبل العزل', detail: 'برج مكاتب 8 أدوار — شارع فلسطين | واجهة 1,200م²' },
  { src: 'gallery-building-after-01.png', caption: 'مبنى بعد عزل الواجهة', detail: 'النتيجة: فاتورة الكهرباء انخفضت 42% = 280,000 ر.س/سنة توفير' },
  { src: 'gallery-building-before-02.png', caption: 'فيلا قبل العزل', detail: 'فيلا 350م² — حي الصفا | 16 نافذة واجهة غربية' },
  { src: 'gallery-building-after-02.png', caption: 'فيلا بعد تركيب فيلم عاكس', detail: 'النتيجة: درجة الحرارة داخل الصالة نزلت 8 درجات — المكيف أقل بـ 35%' },
  { src: 'building-tint-before-after.png', caption: 'قبل وبعد — واجهة تجارية', detail: 'معرض سيارات — طريق المدينة | فيلم عاكس فضي 20%' },
  { src: 'commercial-facade-tinting.png', caption: 'عزل واجهة مبنى تجاري', detail: 'مجمع تجاري — حي الزهراء | 800م² نانو سيراميك شفاف' },
  { src: 'villa-window-insulation-jeddah.png', caption: 'عزل نوافذ فيلا في جدة', detail: 'فيلا فاخرة — حي الشاطئ | فيلم مقاوم للملوحة + ضمان 15 سنة' },
  { src: 'office-window-tinting.png', caption: 'عزل مكاتب إدارية', detail: 'مكاتب إدارية 5 أدوار — حي النزهة | فيلم 3M Prestige 70' },
  { src: 'reflective-film-building.png', caption: 'فيلم عاكس على واجهة زجاجية', detail: 'واجهة فندق — كورنيش جدة | حجب 85% من الحرارة الشمسية' },
];

const imageListSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ImageGallery',
      name: 'معرض أعمال عزل كور — جدة',
      url: `${SITE_URL}/gallery`,
      description: 'صور حقيقية لأعمال تظليل السيارات وعزل المباني في جدة',
      provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
      image: [...carPhotos, ...buildingPhotos].map(p => ({
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/${p.src}`,
        caption: p.caption,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'معرض الأعمال', item: `${SITE_URL}/gallery` },
      ],
    },
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-gallery-1'],
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageListSchema) }} />

      {/* ── Voice SEO Target — Gallery ── */}
      <div id="voice-answer-gallery-1" className="sr-only" aria-hidden="true">
        معرض أعمال عزل كور — تصفح أكثر من 30 سيارة تم تظليلها في جدة بأنواع الأفلام المختلفة.
      </div>

      {/* Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>أعمالنا</span>
          </nav>
          <h1 className={styles.pageTitle}>معرض <span className={styles.highlight}>أعمالنا</span></h1>
          <p className={styles.pageSubtitle}>صور حقيقية قبل وبعد — كل مشروع بأيدي فريقنا في جدة.</p>
        </div>
      </section>

      {/* Car Gallery */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>🚗 تظليل سيارات</span>
            <h2 className={styles.sectionTitle}>أعمال تظليل السيارات</h2>
          </div>
          <div className={styles.galleryGrid}>
            {carPhotos.map((p, i) => (
              <figure key={i} className={styles.galleryItem}>
                <Image src={`/images/${p.src}`} alt={`${p.caption} — ${p.detail}`} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <figcaption className={styles.caption}>
                  <strong>{p.caption}</strong>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px', lineHeight: '1.5' }}>{p.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Building Gallery */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>🏢 عزل مباني</span>
            <h2 className={styles.sectionTitle}>مشاريع عزل واجهات المباني</h2>
          </div>
          <div className={styles.galleryGrid}>
            {buildingPhotos.map((p, i) => (
              <figure key={i} className={styles.galleryItem}>
                <Image src={`/images/${p.src}`} alt={`${p.caption} — ${p.detail}`} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <figcaption className={styles.caption}>
                  <strong>{p.caption}</strong>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px', lineHeight: '1.5' }}>{p.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — data-nosnippet (vector density) */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>عجبك شغلنا؟</h2>
          <p className={styles.ctaSubtitle}>سيارتك أو مبناك ممكن يكون المشروع القادم — تواصل معنا الآن.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>تواصل عبر واتساب</a>
        </div>
      </section>
    </>
  );
}
