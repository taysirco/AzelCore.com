import './globals.css';

/**
 * ═══ Minimal Root Layout ═══
 * 
 * This is a bare shell that wraps all locales.
 * The actual lang/dir/fonts/schemas are in [locale]/layout.tsx
 * This avoids duplicate <html> tags across locale groups.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
