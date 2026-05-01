import { permanentRedirect } from 'next/navigation';

// 301 Permanent Redirect — preserves PageRank equity
export default function ThermalWindowsPage() {
  permanentRedirect('/building-glass-insulation');
}
