import type { ArticleModule } from './types';

// Does Window Film Crack or Break Glass? Thermal Stress Explained (Buildings + Cars)
// Batch 7 · scheduled 2026-09-02 · grounded in real AzelCore data (no fabricated ratings)
const article: ArticleModule = {
  // TODO(image): re-enable once public/images/blog/window-film-thermal-stress-glass-breakage-1.webp exists.
  // Gemini quota (limit: 0) blocked this one; the blog card shows the brand placeholder.
  // "ogImage": "blog/window-film-thermal-stress-glass-breakage-1.webp",
  "serviceLinks": [
    {
      "href": "/building-glass-insulation",
      "text": "عزل زجاج المباني والفلل في جدة",
      "textEn": "Building and Villa Glass Insulation in Jeddah"
    },
    {
      "href": "/blog/villa-glass-insulation-jeddah-cost-guide",
      "text": "دليل تكلفة عزل زجاج الفلل في جدة",
      "textEn": "Villa Glass Insulation Cost Guide (Jeddah)"
    },
    {
      "href": "/blog/glass-facade-tower-curtain-wall-insulation",
      "text": "عزل الواجهات الزجاجية والحوائط الستائرية",
      "textEn": "Glass Facade and Curtain Wall Insulation"
    },
    {
      "href": "/blog/security-anti-shatter-safety-window-film",
      "text": "أفلام الأمان ومنع تطاير الشظايا",
      "textEn": "Security and Anti-Shatter Safety Window Film"
    },
    {
      "href": "/blog/sbc-601-602-glass-compliance-guide",
      "text": "مطابقة الزجاج لكود البناء السعودي 601/602",
      "textEn": "SBC 601/602 Glass Compliance Guide"
    },
    {
      "href": "/blog/building-insulation-saudi-arabia-guide",
      "text": "الدليل الشامل لعزل المباني في السعودية",
      "textEn": "Complete Building Insulation Guide (Saudi Arabia)"
    },
    {
      "href": "/blog/tint-warranty-claim-process-saudi",
      "text": "كيف تُفعّل مطالبة الضمان خطوة بخطوة",
      "textEn": "How to File a Window Film Warranty Claim"
    },
    {
      "href": "/research/ksa-thermal-report-2026",
      "text": "دراسة جدة الحرارية 2024-2026 (n=530)",
      "textEn": "Jeddah Vehicle Thermal Rejection Study 2024-2026"
    },
    {
      "href": "/contact",
      "text": "احجز مسحاً زجاجياً قبل التسعير",
      "textEn": "Book a Glass Survey Before Quoting"
    }
  ],
  "content": {
    "quickAnswer": "لا يكسر الفيلم الزجاج بنفسه، لكنه يغيّر كمية الطاقة الشمسية التي يمتصها اللوح، فيزيد إجهاده الحراري. الخطر حقيقي لكنه صغير، ويتركّز عملياً في زجاج المباني المُلدّن (العادي) مع الأفلام الداكنة الماصة. الزجاج المقسّى والمقوّى حرارياً شبه محصّن، وزجاج السيارات مقسّى أو مُصفَّح (Laminated) فالخطر فيه ضئيل جداً. الحماية الحقيقية: مسح زجاجي وجدول توافق قبل التركيب.",
    "quickAnswerEn": "Window film does not break glass by itself, but it changes how much solar energy the pane absorbs, which raises thermal stress. The risk is real yet small, and it concentrates on annealed architectural glass combined with dark absorptive film. Tempered and heat-strengthened glass are near-immune, and car glass is tempered or laminated, so automotive risk is minimal. Correct specification, from a glass survey and a film-to-glass chart, is the protection.",
    "intro": "من بين كل الأسئلة التي تصلنا في عزل كور بجدة، هناك سؤال واحد يوقف صاحب الفيلا أو المكتب عن اتخاذ القرار: «سمعت أن الفيلم يكسر الزجاج». وعلى عكس ما يقوله كثير من الباعة، هذا السؤال ليس خرافة يجب نفيها بجملة تسويقية واحدة. الكسر الحراري للزجاج (Thermal Stress Fracture) ظاهرة فيزيائية موثّقة في نشرات الشركات المصنّعة وفي أدبيات صناعة الزجاج المعماري، وأي فني محترم يعرف أنها موجودة وأنه يتعامل معها في مرحلة التصميم والتسعير، لا بعد وقوع المشكلة.\n\nالحقيقة الدقيقة أطول من «نعم» أو «لا»: الفيلم لا يكسر الزجاج بذاته، لكنه يغيّر ميزانية الطاقة الشمسية داخل اللوح الزجاجي. بعض الأفلام تمتص جزءاً من هذه الطاقة وتحوّلها إلى حرارة داخل الزجاج نفسه، وبعضها الآخر يعكسها للخارج قبل أن تتحول إلى حرارة. الفرق بين الاثنين هو الفرق بين تركيب آمن وتركيب يضاعف احتمال التشقق على لوح ضعيف الحافة أو مظلَّل جزئياً.\n\nفي هذا المقال نشرح الفيزياء كما هي، ونعدّد العوامل التي ترفع الخطر فعلاً، ونوضّح كيف يديره المحترف عبر مسح زجاجي وجدول توافق من الشركة المصنّعة، ثم نفصل بوضوح بين حالة المباني وحالة السيارات، لأن الخلط بينهما هو مصدر معظم الخوف غير المبرر في السوق السعودي.",
    "introEn": "Of all the questions we receive at AzelCore in Jeddah, one stops villa and office owners from deciding: \"I heard window film breaks glass.\" Unlike what many salespeople claim, this is not a myth to be dismissed with a marketing line. Thermal stress fracture is documented physics, described in manufacturer technical bulletins and in architectural glass industry literature, and any serious installer knows it exists and manages it during specification and quoting, not after a pane cracks.\n\nThe precise truth is longer than yes or no. Film does not break glass on its own, but it changes the solar energy budget inside the pane. Some films absorb part of that energy and convert it into heat within the glass itself; others reflect it outward before it becomes heat. That difference separates a safe installation from one that multiplies the odds of cracking on a pane with a damaged edge or an uneven shading pattern.\n\nThis article explains the physics as it is, lists the factors that genuinely raise risk, shows how a professional manages it through a glass survey and a manufacturer film-to-glass compatibility chart, and then separates the building case from the car case clearly, because confusing the two is the source of most unnecessary fear in the Saudi market.",
    "sections": [
      {
        "heading": "الكسر الحراري: ظاهرة حقيقية لا نُنكرها",
        "headingEn": "Thermal Fracture: A Real Phenomenon We Do Not Deny",
        "body": "الكسر الحراري هو تشقق يحدث في لوح الزجاج نتيجة فرق درجات الحرارة داخل اللوح نفسه، لا نتيجة صدمة أو ضربة. الجمعية الدولية لأفلام النوافذ (IWFA) تجيب على هذا السؤال بصراحة: الزجاج ينكسر عندما يتعرّض لإجهاد، والإجهاد الحراري الناتج عن امتصاص الإشعاع الشمسي هو النوع الذي قد يتأثر بالفيلم. هذه إجابة أمينة، وهي أدق بكثير من عبارة «مستحيل يكسر» التي يرددها بعض الباعة.\n\nفي النشرة الفنية الخاصة بالإجهاد الحراري من 3M (نشرة أفلام نوافذ للتطبيقات المعمارية على الزجاج المسطّح، وليست وثيقة سيارات) يُذكر أن كل زجاج يمتص طاقة عند تعرّضه للإشعاع الشمسي، وأن الزجاج الملوّن يمتص أكثر من الزجاج الشفاف، وأن الظاهرة تحدث عندما يوجد فرق حرارة بين مركز اللوح وحوافه المظلَّلة داخل الإطار، وأن قدرة الزجاج على مقاومة الكسر تُحدَّد بمتانة حافته.\n\nلماذا نصرّ على قول هذا بوضوح؟ لأن العميل الذي يسمع نفياً مطلقاً ثم يرى شرخاً في لوح واحد بعد شهرين يفقد الثقة بالكامل، بينما العميل الذي يُشرح له الخطر ويرى أنه قد قُيس وأُدير قبل التركيب يفهم أن ما اشتراه هندسة وليس حظاً. في جدة تحديداً، مع إشعاع شمسي مرتفع ومدة تعرّض طويلة، فإن تجاهل هذا الحساب ليس خياراً مهنياً على الإطلاق.",
        "bodyEn": "Thermal fracture is a crack that appears in a pane because of temperature differences within the pane itself, not because of an impact. The International Window Film Association answers the question plainly: glass breaks when stressed, and thermal stress from absorption of solar radiation is the one that film may affect. That is an honest answer, and far more accurate than the blanket \"it can never break\" some sellers repeat.\n\n3M's technical bulletin on thermal stress, an architectural window film document for flat glass rather than an automotive specification, states that all glass absorbs energy when exposed to solar radiation, that tinted glass absorbs more than clear glass, that the problem occurs when there is a temperature differential between the centre of the glass and its shaded edges, and that the glass's ability not to break is determined by its edge strength.\n\nWhy insist on saying this openly? Because a customer who hears an absolute denial and then sees a crack two months later loses trust entirely, while a customer who has the risk explained, measured and managed before installation understands that what he bought is engineering, not luck. In Jeddah in particular, with high solar irradiance and long exposure hours, skipping that calculation is not a professional option."
      },
      {
        "heading": "الميكانيكا بالتفصيل: مركز ساخن وحافة محبوسة في الإطار",
        "headingEn": "The Mechanism in Detail: Hot Centre, Edge Trapped in the Frame",
        "body": "تخيّل نافذة في واجهة جنوبية بجدة عند الظهيرة. الشمس تسقط على مساحة اللوح المكشوفة فترفع حرارة مركزه، بينما تبقى الأطراف مختبئة داخل إطار الألمنيوم أو الخشب في الظل، فتظل أبرد بفارق ملحوظ. الزجاج، كأي مادة، يتمدد بالحرارة. المركز الساخن يريد أن يتمدد أكثر مما تسمح به الحواف الباردة، فتتولّد قوة شدّ (Tension) عند الحافة تحاول سحبها للتمدد. عندما يتجاوز هذا الشدّ متانة الحافة، يبدأ الشرخ.\n\nالوثيقة الفنية للجمعية الأوروبية لأفلام النوافذ (EWFA) تصف العملية بالضبط بهذا الترتيب: الطاقة الشمسية تسخّن مركز اللوح، الحواف مخفية داخل الإطار فتبقى أبرد، المركز يتمدد أكثر من الحواف، فيقع الإجهاد الحراري، وإذا بلغ أو تجاوز مقاومة الزجاج حدث الكسر الحراري.\n\nهناك بصمة شكلية تميّز هذا النوع من الكسر. بحسب نشرة 3M، يبدأ الشرخ الحراري دائماً من حافة الزجاج على بعد لا يقل عن بوصتين من الركن، ويكون أول نصف بوصة إلى بوصة منه عمودياً على الحافة بزاوية 90 درجة. الوثيقة الأوروبية تصف نفس الخاصية: منشأ الكسر عند الحافة وبعيداً عن الركن، وزوايا 90 درجة مع الحافة والسطح. أما كسر الصدمة فيبدأ من نقطة الاصطدام ويأخذ شكلاً إشعاعياً مختلفاً تماماً. هذه العلامات تسمح للفني بتشخيص السبب بدل التخمين أو تبادل الاتهامات.",
        "bodyEn": "Picture a south-facing window in Jeddah at midday. Sun falls on the exposed area of the pane and raises the temperature of its centre, while the perimeter stays hidden inside the aluminium or timber frame, in shade, and remains measurably cooler. Glass, like any material, expands when heated. The hot centre wants to expand more than the cooler edge allows, so tensile stress builds at the edge. When that tension exceeds the edge strength, a crack starts.\n\nThe European Window Film Association technical article describes the sequence exactly: solar energy warms the centre of the pane, the edges are hidden by the frame so remain cooler, the centre expands more than the edges, thermal stress results, and if it meets or exceeds the breaking strength of the glass, thermal stress fracture occurs.\n\nThis fracture has a signature. According to the 3M bulletin, a thermal stress crack always starts at the edge of the glass at least two inches from a corner, and the first half-inch to one inch of the crack begins perpendicular to the edge, at 90 degrees. The European document describes the same features: origin at the edge, away from a corner, with 90-degree angles to edge and surface. An impact crack, by contrast, radiates from a point of contact and looks entirely different. These markers let a technician diagnose the cause instead of guessing or trading blame."
      },
      {
        "heading": "نوع الزجاج: العامل الحاسم الأول قبل أي فيلم",
        "headingEn": "Glass Type: The Decisive Factor Before Any Film",
        "body": "إذا أردت اختصار كل هذا الموضوع في متغيّر واحد، فهو نوع الزجاج. الوثيقة الفنية للجمعية الأوروبية لأفلام النوافذ تعطي أرقاماً واضحة لفروق الحرارة التي يتحملها كل نوع قبل الكسر الحراري (لزجاج سليم غير متضرر): الزجاج المقسّى حرارياً يتحمل فرقاً يقارب 250 درجة مئوية، بينما الزجاج المُلدّن العادي (بما فيه الفلوت) يتحمل نحو 40 درجة فقط، والزجاج المصبوب الخشن نحو 30 درجة، والزجاج المسلّح بالأسلاك نحو 25 درجة.\n\nهذا الفرق الهائل يفسّر القاعدة العملية التي تعتمدها الصناعة: الفيلم لا يسبب كسراً حرارياً مع الزجاج المقسّى إطلاقاً، ومن غير المرجّح بدرجة عالية أن يسببه مع الزجاج المقوّى حرارياً، لكنه قد يرفع خطر الكسر بشكل ملموس على زجاج الفلوت المُلدّن إذا حُدِّد بشكل خاطئ. لذلك يُركَّب الفيلم على الزجاج المقسّى دون تقييم إضافي، وعلى المقوّى حرارياً بفحص الحالات الخاصة فقط، أما المُلدّن فيجب دائماً تقييم توافقه.\n\nوثيقة الجمعية الوطنية للزجاج الأمريكية (NGA) حول تطبيقات الزجاج المعالج حرارياً تدعم نفس المنطق من الجهة الأخرى: المعالجة الحرارية تزيد مقاومة الزجاج للأحمال الخارجية ومن ضمنها الإجهادات الحرارية الناتجة عن الإشعاع الشمسي، وتنبّه إلى أن الألواح المُلدّنة المفردة قد لا توفّر حماية كافية من الكسر الحراري. الخلاصة العملية: أول سؤال يجب أن يسأله المورّد ليس «أي فيلم تريد؟» بل «أي زجاج عندك؟».",
        "bodyEn": "If this entire topic had to be reduced to one variable, it would be the glass type. The European Window Film Association technical article gives clear figures for the temperature difference each type withstands before thermal fracture, for glass in good undamaged condition: thermally toughened (tempered) glass resists about 250 degrees Celsius, annealed glass including float resists about 40 degrees, rough cast glass about 30 degrees, and wired glass about 25 degrees.\n\nThat enormous gap explains the working rule the industry uses: window film will never cause thermal stress breakage with tempered glass, is highly unlikely to cause it with heat-strengthened glass, but can significantly increase the risk on float (annealed) glass if incorrectly specified. Accordingly, film goes onto tempered glass with no further thermal stress assessment, onto heat-strengthened glass with only a check of particular high-stress conditions, while annealed glass should always be assessed for film-to-glass compatibility.\n\nThe National Glass Association technical paper on heat-treated glass supports the same logic from the other side: heat treatment increases resistance to externally applied loads including thermal stresses induced by the sun's radiant energy, and it warns that monolithic annealed lites of any thickness may not provide adequate thermal stress breakage protection. The practical takeaway: the first question a supplier should ask is not \"which film do you want?\" but \"what glass do you have?\""
      },
      {
        "heading": "الفيلم الماص مقابل العاكس والانتقائي الطيفي",
        "headingEn": "Absorptive Film versus Reflective and Spectrally Selective Film",
        "body": "ليست كل الأفلام متساوية في تأثيرها على الإجهاد الحراري. الوثيقة الأوروبية تحدد أن خصائص الفيلم المهمة هي نفاذ الطاقة الشمسية وانعكاسها وامتصاصها، وأن الأهم بينها هو الامتصاص. هذه الجملة تختصر المسألة كلها.\n\nالفيلم الداكن الماص، حين يُركَّب على السطح الداخلي للزجاج، يحوّل جزءاً كبيراً من الطاقة الشمسية إلى حرارة في مستوى قريب جداً من الزجاج نفسه، فيرتفع متوسط حرارة اللوح ويتّسع الفارق بين المركز الساخن والحافة المحبوسة في الإطار. أما الفيلم العاكس فيعيد جزءاً من الطاقة إلى الخارج قبل أن تتحول إلى حرارة داخل التجميعة الزجاجية، فيبقى ارتفاع حرارة اللوح أقل. الأفلام الانتقائية طيفياً (Spectrally Selective) تعمل بمنطق مشابه: ترفض الأشعة تحت الحمراء والفوق بنفسجية بنسب عالية مع تمرير جزء كبير من الضوء المرئي، فتحقق تبريداً محسوساً دون أن تعتمد على امتصاص أسود عميق.\n\nهذا هو السبب الفني الحقيقي وراء تفضيلنا في المشاريع السكنية والتجارية للأفلام النانو سيراميكية والانتقائية طيفياً على الأفلام المصبوغة الداكنة الرخيصة: ليست مسألة ذوق أو سعر فقط، بل مسألة إدارة إجهاد. لكن انتبه إلى نقطة تقنية يخطئ فيها كثيرون: الأفلام النانو سيراميكية ترفض الأشعة تحت الحمراء بمزيج من الامتصاص والانعكاس، ولا يعني وصف «سيراميك» أو «انتقائي طيفي» تلقائياً أن امتصاصها الشمسي الكلي منخفض. الرقم الوحيد المعتبر هو نسبة الامتصاص الشمسي المنشورة لهذا المنتج تحديداً على تركيبتك الزجاجية في جدول توافق المصنّع، لا اسم التقنية على العلبة. ومع ذلك، احذر التبسيط: الوثيقة الأوروبية نفسها تنبّه إلى أن قيم النفاذ والانعكاس والامتصاص لنظام زجاجي معيّن قد تكون مضلِّلة إذا نُقلت إلى نظام زجاجي مختلف بنفس الفيلم. أي أن الأرقام تُقرأ ضمن التركيبة الكاملة، لا كرقم دعائي منفصل.",
        "bodyEn": "Not all films affect thermal stress equally. The European technical article states that the important properties of the film are its solar energy transmission, reflection and absorption, the most important being absorption. That single sentence captures the whole issue.\n\nA dark absorptive film applied to the inboard surface converts a large share of solar energy into heat immediately adjacent to the glass, raising the pane's average temperature and widening the gap between the hot centre and the cool framed edge. A reflective film sends part of that energy back outward before it becomes heat inside the glazing assembly, so the pane's temperature rise stays lower. Spectrally selective films work on a similar principle: they reject infrared and ultraviolet at high rates while transmitting a good share of visible light, delivering real cooling without relying on deep dark absorption.\n\nThat is the genuine technical reason we prefer nano-ceramic and spectrally selective products over cheap dark dyed film on residential and commercial projects: it is not only taste or price, it is stress management. But note a technical point many get wrong: nano-ceramic films reject infrared through a mix of absorption and reflection, and the labels 'ceramic' or 'spectrally selective' do not automatically mean low total solar absorptance. The only figure that counts is that product's published solar absorptance on your specific glazing, as given in the manufacturer's compatibility chart - not the technology name on the box. Still, avoid oversimplifying. The same European document warns that transmission, reflection or absorption values for one glazing system plus film can be misleading when compared with a different glazing system using the same film. The numbers must be read inside the complete assembly, not as a detached marketing figure."
      },
      {
        "heading": "التظليل الجزئي وتفاصيل الغرفة التي ترفع الخطر فعلاً",
        "headingEn": "Partial Shading and the Room Details That Genuinely Raise Risk",
        "body": "أخطر ما في الكسر الحراري أنه غالباً لا يأتي من الفيلم وحده، بل من تركيبة ظروف. نشرة 3M الفنية تسرد بشكل مباشر عوامل يجب ذكرها عند الإجابة على سؤال «هل سيكسر الفيلم زجاجي؟»، ومنها: أنماط التظليل الجزئي الناتجة عن البروزات والامتدادات المعمارية، والستائر أو البلايندات المحكمة الملاصقة للزجاج، واللافتات المطلية أو الملصقات أو البطاقات على الزجاج، وفتحات التكييف والتدفئة الموجّهة نحو الزجاج.\n\nالمنطق واحد في كل هذه الحالات: أي شيء يجعل جزءاً من اللوح ساخناً وجزءاً آخر بارداً في نفس اللحظة يضخّم الفارق الحراري. ظل عمود أو مظلة يقطع اللوح قطرياً عند الضحى، شجرة كثيفة تظلل نصف النافذة، لوحة إعلانية تغطي ثلث الواجهة، خزانة أو سرير ملاصق للزجاج من الداخل يمنع تصريف الحرارة، ستارة سميكة على بعد سنتيمترات تحبس هواء ساخناً بين القماش والزجاج، مخرج مكيّف يضرب بقعة باردة على زجاج ساخن. كلها تصنع تدرّجات حرارية حادة داخل نفس اللوح.\n\nتُضاف إلى ذلك حالة الحافة. تذكر نشرة 3M أن متانة الحافة تعتمد على مقاس الزجاج وسماكته وطريقة قصّه ومعالجة الحافة من الزجّاج، وأن الحافة المستقيمة النظيفة هي الأقوى، وأن الحواف التالفة قد تخفض متانة الحافة بنسبة تصل إلى 50%. لهذا يفحص الفني المحترف حواف الألواح قبل التركيب، لأن قصّة رديئة أو نقرة صغيرة في الحافة قد تكون هي السبب الفعلي، والفيلم مجرد القشة الأخيرة.",
        "bodyEn": "The dangerous thing about thermal fracture is that it rarely comes from the film alone; it comes from a combination of conditions. The 3M technical bulletin lists factors to state when answering \"will window film break my glass?\", among them partial shading patterns from overhangs or extensions, tight-fitting drapes or blinds, painted signs, decals or labels on the glass, and heating and cooling vents directed at the glass.\n\nThe logic is identical in every case: anything that makes one part of the pane hot while another part stays cool at the same moment amplifies the temperature differential. A column or canopy shadow cutting the pane diagonally mid-morning, a dense tree shading half the window, signage covering a third of the facade, a wardrobe or bed pushed against the glass from inside blocking heat dissipation, a heavy curtain a few centimetres away trapping hot air against the pane, an air-conditioning outlet blowing a cold patch onto hot glass. All of them create sharp thermal gradients inside one pane.\n\nEdge condition adds to this. The 3M bulletin notes that edge strength depends on glass size, thickness, how it is cut and the glazier's treatment of the edge, that a straight clean edge is the strongest, and that damaged edges can reduce edge strength by up to 50%. That is why a professional inspects pane edges before installing: a poor cut or a small nip in the edge may be the real cause, with the film only the final straw."
      },
      {
        "heading": "الزجاج المزدوج (IGU) والواجهات: حالة تحتاج عناية إضافية",
        "headingEn": "Insulated Glazing Units and Facades: A Case Needing Extra Care",
        "body": "الزجاج المزدوج المعزول (Insulated Glazing Unit) شائع في الأبراج والمشاريع الحديثة في جدة، وهو حالة تستحق حذراً أعلى لسببين. الأول أن تركيبة الوحدة نفسها متغيّر إضافي في حساب التوافق: الوثيقة الأوروبية تدرج نوع التزجيج ضمن العوامل المؤثرة إلى جانب نوع الفيلم ونوع الزجاج ولونه وطلاءاته وسماكته ومقاس اللوح والتظليل الخارجي والمواد الخلفية مثل الستائر ونوع الإطار والارتفاع وشدة الطاقة الشمسية. الثاني أن اللوح الداخلي في كثير من الوحدات يكون ملدّناً عادياً، وهو النوع الأضعف حرارياً، والفيلم يُركَّب عليه من الداخل.\n\nيُضاف إلى ذلك اعتبار لا علاقة له بالكسر أصلاً لكنه يهم المالك: بعض شركات الزجاج تشترط شروطاً على وحدات الزجاج المزدوج وقد يؤثر تركيب فيلم عليها على تغطية ضمان الوحدة أو مانع التسرب الحافي (Edge Seal). لذلك القاعدة عندنا واضحة: قبل أي عرض سعر لمشروع فيه زجاج مزدوج، نحدد إن كان اللوح الداخلي ملدّناً أم مقوّى حرارياً أم مقسّى، ونحدد سماكة كل لوح، وهل الزجاج ملوّن في الكتلة أو يحمل طلاءً منخفض الانبعاثية (Low-E)، ونراجع جدول التوافق قبل التوصية بأي منتج.\n\nفي مشاريع الواجهات الزجاجية والحوائط الستائرية نضيف طبقة أخرى: توحيد المواصفة على كامل الواجهة، لأن اختلاف الألواح بين الأدوار أمر شائع في المباني القديمة. تفاصيل هذا النوع من المشاريع شرحناها في مقال عزل الواجهات الزجاجية والحوائط الستائرية.",
        "bodyEn": "Insulated glazing units are common in Jeddah's towers and newer projects, and they deserve extra caution for two reasons. First, the unit's construction is itself a variable in the compatibility calculation: the European document lists glazing type among the influencing factors, alongside film type, glass type, glass colour and coatings, glass thickness, pane size, external shading, backup materials such as blinds and curtains, frame type, altitude and solar energy intensity. Second, the inboard lite in many units is ordinary annealed glass, the weakest type thermally, and the film is applied to it from inside.\n\nThere is also a consideration unrelated to breakage that still matters to the owner: some glass suppliers impose conditions on sealed units, and applying film can affect coverage of the unit warranty or the edge seal. So our rule is explicit: before quoting any project with double glazing we establish whether the inboard lite is annealed, heat-strengthened or tempered, record the thickness of each lite, check whether the glass is body-tinted or carries a low-E coating, and consult the compatibility chart before recommending any product.\n\nOn curtain wall and glass facade projects we add another layer: standardising the specification across the whole elevation, because pane variation between floors is common in older buildings. We cover that project type in detail in our glass facade and curtain wall insulation article."
      },
      {
        "heading": "المسح الزجاجي قبل التسعير: ماذا يفحص الفني فعلياً",
        "headingEn": "The Glass Survey Before Quoting: What the Technician Actually Checks",
        "body": "المسح الزجاجي ليس إجراءً شكلياً ولا حيلة بيعية، بل هو خطوة الهندسة الوحيدة التي تحوّل هذا الخطر من احتمال مجهول إلى قرار محسوب. في عزل كور نصل إلى الموقع قبل إصدار عرض السعر، ونسجّل قائمة ثابتة من البيانات لكل واجهة.\n\nنوع الزجاج: ملدّن أم مقوّى حرارياً أم مقسّى، ووجود ختم المصنع على الزاوية إن وُجد. سماكة اللوح ومقاسه، لأن الألواح الكبيرة والسميكة تتصرف بشكل مختلف. هل التزجيج مفرد أم مزدوج، وترتيب الألواح والطلاءات. لون الزجاج: شفاف أم ملوّن في الكتلة (Body-Tinted)، لأن الزجاج الملوّن يمتص أصلاً أكثر من الشفاف كما تذكر نشرة 3M. حالة الحواف: قصّ نظيف أم حواف مكسورة أو منقورة أو بها شظايا صغيرة. الاتجاه: شمالي، جنوبي، شرقي، غربي، وزاوية السقوط الشمسي في أشد الأوقات. نمط التظليل: بروزات، مظلات، أعمدة، أشجار، مبانٍ مجاورة، لافتات. ما خلف الزجاج من الداخل: ستائر، بلايندات، أثاث ملاصق، مخارج تكييف موجّهة.\n\nهذه البيانات ليست للأرشيف. تُدخَل مباشرة في جدول توافق الفيلم مع الزجاج لاختيار المنتج، وقد تقودنا إلى نتيجة غير مريحة تجارياً: أن الفيلم الداكن الذي طلبه العميل غير مناسب لهذه الواجهة، وأن البديل هو منتج انتقائي طيفي منخفض الامتصاص أو عاكس. قول ذلك قبل التركيب هو الفارق بين مورّد يبيع منتجاً ومورّد يتحمّل مسؤولية نتيجة.",
        "bodyEn": "A glass survey is neither a formality nor a sales trick; it is the one engineering step that turns this risk from an unknown probability into a calculated decision. At AzelCore we attend site before issuing a quote and record a fixed data set for every elevation.\n\nGlass type: annealed, heat-strengthened or tempered, with the factory stamp in the corner where present. Pane thickness and size, because large thick lites behave differently. Whether the glazing is monolithic or an insulated unit, and the order of lites and coatings. Glass colour: clear or body-tinted, since tinted glass absorbs more energy than clear glass, as the 3M bulletin notes. Edge condition: clean cut, or chipped, nipped or seamed edges. Orientation: north, south, east, west, and the solar incidence angle at the harshest hours. Shading pattern: overhangs, canopies, columns, trees, neighbouring buildings, signage. What sits behind the glass inside: curtains, blinds, furniture pushed against the pane, air-conditioning outlets aimed at the window.\n\nThis data is not for the archive. It feeds straight into the film-to-glass compatibility chart to select the product, and it can lead to a commercially uncomfortable conclusion: the dark film the customer asked for is not suitable for this elevation, and the alternative is a low-absorption spectrally selective or reflective product. Saying that before installation is the difference between a supplier who sells a product and one who owns an outcome."
      },
      {
        "heading": "جداول التوافق وعلاقتها المباشرة بالضمان",
        "headingEn": "Compatibility Charts and Their Direct Link to Warranty",
        "body": "الشركات المصنّعة الجادة لا تترك هذا القرار للاجتهاد. الجمعية الدولية لأفلام النوافذ تذكر أن مصنّعي الأفلام لديهم جداول موصى بها للتوافق بين الفيلم والزجاج يستخدمها الوكلاء والفنيون المدرَّبون من المصنع، وتنصح العميل الذي لديه شك بأن يطلب نسخة من هذه الإرشادات. الوثيقة الأوروبية تؤكد نفس الأمر: المصنّعون طوّروا توصيات توافق حراري بين الفيلم والزجاج لأشهر الأنظمة الزجاجية، مما يجعل التقييم سريعاً وسهلاً على المحترف المدرَّب.\n\nالنقطة العملية التي يجب أن يفهمها كل مالك عقار: هذه الجداول ليست ورقة داخلية بين المصنع والوكيل، بل هي أساس التغطية. الضمانات في هذه الصناعة تُبنى على أن يكون الفيلم قد حُدِّد وفق توصيات المصنّع للزجاج المعني، والتحديد الخاطئ خارج هذه التوصيات هو ما يفتح باب النزاع لاحقاً. بعبارة أخرى: المواصفة الصحيحة هي الحماية، وليست العبارة التسويقية «مضمون ضد الكسر».\n\nلذلك نقول للعميل دائماً: لا تسأل «هل عندك ضمان؟» بل اطلب شيئين مكتوبين. الأول: نتيجة تقييم التوافق للزجاج الذي عندك مع الفيلم المقترح، بالاسم التجاري للمنتج ومعه نسبة الامتصاص الشمسي المنشورة له. الثاني: نص وثيقة الضمان نفسها وما تستثنيه بالتحديد فيما يخص الكسر الحراري وحالة الحواف والزجاج المزدوج. المورّد الذي يرفض تقديمهما أو يقول «لا تعقّد الموضوع» هو الخطر الحقيقي في هذه المعادلة، لا الفيلم. وقد شرحنا خطوات المطالبة عملياً في مقال تفعيل مطالبة الضمان خطوة بخطوة.",
        "bodyEn": "Serious manufacturers do not leave this decision to improvisation. The International Window Film Association states that window film manufacturers have recommended film-to-glass tables for use by factory-trained dealer installers, and advises a customer who is unsure to request a copy of those guidelines. The European document confirms the same: manufacturers have developed film-to-glass thermal stress compatibility recommendations for the most common glazing systems, generally making the assessment quick and easy for a trained professional.\n\nThe practical point every property owner should grasp is that these charts are not internal paperwork between factory and dealer; they are the basis of coverage. Warranties in this industry rest on the film having been specified in line with the manufacturer's recommendations for the glass in question, and a specification made outside those recommendations is what opens the door to a dispute later. In other words, correct specification is the protection, not a marketing phrase such as \"guaranteed against breakage\".\n\nSo we tell clients: do not ask \"do you offer a warranty?\" Ask for two things in writing. First, the compatibility assessment result for your specific glass against the proposed film, named by its commercial product name and accompanied by that product's published solar absorptance. Second, the warranty document text itself and exactly what it excludes regarding thermal fracture, edge condition and insulated units. A supplier who refuses both, or says \"don't overcomplicate it\", is the real risk in this equation, not the film. We set out the claim procedure step by step in our warranty claim article."
      },
      {
        "heading": "حالة السيارات: لماذا الخطر شبه معدوم",
        "headingEn": "The Car Case: Why the Risk Is Close to Nil",
        "body": "الخلط الأكبر في السوق أن الناس تنقل قلق زجاج المباني إلى السيارة، والحالتان مختلفتان جوهرياً. زجاج السيارات يخضع لمعايير تزجيج مركبات خاصة، ففي النظام الأمريكي مثلاً يحكم المعيار الفيدرالي FMVSS 205 مواد التزجيج بالاستناد إلى معيار ANSI/SAE Z26.1، والزجاج الأمامي في سيارات الركاب يكون زجاجاً مُصفَّحاً (Laminated)، بينما تُستخدم في المواضع الأخرى أنواع مقسّاة أو مُصفَّحة. أما في السوق السعودي فالمركبات تُعتمد وفق مواصفات هيئة التقييس لدول الخليج (GSO) التي تتبنّى لوائح الأمم المتحدة/إيكه، ومنها اللائحة رقم 43 الخاصة بمواد التزجيج الآمن. والنتيجة واحدة في الحالتين: زجاج السيارة زجاج أمان معالج، لا زجاج فلوت ملدّن كالذي في نافذة غرفة.\n\nأضف إلى ذلك ثلاثة فروق عملية. الأول أن الألواح صغيرة نسبياً مقارنة بألواح الواجهات، والمساحة الصغيرة تعني تدرّجات حرارية أقل حدّة. الثاني أن الزجاج المقسّى كمادة يتحمل فروق حرارة تقارب 250 درجة مئوية بحسب الوثيقة الفنية للجمعية الأوروبية لأفلام النوافذ - وهي وثيقة زجاج مسطّح معماري وليست مواصفة سيارات، لكن الرقم يصف خاصية الزجاج المقسّى نفسه - وهو فارق بعيد تماماً عن أي ظرف تشغيلي حقيقي. الثالث أن الفيلم يُركَّب على السطح الداخلي لزجاج معالج أصلاً ومصمَّم لتحمّل تقلبات حرارية يومية.\n\nلهذا نقول بوضوح: قلق الكسر الحراري هو مسألة زجاج معماري، وليس مسألة تظليل سيارات. الأسئلة الجدّية في تظليل السيارات مختلفة تماماً: نسبة النفاذ الضوئي ومطابقة النظام، وجودة القص، ورفض الأشعة تحت الحمراء. وقياساتنا الميدانية في دراسة جدة الحرارية 2024-2026 (n=530، كاميرا FLIR T530، ISO 13837:2021) تخص خفض حرارة المقصورة من نحو 77 درجة مئوية بدون تظليل إلى نحو 40 درجة مع النانو سيراميك، وهي دراسة رفض حراري لا دراسة كسر زجاج، ومنشورة كاملة على صفحة الدراسة في موقعنا. أسعار النانو سيراميك للسيدان لدينا 1,500-2,200 ريال شاملة التركيب والضمان.",
        "bodyEn": "The biggest confusion in the market is transferring architectural glass anxiety onto the car, and the two cases differ fundamentally. Automotive glazing is governed by vehicle glazing standards; in the US system, for example, FMVSS 205 regulates glazing materials by reference to ANSI/SAE Z26.1, passenger vehicle windshields are laminated glass, and tempered or laminated types are used in other positions. In the Saudi market, vehicles are approved under GSO standards that adopt the UN ECE regulations, including UN Regulation No. 43 on safety glazing materials. The outcome is the same either way: car glass is treated safety glazing, not the annealed float glass found in a room window.\n\nAdd three practical differences. First, the panes are relatively small compared with facade lites, and small areas mean gentler thermal gradients. Second, tempered glass as a material resists temperature differences of about 250 degrees Celsius according to the European Window Film Association technical article - an architectural flat-glass document rather than an automotive specification, though the figure describes the property of tempered glass itself - a margin far beyond any real operating condition. Third, the film is applied to the inboard surface of glass that was already toughened and designed for daily thermal cycling.\n\nSo we say it plainly: thermal fracture is an architectural glazing concern, not a car tinting concern. The serious questions in car tinting are different, namely visible light transmission and legal compliance, cut quality, and infrared rejection. Our field measurements in the Jeddah Vehicle Thermal Rejection Study 2024-2026 (n=530, FLIR T530, ISO 13837:2021) address cabin temperature dropping from around 77 degrees Celsius untinted to around 40 degrees with nano-ceramic film; that is a heat rejection study, not a glass breakage study, and it is published in full on our research page. Our nano-ceramic pricing for a sedan is 1,500-2,200 SAR including installation and warranty."
      },
      {
        "heading": "كيف تميّز المورّد الآمن من المورّد الخطر",
        "headingEn": "How to Tell a Safe Supplier from a Risky One",
        "body": "بعد كل ما سبق، تصبح الخلاصة العملية بسيطة: خطر الكسر الحراري لا يُدار بالحظ ولا بالثقة الشخصية، بل بإجراء. وأسهل طريقة للمالك أن يقيّم المورّد هي أن ينظر إلى سلوكه قبل التعاقد لا بعده.\n\nالإشارات الجيدة: يزور الموقع قبل التسعير، ويسأل عن نوع الزجاج وسماكته وحالته، ويصوّر الحواف والاتجاهات وأنماط الظل، ويذكر لك أن هناك جدول توافق سيراجعه، ويشرح لك الفرق بين الفيلم الماص والانتقائي طيفياً ويستشهد بنسبة الامتصاص الشمسي المنشورة للمنتج بدل أن يعرض «الأغمق أفضل»، ويوافق على تسليمك التقييم ووثيقة الضمان مكتوبين، ولا يمانع أن يقول لك إن منتجاً معيناً غير مناسب لواجهتك.\n\nالإشارات الخطرة: يسعّر عبر الواتساب بالمتر المربع دون رؤية الزجاج، ويقول «مستحيل ينكسر، مليون تركيبة وما صار شيء»، ويصرّ على الفيلم الأغمق لأنه الأرخص عنده أو لأن العميل طلبه دون مناقشة، ويتهرّب من سؤال نوع الزجاج بعبارة «كله زجاج»، ولا يملك وثيقة ضمان مطبوعة باسم المصنّع، ويرفض تحمّل مسؤولية المواصفة كتابياً.\n\nنقطة أخيرة مهمة للسوق السعودي: التوافق شيء والمطابقة النظامية شيء آخر. اختيار الفيلم المناسب حرارياً لا يعفي المشروع من متطلبات كود البناء السعودي للزجاج، وقد شرحنا ذلك في دليل مطابقة الزجاج لكود البناء السعودي 601/602. المشروع الجيد يجمع الاثنين: مواصفة آمنة حرارياً ومطابقة نظامياً.",
        "bodyEn": "After all the above, the practical conclusion is simple: thermal fracture risk is not managed by luck or personal trust, but by procedure. The easiest way for an owner to judge a supplier is to watch how it behaves before contracting, not after.\n\nGood signs: it attends site before quoting, asks about glass type, thickness and condition, photographs edges, orientations and shading patterns, tells you there is a compatibility chart it will consult, explains the difference between absorptive and spectrally selective film and cites the product's published solar absorptance instead of pushing \"darker is better\", agrees to hand over the assessment and warranty document in writing, and is willing to tell you a particular product is unsuitable for your elevation.\n\nWarning signs: it quotes per square metre over WhatsApp without seeing the glass, says \"it can never break, we've done a million jobs\", insists on the darkest film because it is cheapest in stock or simply because the customer asked, dodges the glass-type question with \"glass is glass\", holds no printed manufacturer warranty document, and refuses to take written responsibility for the specification.\n\nOne last point for the Saudi market: compatibility is one thing, regulatory compliance is another. Choosing a thermally safe film does not exempt a project from Saudi Building Code glazing requirements, which we cover in our SBC 601/602 glass compliance guide. A good project delivers both: a thermally safe specification and a compliant one."
      },
      {
        "heading": "الخلاصة الصادقة: خطر صغير لكنه ليس صفراً",
        "headingEn": "The Honest Conclusion: A Small Risk, but Not Zero",
        "body": "الوثيقة الفنية الأوروبية تختم مسألتها بجملة نتبنّاها حرفياً كسياسة عمل: ما دام التركيب قد قُيّم مهنياً من حيث توافقه مع الزجاج والتزجيج وفق العوامل المذكورة، فإن خطر الكسر الحراري يبقى منخفضاً، لكنه لا يمكن أن يكون صفراً أبداً بسبب الخصائص الطبيعية للزجاج. وتضيف أن الزجاج قد ينكسر أصلاً بوجود فيلم أو بدونه.\n\nهذه هي الصورة الكاملة. من يقول لك «صفر مخاطر» يبيعك وهماً، ومن يقول لك «الفيلم يكسر الزجاج» يحرمك من توفير 35-40% من استهلاك التكييف بلا سبب حقيقي. الموقف المهني بينهما: الخطر معروف، ومصادره معروفة، وأدوات إدارته معروفة ومنشورة من الجمعيات المتخصصة والشركات المصنّعة.\n\nما نلتزم به في عزل كور بجدة: مسح زجاجي قبل التسعير لكل مشروع مبانٍ، وتحديد المنتج وفق جدول توافق الفيلم مع الزجاج، وتفضيل الأفلام الانتقائية طيفياً منخفضة الامتصاص (بحسب بيانات المصنّع المنشورة) والأفلام العاكسة على الأفلام الداكنة الماصة في الأسطح المُلدّنة، ورفض التركيب على الألواح ذات الحواف التالفة قبل معالجتها، وتوثيق كل ذلك كتابياً مع وثيقة الضمان.\n\nوإذا كنت تفكر في عزل زجاج فيلا أو مكتب أو واجهة تجارية، فابدأ من التشخيص لا من السعر. تفاصيل التكاليف والخيارات موجودة في دليل تكلفة عزل زجاج الفلل في جدة والدليل الشامل لعزل المباني في السعودية، أما القرار الفني الصحيح فيبدأ من زيارة الموقع.",
        "bodyEn": "The European technical document closes with a sentence we adopt verbatim as policy: as long as the installation has been professionally assessed for compatibility with the glass and glazing according to these factors, the risk of thermal stress breakage remains low, yet it can never be zero because of the natural properties of glass. It also notes that glass can always break whether film is installed or not.\n\nThat is the complete picture. Anyone promising zero risk is selling an illusion; anyone claiming film breaks glass is denying you a 35-40% cut in air-conditioning consumption for no genuine reason. The professional position sits between them: the risk is known, its sources are known, and the tools for managing it are known and published by industry associations and manufacturers.\n\nWhat we commit to at AzelCore in Jeddah: a glass survey before quoting on every building project, product selection against a film-to-glass compatibility chart, preference for low-absorption spectrally selective films (per the manufacturer's published data) and reflective films over dark absorptive films on annealed glazing, refusal to install over damaged edges until they are addressed, and documentation of all of it in writing alongside the warranty.\n\nIf you are considering glass insulation for a villa, an office or a retail facade, start with the diagnosis rather than the price. Costs and options are detailed in our Jeddah villa glass insulation cost guide and our complete Saudi building insulation guide, but the correct technical decision starts with a site visit."
      }
    ],
    "table": {
      "headers": [
        "نوع الزجاج / الحالة",
        "فيلم انتقائي طيفي منخفض الامتصاص (بحسب بيانات المصنّع)",
        "فيلم عاكس",
        "فيلم داكن ماص",
        "الإجراء المطلوب قبل التركيب"
      ],
      "headersEn": [
        "Glass Type / Condition",
        "Spectrally Selective Film, Low Absorption (per manufacturer data)",
        "Reflective Film",
        "Dark Absorptive Film",
        "Required Action Before Installation"
      ],
      "rows": [
        [
          "زجاج مقسّى (Tempered)",
          "منخفض جداً",
          "منخفض جداً",
          "منخفض جداً",
          "لا يحتاج تقييم إجهاد حراري إضافي"
        ],
        [
          "زجاج مقوّى حرارياً (Heat-Strengthened)",
          "منخفض",
          "منخفض",
          "منخفض إلى متوسط",
          "فحص الحالات الخاصة فقط (ظل جزئي، حواف)"
        ],
        [
          "زجاج ملدّن شفاف رقيق (فلوت 4-6 مم)",
          "منخفض",
          "منخفض إلى متوسط",
          "متوسط",
          "تقييم توافق فيلم/زجاج إلزامي"
        ],
        [
          "زجاج ملدّن سميك أو ملوّن في الكتلة",
          "متوسط",
          "متوسط",
          "مرتفع",
          "تقييم إلزامي وتجنّب الأفلام الماصة"
        ],
        [
          "زجاج مزدوج IGU واللوح الداخلي ملدّن",
          "متوسط",
          "متوسط",
          "مرتفع",
          "تقييم إلزامي + مراجعة ضمان الوحدة والحافة"
        ],
        [
          "أي زجاج بحواف تالفة أو تظليل جزئي حاد",
          "متوسط",
          "متوسط إلى مرتفع",
          "مرتفع",
          "معالجة الحافة أو تغيير المواصفة قبل التركيب"
        ],
        [
          "زجاج السيارات (جانبي مقسّى / أمامي مُصفَّح Laminated)",
          "ضئيل",
          "ضئيل",
          "ضئيل",
          "لا ينطبق عملياً - المعيار هو نسبة النفاذ الضوئي"
        ]
      ],
      "rowsEn": [
        [
          "Tempered glass",
          "Very low",
          "Very low",
          "Very low",
          "No additional thermal stress assessment needed"
        ],
        [
          "Heat-strengthened glass",
          "Low",
          "Low",
          "Low to moderate",
          "Check special conditions only (partial shade, edges)"
        ],
        [
          "Thin clear annealed float (4-6 mm)",
          "Low",
          "Low to moderate",
          "Moderate",
          "Film-to-glass compatibility assessment mandatory"
        ],
        [
          "Thick annealed or body-tinted glass",
          "Moderate",
          "Moderate",
          "High",
          "Mandatory assessment; avoid absorptive films"
        ],
        [
          "IGU with annealed inboard lite",
          "Moderate",
          "Moderate",
          "High",
          "Mandatory assessment + review unit and edge-seal warranty"
        ],
        [
          "Any glass with damaged edges or sharp partial shading",
          "Moderate",
          "Moderate to high",
          "High",
          "Treat the edge or change the specification before installing"
        ],
        [
          "Automotive glass (tempered sides / laminated windshield)",
          "Minimal",
          "Minimal",
          "Minimal",
          "Not practically applicable - VLT compliance is the criterion"
        ]
      ]
    },
    "faqs": [
      {
        "q": "لو ركّبت عزل حراري على نوافذ الفيلا، هل يتشقق الزجاج؟",
        "qEn": "If I install heat-rejection film on my villa windows, will the glass crack?",
        "a": "الاحتمال منخفض إذا كانت المواصفة صحيحة، ومنخفض جداً إذا كان زجاجك مقسّى أو مقوّى حرارياً. الخطر يرتفع فقط عندما يجتمع زجاج ملدّن عادي مع فيلم داكن ماص وظروف مثل ظل جزئي أو ستائر ملاصقة أو حواف زجاج تالفة. لهذا نقوم بمسح زجاجي قبل عرض السعر ونختار المنتج وفق جدول التوافق ونسبة الامتصاص الشمسي المنشورة له، بدل أن نفترض أن كل النوافذ متشابهة.",
        "aEn": "The probability is low with a correct specification, and very low if your glass is tempered or heat-strengthened. Risk rises only when ordinary annealed glass combines with a dark absorptive film plus conditions such as partial shading, tight curtains or damaged pane edges. That is why we run a glass survey before quoting and select the product from a compatibility chart against its published solar absorptance, rather than assuming all windows are the same."
      },
      {
        "q": "انكسر لوح عندي بعد التركيب - كيف أعرف إن كان السبب الفيلم أو ضربة؟",
        "qEn": "A pane cracked after installation - how do I know whether the film or an impact caused it?",
        "a": "للكسر الحراري بصمة واضحة. بحسب النشرة الفنية للإجهاد الحراري من 3M للزجاج المعماري، يبدأ الشرخ من حافة الزجاج على بعد لا يقل عن بوصتين من الركن، ويكون أول نصف بوصة إلى بوصة منه عمودياً على الحافة بزاوية 90 درجة. أما كسر الصدمة فينطلق من نقطة اصطدام واضحة بشكل إشعاعي. صوّر الشرخ من الحافة وأرسله لنا قبل أي إصلاح، فالتشخيص يحدد المسؤولية.",
        "aEn": "Thermal fracture has a clear signature. According to the 3M architectural window film thermal stress bulletin, the crack starts at the glass edge at least two inches from a corner, and its first half-inch to one inch runs perpendicular to the edge at 90 degrees. An impact break instead radiates from a visible point of contact. Photograph the crack at the edge and send it to us before any repair, because the diagnosis determines responsibility."
      },
      {
        "q": "هل الضمان يغطي كسر الزجاج نفسه؟",
        "qEn": "Does the warranty cover breakage of the glass itself?",
        "a": "لا تفترض ذلك، واطلب النص المكتوب. ضمانات هذه الصناعة تُبنى على أن يكون الفيلم قد حُدِّد وفق توصيات المصنّع للزجاج المعني، وتقييم التوافق هو ما يثبت ذلك. اطلب من المورّد شيئين: نتيجة تقييم التوافق باسم المنتج التجاري، ونص وثيقة الضمان مع استثناءاتها المتعلقة بالكسر الحراري وحالة الحواف والزجاج المزدوج. من يرفض تسليمهما مكتوبين هو الخطر الحقيقي وليس الفيلم.",
        "aEn": "Do not assume so - ask for the written text. Warranties in this industry are built on the film having been specified in line with the manufacturer's recommendations for that glass, and the compatibility assessment is what proves it. Ask your supplier for two things: the assessment result naming the commercial product, and the warranty document with its exclusions covering thermal fracture, edge condition and insulated units. A supplier refusing to provide both in writing is the real risk, not the film."
      },
      {
        "q": "أنا خايف على سيارتي - هل التظليل يكسر زجاجها؟",
        "qEn": "I'm worried about my car - does tinting break its glass?",
        "a": "عملياً لا. زجاج السيارة أساساً زجاج أمان معالج: الزجاج الأمامي مُصفَّح (Laminated) والزجاج الجانبي مقسّى في الغالب وفق معايير تزجيج المركبات (لائحة الأمم المتحدة/إيكه رقم 43 المعتمدة خليجياً عبر مواصفات GSO)، والزجاج المقسّى يتحمل فروق حرارة تقارب 250 درجة مئوية بحسب الوثيقة الفنية للجمعية الأوروبية لأفلام النوافذ (وهي وثيقة زجاج معماري مسطّح، والرقم يخص خاصية الزجاج المقسّى نفسه). أضف أن الألواح صغيرة والفيلم يُركَّب داخل زجاج مصمّم أصلاً للتقلبات الحرارية. قلق الكسر الحراري مسألة زجاج مبانٍ، لا مسألة تظليل سيارات.",
        "aEn": "Practically, no. Car glass is already treated safety glazing: windshields are laminated and side glass is generally tempered under vehicle glazing standards (UN ECE Regulation No. 43, adopted in the Gulf through GSO standards), and tempered glass resists temperature differences of about 250 degrees Celsius according to the European Window Film Association technical article (an architectural flat-glass document; the figure describes the property of tempered glass itself). Add that the panes are small and the film goes onto glass designed for daily thermal cycling. Thermal fracture is an architectural glazing issue, not a car tinting one."
      },
      {
        "q": "عندي زجاج دبل (مزدوج) - أقدر أركّب فيلم عليه؟",
        "qEn": "I have double glazing - can I still apply film?",
        "a": "نعم في كثير من الحالات، لكن بعد تقييم لا قبله. الوحدة المزدوجة تضيف متغيرات: نوع اللوح الداخلي (غالباً ملدّن)، سماكة كل لوح، الطلاءات منخفضة الانبعاثية، ولون الزجاج. كما أن تركيب فيلم قد يمسّ شروط ضمان الوحدة أو مانع التسرب الحافي لدى بعض موردي الزجاج. نحدد هذه التفاصيل في المسح الزجاجي أولاً، ثم نوصي بمنتج انتقائي طيفي أو عاكس منخفض الامتصاص إذا أظهرت بيانات المصنّع أنه مناسب.",
        "aEn": "In many cases yes, but after an assessment rather than before one. A sealed unit adds variables: the inboard lite type (often annealed), the thickness of each lite, low-E coatings and glass colour. Applying film can also touch the unit warranty or edge-seal conditions with some glass suppliers. We establish those details in the glass survey first, then recommend a low-absorption spectrally selective or reflective product if the manufacturer's data shows it is suitable."
      },
      {
        "q": "المورّد قال «ولا مرة انكسر عندنا زجاج» - هل هذا كافٍ؟",
        "qEn": "A supplier told me \"we've never broken a pane\" - is that enough?",
        "a": "لا. الخبرة السابقة ليست تقييماً هندسياً لزجاجك أنت. الوثيقة الفنية الأوروبية تقول بوضوح إن الخطر يبقى منخفضاً إذا قُيّم التركيب مهنياً، لكنه لا يمكن أن يكون صفراً بسبب الخصائص الطبيعية للزجاج. المورّد المحترف يقول لك: «هذا نوع زجاجك، وهذه حالته، وهذا الفيلم المناسب له، وهذا سبب استبعاد الفيلم الآخر». أما الوعد المطلق فهو إشارة إنذار لا طمأنة.",
        "aEn": "No. Past experience is not an engineering assessment of your glass. The European technical article states plainly that risk stays low when the installation is professionally assessed, but can never be zero because of the natural properties of glass. A professional supplier tells you: this is your glass type, this is its condition, this is the suitable film, and this is why the other film was excluded. An absolute promise is a warning sign, not reassurance."
      },
      {
        "q": "هل الستائر والأثاث الملاصق للزجاج يفرقون فعلاً؟",
        "qEn": "Do curtains and furniture pushed against the glass really matter?",
        "a": "نعم، وهذا مذكور صراحة ضمن عوامل الخطر في نشرة 3M الفنية للإجهاد الحراري: الستائر أو البلايندات المحكمة، واللافتات والملصقات على الزجاج، وفتحات التكييف الموجّهة نحو الزجاج، وأنماط الظل الجزئي من البروزات. كلها تخلق فروق حرارة حادة داخل اللوح الواحد. لذلك نسأل في المسح عمّا يوجد خلف الزجاج من الداخل، ولا نكتفي بالنظر إلى الواجهة من الخارج.",
        "aEn": "Yes, and this is listed explicitly among the risk factors in 3M's thermal stress technical bulletin: tight-fitting drapes or blinds, painted signs, decals or labels on the glass, heating and cooling vents directed at the glass, and partial shading patterns from overhangs. All of them create sharp temperature differences within one pane. That is why our survey asks what sits behind the glass indoors, rather than only looking at the elevation from outside."
      }
    ],
    "warning": "تحذير فني: لا تسمح بتركيب فيلم داكن عالي الامتصاص على زجاج ملدّن عادي أو على اللوح الداخلي لوحدة زجاج مزدوج دون تقييم توافق مكتوب من الشركة المصنّعة، ولا تعتمد على اسم التقنية («سيراميك» أو «انتقائي طيفي») بديلاً عن نسبة الامتصاص الشمسي المنشورة للمنتج، ولا تركّب على ألواح ذات حواف تالفة أو منقورة قبل معالجتها - فحسب النشرة الفنية للإجهاد الحراري من 3M قد تخفض الحواف التالفة متانة الحافة بنسبة تصل إلى 50%. تجنّب أيضاً أفلام «افعلها بنفسك» على واجهات المباني، لأن الخطر هنا ليس في جودة اللصق بل في قرار المواصفة نفسه.",
    "warningEn": "Technical warning: do not allow a dark, highly absorptive film to be applied to ordinary annealed glass or to the inboard lite of an insulated unit without a written manufacturer compatibility assessment, do not treat a technology name ('ceramic' or 'spectrally selective') as a substitute for the product's published solar absorptance, and do not install over chipped or nipped pane edges before they are addressed - according to 3M's thermal stress technical bulletin, damaged edges can reduce edge strength by up to 50%. Avoid DIY films on building facades as well, because the risk there lies in the specification decision, not in the quality of the application.",
    "cta": "إذا كنت تفكر في عزل زجاج فيلا أو مكتب أو واجهة تجارية في جدة وتقلقك مسألة الكسر الحراري، فهذا بالضبط ما يُحسم بزيارة موقع لا بمكالمة سعر. في عزل كور - وكيل جونسون و3M الرسمي - نقدّم مسحاً زجاجياً قبل التسعير: نحدد نوع الزجاج وسماكته وحالة حوافه ونمط الظل والاتجاه، ثم نختار المنتج وفق جدول توافق الفيلم مع الزجاج ونسلّمك التوصية ووثيقة الضمان مكتوبتين. تواصل مع محمد الهادي على +966564612017 (اتصال أو واتساب) لترتيب زيارة، ولو كان الجواب أن فيلماً معيناً لا يناسب واجهتك فسنقولها لك قبل التركيب لا بعده.",
    "ctaEn": "If you are considering glass insulation for a villa, office or retail facade in Jeddah and thermal fracture worries you, this is exactly what a site visit settles rather than a phone quote. At AzelCore - authorized Johnson and 3M dealer - we provide a glass survey before quoting: we record glass type, thickness, edge condition, shading pattern and orientation, then select the product against a film-to-glass compatibility chart and hand you the recommendation and warranty document in writing. Call or WhatsApp Mohammed Al-Hadi on +966564612017 to arrange a visit, and if the answer is that a particular film does not suit your elevation, we will say so before installation rather than after.",
    "sources": [
      {
        "label": "3M - النشرة الفنية لأفلام النوافذ: الإجهاد الحراري (يناير 2019) - وثيقة زجاج مسطّح/معماري وليست وثيقة سيارات",
        "labelEn": "3M Window Film Technical Bulletin: Thermal Stress (Rev. A, January 2019) - architectural flat-glass document, not an automotive specification",
        "url": "https://multimedia.3m.com/mws/media/1704947O/thermal-stress.pdf"
      },
      {
        "label": "الجمعية الأوروبية لأفلام النوافذ (EWFA) - الإجهاد الحراري: توافق الفيلم مع الزجاج (زجاج مسطّح معماري)",
        "labelEn": "European Window Film Association - Thermal Stress: Film-to-Glass Compatibility (architectural flat glass)",
        "url": "https://www.glassonweb.com/article/thermal-stress-film-glass-compatibility"
      },
      {
        "label": "الجمعية الدولية لأفلام النوافذ (IWFA) - الأسئلة الشائعة: هل يؤدي الفيلم إلى كسر الزجاج؟",
        "labelEn": "International Window Film Association - FAQ: Will window film lead to glass breaking?",
        "url": "https://iwfa.com/faq/"
      },
      {
        "label": "الجمعية الوطنية للزجاج (NGA) - ورقة فنية FB45-14: التطبيقات الموصى بها للزجاج المعالج حرارياً (زجاج مسطّح معماري)",
        "labelEn": "National Glass Association Technical Paper FB45-14: Recommended Applications for Heat-Treated Glass (architectural flat glass)",
        "url": "https://www.glass.org/sites/default/files/2021-08/FB45-14_2019_Recommended_Applications_for_Heat-Treated_Glass_0521_0.pdf"
      },
      {
        "label": "المعيار الفيدرالي الأمريكي FMVSS 205 لمواد تزجيج المركبات - 49 CFR 571.205 (النسخة الرسمية على govinfo) (وثيقة سيارات)",
        "labelEn": "US FMVSS No. 205, Glazing Materials, 49 CFR 571.205 (official govinfo copy) (automotive document)",
        "url": "https://www.govinfo.gov/content/pkg/CFR-2023-title49-vol6/pdf/CFR-2023-title49-vol6-sec571-205.pdf"
      },
      {
        "label": "لائحة الأمم المتحدة/إيكه رقم 43 - الأحكام الموحّدة لاعتماد مواد التزجيج الآمن وتركيبها على المركبات (وثيقة سيارات)",
        "labelEn": "UN ECE Regulation No. 43 - Uniform provisions concerning the approval of safety glazing materials and their installation on vehicles (automotive document)",
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:42014X0212(01)"
      },
      {
        "label": "دراسة عزل كور لرفض الحرارة في مركبات جدة 2024-2026 (n=530، كاميرا FLIR T530، ISO 13837:2021)",
        "labelEn": "AzelCore Jeddah Vehicle Thermal Rejection Study 2024-2026 (n=530, FLIR T530, ISO 13837:2021)",
        "url": "https://azelcore.com/research/ksa-thermal-report-2026"
      }
    ]
  }
};

export default article;
