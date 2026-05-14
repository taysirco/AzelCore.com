'use client';

import { useState, useEffect } from 'react';
import styles from './CostCalculator.module.css';

interface Option {
  id: string;
  label: string;
  priceModifier: number;
}

const getCarSizes = (isAr: boolean): Option[] => [
  { id: 'sedan', label: isAr ? 'سيدان (صغيرة/متوسطة)' : 'Sedan (Small/Mid-size)', priceModifier: 1 },
  { id: 'suv', label: isAr ? 'جيب SUV (صفين)' : 'SUV (2 Rows)', priceModifier: 1.2 },
  { id: 'suv-large', label: isAr ? 'جيب عائلي (3 صفوف)' : 'Family SUV (3 Rows)', priceModifier: 1.4 },
];

const getFilmTypes = (isAr: boolean): Option[] => [
  { id: 'carbon', label: isAr ? 'فيلم كربوني (اقتصادي)' : 'Carbon Film (Economy)', priceModifier: 600 },
  { id: 'renegade', label: isAr ? 'جونسون Renegade (كلاسيكي)' : 'Johnson Renegade (Classic)', priceModifier: 800 },
  { id: 'ceramic-basic', label: isAr ? 'نانو سيراميك جونسون Marathon' : 'Johnson Marathon Nano-Ceramic', priceModifier: 1100 },
  { id: 'ceramic-johnson', label: isAr ? 'جونسون Supreme IR ⭐' : 'Johnson Supreme IR ⭐', priceModifier: 1800 },
  { id: 'ceramic-3m', label: isAr ? '3M Crystalline ⭐ (200+ طبقة نانو)' : '3M Crystalline ⭐ (200+ Nano layers)', priceModifier: 2400 },
];

const getAddons = (isAr: boolean): Option[] => [
  { id: 'sunroof', label: isAr ? 'فتحة سقف عادية' : 'Standard Sunroof', priceModifier: 150 },
  { id: 'panorama', label: isAr ? 'سقف بانوراما' : 'Panoramic Roof', priceModifier: 350 },
  { id: 'salt-protect', label: isAr ? 'طبقة حماية ضد الملوحة (لأحياء البحر)' : 'Anti-Salt Protection (Coastal Areas)', priceModifier: 200 },
];

export default function CostCalculator({ isAr = true }: { isAr?: boolean }) {
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
      const sizeMod = getCarSizes(isAr).find(s => s.id === carSize)?.priceModifier || 1;
      const basePrice = getFilmTypes(isAr).find(f => f.id === filmType)?.priceModifier || 0;
      
      let addonsPrice = 0;
      selectedAddons.forEach(id => {
        addonsPrice += getAddons(isAr).find(a => a.id === id)?.priceModifier || 0;
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
    const text = isAr 
      ? `عزل كور - التسعيرة المبدئية: من ${estimatedPrice.min} إلى ${estimatedPrice.max} ر.س`
      : `AzelCore - Estimated Quote: from ${estimatedPrice.min} to ${estimatedPrice.max} SAR`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `مرحباً عزل كور، استعملت الحاسبة في موقعكم وهذه تسعيرتي المبدئية:\n` +
      `- حجم السيارة: ${getCarSizes(isAr).find(s => s.id === carSize)?.label}\n` +
      `- نوع الفيلم: ${getFilmTypes(isAr).find(f => f.id === filmType)?.label}\n` +
      `- السعر التقريبي: ${estimatedPrice.min} - ${estimatedPrice.max} ر.س\n\n` +
      `أريد حجز موعد لتأكيد السعر.`
    );
  };

  return (
    <div className={styles.calculatorCard}>
      <div className={styles.section}>
        <h3>1. {isAr ? 'حجم السيارة' : 'Car Size'}</h3>
        <div className={styles.optionsGrid}>
          {getCarSizes(isAr).map(size => (
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
        <h3>2. {isAr ? 'نوع العزل الحراري' : 'Insulation Type'}</h3>
        <div className={styles.optionsGrid}>
          {getFilmTypes(isAr).map(film => (
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
        <h3>3. {isAr ? 'إضافات (اختياري)' : 'Add-ons (Optional)'}</h3>
        <div className={styles.optionsGrid}>
          {getAddons(isAr).map(addon => (
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
          {isCalculating ? (isAr ? 'جاري المعالجة وعرض السعر...' : 'Processing and fetching price...') : (isAr ? 'احسب التكلفة التقديرية' : 'Calculate Estimated Cost')}
        </button>
      </div>

      {showResult && (
        <div className={styles.resultBox}>
          <h4>{isAr ? 'التكلفة التقديرية' : 'Estimated Cost'}</h4>
          <div className={styles.priceRange}>
            <span className={styles.currency}>{isAr ? 'ر.س' : 'SAR'}</span>
            <span className={styles.price}>{estimatedPrice.min} - {estimatedPrice.max}</span>
          </div>
          <p className={styles.disclaimer}>{isAr ? '* هذا السعر مبدئي. قد يختلف حسب الموديل الفعلي وحالة الزجاج.' : '* This price is an estimate. It may vary based on the actual car model and glass condition.'}</p>
          
          <div className={styles.resultActions}>
            <button className={styles.copyBtn} onClick={copyResult}>
              {copied ? (isAr ? '✅ تم نسخ السعر' : '✅ Price Copied') : (isAr ? '📋 نسخ التسعيرة' : '📋 Copy Quote')}
            </button>
            <a 
              href={`https://api.whatsapp.com/send/?phone=966564612017&text=${getWhatsAppMessage()}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappBtn}
            >
              📱 {isAr ? 'حجز موعد بالواتساب' : 'Book Appointment via WhatsApp'}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
