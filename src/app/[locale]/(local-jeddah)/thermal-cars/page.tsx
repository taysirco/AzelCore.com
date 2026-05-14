import { permanentRedirect } from 'next/navigation';
import { Locale, localePath } from '@/lib/i18n';

// 301 Permanent Redirect — preserves PageRank equity
export default async function ThermalCarsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  permanentRedirect(localePath(locale as Locale, '/car-insulation-jeddah'));
}
