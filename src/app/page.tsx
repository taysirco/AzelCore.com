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
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

// LocalBusiness Schema for home
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'عزل كور — تظليل سيارات جدة',
  alternateName: 'AzelCore',
  url: SITE_URL,
  telephone: '+966564612017',
  image: `${SITE_URL}/images/og-cover.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'جدة',
    addressRegion: 'منطقة مكة المكرمة',
    addressCountry: 'SA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '21.0', longitude: '39.0' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '08:00',
    closes: '22:00',
  },
  areaServed: { '@type': 'City', name: 'جدة' },
  paymentAccepted: 'Cash, Credit Card, Apple Pay, Mada',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'خدمات العزل والتظليل',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تظليل سيارات نانو سيراميك' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'عزل زجاج مباني' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'عازل جونسون Supreme IR' } },
    ],
  },
};

// Services ItemList Schema — Tier 5 (drives SERP carousel)
const servicesListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'خدمات عزل كور',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  numberOfItems: 3,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'تظليل سيارات جدة — نانو سيراميك',
      url: `${SITE_URL}/car-insulation-jeddah`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'عزل زجاج واجهات المباني',
      url: `${SITE_URL}/building-glass-insulation`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'جونسون وندو فيلم — الوكيل المعتمد',
      url: `${SITE_URL}/johnson-authorized-dealer`,
    },
  ],
};

// Speculation Rules — instant prefetch for high-priority pages
const speculationRules = {
  prefetch: [
    {
      source: 'list',
      urls: [
        '/car-insulation-jeddah',
        '/building-glass-insulation',
        '/johnson-authorized-dealer',
        '/blog',
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
      <script
        type="speculationrules"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
      />
      <HeroSection />
      <ScrollReveal><StatsSection /></ScrollReveal>
      <ScrollReveal delay={100}><ServicesSection /></ScrollReveal>
      <ScrollReveal delay={50}><JohnsonSection /></ScrollReveal>
      <ScrollReveal><ComparisonSection /></ScrollReveal>
      <ScrollReveal delay={100}><PricingSection /></ScrollReveal>
      <ScrollReveal><ProcessSection /></ScrollReveal>
      <ScrollReveal delay={50}><TestimonialsSection /></ScrollReveal>
      <ScrollReveal><TrustSection /></ScrollReveal>
      <ScrollReveal><FAQSection /></ScrollReveal>
      <ScrollReveal direction="fade"><CTASection /></ScrollReveal>
    </>
  );
}

