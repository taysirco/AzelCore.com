import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'مدونة عزل كور — نصائح تظليل وعزل حراري من خبراء',
  description: 'مقالات متخصصة في تظليل السيارات وعزل المباني — نصائح فنية، مقارنات أفلام، قوانين التظليل السعودية، وأكثر.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

const blogPosts = [
  {
    slug: 'best-car-tint-jeddah-2026',
    title: 'أفضل تظليل سيارات في جدة 2026 — مقارنة شاملة',
    excerpt: 'مقارنة تفصيلية بين أنواع التظليل المتاحة في جدة — نانو سيراميك vs كربوني vs مصبوغ. أيهم يناسب سيارتك؟',
    image: 'blog-best-car-tint-jeddah.png',
    date: '2026-04-15',
    category: 'تظليل سيارات',
  },
  {
    slug: 'nano-vs-carbon-tint',
    title: 'نانو سيراميك ضد كربوني — أيهم أحسن؟',
    excerpt: 'الفرق الحقيقي بين التقنيتين من حيث حجب الحرارة والمتانة والسعر — بالأرقام من الداتاشيت الرسمي.',
    image: 'blog-nano-vs-carbon-tint.png',
    date: '2026-04-10',
    category: 'مقارنات',
  },
  {
    slug: 'tint-laws-saudi-2026',
    title: 'قوانين التظليل في السعودية 2026 — كل ما تحتاج تعرفه',
    excerpt: 'دليل شامل لقوانين تظليل السيارات في المملكة — الدرجات المسموحة، المخالفات، والاستثناءات.',
    image: 'blog-tint-laws-saudi-2026.png',
    date: '2026-04-05',
    category: 'قانوني',
  },
  {
    slug: 'building-insulation-savings',
    title: 'كيف توفر 40% من فاتورة الكهرباء بعزل النوافذ',
    excerpt: 'دراسة حالة حقيقية — كيف وفّرت فيلا في جدة 40% من تكاليف التكييف بعد عزل الواجهات بأفلام نانو سيراميك.',
    image: 'blog-building-insulation-savings.png',
    date: '2026-03-28',
    category: 'عزل مباني',
  },
  {
    slug: 'ppf-vs-ceramic-coating',
    title: 'PPF ضد طلاء سيراميك — أيهم يحمي سيارتك أكثر؟',
    excerpt: 'الفرق بين بي بي إف وطلاء السيراميك — متى تحتاج كل واحد ومتى تجمع بينهم.',
    image: 'blog-ppf-vs-ceramic-coating.png',
    date: '2026-03-20',
    category: 'حماية',
  },
];

export default function BlogPage() {
  return (
    <>
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
              <article key={post.slug} className={styles.postCard}>
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
