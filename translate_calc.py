import re

with open('src/app/[locale]/calculator/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
"""const calculatorSchema = {""",
"""const getCalculatorSchema = (isAr: boolean) => ({""")

content = content.replace(
"""  name: 'حاسبة تكلفة العزل وتظليل السيارات — عزل كور',
  url: `${SITE_URL}/calculator`,
  description: 'أداة ذكية لحساب التكلفة التقديرية لتظليل وعزل سيارتك بأفلام النانو سيراميك وجونسون في جدة.',""",
"""  name: isAr ? 'حاسبة تكلفة العزل وتظليل السيارات — عزل كور' : 'Car Tinting Cost Calculator — AzelCore',
  url: `${SITE_URL}/calculator`,
  description: isAr ? 'أداة ذكية لحساب التكلفة التقديرية لتظليل وعزل سيارتك بأفلام النانو سيراميك وجونسون في جدة.' : 'A smart tool to calculate the estimated cost of car tinting and insulation with nano-ceramic and Johnson films in Jeddah.',""")

content = content.replace(
"""  }
};""",
"""  }
});""")

content = content.replace(
"""      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />""",
"""      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getCalculatorSchema(isAr)) }} />""")

content = content.replace(
"""          <h1 className={styles.title}>حاسبة تكلفة العزل</h1>
          <p className={styles.subtitle}>
            احسب التكلفة التقديرية لتظليل وعزل سيارتك في ثوانٍ.
          </p>""",
"""          <h1 className={styles.title}>{isAr ? 'حاسبة تكلفة العزل' : 'Insulation Cost Calculator'}</h1>
          <p className={styles.subtitle}>
            {isAr ? 'احسب التكلفة التقديرية لتظليل وعزل سيارتك في ثوانٍ.' : 'Calculate the estimated cost to tint and insulate your car in seconds.'}
          </p>""")

content = content.replace(
"""          <ServiceSummary summary="استخدم حاسبة عزل كور الذكية لمعرفة التكلفة التقريبية لتظليل سيارتك بأفلام النانو سيراميك والكربون. الأسعار تعتمد على حجم السيارة ونوع الفيلم المختار." />""",
"""          <ServiceSummary summary={isAr ? "استخدم حاسبة عزل كور الذكية لمعرفة التكلفة التقريبية لتظليل سيارتك بأفلام النانو سيراميك والكربون. الأسعار تعتمد على حجم السيارة ونوع الفيلم المختار." : "Use the smart AzelCore calculator to get an estimated cost for tinting your car with nano-ceramic and carbon films. Prices depend on the car size and chosen film type."} />""")

content = content.replace(
"""            <CostCalculator />""",
"""            <CostCalculator isAr={isAr} />""")

