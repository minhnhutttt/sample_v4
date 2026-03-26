import type { Metadata } from 'next';
import { DM_Serif_Text, Zen_Old_Mincho } from 'next/font/google';
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

const zen = Zen_Old_Mincho({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
});
const dm = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm',
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
      <body
        className={`${zen.className} ${dm.variable} relative bg-[#03234E] text-white antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 z-99 bg-[url(/assets/images/grd.png)] bg-center mix-blend-soft-light"></div>
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
