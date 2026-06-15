// ═══ Blog: السيارات الكهربائية (EVs) وتأثير العزل الحراري على مدى البطارية ═══
import type { ArticleModule } from './types';

const article: ArticleModule = {
  ogImage: 'car-tint-heat-comparison.webp',
  serviceLinks: [
    { href: '/car-insulation-jeddah', text: 'تظليل سيارات كهربائية (لوسيد، تيسلا) بجدة', textEn: 'Electric Vehicle Tinting (Lucid, Tesla) in Jeddah' },
    { href: '/thermal-cars', text: 'أفلام النانو سيراميك 100% متوافقة مع أنظمة GPS/Bluetooth', textEn: 'Nano-Ceramic Films 100% Compatible with GPS/Bluetooth' },
    { href: '/contact', text: 'احجز موعد تركيب تظليل EV', textEn: 'Book an EV Tinting Appointment' },
  ],
  content: {
    quickAnswer: 'في السيارات الكهربائية (EVs) مثل تيسلا ولوسيد، نظام التكييف يستمد طاقته مباشرة من بطارية الدفع الرئيسية. في صيف السعودية، تشغيل المكيف بأقصى طاقة لتبريد مقصورة غير معزولة يقلل من مدى القيادة (Range) بنسبة تصل إلى 25-30%. تركيب تظليل نانو سيراميك أصلي يخفض حرارة المقصورة بمقدار 30 درجة مئوية، مما يخفف الحمل عن المكيف ويستعيد ما يصل إلى 15% من مدى البطارية المفقود، بالإضافة لكونه لا يشوش إشارات الأنظمة الذكية (Autopilot/GPS).',
    quickAnswerEn: 'In Electric Vehicles (EVs) like Tesla and Lucid, the AC system draws its power directly from the main propulsion battery. In the Saudi summer, running the AC at maximum power to cool an uninsulated cabin reduces the driving Range by up to 25-30%. Installing original Nano-Ceramic tint lowers the cabin temperature by 30°C, relieving the AC load and recovering up to 15% of the lost battery range, in addition to not interfering with smart system signals (Autopilot/GPS).',
    intro: 'تشهد طرقات المملكة العربية السعودية لعام 2026، وتحديداً مدن مثل جدة والرياض، ثورة صامتة ولكنها متسارعة في تبني السيارات الكهربائية (EVs)، بقيادة علامات رائدة مثل Lucid و Tesla و Porsche Taycan. مع هذا التحول التكنولوجي، يبرز تحدٍ هندسي فريد لم يكن سائقو سيارات البنزين (ICE) يهتمون به كثيراً: "مدى البطارية في ذروة الصيف". في سيارات البنزين، حرارة المحرك الزائدة توفر التدفئة شتاءً، وطاقة المحرك الحركية تدير كمبروسر المكيف صيفاً. أما في السيارات الكهربائية، كل "إلكترون" له ثمن! مكيف الهواء (HVAC) في سيارتك الكهربائية يستنزف الطاقة مباشرة من حزمة البطارية الرئيسية. إذا تركته يعمل بأقصى طاقة لمكافحة شمس جدة الحارقة التي تصل لـ 48°C، فستشاهد عداد المدى (Range) ينهار أمام عينيك. في هذا المقال التقني، سنكشف كيف تحول "التظليل الحراري المتقدم" للسيارات الكهربائية من مجرد "إكسسوار زينة" إلى "تحديث برمجي ميكانيكي (Hardware Upgrade)" ضروري لزيادة المسافة المقطوعة بشحنة واحدة.',
    introEn: 'The roads of Saudi Arabia in 2026, specifically cities like Jeddah and Riyadh, are witnessing a silent but rapid revolution in the adoption of Electric Vehicles (EVs), led by pioneering brands like Lucid, Tesla, and Porsche Taycan. With this technological shift, a unique engineering challenge arises that internal combustion engine (ICE) drivers didn\'t care much about: "Battery Range in Peak Summer." In gasoline cars, excess engine heat provides winter heating, and kinetic engine energy runs the AC compressor in summer. In EVs, however, every "electron" has a price! The HVAC system in your EV drains power directly from the main battery pack. If you leave it running at max capacity to combat Jeddah\'s scorching 48°C sun, you will watch your Range counter collapse before your eyes. In this technical article, we reveal how "Advanced Thermal Tinting" for EVs has transformed from a mere "cosmetic accessory" into a necessary "Hardware Upgrade" to increase the distance traveled on a single charge.',
    table: {
      headers: ['المؤشر التقني (سيارة كهربائية)', 'بدون تظليل (زجاج مكشوف للحرارة)', 'مع تظليل نانو سيراميك (عزل 97% IR)'],
      headersEn: ['Technical Metric (Electric Vehicle)', 'Without Tint (Glass Exposed to Heat)', 'With Nano-Ceramic Tint (97% IR Rejection)'],
      rows: [
        ['استهلاك طاقة المكيف (A/C Power Draw)', 'يعمل بأقصى طاقة (3-5 كيلوواط) بشكل مستمر', 'يعمل بطاقة منخفضة (1-1.5 كيلوواط) للحفاظ على البرودة'],
        ['فقدان مدى البطارية (Range Loss)', 'خسارة من 20% إلى 30% من المدى المعلن', 'استعادة ما يصل إلى 15% من المدى المفقود بسبب الحرارة'],
        ['تبريد المقصورة المسبق (Pre-Conditioning)', 'يستغرق 15 دقيقة ويستنزف طاقة كبيرة', 'يستغرق 4 دقائق فقط قبل الدخول للسيارة'],
        ['حماية البطارية أثناء الوقوف (Overheating)', 'حرارة المقصورة 80°C تضغط على نظام إدارة حرارة البطارية', 'حرارة المقصورة 45°C تقلل استنزاف بطارية الحفظ (Vampire Drain)'],
        ['توافق الإشارات (GPS, 5G, Autopilot)', 'زجاج شفاف (لا مشكلة)', 'تظليل "خالي من المعادن" = 100% توافق وعدم تشويش'],
      ],
      rowsEn: [
        ['AC Power Draw', 'Runs at max power (3-5 kW) continuously', 'Runs at low power (1-1.5 kW) to maintain coolness'],
        ['Battery Range Loss', 'Loss of 20% to 30% of advertised range', 'Recovers up to 15% of range lost to heat'],
        ['Cabin Pre-Conditioning', 'Takes 15 mins and severely drains power', 'Takes only 4 mins before entering the car'],
        ['Battery Protection Parked (Overheating)', '80°C cabin stresses the battery thermal management system', '45°C cabin reduces idle battery drain (Vampire Drain)'],
        ['Signal Compatibility (GPS, 5G, Autopilot)', 'Clear glass (No issue)', '"Metal-Free" tint = 100% compatibility, no interference'],
      ]
    },
    sections: [
      {
        heading: 'المعادلة الفيزيائية: مكيف الـ EV = عدو مدى البطارية الأول',
        headingEn: 'The Physical Equation: EV AC = Battery Range Enemy #1',
        body: 'لفهم حجم المشكلة، يجب أن نعلم أن المحركات الكهربائية ذات كفاءة عالية جداً (تصل لـ 90% مقارنة بـ 25% لمحركات البنزين). هذا يعني أنها لا تولد حرارة مهدرة يمكن استخدامها. لتبريد المقصورة، تستخدم الـ EVs كمبروسر كهربائي عالي الفولتية. في ظروف الصيف القاسية في السعودية، تشغيل المكيف يحتاج إلى ما بين 3 إلى 5 كيلوواط (kW) من الطاقة في الساعة! لتوضيح ذلك: إذا كانت بطارية سيارتك سعتها 75 kWh (مثل تسلا موديل 3 القياسية)، فإن المكيف وحده قد يبتلع 6% من سعة البطارية كل ساعة قيادة في الازدحام المروري ظهراً. النتيجة؟ المدى المتوقع (400 كم) ينكمش فجأة إلى (280 كم) مسبباً ما يسمى بـ "قلق المدى" (Range Anxiety).',
        bodyEn: 'To understand the magnitude of the problem, we must know that electric motors are highly efficient (up to 90% compared to 25% for ICE engines). This means they don\'t generate waste heat to use. To cool the cabin, EVs use a high-voltage electric compressor. In severe Saudi summer conditions, running the AC requires between 3 to 5 kilowatts (kW) of power per hour! To illustrate: If your car battery capacity is 75 kWh (like a Standard Tesla Model 3), the AC alone could swallow 6% of the battery capacity for every hour of noon traffic driving. The result? The expected range (400 km) suddenly shrinks to (280 km) causing what is known as "Range Anxiety."'
      },
      {
        heading: 'كيف يقوم التظليل بـ "استعادة" الكيلومترات المفقودة؟',
        headingEn: 'How Does Tinting "Recover" Lost Kilometers?',
        body: 'السر يكمن في "الطاقة المطلوبة للحفاظ على البرودة" (Maintaining Cooling). إذا قمت بتركيب فيلم نانو سيراميك أصلي (مثل 3M أو Johnson) الذي يطرد 97% من الأشعة تحت الحمراء، فإن المقصورة لا تسخن بسرعة. بعد التبريد الأولي، يقوم كمبروسر المكيف بخفض سرعته لاستهلاك 1 كيلوواط فقط في الساعة (بدلاً من 4 كيلوواط). هذا التوفير الهائل في الطاقة لا يذهب عبثاً، بل يوجه مباشرة إلى عجلات السيارة. الدراسات الميدانية تثبت أن العزل الحراري الممتاز للمقصورة يمكن أن يوفر للسيارة الكهربائية ما بين 10% إلى 15% من المدى الإضافي خلال قيادة النهار في الصيف.',
        bodyEn: 'The secret lies in the "energy required to maintain cooling." If you install an original Nano-Ceramic film (like 3M or Johnson) that rejects 97% of Infrared rays, the cabin won\'t heat up quickly. After initial cooling, the AC compressor slows down to consume only 1 kW per hour (instead of 4 kW). This massive energy savings doesn\'t go to waste; it is routed directly to the car\'s wheels. Field studies prove that excellent cabin thermal insulation can save an electric vehicle between 10% to 15% in additional range during daytime summer driving.'
      },
      {
        heading: 'زجاج الـ EV الضخم: سقف بانورامي = فرن شمسي',
        headingEn: 'The Massive EV Glass: Panoramic Roof = Solar Oven',
        body: 'سيارات مثل تيسلا ولوسيد وآير تشتهر بتصاميمها المستقبلية التي تتضمن مساحات زجاجية هائلة، خاصة "السقف البانورامي الزجاجي بالكامل". بينما يعطي هذا التصميم إحساساً رائعاً بالاتساع، فإنه في جدة يعمل كـ "فرن شمسي" يصب النار على رؤوس الركاب. حتى لو كان زجاج الوكالة ملوناً داكناً (Factory Tinted Glass)، يجب أن تدرك حقيقة هندسية: "الزجاج الملون الداكن للوكالة يحجب الضوء (الوهج)، لكنه لا يحتوي على تكنولوجيا طرد الحرارة (IR)". تركيب فيلم عازل شفاف على هذا السقف الزجاجي الضخم هو ضرورة حتمية للنجاة من صيف السعودية.',
        bodyEn: 'Cars like Tesla, Lucid, and Air are famous for their futuristic designs incorporating massive glass areas, especially the "all-glass panoramic roof." While this design gives a wonderful sense of spaciousness, in Jeddah it acts as a "solar oven" pouring fire on passengers\' heads. Even if the agency glass is dark (Factory Tinted Glass), you must realize an engineering truth: "Dark agency colored glass blocks light (glare), but it contains NO heat-rejection technology (IR)." Installing a clear insulation film on this massive glass roof is an absolute necessity to survive the Saudi summer.'
      },
      {
        heading: 'التحذير الأمني: إياك واستخدام التظليل المعدني (Metallized)',
        headingEn: 'Security Warning: Never Use Metallized Tint',
        body: 'السيارات الكهربائية الحديثة هي أساساً "هواتف ذكية ضخمة" تعتمد كلياً على الإشارات اللاسلكية: (4G/5G لتحديثات النظام OTA، إشارات GPS لنظام القيادة الذاتية Autopilot، وبلوتوث للهاتف لفتح الأبواب). إذا قمت بتركيب "تظليل معدني" (Metallized Tint) أو تظليل رخيص يحتوي على ذرات معدنية ليعكس الحرارة، فإن هذه المعادن ستشكل "قفص فاراداي" يقطع أو يضعف إشارات الراديو بشدة! هذا سيؤدي لتعطل الخرائط، فشل فتح السيارة بجوالك، وانقطاع التحديثات. الحل الوحيد المعتمد للسيارات الكهربائية هو تكنولوجيا "النانو سيراميك" (Nano-Ceramic) الخالية من المعادن بنسبة 100%، والتي توفر عزلاً حرارياً خرافياً دون أي تشويش إلكتروني.',
        bodyEn: 'Modern EVs are essentially "massive smartphones" relying entirely on wireless signals: (4G/5G for OTA system updates, GPS signals for Autopilot self-driving, and Bluetooth to unlock doors via phone). If you install "Metallized Tint" or cheap tint containing metallic particles to reflect heat, these metals will form a "Faraday Cage" severely blocking or weakening radio signals! This will cause map failures, inability to unlock the car with your phone, and interrupted updates. The ONLY approved solution for EVs is 100% metal-free "Nano-Ceramic" technology, which provides phenomenal thermal insulation without any electronic interference.'
      },
      {
        heading: 'استنزاف مصاص الدماء (Vampire Drain) وحماية البطارية',
        headingEn: 'Vampire Drain and Battery Protection',
        body: 'سيارات الـ EVs تحتوي على نظام حماية ذاتي للبطارية (Battery Thermal Management System). عندما تترك سيارتك متوقفة تحت الشمس وتصل حرارة المقصورة والبطارية لدرجات خطيرة (فوق 60°C)، تقوم السيارة أوتوماتيكياً بتشغيل مضخات التبريد والمراوح لحماية خلايا البطارية (الليثيوم-أيون) من التلف. هذا التشغيل الذاتي أثناء وقوف السيارة يستهلك البطارية ببطء، وهو ما يسمى بـ (Vampire Drain). بفضل التظليل الجيد الذي يحافظ على المقصورة باردة، السيارة لن تضطر لتشغيل أنظمة التبريد الطارئة بكثرة، مما يحافظ على نسبة شحن البطارية (SoC) كما تركتها.',
        bodyEn: 'EVs feature an automated Battery Thermal Management System. When you leave your car parked under the sun and the cabin/battery temp reaches critical levels (over 60°C), the car automatically activates cooling pumps and fans to protect the Lithium-ion battery cells from degradation. This self-activation while the car is parked slowly consumes the battery, known as (Vampire Drain). Thanks to good tinting keeping the cabin cooler, the car won\'t need to engage emergency cooling systems as frequently, preserving the State of Charge (SoC) exactly as you left it.'
      }
    ],
    expertReview: {
      author: 'م. أحمد سالم',
      authorEn: 'Eng. Ahmed Salem',
      role: 'أخصائي عزل السيارات الكهربائية (EV) — عزل كور',
      roleEn: 'EV Insulation Specialist — AzelCore',
      rating: 10,
      text: 'ملاك السيارات الكهربائية الجدد يظنون أن التظليل مجرد ترفيه. أقولها بصراحة: التظليل لسيارة لوسيد أو تيسلا في جدة هو استثمار تقني يوازي شراء شاحن سريع منزلي. كل ريال تدفعه في عزل ممتاز، تستعيده كمسافة إضافية على الطرق السريعة وراحة بال من قلق نفاد البطارية بسبب التكييف.',
      textEn: 'New EV owners think tinting is just entertainment. I say it frankly: Tinting a Lucid or Tesla in Jeddah is a technical investment equivalent to buying a home fast charger. Every Riyal paid in excellent insulation, you get back as extra highway mileage and peace of mind from battery depletion anxiety due to AC.'
    },
    faqs: [
      { q: 'هل التظليل يلغي ضمان سيارات تيسلا ولوسيد؟', qEn: 'Does tinting void Tesla and Lucid warranties?', a: 'لا، تركيب التظليل لا يلغي ضمان وكالة السيارات الكهربائية طالما تم بواسطة محترفين، ولم يتسبب في تسرب المياه للإلكترونيات خلف الطبلون أثناء التركيب. في "عزل كور" نستخدم حبال امتصاص مائي دقيقة (Soak Ropes) لحماية إلكترونيات الـ EV الحساسة تماماً.', aEn: 'No, installing tint does not void EV dealership warranties as long as it\'s done by professionals, and doesn\'t cause water to leak into the electronics behind the dashboard during installation. At "AzelCore", we use micro-fiber Soak Ropes to completely protect sensitive EV electronics.' },
      { q: 'هل يمكن تظليل سقف تيسلا موديل 3 / Y الزجاجي بالكامل؟', qEn: 'Can the full glass roof of Tesla Model 3 / Y be tinted?', a: 'نعم بالتأكيد! بل هو الإجراء الأهم في سيارات تيسلا. نقوم بتركيب فيلم عازل بقطعة واحدة (One-Piece Install) لضمان مظهر وكالة خالي من الفواصل، لحجب الوهج الساقط على رؤوس الركاب مباشرة.', aEn: 'Yes absolutely! In fact, it is the most important procedure in Tesla cars. We install a One-Piece insulation film to guarantee a seamless agency look, blocking the glare falling directly onto passengers\' heads.' },
      { q: 'هل فيلم الحماية PPF يؤثر على رادارات وحساسات السيارة الكهربائية؟', qEn: 'Does PPF protection film affect EV radars and sensors?', a: 'أفلام الـ PPF الأصلية التي نستخدمها شفافة للترددات الراديوية ولا تؤثر إطلاقاً على حساسات التوقف (Ultrasonic) أو كاميرات القيادة الذاتية المدمجة في الصدام والمرايا.', aEn: 'The original PPF films we use are transparent to radio frequencies and absolutely do not affect Ultrasonic parking sensors or self-driving cameras integrated into the bumper and mirrors.' }
    ],
    warning: 'السيارات الكهربائية تحتوي على "كمبيوتر رئيسي" خلف الزجاج الأمامي أو أسفل الطبلون. اختيار ورشة زينة عشوائية للتركيب قد يؤدي لانسكاب الماء والصابون على هذا الكمبيوتر، مما يسبب "تلفاً كلياً" (Total Loss) خارج الضمان يكلف عشرات الآلاف. اختر مراكز متخصصة تفهم هندسة الـ EVs.',
    warningEn: 'Electric Vehicles contain a "Main Computer" behind the windshield or below the dashboard. Choosing a random accessory shop for installation may lead to soap water spilling onto this computer, causing an out-of-warranty "Total Loss" costing tens of thousands. Choose specialized centers that understand EV engineering.',
    cta: 'هل تمتلك سيارة كهربائية وتشتكي من نفاذ البطارية السريع في الظهر؟ احجز موعدك الآن في "عزل كور" لتحصين سيارتك بتكنولوجيا النانو سيراميك المتوافقة 100% مع أنظمة الـ EVs.',
    ctaEn: 'Do you own an EV and complain about rapid battery drain at noon? Book your appointment now at "AzelCore" to fortify your car with Nano-Ceramic technology 100% compatible with EV systems.',
  },
};

export default article;
