import type { Metadata, Viewport } from 'next';
import { ibmPlexArabic, inter } from '@/lib/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SITE_NAME, SITE_NAME_EN, SITE_URL, VAT_ID, PHONE, OWNER_NAME, OWNER_TITLE } from '@/lib/constants';
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
    images: [{ url: '/images/og-cover.webp', width: 1200, height: 630, alt: 'عزل كور — تظليل وعزل حراري جدة' }],
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
  name: SITE_NAME,
  alternateName: SITE_NAME_EN,
  url: SITE_URL,
  logo: `${SITE_URL}/images/azelcore-logo.webp`,
  foundingDate: '2024',
  taxID: VAT_ID,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'جدة',
    addressRegion: 'منطقة مكة المكرمة',
    addressCountry: 'SA',
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexArabic.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main id="main-content" style={{ paddingTop: 'var(--header-height)' }}>
            {children}
          </main>
          <Footer />
          {/* Sticky WhatsApp FAB */}
          <a
            href="https://wa.me/966564612017"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل عبر واتساب"
            style={{
              position: 'fixed',
              bottom: '24px',
              left: '24px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'hsl(142, 70%, 40%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 900,
              boxShadow: '0 4px 20px hsla(142, 70%, 40%, 0.4)',
              transition: 'transform 0.2s ease',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.16 1.6 5.972L.052 23.65a.5.5 0 00.606.606l5.678-1.548A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
