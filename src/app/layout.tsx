import type { Metadata } from 'next'
import { Zen_Maru_Gothic } from 'next/font/google'
import { ReactNode } from 'react'

import Footer from '@/components/footer'
import Header from '@/components/header'
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'
import './globals.scss'

// const noto = Noto_Sans_JP({
//   weight: ['300', '400', '500', '700', '900'],
//   subsets: ['latin'],
//   display: 'swap',
// })

const zen = Zen_Maru_Gothic({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="ja" className="scroll-smooth">
      <body className={`bg-[#A35EF9] ${zen.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
