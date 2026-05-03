import Link from 'next/link';
import styles from './CrossSellCards.module.css';

interface CrossSellItem {
  icon: string;
  title: string;
  description: string;
  href: string;
  linkText: string;
}

const serviceMap: Record<string, CrossSellItem[]> = {
  'car-insulation-jeddah': [
    {
      icon: '🏢',
      title: 'عزل زجاج المباني',
      description: 'ظللت سيارتك؟ نوافذ بيتك ومكتبك تحتاج نفس الحماية — توفير 35-45% من فاتورة الكهرباء.',
      href: '/building-glass-insulation',
      linkText: 'تعرف على عزل المباني',
    },
    {
      icon: '🇺🇸',
      title: 'عازل جونسون الأمريكي',
      description: 'الخيار الأول للسيارات الفارهة — تقنية Supreme IR بضمان 10 سنوات من الوكيل المعتمد.',
      href: '/johnson-authorized-dealer',
      linkText: 'اكتشف جونسون',
    },
    {
      icon: '🔴',
      title: 'عازل 3M — Crystalline',
      description: '200+ طبقة نانو — أعلى TSER في العالم بنسبة 90%. شبه شفاف ومطابق لنظام المرور.',
      href: '/3m-authorized-dealer',
      linkText: 'اكتشف 3M',
    },
  ],
  'building-glass-insulation': [
    {
      icon: '🚗',
      title: 'تظليل سيارات جدة',
      description: 'عزلت مبناك؟ سيارتك تحتاج نفس الحماية — نانو سيراميك يحجب 97% من الأشعة تحت الحمراء.',
      href: '/car-insulation-jeddah',
      linkText: 'تعرف على تظليل السيارات',
    },
    {
      icon: '🇺🇸',
      title: 'عازل جونسون للمباني',
      description: 'خطوط NightScape و Sunlight المخصصة للواجهات التجارية والسكنية بتقنية أمريكية.',
      href: '/johnson-authorized-dealer',
      linkText: 'اكتشف جونسون',
    },
    {
      icon: '🔴',
      title: 'أفلام 3M للمباني التجارية',
      description: '3M تُنتج أفلاماً معمارية متخصصة بحجب حراري فائق — مثالية للأبراج التجارية والواجهات الزجاجية.',
      href: '/3m-authorized-dealer',
      linkText: 'اكتشف 3M',
    },
  ],
  'johnson-authorized-dealer': [
    {
      icon: '🚗',
      title: 'تظليل سيارات جدة',
      description: 'عزل حراري احترافي بأفلام نانو سيراميك — حرارة مقصورتك تنزل من 72°م لـ 38°م.',
      href: '/car-insulation-jeddah',
      linkText: 'خدمة تظليل السيارات',
    },
    {
      icon: '🔴',
      title: 'عازل 3M — بديل قوي',
      description: '3M Crystalline بـ 200+ طبقة نانو — TSER 90% وحجب UV 99.9%. وكيل معتمد أيضاً.',
      href: '/3m-authorized-dealer',
      linkText: 'مقارنة مع 3M',
    },
  ],
  '3m-authorized-dealer': [
    {
      icon: '🚗',
      title: 'تظليل سيارات جدة',
      description: 'عزل حراري احترافي بأفلام نانو سيراميك — حرارة مقصورتك تنزل من 72°م لـ 38°م.',
      href: '/car-insulation-jeddah',
      linkText: 'خدمة تظليل السيارات',
    },
    {
      icon: '🇺🇸',
      title: 'عازل جونسون — بديل قوي',
      description: 'Johnson Supreme IR بحجب 97% IR. تقنية CST™ لمقاومة الخدوش. وكيل معتمد أيضاً.',
      href: '/johnson-authorized-dealer',
      linkText: 'مقارنة مع جونسون',
    },
  ],
};

interface CrossSellCardsProps {
  currentPage: string;
}

/**
 * CrossSellCards — Contextual internal linking with causal reasoning.
 * Blueprint §3 #10: "الربط سببي وليس عشوائي"
 */
export default function CrossSellCards({ currentPage }: CrossSellCardsProps) {
  const items = serviceMap[currentPage];
  if (!items) return null;

  return (
    <section className={styles.crossSell} aria-label="خدمات مكمّلة" data-nosnippet>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>خدمات <span>مكمّلة</span> قد تهمك</h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={styles.card}>
              <span className={styles.cardIcon}>{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <span className={styles.cardLink}>{item.linkText} ←</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
