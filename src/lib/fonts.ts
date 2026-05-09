import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google';

export const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '600', '700'],
  variable: '--font-ar',
  display: 'optional',
  preload: true,
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-en',
  display: 'optional',
  preload: true,
});
