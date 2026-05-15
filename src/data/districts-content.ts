// ═══ AzelCore.com — District-Specific Content (FAQ + Paragraphs) ═══
// كل حي له 3 أسئلة FAQ فريدة + فقرة تعريفية — لا تتكرر مع FAQs العامة

import type { JeddahDistrict } from './local-jeddah';

export interface DistrictFAQ {
  question: string;
  answer: string;
  questionEn?: string;
  answerEn?: string;
}

export interface DistrictContent {
  /** فقرة وصفية فريدة عن الحي وعلاقته بالتظليل */
  localParagraph: string;
  localParagraphEn?: string;
  /** 3 أسئلة FAQ محلية مخصصة */
  faqs: DistrictFAQ[];
  /** نصيحة خبير مخصصة للحي */
  expertTip: string;
  expertTipEn?: string;
}

export const districtsContent: Record<string, DistrictContent> = {
  'al-rawdah': {
    localParagraph: 'حي الروضة من أرقى أحياء شمال جدة، يتميز بقربه من الكورنيش (3 كم) مما يرفع نسبة الرطوبة لـ 78% والتآكل الملحي. سيارات الحي الفاخرة (لكزس، مرسيدس، BMW) تحتاج حماية مضاعفة من الملوحة البحرية التي تتغلغل في طبقات الفيلم الرخيص خلال أشهر.',
    localParagraphEn: `Al-Rawdah is one of the most prestigious neighborhoods in north Jeddah. Its proximity to the Corniche (3 km) raises humidity to 78% and increases salt corrosion. Luxury cars (Lexus, Mercedes, BMW) need double protection from marine salinity that penetrates cheap films within months.`,
    faqs: [
      { question: 'هل الملوحة في حي الروضة تأثر على التظليل؟', answer: 'نعم، قرب الروضة من البحر (3 كم) يرفع التآكل الملحي. الأفلام العادية تتقشر خلال 8-12 شهر. النانو سيراميك مقاوم للملوحة ويدوم 10+ سنوات مع ضمان.', questionEn: `Does salinity in Al-Rawdah affect window tinting?`, answerEn: `Yes, proximity to the sea (3 km) increases salt corrosion. Regular films peel within 8-12 months. Nano Ceramic is salt-resistant and lasts 10+ years with warranty.` },
      { question: 'كم سعر تظليل لكزس ES في حي الروضة؟', answer: 'تظليل لكزس ES بنانو سيراميك في الروضة يبدأ من 1,400 ر.س شامل طبقة حماية ملحية. السعر يشمل ضمان 10 سنوات ضد التقشر وتغير اللون.', questionEn: `How much is it to tint a Lexus ES in Al-Rawdah?`, answerEn: `Tinting a Lexus ES with Nano Ceramic starts at 1,400 SAR, including a salt protection layer. Includes a 10-year warranty against peeling and color fading.` },
      { question: 'هل تقدمون خدمة متنقلة لحي الروضة؟', answer: 'نعم، نوفر خدمة تظليل متنقلة لحي الروضة وشمال جدة. الفني يصل خلال 30-45 دقيقة. التركيب يتم في موقف مظلل أو جراج.', questionEn: `Do you offer mobile service for Al-Rawdah?`, answerEn: `Yes, we provide mobile tinting for Al-Rawdah and north Jeddah. The technician arrives within 30-45 minutes. Installation is done in a shaded parking or garage.` },
    ],
    expertTip: 'لسكان الروضة: اختاروا فيلم بطبقة Anti-Salt Corrosion — الرطوبة 78% تسرّع تآكل الأفلام العادية 3 أضعاف مقارنة بالأحياء الداخلية.',
    expertTipEn: `For Al-Rawdah residents: Choose a film with an Anti-Salt Corrosion layer — 78% humidity accelerates the corrosion of regular films 3 times faster than inland neighborhoods.`,
  },
  'al-hamdaniya': {
    localParagraph: 'حي الحمدانية في شرق جدة يبعد 25 كم عن البحر — يعني ملوحة أقل لكن حرارة أعلى (42°م). أغلب سكان الحي يستخدمون سيارات عملية (كامري، أكسنت) ويحتاجون حلول تظليل اقتصادية بأداء عالي.',
    localParagraphEn: `Al-Hamdaniya in east Jeddah is 25 km away from the sea — meaning less salinity but higher heat (42°C). Most residents drive practical cars (Camry, Accent) and need economical tinting solutions with high performance.`,
    faqs: [
      { question: 'أي فيلم أنسب لحي الحمدانية الحار؟', answer: 'الحمدانية من أحر أحياء جدة (42°م). ننصح بـ 3M CR70 — يحجب 70% من الحرارة بسعر مناسب. الأفلام الكربونية أيضاً خيار اقتصادي جيد.', questionEn: `Which film is best for hot Al-Hamdaniya?`, answerEn: `Al-Hamdaniya is one of the hottest neighborhoods (42°C). We recommend 3M CR70 — blocks 70% of heat at an affordable price. Carbon films are also a good economical choice.` },
      { question: 'هل التظليل يفرق في استهلاك البنزين بالحمدانية؟', answer: 'نعم، الحمدانية حرارتها عالية والمكيف يشتغل أكثر. التظليل يقلل حرارة المقصورة من 75°م لـ 42°م = المكيف يشتغل أقل = توفير 15-20% بنزين.', questionEn: `Does tinting save fuel in Al-Hamdaniya?`, answerEn: `Yes, with high heat, the AC works harder. Tinting reduces cabin temperature from 75°C to 42°C = less AC work = 15-20% fuel savings.` },
      { question: 'كم سعر تظليل كامري في الحمدانية؟', answer: 'تظليل تويوتا كامري بفيلم 3M CR70 يبدأ من 900 ر.س. النانو سيراميك من 1,200 ر.س. كل الأسعار شاملة الضمان والتركيب.', questionEn: `What is the tinting price for a Camry in Al-Hamdaniya?`, answerEn: `Tinting a Camry with 3M CR70 starts at 900 SAR. Nano Ceramic from 1,200 SAR. All prices include warranty and installation.` },
    ],
    expertTip: 'لسكان الحمدانية: الحرارة هي العدو الأول — ركزوا على نسبة حجب IR أعلى من 90%. الملوحة منخفضة فما تحتاجون طبقة حماية ملحية.',
    expertTipEn: `For Al-Hamdaniya residents: Heat is the primary enemy — focus on an IR rejection rate above 90%. Salinity is low so you don't need a salt protection layer.`,
  },
  'al-safa': {
    localParagraph: 'حي الصفا يقع في قلب جدة، حي راقٍ بسيارات فاخرة (رنج روفر، بورشه، لكزس LX). الرطوبة 70% مع تآكل ملحي متوسط. سكان الصفا يبحثون عن أعلى جودة بدون تنازل — لذلك XPEL PRIME XR Plus هو الخيار الأمثل.',
    localParagraphEn: `Al-Safa is in the heart of Jeddah, an upscale neighborhood with luxury cars (Range Rover, Porsche, Lexus LX). Humidity is 70% with moderate salt corrosion. Residents seek the highest quality with no compromise — making XPEL PRIME XR Plus the perfect choice.`,
    faqs: [
      { question: 'ليش XPEL أفضل لسيارات حي الصفا؟', answer: 'XPEL PRIME XR Plus يحجب 98% من الأشعة تحت الحمراء مع وضوح رؤية ممتاز. مثالي لسيارات الصفا الفاخرة اللي تحتاج أعلى أداء بدون تغيير مظهر الزجاج.', questionEn: `Why is XPEL better for Al-Safa cars?`, answerEn: `XPEL PRIME XR Plus blocks 98% of IR rays with excellent optical clarity. Ideal for Al-Safa luxury cars that need top performance without altering glass appearance.` },
      { question: 'هل التظليل يحمي جلد الرنج روفر من التشقق؟', answer: 'التظليل بنانو سيراميك يحجب 99% من أشعة UV المسببة لتشقق الجلد. بدون تظليل، جلد الرنج روفر يفقد 23% من مرونته خلال 6 أشهر في شمس جدة.', questionEn: `Does tinting protect Range Rover leather from cracking?`, answerEn: `Nano Ceramic tint blocks 99% of UV rays that cause leather cracking. Without tint, Range Rover leather loses 23% of its elasticity within 6 months in Jeddah sun.` },
      { question: 'كم يوم يحتاج تظليل بورشه كايين كامل؟', answer: 'تظليل بورشه كايين بـ XPEL PRIME يحتاج 3-4 ساعات فقط. ننصح بعدم تنزيل الزجاج 48 ساعة بعد التركيب حتى يجف اللاصق تماماً.', questionEn: `How many days to tint a full Porsche Cayenne?`, answerEn: `Tinting a Porsche Cayenne with XPEL PRIME takes only 3-4 hours. We advise not to roll down windows for 48 hours until the adhesive dries completely.` },
    ],
    expertTip: 'لسكان الصفا: سياراتكم الفاخرة تستحق أفضل حماية. XPEL PRIME XR Plus + PPF على الكابوت = حماية شاملة تحافظ على قيمة السيارة عند البيع.',
    expertTipEn: `For Al-Safa residents: Your luxury cars deserve the best protection. XPEL PRIME XR Plus + PPF on the hood = comprehensive protection that maintains resale value.`,
  },
  'al-naeem': {
    localParagraph: 'حي النعيم شمال جدة — حي عائلي بمستوى اقتصادي متوسط-عالي. الرطوبة 75% والقرب من البحر (4 كم) يعني ملوحة عالية. LLumar CTX يوفر التوازن المثالي بين الجودة والسعر لسكان النعيم.',
    localParagraphEn: `Al-Naeem in north Jeddah is a family neighborhood with a medium-high economic level. 75% humidity and proximity to the sea (4 km) mean high salinity. LLumar CTX offers the perfect balance between quality and price.`,
    faqs: [
      { question: 'ما الفرق بين LLumar و 3M لسكان النعيم؟', answer: 'LLumar CTX يتفوق في مقاومة الملوحة (مهم للنعيم القريب من البحر). 3M Crystalline أفضل في الوضوح الليلي. كلاهما ممتاز — LLumar أوفر بـ 15-20%.', questionEn: `What is the difference between LLumar and 3M for Al-Naeem?`, answerEn: `LLumar CTX excels in salt resistance (important near the sea). 3M Crystalline is better for night visibility. Both are excellent — LLumar is 15-20% cheaper.` },
      { question: 'هل التظليل يحمي عيون الأطفال في السيارة؟', answer: 'نعم. النانو سيراميك يحجب 99% من UV الضارة. مهم جداً لعائلات النعيم — UV Index في جدة يوصل 11+ وهو خطير على عيون وبشرة الأطفال.', questionEn: `Does tinting protect children's eyes in the car?`, answerEn: `Yes. Nano Ceramic blocks 99% of harmful UV rays. Crucial for Al-Naeem families — Jeddah UV Index reaches 11+ which is dangerous for kids.` },
      { question: 'كم سعر تظليل هوندا أكورد في النعيم؟', answer: 'تظليل هوندا أكورد بـ LLumar CTX يبدأ من 1,100 ر.س شامل الضمان. خيار اقتصادي: فيلم كربوني من 700 ر.س.', questionEn: `How much to tint a Honda Accord in Al-Naeem?`, answerEn: `Tinting a Honda Accord with LLumar CTX starts at 1,100 SAR with warranty. Economical choice: Carbon film from 700 SAR.` },
    ],
    expertTip: 'لعائلات النعيم: LLumar CTX يجمع بين حماية UV للأطفال ومقاومة ملوحة البحر — أفضل قيمة مقابل السعر في هذه الفئة.',
    expertTipEn: `For Al-Naeem families: LLumar CTX combines UV protection for kids and sea salt resistance — best value for money in this category.`,
  },
  'al-marwah': {
    localParagraph: 'حي المروة جنوب جدة — حي شعبي-متوسط مع حرارة عالية (40°م). أغلب السيارات عملية (هايلوكس، باترول، كامري). التآكل الملحي متوسط (8 كم عن البحر). الأفلام الكربونية توفر حماية ممتازة بسعر اقتصادي لسكان المروة.',
    localParagraphEn: `Al-Marwah in south Jeddah is a popular-to-medium neighborhood with high heat (40°C). Most cars are practical (Hilux, Patrol, Camry). Salt corrosion is moderate (8 km from sea). Carbon films offer excellent protection at an economical price.`,
    faqs: [
      { question: 'أرخص تظليل جيد لسيارات حي المروة؟', answer: 'فيلم كربوني بـ 600-800 ر.س يعطي حماية حرارية 60-65% وحماية UV 99%. خيار ممتاز لسيارات المروة العملية. ضمان 5 سنوات.', questionEn: `Cheapest good tinting for Al-Marwah cars?`, answerEn: `Carbon film at 600-800 SAR provides 60-65% heat protection and 99% UV protection. Excellent choice for practical cars. 5-year warranty.` },
      { question: 'هل التظليل يحمي هايلوكس من حر المروة؟', answer: 'التظليل يخفض حرارة مقصورة الهايلوكس من 78°م لـ 42°م. مهم جداً في المروة (40°م) — المكيف يبرد أسرع والمحرك يستهلك وقود أقل.', questionEn: `Does tinting protect a Hilux from Al-Marwah heat?`, answerEn: `Tinting lowers cabin temperature from 78°C to 42°C. Very important in Al-Marwah (40°C) — AC cools faster and engine uses less fuel.` },
      { question: 'هل في فرق بين تظليل النوافذ الجانبية والأمامية؟', answer: 'الزجاج الأمامي يحتاج فيلم بشفافية عالية (70%+ حسب القانون). الجوانب والخلفي ممكن تظليل أغمق (حتى 15%). الأسعار: أمامي فقط 300-500 ر.س.', questionEn: `Is there a difference between side and front window tinting?`, answerEn: `Front windshield needs high transparency (70%+ by law). Sides and rear can be darker (up to 15%). Prices: Front only 300-500 SAR.` },
    ],
    expertTip: 'لسكان المروة: لا تدفعوا زيادة على طبقة حماية ملحية — المسافة عن البحر (8 كم) كافية لتقليل الخطر. ركزوا على حجب الحرارة.',
    expertTipEn: `For Al-Marwah residents: Don't pay extra for a salt protection layer — 8 km distance from the sea is enough to reduce the risk. Focus on heat rejection.`,
  },
  'al-zahra': {
    localParagraph: 'حي الزهراء من أفخم أحياء شمال جدة — على بعد 2 كم فقط من البحر. الرطوبة تصل 80% والتآكل الملحي عالي جداً. سيارات الحي (مرسيدس GLE، BMW X5، أودي Q7) تحتاج فيلم XPEL بمقاومة ملحية ممتدة.',
    localParagraphEn: `Al-Zahra is one of north Jeddah's most luxurious neighborhoods — just 2 km from the sea. Humidity reaches 80% and salt corrosion is very high. Luxury cars (Mercedes GLE, BMW X5, Audi Q7) need XPEL film with extended salt resistance.`,
    faqs: [
      { question: 'هل تآكل الملح يوصل لسيارات حي الزهراء؟', answer: 'نعم، الزهراء على بعد 2 كم من البحر. الرذاذ الملحي يتراكم على الزجاج ويسبب تآكل الأفلام الرخيصة خلال 6 أشهر. XPEL مصمم لمقاومة هذه البيئة.', questionEn: `Does salt corrosion reach Al-Zahra cars?`, answerEn: `Yes, Al-Zahra is just 2 km from the sea. Salt spray accumulates and corrodes cheap films within 6 months. XPEL is designed for this environment.` },
      { question: 'كم سعر تظليل BMW X5 في الزهراء؟', answer: 'تظليل BMW X5 بـ XPEL PRIME يبدأ من 1,800 ر.س. يشمل كل الزجاج + الفتحة السقفية + ضمان 10 سنوات ضد التقشر والملوحة.', questionEn: `Tinting price for a BMW X5 in Al-Zahra?`, answerEn: `BMW X5 with XPEL PRIME starts at 1,800 SAR. Includes all glass + sunroof + 10-year warranty against peeling and salinity.` },
      { question: 'هل التظليل يأثر على كاميرات BMW الذكية؟', answer: 'لا. النانو سيراميك شفاف تماماً للكاميرات والرادارات وأنظمة ADAS. نستخدم قص كمبيوتري دقيق لترك فتحات الكاميرات بدون فيلم.', questionEn: `Does tinting affect BMW smart cameras?`, answerEn: `No. Nano Ceramic is completely transparent to cameras, radars, and ADAS. We use precise computer cutting to leave camera slots open.` },
    ],
    expertTip: 'لسكان الزهراء: اطلبوا شهادة مقاومة الملوحة (Salt Spray Test) مع الفيلم. XPEL يجتاز 1,000+ ساعة اختبار ملحي — الأفلام الرخيصة تفشل بعد 200 ساعة.',
    expertTipEn: `For Al-Zahra residents: Ask for a Salt Spray Test certificate with the film. XPEL passes 1,000+ hours — cheap films fail after 200 hours.`,
  },
  'al-khalidiya': {
    localParagraph: 'حي الخالدية غرب جدة — الأقرب للبحر (1 كم فقط). أعلى رطوبة في المدينة (85%) وأشد تآكل ملحي. سيارات الحي الفاخرة (لكزس LX 600، لاندكروزر، مرسيدس G-Class) تتطلب أعلى مستوى حماية متاح.',
    localParagraphEn: `Al-Khalidiya in west Jeddah is the closest to the sea (just 1 km). Highest humidity (85%) and severest salt corrosion. Luxury cars (Lexus LX 600, Land Cruiser, Mercedes G-Class) demand the highest protection available.`,
    faqs: [
      { question: 'لماذا الخالدية أصعب حي للتظليل في جدة؟', answer: 'الخالدية على بعد 1 كم فقط من البحر — أعلى رطوبة (85%) وأشد ملوحة في جدة. الفيلم العادي يبدأ يتقشر من الأطراف خلال 4-6 أشهر. نانو سيراميك فقط يصمد.', questionEn: `Why is Al-Khalidiya the hardest neighborhood for tinting?`, answerEn: `Just 1 km from the sea — 85% humidity and severe salinity. Regular film peels from the edges within 4-6 months. Only Nano Ceramic survives.` },
      { question: 'كم سعر تظليل لاندكروزر في الخالدية؟', answer: 'تظليل لاندكروزر بنانو سيراميك + طبقة ملحية يبدأ من 1,600 ر.س. XPEL PRIME XR Plus من 2,200 ر.س. كلاهما بضمان 10 سنوات.', questionEn: `Land Cruiser tinting price in Al-Khalidiya?`, answerEn: `Nano Ceramic + salt layer starts at 1,600 SAR. XPEL PRIME XR Plus from 2,200 SAR. Both with 10-year warranty.` },
      { question: 'هل لازم أغسل السيارة بعد المطر في الخالدية؟', answer: 'نعم وبشدة. مطر جدة يحمل ملوحة عالية — لو جف على الفيلم يسبب بقع. اغسل السيارة خلال 24 ساعة من المطر. النانو سيراميك أسهل بالتنظيف من الفيلم العادي.', questionEn: `Do I have to wash the car after rain in Al-Khalidiya?`, answerEn: `Absolutely. Jeddah rain carries high salinity — if it dries on the film it causes stains. Wash within 24 hours. Nano Ceramic is easier to clean.` },
    ],
    expertTip: 'لسكان الخالدية: أنتم في أقسى بيئة ملحية بجدة. لا تساوموا على الجودة — XPEL PRIME + PPF هو الحد الأدنى المقبول لحماية سيارتكم.',
    expertTipEn: `For Al-Khalidiya residents: You are in the harshest saline environment in Jeddah. Don't compromise on quality — XPEL PRIME + PPF is the minimum acceptable.`,
  },
  'al-nuzha': {
    localParagraph: 'حي النزهة شمال جدة — حي عائلي هادئ بمستوى متوسط-عالي. الرطوبة 72% والمسافة عن البحر (6 كم) تعني تآكل ملحي متوسط. 3M Crystalline 70 يوفر أفضل رؤية ليلية — مهم لسكان النزهة الذين يتنقلون مساءً.',
    localParagraphEn: `Al-Nuzha in north Jeddah is a quiet family neighborhood. 72% humidity and 6 km from the sea means moderate salt corrosion. 3M Crystalline 70 provides the best night visibility — crucial for residents who commute at night.`,
    faqs: [
      { question: 'لماذا 3M Crystalline أفضل لسكان النزهة؟', answer: '3M Crystalline 70 يسمح بمرور 70% من الضوء المرئي — أوضح رؤية ليلية ممكنة مع حجب 97% من الحرارة. مثالي للتنقل المسائي في شوارع النزهة.', questionEn: `Why is 3M Crystalline better for Al-Nuzha residents?`, answerEn: `It allows 70% visible light transmission — clearest night visibility while blocking 97% of heat. Ideal for night driving in Al-Nuzha streets.` },
      { question: 'هل التظليل الغامق يخالف القانون في النزهة؟', answer: 'قانون المرور السعودي يسمح بـ 30% VLT كحد أدنى للزجاج الجانبي. الأمامي يجب أن يكون 70%+ شفافية. نلتزم بالمعايير 100% ونوفر شهادة امتثال.', questionEn: `Is dark tinting against the law in Al-Nuzha?`, answerEn: `Saudi traffic law allows 30% VLT minimum for side windows. Front must be 70%+. We comply 100% and provide a compliance certificate.` },
      { question: 'كم سعر تظليل كيا K5 في النزهة؟', answer: 'تظليل كيا K5 بـ 3M Crystalline يبدأ من 1,100 ر.س. خيار LLumar CTX من 950 ر.س. كلاهما يشمل ضمان 7-10 سنوات.', questionEn: `Tinting price for Kia K5 in Al-Nuzha?`, answerEn: `Kia K5 with 3M Crystalline starts at 1,100 SAR. LLumar CTX from 950 SAR. Both include 7-10 year warranties.` },
    ],
    expertTip: 'لسكان النزهة: لو تسوقون كثير بالليل، اختاروا 3M Crystalline — وضوح الرؤية الليلية فيه 30% أعلى من الأفلام الغامقة العادية.',
    expertTipEn: `For Al-Nuzha residents: If you drive a lot at night, choose 3M Crystalline — night visibility is 30% higher than regular dark films.`,
  },
  'al-shati': {
    localParagraph: 'حي الشاطئ — الأفخم والأقرب للبحر (500 متر فقط). رطوبة 88% وأعلى تآكل ملحي. سيارات الحي استثنائية (رولز رويس، بنتلي، مرسيدس S-Class). التظليل هنا ليس رفاهية — بل ضرورة لحماية استثمار قد يتجاوز 500,000 ر.س.',
    localParagraphEn: `Al-Shati is the most luxurious and closest to the sea (just 500 meters). 88% humidity and maximum salt corrosion. Cars here are exceptional (Rolls Royce, Bentley, Mercedes S-Class). Tinting is a necessity to protect investments exceeding 500,000 SAR.`,
    faqs: [
      { question: 'كم تكلفة تظليل رولز رويس في حي الشاطئ؟', answer: 'تظليل رولز رويس بـ XPEL PRIME XR Plus + PPF كامل يبدأ من 3,500 ر.س. يشمل قص كمبيوتري دقيق لكل زجاجة + حماية الفتحة السقفية + ضمان 10 سنوات.', questionEn: `How much to tint a Rolls Royce in Al-Shati?`, answerEn: `Rolls Royce with XPEL PRIME XR Plus + full PPF starts at 3,500 SAR. Includes precise computer cutting + sunroof + 10-year warranty.` },
      { question: 'هل الرطوبة 88% في الشاطئ تدمر التظليل؟', answer: 'الرطوبة 88% + القرب من البحر (500م) = أقسى بيئة في جدة. الأفلام الرخيصة تتلف خلال 3-4 أشهر. XPEL PRIME مصمم خصيصاً لهذه البيئات القاسية ويصمد 10+ سنوات.', questionEn: `Does 88% humidity destroy tinting?`, answerEn: `88% humidity + 500m from the sea = harshest environment. Cheap films ruin in 3-4 months. XPEL PRIME is custom-designed for this and lasts 10+ years.` },
      { question: 'هل التظليل يأثر على أنظمة بنتلي الذكية؟', answer: 'لا. النانو سيراميك خالي 100% من المعادن — لا يؤثر على أنظمة ADAS، الرادار، Head-Up Display، NFC أو أي أنظمة إلكترونية. نستخدم قوالب DAP المخصصة لكل موديل.', questionEn: `Does tinting affect Bentley smart systems?`, answerEn: `No. Nano Ceramic is 100% metal-free — does not affect ADAS, Radar, HUD, NFC or electronics. We use DAP templates for each model.` },
    ],
    expertTip: 'لسكان الشاطئ: سيارتكم استثمار بمئات الآلاف — التظليل يحمي القيمة عند البيع. سيارة بتظليل أصلي تحافظ على 15-20% قيمة إضافية مقارنة بسيارة بدون.',
    expertTipEn: `For Al-Shati residents: Your car is a massive investment — tinting protects its resale value. Original tinting retains 15-20% extra value.`,
  },
  'al-ajaweed': {
    localParagraph: 'حي الأجاويد جنوب جدة — أبعد حي عن البحر (20 كم). الملوحة منخفضة لكن الحرارة شديدة (41°م) مع UV Extreme. سيارات الحي عملية (هايلوكس، صني، أكسنت) وتحتاج حلول تظليل اقتصادية تركز على حجب الحرارة.',
    localParagraphEn: `Al-Ajaweed in south Jeddah is furthest from the sea (20 km). Salinity is low but heat is intense (41°C) with Extreme UV. Cars are practical (Hilux, Sunny, Accent) and need economical solutions focused on heat rejection.`,
    faqs: [
      { question: 'أفضل تظليل اقتصادي لحي الأجاويد؟', answer: 'فيلم 3M CR70 يحجب 70% من الحرارة بسعر يبدأ من 800 ر.س لسيدان. خيار ممتاز لحرارة الأجاويد العالية (41°م) بدون ميزانية كبيرة. ضمان 7 سنوات.', questionEn: `Best economical tint for Al-Ajaweed?`, answerEn: `3M CR70 blocks 70% of heat starting from 800 SAR for sedans. Excellent choice for high heat (41°C) without a big budget. 7-year warranty.` },
      { question: 'هل أحتاج طبقة حماية ملحية في الأجاويد؟', answer: 'لا. الأجاويد بعيد عن البحر (20 كم) والتآكل الملحي منخفض. وفّر المبلغ واستثمره في فيلم بنسبة حجب حرارة أعلى — هذا اللي يفرق في الأجاويد.', questionEn: `Do I need a salt protection layer in Al-Ajaweed?`, answerEn: `No. Al-Ajaweed is 20 km from the sea and salt corrosion is low. Save the money and invest in higher IR rejection — that's what matters here.` },
      { question: 'كم سعر تظليل نيسان صني في الأجاويد؟', answer: 'تظليل نيسان صني بفيلم كربوني من 550 ر.س. بـ 3M CR70 من 750 ر.س. بنانو سيراميك من 1,000 ر.س. كلها بضمان رسمي.', questionEn: `Tinting price for Nissan Sunny in Al-Ajaweed?`, answerEn: `Carbon film from 550 SAR. 3M CR70 from 750 SAR. Nano Ceramic from 1,000 SAR. All with official warranty.` },
    ],
    expertTip: 'لسكان الأجاويد: وفروا فلوس طبقة الملوحة واختاروا فيلم بحجب IR أعلى. حرارة 41°م هي التحدي الحقيقي — مش الملح.',
    expertTipEn: `For Al-Ajaweed residents: Save money on the salt layer and choose a film with higher IR rejection. The 41°C heat is the real challenge — not salt.`,
  },
};
