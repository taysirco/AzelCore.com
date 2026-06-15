import { schemaConfigs } from '@/data/structured-data';
import { SITE_URL } from '@/lib/constants';

// ═══ Schema Isolation: LocalBusiness (Jeddah Only) ═══
// This layout injects AutoRepair + LocalBusiness schema to enforce local entity mapping.
// It links back to the Root Organization via parentOrganization.

export default function LocalJeddahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    ...schemaConfigs.localBusiness,
    "@id": `${SITE_URL}/car-insulation-jeddah/#localbusiness`,
    "parentOrganization": {
      "@id": `${SITE_URL}/#organization`
    },
    "image": `${SITE_URL}/images/og-cover.webp`,
    "url": `${SITE_URL}/car-insulation-jeddah`,
    "telephone": "+966564612017",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
