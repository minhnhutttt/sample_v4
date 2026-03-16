import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Caveat, Creepster, Shippori_Mincho } from 'next/font/google';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import {
  DEFAULT_DESCRIPTION,
  OG,
  SITE_NAME,
  SITE_URL,
  TWITTER,
} from '@/config/constants';
import { SlideThemeProvider } from '@/providers/slide-theme';

import './globals.scss';

const creepster = Creepster({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-creepster',
});

const shippori = Shippori_Mincho({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-shippori',
});
const caveat = Caveat({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL ?? 'http://localhost:3000'),
  icons: [
    { rel: 'icon', url: '/assets/images/favicon.png' },
    { rel: 'apple-touch-icon', url: '/assets/images/apple-touch-icon.png' },
  ],
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    ...OG,
  },
  twitter: {
    ...TWITTER,
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body
        className={`bg-stone-900 ${creepster.variable} ${shippori.variable} ${caveat.variable}`}
      >
        <SlideThemeProvider>
          <Header />
          {children}
          <Footer />
        </SlideThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
