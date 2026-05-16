import type { ArticleModule } from './types';

const article: ArticleModule = {
  ogImage: 'why-choose-us-workshop.webp',
  serviceLinks: [
    { href: '/car-insulation-jeddah', text: 'تظليل سيارتك بأفلام النانو سيراميك الأصلية بضمان 10 سنوات', textEn: 'Tint Your Car with Original Nano Ceramic Films with a 10-Year Warranty' }
  ],
  content: {
    intro: 'عند شرائك سيارة جديدة من الوكالة، يعرض عليك موظف المبيعات بكل حماس "باقة حماية وتظليل" كإضافة للسيارة قبل استلامها. قد يخبرك أنها "مجانية" ضمن عرض الشراء، أو بسعر باهظ يصل إلى 3000 ريال. هل هذه الباقة تستحق حقاً؟ أم أنها مجرد هامش ربح خفي للوكالة؟',
    introEn: 'When buying a new car, the sales rep enthusiastically offers a "protection and tinting package" before delivery. They might say it\'s "free" or charge up to 3,000 SAR. Is this package really worth it? Or is it just a hidden profit margin for the dealership?',
    quickAnswer: 'وكالات السيارات لا تصنع التظليل، بل تتعاقد مع مقاولين من الباطن لتركيب أفلام تجارية رخيصة بهامش ربح (Markup) يتجاوز 200٪. في المراكز المتخصصة، تحصل على أفلام نانو سيراميك حقيقية ومثبتة هندسياً بنصف التكلفة التي تدفعها في الوكالة.',
    quickAnswerEn: 'Car dealerships do not manufacture tint; they hire subcontractors to install cheap commercial films with a markup exceeding 200%. In specialized centers, you get real, engineering-proven nano-ceramic films for half the cost you pay at the dealership.',
    sections: [
      {
        heading: 'الأرقام المبالغ فيها مقابل القيمة الحقيقية',
        headingEn: 'Inflated Numbers vs. Real Value',
        body: 'ما تدفعه في الوكالة بـ 2500 ريال هو في الواقع فيلم كربوني أو مصبوغ لا تتجاوز تكلفته 400 ريال. الوكالة تستغل حماسك للسيارة الجديدة لتمرير هذه التكلفة. في المقابل، المراكز المتخصصة توفر لك أجهزة قياس (FLIR) لتتأكد من كفاءة العزل بنفسك.',
        bodyEn: 'What you pay 2500 SAR for at the dealership is actually a dyed or carbon film costing no more than 400 SAR. The dealership exploits your excitement for the new car to pass this cost. In contrast, specialized centers provide measurement tools (FLIR) so you can verify the insulation efficiency yourself.'
      },
      {
        heading: 'بيئة التركيب: الحوش الخلفي مقابل الغرف المعزولة',
        headingEn: 'Installation Environment: Backyard vs. Clean Rooms',
        body: 'يتم تركيب التظليل في الوكالة غالباً في الساحات المفتوحة أو مواقف التسليم، مما يعرض الفيلم للغبار. بينما في المراكز المعتمدة مثل (عزل كور)، يتم التركيب في "غرف عزل مغلقة ومكيفة" لضمان خلو الجو من ذرات الغبار وحصولك على زجاج صافٍ تماماً.',
        bodyEn: 'Dealership tinting is often done in open yards or delivery parking lots, exposing the film to dust. In certified centers like AzelCore, installation occurs in "closed, air-conditioned clean rooms" ensuring a dust-free environment and perfectly clear glass.'
      },
      {
        heading: 'ماذا عن باقة الحماية "الهدية"؟',
        headingEn: 'What About the "Free Gift" Protection Package?',
        body: 'إذا كانت الباقة "مجانية"، فتأكد أن تكلفتها لا تتجاوز 150 ريال. ستحصل على فيلم تجاري يضعف الرؤية الليلية ويحتبس الحرارة. ناهيك عن خطر تشريط الزجاج بسبب سرعة التركيب لإنجاز عشرات السيارات في وقت قصير.',
        bodyEn: 'If the package is "free," rest assured its cost is under 150 SAR. You will get a commercial film that impairs night vision and traps heat. Not to mention the risk of scratching the glass due to rushed installation trying to finish dozens of cars.'
      }
    ],
    expertReview: {
      author: 'مدير عمليات الجودة',
      authorEn: 'Quality Operations Manager',
      role: 'قسم تقييم السيارات - عزل كور',
      roleEn: 'Car Assessment Dept - AzelCore',
      rating: 9.7,
      text: 'استلم سيارتك من الوكالة بلمعة المصنع دون أي إضافات "تجارية". استثمارك في مركز تظليل متخصص يوفر لك ضمانات حقيقية وأداء حراري مثبت، ويجنبك مشاكل فك وتركيب ديكورات السيارة العشوائي.',
      textEn: 'Receive your car from the dealership with factory shine, without any "commercial" add-ons. Investing in a specialized tinting center provides real warranties, proven thermal performance, and avoids random interior dismantling issues.'
    },
    warning: 'لا تنخدع بعبارة "تظليل الوكالة الأصلي"، فمصانع السيارات الكبرى (مثل تويوتا وهيونداي) لا تمتلك مصانع لأفلام التظليل.',
    warningEn: 'Do not be fooled by the phrase "Original Dealership Tint," as major car manufacturers (like Toyota and Hyundai) do not own tint film factories.',
    cta: 'تعرف على الفرق بنفسك واحجز موعداً لفحص سيارتك الجديدة مجاناً',
    ctaEn: 'See the difference yourself and book a free inspection for your new car'
  }
};

export default article;