with open('src/app/[locale]/calculator/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

with open('src/components/calculator/CostCalculator.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
"""export default function CostCalculator() {""",
"""export default function CostCalculator({ isAr = true }: { isAr?: boolean }) {""")

content = content.replace(
"""const CAR_SIZES: Option[] = [
  { id: 'sedan', label: 'سيدان (صغيرة/متوسطة)', priceModifier: 1 },
  { id: 'suv', label: 'جيب SUV (صفين)', priceModifier: 1.2 },
  { id: 'suv-large', label: 'جيب عائلي (3 صفوف)', priceModifier: 1.4 },
];""",
"""const getCarSizes = (isAr: boolean): Option[] => [
  { id: 'sedan', label: isAr ? 'سيدان (صغيرة/متوسطة)' : 'Sedan (Small/Mid-size)', priceModifier: 1 },
  { id: 'suv', label: isAr ? 'جيب SUV (صفين)' : 'SUV (2 Rows)', priceModifier: 1.2 },
  { id: 'suv-large', label: isAr ? 'جيب عائلي (3 صفوف)' : 'Family SUV (3 Rows)', priceModifier: 1.4 },
];""")

content = content.replace(
"""const FILM_TYPES: Option[] = [
  { id: 'carbon', label: 'فيلم كربوني (اقتصادي)', priceModifier: 600 },
  { id: 'renegade', label: 'جونسون Renegade (كلاسيكي)', priceModifier: 800 },
  { id: 'ceramic-basic', label: 'نانو سيراميك جونسون Marathon', priceModifier: 1100 },
  { id: 'ceramic-johnson', label: 'جونسون Supreme IR ⭐', priceModifier: 1800 },
  { id: 'ceramic-3m', label: '3M Crystalline ⭐ (200+ طبقة نانو)', priceModifier: 2400 },
];""",
"""const getFilmTypes = (isAr: boolean): Option[] => [
  { id: 'carbon', label: isAr ? 'فيلم كربوني (اقتصادي)' : 'Carbon Film (Economy)', priceModifier: 600 },
  { id: 'renegade', label: isAr ? 'جونسون Renegade (كلاسيكي)' : 'Johnson Renegade (Classic)', priceModifier: 800 },
  { id: 'ceramic-basic', label: isAr ? 'نانو سيراميك جونسون Marathon' : 'Johnson Marathon Nano-Ceramic', priceModifier: 1100 },
  { id: 'ceramic-johnson', label: isAr ? 'جونسون Supreme IR ⭐' : 'Johnson Supreme IR ⭐', priceModifier: 1800 },
  { id: 'ceramic-3m', label: isAr ? '3M Crystalline ⭐ (200+ طبقة نانو)' : '3M Crystalline ⭐ (200+ Nano layers)', priceModifier: 2400 },
];""")

content = content.replace(
"""const ADDONS: Option[] = [
  { id: 'sunroof', label: 'فتحة سقف عادية', priceModifier: 150 },
  { id: 'panorama', label: 'سقف بانوراما', priceModifier: 350 },
  { id: 'salt-protect', label: 'طبقة حماية ضد الملوحة (لأحياء البحر)', priceModifier: 200 },
];""",
"""const getAddons = (isAr: boolean): Option[] => [
  { id: 'sunroof', label: isAr ? 'فتحة سقف عادية' : 'Standard Sunroof', priceModifier: 150 },
  { id: 'panorama', label: isAr ? 'سقف بانوراما' : 'Panoramic Roof', priceModifier: 350 },
  { id: 'salt-protect', label: isAr ? 'طبقة حماية ضد الملوحة (لأحياء البحر)' : 'Anti-Salt Protection (Coastal Areas)', priceModifier: 200 },
];""")

content = content.replace(
"""      const sizeMod = CAR_SIZES.find(s => s.id === carSize)?.priceModifier || 1;
      const basePrice = FILM_TYPES.find(f => f.id === filmType)?.priceModifier || 0;
      
      let addonsPrice = 0;
      selectedAddons.forEach(id => {
        addonsPrice += ADDONS.find(a => a.id === id)?.priceModifier || 0;
      });""",
"""      const sizeMod = getCarSizes(isAr).find(s => s.id === carSize)?.priceModifier || 1;
      const basePrice = getFilmTypes(isAr).find(f => f.id === filmType)?.priceModifier || 0;
      
      let addonsPrice = 0;
      selectedAddons.forEach(id => {
        addonsPrice += getAddons(isAr).find(a => a.id === id)?.priceModifier || 0;
      });""")

content = content.replace(
"""  const copyResult = () => {
    const text = `عزل كور - التسعيرة المبدئية: من ${estimatedPrice.min} إلى ${estimatedPrice.max} ر.س`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };""",
"""  const copyResult = () => {
    const text = isAr 
      ? `عزل كور - التسعيرة المبدئية: من ${estimatedPrice.min} إلى ${estimatedPrice.max} ر.س`
      : `AzelCore - Estimated Quote: from ${estimatedPrice.min} to ${estimatedPrice.max} SAR`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };""")

content = content.replace(
"""  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `مرحباً عزل كور، استعملت الحاسبة في موقعكم وهذه تسعيرتي المبدئية:\n` +
      `- حجم السيارة: ${CAR_SIZES.find(s => s.id === carSize)?.label}\n` +
      `- نوع الفيلم: ${FILM_TYPES.find(f => f.id === filmType)?.label}\n` +
      `- السعر التقريبي: ${estimatedPrice.min} - ${estimatedPrice.max} ر.س\n\n` +
      `أريد حجز موعد لتأكيد السعر.`
    );
  };""",
"""  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      isAr 
        ? `مرحباً عزل كور، استعملت الحاسبة في موقعكم وهذه تسعيرتي المبدئية:\n` +
          `- حجم السيارة: ${getCarSizes(true).find(s => s.id === carSize)?.label}\n` +
          `- نوع الفيلم: ${getFilmTypes(true).find(f => f.id === filmType)?.label}\n` +
          `- السعر التقريبي: ${estimatedPrice.min} - ${estimatedPrice.max} ر.س\n\n` +
          `أريد حجز موعد لتأكيد السعر.`
        : `Hello AzelCore, I used the calculator on your website and here is my estimated quote:\n` +
          `- Car Size: ${getCarSizes(false).find(s => s.id === carSize)?.label}\n` +
          `- Film Type: ${getFilmTypes(false).find(f => f.id === filmType)?.label}\n` +
          `- Estimated Price: ${estimatedPrice.min} - ${estimatedPrice.max} SAR\n\n` +
          `I would like to book an appointment to confirm the price.`
    );
  };""")

content = content.replace(
"""        <h3>1. حجم السيارة</h3>
        <div className={styles.optionsGrid}>
          {CAR_SIZES.map(size => (""",
"""        <h3>1. {isAr ? 'حجم السيارة' : 'Car Size'}</h3>
        <div className={styles.optionsGrid}>
          {getCarSizes(isAr).map(size => (""")

content = content.replace(
"""        <h3>2. نوع العزل الحراري</h3>
        <div className={styles.optionsGrid}>
          {FILM_TYPES.map(film => (""",
"""        <h3>2. {isAr ? 'نوع العزل الحراري' : 'Insulation Type'}</h3>
        <div className={styles.optionsGrid}>
          {getFilmTypes(isAr).map(film => (""")

content = content.replace(
"""        <h3>3. إضافات (اختياري)</h3>
        <div className={styles.optionsGrid}>
          {ADDONS.map(addon => (""",
"""        <h3>3. {isAr ? 'إضافات (اختياري)' : 'Add-ons (Optional)'}</h3>
        <div className={styles.optionsGrid}>
          {getAddons(isAr).map(addon => (""")

content = content.replace(
"""          {isCalculating ? 'جاري المعالجة وعرض السعر...' : 'احسب التكلفة التقديرية'}""",
"""          {isCalculating ? (isAr ? 'جاري المعالجة وعرض السعر...' : 'Processing and fetching price...') : (isAr ? 'احسب التكلفة التقديرية' : 'Calculate Estimated Cost')}""")

content = content.replace(
"""          <h4>التكلفة التقديرية</h4>
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
          </div>""",
"""          <h4>{isAr ? 'التكلفة التقديرية' : 'Estimated Cost'}</h4>
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
          </div>""")

with open('src/components/calculator/CostCalculator.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

