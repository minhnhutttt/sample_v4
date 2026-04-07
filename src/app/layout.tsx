import { Suspense } from 'react';

import type { Metadata } from 'next';
import { Bebas_Neue, Noto_Sans_JP, Orbitron } from 'next/font/google';
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
import { LoadingProvider } from '@/providers/LoadingProvider';

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
const orbitron = Orbitron({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-orbitron',
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
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${noto.className} ${bebas_neue.variable} ${orbitron.variable} antialiased`}
      >
        <Suspense>
          <Providers>
            <LoadingProvider>
              <Header />
              {children}
              <Footer />
            </LoadingProvider>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
