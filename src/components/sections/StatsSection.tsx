'use client';
import { useEffect, useRef, useState } from 'react';
import { TRUST_STATS } from '@/lib/constants';
import styles from './StatsSection.module.css';

function AnimatedCounter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * end * 10) / 10);
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className={styles.number}>
      {Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}
      <span className={styles.suffix}>{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className={styles.section} aria-label="إحصائيات عزل كور">
      <div className={styles.inner}>
        {TRUST_STATS.map((stat, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.icon}>{stat.icon}</span>
            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
