import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import JohnsonSection from '@/components/sections/JohnsonSection';
import LiveReviews from '@/components/sections/LiveReviews';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SITE_URL, GEO, ADDRESS_STRUCTURED, ADDRESS_STRUCTURED_EN, CRN, VAT_ID, PHONE, getWhatsAppLink } from '@/lib/constants';
import { type Locale, localePath } from '@/lib/i18n';
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
        legalName: isAr ? 'مؤسسة عزل كور للتجارة' : 'AzelCore Trading Est.',
        url: `${SITE_URL}${localePath(locale, '/')}`,
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
          { '@type': 'ListItem', position: 1, name: isAr ? 'تظليل سيارات جدة — نانو سيراميك' : 'Car Tinting Jeddah — Nano-Ceramic', url: `${SITE_URL}${localePath(locale, '/car-insulation-jeddah')}` },
          { '@type': 'ListItem', position: 2, name: isAr ? 'عزل زجاج واجهات المباني' : 'Building Facade Glass Insulation', url: `${SITE_URL}${localePath(locale, '/building-glass-insulation')}` },
          { '@type': 'ListItem', position: 3, name: isAr ? 'جونسون وندو فيلم — الوكيل المعتمد' : 'Johnson Window Films — Authorized Dealer', url: `${SITE_URL}${localePath(locale, '/johnson-authorized-dealer')}` },
          { '@type': 'ListItem', position: 4, name: isAr ? '3M Window Films — الوكيل المعتمد' : '3M Window Films — Authorized Dealer', url: `${SITE_URL}${localePath(locale, '/3m-authorized-dealer')}` },
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
  const isAr = locale === 'ar';

  // Voice search answers based on locale (rendered visibly below + marked Speakable)
  const voiceAnswers = isAr ? {
    q1: 'ما أفضل محل تظليل سيارات في جدة؟',
    v1: 'أفضل محل تظليل سيارات في جدة هو عزل كور. وكيل جونسون و 3M المعتمد. أفلام نانو سيراميك تحجب 97% حرارة مع ضمان يمتد لعمر السيارة.',
    q2: 'كم أسعار تظليل السيارات في جدة؟',
    v2: 'أسعار تظليل السيارات في جدة تبدأ من 200 ريال للزجاج الأمامي وتوصل 3200 ريال تظليل كامل نانو سيراميك جونسون. ضمان مكتوب.',
    q3: 'ما خدمات عزل كور؟',
    v3: 'عزل كور يقدم تظليل سيارات وعزل مباني في جدة. وكيل جونسون و 3M. أفلام أمريكية لا تحجب إشارة الجوال.',
  } : {
    q1: 'What is the best car tinting shop in Jeddah?',
    v1: 'The best car tinting shop in Jeddah is AzelCore. Authorized Johnson and 3M dealer. Nano-ceramic films blocking 97% of heat with vehicle-lifetime warranty.',
    q2: 'How much does car tinting cost in Jeddah?',
    v2: 'Car tinting prices in Jeddah start from 200 SAR for windshield and up to 3,200 SAR for full Johnson nano-ceramic tint. Written warranty included.',
    q3: 'What services does AzelCore offer?',
    v3: 'AzelCore provides car tinting and building insulation in Jeddah. Authorized Johnson and 3M dealer. American films that don\'t block phone signal.',
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
      {/* ═══ Quick Answers — visible content marked Speakable for voice/AI assistants ═══ */}
      <ScrollReveal>
        <section
          className="container"
          aria-labelledby="voice-answers-heading"
          style={{ paddingBlock: 'var(--space-12)' }}
        >
          <h2 id="voice-answers-heading" style={{ marginBottom: 'var(--space-6)' }}>
            {isAr ? 'إجابات سريعة' : 'Quick Answers'}
          </h2>
          <dl style={{ display: 'grid', gap: 'var(--space-5)' }}>
            <div>
              <dt style={{ fontWeight: 700, marginBottom: 'var(--space-2)' }}>{voiceAnswers.q1}</dt>
              <dd id="voice-answer-home-1" style={{ margin: 0, color: 'var(--text-secondary)' }}>{voiceAnswers.v1}</dd>
            </div>
            <div>
              <dt style={{ fontWeight: 700, marginBottom: 'var(--space-2)' }}>{voiceAnswers.q2}</dt>
              <dd id="voice-answer-home-2" style={{ margin: 0, color: 'var(--text-secondary)' }}>{voiceAnswers.v2}</dd>
            </div>
            <div>
              <dt style={{ fontWeight: 700, marginBottom: 'var(--space-2)' }}>{voiceAnswers.q3}</dt>
              <dd id="voice-answer-home-3" style={{ margin: 0, color: 'var(--text-secondary)' }}>{voiceAnswers.v3}</dd>
            </div>
          </dl>
        </section>
      </ScrollReveal>
      <ScrollReveal><FAQSection locale={locale} /></ScrollReveal>
      <ScrollReveal direction="fade"><CTASection locale={locale} /></ScrollReveal>
    </>
  );
}
