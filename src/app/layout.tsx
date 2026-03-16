import type { Metadata } from 'next'
import { Creepster, Shippori_Mincho } from 'next/font/google'
import { ReactNode } from 'react'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'
import './globals.scss'
import { SlideThemeProvider } from '@/providers/slide-theme'

const creepster = Creepster({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-creepster',
})

const shippori = Shippori_Mincho({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-shippori',
})

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
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body className={`bg-stone-900 ${creepster.variable} ${shippori.variable}`}>
        <SlideThemeProvider>
          <Header />
          {children}
          <Footer />
        </SlideThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
