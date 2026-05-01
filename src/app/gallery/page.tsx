import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK } from '@/lib/constants';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'معرض أعمالنا — تظليل سيارات وعزل مباني في جدة',
  description: 'شاهد أعمالنا في تظليل السيارات وعزل واجهات المباني في جدة. صور حقيقية قبل وبعد — أفلام جونسون و 3M الأمريكية.',
  alternates: { canonical: `${SITE_URL}/gallery` },
};

const carPhotos = [
  { src: 'gallery-car-before-01.png', caption: 'سيارة قبل التظليل' },
  { src: 'gallery-car-after-01.png', caption: 'سيارة بعد تظليل جونسون Supreme IR' },
  { src: 'gallery-car-before-02.png', caption: 'SUV قبل التظليل' },
  { src: 'gallery-car-after-02.png', caption: 'SUV بعد تظليل نانو سيراميك' },
  { src: 'gallery-car-before-03.png', caption: 'سيارة سيدان قبل العزل' },
  { src: 'gallery-car-after-03.png', caption: 'سيارة سيدان بعد التظليل الكامل' },
  { src: 'nano-ceramic-tint-applied.png', caption: 'فيلم نانو سيراميك أثناء التركيب' },
  { src: 'thermal-camera-car-test.png', caption: 'اختبار كاميرا حرارية — قبل وبعد' },
  { src: 'car-tint-heat-comparison.png', caption: 'مقارنة حرارية — فيلم عادي vs نانو سيراميك' },
];

const buildingPhotos = [
  { src: 'gallery-building-before-01.png', caption: 'مبنى قبل العزل' },
  { src: 'gallery-building-after-01.png', caption: 'مبنى بعد عزل الواجهة' },
  { src: 'gallery-building-before-02.png', caption: 'فيلا قبل العزل' },
  { src: 'gallery-building-after-02.png', caption: 'فيلا بعد تركيب فيلم عاكس' },
  { src: 'building-tint-before-after.png', caption: 'قبل وبعد — واجهة تجارية' },
  { src: 'commercial-facade-tinting.png', caption: 'عزل واجهة مبنى تجاري' },
  { src: 'villa-window-insulation-jeddah.png', caption: 'عزل نوافذ فيلا في جدة' },
  { src: 'office-window-tinting.png', caption: 'عزل مكاتب إدارية' },
  { src: 'reflective-film-building.png', caption: 'فيلم عاكس على واجهة زجاجية' },
];

const imageListSchema = {
  '@context': 'https://schema.org',
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
};

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageListSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'الرئيسية', href: '/' },
        { name: 'معرض الأعمال', href: '/gallery' },
      ]} />

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
                <Image src={`/images/${p.src}`} alt={p.caption} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <figcaption className={styles.caption}>{p.caption}</figcaption>
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
                <Image src={`/images/${p.src}`} alt={p.caption} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <figcaption className={styles.caption}>{p.caption}</figcaption>
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
