// ═══ AzelCore.com — KSA Cities Content (Building Insulation) ═══

export interface CityContent {
  paragraph: string;
  paragraphEn?: string;
  savingsEstimate: string;
  savingsEstimateEn?: string;
  recommendedFilm: string;
  recommendedFilmEn?: string;
  faqs: { question: string; answer: string; questionEn?: string; answerEn?: string }[];
}

export const citiesContent: Record<string, CityContent> = {
  riyadh: {
    paragraph: 'الرياض أحر عاصمة خليجية (44°م صيفاً) مع رطوبة منخفضة جداً (15%). الأبراج التجارية والفلل الفاخرة تستهلك طاقة هائلة للتكييف. عزل واجهات المباني الزجاجية يوفر 35-45% من فاتورة الكهرباء.',
    paragraphEn: `Riyadh is the hottest Gulf capital (44°C in summer) with very low humidity (15%). Commercial towers and luxury villas consume massive energy for cooling. Insulating glass facades saves 35-45% on electricity bills.`,
    savingsEstimate: 'برج مكاتب 20 طابق: توفير ~450,000 ر.س/سنة | فيلا 400م²: توفير ~12,000 ر.س/سنة',
    savingsEstimateEn: `20-story office tower: Save ~450,000 SAR/year | 400m² villa: Save ~12,000 SAR/year`,
    recommendedFilm: 'Sputtered Multilayer — حجب 82% TSER مع شفافية عالية للواجهات التجارية',
    recommendedFilmEn: `Sputtered Multilayer — 82% TSER rejection with high transparency for commercial facades`,
    faqs: [
      { question: 'كم توفر عزل واجهات مبنى تجاري في الرياض؟', answer: 'مبنى مكاتب 2,400م² واجهة زجاجية في الرياض يوفر ~37,500 ر.س/شهر صيفاً. ROI خلال 8-11 شهر.', questionEn: `How much does insulating a commercial building in Riyadh save?`, answerEn: `A 2,400m² glass facade office building in Riyadh saves ~37,500 SAR/month in summer. ROI within 8-11 months.` },
      { question: 'هل عزل الزجاج يكفي بدون عزل الجدران في الرياض؟', answer: 'النوافذ تنقل 45-65% من الحرارة. عزل الزجاج وحده يقلل حمل التكييف 35%. مع عزل الجدران يصل التوفير لـ 55%.', questionEn: `Is glass insulation enough without wall insulation in Riyadh?`, answerEn: `Windows transfer 45-65% of heat. Glass insulation alone reduces cooling load by 35%. With wall insulation, savings reach 55%.` },
      { question: 'أي فيلم أنسب لحرارة الرياض الجافة؟', answer: 'حرارة الرياض جافة (15% رطوبة) — لا تحتاج مقاومة ملحية. ركز على حجب TSER عالي. Sputtered Multilayer (82% حجب) هو الأفضل.', questionEn: `Which film is best for Riyadh's dry heat?`, answerEn: `Riyadh's heat is dry (15% humidity) — no salt resistance needed. Focus on high TSER rejection. Sputtered Multilayer (82% rejection) is the best.` },
    ],
  },
  dammam: {
    paragraph: 'الدمام مدينة ساحلية برطوبة عالية (70%) وواجهات بحرية زجاجية ضخمة. التآكل الملحي يتطلب أفلام مقاومة. المجمعات التجارية على الكورنيش تحقق أعلى عائد من العزل.',
    paragraphEn: `Dammam is a coastal city with high humidity (70%) and massive glass sea-facing facades. Salt corrosion requires resistant films. Commercial complexes on the Corniche achieve the highest return from insulation.`,
    savingsEstimate: 'مجمع تجاري بحري: توفير ~280,000 ر.س/سنة | شقة واجهة بحرية: توفير ~6,000 ر.س/سنة',
    savingsEstimateEn: `Sea-facing commercial complex: Save ~280,000 SAR/year | Sea-facing apartment: Save ~6,000 SAR/year`,
    recommendedFilm: 'نانو سيراميك مقاوم للملوحة — حجب 75% TSER + حماية من التآكل البحري',
    recommendedFilmEn: `Salt-resistant Nano Ceramic — 75% TSER rejection + marine corrosion protection`,
    faqs: [
      { question: 'هل ملوحة بحر الدمام تأثر على فيلم العزل؟', answer: 'نعم. الواجهات على الكورنيش تتعرض لرذاذ ملحي مباشر. يجب استخدام فيلم بشهادة Salt Spray Resistance 1,000+ ساعة.', questionEn: `Does Dammam sea salinity affect the insulation film?`, answerEn: `Yes. Facades on the Corniche are exposed to direct salt spray. A film with Salt Spray Resistance 1,000+ hours certificate must be used.` },
      { question: 'كم تكلفة عزل واجهة مجمع في الدمام؟', answer: 'تكلفة عزل 1,000م² واجهة زجاجية: 50,000-100,000 ر.س حسب نوع الفيلم. ROI خلال 10-14 شهر.', questionEn: `How much does it cost to insulate a complex facade in Dammam?`, answerEn: `Cost of insulating a 1,000m² glass facade: 50,000-100,000 SAR depending on the film type. ROI within 10-14 months.` },
      { question: 'هل العزل يحمي من رطوبة الدمام؟', answer: 'الفيلم يحجب الحرارة ويقلل التكثف على الزجاج الداخلي. يقلل مشاكل العفن والرطوبة في المباني الساحلية بنسبة 40%.', questionEn: `Does insulation protect against Dammam humidity?`, answerEn: `The film blocks heat and reduces condensation on the inner glass. It reduces mold and moisture problems in coastal buildings by 40%.` },
    ],
  },
  makkah: {
    paragraph: 'مكة المكرمة تستقبل ملايين الحجاج سنوياً. الفنادق والأبراج السكنية حول الحرم تحتاج عزل متخصص يوازن بين حجب الحرارة (43°م) والحفاظ على الإطلالة.',
    paragraphEn: `Makkah receives millions of pilgrims annually. Hotels and residential towers around the Haram need specialized insulation that balances heat rejection (43°C) and preserves the view.`,
    savingsEstimate: 'فندق 15 طابق: توفير ~380,000 ر.س/سنة | برج سكني: توفير ~180,000 ر.س/سنة',
    savingsEstimateEn: `15-story hotel: Save ~380,000 SAR/year | Residential tower: Save ~180,000 SAR/year`,
    recommendedFilm: 'فيلم حراري شفاف (Low-E) — حجب حرارة عالي مع شفافية تحافظ على إطلالة الحرم',
    recommendedFilmEn: `Transparent Thermal Film (Low-E) — High heat rejection with transparency that preserves the Haram view`,
    faqs: [
      { question: 'هل العزل يأثر على إطلالة الحرم من الفنادق؟', answer: 'لا. أفلام Low-E الحديثة شفافية 70%+ — تحجب الحرارة بدون تغيير المنظر. مثالية لفنادق مكة المطلة على الحرم.', questionEn: `Does insulation affect the Haram view from hotels?`, answerEn: `No. Modern Low-E films have 70%+ transparency — blocking heat without altering the view. Ideal for Makkah hotels overlooking the Haram.` },
      { question: 'كم يوفر عزل فندق في مكة؟', answer: 'فندق 200 غرفة: توفير 30,000+ ر.س/شهر صيفاً. مع الإشغال العالي في مواسم الحج والعمرة، العائد يتضاعف.', questionEn: `How much does insulating a hotel in Makkah save?`, answerEn: `200-room hotel: Save 30,000+ SAR/month in summer. With high occupancy during Hajj and Umrah seasons, the return doubles.` },
      { question: 'هل العزل متوافق مع اشتراطات أمانة مكة؟', answer: 'نعم. جميع أفلامنا متوافقة مع كود البناء SBC 601 ومعايير أمانة العاصمة المقدسة للمباني الفندقية.', questionEn: `Is the insulation compliant with Makkah Municipality requirements?`, answerEn: `Yes. All our films are compliant with the Saudi Building Code SBC 601 and the Holy Capital Municipality standards for hotel buildings.` },
    ],
  },
  madinah: {
    paragraph: 'المدينة المنورة بمناخها الجاف (20% رطوبة) و42°م صيفاً. الفنادق حول المسجد النبوي والمجمعات التجارية هي الأكثر استفادة من العزل الحراري.',
    paragraphEn: `Madinah has a dry climate (20% humidity) and 42°C in summer. Hotels around the Prophet's Mosque and commercial complexes benefit the most from thermal insulation.`,
    savingsEstimate: 'فندق قرب الحرم: توفير ~250,000 ر.س/سنة | مجمع تجاري: توفير ~120,000 ر.س/سنة',
    savingsEstimateEn: `Hotel near the Haram: Save ~250,000 SAR/year | Commercial complex: Save ~120,000 SAR/year`,
    recommendedFilm: 'Sputtered Multilayer — أداء عالي في الحرارة الجافة بدون حاجة لمقاومة ملحية',
    recommendedFilmEn: `Sputtered Multilayer — High performance in dry heat without the need for salt resistance`,
    faqs: [
      { question: 'هل عزل المباني في المدينة يختلف عن جدة؟', answer: 'نعم. المدينة جافة (20% رطوبة) — لا تحتاج أفلام مقاومة ملوحة. التركيز على حجب الحرارة فقط = خيارات أوفر بـ 15-20%.', questionEn: `Is building insulation in Madinah different from Jeddah?`, answerEn: `Yes. Madinah is dry (20% humidity) — no salt-resistant films needed. Focus on heat rejection only = 15-20% cheaper options.` },
      { question: 'كم مدة تركيب عزل فندق في المدينة؟', answer: 'فندق 100 غرفة: 3-5 أيام عمل. نعمل خارج أوقات الذروة لتقليل الإزعاج. لا نحتاج إخلاء الغرف.', questionEn: `How long does it take to insulate a hotel in Madinah?`, answerEn: `100-room hotel: 3-5 working days. We work outside peak hours to minimize disturbance. No room evacuation needed.` },
      { question: 'هل تخدمون المدينة المنورة من جدة؟', answer: 'نعم. فريقنا المتخصص يسافر للمدينة للمشاريع الكبيرة (500م²+). نوفر تقييم حراري مجاني + عرض سعر خلال 48 ساعة.', questionEn: `Do you serve Madinah from Jeddah?`, answerEn: `Yes. Our specialized team travels to Madinah for large projects (500m²+). We provide a free thermal assessment + quotation within 48 hours.` },
    ],
  },
  taif: {
    paragraph: 'الطائف أبرد مدن الحجاز (32°م صيفاً). الفلل والمنتجعات السياحية تستفيد من العزل لتقليل التكييف صيفاً والتدفئة شتاءً — عزل مزدوج الاتجاه.',
    paragraphEn: `Taif is the coolest city in the Hijaz (32°C in summer). Villas and tourist resorts benefit from insulation to reduce cooling in summer and heating in winter — dual-direction insulation.`,
    savingsEstimate: 'فيلا 350م²: توفير ~5,500 ر.س/سنة | منتجع سياحي: توفير ~90,000 ر.س/سنة',
    savingsEstimateEn: `350m² villa: Save ~5,500 SAR/year | Tourist resort: Save ~90,000 SAR/year`,
    recommendedFilm: 'فيلم عزل مزدوج (Dual-Reflective) — يحجب الحرارة صيفاً ويحتفظ بالدفء شتاءً',
    recommendedFilmEn: `Dual-Reflective Film — Rejects heat in summer and retains warmth in winter`,
    faqs: [
      { question: 'هل العزل مفيد في الطائف رغم برودتها؟', answer: 'جداً. العزل يعمل بالاتجاهين — يحجب الحرارة صيفاً ويمنع تسرب الدفء شتاءً. توفير على مدار السنة.', questionEn: `Is insulation useful in Taif despite its cool weather?`, answerEn: `Very. Insulation works both ways — blocking summer heat and preventing winter warmth from escaping. Year-round savings.` },
      { question: 'أي فيلم يناسب منتجعات الطائف؟', answer: 'Dual-Reflective Film — عاكس من الخارج (يحجب الشمس) وشفاف من الداخل (يحافظ على المنظر الطبيعي). مثالي للمنتجعات.', questionEn: `Which film is suitable for Taif resorts?`, answerEn: `Dual-Reflective Film — Reflective from the outside (blocks sun) and transparent from the inside (maintains the natural view). Ideal for resorts.` },
      { question: 'هل تخدمون الطائف؟', answer: 'نعم. الطائف ضمن نطاق خدمتنا. فريق التركيب يصل خلال يوم عمل واحد من جدة.', questionEn: `Do you serve Taif?`, answerEn: `Yes. Taif is within our service area. The installation team arrives within one working day from Jeddah.` },
    ],
  },
  tabuk: {
    paragraph: 'تبوك بمناخها الصحراوي (38°م صيفاً) ومشاريع نيوم القريبة. المباني الحكومية والسكنية الجديدة تحتاج عزل متوافق مع معايير البناء الحديثة.',
    paragraphEn: `Tabuk has a desert climate (38°C in summer) and nearby NEOM projects. New government and residential buildings need insulation compliant with modern building standards.`,
    savingsEstimate: 'مبنى حكومي: توفير ~85,000 ر.س/سنة | مجمع سكني: توفير ~45,000 ر.س/سنة',
    savingsEstimateEn: `Government building: Save ~85,000 SAR/year | Residential complex: Save ~45,000 SAR/year`,
    recommendedFilm: 'نانو سيراميك — أداء متوازن للمناخ الصحراوي الجاف',
    recommendedFilmEn: `Nano Ceramic — Balanced performance for dry desert climate`,
    faqs: [
      { question: 'هل تخدمون مشاريع نيوم وتبوك؟', answer: 'نعم. نخدم تبوك والمناطق المحيطة بما فيها مشاريع نيوم. فريق متخصص للمشاريع الكبيرة.', questionEn: `Do you serve NEOM and Tabuk projects?`, answerEn: `Yes. We serve Tabuk and surrounding areas including NEOM projects. Specialized team for large projects.` },
      { question: 'كم تكلفة عزل مبنى حكومي في تبوك؟', answer: 'تبدأ من 45 ر.س/م² للفيلم الكربوني و120 ر.س/م² للنانو سيراميك. نوفر تقييم وعرض سعر مجاني.', questionEn: `How much does it cost to insulate a government building in Tabuk?`, answerEn: `Starts from 45 SAR/m² for Carbon film and 120 SAR/m² for Nano Ceramic. We provide free assessment and quotation.` },
      { question: 'هل العزل يتحمل عواصف تبوك الرملية؟', answer: 'نعم. الأفلام الحديثة مقاومة للخدش (Scratch-Resistant Layer). لا تتأثر بالرمال أو الغبار العادي.', questionEn: `Can the insulation withstand Tabuk sandstorms?`, answerEn: `Yes. Modern films are Scratch-Resistant. They are not affected by normal sand or dust.` },
    ],
  },
  abha: {
    paragraph: 'أبها أبرد مدن المملكة (28°م صيفاً) مع رطوبة معتدلة (45%). الفلل السياحية والمنتجعات الجبلية تستفيد من عزل مزدوج الاتجاه.',
    paragraphEn: `Abha is the coolest city in the Kingdom (28°C in summer) with moderate humidity (45%). Tourist villas and mountain resorts benefit from dual-direction insulation.`,
    savingsEstimate: 'فيلا سياحية: توفير ~4,000 ر.س/سنة | منتجع: توفير ~60,000 ر.س/سنة',
    savingsEstimateEn: `Tourist villa: Save ~4,000 SAR/year | Resort: Save ~60,000 SAR/year`,
    recommendedFilm: 'فيلم Low-E مزدوج — حماية من البرد شتاءً والحرارة صيفاً',
    recommendedFilmEn: `Dual Low-E Film — Protection from winter cold and summer heat`,
    faqs: [
      { question: 'هل أبها تحتاج عزل حراري؟', answer: 'نعم. رغم اعتدال الصيف، الشتاء بارد (5°م ليلاً). العزل يحتفظ بالدفء داخل المبنى = توفير تدفئة كبير.', questionEn: `Does Abha need thermal insulation?`, answerEn: `Yes. Despite the mild summer, winter is cold (5°C at night). Insulation retains warmth inside the building = massive heating savings.` },
      { question: 'أي فيلم يناسب مناخ أبها الجبلي؟', answer: 'Low-E Film — يعكس الحرارة الداخلية شتاءً ويحجب الشمس صيفاً. أداء ممتاز في المناخ المتقلب.', questionEn: `Which film suits Abha mountain climate?`, answerEn: `Low-E Film — Reflects internal heat in winter and blocks sun in summer. Excellent performance in fluctuating climates.` },
      { question: 'هل تصلون أبها من جدة؟', answer: 'نعم. فريقنا يخدم أبها للمشاريع 300م²+. التقييم مجاني والتركيب خلال 2-3 أيام.', questionEn: `Do you reach Abha from Jeddah?`, answerEn: `Yes. Our team serves Abha for 300m²+ projects. Free assessment and installation within 2-3 days.` },
    ],
  },
  khobar: {
    paragraph: 'الخبر مدينة ساحلية شرقية برطوبة عالية (65%). الأبراج البحرية والمجمعات التجارية على الكورنيش تحتاج أفلام مقاومة للملوحة والرطوبة.',
    paragraphEn: `Khobar is an eastern coastal city with high humidity (65%). Sea-facing towers and commercial complexes on the Corniche need salt and moisture resistant films.`,
    savingsEstimate: 'برج بحري: توفير ~320,000 ر.س/سنة | مجمع تجاري: توفير ~150,000 ر.س/سنة',
    savingsEstimateEn: `Sea-facing tower: Save ~320,000 SAR/year | Commercial complex: Save ~150,000 SAR/year`,
    recommendedFilm: 'نانو سيراميك مقاوم للملوحة — مثل الدمام لكن مع تركيز على الواجهات البحرية',
    recommendedFilmEn: `Salt-resistant Nano Ceramic — Like Dammam but with a focus on sea-facing facades`,
    faqs: [
      { question: 'هل خدمات العزل متوفرة في الخبر؟', answer: 'نعم. نخدم الخبر والدمام والظهران. فريق متخصص في المنطقة الشرقية للمشاريع التجارية والسكنية.', questionEn: `Are insulation services available in Khobar?`, answerEn: `Yes. We serve Khobar, Dammam, and Dhahran. A specialized team in the Eastern Province for commercial and residential projects.` },
      { question: 'كم يوفر عزل برج سكني بحري في الخبر؟', answer: 'برج 15 طابق واجهة بحرية: توفير ~26,000 ر.س/شهر صيفاً. استرداد التكلفة خلال 12-16 شهر.', questionEn: `How much does insulating a sea-facing residential tower in Khobar save?`, answerEn: `15-story sea-facing tower: Save ~26,000 SAR/month in summer. Cost recovery within 12-16 months.` },
      { question: 'هل الفيلم يحمي من انعكاس الشمس على البحر؟', answer: 'نعم. الأفلام المضادة للوهج (Anti-Glare) تقلل انعكاس الشمس على البحر بنسبة 60%. راحة أكبر للسكان.', questionEn: `Does the film protect from sun reflection on the sea?`, answerEn: `Yes. Anti-Glare films reduce sun reflection on the sea by 60%. Greater comfort for residents.` },
    ],
  },
  jubail: {
    paragraph: 'الجبيل مدينة صناعية مع مبانٍ سكنية وصناعية. الرطوبة 60% والقرب من المنشآت الصناعية يتطلب أفلام متينة مقاومة للكيماويات.',
    paragraphEn: `Jubail is an industrial city with residential and industrial buildings. 60% humidity and proximity to industrial facilities require durable chemical-resistant films.`,
    savingsEstimate: 'مبنى صناعي: توفير ~180,000 ر.س/سنة | مجمع سكني: توفير ~70,000 ر.س/سنة',
    savingsEstimateEn: `Industrial building: Save ~180,000 SAR/year | Residential complex: Save ~70,000 SAR/year`,
    recommendedFilm: 'فيلم صناعي متين (Safety + Thermal) — حماية حرارية + أمان ضد الكسر',
    recommendedFilmEn: `Durable Industrial Film (Safety + Thermal) — Thermal protection + shatter safety`,
    faqs: [
      { question: 'هل الأفلام تتحمل البيئة الصناعية في الجبيل؟', answer: 'نعم. نوفر أفلام Safety Film بسماكة 200+ ميكرون — مقاومة للكيماويات والحرارة العالية. مناسبة للمصانع والمنشآت.', questionEn: `Can the films withstand the industrial environment in Jubail?`, answerEn: `Yes. We provide Safety Films with 200+ microns thickness — resistant to chemicals and high heat. Suitable for factories and facilities.` },
      { question: 'هل العزل يقلل خطر انفجار الزجاج في المصانع؟', answer: 'نعم. Safety Film يحتفظ بشظايا الزجاج عند الكسر — يحمي العمال من الإصابات. متطلب OSHA للمنشآت الصناعية.', questionEn: `Does insulation reduce the risk of glass explosion in factories?`, answerEn: `Yes. Safety Film retains glass shards upon breaking — protecting workers from injuries. An OSHA requirement for industrial facilities.` },
      { question: 'كم تكلفة عزل مستودع في الجبيل؟', answer: 'مستودع 5,000م²: 250,000-400,000 ر.س حسب نوع الفيلم. ROI خلال 18-24 شهر مع توفير تكييف المستودع.', questionEn: `How much does insulating a warehouse in Jubail cost?`, answerEn: `5,000m² warehouse: 250,000-400,000 SAR depending on film type. ROI within 18-24 months with warehouse cooling savings.` },
    ],
  },
  yanbu: {
    paragraph: 'ينبع ميناء صناعي غربي برطوبة عالية (70%). المباني السكنية والصناعية تحتاج حماية من الحرارة والملوحة البحرية.',
    paragraphEn: `Yanbu is a western industrial port with high humidity (70%). Residential and industrial buildings need protection from heat and marine salinity.`,
    savingsEstimate: 'مبنى سكني: توفير ~50,000 ر.س/سنة | منشأة صناعية: توفير ~120,000 ر.س/سنة',
    savingsEstimateEn: `Residential building: Save ~50,000 SAR/year | Industrial facility: Save ~120,000 SAR/year`,
    recommendedFilm: 'نانو سيراميك مقاوم للملوحة + طبقة أمان',
    recommendedFilmEn: `Salt-resistant Nano Ceramic + Safety layer`,
    faqs: [
      { question: 'هل تخدمون ينبع؟', answer: 'نعم. ينبع ضمن نطاق خدمتنا الغربية. الفريق يصل خلال يوم عمل واحد.', questionEn: `Do you serve Yanbu?`, answerEn: `Yes. Yanbu is within our western service area. The team arrives within one working day.` },
      { question: 'أي فيلم يناسب رطوبة ينبع؟', answer: 'نانو سيراميك مقاوم للملوحة — يتحمل رطوبة 70% والرذاذ البحري. ضمان 10-15 سنة.', questionEn: `Which film suits Yanbu humidity?`, answerEn: `Salt-resistant Nano Ceramic — withstands 70% humidity and sea spray. 10-15 year warranty.` },
      { question: 'كم يوفر العزل في ينبع؟', answer: 'مبنى سكني متوسط: توفير 30-40% من فاتورة الكهرباء الصيفية. استرداد التكلفة خلال سنة.', questionEn: `How much does insulation save in Yanbu?`, answerEn: `Average residential building: Save 30-40% on summer electricity bills. Cost recovery within a year.` },
    ],
  },
  najran: {
    paragraph: 'نجران بمناخ صحراوي معتدل (36°م) ورطوبة منخفضة (20%). المباني السكنية تستفيد من عزل اقتصادي بتكلفة منخفضة.',
    paragraphEn: `Najran has a mild desert climate (36°C) and low humidity (20%). Residential buildings benefit from economical low-cost insulation.`,
    savingsEstimate: 'فيلا: توفير ~5,000 ر.س/سنة | مبنى سكني: توفير ~25,000 ر.س/سنة',
    savingsEstimateEn: `Villa: Save ~5,000 SAR/year | Residential building: Save ~25,000 SAR/year`,
    recommendedFilm: 'فيلم كربوني اقتصادي — حجب 60% TSER بسعر مناسب',
    recommendedFilmEn: `Economical Carbon Film — 60% TSER rejection at an affordable price`,
    faqs: [
      { question: 'هل العزل مجدي اقتصادياً في نجران؟', answer: 'نعم. رغم اعتدال المناخ، فاتورة التكييف الصيفية مرتفعة. عزل 10 نوافذ بـ 3,000 ر.س يوفر 5,000+ ر.س/سنة.', questionEn: `Is insulation economically viable in Najran?`, answerEn: `Yes. Despite the mild climate, the summer cooling bill is high. Insulating 10 windows for 3,000 SAR saves 5,000+ SAR/year.` },
      { question: 'هل تخدمون نجران؟', answer: 'نخدم نجران للمشاريع 500م²+. تقييم مجاني عن بعد + زيارة ميدانية للمشاريع الكبيرة.', questionEn: `Do you serve Najran?`, answerEn: `We serve Najran for 500m²+ projects. Free remote assessment + site visit for large projects.` },
      { question: 'أي فيلم أوفر لنجران؟', answer: 'فيلم كربوني — 45 ر.س/م² مع ضمان 5 سنوات. أداء جيد في المناخ الجاف المعتدل.', questionEn: `Which film is cheaper for Najran?`, answerEn: `Carbon film — 45 SAR/m² with a 5-year warranty. Good performance in mild dry climates.` },
    ],
  },
  jazan: {
    paragraph: 'جيزان أكثر مدن المملكة رطوبة (75%) مع حرارة معتدلة (35°م). المباني تحتاج عزل يركز على مقاومة الرطوبة والتكثف.',
    paragraphEn: `Jazan is the most humid city in the Kingdom (75%) with moderate heat (35°C). Buildings need insulation focused on moisture and condensation resistance.`,
    savingsEstimate: 'مبنى تجاري: توفير ~65,000 ر.س/سنة | منزل: توفير ~4,500 ر.س/سنة',
    savingsEstimateEn: `Commercial building: Save ~65,000 SAR/year | House: Save ~4,500 SAR/year`,
    recommendedFilm: 'نانو سيراميك مضاد للتكثف — يقلل مشاكل الرطوبة الداخلية',
    recommendedFilmEn: `Anti-condensation Nano Ceramic — Reduces internal moisture problems`,
    faqs: [
      { question: 'هل العزل يقلل التكثف في مباني جيزان؟', answer: 'نعم. فيلم العزل يرفع حرارة سطح الزجاج الداخلي — يقلل التكثف 40-50%. يحل مشكلة العفن والرطوبة.', questionEn: `Does insulation reduce condensation in Jazan buildings?`, answerEn: `Yes. Insulation film raises the internal glass surface temperature — reducing condensation by 40-50%. Solves mold and moisture issues.` },
      { question: 'هل تخدمون جيزان؟', answer: 'نعم. نخدم جيزان للمشاريع التجارية والحكومية. فريق متخصص في المناطق عالية الرطوبة.', questionEn: `Do you serve Jazan?`, answerEn: `Yes. We serve Jazan for commercial and government projects. A team specialized in high-humidity areas.` },
      { question: 'كم يكلف عزل منزل في جيزان؟', answer: 'منزل 8 نوافذ: 2,500-4,000 ر.س حسب نوع الفيلم. التوفير السنوي: 4,500+ ر.س.', questionEn: `How much does insulating a house in Jazan cost?`, answerEn: `8-window house: 2,500-4,000 SAR depending on film type. Annual savings: 4,500+ SAR.` },
    ],
  },
  hail: {
    paragraph: 'حائل بمناخ صحراوي قاري — حار صيفاً (37°م) وبارد شتاءً. العزل المزدوج يوفر على مدار السنة.',
    paragraphEn: `Hail has a continental desert climate — hot in summer (37°C) and cold in winter. Dual insulation provides year-round savings.`,
    savingsEstimate: 'فيلا: توفير ~5,500 ر.س/سنة | مبنى: توفير ~30,000 ر.س/سنة',
    savingsEstimateEn: `Villa: Save ~5,500 SAR/year | Building: Save ~30,000 SAR/year`,
    recommendedFilm: 'فيلم Low-E — عزل مزدوج الاتجاه للمناخ القاري',
    recommendedFilmEn: `Low-E Film — Dual-direction insulation for continental climate`,
    faqs: [
      { question: 'هل العزل يفيد في برد حائل؟', answer: 'جداً. Low-E Film يحتفظ بـ 25% حرارة إضافية داخل المبنى شتاءً. توفير تدفئة ملحوظ في ليالي حائل الباردة.', questionEn: `Is insulation useful in Hail cold?`, answerEn: `Very. Low-E Film retains 25% extra heat inside the building in winter. Noticeable heating savings during cold Hail nights.` },
      { question: 'هل تخدمون حائل؟', answer: 'نخدم حائل للمشاريع الكبيرة (500م²+). تقييم مجاني + عرض سعر خلال 72 ساعة.', questionEn: `Do you serve Hail?`, answerEn: `We serve Hail for large projects (500m²+). Free assessment + quotation within 72 hours.` },
      { question: 'كم يوفر العزل سنوياً في حائل؟', answer: 'فيلا متوسطة: 5,500 ر.س/سنة (صيف + شتاء). المناخ القاري يعني توفير مزدوج على التكييف والتدفئة.', questionEn: `How much does insulation save annually in Hail?`, answerEn: `Average villa: 5,500 SAR/year (summer + winter). A continental climate means dual savings on cooling and heating.` },
    ],
  },
  qassim: {
    paragraph: 'القصيم بحرارة شديدة (42°م) ورطوبة منخفضة جداً (15%). المباني الزراعية والسكنية تحتاج عزل يركز على حجب الحرارة.',
    paragraphEn: `Qassim has severe heat (42°C) and very low humidity (15%). Agricultural and residential buildings need insulation focused on heat rejection.`,
    savingsEstimate: 'مزرعة مستودعات: توفير ~40,000 ر.س/سنة | فيلا: توفير ~7,000 ر.س/سنة',
    savingsEstimateEn: `Warehouse farm: Save ~40,000 SAR/year | Villa: Save ~7,000 SAR/year`,
    recommendedFilm: 'Sputtered Multilayer — أعلى حجب حرارة للمناخ الصحراوي الجاف',
    recommendedFilmEn: `Sputtered Multilayer — Highest heat rejection for dry desert climate`,
    faqs: [
      { question: 'هل العزل يحمي المخازن الزراعية في القصيم؟', answer: 'نعم. عزل مستودعات التمور والمحاصيل يحافظ على حرارة مستقرة — يقلل الفاقد ويوفر تكييف المستودع.', questionEn: `Does insulation protect agricultural warehouses in Qassim?`, answerEn: `Yes. Insulating dates and crops warehouses maintains a stable temperature — reducing waste and saving warehouse cooling.` },
      { question: 'هل تخدمون القصيم؟', answer: 'نعم. نخدم بريدة وعنيزة والمناطق المحيطة. متخصصون في المباني الزراعية والتجارية.', questionEn: `Do you serve Qassim?`, answerEn: `Yes. We serve Buraidah, Unaizah, and surrounding areas. Specialists in agricultural and commercial buildings.` },
      { question: 'أي فيلم يتحمل حر القصيم؟', answer: 'Sputtered Multilayer يتحمل 60°م+ بدون تدهور. مصمم للبيئات الصحراوية القاسية. ضمان 15 سنة.', questionEn: `Which film withstands Qassim heat?`, answerEn: `Sputtered Multilayer withstands 60°C+ without degradation. Designed for harsh desert environments. 15-year warranty.` },
    ],
  },
  'al-ahsa': {
    paragraph: 'الأحساء بمناخ حار ورطوبة معتدلة (40%). المباني التراثية والسكنية الحديثة تحتاج حلول عزل تحافظ على الطابع المعماري.',
    paragraphEn: `Al-Ahsa has a hot climate and moderate humidity (40%). Heritage buildings and modern residential units need insulation solutions that preserve the architectural character.`,
    savingsEstimate: 'مبنى تراثي: توفير ~20,000 ر.س/سنة | فيلا حديثة: توفير ~6,000 ر.س/سنة',
    savingsEstimateEn: `Heritage building: Save ~20,000 SAR/year | Modern villa: Save ~6,000 SAR/year`,
    recommendedFilm: 'فيلم شفاف حراري — يحافظ على مظهر المباني التراثية مع حماية حرارية',
    recommendedFilmEn: `Transparent Thermal Film — Preserves heritage building appearance with thermal protection`,
    faqs: [
      { question: 'هل يمكن عزل المباني التراثية في الأحساء؟', answer: 'نعم. أفلام شفافة 80%+ لا تغير مظهر المبنى. متوافقة مع اشتراطات هيئة التراث للمباني التاريخية.', questionEn: `Can heritage buildings be insulated in Al-Ahsa?`, answerEn: `Yes. 80%+ transparent films do not change the building appearance. Compliant with Heritage Commission requirements for historical buildings.` },
      { question: 'هل تخدمون الأحساء؟', answer: 'نعم. نخدم الأحساء والهفوف. فريق متخصص في المباني التراثية والسكنية.', questionEn: `Do you serve Al-Ahsa?`, answerEn: `Yes. We serve Al-Ahsa and Hofuf. A team specialized in heritage and residential buildings.` },
      { question: 'كم يوفر العزل في الأحساء؟', answer: 'فيلا حديثة: توفير 25-35% من فاتورة الكهرباء. مبنى تراثي: توفير 20% مع الحفاظ على المظهر الأصلي.', questionEn: `How much does insulation save in Al-Ahsa?`, answerEn: `Modern villa: Save 25-35% on electricity bills. Heritage building: 20% savings while preserving original appearance.` },
    ],
  },
};
