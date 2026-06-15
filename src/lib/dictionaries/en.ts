// ═══ AzelCore.com — English Dictionary (en) ═══
// Full English translations for every UI string
// Mirrors the structure of ar.ts exactly

import type { Dictionary } from './ar';

export const en: Dictionary = {
  // ─── Site-wide ───
  site: {
    name: 'عزل كور',
    nameEn: 'AzelCore',
    description: 'Car window tinting & building glass insulation in Jeddah — Authorized Johnson & 3M dealer. Nano-ceramic films blocking 97% of heat with vehicle-lifetime warranty.',
    address: 'King Fahd Road, Al-Zahra District, Jeddah 23425, Kingdom of Saudi Arabia',
    workingHours: 'Saturday – Thursday: 8:00 AM – 10:00 PM',
    whatsappMessage: 'Hello, I would like to inquire about your insulation and tinting services',
    currency: 'SAR',
    currencyCode: 'SAR',
  },

  // ─── Navigation ───
  nav: {
    home: 'Home',
    carInsulation: 'Car Tinting',
    buildingInsulation: 'Building Insulation',
    calculator: 'Cost Calculator',
    johnson: 'Johnson ⭐',
    threeMDealer: '3M ⭐',
    gallery: 'Our Work',
    blog: 'Blog',
    contact: 'Contact Us',
    about: 'About Us',
    faq: 'FAQ',
  },

  // ─── Trust Stats ───
  stats: {
    carsTinted: 'Cars Tinted',
    warranty: 'Years Warranty',
    irRejection: 'Infrared Rejection',
    rating: 'Customer Rating',
  },

  // ─── Header ───
  header: {
    cta: 'Book Now',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    ariaNavigation: 'Main navigation',
  },

  // ─── Footer ───
  footer: {
    services: 'Our Services',
    company: 'Company',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    allRightsReserved: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    taxInvoice: 'Certified Tax Invoice',
    registeredBusiness: 'Registered with Ministry of Commerce',
  },

  // ─── Language Switcher ───
  langSwitcher: {
    label: 'Language',
    current: 'English',
    switchTo: 'العربية',
  },

  // ─── Hero Section ───
  hero: {
    badge: 'Authorized Johnson & 3M Dealer in Jeddah',
    title: 'Car Window Tinting & Building Insulation',
    titleHighlight: 'with Premium American Technology',
    subtitle: 'Nano-ceramic films blocking 97% of heat — vehicle-lifetime warranty. Jeddah\'s thermal insulation experts since 2024.',
    ctaPrimary: 'Book Your Appointment',
    ctaSecondary: 'View Our Work',
    trustItem1: 'Authorized Dealer',
    trustItem2: 'Official Warranty',
    trustItem3: '780+ Cars',
  },

  // ─── Services Section ───
  services: {
    overline: 'Our Services',
    title: 'Comprehensive Insulation Solutions for Every Need',
    subtitle: 'From car tinting with cutting-edge American technology to building facade insulation — complete thermal protection from Saudi Arabia\'s heat.',
    learnMore: 'Learn more →',
    ariaLabel: 'Our Services',
    card1: {
      title: 'Car Tinting Jeddah — Nano Ceramic',
      desc: 'American nano-ceramic films blocking 97% of heat with vehicle-lifetime warranty. Fully compliant with Saudi traffic regulations.',
      features: ['97% IR Rejection', 'Signal-Friendly', 'Lifetime Warranty'],
    },
    card2: {
      title: 'Building Glass Insulation Jeddah',
      desc: 'Advanced thermal insulation solutions for commercial and residential building facades — save up to 40% on electricity bills.',
      features: ['40% Energy Savings', '99% UV Protection', '15-Year Warranty'],
    },
    card3: {
      title: 'Authorized Johnson Dealer',
      desc: 'Authorized Johnson dealer — 5 American product lines. Authorized 3M dealer — Crystalline with 200+ nano layers.',
      features: ['5 Product Lines', 'Lifetime Warranty', 'CST™ Technology'],
    },
    card4: {
      title: 'Car Thermal Insulation in Jeddah',
      desc: 'Comprehensive thermal solutions for cars and buildings — real FLIR camera tests proving insulation efficiency.',
      features: ['FLIR Testing', '47% Reduction', 'Real Comparison'],
    },
  },

  // ─── CTA Section ───
  cta: {
    ariaLabel: 'Book Now',
    title: 'Ready to protect your car from',
    titleHighlight: 'Jeddah\'s heat',
    subtitle: 'Contact us now for a free consultation + instant price quote. Original manufacturer warranty.',
    whatsappBtn: 'Chat on WhatsApp',
    callBtn: '📞 Call Now',
    hours: '⏰ Saturday – Thursday: 8:00 AM – 10:00 PM',
  },

  // ─── YMYL Warning ───
  ymyl: {
    ariaLabel: 'Important Consumer Warning',
    title: 'Beware the trap of',
    titleHighlight: '"Full tint for 200 SAR"',
    intro: 'In the Saudi market full of options, cheap "nano film" offers are everywhere. These counterfeit commercial films are not only a waste of money, but a',
    introStrong: 'real danger',
    introEnd: 'to your health and car interior.',
    bullet1: 'Turns purple or fades within just 3 months.',
    bullet2: 'Fake insulation: allows 80% of infrared (actual heat) to pass through.',
    bullet3: 'Health hazard: doesn\'t block UV rays that cause skin burns.',
    bullet4: 'Causes dashboard cracking and interior damage due to heat buildup.',
    solutionTitle: 'The Certified Technical Solution (AzelCore)',
    solutionText: 'We are authorized dealers for Johnson Window Films and 3M USA. We use FLIR thermal imaging cameras to prove up to 97% infrared rejection, with a documented vehicle-lifetime warranty covering discoloration and peeling.',
  },

  // ─── Pricing Section ───
  pricing: {
    ariaLabel: 'Tinting Prices',
    overline: 'Transparent Pricing',
    title: 'Car Tinting Prices in Jeddah',
    subtitle: 'No hidden fees — price includes installation + warranty + tax invoice.',
    mostPopular: '⭐ Most Popular',
    sedan: 'Sedan',
    suv: 'SUV / Large',
    warranty: '🛡️ Warranty',
    bookNow: 'Book Now',
    addonsTitle: 'Additional Services',
    note: '* Prices are approximate and vary based on car size and film type.',
    noteLink: 'Contact us for an exact quote →',
  },

  // ─── Cost Calculator ───
  calculator: {
    step1: '1. Car Size',
    step2: '2. Thermal Insulation Type',
    step3: '3. Add-ons (optional)',
    calculating: 'Processing and calculating price...',
    calculate: 'Calculate Estimated Cost',
    resultTitle: 'Estimated Cost',
    disclaimer: '* This is an initial estimate. May vary based on actual model and glass condition.',
    copied: '✅ Price Copied',
    copy: '📋 Copy Quote',
    whatsappBook: '📱 Book via WhatsApp',
    clipboardText: 'AzelCore - Initial quote: from',
    whatsappMsg: 'Hello AzelCore, I used the calculator on your website and here is my initial quote:',
    whatsappMsgSize: '- Car size:',
    whatsappMsgFilm: '- Film type:',
    whatsappMsgPrice: '- Estimated price:',
    whatsappMsgCta: 'I would like to book an appointment to confirm the price.',
    carSizes: {
      sedan: 'Sedan (Small/Medium)',
      suv: 'SUV (2-row)',
      suvLarge: 'Family SUV (3-row)',
    },
    filmTypes: {
      carbon: 'Carbon Film (Economy)',
      renegade: 'Johnson Renegade (Classic)',
      ceramicBasic: 'Nano-Ceramic Johnson Marathon',
      ceramicJohnson: 'Johnson Supreme IR ⭐',
      ceramic3m: '3M Crystalline ⭐ (200+ nano layers)',
    },
    addons: {
      sunroof: 'Standard Sunroof',
      panorama: 'Panoramic Roof',
      saltProtect: 'Salt Protection Layer (for coastal areas)',
    },
  },

  // ─── Price Reveal ───
  priceReveal: {
    label: 'Reveal Price',
    ariaLabel: 'Click to see price',
  },

  // ─── WhatsApp Float ───
  whatsappFloat: {
    ariaLabel: 'Chat on WhatsApp',
    tooltip: 'Need help?',
  },

  // ─── Geo Banner ───
  geoBanner: {
    title: 'Special Offer for Jeddah Residents',
    text: '15% off nano-ceramic tinting for a limited time',
    close: 'Close',
  },

  // ─── Back to Top ───
  backToTop: {
    ariaLabel: 'Back to top',
  },

  // ─── Not Found (404) ───
  notFound: {
    code: '404',
    title: 'Page Not Found',
    description: 'Sorry, the page you\'re looking for doesn\'t exist or has been moved. You can return to the homepage or contact us directly.',
    goHome: 'Go to Homepage',
    whatsapp: 'Chat on WhatsApp',
    links: {
      carTinting: 'Car Tinting',
      buildingInsulation: 'Building Insulation',
      gallery: 'Gallery',
      blog: 'Blog',
      faq: 'FAQ',
    },
  },

  // ─── SEO Components ───
  seo: {
    breadcrumbHome: 'Home',
    authorProfile: {
      badgeText: 'Technically Reviewed Content',
      preparedBy: '✍️ Prepared by:',
      editorialTeam: 'AzelCore Editorial Team',
      technicalReview: '🔍 Technical Review:',
      lastReview: 'Last reviewed:',
      ariaLabel: 'Expert Review Box',
    },
    officialPartnerBar: {
      defaultTitle: 'Our References & Accredited Standards',
      ariaLabel: 'Government References & Standards',
    },
    serviceSummary: {
      label: 'Service Summary',
      ariaLabel: 'Service Summary',
    },
    serviceDisclaimer: {
      ariaLabel: 'Safety Warning',
    },
    certifications: {
      ariaLabel: 'Verification & Certification Badges',
      grantedByPrefix: 'Certified by:',
    },
    siloNav: {
      ariaLabel: 'Related Pages',
    },
  },

  // ─── Common ───
  common: {
    learnMore: 'Learn More',
    viewAll: 'View All',
    readMore: 'Read More',
    bookNow: 'Book Now',
    contactUs: 'Contact Us',
    callNow: 'Call Now',
    whatsapp: 'WhatsApp',
    price: 'Price',
    free: 'Free',
    close: 'Close',
    share: 'Share',
    loading: 'Loading...',
  },

  // ─── Johnson Section ───
  johnson: {
    ariaLabel: 'Johnson Window Films',
    dealerBadge: 'Authorized Johnson Dealer',
    title: 'Films by',
    titleBrand: 'Johnson Window Films',
    subtitle: '5 American product lines — from the flagship Supreme IR with 97% IR rejection to the economical Marathon. Available exclusively through authorized dealers.',
    irLabel: 'IR Block',
    usps: [
      { icon: '🇺🇸', text: 'American company since 1961' },
      { icon: '🔬', text: 'CST™ scratch-resistant technology' },
      { icon: '📡', text: 'Signal-friendly' },
      { icon: '🛡️', text: 'Vehicle-lifetime warranty' },
      { icon: '🌡️', text: '97% IR rejection' },
      { icon: '✅', text: 'AzelCore — Official Dealer' },
    ],
    ctaBtn: '← Explore all Johnson products',
    products: [
      { name: 'Supreme IR', nameLocal: 'Supreme IR', tech: 'Nano-Ceramic', ir: '97%', tser: '72%', warranty: 'Lifetime', tier: 'flagship' },
      { name: 'InsulatIR', nameLocal: 'InsulatIR', tech: 'Nano-Ceramic', ir: '92%', tser: '65%', warranty: 'Lifetime', tier: 'premium' },
      { name: 'Marathon', nameLocal: 'Marathon', tech: 'Hybrid', ir: '86%', tser: '60%', warranty: '5 Years', tier: 'value' },
      { name: 'Ray Guard', nameLocal: 'Ray Guard', tech: 'Carbon Nano', ir: '70%', tser: '55%', warranty: '5 Years', tier: 'economy' },
    ],
  },

  // ─── Process Section ───
  process: {
    ariaLabel: 'How We Work',
    overline: 'How We Work',
    title: '4 Steps to Perfect Tinting',
    steps: [
      { number: '01', title: 'Consultation', desc: 'We analyze your needs and recommend the best film type for your car or building and budget.', icon: '💬' },
      { number: '02', title: 'Preparation', desc: 'Deep glass cleaning and precision computer-cut for seamless, bubble-free coverage.', icon: '🔧' },
      { number: '03', title: 'Installation', desc: 'Professional installation in a clean environment with specialized tools — no dust, no bubbles.', icon: '🎯' },
      { number: '04', title: 'Inspection & Warranty', desc: 'Full inspection + official warranty certificate + care instructions for maximum lifespan.', icon: '🛡️' },
    ],
  },

  // ─── Testimonials Section ───
  testimonials: {
    ariaLabel: 'Customer Reviews',
    overline: 'Our Clients Speak',
    title: 'Real Trust from Jeddah Residents',
    subtitle: 'Real reviews from served clients — numbers don\'t lie.',
    reviewOf: 'Review by',
    avgRating: 'Average Rating',
    realReviews: 'Real Reviews',
    satisfaction: 'Satisfaction Rate',
    clientsServed: 'Clients Served',
  },

  // ─── Trust Section ───
  trust: {
    ariaLabel: 'Why Trust Us',
    overline: 'Why AzelCore',
    title: 'Documented Trust — Not Just Words',
    subtitle: 'Registered and licensed Saudi business — official agency from Johnson & 3M USA.',
    expertQuote: 'We use only original films directly from the manufacturer — we don\'t accept any counterfeit or unknown-origin product. Every film roll has a traceable serial number.',
    credentials: [
      { icon: '📋', title: 'Registered Business', value: 'Ministry of Commerce', desc: 'Officially registered Saudi business with the Ministry of Commerce' },
      { icon: '🧾', title: 'Tax Registered', value: 'ZATCA', desc: 'Fully compliant with Saudi tax regulations' },
      { icon: '🏆', title: 'Johnson Authorized Dealer', value: 'Johnson Authorized Dealer', desc: 'Official dealer for Johnson American window films in Jeddah' },
      { icon: '🔴', title: '3M Authorized Dealer', value: '3M Authorized Dealer', desc: 'Official dealer for 3M films — Crystalline + Ceramic IR' },
      { icon: '🛡️', title: 'Written Warranty', value: 'Up to Vehicle Lifetime', desc: 'Official warranty certificate with every installation' },
    ],
  },

  // ─── Comparison Section ───
  comparison: {
    ariaLabel: 'Tint Types Comparison',
    overline: 'Compare Types',
    title: 'Compare by Numbers Before You Choose',
    subtitle: 'Real numbers from official datasheets — don\'t rely on salesmen\'s words. All numbers are verifiable.',
    headers: ['Film Type', 'IR Block', 'UV Block', 'TSER', 'Warranty', 'Price (Sedan)'],
    footnote: '* TSER = Total Solar Energy Rejected — the higher, the better the insulation. Numbers from official datasheets on 6mm glass.',
    rows: [
      { cells: ['Johnson Supreme IR ⭐', '97%', '99%', '72%', 'Lifetime', '1,800-3,200 SAR'], highlight: true },
      { cells: ['3M Crystalline ⭐', '97%', '99.9%', '90%', 'Lifetime', '2,000-3,500 SAR'], highlight: true },
      { cells: ['XPEL PRIME XR+', '98%', '99%', '96%', '10 Years', '2,500-4,000 SAR'], highlight: false },
      { cells: ['LLumar CTX', '95%', '99%', '88%', '7 Years', '1,200-2,500 SAR'], highlight: false },
      { cells: ['Johnson InsulatIR', '92%', '99%', '65%', 'Lifetime', '1,200-2,500 SAR'], highlight: true },
      { cells: ['Johnson Marathon', '86%', '99%', '60%', '5 Years', '600-1,200 SAR'], highlight: true },
      { cells: ['Standard Carbon', '55%', '99%', '65%', '5 Years', '600-1,200 SAR'], highlight: false },
      { cells: ['Dyed (Basic)', '30%', '70%', '40%', '1 Year', '300-600 SAR'], highlight: false },
    ],
  },

  // ─── FAQ Section (homepage) ───
  faqSection: {
    ariaLabel: 'Frequently Asked Questions',
    overline: 'FAQ',
    title: 'Everything You Need to Know',
    seeAll: 'View all questions',
  },

  // ─── Live Reviews ───
  liveReviews: {
    ariaLabel: 'Customer Reviews',
    overlineGoogle: '📍 Google Maps Reviews',
    overlineFallback: '⭐ Customer Reviews',
    title: 'What Our Clients Say',
    basedOn: 'Based on',
    reviewUnit: 'reviews',
  },

  // ─── Weather Banner ───
  weatherBanner: {
    extreme: { prefix: 'Extreme Heat Alert', message: 'Deadly heat for cheap tint. Your car needs nano-ceramic now.' },
    high: { prefix: 'High Temperature Alert', message: 'Temperature exceeds safe limits — standard tint won\'t protect you.' },
    moderate: { prefix: 'Moderate-High Temperature', message: 'We recommend protecting your car before peak season.' },
    jeddahNow: 'Jeddah now',
    cta: '← Protect your car now',
  },

  // ─── Thermal Slider ───
  thermalSlider: {
    overline: 'Interactive Thermal Test',
    title: 'See the Difference — Before & After Tinting',
    subtitle: 'Drag the slider to compare cabin temperature before and after installing nano-ceramic film.',
    ariaLabel: 'Thermal comparison before and after tinting',
    ariaValueText: 'Temperature:',
    before: '🔥 Before Tinting',
    beforeDesc: 'Suffocating heat — cabin like an oven',
    after: '❄️ After Tinting',
    afterDesc: 'Cool and comfortable cabin',
    currentTemp: '🌡️ Current Temperature:',
    reduction: '↓ Reduced by',
    hint: '👆 Drag the slider left and right to see the difference',
  },

  // ─── Corporate ROI Calculator ───
  roiCalculator: {
    title: '📊 Energy Savings Calculator — Saudi Building Code (SBC)',
    subtitle: 'Calculate your ROI for facade insulation based on',
    glassArea: 'Glass Facade Area (m²)',
    unit: 'm²',
    monthlyBill: 'Monthly Electricity Bill (SAR)',
    currency: 'SAR',
    floors: 'Number of Floors',
    annualSavings: 'Expected Annual Savings',
    projectCost: 'Estimated Project Cost',
    paybackPeriod: 'Payback Period',
    paybackUnit: 'months',
    tenYearNet: 'Net Savings (10 Years)',
    disclaimer: '* Estimates based on SEC commercial tariff',
    disclaimerSuffix: 'and ASHRAE 90.1 standards. Actual results vary based on glass type and facade orientation.',
  },

  // ─── Cross-Sell Cards ───
  crossSell: {
    ariaLabel: 'Complementary Services',
    sectionTitle: 'Complementary',
    sectionTitleHighlight: 'Services',
    sectionTitleSuffix: 'you may need',
    services: {
      'car-insulation-jeddah': [
        { icon: '🏢', title: 'Building Glass Insulation', description: 'Tinted your car? Your home and office windows need the same protection — save 35-45% on electricity bills.', href: '/building-glass-insulation', linkText: 'Learn about building insulation' },
        { icon: '🇺🇸', title: 'Johnson American Films', description: 'The top choice for luxury vehicles — Supreme IR technology with vehicle-lifetime warranty from the authorized dealer.', href: '/johnson-authorized-dealer', linkText: 'Explore Johnson' },
        { icon: '🔴', title: '3M — Crystalline', description: '200+ nano layers — highest TSER in the world at 90%. Nearly transparent and traffic-law compliant.', href: '/3m-authorized-dealer', linkText: 'Explore 3M' },
      ],
      'building-glass-insulation': [
        { icon: '🚗', title: 'Car Tinting Jeddah', description: 'Insulated your building? Your car needs the same protection — nano-ceramic blocking 97% of infrared rays.', href: '/car-insulation-jeddah', linkText: 'Learn about car tinting' },
        { icon: '🇺🇸', title: 'Johnson Building Films', description: 'NightScape and Sunlight lines designed for commercial and residential facades with American technology.', href: '/johnson-authorized-dealer', linkText: 'Explore Johnson' },
        { icon: '🔴', title: '3M Commercial Building Films', description: '3M produces specialized architectural films with superior thermal rejection — perfect for commercial towers and glass facades.', href: '/3m-authorized-dealer', linkText: 'Explore 3M' },
      ],
      'johnson-authorized-dealer': [
        { icon: '🚗', title: 'Car Tinting Jeddah', description: 'Professional thermal insulation with nano-ceramic films — cabin temperature drops from 72°C to 38°C.', href: '/car-insulation-jeddah', linkText: 'Car tinting service' },
        { icon: '🔴', title: '3M — Strong Alternative', description: '3M Crystalline with 200+ nano layers — TSER 90% and UV rejection 99.9%. Also an authorized dealer.', href: '/3m-authorized-dealer', linkText: 'Compare with 3M' },
      ],
      '3m-authorized-dealer': [
        { icon: '🚗', title: 'Car Tinting Jeddah', description: 'Professional thermal insulation with nano-ceramic films — cabin temperature drops from 72°C to 38°C.', href: '/car-insulation-jeddah', linkText: 'Car tinting service' },
        { icon: '🇺🇸', title: 'Johnson — Strong Alternative', description: 'Johnson Supreme IR with 97% IR rejection. CST™ scratch-resistant technology. Also an authorized dealer.', href: '/johnson-authorized-dealer', linkText: 'Compare with Johnson' },
      ],
    },
  },
};
