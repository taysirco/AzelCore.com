import { permanentRedirect } from 'next/navigation';

// 301 Permanent Redirect — preserves PageRank equity
export default async function ThermalWindowsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  permanentRedirect('/building-glass-insulation');
}
