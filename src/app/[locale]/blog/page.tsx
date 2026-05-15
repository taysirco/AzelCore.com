import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { getAlternates } from '@/lib/seo';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'مدونة — نصائح تظليل وعزل حراري من خبراء' : 'Blog — Tinting and Insulation Tips from Experts | AzelCore',
    description: isAr ? 'مقالات متخصصة في تظليل السيارات وعزل المباني — نصائح فنية، مقارنات أفلام، قوانين التظليل السعودية، وأكثر.' : 'Specialized articles on car tinting and building insulation — technical tips, film comparisons, Saudi tinting laws, and more.',
    alternates: getAlternates(locale as Locale, '/blog'),
  };
}

const getBlogPosts = (isAr: boolean) => [
  {
    slug: 'best-car-tint-jeddah-2026',
    title: isAr ? 'أفضل تظليل سيارات في جدة 2026 — مقارنة شاملة' : 'Best Car Tint in Jeddah 2026 — Comprehensive Comparison',
    excerpt: isAr ? 'مقارنة تفصيلية بين أنواع التظليل المتاحة في جدة — نانو سيراميك vs كربوني vs مصبوغ. أيهم يناسب سيارتك؟' : 'Detailed comparison of available tints in Jeddah — Nano-Ceramic vs Carbon vs Dyed. Which suits your car?',
    image: 'blog-best-car-tint-jeddah.webp',
    date: '2026-04-15',
    category: isAr ? 'تظليل سيارات' : 'Car Tinting',
  },
  {
    slug: 'nano-ceramic-vs-carbon-vs-3m',
    title: isAr ? 'نانو سيراميك مقابل كربوني مقابل 3M — مقارنة بالأرقام' : 'Nano-Ceramic vs Carbon vs 3M — A Number-Based Comparison',
    excerpt: isAr ? 'الفرق الحقيقي بين التقنيتين من حيث حجب الحرارة والمتانة والسعر — بالأرقام من الداتاشيت الرسمي.' : 'The real difference between technologies in terms of heat rejection, durability, and price — using official datasheet numbers.',
    image: 'blog-nano-vs-carbon-tint.webp',
    date: '2026-04-10',
    category: isAr ? 'مقارنات' : 'Comparisons',
  },
  {
    slug: 'tint-laws-saudi-2026',
    title: isAr ? 'قوانين التظليل في السعودية 2026 — كل ما تحتاج تعرفه' : 'Saudi Tinting Laws 2026 — Everything You Need to Know',
    excerpt: isAr ? 'دليل شامل لقوانين تظليل السيارات في المملكة — الدرجات المسموحة، المخالفات، والاستثناءات.' : 'Comprehensive guide to car tinting laws in the Kingdom — allowed levels, violations, and exceptions.',
    image: 'blog-tint-laws-saudi-2026.webp',
    date: '2026-04-05',
    category: isAr ? 'قانوني' : 'Legal',
  },
  {
    slug: 'building-insulation-electricity-savings',
    title: isAr ? 'كيف توفر 40% من فاتورة الكهرباء بعزل النوافذ' : 'How to Save 40% on Electricity Bills with Window Insulation',
    excerpt: isAr ? 'دراسة حالة حقيقية — كيف وفّرت فيلا في جدة 40% من تكاليف التكييف بعد عزل الواجهات بأفلام نانو سيراميك.' : 'A real case study — how a Jeddah villa saved 40% on AC costs after insulating facades with nano-ceramic films.',
    image: 'blog-building-insulation-savings.webp',
    date: '2026-03-28',
    category: isAr ? 'عزل مباني' : 'Building Insulation',
  },
  {
    slug: 'how-to-spot-fake-tint',
    title: isAr ? '5 علامات تعرف بيها التظليل المقلد من الأصلي' : '5 Signs to Spot Fake Tint from the Original',
    excerpt: isAr ? 'الفرق بين الفيلم الأصلي والمقلد — 5 اختبارات بسيطة تقدر تسويها بنفسك.' : 'The difference between genuine and fake film — 5 simple DIY tests you can do.',
    image: 'blog-spot-fake-tint.webp',
    date: '2026-03-20',
    category: isAr ? 'نصائح' : 'Tips',
  },
  {
    slug: 'ppf-vs-ceramic-coating',
    title: isAr ? 'PPF مقابل النانو سيراميك للطلاء — أيهما تحتاج؟' : 'PPF vs Ceramic Coating for Paint — Which Do You Need?',
    excerpt: isAr ? 'كثير يخلطون بينهم — لكنهم منتجين مختلفين تماماً. هنا المقارنة الشاملة بالأرقام.' : 'Many confuse the two — but they are entirely different products. Here is a comprehensive comparison with numbers.',
    image: 'blog-ppf-vs-ceramic-coating.webp',
    date: '2026-03-15',
    category: isAr ? 'مقارنات' : 'Comparisons',
  },
  {
    slug: 'jeddah-heat-car-damage',
    title: isAr ? 'ماذا تفعل شمس جدة بسيارتك؟ — 7 أضرار لا تعرفها' : 'What Does Jeddah’s Sun Do to Your Car? — 7 Unknown Damages',
    excerpt: isAr ? 'من تشقق الجلد لتلف الشاشات — أضرار حقيقية بالأرقام. والحل الأذكى لحماية سيارتك.' : 'From cracked leather to damaged screens — real damages with numbers. And the smartest solution to protect your car.',
    image: 'blog-jeddah-heat-car.webp',
    date: '2026-03-10',
    category: isAr ? 'معلومات' : 'Information',
  },
  {
    slug: 'tint-signal-interference',
    title: isAr ? 'هل التظليل يأثر على إشارة الجوال و GPS؟ — الحقيقة التقنية' : 'Does Tint Affect Mobile and GPS Signals? — The Technical Truth',
    excerpt: isAr ? 'الجواب يعتمد على نوع الفيلم — هنا الشرح الفيزيائي الكامل مع جدول لكل نوع.' : 'The answer depends on the film type — here is the complete physical explanation with a table for each type.',
    image: 'blog-tint-signal-interference.webp',
    date: '2026-03-05',
    category: isAr ? 'تقني' : 'Technical',
  },
  {
    slug: 'vision-2030-energy-efficiency',
    title: isAr ? 'رؤية 2030 وكفاءة الطاقة — دور عزل المباني في تحقيق الأهداف' : 'Vision 2030 and Energy Efficiency — The Role of Building Insulation',
    excerpt: isAr ? 'المباني تستهلك 70% من الكهرباء في السعودية. كيف يساهم عزل الزجاج في تحقيق أهداف رؤية 2030؟' : 'Buildings consume 70% of electricity in Saudi Arabia. How does glass insulation contribute to Vision 2030 goals?',
    image: 'blog-vision-2030-energy.webp',
    date: '2026-02-28',
    category: isAr ? 'عزل مباني' : 'Building Insulation',
  },
  {
    slug: 'car-tint-maintenance-guide',
    title: isAr ? 'دليل العناية بتظليل السيارة — 10 نصائح لإطالة عمر الفيلم' : 'Car Tint Maintenance Guide — 10 Tips to Extend Film Life',
    excerpt: isAr ? 'استثمرت في تظليل ممتاز؟ هنا 10 نصائح من خبرائنا تمدد عمره من 10 لـ 15+ سنة.' : 'Invested in premium tint? Here are 10 tips from our experts to extend its life from 10 to 15+ years.',
    image: 'blog-car-tint-maintenance.webp',
    date: '2026-02-20',
    category: isAr ? 'نصائح' : 'Tips',
  },
  {
    slug: 'commercial-building-tint-jeddah',
    title: isAr ? 'الدليل الشامل لاختيار أنواع العزل الحراري للمباني التجارية' : 'Comprehensive Guide to Commercial Building Thermal Insulation',
    excerpt: isAr ? 'كيف يقوم العزل بتخفيض أحمال التكييف 30% وتوفير آلاف الريالات سنوياً للشركات؟' : 'How does insulation reduce AC loads by 30% and save thousands of Riyals annually for companies?',
    image: 'commercial-facade-tinting.webp',
    date: '2026-05-10',
    category: isAr ? 'عزل تجاري' : 'B2B Insulation',
  },
  {
    slug: 'flir-thermal-camera-tint-test',
    title: isAr ? 'تقنية الـ FLIR الفحص الحراري: دليلك العلمي لاختبار التظليل' : 'FLIR Thermal Testing: Your Scientific Guide to Testing Tint',
    excerpt: isAr ? 'خدعة اللمبة الحمراء انتهت. اكتشف كيف تكشف كاميرات التصوير الحراري التظليل المغشوش.' : 'The red lamp trick is over. Discover how thermal imaging cameras expose fake tint.',
    image: 'thermal-camera-car-test.webp',
    date: '2026-05-15',
    category: isAr ? 'تقني' : 'Technical',
  },
  {
    slug: 'ppf-vs-car-polish-paint-damage',
    title: isAr ? 'PPF مقابل تلميع السيارات: لماذا تلميع سيارتك سنوياً يدمر الطلاء؟' : 'PPF vs. Car Polish: Why Polishing Your Car Every Year Destroys Your Paint',
    excerpt: isAr ? 'الفرق الحقيقي بالأرقام: كيف يزيل التلميع طبقة الحماية بينما يضيف الـ PPF درعاً يعالج الخدوش ذاتياً.' : 'The real difference in numbers: How polishing removes the clear coat while PPF adds a self-healing shield.',
    image: 'ppf-car-protection.webp',
    date: '2026-05-15',
    category: isAr ? 'مقارنات' : 'Comparisons',
  },
  {
    slug: 'building-tint-furniture-fading-protection',
    title: isAr ? 'تأثير عزل الزجاج على بهتان الأثاث: كيف تحمي ديكوراتك باهظة الثمن؟' : 'The Impact of Glass Insulation on Furniture Fading: Protect Your Expensive Decor',
    excerpt: isAr ? 'الأشعة فوق البنفسجية تدمر الأثاث ببطء. اكتشف كيف تحمي النانو سيراميك استثماراتك في ديكور منزلك.' : 'UV rays slowly destroy furniture. Discover how Nano Ceramic protects your home decor investments.',
    image: 'commercial-building-tint.webp',
    date: '2026-05-15',
    category: isAr ? 'عزل مباني' : 'Building Insulation',
  },
  {
    slug: 'nano-ceramic-coating-real-longevity-ksa',
    title: isAr ? 'العمر الحقيقي للنانو سيراميك: هل يدوم 5 سنوات في الطقس السعودي؟' : 'Nano Ceramic Coating Real Longevity: Does it Really Last 5 Years in Saudi Weather?',
    excerpt: isAr ? 'أكذوبة الضمان المفتوح للنانو سيراميك مكشوفة هندسياً. تعرف على مدة بقاء الحماية الحقيقية.' : 'The lifetime warranty myth for Nano Ceramic is engineeredly exposed. Know the real protection lifespan.',
    image: 'nano-ceramic-vs-carbon.webp',
    date: '2026-05-15',
    category: isAr ? 'معلومات' : 'Information',
  },
  {
    slug: 'skin-cancer-driving-uv-protection-tint',
    title: isAr ? 'سرطان الجلد والقيادة: كيف يمنع التظليل 99٪ من أشعة UVA/UVB؟' : 'Skin Cancer and Driving: How Window Tinting Blocks 99% of UVA/UVB Rays?',
    excerpt: isAr ? 'زجاج السيارات يحميك من UVB فقط، ولكنه يسمح بمرور UVA المسرطنة. التظليل هو الحل الطبي الأول.' : 'Car glass protects you from UVB only, but lets carcinogenic UVA pass. Tinting is the #1 medical solution.',
    image: 'uv-protection-car-tint.webp',
    date: '2026-05-15',
    category: isAr ? 'صحي' : 'Health',
  },
  {
    slug: 'computer-cut-vs-manual-ppf-jeddah',
    title: isAr ? 'القص بالكمبيوتر مقابل اليدوي للـ PPF: الخطر الخفي للمشارط' : 'Computer-Cut vs. Manual Cut PPF: The Hidden Danger of Blades',
    excerpt: isAr ? 'لماذا يجب ألا تسمح لأي فني باستخدام المشرط على سيارتك الجديدة أثناء تركيب حماية الطلاء.' : 'Why you should never allow a technician to use a blade on your new car during paint protection install.',
    image: 'computer-cut-ppf-jeddah.webp',
    date: '2026-05-15',
    category: isAr ? 'تقني' : 'Technical',
  },
  {
    slug: 'retail-store-window-tinting-clear-heat-rejection',
    title: isAr ? 'عزل زجاج المحلات التجارية: حجب الحرارة دون تعتيم واجهات العرض' : 'Window Tinting for Retail Stores: Heat Rejection Without Darkening Displays',
    excerpt: isAr ? 'الحل الهندسي للمعارض لخفض فواتير التكييف والتوافق التام مع اشتراطات البلدية في جدة.' : 'The engineering solution for showrooms to reduce AC bills and comply with Jeddah municipality rules.',
    image: 'commercial-building-tint.webp',
    date: '2026-05-15',
    category: isAr ? 'عزل تجاري' : 'B2B Insulation',
  },
  {
    slug: 'dealership-tint-vs-specialized-centers',
    title: isAr ? 'تظليل الوكالة مقابل المراكز المتخصصة: لماذا هو الفخ الأكبر؟' : 'Dealership Tint vs. Specialized Centers: Why It Is the Biggest Trap?',
    excerpt: isAr ? 'الفرق الصادم بين جودة وسعر التظليل الذي تقدمه وكالات السيارات مقابل مراكز العزل المتخصصة.' : 'The shocking difference between the quality and price of dealership tinting vs. specialized insulation centers.',
    image: 'best-car-tint-jeddah.webp',
    date: '2026-05-15',
    category: isAr ? 'نصائح' : 'Tips',
  },
];

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
          <h1 className={styles.pageTitle}>{isAr ? 'مدونة ' : 'AzelCore '}<span className={styles.highlight}>{isAr ? 'عزل كور' : 'Blog'}</span></h1>
          <p className={styles.pageSubtitle}>{isAr ? 'مقالات متخصصة من فريقنا — نصائح فنية، مقارنات، وأخبار.' : 'Specialized articles from our team — technical tips, comparisons, and news.'}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className={styles.postCard}>
                  <div className={styles.postImage}>
                    <Image src={`/images/${post.image}`} alt={post.title} width={400} height={240} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
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
