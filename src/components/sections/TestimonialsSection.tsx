'use client';
import { useState } from 'react';
import Image from 'next/image';
import { testimonialTemplate } from '@/data/testimonials';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonialTemplate[active];

  return (
    <section className={styles.section} id="testimonials" aria-label="آراء العملاء">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>عملاؤنا يتكلمون</span>
          <h2 className={styles.title}>ثقة حقيقية من أهل جدة</h2>
          <p className={styles.subtitle}>تقييمات حقيقية من عملاء تم خدمتهم — الأرقام ما تكذب.</p>
        </div>

        <div className={styles.grid}>
          {/* Active testimonial */}
          <div className={styles.activeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>
                <Image src={`/images/${t.image}`} alt={t.name} width={56} height={56} sizes="56px" style={{ objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardName}>{t.name}</h3>
                <p className={styles.cardMeta}>{t.district} — {t.carOrBuilding}</p>
              </div>
              <div className={styles.rating}>
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
            </div>
            <blockquote className={styles.quote}>&ldquo;{t.text}&rdquo;</blockquote>
            <div className={styles.cardFooter}>
              <span className={styles.filmBadge}>{t.filmType}</span>
              <span className={styles.dateBadge}>{t.date}</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className={styles.thumbs}>
            {testimonialTemplate.map((item, i) => (
              <button
                key={item.id}
                className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`تقييم ${item.name}`}
              >
                <Image src={`/images/${item.image}`} alt={item.name} width={48} height={48} sizes="48px" loading="lazy" style={{ objectFit: 'cover', borderRadius: '50%' }} />
                <div className={styles.thumbInfo}>
                  <span className={styles.thumbName}>{item.name}</span>
                  <span className={styles.thumbCar}>{item.carOrBuilding}</span>
                </div>
                <span className={styles.thumbRating}>{'★'.repeat(item.rating)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}><span className={styles.statValue}>4.9</span><span className={styles.statLabel}>متوسط التقييم</span></div>
          <div className={styles.statItem}><span className={styles.statValue}>127+</span><span className={styles.statLabel}>تقييم حقيقي</span></div>
          <div className={styles.statItem}><span className={styles.statValue}>98%</span><span className={styles.statLabel}>نسبة الرضا</span></div>
          <div className={styles.statItem}><span className={styles.statValue}>780+</span><span className={styles.statLabel}>عميل تمت خدمته</span></div>
        </div>
      </div>
    </section>
  );
}
