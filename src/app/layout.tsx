import type { Metadata } from 'next';
import { Anton, Inter, Noto_Sans_JP } from 'next/font/google';

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

const inter = Inter({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--inter',
});

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--anton',
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
        className={`${noto.className} ${inter.variable} ${anton.variable} bg-[#FFF8ED] antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
