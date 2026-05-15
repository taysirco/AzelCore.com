import type { ArticleModule } from './types';

const article: ArticleModule = {
  ogImage: 'computer-cut-ppf-jeddah.webp',
  serviceLinks: [
    { href: '/paint-protection-film-jeddah', text: 'تركيب PPF بالقص الآلي (الكمبيوتر) بدون تفكيك أجزاء السيارة', textEn: 'Computer-Cut PPF Installation Without Dismantling Car Parts' }
  ],
  content: {
    intro: 'عند قرارك بتركيب حماية PPF لسيارتك، فإن السؤال الأهم لا ينبغي أن يكون "ما هو نوع الفيلم؟" فحسب، بل "كيف سيتم قص وتركيب هذا الفيلم؟". الطريقة التقليدية قد تكلفك طلاء سيارتك الأصلي.',
    introEn: 'When deciding to install PPF on your car, the most important question shouldn\'t just be "What is the film type?", but rather "How will this film be cut and installed?". The traditional method might cost you your original paint.',
    quickAnswer: 'القص اليدوي يتطلب تمرير "مشرط حاد" على هيكل سيارتك لقص الفيلم الزائد، مما يؤدي لخدش الطلاء الأصلي (حتى وإن كان الفني محترفاً). القص الآلي بالكمبيوتر (Computer-Cut) يجهز الفيلم مسبقاً بمقاسات سيارتك بالملليمتر، مما يمنع استخدام أي شفرات حادة على الهيكل نهائياً.',
    quickAnswerEn: 'Manual cutting requires running a "sharp blade" over your car\'s body to trim excess film, which scratches the original paint (even if the technician is a pro). Computer-Cut prepares the film perfectly to your car\'s millimeter specs in advance, preventing any sharp blades from touching the body.',
    sections: [
      {
        heading: 'الكارثة المخفية: خدوش المشرط تحت الـ PPF',
        headingEn: 'The Hidden Disaster: Blade Scratches Under PPF',
        body: 'المشكلة الأكبر في القص اليدوي هي أنك لن ترى الضرر فوراً! خدوش المشرط تكون مغطاة بفيلم الحماية. بعد 5 سنوات، عند إزالة الفيلم لتجديده، ستصدم بوجود خطوط مقطوعة في طلاء السيارة بالكامل تتطلب إعادة رش وفقدان قيمة السيارة.',
        bodyEn: 'The biggest problem with manual cutting is you won\'t see the damage immediately! The blade scratches are hidden under the PPF. After 5 years, when removing the film to replace it, you will be shocked to find cut lines all over the car\'s paint requiring a repaint and tanking its value.'
      },
      {
        heading: 'تفكيك أجزاء السيارة (الصدام والأنوار)',
        headingEn: 'Dismantling Car Parts (Bumper and Lights)',
        body: 'في التركيب اليدوي، يضطر الفنيون غالباً لفك مقابض الأبواب، الأنوار، والصدامات لثني الفيلم. هذا التفكيك في سيارة "وكالة" يلغي ضمان الوكيل ويتسبب في أصوات "صرصرة" لاحقاً. تقنية القص الآلي تتضمن زوائد محسوبة بدقة (Wrapped Edges) ليتم ثنيها دون فك أي مسمار.',
        bodyEn: 'In manual installation, techs often have to remove door handles, lights, and bumpers to tuck the film. Dismantling a "brand new" car voids the dealership warranty and causes rattles later. Computer-cut tech includes precisely calculated wrapped edges to tuck without unscrewing a single bolt.'
      },
      {
        heading: 'قواعد بيانات دقيقة لكل سيارة',
        headingEn: 'Precise Databases for Every Car',
        body: 'نستخدم في عزل كور برمجيات تمتلك خرائط ثلاثية الأبعاد لكل سيارة (DAP / Core). يتم طباعة الفيلم وقصه عبر بلوتر (Plotter) ليتطابق مع انحناءات الصدام بدقة تصل إلى 0.1 ملم.',
        bodyEn: 'At AzelCore, we use software with 3D templates for every car (DAP / Core). The film is printed and cut via a Plotter to match bumper curves with an accuracy of up to 0.1 mm.'
      }
    ],
    table: {
      headers: ['المعيار', 'القص اليدوي (بالمشرط)', 'القص الآلي (بالكمبيوتر)'],
      headersEn: ['Criterion', 'Manual Cut (Blade)', 'Computer-Cut (Plotter)'],
      rows: [
        ['خطر خدش الطلاء الأصلي', 'مرتفع جداً (حتمي تقريباً)', 'صفر (لا تستخدم شفرات على الهيكل)'],
        ['فك أجزاء السيارة', 'مطلوب غالباً', 'غير مطلوب إطلاقاً'],
        ['دقة الحواف وانطباق الفيلم', 'تعتمد على مزاج وخبرة الفني', 'دقة برمجية 100٪'],
        ['إلغاء ضمان الوكالة', 'محتمل (بسبب فك الديكورات)', 'آمن تماماً']
      ],
      rowsEn: [
        ['Risk to original paint', 'Very High (almost inevitable)', 'Zero (no blades on body)'],
        ['Dismantling parts', 'Often required', 'Never required'],
        ['Edge precision', 'Depends on tech\'s mood', '100% Software Precision'],
        ['Voiding Dealership Warranty', 'Possible (due to dismantling)', '100% Safe']
      ]
    },
    expertReview: {
      author: 'مهندس جودة التركيب',
      authorEn: 'Installation Quality Engineer',
      role: 'قسم حماية الطلاء - عزل كور',
      roleEn: 'Paint Protection Dept - AzelCore',
      rating: 10,
      text: 'قاعدة ذهبية: لا تسمح لأي شخص بالاقتراب من سيارتك الجديدة بمشرط حاد. تقنية القص الآلي هي المعيار العالمي الوحيد المقبول لحماية السيارات الفاخرة.',
      textEn: 'Golden Rule: Never let anyone approach your new car with a sharp razor blade. Computer-cut tech is the only globally acceptable standard for protecting luxury cars.'
    },
    warning: 'البعض يدعي القص الآلي ولكنه يقوم بتعديلات يدوية بالمشرط أثناء التركيب لتصحيح أخطائه. تأكد من أن المركز يمتلك "بلوتر" متقدم ويلتزم بتركيب نظيف بنسبة 100٪.',
    warningEn: 'Some claim computer-cut but make manual blade adjustments during install to fix their errors. Ensure the center has an advanced plotter and commits to a 100% blade-free install.',
    cta: 'تعرف على تقنية القص الآلي لدينا لحماية سيارتك باحترافية وأمان',
    ctaEn: 'Discover our computer-cut technology to protect your car professionally and safely'
  }
};

export default article;
