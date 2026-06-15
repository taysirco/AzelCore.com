import { Locale, localePath } from '@/lib/i18n';
import Link from 'next/link';
import { getAlternates } from '@/lib/seo';
import type { Metadata } from 'next';
import { SITE_URL, WHATSAPP_LINK } from '@/lib/constants';
import CostCalculator from '@/components/calculator/CostCalculator';
import ServiceSummary from '@/components/seo/ServiceSummary';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'أسعار تظليل السيارات في جدة 2026 + حاسبة التكلفة' : 'Car Tint Prices Jeddah 2026 + Cost Calculator',
    description: isAr ? 'احسب أسعار تظليل السيارات في جدة فوراً: نانو سيراميك، 3M وجونسون حسب حجم سيارتك. حاسبة مجانية بأسعار 2026. أرسل تسعيرتك واتساب الآن.' : 'Calculate car tinting prices in Jeddah instantly: nano-ceramic, 3M & Johnson by car size. Free 2026 price calculator. Send your quote on WhatsApp now.',
    alternates: getAlternates(locale as Locale, '/calculator'),
  };
}

// Indexable reference prices (SAR), kept in sync with the calculator widget
// (src/components/calculator/CostCalculator.tsx). Sedan = base; SUV ×1.2; Family SUV ×1.4.
const FILM_PRICES = (isAr: boolean) => [
  { name: isAr ? 'فيلم كربوني (اقتصادي)' : 'Carbon (Economy)', base: 600 },
  { name: isAr ? 'جونسون Renegade (كلاسيكي)' : 'Johnson Renegade (Classic)', base: 800 },
  { name: isAr ? 'نانو سيراميك جونسون Marathon' : 'Johnson Marathon Nano-Ceramic', base: 1100 },
  { name: isAr ? 'جونسون Supreme IR ⭐' : 'Johnson Supreme IR ⭐', base: 1800 },
  { name: isAr ? '3M Crystalline ⭐ (200+ طبقة نانو)' : '3M Crystalline ⭐ (200+ nano layers)', base: 2400 },
];
const SIZE_COLS = (isAr: boolean) => [
  { label: isAr ? 'سيدان' : 'Sedan', mod: 1 },
  { label: isAr ? 'جيب SUV' : 'SUV', mod: 1.2 },
  { label: isAr ? 'عائلي (3 صفوف)' : 'Family SUV', mod: 1.4 },
];

const getFaqs = (isAr: boolean) => isAr ? [
  { q: 'كم سعر تظليل سيارة سيدان في جدة؟', a: 'تبدأ أسعار تظليل السيارات في جدة من 600 ريال للفيلم الكربوني الاقتصادي، ونحو 1,100 ريال للنانو سيراميك جونسون Marathon، وتصل إلى 2,400 ريال لأفلام 3M Crystalline للسيدان — مع ضمان عمر السيارة.' },
  { q: 'ما الفرق السعري بين النانو سيراميك والكربوني؟', a: 'الفيلم الكربوني اقتصادي (من ~600 ريال) ويحجب حرارة أقل، بينما النانو سيراميك (من ~1,100 ريال) يحجب حتى 97% من الحرارة و99% من الأشعة فوق البنفسجية دون حجب إشارة الجوال.' },
  { q: 'هل سعر التظليل يشمل الزجاج الأمامي وفتحة السقف؟', a: 'أسعار التظليل الكامل تشمل كل زجاج السيارة. تظليل الزجاج الأمامي يكون بنسبة شفافة مطابقة للنظام، وفتحة السقف/البانوراما تُحتسب كإضافة بسيطة على السعر.' },
  { q: 'كم يدوم التظليل وهل عليه ضمان؟', a: 'أفلام جونسون و3M الأصلية مضمونة لعمر السيارة ضد تغيّر اللون والتقشّر والفقاعات، وتدوم سنوات طويلة عند العناية الصحيحة.' },
  { q: 'ما نسبة التظليل المسموح بها نظاماً في السعودية؟', a: 'وفقاً لنظام المرور السعودي، يُسمح بتظليل الزجاج الجانبي والخلفي بنسبة لا تقل عن 30% نفاذية ضوء، مع بقاء الزجاج الأمامي شفافاً (يُسمح بشريط علوي محدود). راجع دليل قوانين التظليل للتفاصيل.' },
] : [
  { q: 'How much does sedan tinting cost in Jeddah?', a: 'Car tinting prices in Jeddah start at 600 SAR for economy carbon film, ~1,100 SAR for Johnson Marathon nano-ceramic, and up to 2,400 SAR for 3M Crystalline on a sedan — all with a lifetime warranty.' },
  { q: 'What is the price difference between nano-ceramic and carbon?', a: 'Carbon film is economy (from ~600 SAR) and rejects less heat, while nano-ceramic (from ~1,100 SAR) blocks up to 97% of heat and 99% of UV with no signal interference.' },
  { q: 'Does the price include the windshield and sunroof?', a: 'Full-car pricing covers all glass. The windshield is tinted at a road-legal clear level, and sunroof/panoramic roofs are a small add-on.' },
  { q: 'How long does tint last and is it warranted?', a: 'Original Johnson and 3M films carry a lifetime warranty against fading, peeling and bubbling, and last for years with proper care.' },
  { q: 'What is the legal tint limit in Saudi Arabia?', a: 'Under Saudi traffic regulations, side and rear windows may be tinted to no less than 30% VLT, while the windshield stays clear (a limited top strip is allowed). See the tint-laws guide for details.' },
];

