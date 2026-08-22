import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { getAlternates } from '@/lib/seo';
import { articles, articleSlugs } from '@/data/blog-content';
import { blogTopics } from '@/data/blog-topics';
import { getArticleDate, filterPublished } from '@/data/blog-dates';
import styles from './page.module.css';

// ═══ Scheduled publishing ═══
// Regenerate hourly so an article whose publish date has arrived appears
// automatically, with no deploy. See src/data/blog-dates.ts.
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'مدونة — نصائح تظليل وعزل حراري من خبراء' : 'Blog — Tinting and Insulation Tips from Experts',
    description: isAr ? 'مقالات متخصصة في تظليل السيارات وعزل المباني — نصائح فنية، مقارنات أفلام، قوانين التظليل السعودية، وأكثر.' : 'Specialized articles on car tinting and building insulation — technical tips, film comparisons, Saudi tinting laws, and more.',
    alternates: getAlternates(locale as Locale, '/blog'),
  };
}

const CATEGORY_LABEL = (intent: string, isAr: boolean) =>
  intent === 'legal' ? (isAr ? 'قانوني' : 'Legal')
  : intent === 'comparison' ? (isAr ? 'مقارنات' : 'Comparisons')
  : intent === 'how-to' ? (isAr ? 'دليل' : 'Guide')
  : (isAr ? 'معلوماتي' : 'Information');

// Derived from the single source of truth (articleSlugs + blogTopics + dates) so
// the index can never drift out of sync with the actual published articles.
const getBlogPosts = (isAr: boolean) =>
  filterPublished(articleSlugs)
    .map((slug) => {
      const topic = blogTopics.find((t) => t.slug === slug);
      const art = articles[slug];
      const intro = (!isAr && art.content.introEn) ? art.content.introEn : art.content.intro;
      const excerpt = intro.length > 160 ? intro.slice(0, 157).trimEnd() + '…' : intro;
      return {
        slug,
        title: topic ? (isAr ? topic.titleAr : (topic.titleEn || topic.titleAr)) : slug,
        excerpt,
        image: art.ogImage,
        // The index shows the PUBLISH date — that is what a reader expects from a blog
        // listing. Showing `modified` made a post published on 2 May read as 15 June, because
        // site-wide passes (images, schema) touched many articles on the same day.
        date: getArticleDate(slug).published,
        category: topic ? CATEGORY_LABEL(topic.intent, isAr) : (isAr ? 'معلوماتي' : 'Information'),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

const getItemListSchema = (isAr: boolean) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/blog#collection`,
      name: isAr ? 'مدونة عزل كور — نصائح تظليل وعزل حراري' : 'AzelCore Blog — Tinting and Thermal Insulation Tips',
      url: `${SITE_URL}/blog`,
      inLanguage: isAr ? 'ar' : 'en',
      isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
      publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
      mainEntity: {
        '@type': 'ItemList',
        name: isAr ? 'مدونة عزل كور' : 'AzelCore Blog',
        itemListOrder: 'https://schema.org/ItemListOrderDescending',
        numberOfItems: getBlogPosts(isAr).length,
        itemListElement: getBlogPosts(isAr).map((post, i) => ({
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
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'المدونة' : 'Blog', item: `${SITE_URL}/blog` },
      ],
    },
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-blog-1'],
    },
  ],
});

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const blogPosts = getBlogPosts(isAr);
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(isAr)) }} />

      {/* ── Voice Structure — Blog ── */}
      <div id="voice-answer-blog-1" className="sr-only" aria-hidden="true">
        {isAr 
          ? 'مدونة عزل كور تضم 10 مقالات متخصصة في تظليل السيارات وعزل المباني — مقارنات أفلام، قوانين التظليل، ونصائح العناية.' 
          : 'AzelCore Blog features 10 specialized articles on car tinting and building insulation — film comparisons, tinting laws, and care tips.'}
      </div>

      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}><Link href={localePath(locale as Locale, '/')}>{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'المدونة' : 'Blog'}</span></nav>
          <h1 className={styles.pageTitle}>{isAr ? 'مدونة تظليل السيارات والعزل الحراري في ' : 'Car Tinting & Insulation Blog in '}<span className={styles.highlight}>{isAr ? 'جدة' : 'Jeddah'}</span></h1>
          <p className={styles.pageSubtitle}>{isAr ? 'دليلك المتخصص في تظليل السيارات وحماية الطلاء PPF وعزل المباني — مقارنات الأفلام، قوانين التظليل السعودية، ونصائح الخبراء.' : 'Your specialist guide to car tinting, PPF paint protection and building insulation — film comparisons, Saudi tint laws, and expert tips.'}</p>
        </div>
      </section>

      {/* ═══ SEO intro + cluster hub links (passes equity to money pages) ═══ */}
      <section className={styles.section} style={{ paddingBottom: 0 }}>
        <div className={styles.container} style={{ maxWidth: '820px' }}>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
            {isAr ? 'مرحبًا بك في مدونة عزل كور — مرجعك العملي لكل ما يخص تظليل السيارات والعزل الحراري في جدة والسعودية. تجد هنا مقارنات دقيقة بين أفلام النانو سيراميك والكربوني، شرح قوانين التظليل ونسبة 30% المسموحة نظامًا، أدلة اختيار وكيل جونسون و 3M المعتمد، وحسابات توفير الطاقة لعزل المباني — كلها من خبرتنا الميدانية ومدعومة بمصادر رسمية.' : 'Welcome to the AzelCore blog — your practical reference for car tinting and thermal insulation in Jeddah and Saudi Arabia. Here you will find precise comparisons between nano-ceramic and carbon films, explanations of Saudi tint laws and the legal 30% VLT limit, guides to choosing an authorized Johnson and 3M dealer, and energy-saving math for building insulation — all from our field experience and backed by official sources.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.25rem' }}>
            <Link href={localePath(locale as Locale, '/car-insulation-jeddah')} style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>{isAr ? 'تظليل سيارات جدة ←' : 'Car Tinting Jeddah →'}</Link>
            <Link href={localePath(locale as Locale, '/paint-protection-film-jeddah')} style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>{isAr ? 'حماية طلاء السيارات PPF ←' : 'PPF Paint Protection →'}</Link>
            <Link href={localePath(locale as Locale, '/building-glass-insulation')} style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>{isAr ? 'عزل مباني جدة ←' : 'Building Insulation Jeddah →'}</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={localePath(locale as Locale, `/blog/${post.slug}`)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className={styles.postCard}>
                  <div className={styles.postImage}>
                    {post.image ? (
                      <Image src={`/images/${post.image}`} alt={post.title} width={400} height={240} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    ) : (
                      /* No hero image yet — render the brand placeholder rather than a broken <img>. */
                      <div className={styles.postImageFallback} aria-hidden="true">AzelCore</div>
                    )}
                    <span className={styles.postCategory}>{post.category}</span>
                  </div>
                  <div className={styles.postContent}>
                    <time className={styles.postDate} dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(isAr ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <span className={styles.readMore}>{isAr ? 'قراءة المقال ←' : 'Read Article ←'}</span>
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
