import { ReactNode } from 'react';

import type { Metadata } from 'next';
import {
  Anton,
  Caveat,
  Creepster,
  Roboto_Condensed,
  Rock_Salt,
  Shippori_Mincho,
} from 'next/font/google';

import MarqueeTicker from '@/components/MarqueeTicker';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import ScrollToTop from '@/components/layout/scrollToTop';
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
const rock_salt = Rock_Salt({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rock-salt',
});
const roboto = Roboto_Condensed({
  weight: ['400', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
});
const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-anton',
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
        className={`bg-stone-900 ${creepster.variable} ${shippori.variable} ${caveat.variable} ${rock_salt.variable} ${roboto.variable} ${anton.variable}`}
      >
        <SlideThemeProvider>
          <ScrollToTop />
          <Header ticker={<MarqueeTicker />} />
          {children}
          <Footer />
        </SlideThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
