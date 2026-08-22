import type { ArticleModule } from './types';

// Mostadam, LEED and Window Film: Where Retrofit Film Actually Contributes to Saudi Green-Building Energy Credits
// Batch 7 · scheduled 2026-08-21 · grounded in real AzelCore data (no fabricated ratings)
const article: ArticleModule = {
  // TODO(image): re-enable once public/images/blog/mostadam-leed-window-film-energy-credits-1.webp exists.
  // Until then the blog card shows the brand placeholder instead of a broken image.
  // "ogImage": "blog/mostadam-leed-window-film-energy-credits-1.webp",
  "serviceLinks": [
    {
      "href": "/blog/sbc-601-602-glass-compliance-guide",
      "text": "دليل امتثال الزجاج لكود البناء السعودي SBC 601/602",
      "textEn": "Glass Compliance Guide for Saudi Building Code SBC 601/602"
    },
    {
      "href": "/blog/glass-facade-tower-curtain-wall-insulation",
      "text": "عزل واجهات الأبراج الزجاجية والحوائط الساترة",
      "textEn": "Insulating Glass Tower Façades and Curtain Walls"
    },
    {
      "href": "/blog/vision-2030-energy-efficiency",
      "text": "رؤية 2030 وكفاءة الطاقة في المباني السعودية",
      "textEn": "Vision 2030 and Energy Efficiency in Saudi Buildings"
    },
    {
      "href": "/blog/commercial-building-tint-jeddah",
      "text": "تظليل المباني التجارية في جدة: ما يحتاجه مدير المرافق",
      "textEn": "Commercial Building Window Film in Jeddah: What a Facility Manager Needs"
    },
    {
      "href": "/blog/roi-calculator-commercial-tint",
      "text": "حساب العائد على الاستثمار لعزل زجاج المباني التجارية",
      "textEn": "ROI Calculation for Commercial Building Glass Insulation"
    },
    {
      "href": "/blog/building-insulation-electricity-savings",
      "text": "كم يوفّر عزل المباني فعلياً من فاتورة الكهرباء؟",
      "textEn": "How Much Does Building Insulation Really Save on Electricity?"
    },
    {
      "href": "/building-glass-insulation",
      "text": "خدمة عزل زجاج المباني من عزل كور",
      "textEn": "AzelCore Building Glass Insulation Service"
    },
    {
      "href": "/calculator",
      "text": "حاسبة تقدير تكلفة عزل الزجاج حسب المساحة",
      "textEn": "Glass Insulation Cost Estimator by Area"
    }
  ],
  "content": {
    "quickAnswer": "الفيلم العازل للنوافذ يساهم في شهادتَي مستدام وLEED عبر فئة الطاقة والغلاف الحراري: يخفض معامل الكسب الحراري الشمسي SHGC للزجاج القائم ويحسّن أداءه الحراري، فينخفض حمل التبريد على المبنى. وفي مسارات التصميم والتشييد يُثبَت هذا الخفض داخل نموذج طاقة المبنى كاملاً، أما في مسارات المباني القائمة (مستدام O+E وLEED O+M) فيُثبَت أساساً عبر الاستهلاك المقيس على العدّاد. وهو في الحالتين إجراء مساهم لا نقاط تلقائية، ويتطلب أوراق مواصفات معتمدة وشهادة تركيب وضماناً موثّقاً.",
    "quickAnswerEn": "Window film contributes to Mostadam and LEED through the energy and building-envelope categories: it lowers the Solar Heat Gain Coefficient (SHGC) of existing glazing and improves its thermal behaviour, which reduces the building's cooling load. On the design-and-construction paths that reduction is demonstrated inside a whole-building energy model; on the existing-building paths (Mostadam O+E, LEED O+M) it is demonstrated mainly through measured, metered consumption. Either way it is a contributing measure, not an automatic point award, and it requires certified spec sheets, installation certification and a documented warranty.",
    "intro": "حين يجلس مطوّر أو مدير مرافق مع استشاري استدامة ليبحث عن مسار شهادة لمبنى قائم في جدة، تظهر المشكلة نفسها كل مرة: الغلاف الزجاجي. المبنى مبني، والواجهة منفّذة، ونسبة الزجاج إلى الجدار لا يمكن تغييرها، والزجاج المركّب في التسعينيات أو الألفينيات يمرّر من الحرارة الشمسية ما يجعل أي هدف طاقة طموح أشبه بالمستحيل. استبدال الزجاج ممكن تقنياً، لكنه يعني سقالات وإخلاء طوابق وتوقف إيرادات وميزانية رأسمالية ضخمة.\n\nهنا يدخل الفيلم العازل للزجاج بوصفه أحد أقل إجراءات تحديث الغلاف الحراري كلفةً وتعطيلاً. لكن السؤال المهني ليس «هل الفيلم مفيد؟» — بل «أين بالضبط يظهر أثره داخل نظام مستدام أو LEED، وكيف يُوثَّق حتى يُحتسب؟». هذه المقالة تجيب على ذلك بلغة المهندس والاستشاري لا بلغة الإعلان: ما هو مستدام، وكيف يرتبط برؤية 2030 وبكود البناء السعودي SBC 601/602، وأين يدخل الفيلم في فئات الطاقة والراحة، وما الملف الفني الذي سيطلبه الاستشاري قبل أن يعتمد الإجراء في نموذج الطاقة.\n\nوسنكون صريحين في نقطة يتهرّب منها كثيرون: الفيلم لا يمنح نقاطاً تلقائية في أي نظام تقييم. هو مُدخَل هندسي في محاكاة طاقة المبنى، ونتيجته تعتمد على نوع الزجاج القائم، ومساحة التزجيج، وتوجيه الواجهات، وجودة المنظومة الميكانيكية، ونسخة النظام المعتمدة في مشروعك.",
    "introEn": "When a developer or facility manager sits down with a sustainability consultant to map a certification route for an existing building in Jeddah, the same obstacle appears every time: the glazed envelope. The building is already built, the façade is already installed, the window-to-wall ratio cannot be changed, and glass specified in the 1990s or 2000s transmits enough solar heat to make any ambitious energy target look impossible. Replacing the glazing is technically possible, but it means scaffolding, floor evacuations, lost revenue and heavy capital expenditure.\n\nThis is where retrofit window film enters — as one of the lowest-cost, least-disruptive envelope upgrade measures available. But the professional question is not \"is film useful?\" It is: where exactly does its effect surface inside Mostadam or LEED, and how is it documented so that it actually counts? This article answers that in the language of engineers and consultants rather than advertising: what Mostadam is, how it connects to Vision 2030 and to Saudi Building Code SBC 601/602, where film fits into the energy and comfort categories, and what technical file a consultant will ask for before accepting the measure in the energy model.\n\nAnd we will be blunt about a point many people dodge: film does not award automatic points in any rating system. It is an engineering input into whole-building energy simulation, and its result depends on the existing glass type, glazed area, façade orientation, the quality of the mechanical systems, and the rating version adopted by your project.",
    "sections": [
      {
        "heading": "ما هو نظام \"مستدام\" ولماذا يعني مالك المبنى القائم تحديداً؟",
        "headingEn": "What Mostadam Is — and Why It Matters Most to Owners of Existing Buildings",
        "body": "«مستدام» هو نظام التقييم الوطني للمباني الخضراء في المملكة، وُضع تحت مظلة وزارة الشؤون البلدية والقروية والإسكان ليكون إطاراً سعودي المنشأ بدل استيراد نظام أجنبي وتطبيقه كما هو على مناخ الخليج. المنطق وراء ذلك مباشر: معايير استدامة صُمّمت لمناخ معتدل لا تُنتج بالضرورة القرارات الصحيحة في مدينة مثل جدة، حيث يستهلك التبريد الحصة الكبرى من كهرباء المبنى على مدار السنة تقريباً، وحيث الرطوبة والغبار والإشعاع الشمسي تفرض أولويات مختلفة عن أولويات مبنى في شمال أوروبا.\n\nيعمل مستدام على مسارات متوازية: مسار للمباني السكنية، ومسار للمباني التجارية، ومسار للمجتمعات العمرانية. وكل مسار ينقسم بدوره إلى نسختين جوهريتين: نسخة التصميم والتشييد (D+C) التي تُطبَّق على المشاريع الجديدة منذ اللوحة الأولى، ونسخة التشغيل والمباني القائمة (O+E) التي تُطبَّق على المبنى وهو يعمل فعلاً وتقيس أداءه الحقيقي لا أداءه المرسوم على الورق. أما مستويات التصنيف فمتدرجة: أخضر، ثم برونزي، ثم فضي، ثم ذهبي، وصولاً إلى الماسي في القمة.\n\nيوزّع النظام متطلباته على فئات تشمل الطاقة، والمياه، واستدامة الموقع، والصحة والراحة، والمواد والنفايات، والسياسات والإدارة والصيانة، إلى جانب فئات إضافية ذات طابع اختياري مثل النقل والاتصال، والإقليم والثقافة، والتعليم والابتكار.\n\nما يعني مالك المبنى مباشرة هو النسخة التشغيلية: هي البوابة الواقعية أمام آلاف المباني القائمة في جدة والرياض والدمام التي شُيّدت قبل موجة اشتراطات كفاءة الطاقة الحالية. هذه المباني لا تستطيع تغيير توجيهها ولا نسبة التزجيج، لكنها تستطيع تحسين ما تملكه بالفعل — وهنا بالضبط يصبح تحديث أداء الزجاج القائم ورقة تفاوض حقيقية.",
        "bodyEn": "Mostadam is Saudi Arabia's national green building rating system, developed under the Ministry of Municipal and Rural Affairs & Housing as a home-grown framework rather than an imported system applied unchanged to a Gulf climate. The logic is straightforward: sustainability criteria designed for a temperate climate do not necessarily drive the right decisions in a city like Jeddah, where cooling consumes the largest share of a building's electricity almost year-round, and where humidity, dust and solar radiation impose priorities very different from those of a building in northern Europe.\n\nMostadam runs on parallel tracks: one for residential buildings, one for commercial buildings, and one for communities. Each track then splits into two fundamental versions: Design + Construction (D+C), applied to new projects from the first drawing, and Operations + Existing (O+E), applied to a building that is already running and which measures real performance rather than paper performance. Certification levels are tiered: Green, then Bronze, Silver, Gold, and Diamond at the top.\n\nThe system distributes its requirements across categories including Energy, Water, Site Sustainability, Health & Comfort, Materials & Waste, and Policies, Management & Maintenance — alongside additional, largely optional categories such as Transport & Connectivity, Region & Culture, and Education & Innovation.\n\nWhat matters directly to a building owner is the operational version. It is the realistic gateway for thousands of existing buildings in Jeddah, Riyadh and Dammam that were built before the current wave of energy-efficiency requirements. These buildings cannot change their orientation or their glazing ratio, but they can improve what they already own — and that is precisely where upgrading the performance of existing glass becomes a genuine negotiating asset."
      },
      {
        "heading": "مستدام و LEED: نظامان مختلفان، ومنطق واحد في بند الطاقة",
        "headingEn": "Mostadam and LEED: Two Different Systems, One Shared Logic on Energy",
        "body": "كثير من الملاك يسأل: «نختار مستدام أم LEED؟» والجواب المهني أن السؤال في الغالب ليس اختياراً حصرياً. LEED نظام أمريكي المنشأ طوّره USGBC وتتولى إدارة اعتماده جهة GBCI، وهو معترف به عالمياً وله مسار خاص بالمباني القائمة (O+M). ومع صدور LEED v5 صارت هي النسخة الأحدث، بينما تبقى v4 وv4.1 مفتوحتين للتسجيل حتى 30 يونيو 2027، ويظل الاعتماد تحتهما ممكناً حتى 30 يونيو 2033 وفق تواريخ USGBC المعلنة — وهي تواريخ تُحدَّث، فراجع صفحة المواعيد قبل أي التزام. لذلك تحقّق أولاً من النسخة المسجَّل تحتها مشروعك قبل أي حساب. ومستدام نظام وطني سعودي يخاطب البيئة التنظيمية المحلية ويرتبط بمنظومة الاشتراطات والجهات البلدية. كثير من المشاريع الكبرى في المملكة تسعى للاثنين معاً: LEED لأن المستأجرين والمستثمرين الدوليين يقرؤونه، ومستدام لأنه اللغة المحلية للامتثال والتقدير الحكومي.\n\nالنقطة الجوهرية للمهندس أن النظامين يتقاطعان في المكان الذي يهمّنا: أداء الطاقة. كلاهما — في مسار المباني القائمة — يقيس الأداء لا النوايا، وكلاهما يعتمد في جوهره على مقارنة استهلاك المبنى المقترح بخط أساس مرجعي، سواء عبر نمذجة طاقة كاملة أو عبر قياس الاستهلاك الفعلي وأداء المبنى مقارنة بأقرانه. وفي كلا المسارين، لا يُقيَّم أي إجراء على الغلاف الحراري بمعزل عن بقية المبنى، بل بأثره على إجمالي الاستهلاك السنوي.\n\nهذا يعني أن تركيب الفيلم في مبنى ذي واجهة زجاجية واسعة ومكشوفة للجنوب والغرب سيُقرأ في النموذج بشكل مختلف تماماً عن تركيبه في مبنى ذي فتحات صغيرة ومظللة معمارياً. ويعني أيضاً أن الاستشاري لن يقبل عبارة «الفيلم يوفّر الطاقة»؛ سيطلب أرقام أداء الزجاج قبل وبعد، ويُدخلها في برنامج المحاكاة، ويقرأ الناتج. اختلاف مسمّيات الاعتمادات بين نسخة ونسخة لا يغيّر هذا المنطق الأساسي.",
        "bodyEn": "Many owners ask: \"Should we go for Mostadam or LEED?\" The professional answer is that this is usually not an exclusive choice. LEED is a US-origin system developed by USGBC, with certification administered by GBCI, and is recognised globally; it has a dedicated path for existing buildings (O+M). With LEED v5 released it is the newest version, while v4 and v4.1 remain open for registration until 30 June 2027, and certification under them stays possible until 30 June 2033 per USGBC’s published dates — dates that do get updated, so check the deadlines page before committing. Confirm which version your project is registered under before any calculation. Mostadam is a Saudi national system speaking to the local regulatory environment and tied to municipal requirements and authorities. Many major projects in the Kingdom pursue both: LEED because international tenants and investors read it, Mostadam because it is the local language of compliance and government recognition.\n\nThe critical point for an engineer is that the two systems converge exactly where it matters to us: energy performance. Both — in their existing-building paths — measure performance rather than intent, and both fundamentally rely on comparing the proposed building's consumption against a reference baseline, whether through full energy modelling or through measured actual consumption benchmarked against peers. In both routes, no envelope measure is evaluated in isolation from the rest of the building; it is judged by its effect on total annual consumption.\n\nThis means that installing film on a building with a wide glazed façade exposed to the south and west will read very differently in the model than installing it on a building with small, architecturally shaded openings. It also means the consultant will not accept the sentence \"film saves energy.\" They will ask for the glass performance figures before and after, feed them into the simulation software, and read the output. The differing credit names between versions do not change this underlying logic."
      },
      {
        "heading": "كود البناء السعودي SBC 601/602: الأرضية الإلزامية التي يقف عليها التقييم",
        "headingEn": "Saudi Building Code SBC 601/602: The Mandatory Floor Beneath Any Rating",
        "body": "قبل الحديث عن أي شهادة اختيارية، هناك أرضية إلزامية: كود البناء السعودي لترشيد الطاقة. الجزء SBC 601 يضع الحد الأدنى لمتطلبات كفاءة الطاقة في المباني عموماً باستثناء المباني السكنية المنخفضة الارتفاع، بينما يعالج SBC 602 المباني السكنية المنخفضة الارتفاع، ويحدّد متطلبات عزل الغلاف الخارجي ومعاملات النفاذية الحرارية U للنوافذ والأبواب وقيم معامل الكسب الحراري الشمسي SHGC، إلى جانب عزل مجاري الهواء (الدكتات) وأنظمة الإضاءة وكفاءة أنظمة القدرة الكهربائية.\n\nنقطة مهنية مهمة: الكود ينص على أن معاملات U لمنتجات التزجيج تُحدَّد وفق NFRC 100، وأن معامل الكسب الحراري الشمسي SHGC يُحدَّد وفق NFRC 200، من خلال مختبر مستقل معتمد. هذه ليست تفصيلة شكلية — إنها بالضبط المرجعية التي ستُقاس عليها ورقة مواصفات الفيلم الذي تقترحه. الفيلم الذي لا يملك بيانات أداء محسوبة وفق منهجية معترف بها هو، من منظور الاستشاري، بلا رقم يُدخَل في النموذج.\n\nالعلاقة بين الكود والشهادة تُفهم هكذا: الكود هو الحد الأدنى الذي لا يجوز النزول تحته، وأنظمة التقييم مثل مستدام وLEED هي ما يعلو فوق ذلك الحد ويُكافأ عليه. تحسين أداء الزجاج القائم لا يخدم الشهادة وحدها؛ بل قد يكون المسار الوحيد الواقعي لرفع مبنى قديم نحو مستويات أداء غلاف حراري قريبة من روح متطلبات الكود الحديثة، من دون هدم أو استبدال واجهة. تفاصيل هذا الجانب شرحناها بتوسّع في دليلنا حول الامتثال الزجاجي لـ SBC 601/602.",
        "bodyEn": "Before discussing any voluntary certification, there is a mandatory floor: the Saudi Building Code for energy conservation. SBC 601 sets minimum energy-efficiency requirements for buildings generally, excluding low-rise residential buildings, while SBC 602 addresses low-rise residential buildings and sets requirements for exterior envelope insulation, window and door U-factors and Solar Heat Gain Coefficient (SHGC) values, alongside duct insulation, lighting systems and electrical power system efficiency.\n\nA professionally important point: the code specifies that U-factors for fenestration products are determined in accordance with NFRC 100, and that SHGC for glazed fenestration is determined in accordance with NFRC 200, by an accredited independent laboratory. This is not a formality — it is precisely the reference framework against which the spec sheet of the film you propose will be judged. A film without performance data derived through a recognised methodology is, from the consultant's point of view, a product with no number to enter into the model.\n\nThe relationship between code and certification is best understood this way: the code is the minimum you may not fall below, and rating systems like Mostadam and LEED are what rises above that minimum and gets rewarded. Improving the performance of existing glass does not serve the certificate alone; it may be the only realistic route to lift an older building toward envelope performance levels close to the spirit of modern code requirements, without demolition or façade replacement. We covered this dimension in depth in our SBC 601/602 glass compliance guide."
      },
      {
        "heading": "أين يدخل الفيلم بالضبط: SHGC وقيمة U والانتقائية الطيفية",
        "headingEn": "Where Film Actually Enters: SHGC, U-Value and Spectral Selectivity",
        "body": "الفيلم العازل يعدّل ثلاثة أرقام يعرفها كل مصمم غلاف حراري، وكل رقم منها له باب مختلف داخل نظام التقييم.\n\nالأول: معامل الكسب الحراري الشمسي SHGC، وهو نسبة الطاقة الشمسية التي تعبر التزجيج إلى داخل الفراغ، مباشرةً أو بإعادة الإشعاع. كلما انخفض SHGC انخفض الحمل الحراري الشمسي على منظومة التبريد. هذا هو المدخل الأهم للفيلم في مناخ جدة، لأن الكسب الشمسي عبر الزجاج يمثّل في المباني ذات الواجهات الزجاجية حصة معتبرة من إجمالي حمل التبريد.\n\nالثاني: معامل النفاذية الحرارية U، وهو المعدّل الكلي لانتقال الحرارة غير الشمسية عبر التجميعة، شاملاً التوصيل والحمل والإشعاع معاً. أفلام الانبعاثية المنخفضة (Low-E) المصممة للتركيب الداخلي تحسّن هذا الرقم لأنها تقلّل الحصة الإشعاعية من هذا التبادل بين سطح الزجاج والفراغ الداخلي. الأثر هنا أهدأ من أثر SHGC لكنه حقيقي، ويظهر خصوصاً في الزجاج المفرد.\n\nالثالث: نفاذية الضوء المرئي VLT، ونسبتها إلى الكسب الشمسي. الفيلم الانتقائي طيفياً — مثل الأفلام النانو سيراميكية ومتعددة الطبقات — مصمم ليمرّر الطيف المرئي ويحجب الأشعة تحت الحمراء القريبة التي تحمل معظم الحرارة الشمسية. هذا يعني أن الفراغ يظل نهارياً ولا تُهدَر مكاسب الإضاءة الطبيعية، وهو تمييز حاسم بينه وبين الفيلم العاكس المعدني القديم الذي يشتري حجب الحرارة بثمن العتمة.\n\nفي دراستنا الحرارية الميدانية بجدة (2024-2026) على 530 مركبة بكاميرا FLIR T530 ووفق ISO 13837:2021، سجّلت الأفلام النانو سيراميكية حجب 96-97% من الأشعة تحت الحمراء و99% من الأشعة فوق البنفسجية. الدراسة أُجريت على زجاج مركبات لا زجاج مبانٍ، لكنها توضح مبدأ الانتقائية الطيفية نفسه الذي يقوم عليه الفيلم المعماري.",
        "bodyEn": "Window film modifies three numbers every envelope designer knows, and each of them has a different door into a rating system.\n\nFirst: Solar Heat Gain Coefficient (SHGC) — the fraction of solar energy that passes through the glazing into the space, either directly or by re-radiation. The lower the SHGC, the lower the solar thermal load on the cooling system. This is film's most important entry point in Jeddah's climate, because in buildings with glazed façades solar gain through glass represents a substantial share of total cooling load.\n\nSecond: the U-factor — the overall rate of non-solar heat transfer through the assembly, combining conduction, convection and radiation. Low-emissivity (Low-E) films designed for interior application improve this figure because they cut the radiative share of that exchange between the glass surface and the interior space. The effect here is quieter than the SHGC effect but real, and shows up especially on single glazing.\n\nThird: Visible Light Transmission (VLT), and its ratio to solar gain. Spectrally selective film — such as nano-ceramic and multi-layer products — is engineered to pass the visible spectrum while blocking the near-infrared band of sunlight that carries most of the solar heat. That means the space stays daylit and daylighting gains are not thrown away, which is the decisive distinction between it and older metallised reflective film that buys heat rejection at the price of darkness.\n\nIn our field thermal study in Jeddah (2024-2026), covering 530 vehicles with a FLIR T530 camera under ISO 13837:2021, nano-ceramic films recorded 96-97% infrared and 99% ultraviolet rejection. The study was conducted on vehicle glass rather than building glass, but it demonstrates the same spectral-selectivity principle that architectural film is built on."
      },
      {
        "heading": "من خفض حمل التبريد إلى نقاط الطاقة: كيف يُحتسب الفيلم داخل النموذج؟",
        "headingEn": "From Cooling-Load Reduction to Energy Points: How Film Is Counted Inside the Model",
        "body": "هذه أهم فقرة في المقالة، ونكتبها بصراحة قد لا تعجب من يبيع الفيلم بمبالغة: **الفيلم لا يمنح نقاطاً تلقائية**. لا في مستدام ولا في LEED. ما يحدث فعلياً هو التالي.\n\nتوضيح قبل التفاصيل: نموذج الطاقة الموصوف هنا هو آلية احتساب الإجراء في مسارات التصميم والتشييد (مستدام D+C وLEED BD+C). أما في مسارات المباني القائمة التي تخاطبها هذه المقالة — مستدام O+E وLEED O+M — فإن تقدير الطاقة يُبنى أساساً على الاستهلاك الفعلي المقيس مقارنةً بفترة أساس أو بمجموعة أقران، ويُستخدم النموذج للتنبؤ وترتيب الأولويات لا لكسب الاعتماد وحده. ولهذا فإن قراءات العدّاد في الخطوة الثامنة من خارطة التنفيذ ليست إضافة اختيارية.\n\nيبني مهندس الطاقة نموذجاً حاسوبياً للمبنى: هندسته، وتوجيهه، ونسب التزجيج، وخصائص كل تجميعة زجاجية، وجداول الإشغال، وأداء منظومات التكييف والإضاءة. ثم يشغّل النموذج مرتين على الأقل: مرة على خط الأساس المرجعي، ومرة على الحالة المقترحة التي تتضمن الإجراءات المقترحة — ومنها الفيلم. الفرق في الاستهلاك السنوي بين الحالتين هو ما يُترجَم إلى تقدير داخل بند أداء الطاقة.\n\nومن هنا تأتي الحقيقة المهنية الثانية: أثر الفيلم متغيّر وليس ثابتاً. مبنى في جدة بواجهة زجاجية غربية واسعة وزجاج مفرد شفاف سيُظهر فرقاً كبيراً في النموذج. ومبنى بفتحات محدودة وزجاج مزدوج منخفض الانبعاثية أصلاً، مع تظليل معماري جيد، سيُظهر فرقاً أصغر بكثير. نفس المنتج، ونتيجتان مختلفتان تماماً.\n\nولهذا فإن أي جهة تعدك برقم نقاط محدد قبل تشغيل النموذج تتحدث خارج المنهجية. الرقم يعتمد على نسخة نظام التقييم المعتمدة في مشروعك، وعلى برنامج المحاكاة، وعلى معايرة النموذج ببيانات الاستهلاك الفعلية إن وُجدت.\n\nالمعطى الذي نلتزم به من واقع مشاريع العزل الحراري للمباني هو ترشيد استهلاك التكييف في حدود 35-40% في التطبيقات المناسبة. وهو رقم يخص حزمة العزل كاملةً لا الفيلم وحده، ومُدخَل للمناقشة والتحقق داخل النموذج، لا وعد نقاط.",
        "bodyEn": "This is the most important paragraph in the article, and we write it with a candour that may not please anyone who oversells film: **film does not award automatic points**. Not in Mostadam, not in LEED. What actually happens is this.\n\nOne clarification before the mechanics: the energy model described here is how a measure earns credit on the design-and-construction paths (Mostadam D+C, LEED BD+C). On the existing-building paths this article is aimed at — Mostadam O+E and LEED O+M — the energy score is driven mainly by actual metered consumption benchmarked against a baseline period or a peer data set, and the model is used to predict and prioritise the measure rather than to earn the credit on its own. That is why the meter readings in step 8 of the roadmap are not an optional extra.\n\nThe energy engineer builds a computational model of the building: its geometry, orientation, glazing ratios, the properties of every glazing assembly, occupancy schedules, and the performance of HVAC and lighting systems. The model is then run at least twice: once against the reference baseline, and once against the proposed case including the proposed measures — film among them. The difference in annual consumption between the two runs is what translates into credit within the energy performance category.\n\nFrom this comes the second professional truth: film's impact is variable, not fixed. A Jeddah building with a wide west-facing glazed façade in clear single glazing will show a large delta in the model. A building with limited openings, already fitted with double Low-E glazing and good architectural shading, will show a far smaller one. Same product, two entirely different outcomes.\n\nThat is why anyone promising you a specific point figure before the model is run is speaking outside the methodology. The number depends on the rating version adopted by your project, on the simulation software used, and on whether the model is calibrated against actual metered consumption.\n\nThe figure we stand behind, from our building glass insulation projects, is an HVAC energy saving in the region of 35-40% in suitable applications. That is a whole-package insulation figure, not a number film alone is guaranteed to deliver, and it is an input for discussion and verification inside the model — not a promise of points."
      },
      {
        "heading": "الراحة الحرارية والوهج: الباب الثاني الذي يدخل منه الفيلم",
        "headingEn": "Thermal Comfort and Glare: Film's Second Door In",
        "body": "الطاقة ليست المدخل الوحيد. فئة «الصحة والراحة» في مستدام، وما يقابلها من اعتمادات جودة البيئة الداخلية في LEED، تتعامل مع تجربة الشاغل نفسه — وهي منطقة يؤثر فيها الزجاج بشكل مباشر وملموس.\n\nالمشكلة الكلاسيكية في المكاتب ذات الواجهات الزجاجية في جدة معروفة لكل مدير مرافق: الموظف الجالس بجوار النافذة يشكو من الحرارة بينما يشكو زميله في عمق المكتب من البرودة. السبب ليس عطلاً في التكييف، بل أن سطح الزجاج الساخن يشعّ حرارة نحو الجالس ويرفع درجة الحرارة الإشعاعية المتوسطة المحيطة به. النتيجة العملية: خفض درجة حرارة الترموستات لكامل الطابق لإرضاء صف واحد من المكاتب، وهدر طاقة مضاعف، وشكاوى لا تنتهي.\n\nخفض الكسب الشمسي عند سطح الزجاج يعالج هذه المشكلة من مصدرها: ينخفض التفاوت الحراري بين محيط المبنى وعمقه، ويصبح ضبط الترموستات على قيمة معقولة مقبولاً للجميع. وهذا بالضبط ما تقيسه اعتمادات الراحة الحرارية.\n\nالبعد الثاني هو الوهج. الوهج المباشر على الشاشات هو ما يدفع الموظفين إلى إسدال الستائر بشكل دائم — وحين تُسدَل الستائر تُقفل النافذة فعلياً، وتُطفأ مكاسب الإضاءة الطبيعية بالكامل، وتُشغَّل الإضاءة الصناعية طوال النهار. الفيلم الانتقائي طيفياً يقلّل الحدّة الحرارية والوهج مع الاحتفاظ بنسبة عالية من الضوء المرئي، فتبقى الستائر مرفوعة. هكذا يحمي إجراءُ الطاقة اعتمادَ الإضاءة الطبيعية بدل أن يتعارض معه — وهي نقطة يقدّرها الاستشاري كثيراً لأن معظم بدائل التظليل تكسب في بند وتخسر في آخر.",
        "bodyEn": "Energy is not the only entry point. Mostadam's Health & Comfort category, and the corresponding Indoor Environmental Quality credits in LEED, deal with the occupant's own experience — an area where glazing has a direct, tangible effect.\n\nThe classic problem in glazed offices in Jeddah is familiar to every facility manager: the employee sitting by the window complains of heat while a colleague deeper in the floorplate complains of cold. The cause is not a fault in the HVAC — it is that the hot glass surface radiates heat toward the occupant and raises the mean radiant temperature around them. The practical consequence: the thermostat is dropped for an entire floor to satisfy one row of desks, energy is wasted twice over, and the complaints never stop.\n\nReducing solar gain at the glass surface treats this at source: the thermal gradient between perimeter and core narrows, and a sensible thermostat setpoint becomes acceptable to everyone. That is exactly what thermal comfort credits measure.\n\nThe second dimension is glare. Direct glare on screens is what drives staff to keep blinds permanently closed — and once the blinds are down the window is effectively sealed, daylighting gains are extinguished entirely, and artificial lighting runs all day. Spectrally selective film reduces thermal intensity and glare while retaining a high proportion of visible light, so the blinds stay up. In this way the energy measure protects the daylighting credit instead of conflicting with it — a point consultants value highly, because most shading alternatives win in one category and lose in another."
      },
      {
        "heading": "لماذا الفيلم بدل استبدال الزجاج في المباني القائمة؟",
        "headingEn": "Why Film Instead of Glazing Replacement in Existing Buildings",
        "body": "لنكن منصفين مع البدائل: استبدال الزجاج بوحدات مزدوجة منخفضة الانبعاثية هو نظرياً الحل الأعلى أداءً. لا نجادل في ذلك. لكن قرار المبنى القائم لا يُتخذ على ورقة أداء وحدها، بل على أربعة قيود مجتمعة.\n\nالقيد الأول رأسمالي: استبدال الواجهة الزجاجية لبرج مكتبي يقع في فئة استثمارية مختلفة تماماً عن تحديث أداء الزجاج القائم — وغالباً يستهلك ميزانية التحسين للسنوات المقبلة كلها.\n\nالقيد الثاني تشغيلي: الاستبدال يعني سقالات أو منصات معلّقة، وإخلاء مناطق داخلية، وعملاً على الإطارات والمثبتات، وأسابيع أو أشهراً من التعطيل. في مبنى مؤجَّر، هذا تعطيل إيرادات وعلاقات مستأجرين، لا مجرد إزعاج. تركيب الفيلم يتم من داخل المبنى، طابقاً بطابق، خارج ساعات العمل غالباً، والفراغ يعود للاستخدام في اليوم نفسه.\n\nالقيد الثالث تنظيمي وإنشائي: تغيير تركيبة الزجاج قد يستلزم مراجعة أحمال الواجهة والإطارات وموافقات فنية، خصوصاً في المباني ذات الحوائط الساترة.\n\nالقيد الرابع هو الكربون المتضمَّن: إخراج زجاج سليم إلى النفايات وتصنيع بديل له كلفة بيئية تناقض جزئياً هدف الشهادة نفسه. الاستفادة من الأصل القائم بدل استبداله منطق ينسجم مع فلسفة أنظمة التقييم في المباني القائمة.\n\nالخلاصة المهنية: الفيلم لا يتفوّق على الزجاج المزدوج منخفض الانبعاثية في الأداء المطلق. لكنه في كثير من المباني القائمة الإجراء الوحيد الذي يمكن تنفيذه فعلاً هذا العام، وبميزانية تشغيلية، ومن دون إيقاف المبنى — والإجراء المنفَّذ يتفوّق دائماً على الإجراء المؤجَّل.",
        "bodyEn": "Let us be fair to the alternatives: replacing glazing with double Low-E units is theoretically the higher-performing solution. We do not dispute that. But the decision for an existing building is not made on a performance sheet alone — it is made against four combined constraints.\n\nThe first is capital: re-glazing an office tower's façade sits in an entirely different investment class from upgrading the existing glass, and usually consumes the whole improvement budget for years ahead.\n\nThe second is operational: replacement means scaffolding or suspended platforms, evacuation of interior zones, work on frames and fixings, and weeks or months of disruption. In a leased building that is lost revenue and strained tenant relationships, not mere inconvenience. Film is installed from inside the building, floor by floor, usually outside working hours, and the space returns to use the same day.\n\nThe third is regulatory and structural: changing the glazing make-up can require review of façade and frame loading and technical approvals, particularly in curtain-wall buildings.\n\nThe fourth is embodied carbon: sending sound glass to waste and manufacturing a replacement carries an environmental cost that partly contradicts the very goal of the certification. Getting more out of the existing asset instead of replacing it aligns with the philosophy of existing-building rating systems.\n\nThe professional bottom line: film does not beat double Low-E glazing on absolute performance. But in many existing buildings it is the only measure that can actually be executed this year, on an operating budget, without shutting the building down — and an executed measure always beats a deferred one."
      },
      {
        "heading": "الملف الفني الذي سيطلبه استشاري الاستدامة منك",
        "headingEn": "The Technical File Your Sustainability Consultant Will Ask For",
        "body": "هذه الفقرة هي التي تفصل بين مشروع يُحتسب فيه الفيلم ومشروع يُرفض فيه. الاستشاري لا يقيّم الفيلم؛ يقيّم الوثائق. جهّز التالي قبل أن تجلس معه:\n\n**أولاً: ورقة المواصفات الفنية للمنتج (Technical Data Sheet)** من الشركة المصنّعة، محدَّدة برقم المنتج بالضبط لا باسم العائلة. يجب أن تحتوي على معامل الكسب الحراري الشمسي SHGC، ونفاذية الضوء المرئي VLT، ومعامل النفاذية الحرارية U، ونسبة حجب الأشعة تحت الحمراء والفوق بنفسجية، وأن تكون القيم محسوبة على تركيبة الزجاج المطابقة لزجاج مبناك — قيمة الفيلم على زجاج مفرد شفاف 6 مم تختلف عن قيمته على زجاج مزدوج ملوّن. هذه القيم يجب أن تكون مُشتقّة وفق منهجية معترف بها (NFRC 100 للـ U و NFRC 200 للـ SHGC).\n\n**ثانياً: جدول التزجيج كما هو منفَّذ (As-Built Glazing Schedule)** — نوع وسماكة ولون الزجاج لكل واجهة، ومساحاته. بدون هذا لا يمكن حساب قيم «قبل» أصلاً.\n\n**ثالثاً: شهادة اعتماد المركّب** من الشركة المصنّعة، لأن الأداء الموثّق يفترض تركيباً وفق تعليمات المصنّع.\n\n**رابعاً: الضمان الخطي الأصلي** من المصنّع باسم المشروع ومدته وبنود التغطية والاستبعاد.\n\n**خامساً: توثيق ما بعد التنفيذ** — صور، أرقام دفعات المنتج، وإن أمكن مسح حراري مقارن قبل/بعد لسطوح الزجاج، وقراءات الاستهلاك للتحقق التشغيلي.\n\nالنصيحة العملية: أدخِل الاستشاري في القرار قبل الشراء لا بعده. اختيار فيلم بمواصفة ممتازة لكن بلا وثائق قابلة للتدقيق يعني أنك دفعت تكلفة الإجراء وخسرت اعترافه.",
        "bodyEn": "This section is what separates a project where film is counted from one where it is rejected. The consultant does not evaluate the film; they evaluate the documentation. Prepare the following before you sit down with them.\n\n**First: the manufacturer's Technical Data Sheet**, specified by the exact product code rather than the family name. It must contain SHGC, Visible Light Transmission (VLT), U-value, and infrared and ultraviolet rejection figures — and those values must be stated for a glazing make-up matching your building's actual glass. A film's value on 6 mm clear single glazing differs from its value on tinted double glazing. The values must be derived under a recognised methodology (NFRC 100 for U-factor, NFRC 200 for SHGC).\n\n**Second: the as-built glazing schedule** — glass type, thickness and tint per façade, with areas. Without it the \"before\" values cannot be established at all.\n\n**Third: installer certification** from the manufacturer, because documented performance presumes installation to the manufacturer's instructions.\n\n**Fourth: the original written warranty** issued by the manufacturer in the project's name, with its duration and its coverage and exclusion clauses.\n\n**Fifth: post-installation documentation** — photographs, product batch numbers, ideally a comparative before/after thermal survey of the glass surfaces, and metered consumption readings for operational verification.\n\nThe practical advice: bring the consultant into the decision before purchase, not after. Selecting a film with excellent specifications but no auditable documentation means you have paid for the measure and lost its recognition."
      },
      {
        "heading": "الأخطاء التي تُسقط مساهمة الفيلم — وكيف تتجنّبها",
        "headingEn": "The Mistakes That Kill Film's Contribution — and How to Avoid Them",
        "body": "رأينا مشاريع اشترت فيلماً جيداً وخسرت الاعتراف به. الأسباب تتكرر:\n\n**الخطأ الأول: تجاهل توافق الفيلم مع الزجاج القائم.** هذا ليس خطأ إداري بل خطر فني حقيقي. الفيلم عالي الامتصاص على زجاج غير مقسّى، أو ملوّن، أو سميك، أو داخل وحدة مزدوجة، قد يرفع الإجهاد الحراري في اللوح إلى حدّ التشقق. المصنّعون ينشرون جداول توافق تحدّد أي فيلم يُسمح به على أي تركيبة زجاج. تجاوز هذه الجداول يُسقط الضمان ويُنشئ خطراً على السلامة.\n\n**الخطأ الثاني: اختيار الفيلم بمعيار «الأغمق أفضل».** الفيلم شديد العتامة يخفض الكسب الشمسي، نعم، لكنه يُطفئ الإضاءة الطبيعية ويدفع إلى تشغيل الإنارة الصناعية نهاراً — فتربح في بند الغلاف وتخسر في بند الإضاءة والراحة البصرية. المعيار الصحيح هو أعلى نسبة كسب ضوئي مقابل الحرارة المحجوبة، لا أعلى عتامة.\n\n**الخطأ الثالث: منتج بلا سلسلة توريد موثّقة.** فيلم بلا اسم مصنّع ولا رقم منتج ولا ضمان باسم المشروع لا يمكن إدخاله في نموذج طاقة معتمَد، مهما بدا مظهره جيداً في اليوم الأول.\n\n**الخطأ الرابع: تركيب غير معتمد.** فقاعات، انفصال عند الحواف، تلوث تحت الطبقة — كلها تُفقد الأداء المعلن وتُبطل الضمان.\n\n**الخطأ الخامس: تنفيذ الإجراء بلا نمذجة.** إن لم يُدخَل الفيلم في نموذج الطاقة وتُوثَّق قيمه، فلن يظهر في التقييم إطلاقاً — سيوفّر عليك كهرباء، لكنه لن يُحتسب لك في الشهادة.\n\n**الخطأ السادس: إهمال القياس والتحقق بعد التنفيذ.** مسارات المباني القائمة تقيس الأداء الفعلي؛ بيانات العدّاد قبل وبعد هي دليلك الأقوى.",
        "bodyEn": "We have seen projects buy a good film and lose recognition for it. The reasons repeat.\n\n**Mistake one: ignoring film-to-glass compatibility.** This is not an administrative slip but a genuine technical hazard. A high-absorption film on annealed, tinted, thick, or insulated-unit glass can raise thermal stress in the pane to the point of cracking. Manufacturers publish compatibility charts specifying which film is permitted on which glazing make-up. Overriding those charts voids the warranty and creates a safety risk.\n\n**Mistake two: selecting film on a \"darker is better\" basis.** A very dark film does reduce solar gain, yes — but it extinguishes daylight and forces artificial lighting to run through the day, so you win on the envelope and lose on lighting and visual comfort. The correct criterion is the highest light gain per unit of heat rejected, not the highest opacity.\n\n**Mistake three: a product with no documented supply chain.** Film with no manufacturer name, no product code and no project-named warranty cannot be entered into an accredited energy model, however good it looks on day one.\n\n**Mistake four: uncertified installation.** Bubbles, edge lift, contamination under the layer — all of these lose the declared performance and void the warranty.\n\n**Mistake five: executing the measure without modelling it.** If the film is not entered into the energy model with documented values, it will never appear in the assessment. It will save you electricity, but it will not count toward the certificate.\n\n**Mistake six: skipping measurement and verification.** Existing-building paths measure real performance; before-and-after meter data is your strongest evidence."
      },
      {
        "heading": "خارطة تنفيذ عملية: من الفكرة إلى ملف معتمد",
        "headingEn": "A Practical Execution Roadmap: From Idea to an Accepted File",
        "body": "إليك التسلسل الذي نتبعه مع العملاء المؤسسيين في جدة، مرتّباً كما ينبغي أن يحدث لا كما يحدث عادة.\n\n**١. مسح التزجيج القائم.** جولة ميدانية لتوثيق نوع الزجاج وسماكته ولونه وحالته لكل واجهة، مع حساب المساحات وتوجيهها. هذه الوثيقة هي أساس كل ما يليه.\n\n**٢. قراءة بيانات الاستهلاك.** فواتير الكهرباء وبيانات نظام إدارة المبنى لاثني عشر شهراً على الأقل، لمعرفة أين تقع ذروة التبريد وكم تمثّل من الإجمالي.\n\n**٣. تحديد الواجهات ذات الأولوية.** ليست كل الواجهات متساوية؛ الواجهة الغربية في جدة عادةً هي أعلى عائد، والشمالية أدناه. الاستهداف الذكي يرفع العائد ويخفض التكلفة.\n\n**٤. اختيار المنتج بالمواصفة لا بالاسم التجاري.** حدّد نطاق SHGC وVLT المستهدف مع مهندس الطاقة أولاً، ثم ابحث عن المنتج الذي يحققه ضمن جدول التوافق مع زجاجك.\n\n**٥. نموذج تجريبي (Mock-up).** طابق أو جناح واحد، مع قياس حراري مقارن للأسطح — نستخدم كاميرا FLIR للتوثيق — وأخذ رأي الشاغلين في الإضاءة والوهج قبل التعميم.\n\n**٦. إدخال القيم في نموذج الطاقة** ومقارنة الحالة المقترحة بخط الأساس، وقراءة الأثر الحقيقي.\n\n**٧. التنفيذ على مراحل** خارج ساعات العمل، مع توثيق مصوّر وأرقام دفعات لكل طابق.\n\n**٨. القياس والتحقق بعد التشغيل** لثلاثة إلى اثني عشر شهراً، وتسليم الحزمة كاملة للاستشاري.\n\nهذا التسلسل يحوّل الفيلم من «مادة مشتراة» إلى «إجراء موثّق قابل للتدقيق» — وهو الفارق الذي يهم لجنة التقييم.",
        "bodyEn": "Here is the sequence we follow with institutional clients in Jeddah, ordered as it should happen rather than as it usually happens.\n\n**1. Survey the existing glazing.** A site walk documenting glass type, thickness, tint and condition for every façade, with areas and orientations calculated. This document is the foundation of everything that follows.\n\n**2. Read the consumption data.** Electricity bills and BMS data for at least twelve months, to establish where the cooling peak sits and what share of the total it represents.\n\n**3. Identify priority façades.** Not all elevations are equal; the west façade in Jeddah is usually the highest-return surface and the north the lowest. Smart targeting raises return and lowers cost.\n\n**4. Select the product by specification, not by brand name.** Define the target SHGC and VLT range with the energy engineer first, then find the product that meets it within the compatibility chart for your glass.\n\n**5. Build a mock-up.** One floor or one wing, with comparative surface thermal measurement — we use a FLIR camera for documentation — and occupant feedback on light and glare before rolling out.\n\n**6. Enter the values into the energy model** and compare the proposed case against the baseline to read the real impact.\n\n**7. Execute in phases** outside working hours, with photographic documentation and batch numbers recorded per floor.\n\n**8. Measure and verify post-occupancy** for three to twelve months, then hand the complete package to the consultant.\n\nThis sequence turns film from \"a purchased material\" into \"a documented, auditable measure\" — which is the distinction the assessment committee cares about."
      }
    ],
    "table": {
      "headers": [
        "الإجراء على الغلاف الزجاجي",
        "أثره على SHGC",
        "الاحتفاظ بالإضاءة الطبيعية",
        "تعطيل تشغيل المبنى",
        "مستوى التكلفة النسبي",
        "ما يطلبه الاستشاري لاعتماده"
      ],
      "headersEn": [
        "Envelope / Glazing Measure",
        "Effect on SHGC",
        "Daylight Retention",
        "Operational Disruption",
        "Relative Cost Level",
        "What the Consultant Needs to Accept It"
      ],
      "rows": [
        [
          "الزجاج القائم دون معالجة (خط الأساس)",
          "لا تغيير — القيمة الأصلية للزجاج",
          "كامل",
          "لا يوجد",
          "صفر",
          "جدول التزجيج كما هو منفَّذ"
        ],
        [
          "فيلم انتقائي طيفياً (نانو سيراميك / متعدد الطبقات)",
          "خفض كبير مع أعلى نسبة احتفاظ بالضوء",
          "مرتفع",
          "منخفض جداً — من الداخل وبدون إيقاف المبنى",
          "متوسط",
          "ورقة مواصفات بقيم SHGC/VLT/U على تركيبة زجاجك + شهادة تركيب + ضمان"
        ],
        [
          "فيلم عاكس معدني",
          "خفض كبير جداً",
          "منخفض إلى متوسط + انعكاس خارجي",
          "منخفض",
          "متوسط إلى منخفض",
          "نفس الوثائق + دراسة الوهج والانعكاس على المباني المجاورة"
        ],
        [
          "فيلم منخفض الانبعاثية Low-E للتركيب الداخلي",
          "خفض متوسط مع تحسين ملموس لقيمة U",
          "مرتفع",
          "منخفض",
          "متوسط إلى مرتفع",
          "بيانات U قبل/بعد محسوبة على التجميعة نفسها"
        ],
        [
          "استبدال الزجاج بوحدات مزدوجة Low-E",
          "الأفضل أداءً نظرياً",
          "مرتفع",
          "مرتفع — سقالات وإخلاء وأعمال إطارات",
          "مرتفع جداً",
          "حسابات إنشائية وموافقات فنية + جدول تزجيج جديد"
        ],
        [
          "زجاج ثانوي / طبقة داخلية إضافية",
          "خفض متوسط مع مكسب عزل صوتي",
          "متوسط إلى مرتفع",
          "متوسط",
          "مرتفع",
          "تفاصيل التثبيت + أداء التجميعة الكاملة لا الطبقة وحدها"
        ]
      ],
      "rowsEn": [
        [
          "Existing glazing, untreated (baseline)",
          "No change — glass's original value",
          "Full",
          "None",
          "Zero",
          "As-built glazing schedule"
        ],
        [
          "Spectrally selective film (nano-ceramic / multi-layer)",
          "Large reduction with the highest light retention",
          "High",
          "Very low — installed internally, building stays open",
          "Moderate",
          "Data sheet with SHGC/VLT/U on your glazing make-up + installer certification + warranty"
        ],
        [
          "Metallised reflective film",
          "Very large reduction",
          "Low to moderate, plus exterior reflectance",
          "Low",
          "Moderate to low",
          "Same documents plus a glare and neighbouring-building reflectance study"
        ],
        [
          "Interior-applied Low-E film",
          "Moderate reduction with a tangible U-value improvement",
          "High",
          "Low",
          "Moderate to high",
          "Before/after U-value data computed on the same assembly"
        ],
        [
          "Replacement with double Low-E glazing units",
          "Theoretically the best performance",
          "High",
          "High — scaffolding, evacuation, frame works",
          "Very high",
          "Structural calculations and technical approvals + new glazing schedule"
        ],
        [
          "Secondary glazing / added interior layer",
          "Moderate reduction plus acoustic benefit",
          "Moderate to high",
          "Moderate",
          "High",
          "Fixing details + whole-assembly performance, not the layer alone"
        ]
      ]
    },
    "faqs": [
      {
        "q": "هل تركيب فيلم عازل على النوافذ يعطيني نقاط مباشرة في شهادة مستدام؟",
        "qEn": "Does installing window film give me points directly in a Mostadam certificate?",
        "a": "لا. الفيلم إجراء مساهم يُقيَّم على مستوى المبنى كاملاً — داخل نموذج الطاقة في مسارات التصميم والتشييد، ومقابل الاستهلاك المقيس على العدّاد في مسارات المباني القائمة (مستدام O+E وLEED O+M) — وليس بنداً يُمنح عليه رصيد تلقائي. أثره يُحسب بمقارنة الحالة المقترحة بخط أساس مرجعي: خط أساس محاكى في مسارات التصميم والتشييد، وفترة أساس مقيسة أو مقارنة بمجموعة أقران في مسارات المباني القائمة. ويختلف جذرياً حسب نوع الزجاج القائم، ومساحة التزجيج، وتوجيه الواجهات، وأداء منظومة التكييف. وحجم التقدير النهائي يعتمد على نسخة نظام التقييم المعتمدة في مشروعك وعلى نتائج النمذجة والقياس، لا على وعد من المورّد.",
        "aEn": "No. Film is a contributing measure evaluated at whole-building level — inside a whole-building energy model on the D+C paths, and against metered consumption on the existing-building paths (Mostadam O+E, LEED O+M) — not a line item that earns automatic credit. Its effect is computed by comparing the proposed case against a reference baseline: a simulated baseline on the design-and-construction paths, and a measured baseline period or peer benchmark on the existing-building paths. It varies dramatically with the existing glass type, glazed area, façade orientation and HVAC performance. The final level of credit depends on the rating version adopted by your project and on the modelling and measurement results — not on a supplier's promise."
      },
      {
        "q": "عندي برج قائم في جدة وما أقدر أوقف التشغيل — هل الفيلم بديل معقول عن تغيير الزجاج؟",
        "qEn": "I have an occupied tower in Jeddah and cannot shut it down — is film a reasonable alternative to replacing the glass?",
        "a": "في أغلب الحالات نعم، بشرط أن تفهم الفرق. الزجاج المزدوج منخفض الانبعاثية أعلى أداءً في المطلق، لكنه يعني سقالات وإخلاء طوابق وأعمال إطارات وميزانية رأسمالية كبيرة. الفيلم يُركَّب من داخل المبنى، طابقاً بطابق، غالباً خارج ساعات العمل، والفراغ يعود للاستخدام في اليوم نفسه. في المباني القائمة، الإجراء القابل للتنفيذ فعلاً يتفوّق عملياً على الإجراء المثالي المؤجَّل سنوات.",
        "aEn": "In most cases yes, provided you understand the trade-off. Double Low-E glazing is higher-performing in absolute terms, but it means scaffolding, floor evacuations, frame works and heavy capital expenditure. Film is installed from inside the building, floor by floor, usually outside working hours, and the space returns to use the same day. In existing buildings, the measure you can actually execute practically beats the ideal measure deferred for years."
      },
      {
        "q": "وش الأوراق اللي بيطلبها مني استشاري الاستدامة عن الفيلم؟",
        "qEn": "What paperwork will my sustainability consultant ask me for regarding the film?",
        "a": "أربع وثائق أساسية: ورقة المواصفات الفنية من المصنّع برقم المنتج بالتحديد وتتضمن SHGC وVLT وقيمة U ونسب حجب الأشعة، محسوبة على تركيبة زجاج مطابقة لزجاج مبناك؛ وجدول التزجيج كما هو منفَّذ لتحديد قيم «قبل»؛ وشهادة اعتماد المركّب من الشركة المصنّعة؛ والضمان الخطي الأصلي باسم المشروع. ويُفضَّل إضافة توثيق مصوّر وأرقام دفعات وقراءات استهلاك قبل وبعد التنفيذ.",
        "aEn": "Four core documents: the manufacturer's technical data sheet for the exact product code, containing SHGC, VLT, U-value and rejection figures computed on a glazing make-up matching your building's glass; the as-built glazing schedule to establish the \"before\" values; installer certification from the manufacturer; and the original written warranty issued in the project's name. Photographic documentation, batch numbers and before/after metered consumption readings are strongly recommended additions."
      },
      {
        "q": "هل الفيلم العازل يخالف كود البناء السعودي SBC 601 أو SBC 602؟",
        "qEn": "Does window film conflict with Saudi Building Code SBC 601 or SBC 602?",
        "a": "لا، بالعكس. الكود يضع حدوداً دنيا لأداء الغلاف الحراري، ومنها معاملات النفاذية الحرارية U ومعامل الكسب الحراري الشمسي SHGC للتزجيج، وينص على تحديدها وفق NFRC 100 وNFRC 200 عبر مختبر مستقل معتمد. الفيلم يحسّن هذين الرقمين للزجاج القائم، فيتحرك بالمبنى في اتجاه المتطلبات لا ضدها. المهم أن تكون قيم المنتج مشتقة وفق منهجية معترف بها وموثّقة، لا مجرد أرقام تسويقية.",
        "aEn": "No — the opposite. The code sets minimum envelope performance limits, including fenestration U-factors and SHGC, and specifies that they be determined under NFRC 100 and NFRC 200 by an accredited independent laboratory. Film improves both of those figures for existing glazing, moving the building toward the requirements rather than against them. What matters is that the product's values are derived and documented under a recognised methodology, not merely marketing figures."
      },
      {
        "q": "الفيلم بيعتّم المكتب ويخلينا نشغّل الإضاءة أكثر — صح؟",
        "qEn": "Won't film darken the office and force us to use more lighting?",
        "a": "هذا صحيح مع الأفلام العاكسة الداكنة القديمة، وغير صحيح مع الأفلام الانتقائية طيفياً. الفيلم الانتقائي مصمم ليمرّر الطيف المرئي ويحجب الأشعة تحت الحمراء القريبة التي تحمل معظم الحرارة الشمسية، فيبقى المكتب نهارياً بينما ينخفض الكسب الحراري. الأهم أن خفض الوهج يمنع الموظفين من إسدال الستائر بشكل دائم — وإسدال الستائر هو ما يقتل الإضاءة الطبيعية فعلياً. المعيار عند الاختيار هو أعلى ضوء مقابل أقل حرارة، لا أعلى عتامة.",
        "aEn": "That is true of older dark reflective films and untrue of spectrally selective ones. Selective film is engineered to pass the visible spectrum while blocking the near-infrared band of sunlight that carries most of the solar heat, so the office stays daylit while heat gain falls. More importantly, reducing glare stops staff from keeping blinds permanently closed — and closed blinds are what actually kills daylighting. The selection criterion is the most light for the least heat, not the highest opacity."
      },
      {
        "q": "هل في خطر إن الزجاج ينكسر بعد تركيب الفيلم؟",
        "qEn": "Is there a risk the glass will crack after film is installed?",
        "a": "الخطر حقيقي إن أُهمل فحص التوافق. الفيلم عالي الامتصاص على زجاج غير مقسّى، أو ملوّن، أو سميك، أو ضمن وحدة مزدوجة، قد يرفع الإجهاد الحراري في اللوح إلى حد التشقق. المصنّعون المعتمدون ينشرون جداول توافق تحدّد أي منتج مسموح على أي تركيبة زجاج، والالتزام بها شرط لسريان الضمان. لهذا نبدأ دائماً بمسح التزجيج القائم قبل ترشيح أي منتج، ولا نعتمد على الشكل الظاهري للزجاج.",
        "aEn": "The risk is real if compatibility is not checked. A high-absorption film on annealed, tinted, thick or insulated-unit glass can raise thermal stress in the pane to the point of cracking. Reputable manufacturers publish compatibility charts specifying which product is permitted on which glazing make-up, and following them is a condition of warranty validity. This is why we always begin with a survey of the existing glazing before nominating any product, rather than judging the glass by appearance."
      },
      {
        "q": "كم يوفّر الفيلم فعلياً من فاتورة التكييف في مبنى تجاري؟",
        "qEn": "How much does film actually save on the cooling bill in a commercial building?",
        "a": "لا يوجد رقم واحد، ومن يعطيك رقماً للفيلم وحده فهو يخمّن. في تطبيقات العزل الحراري المناسبة للمباني نعمل على ترشيد استهلاك التكييف في حدود 35-40%، وهو رقم يخص حزمة العزل كاملةً. أما النتيجة لأي مبنى بعينه فتعتمد على مساحة التزجيج وتوجيهه، ونوع الزجاج القائم، وكفاءة منظومة التبريد، وأنماط الإشغال. الطريقة المهنية أن يُقرأ الرقم من نموذج الطاقة ومن قراءات العدّاد قبل وبعد التنفيذ، لا من تعميم. ولهذا نبدأ بنموذج تجريبي على طابق واحد مع قياس حراري مقارن قبل التعميم على المبنى.",
        "aEn": "There is no single number, and anyone quoting you one for film on its own is guessing. Across our suitable building glass insulation applications we work to an HVAC energy saving in the region of 35-40%, but that is a whole-package figure, and the result for any specific building depends on glazed area and orientation, existing glass type, chiller-plant efficiency and occupancy patterns. The professional approach is to read the number from the energy model and from before/after meter data, not from a generalisation. That is why we start with a single-floor mock-up and comparative thermal measurement before rolling out across a building."
      }
    ],
    "warning": "تحذير فني مهم: لا تُركّب أي فيلم عازل على زجاج مبنى قائم قبل التحقق من جدول التوافق الحراري الصادر عن الشركة المصنّعة. الفيلم عالي الامتصاص الحراري على زجاج غير مقسّى، أو ملوّن، أو سميك، أو ضمن وحدة زجاجية مزدوجة، قد يرفع الإجهاد الحراري داخل اللوح إلى حد التشقق أو انكسار الحواف — وهو خطر سلامة على المارّة أسفل الواجهة في المباني المرتفعة، إضافة إلى إسقاط ضمان الزجاج وضمان الفيلم معاً. الفحص يسبق التركيب دائماً، ولا يجوز الاستدلال على نوع الزجاج بالنظر فقط.",
    "warningEn": "Important technical warning: never install window film on an existing building's glazing before checking the manufacturer's thermal compatibility chart. A high-absorption film on annealed, tinted, thick or insulated-unit glass can raise thermal stress within the pane to the point of cracking or edge failure — a genuine safety hazard for pedestrians below the façade in tall buildings, and one that voids both the glazing warranty and the film warranty. Survey always precedes installation, and glass type must never be inferred from appearance alone.",
    "cta": "إذا كنت تدرس مساراً لشهادة مستدام أو LEED لمبنى قائم في جدة أو أي مدينة سعودية، وتحتاج طرفاً فنياً يجهّز لك ملف الغلاف الزجاجي بالشكل الذي يقبله استشاري الاستدامة — مسح تزجيج موثّق، وأوراق مواصفات بقيم SHGC وVLT وU على تركيبة زجاجك، وشهادة تركيب معتمدة، وضمان مصنّع باسم المشروع — فنحن في AzelCore (عزل كور) نعمل بهذه المنهجية يومياً. محمد الهادي، فني عزل وتظليل معتمد ووكيل جونسون و3M الرسمي، يمكنه زيارة الموقع ومناقشة الواجهات ذات الأولوية معك ومع مهندس الطاقة في مشروعك. للتواصل أو واتساب: +966564612017.",
    "ctaEn": "If you are evaluating a Mostadam or LEED route for an existing building in Jeddah or anywhere in Saudi Arabia, and you need a technical partner who can assemble the glazed-envelope file in the form a sustainability consultant will accept — a documented glazing survey, data sheets with SHGC, VLT and U-values computed on your glass make-up, certified installation, and a manufacturer warranty in the project's name — this is the methodology we work to every day at AzelCore. Mohammed Al-Hadi, certified insulation and tinting technician and authorised Johnson and 3M dealer, can visit the site and discuss priority façades with you and your project's energy engineer. Call or WhatsApp: +966564612017.",
    "sources": [
      {
        "label": "المجلس الأمريكي للأبنية الخضراء — نظام LEED v5",
        "labelEn": "U.S. Green Building Council — LEED v5",
        "url": "https://www.usgbc.org/leed/v5"
      },
      {
        "label": "مواعيد إغلاق التسجيل وانتهاء صلاحية نسخ LEED",
        "labelEn": "LEED registration close and certification sunset deadlines",
        "url": "https://www.usgbc.org/tools/leed-certification/deadlines"
      },
      {
        "label": "وزارة الشؤون البلدية والقروية والإسكان (الجهة المطوّرة لنظام مستدام)",
        "labelEn": "Ministry of Municipal and Rural Affairs & Housing (developer of Mostadam)",
        "url": "https://www.momrah.gov.sa/ar"
      },
      {
        "label": "دليل مستدام للمباني التجارية — التصميم والتشييد (D+C)",
        "labelEn": "Mostadam for Commercial Buildings (D+C) manual",
        "url": "https://subdivision-prod.ruh-s3.bluvalt.com/s3fs-public/mostadam/2024-05/Mostadam%20for%20Commercial%20Buildings%20(D+C).pdf"
      },
      {
        "label": "الهيئة العامة للعقار — خدمة نظام مستدام للمباني الخضراء",
        "labelEn": "Real Estate General Authority — Mostadam System for Green Building",
        "url": "https://rega.gov.sa/en/rega-services/eservices/mostadam-system-for-green-building/"
      },
      {
        "label": "الدليل الدراسي المرافق لكود ترشيد الطاقة السعودي SBC 601-602 عبر ICC (دليل مرافق للكود لا نص الكود نفسه)",
        "labelEn": "ICC Digital Codes — 2018 Saudi Energy Conservation Code SBC 601-602 Study Companion (study aid accompanying the code, not the code text)",
        "url": "https://codes.iccsafe.org/content/SECSC2018P1"
      },
      {
        "label": "المجلس الوطني لتصنيف النوافذ NFRC (منهجيات NFRC 100 و200)",
        "labelEn": "National Fenestration Rating Council — NFRC 100 / NFRC 200 methodologies",
        "url": "https://www.nfrc.org/"
      },
      {
        "label": "معيار ASHRAE 90.1 لكفاءة الطاقة في المباني",
        "labelEn": "ASHRAE Standard 90.1 — Energy Standard for Buildings",
        "url": "https://www.ashrae.org/technical-resources/bookstore/standard-90-1"
      }
    ]
  }
};

export default article;
