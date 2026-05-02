import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import JohnsonSection from '@/components/sections/JohnsonSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TrustSection from '@/components/sections/TrustSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import LiveReviews from '@/components/sections/LiveReviews';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SITE_URL, GEO, ADDRESS_STRUCTURED, CRN, VAT_ID, PHONE, WHATSAPP_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

// Unified @graph — LocalBusiness + ServicesItemList
const homeGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'عزل كور — تظليل سيارات جدة',
      alternateName: 'AzelCore',
      legalName: 'مؤسسة عزل كور للتجارة',
      url: SITE_URL,
      telephone: PHONE,
      image: `${SITE_URL}/images/og-cover.png`,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        ...ADDRESS_STRUCTURED,
      },
      geo: { '@type': 'GeoCoordinates', latitude: GEO.lat.toString(), longitude: GEO.lng.toString() },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '22:00',
      },
      areaServed: { '@type': 'City', name: 'جدة', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
      paymentAccepted: 'Cash, Credit Card, Apple Pay, Mada',
      taxID: VAT_ID,
      identifier: {
        '@type': 'PropertyValue',
        name: 'Commercial Registration (CR)',
        value: CRN,
      },

      sameAs: [
        'https://www.instagram.com/azelcore',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات العزل والتظليل',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تظليل سيارات نانو سيراميك' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'عزل زجاج مباني' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'عازل جونسون Supreme IR' } },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '127',
        bestRating: '5',
      },
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: WHATSAPP_LINK,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'حجز موعد تظليل أو عزل',
        },
      },
      // ── Knowledge Graph: Link AutoRepair → Organization ──
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'ItemList',
      name: 'خدمات عزل كور',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'تظليل سيارات جدة — نانو سيراميك', url: `${SITE_URL}/car-insulation-jeddah` },
        { '@type': 'ListItem', position: 2, name: 'عزل زجاج واجهات المباني', url: `${SITE_URL}/building-glass-insulation` },
        { '@type': 'ListItem', position: 3, name: 'جونسون وندو فيلم — الوكيل المعتمد', url: `${SITE_URL}/johnson-authorized-dealer` },
      ],
    },
    // ── SpeakableSpecification — Homepage Voice Search Monopoly ──
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-home-1', '#voice-answer-home-2', '#voice-answer-home-3'],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraphSchema) }}
      />
      <HeroSection />
      <ScrollReveal><StatsSection /></ScrollReveal>
      <ScrollReveal delay={100}><ServicesSection /></ScrollReveal>
      <ScrollReveal delay={50}><JohnsonSection /></ScrollReveal>
      <ScrollReveal><ComparisonSection /></ScrollReveal>
      <ScrollReveal delay={100}><PricingSection /></ScrollReveal>
      <ScrollReveal><ProcessSection /></ScrollReveal>
      <ScrollReveal delay={50}><TestimonialsSection /></ScrollReveal>
      <LiveReviews />
      <ScrollReveal><TrustSection /></ScrollReveal>
      <ScrollReveal><FAQSection /></ScrollReveal>
      <ScrollReveal direction="fade"><CTASection /></ScrollReveal>
      {/* ═══ Voice Search Speakable Answers — Homepage TTS Targets ═══ */}
      <div id="voice-answer-home-1" style={{ display: 'none' }} aria-hidden="true">
        أفضل محل تظليل سيارات في جدة هو عزل كور. وكيل جونسون المعتمد الوحيد. أفلام نانو سيراميك تحجب 97% حرارة مع ضمان 10 سنوات.
      </div>
      <div id="voice-answer-home-2" style={{ display: 'none' }} aria-hidden="true">
        أسعار تظليل السيارات في جدة تبدأ من 200 ريال للزجاج الأمامي وتوصل 3200 ريال تظليل كامل نانو سيراميك جونسون. ضمان مكتوب.
      </div>
      <div id="voice-answer-home-3" style={{ display: 'none' }} aria-hidden="true">
        عزل كور يقدم تظليل سيارات وعزل مباني في جدة. أفلام أمريكية لا تحجب إشارة الجوال. تقييم 4.9 من أكثر من 127 عميل.
      </div>
    </>
  );
}

