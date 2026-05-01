import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import JohnsonSection from '@/components/sections/JohnsonSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TrustSection from '@/components/sections/TrustSection';
import CTASection from '@/components/sections/CTASection';
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
  image: `${SITE_URL}/images/og-cover.webp`,
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
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <JohnsonSection />
      <ComparisonSection />
      <ProcessSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
