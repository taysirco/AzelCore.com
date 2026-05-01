'use client';

// ═══ ThermalSliderBeforeAfter — NavBoost Dwell-Time Trap ═══
// Interactive before/after slider for thermal comparison
// Maximizes touch interactions → CrUX dwell-time signals

import { useRef, useState, useCallback } from 'react';
import styles from './ThermalSliderBeforeAfter.module.css';

export default function ThermalSliderBeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percentage 0-100
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    // RTL-aware: flip direction
    const x = rect.right - clientX;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Calculate dynamic temperature based on slider position (RTL: right = before)
  const currentTemp = Math.round(75 - (position * 40) / 100);
  const tempClass = currentTemp > 55 ? styles.hot : currentTemp > 45 ? styles.warm : styles.cool;
  const reductionPct = Math.round(((75 - currentTemp) / 75) * 100);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>اختبار حراري تفاعلي</span>
          <h2 className={styles.title}>شوف الفرق بعينك — قبل وبعد التظليل</h2>
          <p className={styles.subtitle}>
            اسحب المؤشر لمشاهدة فرق درجة الحرارة داخل المقصورة قبل وبعد تركيب فيلم نانو سيراميك.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className={styles.sliderContainer}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          role="slider"
          aria-label="مقارنة حرارية قبل وبعد التظليل"
          aria-valuemin={35}
          aria-valuemax={75}
          aria-valuenow={currentTemp}
          aria-valuetext={`درجة الحرارة: ${currentTemp}°C`}
          tabIndex={0}
        >
          {/* Before (Hot — Right in RTL) */}
          <div className={styles.beforeSide}>
            <div className={styles.label}>
              <span className={styles.labelTitle}>🔥 قبل التظليل</span>
              <span className={styles.temp}>75<span className={styles.tempUnit}>°C</span></span>
              <span className={styles.labelDesc}>حرارة خانقة — المقصورة فرن</span>
            </div>
          </div>

          {/* After (Cool — Left in RTL) */}
          <div
            className={styles.afterSide}
            style={{ clipPath: `inset(0 ${position}% 0 0)` }}
          >
            <div className={styles.label}>
              <span className={styles.labelTitle}>❄️ بعد التظليل</span>
              <span className={styles.temp}>35<span className={styles.tempUnit}>°C</span></span>
              <span className={styles.labelDesc}>مقصورة باردة ومريحة</span>
            </div>
          </div>

          {/* Handle */}
          <div
            className={styles.handle}
            style={{ right: `${position}%` }}
          >
            <div className={styles.handleGrip}>
              <span className={styles.handleIcon}>◂ ▸</span>
            </div>
          </div>
        </div>

        {/* Dynamic Temperature Bar */}
        <div className={styles.tempBar}>
          <span className={styles.tempBarLabel}>🌡️ درجة الحرارة الحالية:</span>
          <span className={`${styles.tempBarValue} ${tempClass}`}>
            {currentTemp}°C
          </span>
          {reductionPct > 0 && (
            <span className={styles.reduction}>
              ↓ انخفاض {reductionPct}%
            </span>
          )}
        </div>

        <p className={styles.hint}>👆 اسحب المؤشر يمين ويسار لمشاهدة الفرق</p>
      </div>
    </section>
  );
}
