import { Locale, localePath } from '@/lib/i18n';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import CostCalculator from '@/components/calculator/CostCalculator';
import ServiceSummary from '@/components/seo/ServiceSummary';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'حاسبة تكلفة عزل وتظليل السيارات' : 'حاسبة تكلفة عزل وتظليل السيارات | AzelCore',
    description: isAr ? 'احسب التكلفة التقديرية لعزل وتظليل سيارتك في جدة (نانو سيراميك، 3M، لومار). أداة ذكية لمعرفة الأسعار التقريبية قبل الحجز.' : 'احسب التكلفة التقديرية لعزل وتظليل سيارتك في جدة (نانو سيراميك، 3M، لومار). أداة ذكية لمعرفة الأسعار التقريبية قبل الحجز.',
    alternates: { canonical: `${SITE_URL}${localePath(locale as Locale, '/calculator')}` },
  };
}

const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'حاسبة تكلفة العزل وتظليل السيارات — عزل كور',
  url: `${SITE_URL}/calculator`,
  description: 'أداة ذكية لحساب التكلفة التقديرية لتظليل وعزل سيارتك بأفلام النانو سيراميك وجونسون في جدة.',
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
};

export default async function CalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>حاسبة تكلفة العزل</h1>
          <p className={styles.subtitle}>
            احسب التكلفة التقديرية لتظليل وعزل سيارتك في ثوانٍ.
          </p>
        </div>
      </section>

      <section className={styles.calculatorSection}>
        <div className={styles.container}>
          <ServiceSummary summary="استخدم حاسبة عزل كور الذكية لمعرفة التكلفة التقريبية لتظليل سيارتك بأفلام النانو سيراميك والكربون. الأسعار تعتمد على حجم السيارة ونوع الفيلم المختار." />
          
          <div className={styles.calculatorWrapper}>
            <CostCalculator />
          </div>
        </div>
      </section>
    </>
  );
}