const getSchema = (isAr: boolean) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: isAr ? 'حاسبة أسعار تظليل السيارات — عزل كور' : 'Car Tint Price Calculator — AzelCore',
      url: `${SITE_URL}${isAr ? '' : '/en'}/calculator`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'SAR' },
      provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: getFaqs(isAr).map(f => ({
        '@type': 'Question', name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
});

export default async function CalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const films = FILM_PRICES(isAr);
  const cols = SIZE_COLS(isAr);
  const faqs = getFaqs(isAr);
  const cell: React.CSSProperties = { padding: '0.7rem 0.9rem', borderBottom: '1px solid var(--border)', textAlign: isAr ? 'right' : 'left' };
  const th: React.CSSProperties = { ...cell, fontWeight: 700, color: 'var(--text)', background: 'var(--surface-elevated, var(--surface))' };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema(isAr)) }} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{isAr ? 'أسعار وحاسبة تكلفة تظليل وعزل السيارات في جدة' : 'Car Tint Prices & Cost Calculator in Jeddah'}</h1>
          <p className={styles.subtitle}>
            {isAr ? 'احسب التكلفة التقديرية لتظليل وعزل سيارتك في ثوانٍ.' : 'Calculate the estimated cost to tint and insulate your car in seconds.'}
          </p>
        </div>
      </section>

      <section className={styles.calculatorSection}>
        <div className={styles.container}>
          <ServiceSummary summary={isAr ? "استخدم حاسبة عزل كور الذكية لمعرفة التكلفة التقريبية لتظليل سيارتك بأفلام النانو سيراميك والكربون. الأسعار تعتمد على حجم السيارة ونوع الفيلم المختار." : "Use the smart AzelCore calculator to get an estimated cost for tinting your car with nano-ceramic and carbon films. Prices depend on the car size and chosen film type."} isAr={isAr} />

          <div className={styles.calculatorWrapper}>
            <CostCalculator isAr={isAr} />
          </div>

          {/* ═══ Indexable reference price table (server-rendered for SEO/AI) ═══ */}
          <div style={{ maxWidth: '900px', margin: '3rem auto 0' }}>
            <h2 style={{ marginBottom: '0.75rem' }}>{isAr ? 'كم تكلفة تظليل السيارة في جدة؟ (جدول أسعار 2026)' : 'How Much Does Car Tinting Cost in Jeddah? (2026 Price Table)'}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              {isAr
                ? 'تبدأ أسعار تظليل السيارات في جدة من 600 ريال للفيلم الكربوني الاقتصادي وتصل إلى 2,400 ريال لأفلام 3M Crystalline للسيارة السيدان، وتزيد للسيارات الأكبر (جيب SUV +20%، عائلي +40%). الأسعار تقديرية لعام 2026 وتشمل التركيب الكامل بضمان عمر السيارة.'
                : 'Car tinting prices in Jeddah start at 600 SAR for economy carbon film and reach 2,400 SAR for 3M Crystalline on a sedan, increasing for larger vehicles (SUV +20%, Family SUV +40%). Estimated 2026 prices include full installation with a lifetime warranty.'}
            </p>
            <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <thead>
                  <tr>
                    <th style={th}>{isAr ? 'نوع الفيلم' : 'Film Type'}</th>
                    {cols.map(c => <th key={c.label} style={{ ...th, textAlign: 'center' }}>{c.label}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {films.map(f => (
                    <tr key={f.name}>
                      <td style={{ ...cell, fontWeight: 600 }}>{f.name}</td>
                      {cols.map(c => (
                        <td key={c.label} style={{ ...cell, textAlign: 'center', color: 'var(--text-secondary)' }}>
                          {Math.round(f.base * c.mod).toLocaleString(isAr ? 'ar-SA' : 'en-US')} {isAr ? 'ر.س' : 'SAR'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.6rem' }}>
              {isAr ? 'إضافات: فتحة سقف +150 ر.س، بانوراما +350 ر.س، طبقة حماية ضد الملوحة +200 ر.س. آخر تحديث للأسعار: 2026.' : 'Add-ons: sunroof +150 SAR, panoramic +350 SAR, anti-salt coat +200 SAR. Prices last updated: 2026.'}
            </p>
            <p style={{ marginTop: '1rem' }}>
              <Link href={localePath(locale as Locale, '/car-insulation-jeddah')} style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>
                {isAr ? 'تعرّف على خدمة تظليل السيارات بالكامل ←' : 'Explore the full car tinting service →'}
              </Link>
            </p>
          </div>

          {/* ═══ FAQ (visible + FAQPage schema) ═══ */}
          <div style={{ maxWidth: '900px', margin: '3rem auto 0' }}>
            <h2 style={{ marginBottom: '1rem' }}>{isAr ? 'أسئلة شائعة عن أسعار تظليل السيارات في جدة' : 'FAQ — Car Tinting Prices in Jeddah'}</h2>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {faqs.map((f, i) => (
                <details key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1rem 1.25rem' }}>
                  <summary style={{ fontWeight: 700, cursor: 'pointer', color: 'var(--text)' }}>{f.q}</summary>
                  <p style={{ marginTop: '0.6rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{f.a}</p>
                </details>
              ))}
            </div>
            <p style={{ marginTop: '1.25rem' }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>
                {isAr ? 'أرسل تفاصيل سيارتك واحصل على عرض سعر دقيق عبر واتساب ←' : 'Send your car details for an exact quote on WhatsApp →'}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
