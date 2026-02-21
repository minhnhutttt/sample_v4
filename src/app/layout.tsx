import type { Metadata } from 'next';
import { Bebas_Neue, Noto_Sans_JP } from 'next/font/google';
import 'sonner/dist/styles.css';

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
import { Providers } from './providers';

const noto = Noto_Sans_JP({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const bebas_neue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas-neue',
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
      <body className={`${noto.className} ${bebas_neue.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
