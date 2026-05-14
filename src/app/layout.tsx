import type { Metadata } from 'next';
import { Anton, Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import {
  DEFAULT_DESCRIPTION,
  KEYWORDS,
  OG,
  SITE_NAME,
  SITE_URL_WITH_SCHEME,
  TWITTER,
} from '@/config/constants';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL_WITH_SCHEME || 'http://localhost:3000'),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    ...OG,
    url: '/',
  },
  twitter: {
    ...TWITTER,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/assets/images/favicon.png',
    shortcut: '/assets/images/favicon.png',
    apple: '/assets/images/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${anton.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
