import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'مدونة — نصائح تظليل وعزل حراري من خبراء',
  description: 'مقالات متخصصة في تظليل السيارات وعزل المباني — نصائح فنية، مقارنات أفلام، قوانين التظليل السعودية، وأكثر.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

const blogPosts = [
  {
    slug: 'best-car-tint-jeddah-2026',
    title: 'أفضل تظليل سيارات في جدة 2026 — مقارنة شاملة',
    excerpt: 'مقارنة تفصيلية بين أنواع التظليل المتاحة في جدة — نانو سيراميك vs كربوني vs مصبوغ. أيهم يناسب سيارتك؟',
    image: 'blog-best-car-tint-jeddah.webp',
    date: '2026-04-15',
    category: 'تظليل سيارات',
  },
  {
    slug: 'nano-ceramic-vs-carbon-vs-3m',
    title: 'نانو سيراميك مقابل كربوني مقابل 3M — مقارنة بالأرقام',
    excerpt: 'الفرق الحقيقي بين التقنيتين من حيث حجب الحرارة والمتانة والسعر — بالأرقام من الداتاشيت الرسمي.',
    image: 'blog-nano-vs-carbon-tint.webp',
    date: '2026-04-10',
    category: 'مقارنات',
  },
  {
    slug: 'tint-laws-saudi-2026',
    title: 'قوانين التظليل في السعودية 2026 — كل ما تحتاج تعرفه',
    excerpt: 'دليل شامل لقوانين تظليل السيارات في المملكة — الدرجات المسموحة، المخالفات، والاستثناءات.',
    image: 'blog-tint-laws-saudi-2026.webp',
    date: '2026-04-05',
    category: 'قانوني',
  },
  {
    slug: 'building-insulation-electricity-savings',
    title: 'كيف توفر 40% من فاتورة الكهرباء بعزل النوافذ',
    excerpt: 'دراسة حالة حقيقية — كيف وفّرت فيلا في جدة 40% من تكاليف التكييف بعد عزل الواجهات بأفلام نانو سيراميك.',
    image: 'blog-building-insulation-savings.webp',
    date: '2026-03-28',
    category: 'عزل مباني',
  },
  {
    slug: 'how-to-spot-fake-tint',
    title: '5 علامات تعرف بيها التظليل المقلد من الأصلي',
    excerpt: 'الفرق بين الفيلم الأصلي والمقلد — 5 اختبارات بسيطة تقدر تسويها بنفسك.',
    image: 'blog-spot-fake-tint.webp',
    date: '2026-03-20',
    category: 'نصائح',
  },
  {
    slug: 'ppf-vs-ceramic-coating',
    title: 'PPF مقابل النانو سيراميك للطلاء — أيهما تحتاج؟',
    excerpt: 'كثير يخلطون بينهم — لكنهم منتجين مختلفين تماماً. هنا المقارنة الشاملة بالأرقام.',
    image: 'blog-ppf-vs-ceramic-coating.webp',
    date: '2026-03-15',
    category: 'مقارنات',
  },
  {
    slug: 'jeddah-heat-car-damage',
    title: 'ماذا تفعل شمس جدة بسيارتك؟ — 7 أضرار لا تعرفها',
    excerpt: 'من تشقق الجلد لتلف الشاشات — أضرار حقيقية بالأرقام. والحل الأذكى لحماية سيارتك.',
    image: 'blog-jeddah-heat-car.webp',
    date: '2026-03-10',
    category: 'معلومات',
  },
  {
    slug: 'tint-signal-interference',
    title: 'هل التظليل يأثر على إشارة الجوال و GPS؟ — الحقيقة التقنية',
    excerpt: 'الجواب يعتمد على نوع الفيلم — هنا الشرح الفيزيائي الكامل مع جدول لكل نوع.',
    image: 'blog-tint-signal-interference.webp',
    date: '2026-03-05',
    category: 'تقني',
  },
  {
    slug: 'vision-2030-energy-efficiency',
    title: 'رؤية 2030 وكفاءة الطاقة — دور عزل المباني في تحقيق الأهداف',
    excerpt: 'المباني تستهلك 70% من الكهرباء في السعودية. كيف يساهم عزل الزجاج في تحقيق أهداف رؤية 2030؟',
    image: 'blog-vision-2030-energy.webp',
    date: '2026-02-28',
    category: 'عزل مباني',
  },
  {
    slug: 'car-tint-maintenance-guide',
    title: 'دليل العناية بتظليل السيارة — 10 نصائح لإطالة عمر الفيلم',
    excerpt: 'استثمرت في تظليل ممتاز؟ هنا 10 نصائح من خبرائنا تمدد عمره من 10 لـ 15+ سنة.',
    image: 'blog-car-tint-maintenance.webp',
    date: '2026-02-20',
    category: 'نصائح',
  },
];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/blog#collection`,
      name: 'مدونة عزل كور — نصائح تظليل وعزل حراري',
      url: `${SITE_URL}/blog`,
      inLanguage: 'ar',
      isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
      publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
      mainEntity: {
        '@type': 'ItemList',
        name: 'مدونة عزل كور',
        itemListOrder: 'https://schema.org/ItemListOrderDescending',
        numberOfItems: blogPosts.length,
        itemListElement: blogPosts.map((post, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'المدونة', item: `${SITE_URL}/blog` },
      ],
    },
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-blog-1'],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* ── Voice Structure — Blog ── */}
      <div id="voice-answer-blog-1" className="sr-only" aria-hidden="true">
        مدونة عزل كور تضم 10 مقالات متخصصة في تظليل السيارات وعزل المباني — مقارنات أفلام، قوانين التظليل، ونصائح العناية.
      </div>

      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}><Link href="/">الرئيسية</Link> / <span>المدونة</span></nav>
          <h1 className={styles.pageTitle}>مدونة <span className={styles.highlight}>عزل كور</span></h1>
          <p className={styles.pageSubtitle}>مقالات متخصصة من فريقنا — نصائح فنية، مقارنات، وأخبار.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className={styles.postCard}>
                  <div className={styles.postImage}>
                    <Image src={`/images/${post.image}`} alt={post.title} width={400} height={240} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    <span className={styles.postCategory}>{post.category}</span>
                  </div>
                  <div className={styles.postContent}>
                    <time className={styles.postDate} dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <span className={styles.readMore}>قراءة المقال ←</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
