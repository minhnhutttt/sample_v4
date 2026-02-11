import type { CSSProperties } from 'react';

import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { Toaster } from 'sonner';
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
  const toastStyle: CSSProperties = {
    background: '#111827',
    color: '#ffffff',
    border: '1px solid #374151',
    borderRadius: '12px',
  };

  return (
    <html lang="ja">
      <body className={`${noto.className} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Toaster
          position="top-center"
          theme="dark"
          expand
          toastOptions={{
            style: toastStyle,
            classNames: {
              title: 'font-bold text-[14px]',
              description: 'text-[14px] text-gray-400',
              actionButton:
                'text-[12px] bg-blue-600 text-white px-2 py-1 rounded',
              cancelButton:
                'text-[12px] bg-gray-500 text-white px-2 py-1 rounded',
              closeButton: 'text-[12px] text-gray-400 hover:text-white',
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
