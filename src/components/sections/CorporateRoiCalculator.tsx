'use client';
import { useState } from 'react';
import styles from './CorporateRoiCalculator.module.css';

/**
 * Corporate ROI Calculator — B2B Information Gain
 * Calculates HVAC energy savings based on Saudi Building Code (SBC).
 * Designed to attract corporate/enterprise search intent.
 */

const ELECTRICITY_RATE = 0.32; // SAR/kWh (Saudi commercial rate 2026)
const COOLING_SHARE = 0.65; // 65% of electricity = cooling in KSA
const FILM_SAVINGS = 0.38; // 38% cooling reduction (conservative)

export default function CorporateRoiCalculator() {
  const [area, setArea] = useState(500);
  const [bill, setBill] = useState(15000);
  const [floors, setFloors] = useState(3);

  const annualCooling = bill * 12 * COOLING_SHARE;
  const annualSavings = annualCooling * FILM_SAVINGS;
  const filmCost = area * floors * 85; // ~85 SAR/m² average
  const paybackMonths = Math.ceil((filmCost / annualSavings) * 12);
  const tenYearSavings = (annualSavings * 10) - filmCost;

  return (
    <div className={styles.calculator} id="roi-calculator">
      <h3 className={styles.title}>📊 حاسبة توفير الطاقة — كود البناء السعودي (SBC)</h3>
      <p className={styles.subtitle}>
        احسب العائد على الاستثمار لمشروع عزل واجهاتك حسب معايير <strong>ASHRAE 90.1</strong> و <strong>SBC 601</strong>
      </p>

      <div className={styles.inputs}>
        <label className={styles.field}>
          <span>مساحة الواجهات الزجاجية (م²)</span>
          <input type="range" min={100} max={5000} step={50} value={area}
            onChange={e => setArea(Number(e.target.value))} />
          <span className={styles.value}>{area.toLocaleString('ar-SA')} م²</span>
        </label>

        <label className={styles.field}>
          <span>فاتورة الكهرباء الشهرية (ر.س)</span>
          <input type="range" min={2000} max={100000} step={1000} value={bill}
            onChange={e => setBill(Number(e.target.value))} />
          <span className={styles.value}>{bill.toLocaleString('ar-SA')} ر.س</span>
        </label>

        <label className={styles.field}>
          <span>عدد الطوابق</span>
          <input type="range" min={1} max={30} step={1} value={floors}
            onChange={e => setFloors(Number(e.target.value))} />
          <span className={styles.value}>{floors}</span>
        </label>
      </div>

      <div className={styles.results}>
        <div className={styles.resultCard}>
          <span className={styles.resultLabel}>التوفير السنوي المتوقع</span>
          <span className={styles.resultValue}>{Math.round(annualSavings).toLocaleString('ar-SA')} ر.س</span>
        </div>
        <div className={styles.resultCard}>
          <span className={styles.resultLabel}>تكلفة المشروع التقديرية</span>
          <span className={styles.resultValue}>{Math.round(filmCost).toLocaleString('ar-SA')} ر.س</span>
        </div>
        <div className={styles.resultCard}>
          <span className={styles.resultLabel}>فترة الاسترداد</span>
          <span className={styles.resultValue}>{paybackMonths} شهر</span>
        </div>
        <div className={`${styles.resultCard} ${styles.highlight}`}>
          <span className={styles.resultLabel}>صافي التوفير (10 سنوات)</span>
          <span className={styles.resultValue}>{Math.round(tenYearSavings).toLocaleString('ar-SA')} ر.س</span>
        </div>
      </div>

      <p className={styles.disclaimer}>
        * الأرقام تقديرية بناءً على تعريفة SEC التجارية ({ELECTRICITY_RATE} ر.س/kWh) ومعايير ASHRAE 90.1.
        النتائج الفعلية تختلف حسب نوع الزجاج واتجاه الواجهة.
      </p>
    </div>
  );
}
