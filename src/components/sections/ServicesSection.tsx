import Link from 'next/link';
import styles from './ServicesSection.module.css';

const services = [
  {
    icon: '🚗',
    title: 'تظليل سيارات',
    desc: 'أفلام نانو سيراميك أمريكية تحجب 97% من الحرارة مع ضمان يصل لعمر السيارة. متوافقة مع قوانين المرور السعودية.',
    href: '/car-insulation-jeddah',
    gradient: 'linear-gradient(135deg, hsla(210, 100%, 45%, 0.12), hsla(185, 80%, 45%, 0.08))',
    borderColor: 'hsla(210, 100%, 55%, 0.2)',
    features: ['حجب IR 97%', 'لا يحجب إشارات', 'ضمان 10 سنوات'],
  },
  {
    icon: '🏢',
    title: 'عزل زجاج مباني',
    desc: 'حلول عزل حراري متقدمة لواجهات المباني التجارية والسكنية — وفّر حتى 40% من فاتورة الكهرباء.',
    href: '/building-glass-insulation',
    gradient: 'linear-gradient(135deg, hsla(150, 70%, 40%, 0.12), hsla(185, 80%, 45%, 0.08))',
    borderColor: 'hsla(150, 70%, 50%, 0.2)',
    features: ['توفير كهرباء 40%', 'حماية UV 99%', 'ضمان 15 سنة'],
  },
  {
    icon: '⭐',
    title: 'عازل جونسون',
    desc: 'وكيل جونسون المعتمد — 5 خطوط إنتاج أمريكية. وكيل 3M المعتمد — Crystalline بـ 200+ طبقة نانو.',
    href: '/johnson-authorized-dealer',
    gradient: 'linear-gradient(135deg, hsla(35, 95%, 55%, 0.12), hsla(25, 90%, 50%, 0.08))',
    borderColor: 'hsla(35, 95%, 55%, 0.3)',
    features: ['5 خطوط إنتاج', 'ضمان عمر السيارة', 'تقنية CST™'],
    featured: true,
  },
  {
    icon: '🌡️',
    title: 'عزل حراري متقدم',
    desc: 'حلول حرارية شاملة للسيارات والمباني — اختبارات حقيقية بكاميرا FLIR تثبت كفاءة العزل.',
    href: '/car-insulation-jeddah',
    gradient: 'linear-gradient(135deg, hsla(15, 90%, 55%, 0.12), hsla(35, 95%, 55%, 0.08))',
    borderColor: 'hsla(15, 90%, 55%, 0.2)',
    features: ['اختبار FLIR', 'انخفاض 47%', 'مقارنة حقيقية'],
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services" aria-label="خدماتنا">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>خدماتنا</span>
          <h2 className={styles.title}>حلول عزل شاملة لكل احتياج</h2>
          <p className={styles.subtitle}>
            من تظليل السيارات بأحدث التقنيات الأمريكية إلى عزل واجهات المباني — نقدم حماية متكاملة من حرارة السعودية.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <Link key={i} href={service.href} className={`${styles.card} ${service.featured ? styles.featured : ''}`}>
              <div className={styles.cardGlow} style={{ background: service.gradient }} aria-hidden="true" />
              <div className={styles.cardContent} style={{ borderColor: service.borderColor }}>
                <span className={styles.icon}>{service.icon}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <div className={styles.features}>
                  {service.features.map((f, j) => (
                    <span key={j} className={styles.featureTag}>✓ {f}</span>
                  ))}
                </div>
                <span className={styles.cardArrow}>اعرف المزيد ←</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
