import type { ArticleModule } from './types';

// SBC 601/602 Building-Glass Compliance Guide: Climate Zones, SHGC & U-Value Limits, Permit Requirements
// Spoke article · authored 2026-06-17 · grounded in real AzelCore data (no fabricated ratings)
const article: ArticleModule = {
  "ogImage": "blog/sbc-601-602-glass-compliance-guide-1.webp",
  "serviceLinks": [
    {
      "href": "/building-glass-insulation",
      "text": "خدمة عزل زجاج المباني — التقييم الحراري والتركيب الاحترافي",
      "textEn": "Building Glass Insulation Service — Thermal Assessment & Professional Installation"
    },
    {
      "href": "/calculator",
      "text": "حاسبة توفير الطاقة والعائد على الاستثمار لمبناك",
      "textEn": "Energy Savings & ROI Calculator for Your Building"
    },
    {
      "href": "/research/ksa-thermal-report-2026",
      "text": "تقرير عزل كور الحراري الميداني 2026 (FLIR T530)",
      "textEn": "AzelCore KSA Thermal Field Report 2026 (FLIR T530)"
    },
    {
      "href": "/blog/building-insulation-saudi-arabia-guide",
      "text": "الدليل الشامل لعزل المباني في السعودية (الأنواع والأسعار)",
      "textEn": "The Complete Building Insulation Guide for Saudi Arabia (Types & Prices)"
    },
    {
      "href": "/blog/vision-2030-energy-efficiency",
      "text": "عزل المباني ورؤية السعودية 2030 لكفاءة الطاقة",
      "textEn": "Building Insulation & Saudi Vision 2030 Energy Efficiency"
    },
    {
      "href": "/blog/commercial-building-tint-jeddah",
      "text": "العزل الحراري للمباني التجارية والمكاتب بجدة",
      "textEn": "Commercial & Office Building Thermal Insulation in Jeddah"
    },
    {
      "href": "/blog/glass-facade-tower-curtain-wall-insulation",
      "text": "عزل الواجهات الزجاجية والأبراج والجدار الستائري",
      "textEn": "Glass Facade, Tower & Curtain-Wall Insulation"
    },
    {
      "href": "/blog/building-insulation-electricity-savings",
      "text": "كيف يوفّر عزل زجاج المباني فاتورة الكهرباء؟",
      "textEn": "How Building Glass Insulation Saves Your Electricity Bill"
    },
    {
      "href": "/blog/window-film-thermal-stress-glass-breakage",
      "text": "الإجهاد الحراري: متى يشكّل الفيلم خطراً على الزجاج القائم",
      "textEn": "Thermal stress: when film is a risk to existing glass"
    }
  ],
  "content": {
    "quickAnswer": "يحكم كود البناء السعودي كفاءة طاقة المباني عبر مسارين: SBC 601 للسكني وSBC 602 للتجاري، ويضبط النوافذ بحدّي SHGC (اكتساب الحرارة الشمسي) وU-value حسب المنطقة المناخية. أفلام النانو سيراميك والعاكسة تخفض SHGC للنوافذ القائمة، لكن القيم الرقمية الرسمية تُؤخذ من نص الكود عبر SASO أو استشاري معتمد.",
    "quickAnswerEn": "The Saudi Building Code governs building energy efficiency through two tracks: SBC 601 (residential) and SBC 602 (commercial), regulating windows via SHGC (Solar Heat Gain Coefficient) and U-value limits that vary by climate zone. Nano-ceramic and reflective films lower the SHGC of existing windows, but the official numeric values must be taken from the code text via SASO or a certified consultant.",
    "intro": "إذا كنت مالكاً لفيلا، أو مطوّراً لمشروع تجاري، أو استشارياً يصمّم واجهة زجاجية في جدة أو الرياض أو الدمام، فإن سؤالاً واحداً صار يحدّد مصير تصميمك: هل تتوافق نوافذك مع كود البناء السعودي لكفاءة الطاقة؟ فمنذ أن أصبح تطبيق الكود إلزامياً تدريجياً ضمن منظومة رؤية السعودية 2030، تحوّل الزجاج من عنصر جمالي إلى عنصر تنظيمي يخضع لحدود رقمية دقيقة في معامل اكتساب الحرارة الشمسي (SHGC) ومعامل الانتقال الحراري (U-value). هذا الدليل، الذي أعدّه محمد الهادي (فني عزل وتظليل معتمد، وكيل جونسون و3M الرسمي في عزل كور بجدة)، لا يكرر شرح أنواع الأفلام وأسعارها — فتلك مغطاة في دليلنا الشامل لعزل المباني — بل يركّز تحديداً على آلية الامتثال: كيف تنقسم المملكة إلى مناطق مناخية، ماذا تعني حدود SHGC وU-value عملياً، أين يقع مسار SBC 601 مقابل SBC 602، وكيف تساعد أفلام العزل المركّبة على النوافذ القائمة في تحسين أداء الغلاف الحراري دون استبدال الزجاج بالكامل. ولأن هذا الموضوع تنظيمي حسّاس، نلتزم بقاعدة صارمة: لا نخترع أي رقم رسمي للكود؛ كل قيمة دقيقة تُؤخذ من النص الرسمي عبر الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) أو من استشاري معتمد.",
    "introEn": "If you own a villa, develop a commercial project, or consult on a glass facade in Jeddah, Riyadh, or Dammam, one question now decides the fate of your design: do your windows comply with the Saudi Building Code for energy efficiency? Since enforcement of the code became progressively mandatory under the Saudi Vision 2030 framework, glass has shifted from an aesthetic element into a regulatory one, governed by precise numeric limits on the Solar Heat Gain Coefficient (SHGC) and the thermal transmittance (U-value). This guide, prepared by Mohammed Al-Hadi (certified insulation and tinting technician, official Johnson and 3M dealer at AzelCore in Jeddah), does not repeat film types and prices — those are covered in our comprehensive building-insulation guide — but focuses specifically on the compliance mechanics: how the Kingdom divides into climate zones, what SHGC and U-value limits mean in practice, where the SBC 601 track sits versus SBC 602, and how films applied to existing windows help improve the thermal envelope without fully replacing the glass. Because this topic is regulatory and sensitive, we follow a strict rule: we invent no official code number; every exact value is taken from the official text via the Saudi Standards, Metrology and Quality Organization (SASO) or a certified consultant.",
    "sections": [
      {
        "heading": "ما هو كود البناء السعودي SBC ولماذا يهم الزجاج؟",
        "headingEn": "What the Saudi Building Code (SBC) Is and Why Glass Matters",
        "body": "كود البناء السعودي (SBC) هو منظومة الأكواد الفنية الموحّدة التي تنظّم تصميم وتنفيذ المباني في المملكة، ويشرف عليها المجلس السعودي للبناء وتُعتمد مواصفاته بالتنسيق مع الهيئة السعودية للمواصفات والمقاييس والجودة (SASO). يغطي الكود مجالات واسعة من الإنشاء والحريق والسباكة، لكن الجزء الذي يهمنا هنا هو أكواد كفاءة الطاقة، التي وُضعت لمعالجة واقع صارخ: المباني السعودية من أعلى المباني استهلاكاً للكهرباء عالمياً، إذ يستهلك التكييف نحو 70% من طاقتها وفق المركز السعودي لكفاءة الطاقة (SEEC).\n\nلماذا يقع الزجاج في قلب هذه المعادلة؟ لأن النافذة هي أضعف نقطة في الغلاف الحراري للمبنى. فبينما تقاوم الجدران الخرسانية المعزولة انتقال الحرارة بشكل جيد، يسمح الزجاج العادي بمرور كمية هائلة من الإشعاع الشمسي — خصوصاً الأشعة تحت الحمراء الحاملة للحرارة — إلى الداخل. لذلك يفرد الكود اهتماماً خاصاً للنوافذ، ويضع لها حدوداً قصوى لكمية الحرارة التي يُسمح بدخولها.\n\nالنقطة الجوهرية التي يجب أن يفهمها كل مالك ومطوّر: الكود لا يقيس \"لون\" الزجاج أو \"درجة تعتيمه\" كما تفعل قوانين تظليل السيارات، بل يقيس أداءه الحراري بأرقام هندسية محددة. مبنى ذو زجاج شفاف تماماً قد يفشل في تحقيق الحد المطلوب، بينما نافذة بفيلم نانو سيراميك شبه شفاف قد تنجح، لأن المعيار هو الأداء لا المظهر. هذا التحوّل من \"المظهر\" إلى \"الأداء\" هو جوهر فهم الامتثال، وهو ما سنفصّله في الأقسام التالية بأرقامه الثلاثة الحاكمة: المنطقة المناخية، وSHGC، وU-value.",
        "bodyEn": "The Saudi Building Code (SBC) is the unified body of technical codes that regulates the design and construction of buildings in the Kingdom, overseen by the Saudi Building Code National Committee and adopted in coordination with the Saudi Standards, Metrology and Quality Organization (SASO). The code spans construction, fire, and plumbing, but the part that concerns us here is the energy-efficiency codes, created to address a stark reality: Saudi buildings are among the highest electricity consumers worldwide, with air conditioning consuming roughly 70% of their energy per the Saudi Energy Efficiency Center (SEEC).\n\nWhy does glass sit at the heart of this equation? Because the window is the weakest point in a building's thermal envelope. While insulated concrete walls resist heat transfer well, ordinary glass lets a massive amount of solar radiation — especially heat-carrying infrared — pass inside. The code therefore pays special attention to windows and sets maximum limits on how much heat is allowed to enter.\n\nThe essential point every owner and developer must grasp: the code does not measure the \"color\" or \"darkness\" of glass the way car-tint laws do; it measures its thermal performance with specific engineering numbers. A building with perfectly clear glass may fail the required limit, while a window with a near-transparent nano-ceramic film may pass, because the criterion is performance, not appearance. This shift from \"appearance\" to \"performance\" is the essence of understanding compliance, which we detail in the following sections through its three governing numbers: the climate zone, SHGC, and U-value."
      },
      {
        "heading": "SBC 601 مقابل SBC 602: السكني والتجاري",
        "headingEn": "SBC 601 vs SBC 602: Residential and Commercial",
        "body": "ينقسم جانب كفاءة الطاقة في كود البناء السعودي إلى مسارين رئيسيين بحسب طبيعة المبنى، ومن الضروري معرفة أيهما ينطبق على مشروعك قبل أي خطوة:\n\nالمسار الأول هو SBC 601 الخاص بكفاءة الطاقة في المباني السكنية. يشمل هذا المسار الفلل والمنازل والشقق السكنية الخاصة. وهو غالباً أبسط من حيث متطلبات الامتثال، إذ تركّز اشتراطاته على الغلاف الحراري للمسكن: عزل الجدران والأسقف، وأداء النوافذ من حيث SHGC وU-value، وأحياناً نسبة الزجاج إلى مساحة الجدار. الهدف هو ضمان أن البيت السكني لا يهدر طاقة التبريد عبر زجاج رديء الأداء.\n\nالمسار الثاني هو SBC 602 الخاص بكفاءة الطاقة في المباني التجارية وغير السكنية. يشمل هذا المسار المكاتب والأبراج والفنادق والمستشفيات والمدارس والمولات والمستودعات. وهو عادةً أكثر صرامة وتفصيلاً، لأن المباني التجارية أكبر حجماً، وغالباً ذات واجهات زجاجية ضخمة، وأنظمة تكييف مركزية ضخمة الاستهلاك. لذلك تتضمن متطلبات SBC 602 جوانب إضافية مثل كفاءة أنظمة التكييف والإضاءة، إلى جانب أداء الغلاف الحراري والزجاج.\n\nالقاعدة العملية: إذا كان مشروعك مسكناً خاصاً، فمرجعك SBC 601؛ وإذا كان أي شيء آخر يُستخدم تجارياً أو مؤسسياً، فمرجعك SBC 602. وكلا المسارين يستندان في أصولهما الفنية إلى معايير دولية معتمدة، أبرزها معيار ASHRAE 90.1 الأمريكي الذي يُعد المرجع العالمي لكفاءة الطاقة في المباني، مع تكييف القيم لتناسب المناخ السعودي القاسي. هذا التمييز بين المسارين مهم لأن القيم الرقمية للحدود قد تختلف بينهما، ولذلك يجب دائماً الرجوع للنص الصحيح للمسار الصحيح.",
        "bodyEn": "The energy-efficiency side of the Saudi Building Code splits into two main tracks based on the nature of the building, and you must know which applies to your project before any step:\n\nThe first track is SBC 601, for energy efficiency in residential buildings. It covers villas, houses, and private residential apartments. It is generally simpler in compliance requirements, focusing on the dwelling's thermal envelope: wall and roof insulation, window performance in terms of SHGC and U-value, and sometimes the window-to-wall ratio. The aim is to ensure a home does not waste cooling energy through poorly performing glass.\n\nThe second track is SBC 602, for energy efficiency in commercial and non-residential buildings. It covers offices, towers, hotels, hospitals, schools, malls, and warehouses. It is usually stricter and more detailed, because commercial buildings are larger, often have massive glass facades, and run central AC systems with enormous consumption. SBC 602 requirements therefore include additional aspects such as the efficiency of HVAC and lighting systems, alongside thermal-envelope and glass performance.\n\nThe practical rule: if your project is a private home, your reference is SBC 601; if it is anything else used commercially or institutionally, your reference is SBC 602. Both tracks draw their technical foundations from adopted international standards, most notably the American ASHRAE 90.1, the global reference for building energy efficiency, with values adapted to the harsh Saudi climate. This distinction matters because the numeric limits may differ between the two tracks, so you must always refer to the correct text for the correct track."
      },
      {
        "heading": "المناطق المناخية في المملكة وأثرها على الحدود",
        "headingEn": "The Kingdom's Climate Zones and Their Effect on Limits",
        "body": "النقطة التي يغفل عنها كثيرون هي أن كود البناء السعودي لا يفرض حدّاً واحداً موحّداً على كل المملكة، بل يقسّم البلاد إلى مناطق مناخية، لأن متطلبات العزل في مدينة ساحلية رطبة شديدة الحرارة مثل جدة تختلف عن متطلبات منطقة جبلية معتدلة مثل أبها أو منطقة صحراوية حارة جافة. هذا التقسيم مستمد من منهجية ASHRAE العالمية التي تصنّف المناطق بحسب درجات الحرارة والرطوبة على مدار السنة (مفهوم \"درجات-أيام التبريد والتدفئة\").\n\nمن الناحية العملية، تقع معظم المدن السعودية الكبرى ضمن مناطق مناخية حارة جداً تتطلب أعلى مستويات الأداء للزجاج. جدة على الساحل الغربي تجمع بين حرارة عالية ورطوبة مرتفعة، وهي بيئة تفرض ضغطاً حرارياً شديداً على النوافذ طوال معظم العام. الرياض في الوسط حارة جافة بفوارق حرارية كبيرة بين الليل والنهار. الدمام والمنطقة الشرقية حارة رطبة مشابهة لجدة. هذه المناطق الحارة هي التي تتطلب أدنى قيم SHGC (أي أقل اكتساب حرارة مسموح)، بينما المناطق الأكثر اعتدالاً في المرتفعات الجنوبية الغربية تكون حدودها أكثر تساهلاً نسبياً.\n\nماذا يعني هذا لك عملياً؟ يعني أن نفس النافذة الزجاجية قد تكون مقبولة في منطقة معتدلة لكنها تفشل في جدة، لأن منطقتك المناخية تفرض حدّاً أكثر صرامة. ولذلك فإن الخطوة الأولى الصحيحة في أي مشروع امتثال هي تحديد المنطقة المناخية لموقع المبنى وفق تصنيف الكود، ثم استخراج الحدود المطلوبة لتلك المنطقة تحديداً.\n\nنؤكد هنا قاعدتنا في الأمانة: لا نذكر رقماً محدداً لعدد المناطق أو لقيمة SHGC القصوى في كل منطقة، لأن هذه القيم تُحدَّد حصراً في النص الرسمي للكود وقد تتغير بين الإصدارات. الواجب على المالك أو الاستشاري هو الرجوع للجداول الرسمية المعتمدة لتحديد المنطقة وحدودها بدقة، وعزل كور تقدّم حلاً فنياً لتحسين أداء النوافذ، لا تصنيفاً تنظيمياً رسمياً.",
        "bodyEn": "The point many overlook is that the Saudi Building Code does not impose a single uniform limit across the whole Kingdom; it divides the country into climate zones, because insulation requirements for a hot, humid coastal city like Jeddah differ from those of a temperate mountain region like Abha or a hot, dry desert area. This division derives from the global ASHRAE methodology, which classifies zones by temperature and humidity over the year (the concept of cooling and heating \"degree-days\").\n\nIn practice, most major Saudi cities fall within very hot climate zones that require the highest glass-performance levels. Jeddah, on the western coast, combines high heat and high humidity — an environment that imposes severe thermal stress on windows for most of the year. Riyadh, in the center, is hot and dry with large day-night temperature swings. Dammam and the Eastern Province are hot and humid, similar to Jeddah. These hot zones are the ones requiring the lowest SHGC values (the least heat gain allowed), while the more temperate southwestern highlands have relatively more lenient limits.\n\nWhat does this mean for you in practice? It means the same window may be acceptable in a temperate zone yet fail in Jeddah, because your climate zone imposes a stricter limit. The correct first step in any compliance project is therefore to determine the building's climate zone per the code's classification, then extract the limits required for that specific zone.\n\nWe reaffirm our honesty rule here: we cite no specific number for how many zones exist or for the maximum SHGC value in each zone, because these values are defined solely in the official code text and may change between editions. The owner or consultant must refer to the official adopted tables to precisely identify the zone and its limits, and AzelCore provides a technical solution to improve window performance, not an official regulatory classification."
      },
      {
        "heading": "معامل SHGC: الرقم الأهم لزجاج المناخ الحار",
        "headingEn": "SHGC: The Single Most Important Number for Hot-Climate Glass",
        "body": "إذا كان عليك أن تتذكر مصطلحاً واحداً من هذا الدليل بأكمله، فليكن SHGC. معامل اكتساب الحرارة الشمسي (Solar Heat Gain Coefficient) هو نسبة الطاقة الشمسية الكلية التي تنفذ عبر النافذة إلى داخل المبنى، وتُعبَّر عنه برقم بين 0 و1. فإذا كانت قيمة SHGC لنافذة ما تساوي 0.70 مثلاً، فهذا يعني أن 70% من طاقة الشمس الساقطة على النافذة تدخل إلى الداخل كحرارة. وكلما قلّ الرقم، كان الزجاج أفضل في صدّ الحرارة.\n\nفي مناخ حار مثل جدة، يكون SHGC هو المعيار الحاسم لأن العبء الأكبر على المبنى هو التبريد لا التدفئة. الزجاج المفرد العادي قد تصل قيمة SHGC له إلى نحو 0.80، وهي قيمة سيئة جداً تعني أن المبنى يستقبل تقريباً كل حرارة الشمس. الزجاج المزدوج التقليدي يحسّن الوضع قليلاً لكنه غالباً لا يكفي وحده. أما أفلام النانو سيراميك والأفلام العاكسة عالية الأداء فتخفض SHGC للنافذة القائمة إلى ما دون 0.30، وأحياناً إلى نطاق 0.15-0.22 حسب النوع والكثافة — وهي القيم التي تقترب من متطلبات المناطق الحارة.\n\nهنا تكمن القوة العملية للأفلام: فبدلاً من استبدال كل نوافذ المبنى بزجاج منخفض الانبعاثية (Low-E) مكلف، يمكن إضافة فيلم عالي الأداء إلى الزجاج القائم لخفض قيمة SHGC بشكل كبير ودفع أداء النافذة نحو الحدود المطلوبة. هذا هو السبب الجوهري الذي يجعل أفلام العزل أداة امتثال عملية واقتصادية، خصوصاً للمباني القائمة التي لم تُصمَّم أصلاً وفق الكود.\n\nملاحظة دقيقة: قيمة SHGC المُعلنة للفيلم وحده تختلف عن قيمة SHGC للمنظومة الكاملة (الزجاج + الفيلم معاً). فالحد الذي يقيسه الكود هو أداء النافذة بكامل تركيبها. لذلك يجب أن يحسب الفني المعتمد القيمة المجمّعة للزجاج الأصلي مع الفيلم، لا أن يكتفي بالرقم المطبوع على بطاقة الفيلم. هذا التدقيق هو ما يفصل بين امتثال حقيقي ووعد تسويقي.",
        "bodyEn": "If you remember a single term from this entire guide, let it be SHGC. The Solar Heat Gain Coefficient is the fraction of total solar energy that passes through a window into the building, expressed as a number between 0 and 1. If a window's SHGC equals 0.70, for example, it means 70% of the solar energy striking that window enters as heat. The lower the number, the better the glass repels heat.\n\nIn a hot climate like Jeddah, SHGC is the decisive criterion because the building's dominant load is cooling, not heating. Ordinary single-pane glass can reach an SHGC of around 0.80 — a very poor value meaning the building receives almost all of the sun's heat. Conventional double glazing improves things slightly but is often insufficient alone. High-performance nano-ceramic and reflective films, however, lower the SHGC of an existing window to below 0.30, and sometimes into the 0.15-0.22 range depending on type and density — values approaching the requirements of hot zones.\n\nHere lies the practical power of films: instead of replacing all of a building's windows with costly Low-E glass, you can add a high-performance film to existing glass to substantially lower the SHGC and push window performance toward the required limits. This is the core reason insulation films are a practical, economical compliance tool, especially for existing buildings not originally designed to the code.\n\nA precise note: a film's stated standalone SHGC differs from the SHGC of the complete system (glass + film together). The limit the code measures is the performance of the fully assembled window. The certified technician must therefore calculate the combined value of the original glass with the film, not rely on the number printed on the film's label. This scrutiny is what separates real compliance from a marketing promise."
      },
      {
        "heading": "معامل U-value ونسبة الزجاج إلى الجدار (WWR)",
        "headingEn": "U-Value and the Window-to-Wall Ratio (WWR)",
        "body": "إلى جانب SHGC، يضع الكود متطلبات على معاملين آخرين مهمين يكمّلان صورة أداء النافذة:\n\nالأول هو معامل الانتقال الحراري (U-value): ويقيس مدى سهولة انتقال الحرارة بالتوصيل عبر النافذة بسبب فرق درجة الحرارة بين الداخل والخارج. وحدته تقيس معدل تدفق الحرارة، والقيمة الأقل تعني عزلاً أفضل (عكس مصطلح المقاومة R-value الذي تعني قيمته الأعلى عزلاً أفضل). في المناخ الحار، يكون SHGC عادةً أهم من U-value لأن التحدي الأكبر هو الإشعاع الشمسي المباشر، لكن U-value يظل مهماً خصوصاً في ساعات الليل وللحفاظ على استقرار حرارة المبنى. الأفلام المنخفضة الانبعاثية (Low-E) تحديداً تساعد على تحسين U-value عبر عكس الحرارة المشعّة، بينما الأفلام الحرارية العادية تؤثر بشكل أكبر على SHGC.\n\nالثاني هو نسبة الزجاج إلى الجدار (WWR – Window-to-Wall Ratio): وهي نسبة مساحة النوافذ إلى إجمالي مساحة الواجهة. هذا المفهوم حاسم في المباني التجارية ذات الواجهات الزجاجية الكبيرة (Curtain Wall). فكلما زادت نسبة الزجاج في الواجهة، زاد العبء الحراري، ولذلك يربط الكود غالباً بين WWR المسموح والحدود المطلوبة لأداء الزجاج: واجهة زجاجية بالكامل تتطلب زجاجاً عالي الأداء جداً لتعويض مساحتها الضخمة. هذا يفسّر لماذا تعاني الأبراج ذات الواجهات الزجاجية الكاملة من أكبر تحديات الامتثال، ولماذا تكون الأفلام العاكسة عالية الأداء حلاً جوهرياً لها.\n\nالخلاصة العملية: الامتثال ليس رقماً واحداً، بل تفاعل بين SHGC وU-value وWWR والمنطقة المناخية معاً. فقد يحقق مبنى ذو نوافذ صغيرة الامتثال بسهولة بزجاج متوسط الأداء، بينما يحتاج برج زجاجي بالكامل إلى أعلى مستويات الأداء. ولأن هذه المعادلة معقدة، فإن دور الاستشاري المعتمد محوري في حساب الأداء الكلي للغلاف الحراري، ودور عزل كور هو رفع أداء الزجاج تحديداً ليساهم في تلك المعادلة.",
        "bodyEn": "Beyond SHGC, the code sets requirements on two other important coefficients that complete the picture of window performance:\n\nThe first is the U-value (thermal transmittance): it measures how easily heat conducts through a window due to the temperature difference between inside and outside. Its unit measures the rate of heat flow, and a lower value means better insulation (the inverse of R-value, where a higher value means better insulation). In a hot climate, SHGC is usually more important than U-value because the greater challenge is direct solar radiation, but U-value still matters, especially at night and for keeping the building's temperature stable. Low-E films specifically help improve the U-value by reflecting radiant heat, while ordinary thermal films affect SHGC more.\n\nThe second is the Window-to-Wall Ratio (WWR): the ratio of window area to total facade area. This concept is decisive in commercial buildings with large glass facades (curtain walls). The more glass in the facade, the greater the thermal load, so the code often ties the allowed WWR to the required glass-performance limits: a fully glazed facade requires very high-performance glass to compensate for its enormous area. This explains why fully glazed towers face the greatest compliance challenges, and why high-performance reflective films are an essential solution for them.\n\nThe practical takeaway: compliance is not a single number but an interaction of SHGC, U-value, WWR, and the climate zone together. A building with small windows may comply easily with mid-performance glass, while a fully glazed tower needs the highest performance levels. Because this equation is complex, the certified consultant's role is pivotal in calculating the overall thermal-envelope performance, and AzelCore's role is specifically to raise glass performance to contribute to that equation."
      },
      {
        "heading": "المسار التنظيمي: الرخصة والفحص والتسليم",
        "headingEn": "The Regulatory Path: Permit, Inspection, and Handover",
        "body": "كثيرون يسألون: متى بالضبط يدخل الامتثال للكود في صورة مشروعي؟ الإجابة أن كفاءة الطاقة تتقاطع مع دورة حياة المشروع في ثلاث محطات رئيسية، وإن كانت التفاصيل الإجرائية الدقيقة تتطور وتختلف بحسب الأمانة أو البلدية والجهة المصدّرة للرخصة.\n\nالمحطة الأولى هي مرحلة التصميم وإصدار رخصة البناء. عند تقديم المخططات للحصول على الرخصة (غالباً عبر منصة \"بلدي\" الرقمية)، يُتوقع أن تتضمن الوثائق ما يثبت توافق التصميم مع متطلبات كفاءة الطاقة، بما في ذلك أداء الغلاف الحراري والنوافذ. هنا يلعب الاستشاري الهندسي دوره في حساب الأداء وإثبات تحقيق الحدود المطلوبة للمنطقة المناخية.\n\nالمحطة الثانية هي مرحلة التنفيذ والتفتيش الميداني. خلال البناء، قد تجري جهات الإشراف تحققاً من أن المواد المركّبة فعلياً — بما فيها الزجاج والعزل — مطابقة لما ورد في التصميم المعتمد. استخدام منتجات أصلية موثّقة بشهادات أداء يسهّل هذه المرحلة كثيراً.\n\nالمحطة الثالثة هي التسليم وشهادة الإشغال. قبل تشغيل المبنى رسمياً، قد يُشترط إثبات استيفاء متطلبات الكود ضمن إجراءات إصدار شهادة الإشغال، خاصة في المشاريع التجارية الخاضعة لـ SBC 602 التي قد تخضع أيضاً لفحوصات الدفاع المدني والجهات الأخرى.\n\nأين تقع الأفلام في هذا المسار؟ بالنسبة للمباني الجديدة، تُدرَج مواصفات الزجاج والأفلام ضمن التصميم منذ البداية. أما المباني القائمة التي تسعى لتحسين أدائها أو معالجة قصور في زجاجها، فتُعد الأفلام حلاً للتعديل التحديثي (Retrofit) يرفع أداء النوافذ دون مشروع إنشائي جديد. ونؤكد بأمانة: عزل كور مزوّد فني للأفلام الأصلية وتركيبها الاحترافي، ولا تصدر شهادات اعتماد رسمية للكود ولا تحل محل الاستشاري الهندسي أو الجهة المرخِّصة؛ بل توفّر منتجاً وبيانات أداء من الشركة المصنّعة تساعد فريقك الهندسي على إثبات تحسّن أداء النوافذ. للتفاصيل الإجرائية الرسمية يجب الرجوع للأمانة المختصة والمجلس السعودي للبناء.",
        "bodyEn": "Many ask: when exactly does code compliance enter the picture of my project? The answer is that energy efficiency intersects the project lifecycle at three main checkpoints, though the precise procedural details evolve and vary by municipality and the permit-issuing authority.\n\nThe first checkpoint is the design and building-permit stage. When submitting plans to obtain a permit (often via the digital \"Balady\" platform), the documents are expected to include proof that the design meets energy-efficiency requirements, including thermal-envelope and window performance. Here the engineering consultant calculates performance and demonstrates that the limits for the climate zone are met.\n\nThe second checkpoint is the execution and field-inspection stage. During construction, supervisory bodies may verify that the materials actually installed — including glass and insulation — match the approved design. Using original products documented with performance certificates greatly eases this stage.\n\nThe third checkpoint is handover and the occupancy certificate. Before a building is officially operated, proof of meeting code requirements may be required as part of issuing the occupancy certificate, especially in commercial projects under SBC 602, which may also undergo civil defense and other inspections.\n\nWhere do films fit in this path? For new buildings, glass and film specifications are included in the design from the outset. For existing buildings seeking to improve performance or remedy a glass shortfall, films serve as a retrofit solution that raises window performance without a new construction project. We state honestly: AzelCore is a technical supplier of original films and their professional installation; it does not issue official code certifications nor replace the engineering consultant or the licensing authority; rather, it provides a product and manufacturer performance data to help your engineering team demonstrate improved window performance. For official procedural details, refer to the relevant municipality and the Saudi Building Code National Committee."
      },
      {
        "heading": "كيف تساعد أفلام العزل على تحسين الامتثال للنوافذ القائمة",
        "headingEn": "How Insulation Films Help Existing Windows Improve Compliance",
        "body": "المشهد الأكثر شيوعاً في السوق السعودي ليس مبنى جديداً، بل مبنى قائم بنوافذ زجاجية لا تحقق أداء المناخ الحار: فيلا تكيّف باستمرار، أو مكتب تنهك مكيفاته، أو واجهة محل تبهت بضاعتها. في هذه الحالات يكون استبدال كل الزجاج بزجاج عالي الأداء حلاً باهظاً وكثيراً ما يكون غير عملي إنشائياً. وهنا تبرز الأفلام كأداة تعديل تحديثي (Retrofit) منطقية واقتصادية.\n\nآلية العمل بسيطة فيزيائياً: يُضاف فيلم انتقائي إلى الزجاج القائم ليعكس ويمتص الجزء الأكبر من الإشعاع الشمسي، فينخفض SHGC للنافذة بشكل ملموس، ويتحسّن أداء الغلاف الحراري للمبنى ككل. النانو سيراميك يوفّر هذا الخفض مع شفافية عالية ودون أي معادن (لا يؤثر على الجوال والواي فاي)، وهو الأنسب للفلل والمكاتب التي تريد الحفاظ على الإضاءة الطبيعية. الأفلام العاكسة عالية الأداء تقدّم أقصى خفض لـ SHGC وخصوصية نهارية، وهي الحل الأمثل للأبراج والواجهات الزجاجية الكبيرة التي تعاني من أعلى أحمال حرارية بسبب نسبة WWR المرتفعة.\n\nما الذي يحوّل هذا من \"تحسين تقريبي\" إلى \"مساهمة موثّقة في الامتثال\"؟ ثلاثة شروط: أولاً، استخدام أفلام أصلية ذات بيانات أداء صادرة من الشركة المصنّعة (مثل جونسون المؤسسة عام 1961، و3M المؤسسة عام 1902 التي تصل نسبة حجب الطاقة الكلية TSER في فيلمها Crystalline إلى نحو 90% وفق الشركة). ثانياً، حساب القيمة المجمّعة للزجاج مع الفيلم لا قيمة الفيلم وحده. ثالثاً، توثيق النتيجة في تقرير وتسليمه لفريقك الهندسي ليُدرجه في حسابات الامتثال.\n\nتحذير فني جوهري: لا يجوز استخدام أفلام تظليل السيارات على زجاج المباني. زجاج المباني يختلف في الأبعاد وخصائص امتصاص الحرارة والتثبيت، واستخدام فيلم غير مخصص قد يسبب \"الإجهاد الحراري\" (Thermal Stress) الذي يشقّق الزجاج أو يهشّمه. الفني المعتمد في عزل كور يقيّم نوع الزجاج (مفرد/مزدوج، شفاف/ملوّن، مقسّى/عادي) قبل توصية الفيلم المناسب، لأن اختيار الفيلم الخاطئ لا يفشل في الامتثال فقط، بل قد يتلف الزجاج نفسه.",
        "bodyEn": "The most common scenario in the Saudi market is not a new building but an existing one with glass that fails hot-climate performance: a villa that air-conditions constantly, an office whose AC units strain, or a shop facade whose merchandise fades. In these cases, replacing all the glass with high-performance glazing is an expensive solution and often structurally impractical. Here films emerge as a logical, economical retrofit tool.\n\nThe mechanism is physically simple: a selective film is added to existing glass to reflect and absorb most of the solar radiation, so the window's SHGC drops tangibly and the building's overall thermal-envelope performance improves. Nano-ceramic delivers this reduction with high clarity and no metal (no effect on mobile or Wi-Fi), best for villas and offices wanting to preserve natural light. High-performance reflective films provide the maximum SHGC reduction and daytime privacy, the ideal solution for towers and large glass facades suffering the highest thermal loads due to a high WWR.\n\nWhat turns this from an \"approximate improvement\" into a \"documented contribution to compliance\"? Three conditions: first, using original films with manufacturer-issued performance data (such as Johnson, established 1961, and 3M, established 1902, whose Crystalline film reaches a Total Solar Energy Rejection of around 90% per the company). Second, calculating the combined value of glass with film, not the film alone. Third, documenting the result in a report and handing it to your engineering team to include in compliance calculations.\n\nAn essential technical warning: car tint films must never be used on building glass. Building glass differs in dimensions, heat-absorption properties, and mounting, and using an unspecialized film can cause \"Thermal Stress\" that cracks or shatters the glass. The certified AzelCore technician assesses the glass type (single/double, clear/tinted, tempered/ordinary) before recommending the suitable film, because choosing the wrong film does not just fail compliance — it can destroy the glass itself."
      },
      {
        "heading": "قائمة تحقق عملية لكل نوع مبنى في جدة",
        "headingEn": "A Practical Checklist for Each Building Type in Jeddah",
        "body": "لتحويل كل ما سبق إلى خطوات قابلة للتنفيذ، إليك قائمة تحقق عملية بحسب نوع المبنى الأكثر شيوعاً في جدة والمملكة، تربط بين المسار التنظيمي والحل الفني المناسب:\n\nالفيلا السكنية (مسار SBC 601): حدّد المنطقة المناخية لموقعك، واطلب من الاستشاري حساب أداء النوافذ مقابل حدود المنطقة. إذا كانت الفيلا قائمة وتعاني حرارة، فالنانو سيراميك هو الخيار الأمثل لخفض SHGC مع الحفاظ على الإضاءة. التقدير الشائع لعزل فيلا متوسطة بين 8,000 و15,000 ريال.\n\nالمكتب أو الطابق التجاري (مسار SBC 602): الأولوية لتقليل الوهج على الشاشات وخفض أحمال التكييف المركزي. أفلام نانو سيراميك أو محايدة عالية الأداء تحجب الحرارة وتسمح بإضاءة مريحة. تقدير الطابق المكتبي الكامل بين 10,000 و25,000 ريال.\n\nالبرج والواجهة الزجاجية (مسار SBC 602، WWR مرتفع): هذا أصعب أنواع الامتثال بسبب المساحة الزجاجية الضخمة. الأفلام العاكسة عالية الأداء تقدّم أكبر خفض لـ SHGC، والتركيب غالباً يتطلب فرقاً متخصصة ومعدات وصول للارتفاعات؛ والتسعير لهذه المشاريع مخصّص بعد المعاينة.\n\nالمحل التجاري (مسار SBC 602): الواجهة تحتاج حماية البضاعة من البهتان دون حجب رؤية المعروضات؛ الفيلم الحراري الشفاف هو الأنسب غالباً. تقدير الواجهة بين 3,000 و8,000 ريال.\n\nالمسجد والمستشفى والمدرسة (مسار SBC 602): تحتاج عزلاً فعّالاً مع مراعاة الراحة والخصوصية وعدم التأثير على الأجهزة اللاسلكية — وهي ميزة الأفلام غير المعدنية كالنانو سيراميك.\n\nفي كل الحالات، الخطوات الثابتة هي: (1) تحديد المسار (601 أو 602) والمنطقة المناخية، (2) إشراك استشاري معتمد لحساب الأداء المطلوب، (3) اختيار فيلم أصلي ببيانات أداء موثّقة، (4) حساب القيمة المجمّعة للزجاج مع الفيلم، (5) توثيق النتيجة. تبدأ عزل كور كل مشروع بزيارة ميدانية وتقييم حراري مجاني بكاميرا FLIR لتحديد الحل الأمثل قبل أي التزام مالي.",
        "bodyEn": "To turn all of the above into actionable steps, here is a practical checklist by the most common building types in Jeddah and the Kingdom, linking the regulatory track to the appropriate technical solution:\n\nResidential villa (SBC 601 track): identify your site's climate zone and ask the consultant to calculate window performance against the zone's limits. If the villa exists and suffers heat, nano-ceramic is the optimal choice to lower SHGC while preserving lighting. The common estimate for insulating a medium villa is 8,000-15,000 SAR.\n\nOffice or commercial floor (SBC 602 track): the priority is reducing screen glare and lowering central AC loads. High-performance nano-ceramic or neutral films block heat while allowing comfortable light. A full office floor estimate is 10,000-25,000 SAR.\n\nTower and glass facade (SBC 602 track, high WWR): this is the hardest compliance case due to the enormous glass area. High-performance reflective films provide the greatest SHGC reduction; installation often requires specialized teams and height-access equipment, and pricing for these projects is custom after a site survey.\n\nRetail shop (SBC 602 track): the facade needs to protect merchandise from fading without blocking the view of displays; clear thermal film is often most suitable. Facade estimate is 3,000-8,000 SAR.\n\nMosque, hospital, and school (SBC 602 track): need effective insulation with regard for comfort, privacy, and no interference with wireless devices — an advantage of non-metallic films like nano-ceramic.\n\nIn all cases, the constant steps are: (1) determine the track (601 or 602) and climate zone, (2) engage a certified consultant to calculate required performance, (3) choose an original film with documented performance data, (4) calculate the combined glass-plus-film value, (5) document the result. AzelCore begins every project with a free field visit and FLIR thermal assessment to determine the optimal solution before any financial commitment."
      }
    ],
    "table": {
      "headers": [
        "المعيار / المفهوم",
        "ما يقيسه",
        "لماذا يهم في المناخ الحار",
        "كيف تساعد الأفلام"
      ],
      "headersEn": [
        "Metric / Concept",
        "What It Measures",
        "Why It Matters in Hot Climate",
        "How Films Help"
      ],
      "rows": [
        [
          "SHGC (معامل اكتساب الحرارة الشمسي)",
          "نسبة طاقة الشمس النافذة للداخل (0–1)",
          "المعيار الأهم — يحدد حمل التبريد",
          "تخفضه إلى ما دون 0.30 للنافذة القائمة"
        ],
        [
          "U-value (معامل الانتقال الحراري)",
          "سهولة انتقال الحرارة بالتوصيل",
          "مهم ليلاً ولثبات حرارة المبنى",
          "أفلام Low-E تحسّنه بعكس الإشعاع"
        ],
        [
          "WWR (نسبة الزجاج إلى الجدار)",
          "مساحة النوافذ ÷ مساحة الواجهة",
          "الواجهات الزجاجية تزيد الحمل الحراري",
          "الأفلام العاكسة تعوّض المساحة الكبيرة"
        ],
        [
          "المنطقة المناخية",
          "تصنيف الحرارة والرطوبة للموقع",
          "تحدد صرامة الحدود المطلوبة",
          "تساعد على بلوغ حدود المناطق الأشد حرارة"
        ],
        [
          "المسار (601 / 602)",
          "سكني مقابل تجاري",
          "يحدد جداول الحدود المنطبقة",
          "نفس الفيلم يخدم كلا المسارين بحسب الأداء"
        ]
      ],
      "rowsEn": [
        [
          "SHGC (Solar Heat Gain Coefficient)",
          "Fraction of solar energy entering (0–1)",
          "The most important metric — drives cooling load",
          "Lowers it below 0.30 for an existing window"
        ],
        [
          "U-value (thermal transmittance)",
          "Ease of conductive heat transfer",
          "Matters at night and for stable temperatures",
          "Low-E films improve it by reflecting radiation"
        ],
        [
          "WWR (Window-to-Wall Ratio)",
          "Window area ÷ facade area",
          "Glass facades raise the thermal load",
          "Reflective films offset the large glass area"
        ],
        [
          "Climate Zone",
          "Heat/humidity classification of the site",
          "Determines the strictness of required limits",
          "Helps reach the limits of the hottest zones"
        ],
        [
          "Track (601 / 602)",
          "Residential vs commercial",
          "Determines which limit tables apply",
          "The same film serves both tracks by performance"
        ]
      ]
    },
    "faqs": [
      {
        "q": "ما الفرق بين SBC 601 وSBC 602 لزجاج المباني؟",
        "qEn": "What is the difference between SBC 601 and SBC 602 for building glass?",
        "a": "SBC 601 هو كود كفاءة الطاقة للمباني السكنية (الفلل والمنازل والشقق الخاصة)، وغالباً أبسط في متطلباته. SBC 602 هو كود كفاءة الطاقة للمباني التجارية وغير السكنية (مكاتب، أبراج، فنادق، مستشفيات، مدارس، مولات) وهو أكثر صرامة وتفصيلاً ويشمل كفاءة أنظمة التكييف والإضاءة. كلاهما يضبط أداء النوافذ عبر SHGC وU-value، ويستندان لمعايير دولية مثل ASHRAE 90.1.",
        "aEn": "SBC 601 is the energy-efficiency code for residential buildings (villas, houses, private apartments), generally simpler in its requirements. SBC 602 is the energy-efficiency code for commercial and non-residential buildings (offices, towers, hotels, hospitals, schools, malls), stricter and more detailed, covering HVAC and lighting efficiency too. Both govern window performance via SHGC and U-value and draw on international standards such as ASHRAE 90.1."
      },
      {
        "q": "ما هو معامل SHGC وما القيمة المطلوبة في جدة؟",
        "qEn": "What is SHGC and what value is required in Jeddah?",
        "a": "SHGC هو نسبة الطاقة الشمسية التي تدخل عبر الزجاج (رقم بين 0 و1)؛ كلما قلّ كان الزجاج أفضل في صد الحرارة. الزجاج العادي قد يبلغ نحو 0.80، بينما تخفض أفلام النانو سيراميك والعاكسة النافذة القائمة إلى ما دون 0.30. أما القيمة القصوى المطلوبة رسمياً لمنطقة جدة المناخية فتُؤخذ حصراً من النص الرسمي لكود البناء السعودي عبر SASO أو استشاري معتمد، إذ تختلف بين الإصدارات والمناطق.",
        "aEn": "SHGC is the fraction of solar energy entering through glass (a number between 0 and 1); the lower it is, the better the glass blocks heat. Ordinary glass can reach around 0.80, while nano-ceramic and reflective films lower an existing window below 0.30. The maximum value officially required for Jeddah's climate zone, however, must be taken solely from the official Saudi Building Code text via SASO or a certified consultant, as it varies between editions and zones."
      },
      {
        "q": "هل تركيب فيلم عزل يجعل مبناي متوافقاً تلقائياً مع الكود؟",
        "qEn": "Does installing an insulation film automatically make my building code-compliant?",
        "a": "لا يوجد ضمان تلقائي. الفيلم يخفض SHGC للنافذة بشكل كبير ويحسّن أداء الغلاف الحراري، لكن الامتثال يُحسب على مستوى المبنى كاملاً (SHGC + U-value + WWR + المنطقة المناخية) ويتطلب حساب القيمة المجمّعة للزجاج مع الفيلم، وتوثيقها لدى استشاري معتمد. عزل كور تقدّم منتجاً أصلياً وبيانات أداء تساعد فريقك الهندسي، لكنها لا تصدر شهادة اعتماد رسمية ولا تحل محل الجهة المرخِّصة.",
        "aEn": "There is no automatic guarantee. The film substantially lowers a window's SHGC and improves thermal-envelope performance, but compliance is calculated at the whole-building level (SHGC + U-value + WWR + climate zone) and requires calculating the combined glass-plus-film value, documented by a certified consultant. AzelCore provides an original product and performance data to help your engineering team, but it does not issue an official certification nor replace the licensing authority."
      },
      {
        "q": "هل يمكن تركيب الأفلام على مبنى قائم أم فقط أثناء البناء؟",
        "qEn": "Can films be installed on an existing building or only during construction?",
        "a": "يمكن تركيبها على مبنى قائم تماماً، وهو الاستخدام الأكثر شيوعاً. الأفلام حل تعديل تحديثي (Retrofit) مثالي للمباني التي لم تُصمَّم وفق الكود أو التي تعاني من حرارة، إذ ترفع أداء النوافذ القائمة دون استبدال الزجاج أو مشروع إنشائي جديد. تتم العملية من داخل المبنى خلال ساعات دون تكسير أو فوضى. لكن يجب أن يقيّم الفني نوع الزجاج أولاً لتفادي الإجهاد الحراري.",
        "aEn": "They can be installed on an existing building entirely — that is the most common use. Films are an ideal retrofit solution for buildings not designed to the code or suffering from heat, raising existing-window performance without replacing glass or a new construction project. The process is done from inside the building within hours, with no breaking or mess. But the technician must first assess the glass type to avoid thermal stress."
      },
      {
        "q": "ما الفرق بين متطلبات الزجاج في المناطق المناخية المختلفة؟",
        "qEn": "How do glass requirements differ between climate zones?",
        "a": "يقسّم الكود المملكة إلى مناطق مناخية وفق منهجية ASHRAE المبنية على الحرارة والرطوبة. المدن الحارة جداً كجدة (حارة رطبة) والرياض (حارة جافة) والدمام تتطلب أدنى قيم SHGC (أعلى أداء للزجاج)، بينما المرتفعات الجنوبية الغربية الأكثر اعتدالاً تكون حدودها أكثر تساهلاً. لذلك قد تنجح نافذة في منطقة معتدلة وتفشل نفسها في جدة. القيم الدقيقة لكل منطقة تُؤخذ من جداول الكود الرسمية.",
        "aEn": "The code divides the Kingdom into climate zones per the ASHRAE methodology based on temperature and humidity. Very hot cities like Jeddah (hot-humid), Riyadh (hot-dry), and Dammam require the lowest SHGC values (highest glass performance), while the more temperate southwestern highlands have more lenient limits. So the same window may pass in a temperate zone yet fail in Jeddah. The exact values per zone are taken from the official code tables."
      },
      {
        "q": "هل أحتاج استشارياً هندسياً أم يكفي مركز تظليل؟",
        "qEn": "Do I need an engineering consultant, or is a tinting center enough?",
        "a": "الدوران مختلفان ومتكاملان. الاستشاري الهندسي المعتمد هو من يحسب أداء الغلاف الحراري الكلي للمبنى ويثبت تحقيق حدود الكود للجهة المرخِّصة. ومركز التظليل المتخصص كعزل كور هو من يوفّر ويركّب الأفلام الأصلية ببيانات أداء الشركة المصنّعة ويحسب القيمة المجمّعة للزجاج مع الفيلم. للمشاريع الجديدة والتجارية الكبيرة تحتاج الاثنين معاً؛ وللتحسين التحديثي لمبنى قائم قد يكفي المركز المتخصص مع توثيق النتائج لفريقك الهندسي عند اللزوم.",
        "aEn": "The two roles differ and complement each other. The certified engineering consultant calculates the building's overall thermal-envelope performance and proves the code limits are met to the licensing authority. A specialized tinting center like AzelCore supplies and installs original films with manufacturer performance data and calculates the combined glass-plus-film value. For new and large commercial projects you need both; for a retrofit improvement of an existing building, the specialized center may suffice, documenting the results for your engineering team when needed."
      },
      {
        "q": "هل تختلف أفلام المباني عن أفلام تظليل السيارات؟",
        "qEn": "Are building films different from car tint films?",
        "a": "نعم، اختلافاً جوهرياً، ولا يجوز استبدال أحدهما بالآخر. زجاج المباني يختلف في الأبعاد والسماكة وخصائص امتصاص الحرارة وطريقة التثبيت، واستخدام فيلم سيارات على زجاج المبنى قد يسبب \"الإجهاد الحراري\" الذي يشقّق الزجاج أو يهشّمه بالكامل. كما أن أفلام المباني مصمّمة لمساحات أكبر وظروف تثبيت مختلفة. لذلك يجب استخدام فيلم مباني مخصّص فقط، بعد تقييم نوع الزجاج من فني معتمد.",
        "aEn": "Yes, fundamentally, and one must never substitute for the other. Building glass differs in dimensions, thickness, heat-absorption properties, and mounting, and using a car film on building glass can cause \"thermal stress\" that cracks or completely shatters the glass. Building films are also designed for larger areas and different mounting conditions. You must use a purpose-made building film only, after a certified technician assesses the glass type."
      }
    ],
    "sources": [
      {
        "label": "كود البناء السعودي (SBC) — المجلس السعودي للبناء",
        "labelEn": "Saudi Building Code (SBC) — National Committee",
        "url": "https://sbc.gov.sa/"
      },
      {
        "label": "الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)",
        "labelEn": "Saudi Standards, Metrology and Quality Org. (SASO)",
        "url": "https://www.saso.gov.sa/"
      },
      {
        "label": "المركز السعودي لكفاءة الطاقة (SEEC)",
        "labelEn": "Saudi Energy Efficiency Center (SEEC)",
        "url": "https://www.seec.gov.sa/"
      },
      {
        "label": "معايير ASHRAE 90.1 لكفاءة الطاقة في المباني",
        "labelEn": "ASHRAE 90.1 Energy Standard for Buildings",
        "url": "https://www.ashrae.org/"
      },
      {
        "label": "رؤية السعودية 2030",
        "labelEn": "Saudi Vision 2030",
        "url": "https://www.vision2030.gov.sa/"
      }
    ],
    "warning": "تنبيه تنظيمي مهم: لا تعتمد على أي رقم تقريبي لحدود الكود ورد في هذا المقال لاتخاذ قرار رسمي. القيم الدقيقة لـ SHGC وU-value والمناطق المناخية تُحدَّد حصراً في النص الرسمي لكود البناء السعودي وقد تتغير بين الإصدارات. عزل كور مزوّد فني للأفلام الأصلية ولا تُصدر شهادات اعتماد رسمية للكود ولا تحل محل الاستشاري الهندسي أو الجهة المرخِّصة. للتحقق من متطلبات مشروعك ارجع دائماً للمجلس السعودي للبناء وSASO أو استشاري معتمد. كما يُمنع استخدام أفلام تظليل السيارات على زجاج المباني لتجنب الإجهاد الحراري الذي قد يشقّق الزجاج.",
    "warningEn": "Important regulatory notice: do not rely on any approximate code-limit figure in this article to make an official decision. The exact SHGC, U-value, and climate-zone values are defined solely in the official Saudi Building Code text and may change between editions. AzelCore is a technical supplier of original films; it does not issue official code certifications nor replace the engineering consultant or licensing authority. To verify your project's requirements, always refer to the Saudi Building Code National Committee and SASO or a certified consultant. Also, car tint films must never be used on building glass to avoid thermal stress that can crack the glass.",
    "cta": "هل تحتاج إلى تحسين أداء زجاج مبناك ليتوافق مع متطلبات كود البناء السعودي SBC 601/602؟ احصل على زيارة ميدانية وتقييم حراري مجاني بكاميرا FLIR من خبراء عزل كور — بقيادة محمد الهادي، وكيل جونسون و3M الرسمي في جدة. سنحسب لك قيمة SHGC المجمّعة للزجاج مع الفيلم ونوثّقها لفريقك الهندسي. تواصل الآن عبر واتساب +966564612017.",
    "ctaEn": "Need to improve your building's glass performance to align with Saudi Building Code SBC 601/602 requirements? Get a free field visit and FLIR thermal assessment from AzelCore experts — led by Mohammed Al-Hadi, official Johnson and 3M dealer in Jeddah. We will calculate the combined glass-plus-film SHGC and document it for your engineering team. Contact now via WhatsApp +966564612017."
  }
};

export default article;
