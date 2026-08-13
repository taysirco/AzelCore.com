import type { ArticleModule } from './types';

// Double Glazing vs Retrofit Window Film for Buildings in Saudi Arabia: The Real Cost/Benefit Decision
// Batch 7 · scheduled 2026-08-27 · grounded in real AzelCore data (no fabricated ratings)
const article: ArticleModule = {
  "ogImage": "blog/double-glazing-vs-window-film-buildings-ksa-1.webp",
  "serviceLinks": [
    {
      "href": "/building-glass-insulation",
      "text": "خدمة عزل زجاج المباني في جدة",
      "textEn": "Building glass insulation service in Jeddah"
    },
    {
      "href": "/blog/building-insulation-saudi-arabia-guide",
      "text": "الدليل الشامل لعزل المباني في السعودية",
      "textEn": "Complete guide to building insulation in Saudi Arabia"
    },
    {
      "href": "/blog/sbc-601-602-glass-compliance-guide",
      "text": "دليل الامتثال لكود البناء السعودي SBC 601/602 للزجاج",
      "textEn": "SBC 601/602 glass compliance guide"
    },
    {
      "href": "/blog/villa-glass-insulation-jeddah-cost-guide",
      "text": "دليل تكلفة عزل زجاج الفلل في جدة",
      "textEn": "Villa glass insulation cost guide for Jeddah"
    },
    {
      "href": "/blog/glass-facade-tower-curtain-wall-insulation",
      "text": "عزل واجهات الأبراج والحوائط الستائرية الزجاجية",
      "textEn": "Tower facade and curtain wall glass insulation"
    },
    {
      "href": "/blog/building-insulation-electricity-savings",
      "text": "كم يوفر عزل المباني من فاتورة الكهرباء",
      "textEn": "How much building insulation saves on the electricity bill"
    },
    {
      "href": "/calculator",
      "text": "حاسبة تقدير تكلفة عزل الزجاج",
      "textEn": "Glass insulation cost estimator"
    },
    {
      "href": "/research/ksa-thermal-report-2026",
      "text": "دراسة عزل كور للرفض الحراري في جدة 2024-2026",
      "textEn": "AzelCore Jeddah Thermal Rejection Study 2024-2026"
    }
  ],
  "content": {
    "quickAnswer": "في مناخ السعودية، المحرّك الأكبر لحمل التبريد هو الإشعاع الشمسي العابر للزجاج، لذلك خفض معامل الكسب الحراري الشمسي (SHGC) عبر فيلم عزل حراري عالي الأداء هو غالبًا الرافعة الأعلى مردودًا والأقل تكلفة وتعطيلًا. الزجاج المزدوج يعالج التوصيل (U-value) ويصبح الخيار الصحيح عند تلف الوحدات أو في مبنى جديد يُصمَّم بزجاج Low-E من البداية.",
    "quickAnswerEn": "In Saudi Arabia the dominant cooling-load driver is solar radiation passing through glass, so cutting the Solar Heat Gain Coefficient (SHGC) with a high-performance window film is usually the higher-leverage, lower-cost, lower-disruption move. Double glazing addresses conduction (U-value) and becomes the right answer when units have failed or when a new building can specify Low-E glass from day one.",
    "intro": "كل صيف يتكرر السؤال نفسه على طاولة ملّاك الفلل ومديري المرافق في جدة والرياض والدمام: المبنى حار، فاتورة الكهرباء ترتفع، والمكيّفات تعمل بلا توقف — فهل الحل استبدال الزجاج بوحدات زجاج مزدوج، أم تركيب فيلم عزل حراري على الزجاج القائم؟ السؤال يبدو ماليًا، لكنه في جوهره سؤال فيزيائي: أي مسار للحرارة تريد أن تغلقه أولًا؟\n\nالزجاج المزدوج والفيلم الحراري ليسا بديلين متطابقين بأسعار مختلفة. كل منهما يعالج آلية انتقال حرارة مختلفة تمامًا: الأول يقلل التوصيل عبر فجوة الهواء أو الأرجون، والثاني يعترض الإشعاع الشمسي قبل أن يدخل. وفي المناخ الخليجي تحديدًا، الفرق بين المسارين ليس أكاديميًا — بل هو الفرق بين إنفاق مبلغ كبير على المشكلة الثانوية، أو إنفاق مبلغ أقل على المشكلة الرئيسية.\n\nهذا الدليل مكتوب من واقع تنفيذ ميداني في جدة، ويشرح كيف يعمل كل حل، وكم يكلف من حيث رأس المال والتعطيل، ومتى يكون الاستبدال هو القرار الصحيح فعلًا، ومتى يكون الجمع بين الاثنين هو الأمثل — مع التحذير التقني الذي يتجاهله كثيرون: الإجهاد الحراري عند تركيب فيلم على وحدة زجاج مزدوج قائمة.",
    "introEn": "Every summer the same question lands on the desks of villa owners and facility managers in Jeddah, Riyadh and Dammam: the building is hot, the electricity bill keeps climbing, the chillers never stop — so should we replace the glass with double glazing, or apply a heat-rejecting window film to the glass we already have?\n\nThe question looks financial. It is really a physics question: which heat path do you want to close first? Double glazing and window film are not the same product at two price points. One reduces conductive heat transfer through an air or argon gap. The other intercepts solar radiation before it enters. In the Gulf climate that distinction is not academic — it is the difference between spending a large capital sum on the secondary problem and spending far less on the primary one.\n\nThis guide is written from field execution in Jeddah. It explains how each solution actually works, what each costs in capital and in disruption, when replacement genuinely is the correct call, and when combining both is optimal — including the technical caution most people skip: thermal stress when filming an existing insulated glass unit.",
    "sections": [
      {
        "heading": "أين تدخل الحرارة فعلاً إلى مبنى في جدة؟",
        "headingEn": "Where the heat actually enters a building in Jeddah",
        "body": "قبل اختيار الحل يجب تحديد المشكلة بدقة. تنتقل الحرارة إلى المبنى بثلاث آليات: التوصيل عبر مواد الغلاف الخارجي، والحمل عبر التسريب الهوائي وفتحات التهوية، والإشعاع الشمسي الذي يعبر الزجاج مباشرة ويتحول إلى حرارة محسوسة داخل الفراغ. في مناخ جدة — إشعاع شمسي مباشر شبه دائم، رطوبة مرتفعة، وموسم تبريد يمتد عمليًا لأكثر من ثمانية أشهر — يكون الإشعاع الشمسي عبر الزجاج هو المحرّك المهيمن لحمل التبريد، لا فرق درجة الحرارة عبر الجدار.\n\nالسبب فيزيائي مباشر: الزجاج الشفاف نافذ لمعظم الطيف الشمسي قصير الموجة. متر مربع من زجاج شفاف مواجه للغرب عند العصر يمرر طاقة إشعاعية تفوق بأضعاف ما يمرره متر مربع من جدار خرساني معزول خلال اليوم كامل. لذلك حين يشتكي مالك فيلا من غرفة «لا يبردها المكيّف»، تكون النافذة — لا الجدار — هي المتهم الأول في أغلب الحالات، وتحديدًا النوافذ الغربية والجنوبية الغربية.\n\nمن هنا يتفرع القراران المطروحان: استبدال الزجاج بوحدات زجاج مزدوج، أو تركيب فيلم عزل حراري على الزجاج القائم. الحلان يعالجان مسارين مختلفين، ولا يتنافسان بالضرورة. والخطأ الشائع أن يُشترى الحل الأغلى لعلاج المسار الأقل تأثيرًا. في القياسات الميدانية بكاميرا FLIR T530 ضمن دراسة عزل كور للرفض الحراري في جدة 2024-2026 — وهي قياسات أُجريت على المركبات — ظهر أن الفارق بين سطح معرّض للشمس دون حماية وآخر محمي بطبقة نانو سيراميك عاكسة للأشعة تحت الحمراء يُقاس بعشرات الدرجات المئوية، وهو ما يوضّح حجم الطاقة الإشعاعية التي يمكن اعتراضها عند السطح الزجاجي — ويفسر لماذا يبدأ التشخيص السليم دائمًا من الزجاج قبل أي عنصر آخر في الغلاف.",
        "bodyEn": "Before choosing a solution you have to name the problem precisely. Heat enters a building through three mechanisms: conduction through envelope materials, convection through air leakage and ventilation, and solar radiation that passes straight through glass and converts to sensible heat inside the space. In Jeddah's climate — near-constant direct solar radiation, high humidity, and a cooling season that in practice runs more than eight months — solar radiation through glass is the dominant cooling-load driver, not the temperature difference across the wall.\n\nThe reason is straightforward physics: clear glass is transparent to most of the short-wave solar spectrum. One square metre of clear west-facing glass in the late afternoon admits radiant energy many times greater than what a square metre of insulated concrete wall passes in a full day. So when a villa owner complains about a room \"the AC can't cool\", the window — not the wall — is the prime suspect in most cases, specifically west and south-west facing openings.\n\nThat is where the two candidate decisions diverge: replace the glass with insulated glazing units, or apply heat-rejecting film to the existing glass. The two address different heat paths and are not necessarily competitors. The common mistake is buying the more expensive solution to treat the less influential path. In field measurements with a FLIR T530 within the AzelCore Jeddah Thermal Rejection Study 2024-2026 — measurements taken on vehicles — the gap between an unprotected sun-exposed surface and one shielded by an IR-reflective nano-ceramic layer was measured in tens of degrees Celsius, which illustrates how much radiant energy can be intercepted at a glazed surface — and why sound diagnosis always starts at the glass before any other envelope element."
      },
      {
        "heading": "كيف يعمل الزجاج المزدوج فعلاً: معركة الـ U-value",
        "headingEn": "How double glazing actually works: the U-value play",
        "body": "وحدة الزجاج المزدوج (Insulated Glazing Unit) هي لوحان زجاجيان يفصل بينهما فاصل محيطي وفجوة مغلقة معبأة بالهواء الجاف أو بغاز خامل مثل الأرجون، ومختومة بمانع تسرب مزدوج مع مادة مجففة داخل الفاصل تمتص أي رطوبة متبقية. الفكرة الهندسية أن الغاز الساكن موصل رديء للحرارة، فتقل بذلك الحرارة المنتقلة بالتوصيل والحمل عبر مقطع النافذة. هذا الأداء يُعبَّر عنه بمعامل انتقال الحرارة U-value: كلما انخفض، قلّ انتقال الحرارة بالتوصيل.\n\nما الذي يعالجه الزجاج المزدوج فعلًا؟ يقلل بشكل ملموس: انتقال الحرارة بالتوصيل من الهواء الخارجي الساخن إلى الداخل، وظاهرة التكاثف على سطح الزجاج — وفي مناخ جدة الرطب يظهر هذا التكاثف غالبًا على السطح الخارجي للزجاج المبرَّد من الداخل — والإحساس بالإشعاع البارد أو الساخن من سطح الزجاج نفسه، ويحسّن جزئيًا العزل الصوتي، خصوصًا مع سماكات زجاج غير متماثلة أو زجاج مصفح.\n\nوما الذي لا يعالجه؟ هنا المفتاح: الزجاج المزدوج بلوحين شفافين عاديين لا يفعل الكثير تجاه الإشعاع الشمسي. الفجوة الهوائية لا تعرف كيف تصد فوتونًا قصير الموجة؛ هي تبطئ التوصيل فقط. الوحدة الشفافة التقليدية قد تظل تمرر نسبة كبيرة من الطاقة الشمسية الساقطة عليها، وهي بالضبط الطاقة التي يدفع مالك المبنى ثمن إزالتها لاحقًا عبر المكيّف.\n\nالحل داخل عالم الزجاج المزدوج هو الطلاء منخفض الانبعاثية Low-E — طبقة معدنية مجهرية (غالبًا بالفضة) تُرسَّب على أحد أسطح الوحدة لتعكس الأشعة تحت الحمراء وتخفض SHGC إلى جانب U-value. أي أن الزجاج المزدوج يصبح حلًا شمسيًا حقيقيًا فقط عندما يكون Low-E انتقائي الطيف — وليس لمجرد أنه «مزدوج».",
        "bodyEn": "An Insulated Glazing Unit is two glass lites separated by a perimeter spacer and a sealed cavity filled with dry air or an inert gas such as argon, closed with a dual seal and a desiccant inside the spacer to absorb residual moisture. The engineering idea is that still gas is a poor conductor, so conductive and convective transfer through the window section drops. That performance is expressed as the U-value: the lower it goes, the less heat crosses by conduction.\n\nWhat does double glazing genuinely fix? It measurably reduces conductive gain from hot outdoor air, surface condensation — which in Jeddah's humid climate most often appears on the outdoor face of glass chilled from inside — the radiant discomfort you feel standing near the glass, and it partially improves acoustic performance, especially with asymmetric lite thicknesses or a laminated lite.\n\nWhat does it not fix? This is the crux: a double-glazed unit made of two ordinary clear lites does very little against solar radiation. An air gap does not know how to stop a short-wave photon; it only slows conduction. A conventional clear IGU can still transmit a large share of the solar energy striking it — precisely the energy the owner then pays to remove again through the chiller.\n\nThe answer inside the glazing world is a Low-E coating — a microscopic metallic (usually silver-based) layer deposited on one of the unit's surfaces to reflect infrared and pull SHGC down alongside U-value. In other words, double glazing becomes a real solar solution only when it is spectrally selective Low-E — not merely because it is \"double\"."
      },
      {
        "heading": "كيف يعمل فيلم العزل الحراري: معركة الـ SHGC",
        "headingEn": "How window film works: the SHGC play",
        "body": "فيلم العزل الحراري المعماري طبقة بوليمرية رقيقة متعددة الطبقات تُلصق على السطح الداخلي (أو الخارجي في حالات محددة) للزجاج القائم. آلية عمله مختلفة جذريًا عن الزجاج المزدوج: هو لا يحاول إبطاء التوصيل، بل يعترض الطيف الشمسي نفسه قبل أن يتحول إلى حرارة داخلية. الأفلام عالية الأداء اليوم — خصوصًا النانو سيراميك والأفلام متعددة الطبقات الانتقائية طيفيًا — تمتص وتعكس الجزء الأكبر من الأشعة تحت الحمراء القريبة والأشعة فوق البنفسجية، مع تمرير نسبة عالية نسبيًا من الضوء المرئي، فتحصل على تبريد دون إظلام المبنى.\n\nالمؤشرات التي تُقرأ في مواصفة الفيلم: SHGC أو TSER (إجمالي الطاقة الشمسية المرفوضة)، ونسبة رفض الأشعة تحت الحمراء IR، ورفض الأشعة فوق البنفسجية UV، ونفاذية الضوء المرئي VLT. لغرض تقليل فاتورة التكييف، الرقم الحاكم هو SHGC/TSER وليس VLT — وهذه نقطة يخطئ فيها كثيرون فيطلبون فيلمًا داكنًا ظنًا أن العتمة تساوي البرودة، بينما فيلم فاتح انتقائي طيفيًا قد يتفوق عليه حراريًا.\n\nالجزء العملي: الفيلم يُركَّب على الزجاج الموجود دون تفكيك، بالمتر المربع، وبفريق عمل صغير، غالبًا خلال ساعات إلى أيام حسب مساحة الواجهة، والمبنى يبقى مشغولًا. لا سقالات ثقيلة في أغلب الفلل، ولا إزالة إطارات، ولا مخلفات زجاج.\n\nوفي القياسات الميدانية المنشورة ضمن دراسة عزل كور للرفض الحراري في جدة 2024-2026، سجّل النانو سيراميك حجبًا لـ 96-97% من الأشعة تحت الحمراء و99% من الأشعة فوق البنفسجية. وننبّه إلى نطاق هذه الأرقام: هي مقاسة على زجاج المركبات (عيّنة 530 مركبة، FLIR T530، بروتوكول ISO 13837:2021 الخاص بزجاج السيارات) لا على الزجاج المعماري المسطّح، وتُستشهد هنا لتوضيح مبدأ الرفض الطيفي لا كمواصفة أداء لفيلم مبانٍ. أما الشق المعماري من الدراسة فيقوم على رصد استهلاك التكييف في 42 مبنى.",
        "bodyEn": "Architectural window film is a thin multi-layer polymer laminate bonded to the interior (or in specific cases exterior) surface of existing glass. Its mechanism is fundamentally different from double glazing: it does not try to slow conduction, it intercepts the solar spectrum itself before it becomes indoor heat. Today's high-performance films — particularly nano-ceramic and spectrally selective multi-layer constructions — absorb and reflect the bulk of near-infrared and ultraviolet energy while passing a relatively high share of visible light, so you get cooling without darkening the building.\n\nThe metrics that matter on a film spec sheet: SHGC or TSER (Total Solar Energy Rejected), IR rejection, UV rejection, and Visible Light Transmission (VLT). For cutting an AC bill, the governing number is SHGC/TSER, not VLT — a point many people get wrong, asking for a dark film on the assumption that darkness equals coolness, when a light spectrally selective film can outperform it thermally.\n\nThe practical part: film is applied to the existing glass with no disassembly, priced per square metre, executed by a small crew, typically over hours to days depending on facade area, and the building stays occupied. In most villas there is no heavy scaffolding, no frame removal, and no glass waste stream.\n\nIn the published field measurements of the AzelCore Jeddah Thermal Rejection Study 2024-2026, nano-ceramic recorded 96-97% infrared and 99% UV rejection. Note the scope of those numbers: they were measured on vehicle glazing (n=530 vehicles, FLIR T530, the automotive ISO 13837:2021 protocol), not on architectural flat glass, and are cited here to illustrate the principle of spectral rejection rather than as a building-film specification. The architectural arm of the same study rests on metered HVAC consumption across 42 buildings."
      },
      {
        "heading": "المفتاح الخليجي: لماذا SHGC هو الرافعة الأعلى في السعودية",
        "headingEn": "The Gulf insight: why SHGC is the higher-leverage lever in Saudi Arabia",
        "body": "في المناخات الباردة، معركة كفاءة الطاقة معركة U-value: الهدف منع الحرارة من الهروب، والشمس ضيف مرحّب به لأنها تسخّن مجانًا. لهذا نشأت ثقافة «الزجاج المزدوج = كفاءة» في أوروبا وشمال أمريكا، وانتقلت إلينا بالنسخ دون مراجعة سياقها المناخي.\n\nالسعودية على النقيض تمامًا. المبنى هنا مبنى مهيمن عليه حمل التبريد، والشمس ليست ضيفًا بل مصدر الحمل الأول. عندما يكون الفرق بين حرارة الخارج والداخل في يوم صيفي في جدة نحو 20 درجة، فإن ما ينتقل بالتوصيل عبر النافذة يبقى محدودًا مقارنة بالطاقة الإشعاعية الساقطة على تلك النافذة نفسها، والتي تصل على واجهة غربية مكشوفة عند ذروة العصر إلى مئات الواطات للمتر المربع — في حدود 600-700 واط/م² في الأجواء الصافية، مقابل ما يقارب 1000 واط/م² على سطح أفقي عند الظهيرة. أي أن مصدر الحمل الأكبر هو الفوتون، لا فرق الحرارة.\n\nالنتيجة العملية: تركيب زجاج مزدوج بلوحين شفافين قد يحسّن U-value بشكل جيد ويترك SHGC مرتفعًا نسبيًا — فيدفع المالك تكلفة استبدال كاملة ويحصل على تحسّن أقل مما توقع، ثم يكتشف أن الغرفة الغربية ما زالت ساخنة عند العصر. بينما خفض SHGC — سواء عبر فيلم انتقائي طيفي على الزجاج القائم أو عبر Low-E ضمن وحدة جديدة — يضرب الحمل المهيمن مباشرة.\n\nولهذا السبب بالذات لا يكتفي كود البناء السعودي في متطلبات الغلاف الزجاجي بحدّ أقصى لمعامل انتقال الحرارة U-factor، بل يفرض إلى جانبه حدًا أقصى لمعامل الكسب الحراري الشمسي SHGC لأنظمة الفتحات الزجاجية، وتشتدّ هذه الحدود كلما ارتفعت نسبة الزجاج إلى الجدار أو قلّ التظليل الدائم للفتحة. القاعدة العملية للمالك: في السعودية ابدأ بالسؤال «كم SHGC؟» ثم اسأل «كم U-value؟» — بهذا الترتيب.",
        "bodyEn": "In cold climates the energy-efficiency battle is a U-value battle: keep heat from escaping, and welcome the sun because it heats for free. That is where the culture of \"double glazing equals efficiency\" was born, in Europe and North America, and it was imported here by copying without reviewing its climatic context.\n\nSaudi Arabia is the exact opposite. Buildings here are cooling-load dominated, and the sun is not a guest — it is the primary load source. On a Jeddah summer day, when the indoor-outdoor temperature difference is around 20 degrees, what crosses the window by conduction stays modest compared with the radiant energy falling on that same window, which on an exposed west elevation at late-afternoon peak reaches hundreds of watts per square metre — of the order of 600-700 W/m² in clear conditions, against roughly 1,000 W/m² on a horizontal surface at midday. The dominant load source is the photon, not the temperature difference.\n\nThe practical consequence: installing a double-glazed unit made of two clear lites can improve U-value nicely while leaving SHGC relatively high — so the owner pays a full replacement cost and gets less improvement than expected, then discovers the west room is still hot at 4 p.m. Cutting SHGC — whether through a spectrally selective film on existing glass or through Low-E inside a new unit — strikes the dominant load directly.\n\nThis is precisely why the Saudi Building Code's glazed-envelope requirements do not stop at a maximum U-factor: they impose a maximum Solar Heat Gain Coefficient on fenestration alongside it, and those limits tighten as the window-to-wall ratio rises or the permanent shading of the opening falls. The owner's rule of thumb in Saudi Arabia: ask \"what is the SHGC?\" first, then ask \"what is the U-value?\" — in that order."
      },
      {
        "heading": "التكلفة والتعطيل: مقارنة صادقة بلا تجميل",
        "headingEn": "Cost and disruption: an honest, unvarnished comparison",
        "body": "الفارق بين الحلين لا يظهر في فاتورة المواد وحدها، بل في سلسلة كاملة من التكاليف المصاحبة التي يغفلها كثير من الملّاك عند التسعير الأولي.\n\nاستبدال الزجاج بوحدات مزدوجة يعني: قياسًا ميدانيًا دقيقًا لكل فتحة، تصنيع الوحدات وتوريدها، تفكيك الزجاج القائم وإخراجه، وفي حالات كثيرة استبدال الإطارات أيضًا لأن الإطار القديم قد لا يتحمل وزن الوحدة المزدوجة ولا يوفر عمقًا كافيًا لتثبيتها بأمان. يضاف إلى ذلك وسائل الوصول — سقالات أو منصات رافعة أو حبال في المباني المرتفعة — والتصاريح البلدية عند العمل على واجهة، والتعامل مع مخلفات الزجاج والألمنيوم، وأعمال الترميم والدهان بعد التركيب، وأخيرًا التكلفة غير المباشرة الأثقل: توقف الاستخدام. مكتب أو دور فندقي أو معرض تجاري مغلق أسبوعًا هو خسارة إيراد لا تظهر في عرض السعر.\n\nفيلم العزل الحراري في المقابل يُسعَّر بالمتر المربع شاملًا التركيب والضمان، ويُنفَّذ على الزجاج القائم دون تفكيك. لا تصنيع، لا مخلفات، لا استبدال إطارات، ولا حاجة لإخلاء المبنى في أغلب المشاريع؛ يمكن العمل على طابق أو واجهة في كل مرة، وخارج ساعات الدوام عند الحاجة. النتيجة أن تكلفة رأس المال لكل متر مربع تكون أقل بشكل جوهري من الاستبدال الكامل، وزمن التنفيذ أقصر بمراتب.\n\nالخلاصة المالية: الاستبدال قرار رأسمالي كبير يُبرَّر عندما تكون هناك أسباب تتجاوز الحرارة. أما إذا كان الهدف خفض حمل التبريد على زجاج سليم، فالفيلم يقدم الجزء الأكبر من الفائدة الحرارية بجزء من التكلفة والتعطيل. للتقدير الأولي، استخدم حاسبة عزل كور أو راجع دليل تكلفة عزل زجاج الفلل في جدة.",
        "bodyEn": "The gap between the two options is not visible in the materials invoice alone — it lives in a whole chain of associated costs owners routinely miss when pricing the job.\n\nReplacing glass with insulated units means: precise field measurement of every opening, fabrication and delivery of the units, removal and disposal of the existing glass, and in many cases replacing the frames too, because an old frame may not carry the weight of a double unit or offer enough rebate depth to seat it safely. Add access equipment — scaffolding, boom lifts or rope access on tall buildings — municipal permits for facade work, glass and aluminium waste handling, making-good and repainting afterwards, and finally the heaviest indirect cost: downtime. An office floor, hotel floor or retail showroom closed for a week is revenue loss that never appears on the quotation.\n\nWindow film, by contrast, is priced per square metre including installation and warranty, and is applied to existing glass with no disassembly. No fabrication, no waste stream, no frame replacement, and in most projects no need to vacate: work can proceed one floor or one elevation at a time, and outside business hours where required. The result is a capital cost per square metre materially below full replacement, and a schedule shorter by an order of magnitude.\n\nThe financial bottom line: replacement is a major capital decision justified when there are reasons beyond heat. If the goal is cutting cooling load on sound glass, film delivers the bulk of the thermal benefit at a fraction of the cost and disruption. For a first estimate, use the AzelCore calculator or review our Jeddah villa glass insulation cost guide."
      },
      {
        "heading": "متى يكون استبدال الزجاج هو القرار الصحيح فعلاً",
        "headingEn": "When replacing the glazing genuinely is the right answer",
        "body": "الأمانة المهنية تقتضي قول ما لا يقوله كثير من مركبي الأفلام: هناك حالات لا يصلح فيها الفيلم بديلًا، ويكون الاستبدال هو القرار الهندسي الصحيح مهما كانت تكلفته.\n\nالحالة الأولى وأشهرها: فشل ختم وحدة الزجاج المزدوج. عندما ترى ضبابًا أو تكاثفًا أو بقعًا بيضاء بين اللوحين، فهذا يعني أن المانع المزدوج تسرّب وأن المادة المجففة داخل الفاصل تشبّعت، فدخلت الرطوبة إلى الفجوة. الوحدة انتهت وظيفيًا، ولا يوجد فيلم في العالم يصلحها لأن العطب داخل التجويف لا على السطح. الحل الوحيد استبدال الوحدة.\n\nالحالة الثانية: مبنى جديد تحت التصميم. إذا كنت لا تزال في مرحلة المواصفات، فمن الأصح والأرخص أن تحدد زجاجًا مزدوجًا Low-E انتقائي الطيف من البداية بدل تركيب زجاج شفاف ثم معالجته لاحقًا. التصميم الصحيح من أول مرة دائمًا أرخص من التصحيح.\n\nالحالة الثالثة: متطلبات صوتية أو إنشائية أو أمنية لا يلبيها الفيلم وحده. مبنى قرب طريق سريع أو مسار طيران يحتاج كتلة زجاجية ومقاطع غير متماثلة أو زجاجًا مصفحًا بطبقة PVB — والفيلم بمواصفة سلامة وأمان وسماكة كافية يحسّن تماسك الشظايا عند الكسر، أما فيلم العزل الحراري القياسي فأثره في هذا الجانب محدود، وفي الحالتين لا يتغيّر أداء العزل الصوتي جوهريًا.\n\nالحالة الرابعة: إطارات وصلت نهاية عمرها. ألمنيوم متآكل، حشوات مطاطية متفتتة، تسريب هواء وماء، أو مقاطع بلا فاصل حراري. هنا المشكلة في النظام كله لا في الزجاج، ومعالجة الزجاج وحده تترك مسار التسريب مفتوحًا.\n\nالحالة الخامسة: زجاج مكسور أو مخدوش بعمق أو تالف بصريًا — الفيلم لا يخفي عيوب السطح، بل قد يبرزها.",
        "bodyEn": "Professional honesty requires saying what many film installers will not: there are cases where film is no substitute, and replacement is the correct engineering decision regardless of cost.\n\nCase one, the most common: a failed IGU seal. When you see fog, condensation or white haze between the lites, the dual seal has leaked and the desiccant in the spacer has saturated, letting moisture into the cavity. The unit is functionally dead, and no film on earth repairs it, because the defect is inside the cavity, not on the surface. The only fix is replacing the unit.\n\nCase two: a new building still in design. If you are at specification stage, it is both better and cheaper to specify spectrally selective Low-E double glazing from the outset rather than install clear glass and remediate it later. Designing it right the first time always beats correcting it.\n\nCase three: acoustic, structural or security requirements film alone cannot meet. A building near a highway or flight path needs glazing mass, asymmetric lite thicknesses or a laminated PVB interlayer — a safety/security-rated film of adequate thickness improves fragment retention on breakage, while a standard solar-control film contributes little there, and neither fundamentally changes acoustic performance.\n\nCase four: frames at end of life. Corroded aluminium, perished gaskets, air and water infiltration, or sections with no thermal break. Here the problem is the whole system, not the glass, and treating glass alone leaves the leakage path open.\n\nCase five: cracked, deeply scratched or optically degraded glass — film does not hide surface defects, it can accentuate them."
      },
      {
        "heading": "الحل المركّب: زجاج مزدوج Low-E مع فيلم انتقائي طيفي",
        "headingEn": "The combination: Low-E double glazing plus spectrally selective film",
        "body": "الطرح كـ«إما/أو» مفيد للشرح لكنه ليس دائمًا القرار الأمثل. في مشاريع كثيرة يكون الجمع بين الحلين هو أعلى أداء لكل ريال منفق، خصوصًا في الأبراج والمرافق ذات الواجهات الزجاجية الواسعة.\n\nالمنطق بسيط: الوحدة المزدوجة Low-E تعطيك U-value منخفضًا وتحكمًا شمسيًا جيدًا، لكن أداءها الشمسي محدود بما اختير عند التصنيع. إذا تغيّر استخدام المبنى، أو ظهر أن واجهة غربية بعينها ما زالت تتجاوز حدود الراحة الحرارية، أو رفعت الجهة المشغّلة سقف متطلبات الكفاءة بعد سنوات — فإن استبدال الوحدات مجددًا خيار مكلف، بينما إضافة فيلم انتقائي طيفي معتمد يمنح خفضًا إضافيًا في SHGC وتحكمًا في الوهج دون لمس النظام الزجاجي.\n\nسيناريو ثانٍ منطقي: مبنى مختلط الأعمار. أجزاء مجددة بزجاج مزدوج وأجزاء قديمة بزجاج مفرد. هنا يكون الاستبدال في الأجزاء التي فشلت وحداتها، والفيلم في الأجزاء السليمة، فتصل بالمبنى كله إلى أداء متقارب بميزانية واقعية بدل تجميد المشروع انتظارًا لتمويل استبدال شامل.\n\nسيناريو ثالث: المشاريع على مراحل. الفيلم يُنفَّذ هذا الموسم فيخفض الحمل فورًا ويشتري وقتًا، ويُخطَّط استبدال الوحدات المتهالكة ضمن دورة الصيانة الرأسمالية القادمة.\n\nشرط واحد لا يُتجاوز: عند الجمع، يجب أن يكون اختيار الفيلم على وحدة مزدوجة مبنيًا على تقييم توافق حراري ونوع الزجاج وموافقة الشركة المصنّعة — وهو موضوع القسم التالي، ولا يجوز التعامل معه بالتقدير الشخصي.",
        "bodyEn": "Framing this as either/or is useful for explanation but is not always the optimal decision. On many projects, combining both delivers the most performance per riyal spent — especially in towers and facilities with extensive glazed facades.\n\nThe logic is simple: a Low-E double unit gives you a low U-value and decent solar control, but its solar performance is fixed at the moment of fabrication. If the building's use changes, if one west elevation still exceeds comfort limits, or if the operator raises its efficiency targets years later, re-replacing the units is an expensive path — whereas adding an approved spectrally selective film delivers additional SHGC reduction and glare control without touching the glazing system.\n\nA second sensible scenario: a mixed-age building. Some areas refurbished with double glazing, others still single-pane. Here you replace where units have failed and film where the glass is sound, bringing the whole building to comparable performance on a realistic budget instead of freezing the project while waiting for full-replacement funding.\n\nA third: phased capital programmes. Film goes on this season, cutting load immediately and buying time, while replacement of degraded units is scheduled into the next capital maintenance cycle.\n\nOne condition is non-negotiable: when combining, film selection on an insulated unit must be based on a thermal compatibility assessment, glass type identification and the glass manufacturer's approval — the subject of the next section, and not something to be judged by eye."
      },
      {
        "heading": "تحذير الإجهاد الحراري عند تركيب فيلم على وحدة زجاج مزدوج قائمة",
        "headingEn": "Thermal stress caution when filming an existing insulated glass unit",
        "body": "هذه أهم فقرة تقنية في المقال، وأكثر ما يُتجاهل في السوق. تركيب فيلم امتصاصي على زجاج غير مناسب قد يسبب كسرًا بالإجهاد الحراري (Thermal Stress Fracture).\n\nالآلية: أي زجاج معرّض للشمس يسخن في مركزه أكثر من حوافه المظللة داخل الإطار. هذا التدرج الحراري يولّد إجهاد شد عند الحافة. إذا كان الزجاج من النوع المُلدَّن العادي (Annealed Float) — أي غير المقوّى حراريًا وغير المُقسّى — وبه عيوب حافة دقيقة من القص، فقد يتجاوز الإجهاد قدرة الحافة فينشأ شرخ يبدأ عموديًا على الحافة. الفيلم لا «يكسر» الزجاج بذاته، لكنه يرفع معامل الامتصاص الحراري ويزيد التدرج، فيدفع تركيبة كانت على الحد إلى تجاوزه.\n\nالمخاطرة تزداد مع: الزجاج المُلدَّن العادي (annealed) — لا المقوّى بالحرارة (heat-strengthened) ولا المُقسّى بالكامل (fully tempered) — والزجاج الملوّن أو الممتص أصلًا، والتظليل الجزئي على اللوح الواحد، والألواح كبيرة المساحة، والوحدات المزدوجة حيث يختلف السلوك الحراري بين اللوحين. وفي الوحدة المزدوجة تحديدًا تضاف مسألة الضغط داخل التجويف والحمل الحراري على الفاصل والمانع.\n\nلذلك القاعدة المهنية: قبل تفليم أي وحدة مزدوجة، يُحدَّد نوع الزجاج وسماكته وتوجيهه ونسبة التظليل، ويُجرى تقييم توافق فيلم-زجاج وفق إرشادات الصناعة، ويُراجَع ما إذا كانت الشركة المصنّعة للوحدة تعتمد تركيب الفيلم — لأن التركيب غير المعتمد قد يُسقط ضمان الوحدة الزجاجية حتى لو ظل ضمان الفيلم قائمًا. في عزل كور نتعامل مع هذه الخطوة كشرط قبول للمشروع لا كإجراء اختياري، وقد نوصي بفيلم عاكس منخفض الامتصاص أو بحل خارجي بدل فيلم داخلي عالي الامتصاص عند الحاجة.",
        "bodyEn": "This is the most important technical section in the article, and the one most often ignored in the market. Applying an absorptive film to unsuitable glass can cause thermal stress fracture.\n\nThe mechanism: any sun-exposed lite heats more at its centre than at its shaded edges inside the frame. That gradient generates tensile stress at the edge. If the glass is annealed float with microscopic edge damage from cutting, the stress can exceed the edge strength and a crack initiates perpendicular to the edge. Film does not \"break\" glass by itself, but it raises absorptance and steepens the gradient, pushing a marginal assembly past its limit.\n\nRisk rises with: annealed glass rather than heat-strengthened or fully tempered; already tinted or absorbing glass; partial shading across a single lite; large lite areas; and insulated units, where the two lites behave thermally differently. In an IGU there is the additional matter of cavity pressure and thermal load on the spacer and seal.\n\nHence the professional rule: before filming any insulated unit, identify glass type, thickness, orientation and shading pattern, run a film-to-glass compatibility assessment per industry guidance, and check whether the unit manufacturer approves film application — because unapproved application can void the glazing warranty even if the film warranty stands. At AzelCore we treat this step as a project acceptance condition, not an optional courtesy, and where needed we will recommend a low-absorption reflective film or an exterior solution instead of a high-absorption interior film."
      },
      {
        "heading": "الامتثال لكود البناء السعودي SBC 601/602 وتوثيق الأداء",
        "headingEn": "Compliance with Saudi Building Code SBC 601/602 and performance documentation",
        "body": "كود البناء السعودي لترشيد الطاقة يضع متطلبات الغلاف الخارجي في مسارين: SBC 601 لجميع أنواع المباني عدا المباني السكنية المنخفضة الارتفاع، وSBC 602 للمباني السكنية المنخفضة الارتفاع. كلاهما يحدد لأنظمة الفتحات الزجاجية حدودًا قصوى لمعامل انتقال الحرارة U-factor ومعامل الكسب الحراري الشمسي SHGC، وتختلف الحدود بحسب المنطقة المناخية داخل المملكة ونسبة الزجاج إلى الجدار ومعامل البروز/التظليل الدائم للفتحة. أما اتجاه الواجهة فيدخل عبر المسار الأدائي وعبر التسهيل الممنوح للزجاج المواجه للشمال، بينما تبقى الواجهات الغربية والجنوبية خاضعة للحدّ الأساسي الأشد.\n\nالنقطة التي يجب أن يفهمها المالك: الكود لا يفرض «زجاجًا مزدوجًا» بالاسم، بل يفرض أداءً رقميًا. أي حل يحقق الحدود المطلوبة ويُوثَّق بشكل صحيح مقبول من حيث المبدأ. وهذا يعني أن معالجة الزجاج بفيلم عالي الأداء يمكن أن تسهم في تحقيق هدف SHGC على واجهة قائمة، تمامًا كما يسهم اختيار وحدة Low-E في مبنى جديد.\n\nالتوثيق هو ما يفصل بين الادعاء والامتثال. الكود يشير إلى تحديد قيم U-factor وفق NFRC 100 وقيم SHGC وفق NFRC 200 عبر مختبر مستقل معتمد، مع وسم وشهادة من الشركة المصنّعة. عمليًا يعني ذلك: احتفظ ببطاقة أداء الفيلم أو الوحدة الزجاجية، وشهادة المصنّع، ورقم الدفعة أو السيريال، وتقرير التركيب موقعًا من جهة معتمدة.\n\nنصيحة تنفيذية: عند التعامل مع استشاري أو جهة إشرافية، لا تقدّم عبارات تسويقية مثل «فيلم عازل ممتاز»، بل قدّم جدول الأداء الضوئي والحراري الرسمي من الشركة المصنّعة. للتعمق في هذا الجانب راجع دليل الامتثال لكود SBC 601/602 لدينا.",
        "bodyEn": "The Saudi energy conservation code splits envelope requirements into two tracks: SBC 601, covering all building types except low-rise residential, and SBC 602, covering low-rise residential buildings. Both set maximum U-factor and maximum Solar Heat Gain Coefficient limits for fenestration, varying by climate zone within the Kingdom, by window-to-wall ratio and by the projection factor of permanent shading. Orientation enters through the performance path and through the allowance given to north-facing glazing, while west and south elevations stay on the stricter base limit.\n\nThe point owners need to grasp: the code does not mandate \"double glazing\" by name — it mandates numerical performance. Any solution that meets the required limits and is properly documented is acceptable in principle. That means treating existing glass with a high-performance film can contribute to hitting an SHGC target on an existing facade, exactly as specifying a Low-E unit does in a new build.\n\nDocumentation is what separates a claim from compliance. The code points to determining U-factor per NFRC 100 and SHGC per NFRC 200 through an accredited independent laboratory, labelled and certified by the manufacturer. In practice: keep the film or glazing performance data sheet, the manufacturer certificate, the batch or serial number, and a signed installation report from an authorised installer.\n\nExecution tip: when dealing with a consultant or supervising authority, do not present marketing language like \"excellent insulating film\" — present the manufacturer's official optical and thermal performance table. For a deeper treatment see our SBC 601/602 compliance guide."
      },
      {
        "heading": "كيف تقرر عملياً: خطوات التقييم والعائد المتوقع",
        "headingEn": "How to decide in practice: assessment steps and expected return",
        "body": "القرار السليم لا يُبنى على انطباع، بل على مسار تقييم من خمس خطوات نطبقه في مشاريع المباني بجدة.\n\nأولًا: فحص حالة الزجاج القائم. هل الوحدات سليمة أم فيها ضباب داخلي؟ هل الإطارات صالحة أم متآكلة؟ هذه الخطوة وحدها تحسم كثيرًا من الحالات لصالح الاستبدال أو لصالح الفيلم.\n\nثانيًا: حصر المساحات حسب الاتجاه. الواجهة الغربية والجنوبية الغربية هي مصدر الحمل الأكبر في السعودية، وغالبًا ما تكون معالجتها وحدها كافية لإحداث الفرق المحسوس، وهو ما يخفض الميزانية المطلوبة كثيرًا مقارنة بمعالجة المبنى كاملًا.\n\nثالثًا: مسح حراري قبل التنفيذ. تصوير حراري لأسطح الزجاج والجدران الداخلية في ذروة الحمل يوثّق نقطة البداية ويسمح بقياس الأثر لاحقًا بدل الاعتماد على الإحساس.\n\nرابعًا: مطابقة الأرقام مع الهدف. حدد SHGC المستهدف حسب متطلبات SBC 601/602 ونسبة الزجاج إلى الجدار والتظليل الدائم للفتحة، ثم اختر الفيلم أو الوحدة التي تحققه فعلًا بحسب جدول الأداء المعتمد، لا حسب اللون أو الدرجة.\n\nخامسًا: حساب العائد. في الشق المعماري من دراسة عزل كور للرفض الحراري في جدة 2024-2026 — رصد استهلاك التكييف بعدادات معايرة في 42 مبنى قبل التركيب وبعده — بلغ خفض استهلاك التكييف 35-40% في المشاريع التي عولجت فيها الواجهات المسببة للحمل، مع تحسّن مصاحب في الراحة الحرارية وتقليل الوهج وحماية الأثاث والمفروشات من التلاشي. وباعتبار أن التكييف يمثل الحصة الأكبر من استهلاك الكهرباء في المباني السعودية صيفًا، فإن أثر هذا الخفض يظهر في الفاتورة خلال أول موسم تشغيل.\n\nوأخيرًا: نفّذ مع جهة معتمدة تُصدر ضمانًا موثقًا بسيريال، لأن ضمان الفيلم بلا تسجيل مصنّع لا قيمة له عمليًا.",
        "bodyEn": "A sound decision is not built on impression but on a five-step assessment path we apply to building projects in Jeddah.\n\nFirst: inspect the condition of the existing glazing. Are the units intact or internally fogged? Are the frames serviceable or corroded? This step alone resolves many cases in favour of either replacement or film.\n\nSecond: quantify area by orientation. West and south-west elevations are the largest load source in Saudi Arabia, and treating them alone is often enough to produce a felt difference — which sharply reduces the budget compared with treating the whole building.\n\nThird: a pre-works thermal survey. Thermal imaging of glass surfaces and interior walls at peak load documents the baseline and lets you measure the effect afterwards instead of relying on perception.\n\nFourth: match numbers to target. Define the target SHGC per SBC 601/602 for your window-to-wall ratio and the permanent shading of the opening, then choose the film or unit that actually achieves it according to the certified performance table — not by shade or colour.\n\nFifth: calculate return. In the building arm of the AzelCore Jeddah Thermal Rejection Study 2024-2026 — metered HVAC consumption across 42 buildings before and after installation — cooling-energy consumption fell by 35-40% on projects where the load-driving elevations were treated, with accompanying gains in thermal comfort, glare control and protection of furnishings from fading. Given that air conditioning is the largest share of summer electricity consumption in Saudi buildings, that reduction shows up in the bill within the first operating season.\n\nFinally: execute with an authorised provider who issues a documented, serial-registered warranty — an unregistered film warranty is practically worthless."
      }
    ],
    "table": {
      "headers": [
        "المعيار",
        "الزجاج المزدوج (استبدال)",
        "فيلم العزل الحراري (تحديث)",
        "الأنسب عندما"
      ],
      "headersEn": [
        "Criterion",
        "Double glazing (replacement)",
        "Heat-rejecting film (retrofit)",
        "Best when"
      ],
      "rows": [
        [
          "آلية العمل",
          "تقليل التوصيل عبر فجوة هواء/أرجون — لعبة U-value",
          "اعتراض الإشعاع الشمسي قبل دخوله — لعبة SHGC",
          "في السعودية الحمل المهيمن شمسي، فالأولوية لـ SHGC"
        ],
        [
          "الحرارة الشمسية المباشرة",
          "محدود مع لوحين شفافين، جيد جدًا مع Low-E انتقائي",
          "خفض قوي ومباشر لـ SHGC/TSER",
          "الواجهات الغربية والجنوبية الغربية"
        ],
        [
          "التوصيل والتكاثف",
          "الأقوى — يخفض U-value بوضوح ويقلل التكاثف على سطح الزجاج",
          "أثر محدود على U-value",
          "غرف بها تكاثف على الزجاج أو زجاج مفرد قديم"
        ],
        [
          "التكلفة الرأسمالية",
          "مرتفعة: تصنيع + تفكيك + إطارات + وصول + مخلفات",
          "أقل جوهريًا: تُسعَّر بالمتر المربع شاملة التركيب والضمان",
          "ميزانية تشغيلية بدل مشروع رأسمالي"
        ],
        [
          "التعطيل وزمن التنفيذ",
          "أيام إلى أسابيع، سقالات وتصاريح وتوقف استخدام",
          "ساعات إلى أيام، المبنى يبقى مشغولًا",
          "مبنى قيد التشغيل لا يحتمل الإغلاق"
        ],
        [
          "العزل الصوتي والسلامة عند الكسر",
          "تحسّن صوتي حقيقي مع سماكات لامتماثلة أو زجاج مصفح",
          "لا يغيّر العزل الصوتي جوهريًا؛ تماسك الشظايا يتطلب فيلم سلامة وأمان بسماكة كافية",
          "قرب طريق سريع أو مسار طيران"
        ],
        [
          "وحدة ضبابية/فاشلة الختم",
          "الحل الوحيد: استبدال الوحدة",
          "لا يعالج العطب لأنه داخل التجويف",
          "ظهور ضباب أو تكاثف بين اللوحين"
        ],
        [
          "الامتثال SBC 601/602",
          "يُوثَّق بـ NFRC 100/200 وشهادة المصنّع",
          "يُوثَّق بجدول الأداء وشهادة وسيريال المصنّع",
          "الكود يفرض أداءً رقميًا لا منتجًا بعينه"
        ]
      ],
      "rowsEn": [
        [
          "Working mechanism",
          "Reduces conduction via air/argon gap — a U-value play",
          "Intercepts solar radiation before entry — an SHGC play",
          "In Saudi Arabia the dominant load is solar, so SHGC comes first"
        ],
        [
          "Direct solar heat",
          "Limited with two clear lites; very good with selective Low-E",
          "Strong, direct reduction in SHGC/TSER",
          "West and south-west elevations"
        ],
        [
          "Conduction and condensation",
          "Strongest — clearly lowers U-value and reduces surface condensation",
          "Limited effect on U-value",
          "Rooms with condensation on the glass or old single glazing"
        ],
        [
          "Capital cost",
          "High: fabrication + removal + frames + access + waste",
          "Materially lower: priced per square metre incl. install and warranty",
          "An operating budget rather than a capital project"
        ],
        [
          "Disruption and schedule",
          "Days to weeks; scaffolding, permits, downtime",
          "Hours to days; the building stays occupied",
          "An operating building that cannot close"
        ],
        [
          "Acoustics and break safety",
          "Real acoustic improvement with asymmetric lites or laminated glass",
          "Does not fundamentally change acoustics; fragment retention needs a safety/security-rated film of adequate thickness",
          "Near a highway or flight path"
        ],
        [
          "Fogged / seal-failed unit",
          "The only fix: replace the unit",
          "Cannot fix it — the defect is inside the cavity",
          "Fog or condensation appears between the lites"
        ],
        [
          "SBC 601/602 compliance",
          "Documented via NFRC 100/200 and manufacturer certificate",
          "Documented via performance table, certificate and serial",
          "The code mandates numerical performance, not a specific product"
        ]
      ]
    },
    "faqs": [
      {
        "q": "أيهما أوفر فعلاً: تركيب فيلم عزل على الزجاج الحالي، ولا تغيير الزجاج بزجاج مزدوج؟",
        "qEn": "Which is genuinely cheaper: filming the existing glass, or replacing it with double glazing?",
        "a": "إذا كان الزجاج القائم سليمًا والإطارات صالحة، فالفيلم أوفر بفارق كبير: يُسعَّر بالمتر المربع شاملًا التركيب والضمان، ولا يحتاج تصنيعًا ولا تفكيكًا ولا سقالات ولا مخلفات ولا إغلاق المبنى. الاستبدال يضيف تكاليف الإطارات والوصول والتصاريح والترميم وتوقف الاستخدام. أما إذا كانت الوحدات فاشلة الختم أو الإطارات متآكلة، فالاستبدال هو الأصح رغم تكلفته.",
        "aEn": "If the existing glass is sound and the frames are serviceable, film is substantially cheaper: priced per square metre including installation and warranty, with no fabrication, removal, scaffolding, waste stream or building closure. Replacement adds frames, access, permits, making-good and downtime. But if the units have failed seals or the frames are corroded, replacement is the correct call despite the cost."
      },
      {
        "q": "هل الزجاج المزدوج لحاله يكفي يخفّض فاتورة الكهرباء في جدة؟",
        "qEn": "Is double glazing on its own enough to cut the electricity bill in Jeddah?",
        "a": "ليس بالضرورة. الزجاج المزدوج بلوحين شفافين يخفض التوصيل (U-value) لكنه يظل يمرر جزءًا كبيرًا من الطاقة الشمسية. وفي مناخ السعودية الحمل المهيمن شمسي، لذلك قد تدفع تكلفة استبدال كاملة وتجد الغرفة الغربية ما زالت ساخنة عصرًا. الفارق الحقيقي يأتي من خفض SHGC — عبر زجاج Low-E انتقائي طيفيًا أو فيلم عالي الأداء.",
        "aEn": "Not necessarily. A double unit with two clear lites lowers conduction (U-value) but still transmits a large share of solar energy. In Saudi Arabia the dominant load is solar, so you can pay for a full replacement and still find the west room hot at 4 p.m. The real difference comes from cutting SHGC — via spectrally selective Low-E glass or a high-performance film."
      },
      {
        "q": "عندي زجاج مزدوج أصلاً — أقدر أركّب عليه فيلم عزل؟",
        "qEn": "I already have double glazing — can I apply film on top of it?",
        "a": "ممكن في حالات كثيرة، لكن بشرط تقييم مسبق. يجب تحديد نوع الزجاج (مُقسّى بالكامل أم مقوّى بالحرارة أم مُلدَّن annealed)، والسماكة، والاتجاه، ونمط التظليل الجزئي، ثم إجراء تقييم توافق فيلم-زجاج والتأكد من اعتماد الشركة المصنّعة للوحدة. التركيب غير المدروس على وحدة مزدوجة قد يسبب كسرًا بالإجهاد الحراري وقد يُسقط ضمان الزجاج.",
        "aEn": "In many cases yes, but only after a proper assessment. You must identify the glass type (fully tempered, heat-strengthened or annealed), thickness, orientation and partial shading pattern, then run a film-to-glass compatibility assessment and confirm the unit manufacturer approves it. Unassessed application on an IGU can cause thermal stress fracture and may void the glazing warranty."
      },
      {
        "q": "زجاجي المزدوج صار فيه شبورة من الداخل — أعالجه بفيلم؟",
        "qEn": "My double glazing has fogged up inside — can film fix that?",
        "a": "لا. الضباب أو التكاثف بين اللوحين يعني أن الختم المزدوج تسرّب وأن المادة المجففة داخل الفاصل تشبّعت بالرطوبة. العطب داخل تجويف الوحدة لا على سطحها، والفيلم يُركَّب على السطح فقط. الحل الوحيد استبدال الوحدة الزجاجية. أي جهة تعرض عليك «معالجة الضباب بفيلم» تبيعك حلًا لا يعمل.",
        "aEn": "No. Fog or condensation between the lites means the dual seal has leaked and the desiccant inside the spacer has saturated. The defect is inside the cavity, not on the surface, and film is applied only to the surface. The only remedy is replacing the glazing unit. Anyone offering to \"fix the fog with film\" is selling you something that does not work."
      },
      {
        "q": "كم أوفّر تقريبًا من فاتورة التكييف لو عزلت زجاج الفيلا؟",
        "qEn": "Roughly how much can I save on cooling if I insulate my villa's glass?",
        "a": "في المشاريع التي تعالج الواجهات المسببة للحمل فعليًا — الغربية والجنوبية الغربية أولًا — سجّل الشق المعماري من دراسة عزل كور للرفض الحراري في جدة 2024-2026 (42 مبنى بعدادات معايرة) خفضًا في استهلاك التكييف بنحو 35-40%، ويظهر الأثر في الفاتورة خلال أول موسم تشغيل لأن التكييف يمثل الحصة الأكبر من الاستهلاك الصيفي. النتيجة الدقيقة تعتمد على مساحة الزجاج واتجاهه وأداء الفيلم المختار.",
        "aEn": "On projects that actually treat the load-driving elevations — west and south-west first — the building arm of the AzelCore Jeddah Thermal Rejection Study 2024-2026 (42 buildings, calibrated meters) recorded roughly a 35-40% cut in cooling-energy consumption, and the effect shows in the bill within the first operating season, since air conditioning is the largest share of summer consumption. The precise result depends on glazed area, orientation and the performance of the chosen film."
      },
      {
        "q": "هل فيلم العزل معتمد ضمن كود البناء السعودي SBC 601/602؟",
        "qEn": "Is window film accepted under Saudi Building Code SBC 601/602?",
        "a": "الكود لا يفرض منتجًا بعينه، بل يفرض أداءً رقميًا: حدودًا قصوى لـ U-factor وSHGC تختلف بحسب المنطقة المناخية ونسبة الزجاج إلى الجدار ومعامل البروز/التظليل الدائم للفتحة. لذلك يمكن للفيلم عالي الأداء أن يسهم في تحقيق هدف SHGC على واجهة قائمة، بشرط التوثيق: جدول أداء رسمي من المصنّع، تحديد القيم وفق NFRC 100/200، وشهادة وسيريال وتقرير تركيب معتمد.",
        "aEn": "The code does not mandate a specific product; it mandates numerical performance — maximum U-factor and SHGC limits that vary by climate zone, window-to-wall ratio and the projection factor of permanent shading. A high-performance film can therefore contribute to meeting an SHGC target on an existing facade, provided it is documented: an official manufacturer performance table, values determined per NFRC 100/200, plus certificate, serial and an authorised installation report."
      },
      {
        "q": "كم ياخذ تركيب فيلم العزل للمبنى، ولازم نطلع من المكان؟",
        "qEn": "How long does building film installation take, and do we have to vacate?",
        "a": "غالبًا لا. الفيلم يُركَّب على الزجاج القائم دون تفكيك، ويمكن تنفيذه على طابق أو واجهة في كل مرة، وخارج ساعات الدوام في المنشآت التجارية. الزمن يتراوح عادة بين ساعات وأيام حسب مساحة الزجاج وسهولة الوصول. أما استبدال الزجاج فيتطلب سقالات أو منصات، وتصاريح واجهة، وإخراج مخلفات، وغالبًا إيقاف استخدام الفراغ لأيام أو أسابيع.",
        "aEn": "Usually not. Film is applied to existing glass with no disassembly, and can be executed one floor or elevation at a time, outside business hours in commercial facilities. Typical duration ranges from hours to days depending on glazed area and access. Glass replacement, by contrast, requires scaffolding or lifts, facade permits, waste removal, and usually taking the space out of use for days or weeks."
      }
    ],
    "warning": "تحذير تقني: لا تركّب فيلمًا عازلًا على وحدة زجاج مزدوج قائمة دون تقييم توافق فيلم-زجاج. الأفلام الممتصة ترفع التدرج الحراري بين مركز اللوح وحافته المظللة داخل الإطار، وقد تسبب كسرًا بالإجهاد الحراري في الزجاج المُلدَّن غير المقوّى (annealed)، أو في الألواح كبيرة المساحة، أو عند وجود تظليل جزئي. كما أن التركيب غير المعتمد من الشركة المصنّعة للوحدة قد يُسقط ضمان الزجاج حتى لو ظل ضمان الفيلم ساريًا. وإذا كانت الوحدة تُظهر ضبابًا أو تكاثفًا بين اللوحين فقد فشل ختمها، والفيلم لا يعالج هذا العطب إطلاقًا — الاستبدال هو الحل الوحيد.",
    "warningEn": "Technical warning: do not apply solar film to an existing insulated glass unit without a film-to-glass compatibility assessment. Absorptive films steepen the thermal gradient between the centre of the lite and its shaded edge inside the frame, and can cause thermal stress fracture in annealed glass, in large lites, or where partial shading occurs. Unapproved application can also void the glazing manufacturer's warranty even if the film warranty remains valid. And if the unit shows fog or condensation between the lites, its seal has already failed — film does nothing for that defect; replacement is the only remedy.",
    "cta": "إذا كنت تحاول أن تقرر بين استبدال الزجاج وتركيب فيلم عزل حراري، فالخطوة الصحيحة ليست طلب عرض سعر، بل طلب تقييم. في عزل كور — وكيل جونسون و3M الرسمي في جدة — نفحص حالة الزجاج والإطارات، نحصر المساحات حسب الاتجاه، نتحقق من نوع الزجاج قبل أي توصية بالفيلم، ونعرض عليك الأرقام الرسمية للأداء الحراري لا العبارات التسويقية، ثم نقول لك بصراحة إن كانت حالتك من الحالات التي يكون فيها الاستبدال هو الجواب. للتواصل مع محمد الهادي، فني عزل وتظليل معتمد، عبر الهاتف أو واتساب: ‎+966564612017.",
    "ctaEn": "If you are trying to decide between replacing the glazing and applying a heat-rejecting film, the right first step is not a quotation — it is an assessment. At AzelCore, the authorised Johnson and 3M dealer in Jeddah, we inspect the condition of glass and frames, quantify area by orientation, verify glass type before recommending any film, and show you official thermal performance figures rather than marketing language — then tell you honestly if yours is one of the cases where replacement is the answer. To reach Mohammed Al-Hadi, certified insulation and window film technician, by phone or WhatsApp: +966564612017.",
    "sources": [
      {
        "label": "كود البناء السعودي — متطلبات ترشيد الطاقة SBC 601 (النص الكامل، PDF)",
        "labelEn": "Saudi Building Code — Energy Conservation Requirements SBC 601 (full text, PDF)",
        "url": "https://fkec.com.sa/website/uploads/Energy_Conservation_Requirements.pdf"
      },
      {
        "label": "المجلس الوطني لتصنيف الفتحات NFRC — منهجيات NFRC 100/200 لقياس U-factor وSHGC",
        "labelEn": "National Fenestration Rating Council (NFRC) — NFRC 100/200 methods for U-factor and SHGC",
        "url": "https://www.nfrc.org/"
      },
      {
        "label": "الإجهاد الحراري وتوافق الفيلم مع الزجاج — GlassOnWeb",
        "labelEn": "Thermal Stress: Film-to-Glass Compatibility — GlassOnWeb",
        "url": "https://www.glassonweb.com/article/thermal-stress-film-glass-compatibility"
      },
      {
        "label": "الجمعية الدولية لأفلام النوافذ IWFA — دليل التعليم لأفلام السلامة والأمان",
        "labelEn": "International Window Film Association (IWFA) — Safety & Security Education Guide",
        "url": "https://iwfa.com/wp-content/uploads/2024/04/Safety-and-Security-Education-Manual-1.pdf"
      },
      {
        "label": "ASHRAE Standard 90.1 — متطلبات كفاءة الطاقة لأغلفة المباني",
        "labelEn": "ASHRAE Standard 90.1 — Energy Standard for Buildings",
        "url": "https://www.ashrae.org/technical-resources/bookstore/standard-90-1"
      },
      {
        "label": "دراسة عزل كور للرفض الحراري في جدة 2024-2026 (n=530، FLIR T530، ISO 13837:2021)",
        "labelEn": "AzelCore Jeddah Thermal Rejection Study 2024-2026 (n=530, FLIR T530, ISO 13837:2021)",
        "url": "https://azelcore.com/research/ksa-thermal-report-2026"
      }
    ]
  }
};

export default article;
