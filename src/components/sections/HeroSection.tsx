'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { WHATSAPP_LINK } from '@/lib/constants';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated gradient mesh background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    let t = 0;
    const animate = () => {
      t += 0.003;
      const w = canvas.width, h = canvas.height;

      // Dark gradient mesh
      ctx.clearRect(0, 0, w, h);

      // Orb 1 — Blue
      const g1 = ctx.createRadialGradient(
        w * 0.3 + Math.sin(t) * 80, h * 0.4 + Math.cos(t * 0.7) * 40,
        0, w * 0.3, h * 0.4, w * 0.4
      );
      g1.addColorStop(0, 'hsla(210, 100%, 45%, 0.15)');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      // Orb 2 — Cyan
      const g2 = ctx.createRadialGradient(
        w * 0.7 + Math.cos(t * 0.8) * 60, h * 0.6 + Math.sin(t) * 50,
        0, w * 0.7, h * 0.6, w * 0.35
      );
      g2.addColorStop(0, 'hsla(185, 80%, 45%, 0.1)');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // Orb 3 — Gold (subtle)
      const g3 = ctx.createRadialGradient(
        w * 0.5 + Math.sin(t * 0.5) * 100, h * 0.2 + Math.cos(t * 0.6) * 30,
        0, w * 0.5, h * 0.2, w * 0.25
      );
      g3.addColorStop(0, 'hsla(35, 95%, 55%, 0.06)');
      g3.addColorStop(1, 'transparent');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);

      animFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Background Image */}
      <div className={styles.heroBg}>
        <Image
          src="/images/hero-car-tinting-workshop.webp"
          alt="ورشة تظليل سيارات احترافية — عزل كور جدة"
          fill
          priority
          fetchPriority="high"
          quality={80}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </div>
      <div className={styles.heroOverlay} aria-hidden="true" />

      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.badges}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            وكيل جونسون و 3M المعتمد 🇺🇸
          </span>
          <span className={styles.badgeSecondary}>منشأة سعودية موثقة ✅</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>تظليل وعزل حراري</span>
          <span className={`${styles.titleLine} ${styles.titleGradient}`}>بمعايير أمريكية</span>
          <span className={styles.titleLine}>في <span className={styles.highlight}>جدة</span></span>
        </h1>

        <p className={styles.subtitle}>
          نحمي سيارتك ومبناك من حرارة السعودية بأفلام <strong>نانو سيراميك</strong> تحجب
          <span className={styles.statInline}> 97% </span>
          من الأشعة تحت الحمراء — مع ضمان يصل لعمر السيارة.
        </p>

        <div className={styles.actions} data-nosnippet>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.16 1.6 5.972L.052 23.65a.5.5 0 00.606.606l5.678-1.548A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            احجز موعدك الآن
          </a>
          <a href="/johnson-authorized-dealer" className={styles.secondaryBtn}>
            تعرف على عازل جونسون ←
          </a>
        </div>

        <div className={styles.trust} data-nosnippet>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🛡️</span>
            <span>ضمان 10 سنوات</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🌡️</span>
            <span>حجب IR 97%</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📡</span>
            <span>لا يحجب الإشارات</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⭐</span>
            <span>تقييم 4.9</span>
          </div>
        </div>
      </div>
    </section>
  );
}
