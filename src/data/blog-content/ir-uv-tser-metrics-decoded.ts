import type { ArticleModule } from './types';

// IR vs UV vs TSER Decoded: The Window-Film Spec Sheet Every KSA Buyer Misreads
// Spoke article · authored 2026-06-16 · grounded in real AzelCore data (no fabricated ratings)
const article: ArticleModule = {
  "ogImage": "hero-thermal-insulation.webp",
  "serviceLinks": [
    {
      "href": "/car-insulation-jeddah",
      "text": "تظليل نانو سيراميك بأرقام TSER و VLT مكتوبة",
      "textEn": "Nano-Ceramic Tinting with Written TSER and VLT Numbers"
    },
    {
      "href": "/3m-authorized-dealer",
      "text": "3M Crystalline — TSER حتى ~90% و 200+ طبقة",
      "textEn": "3M Crystalline — TSER up to ~90% and 200+ layers"
    },
    {
      "href": "/johnson-authorized-dealer",
      "text": "جونسون Supreme IR — حجب IR 96-97% أصلي",
      "textEn": "Johnson Supreme IR — Original 96-97% IR Rejection"
    },
    {
      "href": "/research/ksa-thermal-report-2026",
      "text": "تقرير عزل كور الحراري: قياسات FLIR في جدة",
      "textEn": "AzelCore Thermal Report: FLIR Measurements in Jeddah"
    },
    {
      "href": "/calculator",
      "text": "حاسبة التظليل: قدّر التكلفة حسب سيارتك",
      "textEn": "Tint Calculator: Estimate Cost by Your Car"
    },
    {
      "href": "/blog/nano-ceramic-vs-carbon-vs-3m",
      "text": "مقارنة: نانو سيراميك مقابل كربوني مقابل 3M",
      "textEn": "Comparison: Nano-Ceramic vs Carbon vs 3M"
    },
    {
      "href": "/blog/how-to-spot-fake-tint",
      "text": "كيف تكشف التظليل المقلّد قبل الدفع",
      "textEn": "How to Spot Fake Tint Before Paying"
    },
    {
      "href": "/blog/flir-thermal-camera-tint-test",
      "text": "اختبار كاميرا FLIR الحرارية للتظليل",
      "textEn": "FLIR Thermal Camera Tint Test"
    }
  ],
  "content": {
    "quickAnswer": "باختصار: UV (الأشعة فوق البنفسجية) رقم صحي تحجبه معظم الأفلام بنسبة 99%، وIR (الأشعة تحت الحمراء) يقيس حجب جزء من طيف الحرارة فقط، أما TSER (إجمالي الطاقة الشمسية المرفوضة) فهو الرقم الوحيد الذي يلخّص العزل الحراري الكلي. ركّز على TSER عند الشراء، لا على رقم IR وحده.",
    "quickAnswerEn": "In short: UV (ultraviolet) is a health number most films block at 99%; IR (infrared) measures rejection of only part of the heat spectrum; while TSER (Total Solar Energy Rejected) is the single number that sums up total heat insulation. Focus on TSER when buying, not on the IR figure alone.",
    "intro": "حين تدخل أي معرض تظليل في جدة، يلوّح لك البائع بثلاثة أرقام لامعة على ملصق الفيلم: \"حجب 99% أشعة فوق بنفسجية\"، و\"حجب 97% أشعة تحت حمراء\"، وأحياناً رقم ثالث صغير اسمه TSER. الكثير من المشترين يختار الفيلم بناءً على أكبر رقم يراه، ويظن أن \"97% IR\" تعني أن السيارة ستبرد 97%. هذه المغالطة تكلّف آلاف الريالات سنوياً وتنتهي بسيارة مظلمة لكنها لا تزال حارة كالفرن. الحقيقة أن هذه الأرقام تقيس أشياء مختلفة تماماً من الطيف الشمسي، وبعضها يُستخدم عمداً لتضليل المشتري. في هذا الدليل، يشرح لك محمد الهادي — فني عزل وتظليل معتمد ووكيل جونسون و 3M في مركز عزل كور بجدة — كيف تقرأ ورقة المواصفات مثل المحترفين، وأي رقم يستحق فلوسك فعلاً، وأي رقم مجرد دعاية. سنربط كل ذلك بأرقام قياسات حرارية حقيقية أجريناها بكاميرا FLIR في عشرة أحياء بجدة، حتى تشتري على أساس علم، لا على أساس ملصق براق.",
    "introEn": "When you walk into any tint shop in Jeddah, the salesman waves three shiny numbers on the film label: \"99% UV blocked,\" \"97% IR blocked,\" and sometimes a smaller third number called TSER. Many buyers pick the film based on the biggest number they see, assuming \"97% IR\" means the car will be 97% cooler. This fallacy costs thousands of riyals a year and ends with a dark car that is still hot as an oven. The truth is these numbers measure completely different parts of the solar spectrum, and some are used deliberately to mislead the buyer. In this guide, Mohammed Al-Hadi — a certified insulation and tinting technician and authorized Johnson and 3M dealer at AzelCore in Jeddah — shows you how to read a spec sheet like the professionals do, which number actually deserves your money, and which is just marketing. We tie all of this to real thermal measurements we took with a FLIR camera across ten districts of Jeddah, so you buy based on science, not a glossy label.",
    "sections": [
      {
        "heading": "الطيف الشمسي أولاً: من أين تأتي الحرارة داخل سيارتك؟",
        "headingEn": "The Solar Spectrum First: Where Does the Heat Inside Your Car Come From?",
        "body": "قبل أن نفهم الأرقام، يجب أن نفهم العدو. ضوء الشمس الذي يضرب زجاج سيارتك ليس نوعاً واحداً، بل طيف من الطاقة مقسّم إلى ثلاثة أجزاء رئيسية. الجزء الأول هو الأشعة فوق البنفسجية (UV) ويمثّل قرابة 3% من الطاقة الشمسية فقط؛ هذا الجزء لا تشعر به كحرارة لكنه المسؤول عن تلف الجلد وبهتان الجلود والتابلوه. الجزء الثاني هو الضوء المرئي (Visible Light) ويمثّل نحو 44%؛ هذا هو الضوء الذي تراه عينك، وكمية مروره عبر الزجاج تُقاس بنسبة VLT المرتبطة بقانون المرور. الجزء الثالث والأهم حرارياً هو الأشعة تحت الحمراء (IR) ويمثّل نحو 53% من الطاقة؛ هذا هو ما تشعر به كحرارة لاسعة على ذراعك خلف المقود. المغالطة التي يقع فيها المشتري السعودي أن رقم \"IR 97%\" لا يحجب 97% من كامل حرارة الشمس، بل يحجب 97% من جزء معين فقط من طيف IR. لهذا قد تجد سيارتين بنفس رقم IR لكن إحداهما أبرد بكثير. الرقم الذي يجمع كل هذه الأجزاء معاً — UV والضوء المرئي والـ IR — في رقم واحد صادق هو TSER، وهو ما سنفككه بالتفصيل.",
        "bodyEn": "Before we understand the numbers, we must understand the enemy. The sunlight hitting your car glass is not one type but a spectrum of energy split into three main parts. The first is ultraviolet (UV), making up only about 3% of solar energy; you do not feel it as heat, but it is responsible for skin damage and the fading of upholstery and dashboards. The second is visible light, about 44%; this is the light your eye sees, and how much passes through the glass is measured as VLT, the figure tied to traffic law. The third and most thermally important is infrared (IR), about 53% of the energy; this is what you feel as scorching heat on your arm behind the wheel. The fallacy KSA buyers fall into is that an 'IR 97%' figure does not block 97% of the sun's total heat, only 97% of a specific portion of the IR band. That is why two cars with the same IR number can differ greatly in coolness. The single honest number that combines all three parts — UV, visible, and IR — is TSER, which we will decode in detail."
      },
      {
        "heading": "UV: الرقم الصحي الذي تحجبه كل الأفلام تقريباً",
        "headingEn": "UV: The Health Number Nearly Every Film Blocks",
        "body": "الأشعة فوق البنفسجية رقم مهم جداً لصحتك، لكنه — للمفارقة — أقل رقم يجب أن تقلق بشأنه عند المقارنة بين الأفلام. السبب بسيط: حجب 99% من UV أصبح معياراً صناعياً تحققه تقريباً كل أفلام التظليل المحترمة، من النانو سيراميك الفاخر وصولاً إلى الأفلام الكربونية الاقتصادية. حتى الزجاج الأمامي العادي في سيارتك يحجب جزءاً كبيراً من UV-B دون أي فيلم. في قياساتنا في عزل كور، سجّلت أفلام النانو سيراميك التي نركّبها حجب UV بنسبة 99% بثبات، وهي النسبة نفسها التي تعدك بها 3M و جونسون. لماذا يهمك هذا الرقم إذاً؟ لأن الأشعة فوق البنفسجية مصنّفة من منظمة الصحة العالمية (WHO) كعامل مسرطن للجلد، وهي السبب الرئيسي لشيخوخة جلد الذراع الأيسر للسائق وبهتان مقاعد الجلد والداش. لكن الخدعة هي أن يحاول بائع أن يبيعك فيلماً \"بسعر أعلى\" بحجة حجب UV الممتاز، بينما هذا الرقم لا يفرّق عملياً بين فيلم بـ 600 ريال وفيلم بـ 3,000 ريال. الفرق الحقيقي في السعر يأتي من قدرة الفيلم على حجب الحرارة (IR و TSER)، لا من رقم UV الذي يتساوى فيه الجميع تقريباً. اعتبر 99% UV شرطاً أساسياً للقبول، لا ميزة تنافسية تدفع مقابلها فرقاً كبيراً.",
        "bodyEn": "Ultraviolet is a very important number for your health, but ironically it is the least worth worrying about when comparing films. The reason is simple: blocking 99% of UV has become an industry standard met by nearly every reputable tint film, from premium nano-ceramic down to economy carbon. Even the ordinary windshield in your car blocks a large share of UV-B without any film. In our AzelCore measurements, the nano-ceramic films we install consistently recorded 99% UV blocking, the same figure promised by 3M and Johnson. So why does this number matter? Because ultraviolet is classified by the World Health Organization (WHO) as a skin carcinogen, and is the main cause of aging of the driver's left-arm skin and fading of leather seats and dashboards. But the trick is a salesman trying to sell you a 'higher priced' film on the pretext of excellent UV blocking, while this number does not practically distinguish a 600-SAR film from a 3,000-SAR one. The real price difference comes from the film's ability to block heat (IR and TSER), not from the UV figure where almost everyone is equal. Treat 99% UV as a baseline requirement, not a competitive advantage worth a big premium."
      },
      {
        "heading": "IR: لماذا رقم 97% أصغر مما يبدو؟",
        "headingEn": "IR: Why Is the 97% Figure Smaller Than It Looks?",
        "body": "هنا يكمن أكبر تضليل في سوق التظليل. حين يقول البائع \"هذا الفيلم يحجب 97% من الأشعة تحت الحمراء\"، فهو غالباً يقصد رقم IR Rejection المقاس عند طول موجي ضيق جداً ومحدد (عادةً حوالي 950 نانومتر)، وليس عبر كامل نطاق طيف IR. والأشعة تحت الحمراء طيف واسع يمتد من حوالي 780 نانومتر إلى 2500 نانومتر. الفيلم قد يكون بطلاً في حجب نقطة واحدة من الطيف (950 نانومتر) فيُكتب على الملصق \"97% IR\"، بينما أداؤه ضعيف في باقي النطاق الحراري. لهذا تجد فيلماً يحمل رقم IR مبهراً لكن السيارة تظل دافئة. في عزل كور، أرقام IR التي نلتزم بها لأفلام النانو سيراميك الأصلية تتراوح بين 96% و 97%، ونحرص على توضيح أنها مقاسة عند نقطة قياسية معروفة، لا رقم تسويقي مفتوح. القاعدة الذهبية: رقم IR مفيد فقط إذا عرفت عند أي طول موجي قِيس، ومن جهة محايدة قاسه. إذا لم يستطع البائع أن يخبرك بذلك، فالرقم مجرد دعاية. لا تجعل IR هو معيار قرارك الوحيد، بل اقرنه دائماً بـ TSER الذي يقيس الصورة الكاملة. فيلم بـ IR 97% و TSER 50% قد يكون أبرد فعلياً من فيلم بـ IR 99% و TSER 40%، لأن TSER يحسب الحرارة من كل المصادر.",
        "bodyEn": "Here lies the biggest deception in the tint market. When a salesman says 'this film blocks 97% of infrared,' he usually means an IR-rejection figure measured at a very narrow, specific wavelength (typically around 950 nm), not across the entire IR band. Infrared is a wide spectrum stretching from about 780 nm to 2500 nm. A film may be a star at blocking one point in the spectrum (950 nm), so the label reads '97% IR,' while its performance is weak across the rest of the heat band. That is why you find a film with a dazzling IR number while the car stays warm. At AzelCore, the IR figures we stand behind for original nano-ceramic films range from 96% to 97%, and we make a point of clarifying they are measured at a known reference point, not an open marketing number. The golden rule: an IR figure is only useful if you know at which wavelength it was measured and which neutral party measured it. If the salesman cannot tell you, the number is just marketing. Do not make IR your sole decision metric; always pair it with TSER, which measures the full picture. A film at IR 97% and TSER 50% may actually be cooler than a film at IR 99% and TSER 40%, because TSER accounts for heat from all sources."
      },
      {
        "heading": "TSER: الرقم الوحيد الذي يقيس العزل الحقيقي",
        "headingEn": "TSER: The Only Number That Measures Real Insulation",
        "body": "إذا كان عليك أن تحفظ مصطلحاً واحداً من هذا المقال فليكن TSER، اختصار Total Solar Energy Rejected أي \"إجمالي الطاقة الشمسية المرفوضة\". هذا الرقم هو الوحيد الذي يجمع تأثير الأجزاء الثلاثة من الطيف — UV والضوء المرئي والأشعة تحت الحمراء — في رقم واحد يعبّر عن النسبة الكلية للحرارة التي يمنعها الفيلم من دخول المقصورة. فيلم بـ TSER 60% يعني أنه يرفض 60% من إجمالي طاقة الشمس الحرارية، وهو رقم أصدق بكثير من أي رقم IR منفرد. لهذا تعتمده الجهات المحترفة كمعيار أساسي للمقارنة. مثال واقعي: فيلم 3M Crystalline الذي نركّبه في عزل كور يصل TSER فيه إلى حوالي 90% في درجاته العليا، رغم أنه فيلم شبه شفاف يسمح بمرور كمية كبيرة من الضوء المرئي — وهذا إنجاز هندسي حقيقي يأتي من بنيته المكوّنة من أكثر من 200 طبقة نانوية. لاحظ المفارقة: فيلم شفاف تقريباً لكنه يتفوق في العزل على أفلام داكنة رخيصة. السبب أن TSER لا يعتمد على اللون الداكن، بل على التقنية. حين تقارن بين عروض الأسعار، اطلب رقم TSER مكتوباً في شهادة الضمان لكل درجة. إذا رفض المركز كتابته أو لم يعرفه، فهذه إشارة حمراء أن الفيلم إما مقلّد أو أن المركز لا يفهم ما يبيعه.",
        "bodyEn": "If you should memorize one term from this article, let it be TSER, short for Total Solar Energy Rejected. This number is the only one that combines the effect of all three spectral parts — UV, visible light, and infrared — into a single figure expressing the total share of heat the film stops from entering the cabin. A film at TSER 60% means it rejects 60% of the sun's total thermal energy, far more honest than any standalone IR number. That is why professionals use it as the core comparison metric. A real example: the 3M Crystalline film we install at AzelCore reaches around 90% TSER in its top grades, despite being a near-transparent film that lets a large amount of visible light through — a genuine engineering feat that comes from its structure of more than 200 nano layers. Note the paradox: a nearly transparent film that outperforms cheap dark films in insulation. The reason is that TSER does not depend on a dark color but on technology. When comparing quotes, ask for the TSER number written in the warranty certificate for each grade. If the center refuses to write it or does not know it, that is a red flag that the film is either counterfeit or the center does not understand what it sells."
      },
      {
        "heading": "جدول مقارنة: ماذا تعني الأرقام على ملصقات الأفلام الفعلية",
        "headingEn": "Comparison Table: What the Numbers on Real Film Labels Mean",
        "body": "لنترجم النظرية إلى واقع. الجدول أدناه يقارن بين فئات الأفلام التي نركّبها فعلياً في مركز عزل كور بجدة، مع توضيح ما يعنيه كل رقم وكيف ينعكس على السعر والأداء. لاحظ أن نطاقات الأسعار شاملة التركيب والضمان، وتختلف حسب حجم السيارة (سيدان مقابل دفع رباعي مقابل فاخرة). الفيلم المدبوغ (Dyed) رخيص لكنه يعتمد على اللون فقط لحجب الضوء، لذلك TSER فيه منخفض ويتلاشى خلال أشهر تحت شمس جدة. الكربون أفضل ولا يبهت، لكنه لا يضاهي النانو سيراميك في حجب IR. النانو سيراميك و 3M Crystalline هما القمة: عزل حراري عالٍ مع شفافية قانونية. المهم أن تقرأ الجدول أفقياً — لا تنبهر برقم واحد، بل انظر للصورة الكاملة: كم يحجب من الحرارة (TSER)، كم يدوم الضمان، وكم يكلّف. هذه المعادلة الثلاثية هي ما يحدد القيمة الحقيقية، لا الرقم الأكبر على الملصق. كل الأرقام أدناه أرقام نلتزم بها ونكتبها في شهادة الضمان لعملائنا.",
        "bodyEn": "Let us translate theory into reality. The table below compares the film categories we actually install at AzelCore in Jeddah, clarifying what each number means and how it reflects on price and performance. Note that the price ranges include installation and warranty, and vary by car size (sedan vs. SUV vs. luxury). Dyed film is cheap but relies only on color to block light, so its TSER is low and it fades within months under the Jeddah sun. Carbon is better and does not fade, but does not match nano-ceramic in IR rejection. Nano-ceramic and 3M Crystalline are the peak: high heat insulation with legal transparency. The key is to read the table horizontally — do not be dazzled by one number, look at the whole picture: how much heat it blocks (TSER), how long the warranty lasts, and how much it costs. This three-way equation determines real value, not the biggest number on the label. All figures below are numbers we stand behind and write into the warranty certificate for our customers."
      },
      {
        "heading": "الحيل الشائعة في معارض جدة: كيف يُساء استخدام رقم IR",
        "headingEn": "Common Tricks in Jeddah Showrooms: How the IR Number Gets Abused",
        "body": "بحكم عملنا اليومي في جدة، رصدنا أنماطاً متكررة من التضليل تستحق أن تعرفها قبل أن تدفع. الحيلة الأولى: \"خلط الأرقام\" — أن يقول البائع \"حجب حرارة 97%\" وهو يقصد رقم IR عند نقطة واحدة، تاركاً انطباعاً بأن السيارة ستبرد 97%، بينما TSER الحقيقي قد يكون 45% فقط. الحيلة الثانية: \"الفيلم الداكن = عزل أعلى\" — وهي خرافة؛ اللون الداكن يحجب الضوء المرئي فقط ويخالف قانون المرور (الذي يلزم 70% شفافية للزجاج الأمامي والجانبي الأمامي)، لكنه لا يحجب الـ IR بالضرورة. الحيلة الثالثة: \"الماركة العالمية بسعر مغرٍ\" — أفلام تحمل اسماً يشبه جونسون أو 3M لكنها مقلّدة، بأرقام مطبوعة على الملصق لا أساس لها. الحيلة الرابعة: غياب شهادة الضمان المكتوبة التي توضح VLT و TSER لكل نافذة. الدفاع الوحيد ضد كل ذلك هو أن تطلب ثلاثة أشياء قبل الدفع: شهادة ضمان مكتوبة بأرقام TSER و VLT، فاتورة ضريبية إلكترونية، ودليل اعتماد الوكالة (جونسون أو 3M). نحن في عزل كور نقدّم الثلاثة كمعيار، ويمكنك التحقق من السيريال الأصلي. إن لم يقدّمها المركز، فأنت تشتري وعداً شفهياً لا قيمة قانونية ولا تقنية له تحت شمس جدة الحارقة.",
        "bodyEn": "From our daily work in Jeddah, we have spotted recurring patterns of deception worth knowing before you pay. Trick one: 'mixing numbers' — the salesman says '97% heat block' meaning a single-point IR figure, leaving the impression the car will be 97% cooler, while the real TSER may be only 45%. Trick two: 'dark film = higher insulation' — a myth; a dark color blocks only visible light and violates traffic law (which requires 70% transparency for the windshield and front side windows), yet does not necessarily block IR. Trick three: 'global brand at a tempting price' — films bearing a name resembling Johnson or 3M but counterfeit, with baseless numbers printed on the label. Trick four: the absence of a written warranty certificate detailing VLT and TSER for each window. The only defense against all of this is to ask for three things before paying: a written warranty certificate with TSER and VLT numbers, an electronic tax invoice, and proof of dealer authorization (Johnson or 3M). At AzelCore we provide all three as standard, and you can verify the original serial. If the center does not provide them, you are buying a verbal promise with no legal or technical value under Jeddah's scorching sun."
      },
      {
        "heading": "كيف نتحقق من الأرقام عملياً: كاميرا FLIR وتقرير عزل كور الحراري",
        "headingEn": "How We Verify the Numbers in Practice: FLIR Camera and the AzelCore Thermal Report",
        "body": "الأرقام على الملصق وعد؛ القياس الميداني حقيقة. لهذا أجرينا في عزل كور دراسة حرارية موسّعة استخدمنا فيها كاميرا FLIR T530 الحرارية، وفق منهجية مستوحاة من معيار ISO 13837:2021 لقياس النفاذية الشمسية الكلية، على عينة قوامها 530 قياساً موزّعة على عشرة أحياء في جدة، خلال الفترة من 2024 إلى 2026. النتائج كانت صادمة وملموسة: متوسط حرارة المقصورة الداخلية لسيارة بلا تظليل بلغ نحو 77 درجة مئوية تحت شمس الظهيرة، بينما انخفضت في السيارات المركّب عليها نانو سيراميك أصلي إلى حوالي 40 درجة مئوية — أي فرق يقارب 37 درجة. هذا الفرق الهائل لا يصنعه رقم IR منفرد، بل تصنعه القدرة الكلية على رفض الطاقة (TSER) مجتمعة مع حجب UV بنسبة 99% و IR بنسبة 96-97%. ما يميّز هذه المنهجية أنها تقيس الناتج النهائي الذي يهمك فعلاً: درجة الحرارة التي ستجلس فيها، لا رقماً مختبرياً مجرّداً. نشرنا التقرير الكامل برخصة المشاع الإبداعي (CC BY-NC 4.0) ليكون مرجعاً شفافاً يمكنك مراجعته. حين يخبرك بائع برقم IR، اسأله السؤال الصحيح: \"كم ستنخفض حرارة سيارتي بالدرجة المئوية؟\" — هذا هو السؤال الذي تجيب عنه القياسات الميدانية لا الملصقات.",
        "bodyEn": "Numbers on a label are a promise; field measurement is reality. That is why at AzelCore we conducted an extensive thermal study using a FLIR T530 thermal camera, with a methodology inspired by ISO 13837:2021 for total solar transmission, on a sample of 530 measurements across ten districts of Jeddah, during 2024 to 2026. The results were striking and tangible: the average interior cabin temperature of an untinted car reached about 77 degrees Celsius under midday sun, while in cars fitted with original nano-ceramic it dropped to around 40 degrees Celsius — a difference of nearly 37 degrees. This huge gap is not created by a standalone IR number, but by the overall ability to reject energy (TSER) combined with 99% UV blocking and 96-97% IR blocking. What distinguishes this methodology is that it measures the final output that actually matters to you: the temperature you will sit in, not an abstract lab figure. We published the full report under a Creative Commons license (CC BY-NC 4.0) as a transparent reference you can review. When a salesman quotes an IR number, ask the right question: 'By how many degrees Celsius will my car cool down?' — that is the question field measurements answer, not labels."
      },
      {
        "heading": "ربط الأرقام بالقانون: الشفافية (VLT) مقابل العزل",
        "headingEn": "Tying Numbers to the Law: Transparency (VLT) vs. Insulation",
        "body": "خطأ قاتل يقع فيه كثيرون: الخلط بين رقم العزل ورقم الشفافية القانوني. نسبة نفاذية الضوء المرئي (VLT) هي ما ينظّمه قانون المرور السعودي، ولا علاقة مباشرة لها بقدرة الفيلم على حجب الحرارة. وفق بيانات الإدارة العامة للمرور (MOI) والهيئة السعودية للمواصفات (SASO) كما نوثّقها في دليلنا القانوني، يُسمح للزجاج الأمامي والجانبي الأمامي (السائق والمرافق) بدرجة شفافة تماماً فقط — أي VLT 70% فأعلى (الدرجة 00) — بينما يُسمح للزجاج الجانبي الخلفي بدرجة تعتيم تصل إلى 02 (شفافية حوالي 30%). مخالفة التظليل تندرج تحت \"تعديل هيكل المركبة\" وغرامتها تتراوح بين 500 و 900 ريال. الجمال في تقنية النانو سيراميك أنها تفصل بين الرقمين: تستطيع تركيب فيلم بدرجة 00 شفافة تماماً وقانونية على الزجاج الأمامي، ومع ذلك يحجب 96-97% من IR و TSER عالٍ. أي تحصل على عزل قوي وشفافية قانونية في آنٍ واحد. هذا مستحيل مع الأفلام المدبوغة القديمة التي كانت تجبرك على الاختيار بين البرودة والقانون. لهذا نشدّد على أن تكتب شهادة الضمان رقمين منفصلين لكل نافذة: VLT (للقانون والفحص الدوري) و TSER (للأداء الحراري). لا تقبل أن يُختزل الاثنان في رقم واحد غامض.",
        "bodyEn": "A fatal mistake many make: confusing the insulation number with the legal transparency number. Visible Light Transmission (VLT) is what Saudi traffic law regulates, and it has no direct link to the film's ability to block heat. Per General Department of Traffic (MOI) and Saudi Standards (SASO) data as documented in our legal guide, the windshield and front side windows (driver and passenger) are allowed only a fully transparent shade — VLT 70% and above (shade 00) — while rear side windows are allowed a dimming shade up to 02 (about 30% transparency). A tint violation falls under 'modifying the vehicle structure' and is fined 500 to 900 SAR. The beauty of nano-ceramic technology is that it separates the two numbers: you can install a fully transparent, legal shade-00 film on the windshield, yet it blocks 96-97% of IR with high TSER. So you get strong insulation and legal transparency at once. This was impossible with old dyed films that forced you to choose between coolness and the law. That is why we insist the warranty certificate states two separate numbers per window: VLT (for the law and periodic inspection) and TSER (for thermal performance). Do not accept the two being collapsed into one vague number."
      },
      {
        "heading": "ماذا تشتري فعلاً؟ توصيات حسب الميزانية ونوع السيارة",
        "headingEn": "What Should You Actually Buy? Recommendations by Budget and Car Type",
        "body": "بعد كل هذا التفصيل، إليك خلاصة عملية للمشتري السعودي. إذا كانت ميزانيتك محدودة وتريد حلاً يدوم سنوات قليلة، فالفيلم الكربوني (600-1,500 ريال حسب الحجم، ضمان 5 سنوات) خيار صادق لا يبهت ويحجب UV بكفاءة، لكن لا تتوقع منه TSER مرتفعاً. إذا كنت تعيش في جدة وتقود يومياً تحت الشمس وتريد الفرق الحراري الذي قِسناه (من 77 إلى 40 درجة)، فالنانو سيراميك (سيدان 1,500-2,200 ريال، دفع رباعي 2,200-3,000، فاخرة 2,500-3,500، ضمان 10 سنوات) هو نقطة التوازن المثالية بين السعر والأداء وحجب IR بنسبة 96-97%. إذا أردت القمة المطلقة — أعلى TSER (حوالي 90%) مع شفافية شبه كاملة وبدون أي تشويش على إشارات GPS أو الجوال — فـ 3M Crystalline (2,000-2,800 للسيدان حتى 3,000-4,000 للفاخرة، ضمان مدى الحياة) هو الاستثمار الأذكى طويل الأمد. لأصحاب لاند كروزر وباترول وتاهو، انتبه أن مساحة الزجاج الكبيرة تعني أن جودة العزل تُحدث فرقاً مضاعفاً في استهلاك المكيف. أياً كان اختيارك، القاعدة ثابتة: قارن بـ TSER، تأكد من VLT القانوني، واطلب الضمان المكتوب والاعتماد. تواصل معنا على واتساب +966564612017 لاستشارة مجانية تحدد الدرجة الأنسب لسيارتك بدقة.",
        "bodyEn": "After all this detail, here is a practical summary for the KSA buyer. If your budget is limited and you want a solution lasting a few years, carbon film (600-1,500 SAR by size, 5-year warranty) is an honest choice that does not fade and blocks UV efficiently, but do not expect high TSER from it. If you live in Jeddah and drive daily under the sun and want the thermal difference we measured (from 77 to 40 degrees), nano-ceramic (sedan 1,500-2,200 SAR, SUV 2,200-3,000, luxury 2,500-3,500, 10-year warranty) is the ideal balance of price, performance, and 96-97% IR blocking. If you want the absolute peak — the highest TSER (around 90%) with near-full transparency and no interference with GPS or phone signals — 3M Crystalline (2,000-2,800 for sedan up to 3,000-4,000 for luxury, lifetime warranty) is the smartest long-term investment. For Land Cruiser, Patrol, and Tahoe owners, note that the large glass area means insulation quality has a doubled impact on AC consumption. Whatever you choose, the rule is constant: compare by TSER, confirm legal VLT, and demand the written warranty and authorization. Contact us on WhatsApp +966564612017 for a free consultation to precisely determine the best shade for your car."
      }
    ],
    "table": {
      "headers": [
        "فئة الفيلم",
        "حجب UV",
        "حجب IR (نقطة قياسية)",
        "TSER (الأهم)",
        "نطاق السعر شامل التركيب",
        "الضمان"
      ],
      "headersEn": [
        "Film Category",
        "UV Block",
        "IR Block (single point)",
        "TSER (most important)",
        "Price Range incl. install",
        "Warranty"
      ],
      "rows": [
        [
          "مدبوغ (Dyed)",
          "~99%",
          "منخفض",
          "منخفض (يبهت بسرعة)",
          "300-600 ريال",
          "سنة واحدة"
        ],
        [
          "كربوني (Carbon)",
          "99%",
          "متوسط",
          "متوسط (لا يبهت)",
          "600-1,500 ريال",
          "5 سنوات"
        ],
        [
          "LLumar CTX سيراميك",
          "99%",
          "عالٍ",
          "عالٍ",
          "1,200-3,000 ريال",
          "7 سنوات"
        ],
        [
          "نانو سيراميك (جونسون Supreme IR)",
          "99%",
          "96-97%",
          "عالٍ جداً",
          "1,500-3,500 ريال",
          "10 سنوات"
        ],
        [
          "3M Crystalline (200+ طبقة)",
          "99%",
          "عالٍ جداً",
          "حتى ~90%",
          "2,000-4,000 ريال",
          "مدى الحياة"
        ]
      ],
      "rowsEn": [
        [
          "Dyed",
          "~99%",
          "Low",
          "Low (fades fast)",
          "300-600 SAR",
          "1 year"
        ],
        [
          "Carbon",
          "99%",
          "Medium",
          "Medium (no fade)",
          "600-1,500 SAR",
          "5 years"
        ],
        [
          "LLumar CTX Ceramic",
          "99%",
          "High",
          "High",
          "1,200-3,000 SAR",
          "7 years"
        ],
        [
          "Nano-Ceramic (Johnson Supreme IR)",
          "99%",
          "96-97%",
          "Very high",
          "1,500-3,500 SAR",
          "10 years"
        ],
        [
          "3M Crystalline (200+ layers)",
          "99%",
          "Very high",
          "Up to ~90%",
          "2,000-4,000 SAR",
          "Lifetime"
        ]
      ]
    },
    "faqs": [
      {
        "q": "ما الفرق بين IR و TSER في تظليل السيارات؟",
        "qEn": "What is the difference between IR and TSER in car tinting?",
        "a": "رقم IR يقيس حجب الأشعة تحت الحمراء عند طول موجي واحد محدد فقط (غالباً 950 نانومتر)، بينما TSER (إجمالي الطاقة الشمسية المرفوضة) يجمع تأثير الأشعة فوق البنفسجية والضوء المرئي والأشعة تحت الحمراء في رقم واحد يعبّر عن العزل الحراري الكلي. TSER هو الرقم الأصدق للمقارنة عند الشراء.",
        "aEn": "The IR figure measures infrared rejection at only one specific wavelength (usually 950 nm), while TSER (Total Solar Energy Rejected) combines the effect of ultraviolet, visible light, and infrared into a single number expressing total heat insulation. TSER is the more honest number to compare when buying."
      },
      {
        "q": "هل رقم حجب IR 97% يعني أن سيارتي ستبرد 97%؟",
        "qEn": "Does a 97% IR block figure mean my car will be 97% cooler?",
        "a": "لا، هذه أكبر مغالطة في سوق التظليل. رقم 97% IR يعني حجب 97% من جزء معين من طيف الأشعة تحت الحمراء عند نقطة قياسية واحدة، وليس 97% من كامل حرارة الشمس. الرقم الذي يعبّر عن البرودة الفعلية هو TSER. في قياسات عزل كور بكاميرا FLIR انخفضت الحرارة من نحو 77 إلى 40 درجة مئوية مع النانو سيراميك الأصلي.",
        "aEn": "No, this is the biggest fallacy in the tint market. A 97% IR figure means blocking 97% of a specific part of the infrared spectrum at a single measurement point, not 97% of the sun's total heat. The number that reflects real cooling is TSER. In AzelCore's FLIR measurements, cabin temperature dropped from about 77 to 40 degrees Celsius with original nano-ceramic."
      },
      {
        "q": "هل كل الأفلام تحجب 99% من الأشعة فوق البنفسجية؟",
        "qEn": "Do all films block 99% of ultraviolet rays?",
        "a": "تقريباً نعم، حجب 99% من UV أصبح معياراً صناعياً تحققه معظم الأفلام المحترمة من النانو سيراميك حتى الكربوني. لهذا لا يجب أن يكون رقم UV معيار المفاضلة الأساسي بين الأفلام؛ اعتبره شرطاً للقبول، والفرق الحقيقي في السعر والأداء يأتي من حجب الحرارة (IR و TSER).",
        "aEn": "Almost, yes. Blocking 99% of UV has become an industry standard met by most reputable films from nano-ceramic down to carbon. So the UV number should not be your main differentiator; treat it as a baseline requirement, and the real difference in price and performance comes from heat rejection (IR and TSER)."
      },
      {
        "q": "هل الفيلم الأغمق يعزل حرارة أكثر؟",
        "qEn": "Does a darker film insulate more heat?",
        "a": "ليس بالضرورة. اللون الداكن يحجب الضوء المرئي فقط (يخفض VLT)، لكنه لا يحجب الأشعة تحت الحمراء أو يرفع TSER تلقائياً. فيلم 3M Crystalline شبه شفاف لكنه يصل TSER فيه إلى حوالي 90%، بينما فيلم داكن رخيص قد يكون TSER فيه منخفضاً. العزل يعتمد على التقنية لا على اللون، والفيلم الداكن جداً يخالف قانون المرور أيضاً.",
        "aEn": "Not necessarily. A dark color only blocks visible light (lowers VLT), but does not automatically block infrared or raise TSER. 3M Crystalline is nearly transparent yet reaches around 90% TSER, while a cheap dark film may have low TSER. Insulation depends on technology, not color, and very dark film also violates traffic law."
      },
      {
        "q": "كيف أتأكد أن أرقام الفيلم على الملصق حقيقية؟",
        "qEn": "How do I confirm the film's label numbers are real?",
        "a": "اطلب ثلاثة أشياء قبل الدفع: شهادة ضمان مكتوبة توضح VLT و TSER لكل نافذة، فاتورة ضريبية إلكترونية، ودليل اعتماد الوكالة (جونسون أو 3M) مع إمكانية التحقق من السيريال الأصلي. في عزل كور نقدّم الثلاثة كمعيار. إن لم يستطع المركز كتابة رقم TSER أو تقديم الاعتماد، فهذه إشارة حمراء على فيلم مقلّد.",
        "aEn": "Ask for three things before paying: a written warranty certificate detailing VLT and TSER for each window, an electronic tax invoice, and proof of dealer authorization (Johnson or 3M) with verifiable original serial. At AzelCore we provide all three as standard. If the center cannot write the TSER number or provide authorization, that is a red flag for counterfeit film."
      },
      {
        "q": "ما العلاقة بين VLT والعزل الحراري والقانون السعودي؟",
        "qEn": "What is the relationship between VLT, heat insulation, and Saudi law?",
        "a": "VLT (نفاذية الضوء المرئي) هو ما ينظّمه قانون المرور: الزجاج الأمامي والجانبي الأمامي يلزمه شفافية تامة (درجة 00، 70% فأعلى)، والجانبي الخلفي حتى درجة 02 (حوالي 30%)، وغرامة المخالفة 500-900 ريال. أما العزل الحراري فيُقاس بـ TSER ولا علاقة مباشرة له بـ VLT. تقنية النانو سيراميك تتيح فيلماً شفافاً قانونياً (VLT عالٍ) وعازلاً قوياً (TSER عالٍ) معاً.",
        "aEn": "VLT (visible light transmission) is what traffic law regulates: the windshield and front side windows require full transparency (shade 00, 70% and above), rear side windows up to shade 02 (about 30%), with a fine of 500-900 SAR. Heat insulation, however, is measured by TSER and has no direct link to VLT. Nano-ceramic technology allows a film that is both legally transparent (high VLT) and strongly insulating (high TSER)."
      },
      {
        "q": "هل أحتاج رقم TSER عالٍ لكل نوافذ السيارة؟",
        "qEn": "Do I need high TSER on every window of the car?",
        "a": "نعم، الحرارة تدخل من كل زجاج معرّض للشمس، والزجاج الأمامي الكبير مصدر رئيسي للحرارة رغم أنه يجب أن يبقى شفافاً قانونياً (درجة 00). لهذا تنفع تقنية النانو سيراميك تحديداً: فيلم شفاف بدرجة 00 على الزجاج الأمامي بـ TSER عالٍ. للسيارات كبيرة الزجاج مثل لاند كروزر وباترول يكون أثر العزل الكامل أكبر على استهلاك المكيف.",
        "aEn": "Yes, heat enters through every sun-exposed pane, and the large windshield is a major heat source even though it must remain legally transparent (shade 00). This is exactly where nano-ceramic helps: a shade 00 transparent film on the windshield with high TSER. For large-glass vehicles like Land Cruiser and Patrol, full insulation has a bigger impact on AC consumption."
      },
      {
        "q": "ما الفرق بين جونسون Supreme IR و 3M Crystalline في الأرقام؟",
        "qEn": "What is the difference between Johnson Supreme IR and 3M Crystalline in the numbers?",
        "a": "كلاهما من القمة. جونسون Supreme IR (من شركة تأسست 1961) يحجب IR بنسبة 96-97% مع UV 99% وضمان 10 سنوات بسعر 1,500-3,500 ريال. أما 3M Crystalline (من شركة تأسست 1902) فيتميّز ببنية أكثر من 200 طبقة نانوية و TSER يصل إلى حوالي 90% مع شفافية شبه كاملة وضمان مدى الحياة بسعر 2,000-4,000 ريال. الاختيار بينهما يعتمد على ميزانيتك وأولويتك بين السعر والشفافية القصوى.",
        "aEn": "Both are top tier. Johnson Supreme IR (from a company founded in 1961) blocks 96-97% IR with 99% UV and a 10-year warranty at 1,500-3,500 SAR. 3M Crystalline (from a company founded in 1902) features a 200+ nano-layer structure with TSER up to around 90% and near-full transparency, with a lifetime warranty at 2,000-4,000 SAR. The choice depends on your budget and whether you prioritize price or maximum transparency."
      }
    ],
    "sources": [
      {
        "label": "الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)",
        "labelEn": "Saudi Standards, Metrology and Quality Org. (SASO)",
        "url": "https://www.saso.gov.sa/"
      },
      {
        "label": "وزارة الداخلية — الإدارة العامة للمرور",
        "labelEn": "Ministry of Interior — General Department of Traffic",
        "url": "https://www.moi.gov.sa/"
      },
      {
        "label": "منظمة الصحة العالمية — الأشعة فوق البنفسجية والصحة",
        "labelEn": "World Health Organization — Ultraviolet (UV) radiation and health",
        "url": "https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)"
      },
      {
        "label": "تقرير عزل كور الحراري 2026 (FLIR T530، منهجية ISO 13837:2021)",
        "labelEn": "AzelCore Thermal Report 2026 (FLIR T530, ISO 13837:2021 methodology)",
        "url": "/research/ksa-thermal-report-2026"
      }
    ],
    "warning": "احذر من البائع الذي يقول \"حجب حرارة 97%\" ويقصد رقم IR عند نقطة واحدة بينما TSER الحقيقي أقل بكثير. لا تقبل أي فيلم بدون شهادة ضمان مكتوبة توضح VLT و TSER لكل نافذة، وفاتورة ضريبية، ودليل اعتماد الوكالة. التظليل الداكن جداً على الزجاج الأمامي أو الجانبي الأمامي مخالفة مرورية غرامتها 500-900 ريال وقد تؤدي لرسوب الفحص الدوري.",
    "warningEn": "Beware the salesman who says \"97% heat block\" meaning a single-point IR figure while the real TSER is far lower. Do not accept any film without a written warranty certificate detailing VLT and TSER for each window, a tax invoice, and proof of dealer authorization. Very dark tint on the windshield or front side windows is a traffic violation fined 500-900 SAR and can cause failure of the periodic inspection.",
    "cta": "لا تختر فيلمك بناءً على أكبر رقم على الملصق. تواصل مع محمد الهادي وفريق عزل كور بجدة على واتساب +966564612017 لاستشارة مجانية نقيس فيها شفافية زجاج سيارتك الأصلي، ونرشّح لك الدرجة المثالية بأرقام TSER و VLT مكتوبة في شهادة الضمان — تظليل بارد، قانوني، ومثبت بقياسات FLIR حقيقية.",
    "ctaEn": "Do not pick your film based on the biggest number on the label. Contact Mohammed Al-Hadi and the AzelCore team in Jeddah on WhatsApp +966564612017 for a free consultation where we measure your original glass transparency and recommend the ideal shade with TSER and VLT numbers written into the warranty certificate — a cool, legal tint, proven by real FLIR measurements."
  }
};

export default article;
