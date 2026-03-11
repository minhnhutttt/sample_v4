import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import 'sonner/dist/styles.css';

import SmoothScroll from '@/components/SmoothScroll';
import { ContactModalWrapper } from '@/components/contact/ContactModalWrapper';
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

const figtree = Figtree({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
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
        className={`${figtree.className} bg-[#FFF6F6] text-[#424242] antialiased`}
      >
        <Providers>
          <Header />
          <SmoothScroll />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              {children}
              <Footer />
            </div>
          </div>

          <ContactModalWrapper />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
