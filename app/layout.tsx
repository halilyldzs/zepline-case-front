import { Footer, Header } from '@/components/layout';
import SkipLink from '@/components/shared/SkipLink';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Profuture - Dergi ve Makale Platformu',
  description:
    'Profuture, modern bir dergi ve makale platformudur. En son dergi sayıları, makaleler ve akademik içeriklere erişim sağlayın.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '256x256' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased`}>
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
