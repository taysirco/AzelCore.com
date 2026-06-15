// ═══ Blog: تقنية الـ FLIR الفحص الحراري لاختبار التظليل ═══
import type { ArticleModule } from './types';

const article: ArticleModule = {
  ogImage: 'thermal-camera-car-test.webp',
  serviceLinks: [
    { href: '/car-insulation-jeddah', text: 'تظليل نانو سيراميك مثبت الفعالية بالفحص الحراري', textEn: 'Nano-Ceramic Tint Proven by Thermal Testing' },
    { href: '/thermal-cars', text: 'اختبر سيارتك مجاناً بجهاز FLIR في مركزنا', textEn: 'Test Your Car for Free with FLIR in Our Center' },
    { href: '/3m-authorized-dealer', text: 'ركب 3M Crystalline وتحدى حرارة جدة', textEn: 'Install 3M Crystalline and Defy Jeddah Heat' },
  ],
  content: {
    quickAnswer: 'اختبار التظليل الحقيقي لا يتم بـ "اللمبة الحمراء" الخادعة في المحلات، بل باستخدام كاميرات التصوير الحراري (FLIR). هذه الكاميرات تقيس الحرارة الإشعاعية الفعلية بالأشعة تحت الحمراء. التظليل المغشوش قد يحجب الضوء (مظلم)، لكنه يسرب الحرارة، بينما تظليل النانو سيراميك الأصلي (مثل 3M و Johnson) يحجب ما يصل إلى 97% من الأشعة تحت الحمراء غير المرئية. يمكنك طلب فحص سيارتك بجهاز FLIR قبل وبعد التركيب للتأكد من أرقام العزل هندسياً.',
    quickAnswerEn: 'Real tint testing is not done with deceptive "red heat lamps" in shops, but using FLIR thermal imaging cameras. These cameras measure actual radiant heat via infrared rays. Fake tint may block light (dark), but it leaks heat, while original Nano-Ceramic tint (like 3M and Johnson) blocks up to 97% of invisible infrared rays. You can request a FLIR test for your car before and after installation to engineerigly verify the insulation numbers.',
    intro: 'في عالم تظليل السيارات، الخداع البصري أسهل ما يكون. الكثير من السائقين في السعودية يعتقدون أن "التظليل الداكن جداً (كتم 04)" يعني بالضرورة عزلاً حرارياً ممتازاً. هذا الاعتقاد الخاطئ يكلف ملايين الريالات سنوياً على تظليل تجاري رخيص لا قيمة له سوى حجب الرؤية. الحقيقة الفيزيائية هي أن الحرارة التي تشعر بها داخل السيارة لا تأتي من الضوء المرئي (Visible Light)، بل تأتي بنسبة 53% من الأشعة تحت الحمراء (Infrared - IR) غير المرئية إطلاقاً! هنا يأتي دور تقنية التصوير الحراري المتقدمة (FLIR - Forward Looking Infrared). في هذا التقرير التقني، سنكشف لك سر المهنة، وكيف تستخدم مراكز التظليل المعتمدة (مثل عزل كور) كاميرات FLIR لكشف التظليل الكربوني المغشوش، وكيف يمكنك استخدام هذه التقنية كمعيار هندسي قطعي لا يقبل الجدل قبل دفع أي ريال في تظليل سيارتك.',
    introEn: 'In the car tinting world, optical illusion is extremely easy. Many drivers in Saudi Arabia believe that "very dark tint (Limousine 04)" necessarily means excellent thermal insulation. This misconception costs millions of Riyals annually on cheap commercial tint that has no value other than blocking vision. The physical truth is that the heat you feel inside the car does not come from Visible Light, but 53% of it comes from completely invisible Infrared (IR) rays! This is where advanced thermal imaging technology (FLIR - Forward Looking Infrared) comes in. In this technical report, we will reveal the industry secret: how authorized tinting centers (like AzelCore) use FLIR cameras to expose fake carbon tint, and how you can use this technology as an indisputable engineering standard before paying a single Riyal for your car\'s tint.',
    table: {
      headers: ['نوع الاختبار الحراري', 'التقنية المستخدمة', 'النتيجة (دقة الاختبار)'],
      headersEn: ['Thermal Test Type', 'Technology Used', 'Result (Test Accuracy)'],
      rows: [
        ['اختبار "اللمبة الحمراء" التقليدي', 'لمبة هالوجين حرارية عادية مع جهاز دوران', 'خادع (يختبر منطقة ضيقة جداً ولا يحاكي شمس الصيف)'],
        ['جهاز قياس TSER و IR المحمول', 'مقياس رقمي يُوضع على الزجاج', 'دقيق جزئياً (يقيس أرقام المعمل وليس الأداء الفعلي في الشارع)'],
        ['كاميرا التصوير الحراري (FLIR)', 'مستشعرات تقرأ الأشعة تحت الحمراء الإشعاعية', 'دقة قطعية 100% (يكشف البقع الساخنة والتسرب الحراري الحي)'],
        ['اختبار درجة حرارة الطبلون بالليزر', 'مقياس حرارة ليزر (Infrared Thermometer)', 'عملي جداً (يقيس حرارة الأسطح بدقة قبل وبعد التركيب)'],
      ],
      rowsEn: [
        ['Traditional "Red Lamp" Test', 'Standard thermal halogen lamp with a spinning dial', 'Deceptive (tests a very narrow area and doesn\'t simulate summer sun)'],
        ['Portable TSER & IR Meter', 'Digital meter placed on the glass', 'Partially accurate (measures lab numbers, not actual street performance)'],
        ['Thermal Imaging Camera (FLIR)', 'Sensors reading radiant infrared rays', '100% Absolute Accuracy (reveals hot spots and live heat leakage)'],
        ['Laser Dashboard Temperature Test', 'Infrared Thermometer (Laser gun)', 'Highly practical (accurately measures surface heat before and after)'],
      ]
    },
    sections: [
      {
        heading: 'خدعة "التظليل الكتم" والضوء المرئي',
        headingEn: 'The Trick of "Limo Dark Tint" and Visible Light',
        body: 'الشركات المصنعة للتظليل الرخيص تعتمد على جهل المستهلك بفيزياء الطيف الشمسي. يقومون بصبغ فيلم البوليستر باللون الأسود الداكن ليحجب الضوء (VLT)، مما يعطي السائق إحساساً نفسياً بالبرودة الوهمية بسبب الظلام. لكن بمجرد وقوف السيارة في شمس جدة الحارقة، يخترق الإشعاع الحراري (IR) هذا الفيلم المصبوغ بسهولة تامة، ليطبخ مقصورة السيارة. التظليل الداكن يعيق رؤيتك الليلية ويجعلك عرضة للمخالفات المرورية، بينما يحجب 10% إلى 20% فقط من الحرارة الحقيقية. الكاميرا الحرارية تفضح هذا الخداع فوراً، حيث تظهر السيارة من الداخل باللون "الأحمر المتوهج" (Hot) رغم ظلام المقصورة.',
        bodyEn: 'Manufacturers of cheap tint rely on the consumer\'s ignorance of the solar spectrum physics. They dye the polyester film pitch black to block light (VLT), giving the driver a psychological illusion of cooling due to the darkness. But the moment the car is parked under the scorching Jeddah sun, thermal radiation (IR) effortlessly penetrates this dyed film, cooking the car\'s cabin. Dark tint impairs your night vision and exposes you to traffic fines, while blocking only 10% to 20% of actual heat. The thermal camera exposes this deception instantly; the inside of the car appears "Glowing Red" (Hot) on the screen despite the cabin\'s darkness.'
      },
      {
        heading: 'كيف تعمل كاميرات FLIR في كشف العزل؟',
        headingEn: 'How Do FLIR Cameras Work in Detecting Insulation?',
        body: 'كاميرات FLIR (Forward Looking Infrared) لا تلتقط الضوء، بل تلتقط "البصمة الحرارية" للأجسام وتترجمها إلى خريطة لونية (Thermogram). الألوان الزرقاء والبنفسجية تدل على البرودة، بينما الألوان الحمراء والصفراء والبيضاء تدل على درجات الحرارة القصوى. عند توجيه الكاميرا لسيارة نصف زجاجها مظلل بتقنية النانو سيراميك (مثل 3M Crystalline) والنصف الآخر غير مظلل، سترى بعينك المجردة على الشاشة حداً فاصلاً حاداً: النصف غير المظلل يشتعل باللون الأحمر، بينما النصف المظلل يظهر بلون أزرق بارد ومريح. هذا الاختبار لا يمكن تزويره، وهو المعيار الذهبي الذي نتبعه في تقييم جودة الأفلام في معارضنا.',
        bodyEn: 'FLIR (Forward Looking Infrared) cameras do not capture light; they capture the "thermal signature" of objects and translate them into a color map (Thermogram). Blue and purple colors indicate coolness, while red, yellow, and white colors indicate extreme temperatures. When pointing the camera at a car where half the glass is tinted with Nano-Ceramic tech (like 3M Crystalline) and the other half is untinted, you will see a sharp dividing line on the screen with your bare eyes: the untinted half is blazing red, while the tinted half appears in a cool, relaxing blue. This test cannot be faked, and it is the golden standard we follow in evaluating film quality in our showrooms.'
      },
      {
        heading: 'لماذا يجب أن تطلب هذا الاختبار قبل الدفع؟',
        headingEn: 'Why You Must Request This Test Before Paying?',
        body: 'السوق السعودي مليء بالعلامات التجارية الوهمية التي تدعي عزلاً حرارياً بنسبة 99%. بدون أداة قياس دقيقة، أنت تشتري "سمكاً في ماء". طلب اختبار FLIR أو قياس الحرارة المباشر يحقق لك فوائد جوهرية: أولاً، تتأكد من أن الفيلم يحتوي فعلاً على جزيئات السيراميك النانوية (التي ترفض الـ IR) وليس مجرد فيلم كربوني. ثانياً، يمكنك المقارنة بين درجتين من التظليل؛ ستتفاجأ أن فيلم 3M Crystalline الشفاف جداً يوفر عزل حراري (TSER) يتفوق على فيلم كوري أسود كتم بنسبة 300%. ثالثاً، يثبت لك الاختبار جودة التركيب، حيث تكشف الكاميرا أي تسرب حراري من حواف النوافذ في حال تم القص بشكل سيء.',
        bodyEn: 'The Saudi market is flooded with fake brands claiming 99% thermal insulation. Without a precise measurement tool, you are buying a "pig in a poke." Requesting a FLIR test or direct temperature measurement gives you crucial benefits: First, you ensure the film actually contains Nano-Ceramic particles (which reject IR) and isn\'t just a carbon film. Second, you can compare two tint shades; you will be surprised that the highly transparent 3M Crystalline film provides a Total Solar Energy Rejection (TSER) that outperforms a pitch-black Korean film by 300%. Third, the test proves installation quality, as the camera reveals any heat leakage from the window edges if poorly cut.'
      },
      {
        heading: 'تقنية الـ VLT مقابل تقنية الـ IR Rejection',
        headingEn: 'VLT Technology vs. IR Rejection Technology',
        body: 'يجب أن تحفظ هذين المصطلحين جيداً. (VLT) أو Visible Light Transmission هو نسبة انتقال الضوء (شفافية التظليل، 01، 02، 03). بينما (IR Rejection) هو نسبة رفض الأشعة تحت الحمراء المسببة للحرارة. التقنية الحديثة في تظليل السيارات فصلت تماماً بين الاثنين. اليوم، من خلال هندسة النانو، يمكن لفيلم بشفافية 70% (مسموح مرورياً للزجاج الأمامي ولن تلاحظ وجوده) أن يرفض 97% من حرارة الـ IR. تقنية التصوير الحراري هي الوحيدة القادرة على إثبات قدرة الأفلام الشفافة الفاخرة على صد الحرارة، مما ينهي الجدال التقني تماماً.',
        bodyEn: 'You must memorize these two terms well. (VLT) or Visible Light Transmission is the percentage of light passing through (tint transparency, 01, 02, 03). While (IR Rejection) is the percentage of heat-causing infrared rays rejected. Modern car tinting technology has completely separated the two. Today, through nano-engineering, a film with 70% transparency (legally allowed for windshields and barely noticeable) can reject 97% of IR heat. Thermal imaging tech is the only tool capable of proving the heat-rejecting power of luxury transparent films, completely ending the technical debate.'
      }
    ],
    expertReview: {
      author: 'قسم الجودة الهندسية — عزل كور',
      authorEn: 'Engineering Quality Dept — AzelCore',
      role: 'فني فحص حراري معتمد',
      roleEn: 'Certified Thermal Testing Technician',
      rating: 9.9,
      text: 'لقد قمنا بفحص أكثر من 500 سيارة لعملائنا قبل تغيير التظليل القديم. كانت الصدمة دائماً في وجوههم عندما يرون شاشات الـ FLIR. تظليل الوكالة التجاري غالباً ما يُظهر بقعاً حمراء ملتهبة تصل حرارتها لـ 70 مئوية. نحن نرفض بيع الوهم؛ عندما يغادر العميل مركزنا بتظليل 3M أو جونسون، نقوم بفحص السيارة بالليزر والكاميرا الحرارية لتأكيد انخفاض الحرارة بـ 30 درجة على الأقل. الأرقام لا تكذب.',
      textEn: 'We have tested over 500 cars for our clients before replacing their old tint. The shock was always on their faces when they saw the FLIR screens. Commercial dealership tint often shows blazing red spots reaching 70 degrees Celsius. We refuse to sell illusions; when a client leaves our center with 3M or Johnson tint, we test the car with lasers and thermal cameras to confirm a temperature drop of at least 30 degrees. Numbers don\'t lie.'
    },
    faqs: [
      { q: 'هل يمكنني إجراء فحص الكاميرا الحرارية بنفسي؟', qEn: 'Can I perform the thermal camera test myself?', a: 'كاميرات FLIR الاحترافية باهظة الثمن، ولكن يمكنك استخدام "مسدس قياس الحرارة بالليزر" (Infrared Thermometer) المتوفر بسعر رخيص. قم بقياس حرارة طبلون السيارة قبل التظليل (في عز الظهر)، ثم قسه في اليوم التالي في نفس الوقت بعد تركيب التظليل. الفرق سيوضح لك جودة العزل.', aEn: 'Professional FLIR cameras are expensive, but you can use an affordable "Laser Infrared Thermometer." Measure your car\'s dashboard temperature before tinting (at high noon), then measure it the next day at the same time after installing the tint. The difference will show you the insulation quality.' },
      { q: 'لماذا تبدو بعض محلات الزينة باردة رغم وجود اللمبة الحمراء؟', qEn: 'Why do some accessory shops feel cool despite the red lamp?', a: 'هذه حيلة تسويقية. اللمبة الهالوجينية في المحل تختبر منطقة صغيرة جداً (5 سم)، وفيلم التظليل الرديء قد يحتفظ بالحرارة لثوانٍ قبل أن ينهار ويبدأ بالتسريب. بالإضافة إلى أن المحل يكون مكيفاً بشدة (Central AC). التجربة الحقيقية هي ترك السيارة في شمس أغسطس لمدة ساعة.', aEn: 'This is a marketing trick. The halogen lamp in the shop tests a very small area (5 cm), and poor tint film might hold the heat for a few seconds before breaking down and leaking. Plus, the shop is heavily air-conditioned. The real test is leaving the car in the August sun for an hour.' },
      { q: 'هل تظليل النانو سيراميك يحجب إشارة الجوال مثل العزل المعدني؟', qEn: 'Does Nano-Ceramic tint block cell signals like metallized tint?', a: 'لا. التظليل العاكس أو المعدني (Metallized) القديم هو الذي يقطع إشارات الـ GPS والجوال. النانو سيراميك هو مادة غير موصلة ولا تعتمد على المعادن لعكس الحرارة، بل على جزيئات نانوية تمتص وترفض الإشعاع، لذا فهو آمن 100% على الإشارات اللاسلكية.', aEn: 'No. The old reflective or Metallized tint is what blocks GPS and mobile signals. Nano-Ceramic is a non-conductive material and does not rely on metals to reflect heat, but on nano-particles that absorb and reject radiation, making it 100% safe for wireless signals.' }
    ],
    sources: [
      { label: 'شركة FLIR للتصوير الحراري', labelEn: 'FLIR (Teledyne) thermal imaging', url: 'https://www.flir.com/' },
      { label: 'الجمعية الدولية لأفلام النوافذ (IWFA)', labelEn: 'International Window Film Association (IWFA)', url: 'https://www.iwfa.com/' },
    ],
    warning: 'لا تنخدع بعبارة "تظليل أمريكي 100%" إذا كانت بسعر 300 ريال. تكلفة المادة الخام لأفلام النانو سيراميك الأصلية المرفوضة للـ IR تفوق هذا المبلغ بكثير. اطلب دائماً شهادة الضمان الإلكترونية الرسمية واختبر العزل قبل التسليم.',
    warningEn: 'Do not be fooled by the phrase "100% American Tint" if it is priced at 300 SAR. The raw material cost of original IR-rejecting Nano-Ceramic films far exceeds this amount. Always request the official electronic warranty certificate and test the insulation before delivery.',
    cta: 'لا تدفع أموالك على "صبغة سوداء". احجز موعدك الآن في "عزل كور"، واطلب تجربة فحص العزل بجهاز FLIR مجاناً قبل اتخاذ قرارك بتركيب تظليل النانو سيراميك.',
    ctaEn: 'Don\'t spend your money on "black dye." Book your appointment now at "AzelCore", and request a free FLIR insulation test experience before deciding to install Nano-Ceramic tint.',
  },
};

export default article;
