import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, OWNER_NAME } from '@/lib/constants';
import { blogTopics, type BlogTopic } from '@/data/blog-topics';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import styles from './page.module.css';

// Blog article content — maps slug to full article sections
const articleContent: Record<string, { intro: string; sections: { heading: string; body: string }[]; warning?: string; cta: string }> = {
  'tint-laws-saudi-2026': {
    intro: 'قوانين تظليل السيارات في السعودية تتغير باستمرار. في 2026، النسب المسموحة تحددها إدارة المرور السعودية بناءً على نوع الزجاج وموقعه. هنا الدليل الشامل.',
    sections: [
      { heading: 'النسب المسموحة حسب نوع الزجاج', body: 'الزجاج الأمامي: يُسمح بتظليل بنسبة نفاذية ضوء (VLT) لا تقل عن 70%. الزجاج الجانبي الأمامي: لا تقل عن 30%. الزجاج الخلفي والجانبي الخلفي: مفتوح بدون حد أدنى.' },
      { heading: 'الغرامات والمخالفات', body: 'مخالفة التظليل المخالف تبدأ من 500 ريال وقد تصل إلى 900 ريال مع إلزام بإزالة التظليل خلال 10 أيام. في حال تكرار المخالفة، يتم حجز اللوحات.' },
      { heading: 'الفحص الدوري والتظليل', body: 'الفحص الدوري يقيس نسبة نفاذية الضوء VLT بجهاز قياس رقمي. التظليل المطابق للمواصفات لن يسبب أي مشكلة. ننصح بتظليل 28% بدلاً من 30% تماماً لتجنب أي تفاوت في القياس.' },
      { heading: 'كيف تتأكد من نسبة تظليلك', body: 'اطلب من محل التظليل قياس النسبة أمامك بجهاز Tint Meter. المحل المحترف يقدم شهادة ضمان تتضمن نسبة VLT الفعلية لكل زجاجة.' },
      { heading: 'أنواع التظليل المسموحة بدون مخالفة', body: 'نانو سيراميك بنسبة 35% VLT هو الخيار الأكثر أماناً — يحجب 97% من الأشعة تحت الحمراء مع الالتزام الكامل بالأنظمة. فيلم 3M Crystalline CR70 للزجاج الأمامي يوفر حماية بدون تغيير ملحوظ في اللون.' },
    ],
    warning: 'تظليل بسعر 200 ريال = فيلم صيني غير مطابق للمواصفات. يتحول للبنفسجي خلال 3 أشهر ويفشل في الفحص الدوري.',
    cta: 'تحتاج تظليل مطابق للأنظمة؟',
  },
  'nano-ceramic-vs-carbon-vs-3m': {
    intro: 'السؤال الأكثر تكراراً: نانو سيراميك ولا كربوني ولا 3M؟ الإجابة تعتمد على سيارتك وميزانيتك واحتياجك الحقيقي. هنا المقارنة الصادقة بالأرقام.',
    sections: [
      { heading: 'نانو سيراميك — ملك حجب الحرارة', body: 'نسبة حجب IR: 95-97%. حجب UV: 99%. لا يحجب إشارات الجوال أو GPS. العمر الافتراضي: 10-15 سنة. السعر: 1,200 - 3,200 ريال للسيدان الكامل.' },
      { heading: 'كربوني متقدم — التوازن بين الأداء والسعر', body: 'نسبة حجب IR: 70-85%. حجب UV: 99%. لا يحجب الإشارات. العمر: 7-10 سنوات. السعر: 800 - 1,500 ريال. مناسب لمن يريد أداء جيد بسعر معقول.' },
      { heading: '3M Crystalline — التقنية الأمريكية', body: '3M Crystalline CR70 يحجب 60% IR مع نفاذية 70% — مثالي للزجاج الأمامي. طبقات متعددة بسمك نانومتري. ضمان من 3M مباشرة.' },
      { heading: 'متى تختار كل نوع', body: 'سيارة فارهة + واقفة بالشمس كثير = نانو سيراميك. سيارة يومية + ميزانية متوسطة = كربوني. الزجاج الأمامي فقط = 3M CR70.' },
      { heading: 'جدول المقارنة السريع', body: 'نانو سيراميك: TSER 65% | IR 97% | UV 99% | 10 سنوات | 2,500 ر.س. كربوني: TSER 45% | IR 80% | UV 99% | 7 سنوات | 1,200 ر.س. 3M CR70: TSER 40% | IR 60% | UV 99% | 5 سنوات | 900 ر.س.' },
    ],
    cta: 'محتار بين الأنواع؟ استشارة مجانية من خبرائنا',
  },
  'best-car-tint-jeddah-2026': {
    intro: 'اختيار محل تظليل في جدة مش سهل — المحلات كثيرة والأسعار متفاوتة. لكن في معايير واضحة تفرّق بين المحل المحترف والمحل اللي بيلصق فيلم وبس.',
    sections: [
      { heading: '5 معايير لاختيار محل التظليل', body: 'أولاً: وكالة معتمدة من ماركة (Johnson, 3M, LLumar). ثانياً: ورشة مغلقة ومكيفة (التظليل في الشارع = غبار وفقاعات). ثالثاً: قص كمبيوتر (مش يدوي). رابعاً: ضمان مكتوب مع فاتورة ضريبية. خامساً: فني معتمد (شهادة IWFA أو ما يعادلها).' },
      { heading: 'علامات المحل الموثوق', body: 'يعرض شهادة الوكالة بوضوح. يشرح لك الفرق بين الأنواع بصراحة (مش يدفعك للأغلى). يقيس نسبة VLT أمامك. يعطيك تعليمات العناية بعد التركيب.' },
      { heading: 'أسئلة اسألها قبل التظليل', body: '\"إيش نوع الفيلم بالضبط؟\" — لازم يقول لك الماركة والخط. \"كم ضمان؟\" — أقل من 5 سنوات = فيلم تجاري. \"هل القص كمبيوتر؟\" — القص اليدوي يترك فراغات على الأطراف.' },
      { heading: 'أسعار سوق جدة 2026', body: 'تظليل عادي (مصبوغ): 200-500 ريال. كربوني: 800-1,500 ريال. نانو سيراميك: 1,200-3,200 ريال. 3M Crystalline: 700-1,500 ريال. جونسون Supreme IR: 1,500-3,500 ريال.' },
      { heading: 'تحذيرات من المحلات المقلدة', body: 'محل يقول لك \"نانو سيراميك بـ 400 ريال\" = كذب. سعر فيلم النانو الأصلي للتاجر أعلى من كذا. ابحث عن ختم الماركة على الفيلم نفسه — الأصلي مطبوع عليه الشعار.' },
    ],
    warning: 'محل بدون سجل تجاري ولا فاتورة ضريبية = لا ضمان حقيقي. لو الفيلم تلف بعد شهر، ما تقدر تطالب.',
    cta: 'تبحث عن محل تظليل موثوق في جدة؟',
  },
  'building-insulation-electricity-savings': {
    intro: 'فاتورة كهرباء فيلا في جدة تتراوح بين 2,000 و 5,000 ريال شهرياً في الصيف. عزل زجاج النوافذ يمكن أن يوفر 35-45% من هذا المبلغ. هنا الحسابات الحقيقية.',
    sections: [
      { heading: 'كيف يدخل الحر من النوافذ', body: 'نافذة واحدة بدون عزل تنقل 500 واط حرارة شمسية في الساعة. فيلا بـ 10 نوافذ = 5,000 واط حرارة زائدة كل ساعة = المكيف يشتغل أكثر = فاتورة أعلى.' },
      { heading: 'الحسابات الحقيقية — فيلا في جدة', body: 'فيلا 300م² | 12 نافذة | فاتورة صيف: 3,200 ر.س/شهر. بعد عزل النوافذ بفيلم نانو (حجب 78% طاقة شمسية): الفاتورة انخفضت لـ 1,800 ر.س/شهر. التوفير: 1,400 ر.س/شهر × 6 أشهر صيف = 8,400 ر.س/سنة.' },
      { heading: 'مدة استرداد التكلفة', body: 'تكلفة عزل 12 نافذة بفيلم نانو سيراميك: ~4,500 ر.س. التوفير السنوي: 8,400 ر.س. مدة الاسترداد: 6.4 أشهر فقط. يعني من أول صيف تبدأ تربح.' },
      { heading: 'أفضل أنواع الأفلام للتوفير', body: 'Sputtered Multilayer: حجب 78% TSER — الأفضل للتوفير. نانو سيراميك: حجب 65% TSER — توازن بين الشفافية والعزل. فيلم عاكس: حجب 80% — لكن يغير مظهر المبنى من الخارج.' },
    ],
    cta: 'تبي توفر في فاتورة الكهرباء؟',
  },
  'how-to-spot-fake-tint': {
    intro: 'سوق التظليل في السعودية فيه أفلام مقلدة كثيرة — بعضها يُباع على إنه \"نانو سيراميك\" وهو مجرد فيلم مصبوغ بلاستيك. هنا 5 طرق تكشف التقليد.',
    sections: [
      { heading: 'اختبار اللون بالضوء', body: 'سلط كشاف هاتفك على الفيلم. النانو الأصلي لونه رمادي/فحمي متساوي. الفيلم المقلد فيه تدرج أو بقع لونية.' },
      { heading: 'شهادة الضمان الأصلية', body: 'كل فيلم أصلي يجي مع رقم سيريال على العبوة. تقدر تتأكد من الرقم على موقع الشركة (Johnson, 3M, LLumar). المقلد ما عنده رقم أو الرقم مش موجود في قاعدة البيانات.' },
      { heading: 'اختبار الحرارة', body: 'المحل المحترف عنده جهاز اختبار حراري. يحط الفيلم على زجاجة ويوجه عليه مصباح حراري. النانو الأصلي تحس بالفرق فوراً. المقلد الحرارة تعبر بسهولة.' },
      { heading: 'رائحة الفيلم', body: 'الفيلم الأصلي ريحته محايدة أو خفيفة جداً. الفيلم الصيني الرخيص ريحته كيميائية قوية — خاصة أول أسبوع بعد التركيب.' },
      { heading: 'السعر أقل من السوق = تقليد', body: 'نانو سيراميك أصلي بـ 400 ريال = مستحيل. سعر الفيلم نفسه للتاجر أغلى. لو السعر أقل من 1,200 ريال لسيدان كاملة نانو سيراميك، في احتمال كبير إنه مش أصلي.' },
    ],
    warning: 'فيلم مقلد يتحول للبنفسجي خلال 3-6 أشهر، يفقد قدرته على حجب الحرارة، ويفشل في الفحص الدوري.',
    cta: 'تبي تظليل أصلي مضمون؟',
  },
};

