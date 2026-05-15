import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK } from '@/lib/constants';
import CrossSellCards from '@/components/sections/CrossSellCards';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'معرض أعمالنا — تظليل سيارات وعزل مباني في جدة' : 'معرض أعمالنا — تظليل سيارات وعزل مباني في جدة | AzelCore',
    description: isAr ? 'شاهد أعمالنا في تظليل السيارات وعزل واجهات المباني في جدة. صور حقيقية قبل وبعد — أفلام جونسون و 3M الأمريكية.' : 'شاهد أعمالنا في تظليل السيارات وعزل واجهات المباني في جدة. صور حقيقية قبل وبعد — أفلام جونسون و 3M الأمريكية.',
    alternates: { canonical: `${SITE_URL}${localePath(locale as Locale, '/gallery')}` },
  };
}

const getCarPhotos = (isAr: boolean) => [
  { src: 'gallery-car-before-01.webp', caption: isAr ? 'سيارة قبل التظليل' : 'Car before tinting', detail: isAr ? 'لكزس ES 350 — حي الروضة | الفيلم: جونسون Supreme IR | حجب: 97% IR' : 'Lexus ES 350 — Al Rawdah | Film: Johnson Supreme IR | Block: 97% IR' },
  { src: 'gallery-car-after-01.webp', caption: isAr ? 'سيارة بعد تظليل جونسون Supreme IR' : 'Car after Johnson Supreme IR tint', detail: isAr ? 'النتيجة: حرارة المقصورة انخفضت من 74°م إلى 38°م' : 'Result: Cabin heat dropped from 74°C to 38°C' },
  { src: 'gallery-car-before-02.webp', caption: isAr ? 'SUV قبل التظليل' : 'SUV before tinting', detail: isAr ? 'رنج روفر سبورت — حي الصفا | تظليل XPEL PRIME XR Plus' : 'Range Rover Sport — Al Safa | XPEL PRIME XR Plus tint' },
  { src: 'gallery-car-after-02.webp', caption: isAr ? 'SUV بعد تظليل نانو سيراميك' : 'SUV after nano-ceramic tint', detail: isAr ? 'النتيجة: وضوح رؤية 95% مع حماية UV 99% وحجب حرارة 98%' : 'Result: 95% visibility with 99% UV protection and 98% heat block' },
  { src: 'gallery-car-before-03.webp', caption: isAr ? 'سيارة سيدان قبل العزل' : 'Sedan before insulation', detail: isAr ? 'تويوتا كامري — حي الحمدانية | الفيلم: 3M CR70' : 'Toyota Camry — Al Hamdaniya | Film: 3M CR70' },
  { src: 'gallery-car-after-03.webp', caption: isAr ? 'سيارة سيدان بعد التظليل الكامل' : 'Sedan after full tinting', detail: isAr ? 'النتيجة: توفير بنزين 18% شهرياً — المكيف يبرد في 4 دقائق بدل 12' : 'Result: 18% monthly fuel savings — AC cools in 4 mins instead of 12' },
  { src: 'nano-ceramic-tint-applied.webp', caption: isAr ? 'فيلم نانو سيراميك أثناء التركيب' : 'Nano-ceramic film during installation', detail: isAr ? 'قص كمبيوتري دقيق بتقنية DAP — صفر فقاعات' : 'Precise DAP computer cut — Zero bubbles' },
  { src: 'thermal-camera-car-test.webp', caption: isAr ? 'اختبار كاميرا حرارية — قبل وبعد' : 'Thermal camera test — Before & After', detail: isAr ? 'كاميرا FLIR تُظهر فرق 34°م بين الزجاج المظلل وغير المظلل' : 'FLIR camera shows a 34°C diff between tinted & untinted glass' },
  { src: 'car-tint-heat-comparison.webp', caption: isAr ? 'مقارنة حرارية — فيلم عادي vs نانو سيراميك' : 'Heat comparison — Regular vs Nano-Ceramic film', detail: isAr ? 'فيلم عادي: 52°م داخل المقصورة | نانو سيراميك: 38°م فقط' : 'Regular film: 52°C inside | Nano-Ceramic: 38°C only' },
];

