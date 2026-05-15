content = """// ═══ AzelCore — Local FAQ Section ═══
// Hijazi dialect + conversational Arabic for voice search intent capture
// Targets: Google Voice Search, Siri, Google Assistant (ar-SA locale)

export interface VoiceFAQ {
  id: string;
  question: string;
  questionEn?: string;
  answer: string;
  answerEn?: string;
  voiceIntent: string; // the raw voice query this targets
}

export const localVoiceFaqs: VoiceFAQ[] = [
  {
    id: 'voice-1',
    question: 'ليش التظليل يقشر في الصيف بجدة؟',
    questionEn: 'Why does window tint peel in Jeddah\\'s summer?',
    answer: 'التقشر يحصل لسببين: (1) فيلم رخيص مصبوغ ما يتحمل حرارة جدة اللي توصل 50°C على الزجاج، (2) تركيب غلط بدون تنظيف عميق. الحل: استخدم نانو سيراميك أمريكي (جونسون أو 3M) — ما يقشر أبداً لأن الجزيئات السيراميكية مندمجة في الفيلم مش مجرد طبقة فوقية. عندنا ضمان 10 سنوات ضد التقشر.',
    answerEn: 'Peeling happens for two reasons: (1) cheap dyed film that cannot withstand Jeddah\\'s heat reaching 50°C on the glass, (2) poor installation without deep cleaning. The solution: Use American nano-ceramic (Johnson or 3M) — it never peels because the ceramic particles are embedded in the film, not just a top layer. We offer a 10-year warranty against peeling.',
    voiceIntent: 'تظليل يقشر صيف جدة',
  },
  {
    id: 'voice-2',
    question: 'وش أحسن محل تظليل سيارات في جدة؟',
    questionEn: 'What is the best car tinting shop in Jeddah?',
    answer: 'أحسن محل هو اللي يعطيك: (1) فيلم أصلي بشهادة ضمان من المصنع مش من المحل، (2) قص كمبيوتر بدون شفرة، (3) اختبار بكاميرا حرارية FLIR يثبت لك الفرق بالأرقام. عزل كور وكيل جونسون و 3M المعتمد في جدة — كل فيلم برقم تسلسلي وشهادة رسمية.',
    answerEn: 'The best shop gives you: (1) Original film with a factory warranty certificate, not just a shop warranty, (2) Computer cut without blades, (3) Testing with a FLIR thermal camera to prove the difference with numbers. AzelCore is the authorized dealer for Johnson and 3M in Jeddah — every film comes with a serial number and official certificate.',
    voiceIntent: 'أحسن محل تظليل جدة',
  },
  {
    id: 'voice-3',
    question: 'التظليل يخرب من شمس جدة؟',
    questionEn: 'Does window tint degrade from Jeddah\\'s sun?',
    answer: 'التظليل العادي (المصبوغ) يخرب خلال 6 أشهر — يتحول بنفسجي ويتفقع. لكن النانو سيراميك مصمم خصيصاً لحرارة الخليج: يتحمل لـ 15 سنة بدون تغيير لون. السر في الجزيئات السيراميكية اللي ما تتأثر بالأشعة فوق البنفسجية.',
    answerEn: 'Regular (dyed) tint degrades within 6 months — turns purple and bubbles. But nano-ceramic is specifically designed for Gulf heat: it lasts up to 15 years without color change. The secret is the ceramic particles that are unaffected by UV rays.',
    voiceIntent: 'تظليل يخرب شمس',
  },
  {
    id: 'voice-4',
    question: 'كم يقعد التظليل يجف بجدة؟ متى أنزل الزجاج؟',
    questionEn: 'How long does window tint take to dry in Jeddah? When can I roll down the windows?',
    answer: 'في جدة بسبب الرطوبة العالية (60-80%)، التظليل يحتاج 3-5 أيام يجف تماماً. خلال الفترة هذي: لا تنزّل الزجاج، لا تغسل السيارة، لا تشغل المساحات. الفقاعات الصغيرة طبيعية وتختفي لحالها. في الشتاء ممكن يحتاج أسبوع.',
    answerEn: 'In Jeddah, due to high humidity (60-80%), window tint needs 3-5 days to dry completely. During this period: do not roll down the windows, do not wash the car, and do not use the wipers. Small bubbles are normal and will disappear on their own. In winter, it might take a week.',
    voiceIntent: 'تظليل سيارة يجف كم يوم',
  },
  {
    id: 'voice-5',
    question: 'النانو سيراميك يستاهل فلوسه ولا الكربوني يكفي؟',
    questionEn: 'Is nano-ceramic worth the money, or is carbon tint enough?',
    answer: 'النانو سيراميك يحجب 97% حرارة مقابل 55% للكربوني — يعني فرق 42% في الحماية. في حرارة جدة (48°C صيفاً)، المكيف يشتغل أقل بكثير = توفير بنزين + عمر مكيف أطول. سعر النانو أعلى (1500-3000 ر.س مقابل 600-1200)، لكنه يدوم 10-15 سنة مقابل 5-8 للكربوني. الحساب الذكي: النانو أوفر على المدى الطويل.',
    answerEn: 'Nano-ceramic blocks 97% of heat compared to 55% for carbon — a 42% difference in protection. In Jeddah\\'s heat (48°C in summer), the AC runs much less = fuel savings + longer AC life. Nano is pricier (1500-3000 SAR vs. 600-1200), but lasts 10-15 years compared to 5-8 for carbon. Smart calculation: Nano is more economical in the long run.',
    voiceIntent: 'نانو سيراميك ولا كربوني',
  },
  {
    id: 'voice-6',
    question: 'وين ألقى وكيل جونسون الرسمي في جدة؟',
    questionEn: 'Where can I find the official Johnson dealer in Jeddah?',
    answer: 'عزل كور (AzelCore) وكيل معتمد لأفلام جونسون و 3M الأمريكية في جدة. موقعنا على طريق الملك فهد، حي الزهراء. جونسون عندنا 5 خطوط إنتاج: Supreme IR (97% حجب)، InsulatIR، Marathon، وRay Guard. و 3M عندنا Crystalline (200+ طبقة نانو) و Ceramic IR و Color Stable و FX Premium.',
    answerEn: 'AzelCore is an authorized dealer for American Johnson and 3M films in Jeddah. We are located on King Fahad Road, Al-Zahra District. We offer 5 Johnson product lines: Supreme IR (97% blockage), InsulatIR, Marathon, and Ray Guard. For 3M, we carry Crystalline (200+ nano layers), Ceramic IR, Color Stable, and FX Premium.',
    voiceIntent: 'وكيل جونسون جدة',
  },
  {
    id: 'voice-7',
    question: 'التظليل يأثر على كاميرات وحساسات السيارة؟',
    questionEn: 'Does window tint affect car cameras and sensors?',
    answer: 'الأفلام المعدنية القديمة ممكن تأثر على الرادار وحساسات الركن. لكن النانو سيراميك والكربوني ما يأثرون أبداً — لأنهم خاليين من المعادن 100%. الهاتف، GPS، Apple Pay، مفتاح السيارة الذكي، كاميرا الرجوع — كلها تشتغل طبيعي بدون أي تداخل.',
    answerEn: 'Old metallic films might interfere with radar and parking sensors. But nano-ceramic and carbon films have zero effect — because they are 100% metal-free. Phone, GPS, Apple Pay, smart key, backup camera — all function perfectly without any interference.',
    voiceIntent: 'تظليل يأثر كاميرا سيارة حساسات',
  },
  {
    id: 'voice-8',
    question: 'أبي أظلل سيارتي كامل بجدة كم يكلفني؟',
    questionEn: 'I want to tint my entire car in Jeddah, how much does it cost?',
    answer: 'الأسعار حسب نوع الفيلم والسيارة: سيدان نانو سيراميك: 1,500-2,200 ر.س. SUV نانو سيراميك: 2,000-3,200 ر.س. كربوني: 600-1,200 ر.س. عادي: 200-500 ر.س. السعر يشمل: التركيب + شهادة ضمان رسمية + فاتورة ضريبية. تواصل معنا واتساب للعرض الدقيق حسب موديل سيارتك.',
    answerEn: 'Prices vary by film type and car: Sedan Nano-Ceramic: 1,500-2,200 SAR. SUV Nano-Ceramic: 2,000-3,200 SAR. Carbon: 600-1,200 SAR. Regular: 200-500 SAR. Price includes: Installation + official warranty certificate + tax invoice. Contact us on WhatsApp for an exact quote based on your car model.',
    voiceIntent: 'سعر تظليل سيارة كامل جدة',
  },
];
"""
with open('src/data/frequently-asked-questions.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated frequently-asked-questions.ts")
