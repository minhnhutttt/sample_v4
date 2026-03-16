import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import DeliverValue from './components/deliverValue'
import Download from './components/download'
import Features from './components/features'
import KivoPhotos from './components/kivoPhotos'
import Kv from './components/kv'
import OwnYourValue from './components/ownYourValue'
import Toolkit from './components/toolkit'
import Categories from './components/categories'

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const IndexPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Kv />
      <OwnYourValue />
      <Toolkit />
      <Categories />
      <KivoPhotos />
      <DeliverValue />
      <Features />
      <Download />
    </div>
  )
}

export default IndexPage
