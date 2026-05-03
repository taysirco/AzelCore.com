import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import CostCalculator from '@/components/calculator/CostCalculator';
import TldrBait from '@/components/seo/TldrBait';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'حاسبة تكلفة عزل وتظليل السيارات | عزل كور',
  description: 'احسب التكلفة التقديرية لعزل وتظليل سيارتك في جدة (نانو سيراميك، 3M، لومار). أداة ذكية لمعرفة الأسعار التقريبية قبل الحجز.',
  alternates: {
    canonical: `${SITE_URL}/calculator`,
  },
  openGraph: {
    title: 'حاسبة تكلفة العزل الحراري',
    description: 'اعرف تكلفة تظليل سيارتك بدقة عبر حاسبتنا الذكية.',
    url: `${SITE_URL}/calculator`,
  },
};

export default function CalculatorPage() {
  return (
    <>
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
          <TldrBait summary="استخدم حاسبة عزل كور الذكية لمعرفة التكلفة التقريبية لتظليل سيارتك بأفلام النانو سيراميك والكربون. الأسعار تعتمد على حجم السيارة ونوع الفيلم المختار." />
          
          <div className={styles.calculatorWrapper}>
            <CostCalculator />
          </div>
        </div>
      </section>
    </>
  );
}
