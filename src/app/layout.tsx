import type { Metadata } from 'next';
import { Ledger, Noto_Sans_JP } from 'next/font/google';

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
import { Providers } from './providers';

const noto = Noto_Sans_JP({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const ledger = Ledger({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ledger',
  display: 'swap',
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
}>) => (
  <html lang="ja" className={`${noto.variable} ${ledger.variable}`}>
    <body className="font-jp antialiased">
      <Providers>
        <Header />
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;
