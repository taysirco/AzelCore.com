import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import JohnsonSection from '@/components/sections/JohnsonSection';
import LiveReviews from '@/components/sections/LiveReviews';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SITE_URL, GEO, ADDRESS_STRUCTURED, ADDRESS_STRUCTURED_EN, CRN, VAT_ID, PHONE, getWhatsAppLink } from '@/lib/constants';
import { type Locale } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';

import YMYLWarning from '@/components/sections/YMYLWarning';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import TrustSection from '@/components/sections/TrustSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: getAlternates(locale as Locale, '/'),
  };
}

function getHomeGraphSchema(locale: Locale) {
  const isAr = locale === 'ar';
  const addressData = isAr ? ADDRESS_STRUCTURED : ADDRESS_STRUCTURED_EN;
  const whatsappLink = getWhatsAppLink(locale);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoRepair',
        '@id': `${SITE_URL}/#localbusiness`,
        name: isAr ? 'عزل كور — تظليل سيارات جدة' : 'AzelCore — Car Tinting Jeddah',
        alternateName: isAr ? 'AzelCore' : 'عزل كور',
        legalName: 'مؤسسة عزل كور للتجارة',
        url: `${SITE_URL}/${locale}`,
        telephone: PHONE,
        image: `${SITE_URL}/images/og-cover.webp`,
        priceRange: '$$',
        address: { '@type': 'PostalAddress', ...addressData },
        geo: { '@type': 'GeoCoordinates', latitude: GEO.lat.toString(), longitude: GEO.lng.toString() },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '08:00',
          closes: '22:00',
        },
        areaServed: { '@type': 'City', name: isAr ? 'جدة' : 'Jeddah', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
        paymentAccepted: 'Cash, Credit Card, Apple Pay, Mada',
        taxID: VAT_ID,
        identifier: { '@type': 'PropertyValue', name: 'Commercial Registration (CR)', value: CRN },
        sameAs: ['https://www.instagram.com/azelcore'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: isAr ? 'خدمات العزل والتظليل' : 'Insulation & Tinting Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isAr ? 'تظليل سيارات نانو سيراميك' : 'Nano-Ceramic Car Window Tinting' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isAr ? 'عزل زجاج مباني' : 'Building Glass Insulation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isAr ? 'عازل جونسون Supreme IR' : 'Johnson Supreme IR Films' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isAr ? 'عازل 3M Crystalline' : '3M Crystalline Films' } },
          ],
        },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '127', bestRating: '5' },
        potentialAction: {
          '@type': 'ReserveAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: whatsappLink,
            actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
          },
          result: { '@type': 'Reservation', name: isAr ? 'حجز موعد تظليل أو عزل' : 'Book Tinting or Insulation Appointment' },
        },
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'ItemList',
        name: isAr ? 'خدمات عزل كور' : 'AzelCore Services',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: 4,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isAr ? 'تظليل سيارات جدة — نانو سيراميك' : 'Car Tinting Jeddah — Nano-Ceramic', url: `${SITE_URL}/${locale}/car-insulation-jeddah` },
          { '@type': 'ListItem', position: 2, name: isAr ? 'عزل زجاج واجهات المباني' : 'Building Facade Glass Insulation', url: `${SITE_URL}/${locale}/building-glass-insulation` },
          { '@type': 'ListItem', position: 3, name: isAr ? 'جونسون وندو فيلم — الوكيل المعتمد' : 'Johnson Window Films — Authorized Dealer', url: `${SITE_URL}/${locale}/johnson-authorized-dealer` },
          { '@type': 'ListItem', position: 4, name: isAr ? '3M Window Films — الوكيل المعتمد' : '3M Window Films — Authorized Dealer', url: `${SITE_URL}/${locale}/3m-authorized-dealer` },
        ],
      },
      {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#voice-answer-home-1', '#voice-answer-home-2', '#voice-answer-home-3'],
      },
    ],
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  // Voice search answers based on locale
  const voiceAnswers = locale === 'ar' ? {
    v1: 'أفضل محل تظليل سيارات في جدة هو عزل كور. وكيل جونسون و 3M المعتمد. أفلام نانو سيراميك تحجب 97% حرارة مع ضمان يمتد لعمر السيارة.',
    v2: 'أسعار تظليل السيارات في جدة تبدأ من 200 ريال للزجاج الأمامي وتوصل 3200 ريال تظليل كامل نانو سيراميك جونسون. ضمان مكتوب.',
    v3: 'عزل كور يقدم تظليل سيارات وعزل مباني في جدة. وكيل جونسون و 3M. أفلام أمريكية لا تحجب إشارة الجوال. تقييم 4.9 من أكثر من 127 عميل.',
  } : {
    v1: 'The best car tinting shop in Jeddah is AzelCore. Authorized Johnson and 3M dealer. Nano-ceramic films blocking 97% of heat with vehicle-lifetime warranty.',
    v2: 'Car tinting prices in Jeddah start from 200 SAR for windshield and up to 3,200 SAR for full Johnson nano-ceramic tint. Written warranty included.',
    v3: 'AzelCore provides car tinting and building insulation in Jeddah. Authorized Johnson and 3M dealer. American films that don\'t block phone signal. 4.9 rating from 127+ customers.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getHomeGraphSchema(locale)) }}
      />
      <HeroSection locale={locale} />
      <ScrollReveal><StatsSection locale={locale} /></ScrollReveal>
      <ScrollReveal delay={100}><ServicesSection locale={locale} /></ScrollReveal>
      <ScrollReveal delay={50}><JohnsonSection locale={locale} /></ScrollReveal>
      <ScrollReveal><YMYLWarning locale={locale} /></ScrollReveal>
      <ScrollReveal><ComparisonSection locale={locale} /></ScrollReveal>
      <ScrollReveal delay={100}><PricingSection locale={locale} /></ScrollReveal>
      <ScrollReveal><ProcessSection locale={locale} /></ScrollReveal>
      <ScrollReveal delay={50}><TestimonialsSection locale={locale} /></ScrollReveal>
      <LiveReviews locale={locale} />
      <ScrollReveal><TrustSection locale={locale} /></ScrollReveal>
      <ScrollReveal><FAQSection locale={locale} /></ScrollReveal>
      <ScrollReveal direction="fade"><CTASection locale={locale} /></ScrollReveal>
      {/* ═══ Voice Search Speakable Answers ═══ */}
      <div id="voice-answer-home-1" style={{ display: 'none' }} aria-hidden="true">
        {voiceAnswers.v1}
      </div>
      <div id="voice-answer-home-2" style={{ display: 'none' }} aria-hidden="true">
        {voiceAnswers.v2}
      </div>
      <div id="voice-answer-home-3" style={{ display: 'none' }} aria-hidden="true">
        {voiceAnswers.v3}
      </div>
    </>
  );
}