const getBuildingPhotos = (isAr: boolean) => [
  { src: 'gallery-building-before-01.webp', caption: isAr ? 'مبنى قبل العزل' : 'Building before insulation', detail: isAr ? 'برج مكاتب 8 أدوار — شارع فلسطين | واجهة 1,200م²' : '8-floor office tower — Palestine St. | 1,200m² facade' },
  { src: 'gallery-building-after-01.webp', caption: isAr ? 'مبنى بعد عزل الواجهة' : 'Building after facade insulation', detail: isAr ? 'النتيجة: فاتورة الكهرباء انخفضت 42% = 280,000 ر.س/سنة توفير' : 'Result: Electricity bill dropped 42% = 280,000 SAR/year savings' },
  { src: 'gallery-building-before-02.webp', caption: isAr ? 'فيلا قبل العزل' : 'Villa before insulation', detail: isAr ? 'فيلا 350م² — حي الصفا | 16 نافذة واجهة غربية' : '350m² Villa — Al Safa | 16 west-facing windows' },
  { src: 'gallery-building-after-02.webp', caption: isAr ? 'فيلا بعد تركيب فيلم عاكس' : 'Villa after reflective film', detail: isAr ? 'النتيجة: درجة الحرارة داخل الصالة نزلت 8 درجات — المكيف أقل بـ 35%' : 'Result: Living room temp dropped 8°C — AC usage down 35%' },
  { src: 'building-tint-before-after.webp', caption: isAr ? 'قبل وبعد — واجهة تجارية' : 'Before & After — Commercial facade', detail: isAr ? 'معرض سيارات — طريق المدينة | فيلم عاكس فضي 20%' : 'Car showroom — Madinah Rd. | 20% Silver Reflective Film' },
  { src: 'commercial-facade-tinting.webp', caption: isAr ? 'عزل واجهة مبنى تجاري' : 'Commercial building facade insulation', detail: isAr ? 'مجمع تجاري — حي الزهراء | 800م² نانو سيراميك شفاف' : 'Commercial complex — Al Zahra | 800m² clear nano-ceramic' },
  { src: 'villa-window-insulation-jeddah.webp', caption: isAr ? 'عزل نوافذ فيلا في جدة' : 'Villa window insulation in Jeddah', detail: isAr ? 'فيلا فاخرة — حي الشاطئ | فيلم مقاوم للملوحة + ضمان 15 سنة' : 'Luxury Villa — Al Shati | Anti-salt film + 15yr warranty' },
  { src: 'office-window-tinting.webp', caption: isAr ? 'عزل مكاتب إدارية' : 'Office windows insulation', detail: isAr ? 'مكاتب إدارية 5 أدوار — حي النزهة | فيلم 3M Prestige 70' : '5-floor office building — Al Nuzha | 3M Prestige 70 film' },
  { src: 'reflective-film-building.webp', caption: isAr ? 'فيلم عاكس على واجهة زجاجية' : 'Reflective film on glass facade', detail: isAr ? 'واجهة فندق — كورنيش جدة | حجب 85% من الحرارة الشمسية' : 'Hotel Facade — Jeddah Corniche | Blocks 85% of solar heat' },
];

const getImageListSchema = (isAr: boolean) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ImageGallery',
      name: isAr ? 'معرض أعمال عزل كور — جدة' : 'AzelCore Work Gallery — Jeddah',
      url: `${SITE_URL}/gallery`,
      description: isAr ? 'صور حقيقية لأعمال تظليل السيارات وعزل المباني في جدة' : 'Real photos of car tinting and building insulation works in Jeddah',
      provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
      image: [...getCarPhotos(isAr), ...getBuildingPhotos(isAr)].map(p => ({
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/${p.src}`,
        caption: p.caption,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'معرض الأعمال' : 'Gallery', item: `${SITE_URL}/gallery` },
      ],
    },
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-gallery-1'],
    },
  ],
});

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getImageListSchema(isAr)) }} />

      {/* ── Voice Structure — Gallery ── */}
      <div id="voice-answer-gallery-1" className="sr-only" aria-hidden="true">
        {isAr ? 'معرض أعمال عزل كور — تصفح أكثر من 30 سيارة تم تظليلها في جدة بأنواع الأفلام المختلفة.' : 'AzelCore Gallery — Browse over 30 cars tinted in Jeddah using various film types.'}
      </div>

      {/* Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumbs"}>
            <Link href={localePath(locale as Locale, '/')}>{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'أعمالنا' : 'Gallery'}</span>
          </nav>
          <h1 className={styles.pageTitle}>{isAr ? 'معرض ' : 'Our '}<span className={styles.highlight}>{isAr ? 'أعمالنا' : 'Gallery'}</span></h1>
          <p className={styles.pageSubtitle}>{isAr ? 'صور حقيقية قبل وبعد — كل مشروع بأيدي فريقنا في جدة.' : 'Real Before & After photos — every project done by our team in Jeddah.'}</p>
        </div>
      </section>

      {/* Car Gallery */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>🚗 {isAr ? 'تظليل سيارات' : 'Car Tinting'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'أعمال تظليل السيارات' : 'Car Tinting Works'}</h2>
          </div>
          <div className={styles.galleryGrid}>
            {getCarPhotos(isAr).map((p, i) => (
              <figure key={i} className={styles.galleryItem}>
                <Image src={`/images/${p.src}`} alt={`${p.caption} — ${p.detail}`} width={400} height={300} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <figcaption className={styles.caption}>
                  <strong>{p.caption}</strong>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: '1.5' }}>{p.detail}</span>
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
            <span className={styles.overline}>🏢 {isAr ? 'عزل مباني' : 'Building Insulation'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'مشاريع عزل واجهات المباني' : 'Building Facade Insulation Projects'}</h2>
          </div>
          <div className={styles.galleryGrid}>
            {getBuildingPhotos(isAr).map((p, i) => (
              <figure key={i} className={styles.galleryItem}>
                <Image src={`/images/${p.src}`} alt={`${p.caption} — ${p.detail}`} width={400} height={300} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <figcaption className={styles.caption}>
                  <strong>{p.caption}</strong>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: '1.5' }}>{p.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — data-nosnippet (vector density) */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>{isAr ? 'عجبك شغلنا؟' : 'Like our work?'}</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'سيارتك أو مبناك ممكن يكون المشروع القادم — تواصل معنا الآن.' : 'Your car or building could be the next project — contact us now.'}</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</a>
        </div>
      </section>

      <CrossSellCards currentPage="gallery" locale={locale} />
    </>
  );
}
