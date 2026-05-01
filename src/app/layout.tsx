import type { Metadata, Viewport } from 'next';
import { ibmPlexArabic, inter } from '@/lib/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SITE_NAME, SITE_NAME_EN, SITE_URL, VAT_ID, PHONE, OWNER_NAME, OWNER_TITLE, GEO, ADDRESS_STRUCTURED } from '@/lib/constants';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import BackToTop from '@/components/ui/BackToTop';
import GeoBanner from '@/components/ui/GeoBanner';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0e17' },
    { media: '(prefers-color-scheme: light)', color: '#f5f7fa' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — تظليل وعزل حراري احترافي في جدة | وكيل جونسون المعتمد`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'عزل كور — وكيل جونسون المعتمد في جدة. تظليل سيارات بأفلام نانو سيراميك أمريكية، عزل زجاج مباني، ضمان 10 سنوات. احجز الآن.',
  keywords: ['تظليل سيارات جدة', 'عزل حراري', 'عازل جونسون', 'نانو سيراميك', 'تظليل مباني', 'عزل زجاج', 'Johnson Window Films'],
  authors: [{ name: OWNER_NAME }],
  creator: SITE_NAME_EN,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — تظليل وعزل حراري احترافي في جدة`,
    description: 'وكيل جونسون المعتمد — أفلام عزل نانو سيراميك أمريكية مع ضمان عمر السيارة',
    images: [{ url: '/images/og-cover.png', width: 1200, height: 630, alt: 'عزل كور — تظليل وعزل حراري جدة' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — تظليل سيارات جدة`,
    description: 'وكيل جونسون المعتمد — حجب 97% من الأشعة تحت الحمراء',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// Organization + LocalBusiness JSON-LD
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_NAME_EN,
  legalName: 'مؤسسة عزل كور للتجارة',
  url: SITE_URL,
  logo: `${SITE_URL}/images/azelcore-logo.png`,
  foundingDate: '2024',
  taxID: VAT_ID,
  address: {
    '@type': 'PostalAddress',
    ...ADDRESS_STRUCTURED,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO.lat,
    longitude: GEO.lng,
  },
  areaServed: { '@type': 'City', name: 'جدة', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    contactType: 'customer service',
    availableLanguage: ['ar', 'en'],
  },
  founder: {
    '@type': 'Person',
    name: OWNER_NAME,
    jobTitle: OWNER_TITLE,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'ar',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/blog?q={search_term}`,
    'query-input': 'required name=search_term',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexArabic.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Speculation Rules API — site-wide instant navigation */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            prefetch: [
              {
                source: 'list',
                urls: [
                  '/car-insulation-jeddah',
                  '/building-glass-insulation',
                  '/johnson-authorized-dealer',
                  '/blog',
                  '/gallery',
                  '/contact',
                ],
              },
            ],
            prerender: [
              {
                source: 'document_rules',
                where: {
                  and: [
                    { href_matches: '/*' },
                    { not: { href_matches: '/api/*' } },
                    { not: { href_matches: '/_next/*' } },
                  ],
                },
                eagerness: 'moderate',
              },
            ],
          }) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main id="main-content" style={{ paddingTop: 'var(--header-height)' }}>
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
          <GeoBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
