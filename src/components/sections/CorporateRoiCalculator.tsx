'use client';
import { useState } from 'react';
import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';
import styles from './CorporateRoiCalculator.module.css';

/**
 * Corporate ROI Calculator — B2B Information Gain
 * Calculates HVAC energy savings based on Saudi Building Code (SBC).
 * Designed to attract corporate/enterprise search intent.
 */

const ELECTRICITY_RATE = 0.32; // SAR/kWh (Saudi commercial rate 2026)
const COOLING_SHARE = 0.65; // 65% of electricity = cooling in KSA
const FILM_SAVINGS = 0.38; // 38% cooling reduction (conservative)

export default function CorporateRoiCalculator({ locale = 'ar' }: { locale?: string }) {
  const [area, setArea] = useState(500);
  const [bill, setBill] = useState(15000);
  const [floors, setFloors] = useState(3);

  const dict = getDictionary(locale as Locale);
  const numLocale = locale === 'ar' ? 'ar-SA' : 'en-US';

  const annualCooling = bill * 12 * COOLING_SHARE;
  const annualSavings = annualCooling * FILM_SAVINGS;
  const filmCost = area * floors * 85; // ~85 SAR/m² average
  const paybackMonths = Math.ceil((filmCost / annualSavings) * 12);
  const tenYearSavings = (annualSavings * 10) - filmCost;

  return (
    <div className={styles.calculator} id="roi-calculator">
      <h3 className={styles.title}>{dict.roiCalculator.title}</h3>
      <p className={styles.subtitle}>
        {dict.roiCalculator.subtitle} <strong>ASHRAE 90.1</strong> & <strong>SBC 601</strong>
      </p>

      <div className={styles.inputs}>
        <label className={styles.field}>
          <span>{dict.roiCalculator.glassArea}</span>
          <input type="range" min={100} max={5000} step={50} value={area}
            onChange={e => setArea(Number(e.target.value))} />
          <span className={styles.value}>{area.toLocaleString(numLocale)} {dict.roiCalculator.unit}</span>
        </label>

        <label className={styles.field}>
          <span>{dict.roiCalculator.monthlyBill}</span>
          <input type="range" min={2000} max={100000} step={1000} value={bill}
            onChange={e => setBill(Number(e.target.value))} />
          <span className={styles.value}>{bill.toLocaleString(numLocale)} {dict.roiCalculator.currency}</span>
        </label>

        <label className={styles.field}>
          <span>{dict.roiCalculator.floors}</span>
          <input type="range" min={1} max={30} step={1} value={floors}
            onChange={e => setFloors(Number(e.target.value))} />
          <span className={styles.value}>{floors}</span>
        </label>
      </div>

      <div className={styles.results}>
        <div className={styles.resultCard}>
          <span className={styles.resultLabel}>{dict.roiCalculator.annualSavings}</span>
          <span className={styles.resultValue}>{Math.round(annualSavings).toLocaleString(numLocale)} {dict.roiCalculator.currency}</span>
        </div>
        <div className={styles.resultCard}>
          <span className={styles.resultLabel}>{dict.roiCalculator.projectCost}</span>
          <span className={styles.resultValue}>{Math.round(filmCost).toLocaleString(numLocale)} {dict.roiCalculator.currency}</span>
        </div>
        <div className={styles.resultCard}>
          <span className={styles.resultLabel}>{dict.roiCalculator.paybackPeriod}</span>
          <span className={styles.resultValue}>{paybackMonths} {dict.roiCalculator.paybackUnit}</span>
        </div>
        <div className={`${styles.resultCard} ${styles.highlight}`}>
          <span className={styles.resultLabel}>{dict.roiCalculator.tenYearNet}</span>
          <span className={styles.resultValue}>{Math.round(tenYearSavings).toLocaleString(numLocale)} {dict.roiCalculator.currency}</span>
        </div>
      </div>

      <p className={styles.disclaimer}>
        {dict.roiCalculator.disclaimer} ({ELECTRICITY_RATE} {dict.roiCalculator.currency}/kWh) {dict.roiCalculator.disclaimerSuffix}
      </p>
    </div>
  );
}
