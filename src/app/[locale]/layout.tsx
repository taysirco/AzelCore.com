import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { ibmPlexArabic, inter } from '@/lib/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SITE_NAME, SITE_NAME_EN, SITE_URL, VAT_ID, CRN, PHONE, OWNER_NAME, OWNER_TITLE, GEO, ADDRESS_STRUCTURED, ADDRESS_STRUCTURED_EN } from '@/lib/constants';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import BackToTop from '@/components/ui/BackToTop';
import GeoBanner from '@/components/ui/GeoBanner';
import WebMCPProvider from '@/components/agents/WebMCPProvider';
import { locales, isValidLocale, getDirection, getOgLocale, localePath, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { getAlternates } from '@/lib/seo';

// Generate static params for both locales at build time
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0e17' },
    { media: '(prefers-color-scheme: light)', color: '#f5f7fa' },
  ],
};

// Dynamic metadata based on locale
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const ogLocale = getOgLocale(locale);

  const title = locale === 'ar'
    ? `${SITE_NAME} — تظليل وعزل حراري احترافي في جدة | وكيل جونسون و 3M المعتمد`
    : `${SITE_NAME_EN} — Professional Car Tinting & Insulation in Jeddah | Authorized Johnson & 3M Dealer`;

  const description = dict.site.description;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: locale === 'ar' ? `%s | ${SITE_NAME}` : `%s | ${SITE_NAME_EN}`,
    },
    description,
    keywords: locale === 'ar'
      ? ['تظليل سيارات جدة', 'عزل حراري', 'عازل جونسون', 'عازل 3M', '3M Crystalline', 'نانو سيراميك', 'تظليل مباني', 'عزل زجاج', 'Johnson Window Films', '3M Window Films']
      : ['car tinting jeddah', 'thermal insulation', 'johnson window films', '3M window films', '3M Crystalline', 'nano ceramic', 'building insulation', 'glass insulation', 'window tinting saudi'],
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
      locale: ogLocale,
      url: `${SITE_URL}/${locale}`,
      siteName: SITE_NAME,
      title: locale === 'ar'
        ? `${SITE_NAME} — تظليل وعزل حراري احترافي في جدة`
        : `${SITE_NAME_EN} — Professional Car Tinting & Insulation in Jeddah`,
      description: locale === 'ar'
        ? 'وكيل جونسون و 3M المعتمد — أفلام عزل نانو سيراميك أمريكية مع ضمان عمر السيارة'
        : 'Authorized Johnson & 3M dealer — American nano-ceramic insulation films with vehicle-lifetime warranty',
      images: [{ url: '/images/og-cover.webp', width: 1200, height: 630, alt: locale === 'ar' ? 'عزل كور — تظليل وعزل حراري جدة' : 'AzelCore — Car Tinting & Thermal Insulation Jeddah' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'ar' ? `${SITE_NAME} — تظليل سيارات جدة` : `${SITE_NAME_EN} — Car Tinting Jeddah`,
      description: locale === 'ar'
        ? 'وكيل جونسون و 3M المعتمد — حجب 97% من الأشعة تحت الحمراء'
        : 'Authorized Johnson & 3M dealer — 97% infrared heat rejection',
    },
    alternates: getAlternates(locale, '/'),
  };
}

// Organization Schema — locale-aware
function getOrganizationSchema(locale: Locale) {
  const addressData = locale === 'ar' ? ADDRESS_STRUCTURED : ADDRESS_STRUCTURED_EN;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: locale === 'ar' ? SITE_NAME : SITE_NAME_EN,
    alternateName: locale === 'ar' ? SITE_NAME_EN : SITE_NAME,
    legalName: locale === 'ar' ? 'مؤسسة عزل كور للتجارة' : 'AzelCore Trading Est.',
    url: SITE_URL,
    logo: `${SITE_URL}/images/azelcore-logo.webp`,
    foundingDate: '2024',
    taxID: VAT_ID,
    address: { '@type': 'PostalAddress', ...addressData },
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
    areaServed: { '@type': 'City', name: locale === 'ar' ? 'جدة' : 'Jeddah', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
    contactPoint: { '@type': 'ContactPoint', telephone: PHONE, contactType: 'customer service', availableLanguage: ['ar', 'en'] },
    founder: { '@type': 'Person', name: OWNER_NAME, jobTitle: locale === 'ar' ? OWNER_TITLE : 'Certified Insulation & Tinting Technician — Official Johnson & 3M Dealer' },
    identifier: { '@type': 'PropertyValue', name: 'Commercial Registration (CR)', value: CRN },
    image: `${SITE_URL}/images/og-cover.webp`,
    brand: [
      { '@type': 'Brand', name: 'Johnson Window Films', url: 'https://www.johnsonwindowfilms.com' },
      { '@type': 'Brand', name: '3M Window Films', url: 'https://www.3m.com' },
    ],
    sameAs: ['https://www.instagram.com/azelcore'],
  };
}

function getWebsiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: locale === 'ar' ? SITE_NAME : SITE_NAME_EN,
    url: SITE_URL,
    inLanguage: locale,
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: locale === 'ar' ? SITE_NAME : SITE_NAME_EN },
    potentialAction: { '@type': 'SearchAction', target: `${SITE_URL}/${locale}/blog?q={search_term}`, 'query-input': 'required name=search_term' },
  };
}

// FOUC prevention script
const themeScript = `(function(){try{var t=localStorage.getItem('azelcore-theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');else if(t==='dark')document.documentElement.setAttribute('data-theme','dark');else{var h=new Date().getHours();document.documentElement.setAttribute('data-theme',h>=6&&h<18?'light':'dark');}}catch(e){}})()`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  
  // Validate locale
  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dir = getDirection(locale);

  // Font class: prioritize Arabic font for AR, English font for EN
  const fontClass = locale === 'ar'
    ? `${ibmPlexArabic.variable} ${inter.variable}`
    : `${inter.variable} ${ibmPlexArabic.variable}`;

  // Speculation rules with locale-aware paths
  const speculationRules = {
    prefetch: [{
      source: 'list' as const,
      urls: [
        `/${locale}/car-insulation-jeddah`,
        `/${locale}/building-glass-insulation`,
        `/${locale}/johnson-authorized-dealer`,
        `/${locale}/3m-authorized-dealer`,
        `/${locale}/calculator`,
      ],
    }],
    prerender: [{
      source: 'document_rules' as const,
      where: {
        and: [
          { href_matches: `/${locale}/*` },
          { not: { href_matches: '/api/*' } },
          { not: { href_matches: '/_next/*' } },
        ],
      },
      eagerness: 'conservative' as const,
    }],
  };

  return (
    <html lang={locale} dir={dir} className={fontClass} suppressHydrationWarning>
      <head>
        {/* FOUC prevention — runs before paint, zero layout shift */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* DNS Prefetch for WhatsApp API */}
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        {/* Agentic Discovery — AI tool protocol */}
        <link rel="service-desc" href="/openapi.json" type="application/openapi+json" />
        <link rel="alternate" href="/.well-known/ai-plugin.json" type="application/json" title="AI Plugin Manifest" />
        {/* ═══ Agent-Readiness — RFC 9727 + MCP + Agent Skills ═══ */}
        <link rel="api-catalog" href="/.well-known/api-catalog" type="application/linkset+json" />
        <link rel="describedby" href="/.well-known/mcp/server-card.json" type="application/json" title="MCP Server Card" />
        <link rel="describedby" href="/.well-known/agent-skills/index.json" type="application/json" title="Agent Skills Index" />
        <link rel="describedby" href="/.well-known/openid-configuration" type="application/json" title="OpenID Connect Discovery" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema(locale)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema(locale)) }}
        />
        {/* Speculation Rules API — conservative prefetch for key pages */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {/* ═══ data-nosnippet: Vector Density Forcing ═══ */}
          <div data-nosnippet>
            <Header locale={locale} />
          </div>
          <main id="main-content" style={{ paddingTop: 'var(--header-height)' }}>
            {children}
          </main>
          <div data-nosnippet>
            <Footer locale={locale} />
          </div>
          <div data-nosnippet>
            <WhatsAppFloat locale={locale} />
            <BackToTop locale={locale} />
            <GeoBanner locale={locale} />
          </div>
          {/* ═══ WebMCP — Expose tools to in-browser AI agents ═══ */}
          <WebMCPProvider locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  );
}
