import Link from 'next/link';
import styles from './JohnsonSection.module.css';

const productLines = [
  { name: 'Supreme IR', nameAr: 'سوبريم آي آر', tech: 'نانو سيراميك', ir: '97%', tser: '72%', warranty: 'عمر السيارة', tier: 'flagship' },
  { name: 'InsulatIR', nameAr: 'إنسوليت', tech: 'نانو سيراميك', ir: '92%', tser: '65%', warranty: 'عمر السيارة', tier: 'premium' },
  { name: 'Marathon', nameAr: 'ماراثون', tech: 'هايبرد', ir: '86%', tser: '60%', warranty: '5 سنوات', tier: 'value' },
  { name: 'Ray Guard', nameAr: 'راي جارد', tech: 'كربون نانو', ir: '70%', tser: '55%', warranty: '5 سنوات', tier: 'economy' },
];

const usps = [
  { icon: '🇺🇸', text: 'شركة أمريكية منذ 1961' },
  { icon: '🔬', text: 'تقنية CST™ لمقاومة الخدوش' },
  { icon: '📡', text: 'لا تحجب الإشارات' },
  { icon: '🛡️', text: 'ضمان عمر السيارة' },
  { icon: '🌡️', text: 'حجب IR 97%' },
  { icon: '✅', text: 'عزل كور وكيل رسمي' },
];

export default function JohnsonSection() {
  return (
    <section className={styles.section} id="johnson" aria-label="عازل جونسون">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.dealerBadge}>
            <span className={styles.badgeGlow} aria-hidden="true" />
            وكيل جونسون المعتمد
          </div>
          <h2 className={styles.title}>
            أفلام <span className={styles.gradient}>Johnson Window Films</span>
          </h2>
          <p className={styles.subtitle}>
            5 خطوط إنتاج أمريكية — من الفلاجشيب Supreme IR بحجب 97% IR إلى Marathon الاقتصادي. متوفرة حصرياً عبر الوكلاء المعتمدين.
          </p>
        </div>

        {/* Product Lines */}
        <div className={styles.products}>
          {productLines.map((product, i) => (
            <div key={i} className={`${styles.productCard} ${styles[product.tier]}`}>
              <div className={styles.productHeader}>
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.productNameAr}>{product.nameAr}</span>
              </div>
              <div className={styles.productStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>{product.ir}</span>
                  <span className={styles.statLabel}>حجب IR</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>{product.tser}</span>
                  <span className={styles.statLabel}>TSER</span>
                </div>
              </div>
              <div className={styles.productMeta}>
                <span className={styles.techBadge}>{product.tech}</span>
                <span className={styles.warranty}>🛡️ {product.warranty}</span>
              </div>
            </div>
          ))}
        </div>

        {/* USPs */}
        <div className={styles.usps}>
          {usps.map((usp, i) => (
            <div key={i} className={styles.uspItem}>
              <span className={styles.uspIcon}>{usp.icon}</span>
              <span>{usp.text}</span>
            </div>
          ))}
        </div>

        <Link href="/johnson-authorized-dealer" className={styles.ctaBtn}>
          اكتشف كل منتجات جونسون ←
        </Link>
      </div>
    </section>
  );
}
