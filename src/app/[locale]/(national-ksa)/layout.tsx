import { schemaConfigs } from '@/data/structured-data';
import { SITE_URL } from '@/lib/constants';

// ═══ Schema Isolation: Service + Organization (National KSA Scope) ═══
// This layout injects national Service schema to enforce nationwide entity mapping.
// It links back to the Root Organization via provider.

export default function NationalKsaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nationalServiceSchema = {
    "@context": "https://schema.org",
    ...schemaConfigs.nationalService,
    "@id": `${SITE_URL}/building-glass-insulation/#service`,
    "provider": {
      "@id": `${SITE_URL}/#organization`
    },
    "url": `${SITE_URL}/building-glass-insulation`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nationalServiceSchema) }}
      />
      {children}
    </>
  );
}
