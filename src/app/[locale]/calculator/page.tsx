import { Locale, localePath } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import CostCalculator from '@/components/calculator/CostCalculator';
import ServiceSummary from '@/components/seo/ServiceSummary';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'حاسبة تكلفة عزل وتظليل السيارات' : 'Car Insulation & Tinting Cost Calculator | AzelCore',
    description: isAr ? 'احسب التكلفة التقديرية لعزل وتظليل سيارتك في جدة (نانو سيراميك، 3M، لومار). أداة ذكية لمعرفة الأسعار التقريبية قبل الحجز.' : 'Calculate the estimated cost for insulating and tinting your car in Jeddah (Nano Ceramic, 3M, Johnson). A smart tool to get approximate prices before booking.',
    alternates: { canonical: `${SITE_URL}${localePath(locale as Locale, '/calculator')}` },
  };
}

const getCalculatorSchema = (isAr: boolean) => ({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: isAr ? 'حاسبة تكلفة العزل وتظليل السيارات — عزل كور' : 'Car Tinting Cost Calculator — AzelCore',
  url: `${SITE_URL}/calculator`,
  description: isAr ? 'أداة ذكية لحساب التكلفة التقديرية لتظليل وعزل سيارتك بأفلام النانو سيراميك وجونسون في جدة.' : 'A smart tool to calculate the estimated cost of car tinting and insulation with nano-ceramic and Johnson films in Jeddah.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'SAR'
  },
  provider: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`
  }
});

export default async function CalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getCalculatorSchema(isAr)) }} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{isAr ? 'حاسبة تكلفة العزل' : 'Insulation Cost Calculator'}</h1>
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
        </div>
      </section>
    </>
  );
}
