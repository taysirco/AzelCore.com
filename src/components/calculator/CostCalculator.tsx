'use client';

import { useState, useEffect } from 'react';
import styles from './CostCalculator.module.css';

interface Option {
  id: string;
  label: string;
  priceModifier: number;
}

const CAR_SIZES: Option[] = [
  { id: 'sedan', label: 'سيدان (صغيرة/متوسطة)', priceModifier: 1 },
  { id: 'suv', label: 'جيب SUV (صفين)', priceModifier: 1.2 },
  { id: 'suv-large', label: 'جيب عائلي (3 صفوف)', priceModifier: 1.4 },
];

const FILM_TYPES: Option[] = [
  { id: 'carbon', label: 'فيلم كربوني (اقتصادي)', priceModifier: 600 },
  { id: 'renegade', label: 'جونسون Renegade (كلاسيكي)', priceModifier: 800 },
  { id: 'ceramic-basic', label: 'نانو سيراميك جونسون Marathon', priceModifier: 1100 },
  { id: 'ceramic-johnson', label: 'جونسون Supreme IR ⭐', priceModifier: 1800 },
  { id: 'ceramic-3m', label: '3M Crystalline ⭐ (200+ طبقة نانو)', priceModifier: 2400 },
];

const ADDONS: Option[] = [
  { id: 'sunroof', label: 'فتحة سقف عادية', priceModifier: 150 },
  { id: 'panorama', label: 'سقف بانوراما', priceModifier: 350 },
  { id: 'salt-protect', label: 'طبقة حماية ضد الملوحة (لأحياء البحر)', priceModifier: 200 },
];

export default function CostCalculator() {
  const [carSize, setCarSize] = useState<string>('sedan');
  const [filmType, setFilmType] = useState<string>('ceramic-basic');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState({ min: 0, max: 0 });
  const [copied, setCopied] = useState(false);

  const calculatePrice = () => {
    setIsCalculating(true);
    setShowResult(false);
    
    // Simulate complex calculation for behavioral metrics (Time on Page)
    setTimeout(() => {
      const sizeMod = CAR_SIZES.find(s => s.id === carSize)?.priceModifier || 1;
      const basePrice = FILM_TYPES.find(f => f.id === filmType)?.priceModifier || 0;
      
      let addonsPrice = 0;
      selectedAddons.forEach(id => {
        addonsPrice += ADDONS.find(a => a.id === id)?.priceModifier || 0;
      });

      const totalBase = (basePrice * sizeMod) + addonsPrice;
      
      setEstimatedPrice({
        min: Math.floor(totalBase * 0.9),
        max: Math.floor(totalBase * 1.1)
      });
      
      setIsCalculating(false);
      setShowResult(true);
    }, 1500);
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
    setShowResult(false);
  };

  const copyResult = () => {
    const text = `عزل كور - التسعيرة المبدئية: من ${estimatedPrice.min} إلى ${estimatedPrice.max} ر.س`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `مرحباً عزل كور، استعملت الحاسبة في موقعكم وهذه تسعيرتي المبدئية:\n` +
      `- حجم السيارة: ${CAR_SIZES.find(s => s.id === carSize)?.label}\n` +
      `- نوع الفيلم: ${FILM_TYPES.find(f => f.id === filmType)?.label}\n` +
      `- السعر التقريبي: ${estimatedPrice.min} - ${estimatedPrice.max} ر.س\n\n` +
      `أريد حجز موعد لتأكيد السعر.`
    );
  };

  return (
    <div className={styles.calculatorCard}>
      <div className={styles.section}>
        <h3>1. حجم السيارة</h3>
        <div className={styles.optionsGrid}>
          {CAR_SIZES.map(size => (
            <button 
              key={size.id} 
              className={`${styles.optionBtn} ${carSize === size.id ? styles.active : ''}`}
              onClick={() => { setCarSize(size.id); setShowResult(false); }}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>2. نوع العزل الحراري</h3>
        <div className={styles.optionsGrid}>
          {FILM_TYPES.map(film => (
            <button 
              key={film.id} 
              className={`${styles.optionBtn} ${filmType === film.id ? styles.active : ''}`}
              onClick={() => { setFilmType(film.id); setShowResult(false); }}
            >
              {film.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>3. إضافات (اختياري)</h3>
        <div className={styles.optionsGrid}>
          {ADDONS.map(addon => (
            <button 
              key={addon.id} 
              className={`${styles.optionBtn} ${selectedAddons.includes(addon.id) ? styles.active : ''}`}
              onClick={() => toggleAddon(addon.id)}
            >
              {addon.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.actionSection}>
        <button 
          className={styles.calcBtn} 
          onClick={calculatePrice} 
          disabled={isCalculating}
        >
          {isCalculating ? 'جاري المعالجة وعرض السعر...' : 'احسب التكلفة التقديرية'}
        </button>
      </div>

      {showResult && (
        <div className={styles.resultBox}>
          <h4>التكلفة التقديرية</h4>
          <div className={styles.priceRange}>
            <span className={styles.currency}>ر.س</span>
            <span className={styles.price}>{estimatedPrice.min} - {estimatedPrice.max}</span>
          </div>
          <p className={styles.disclaimer}>* هذا السعر مبدئي. قد يختلف حسب الموديل الفعلي وحالة الزجاج.</p>
          
          <div className={styles.resultActions}>
            <button className={styles.copyBtn} onClick={copyResult}>
              {copied ? '✅ تم نسخ السعر' : '📋 نسخ التسعيرة'}
            </button>
            <a 
              href={`https://api.whatsapp.com/send/?phone=966564612017&text=${getWhatsAppMessage()}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappBtn}
            >
              📱 حجز موعد بالواتساب
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
