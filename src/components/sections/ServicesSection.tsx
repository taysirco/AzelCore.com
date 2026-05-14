import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import { localePath, type Locale } from '@/lib/i18n';
import styles from './ServicesSection.module.css';

function getServices(locale: Locale) {
  const dict = getDictionary(locale);
  return [
    {
      icon: '🚗',
      title: dict.services.card1.title,
      desc: dict.services.card1.desc,
      href: localePath(locale, '/car-insulation-jeddah'),
      gradient: 'linear-gradient(135deg, hsla(210, 100%, 45%, 0.12), hsla(185, 80%, 45%, 0.08))',
      borderColor: 'hsla(210, 100%, 55%, 0.2)',
      features: dict.services.card1.features,
    },
    {
      icon: '🏢',
      title: dict.services.card2.title,
      desc: dict.services.card2.desc,
      href: localePath(locale, '/building-glass-insulation'),
      gradient: 'linear-gradient(135deg, hsla(150, 70%, 40%, 0.12), hsla(185, 80%, 45%, 0.08))',
      borderColor: 'hsla(150, 70%, 50%, 0.2)',
      features: dict.services.card2.features,
    },
    {
      icon: '⭐',
      title: dict.services.card3.title,
      desc: dict.services.card3.desc,
      href: localePath(locale, '/johnson-authorized-dealer'),
      gradient: 'linear-gradient(135deg, hsla(35, 95%, 55%, 0.12), hsla(25, 90%, 50%, 0.08))',
      borderColor: 'hsla(35, 95%, 55%, 0.3)',
      features: dict.services.card3.features,
      featured: true,
    },
    {
      icon: '🌡️',
      title: dict.services.card4.title,
      desc: dict.services.card4.desc,
      href: localePath(locale, '/car-insulation-jeddah'),
      gradient: 'linear-gradient(135deg, hsla(15, 90%, 55%, 0.12), hsla(35, 95%, 55%, 0.08))',
      borderColor: 'hsla(15, 90%, 55%, 0.2)',
      features: dict.services.card4.features,
    },
  ];
}

export default function ServicesSection({ locale = 'ar' }: { locale?: string }) {
  const dict = getDictionary(locale as Locale);
  const services = getServices(locale as Locale);

  return (
    <section className={styles.section} id="services" aria-label={dict.services.ariaLabel}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>{dict.services.overline}</span>
          <h2 className={styles.title}>{dict.services.title}</h2>
          <p className={styles.subtitle}>{dict.services.subtitle}</p>
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
                  {service.features.map((f: string, j: number) => (
                    <span key={j} className={styles.featureTag}>✓ {f}</span>
                  ))}
                </div>
                <span className={styles.cardArrow}>{dict.services.learnMore}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