// Map blog index slugs to blog-topics.ts slugs
const slugMapping: Record<string, string> = {
  'nano-vs-carbon-tint': 'nano-ceramic-vs-carbon-vs-3m',
  'building-insulation-savings': 'building-insulation-electricity-savings',
};

function getTopicBySlug(slug: string): BlogTopic | undefined {
  const mappedSlug = slugMapping[slug] || slug;
  return blogTopics.find(t => t.slug === slug || t.slug === mappedSlug);
}

export function generateStaticParams() {
  return Object.keys(articleContent).map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const topic = getTopicBySlug(params.slug);
  const content = articleContent[params.slug];
  if (!topic && !content) return {};

  const title = topic?.titleAr || params.slug;
  return {
    title,
    description: content?.intro?.slice(0, 155) || '',
    alternates: { canonical: `${SITE_URL}/blog/${params.slug}` },
    openGraph: {
      title,
      url: `${SITE_URL}/blog/${params.slug}`,
      type: 'article',
      images: [{ url: `/images/blog-${params.slug.split('-').slice(0, 3).join('-')}.png`, width: 1200, height: 630 }],
    },
  };
}

// Service link mapping for internal linking (blog → services, never reverse)
const serviceLinks: Record<string, { href: string; text: string }[]> = {
  'tint-laws-saudi-2026': [
    { href: '/car-insulation-jeddah', text: 'خدمة تظليل سيارات مطابقة لأنظمة المرور' },
    { href: '/johnson-authorized-dealer', text: 'عازل جونسون — الوكيل المعتمد في جدة' },
  ],
  'nano-ceramic-vs-carbon-vs-3m': [
    { href: '/car-insulation-jeddah', text: 'احجز تظليل نانو سيراميك الآن' },
    { href: '/johnson-authorized-dealer', text: 'جونسون Supreme IR — الخيار الأعلى أداءً' },
  ],
  'best-car-tint-jeddah-2026': [
    { href: '/car-insulation-jeddah', text: 'خدمة تظليل سيارات في جدة — أسعار وأنواع' },
    { href: '/johnson-authorized-dealer', text: 'وكيل جونسون المعتمد الوحيد في جدة' },
  ],
  'building-insulation-electricity-savings': [
    { href: '/building-glass-insulation', text: 'خدمة عزل زجاج المباني — وفّر 40% كهرباء' },
    { href: '/johnson-authorized-dealer', text: 'أفلام جونسون للعزل الحراري — الوكيل المعتمد' },
  ],
  'how-to-spot-fake-tint': [
    { href: '/car-insulation-jeddah', text: 'تظليل أصلي مع ضمان — عزل كور جدة' },
    { href: '/johnson-authorized-dealer', text: 'أفلام جونسون الأمريكية الأصلية' },
  ],
};

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const content = articleContent[params.slug];
  if (!content) notFound();

  const topic = getTopicBySlug(params.slug);
  const title = topic?.titleAr || params.slug;
  const date = '2026-05-01';
  const links = serviceLinks[params.slug] || [];

  const approximateWordCount = (
    content.intro + ' ' + 
    content.sections.map(s => s.heading + ' ' + s.body).join(' ') + ' ' + 
    (content.warning || '') + ' ' + 
    content.cta
  ).split(/\s+/).length;

  const articleGraphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${SITE_URL}/blog/${params.slug}#article`,
        headline: title,
        author: { '@type': 'Person', name: OWNER_NAME },
        publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/azelcore-logo.png` } },
        datePublished: date,
        dateModified: date,
        mainEntityOfPage: `${SITE_URL}/blog/${params.slug}`,
        image: `${SITE_URL}/images/blog-${params.slug.split('-').slice(0, 3).join('-')}.png`,
        inLanguage: 'ar',
        isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
        wordCount: approximateWordCount,
        about: [
          { '@type': 'Thing', name: 'تظليل سيارات', sameAs: 'https://www.wikidata.org/wiki/Q2647429' },
          { '@type': 'Thing', name: 'عزل حراري' },
          { '@type': 'Place', name: 'جدة', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.content p:first-of-type'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'المدونة', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: title, item: `${SITE_URL}/blog/${params.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleGraphSchema) }} />

      <article className={styles.article}>
        <nav className={styles.breadcrumb} aria-label="مسار التنقل">
          <Link href="/">الرئيسية</Link> / <Link href="/blog">المدونة</Link> / <span>{title}</span>
        </nav>

        <div className={styles.meta}>
          {topic && <span className={styles.category}>{topic.intent === 'legal' ? 'قانوني' : topic.intent === 'comparison' ? 'مقارنة' : topic.intent === 'how-to' ? 'دليل' : 'معلوماتي'}</span>}
          <time className={styles.date} dateTime={date}>
            {new Date(date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>

        <h1 className={styles.title}>{title}</h1>

        <div className={styles.content}>
          <p>{content.intro}</p>

          {content.sections.map((section, i) => (
            <div key={i}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}

          {content.warning && (
            <div className={styles.warningBox}>
              <p><strong>⚠️ تحذير:</strong> {content.warning}</p>
            </div>
          )}

          {/* Internal Links → Services (Link Equity Pyramid) */}
          {links.length > 0 && (
            <div className={styles.ctaBox} style={{ textAlign: 'start' }} data-nosnippet>
              <h3>خدمات ذات صلة</h3>
              <ul>
                {links.map((link, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <Link href={link.href} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                      {link.text} ←
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.ctaBox} data-nosnippet>
            <h3>{content.cta}</h3>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              تواصل عبر واتساب
            </a>
          </div>
        </div>

        <Link href="/blog" className={styles.backLink}>→ العودة للمدونة</Link>
      </article>
    </>
  );
}
