import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import Analysis from './components/analysis'
import FAQ from './components/faq'
import FV from './components/FV'
import Ingredient from './components/ingredient'
import Introduction from './components/introduction'
import Points from './components/points'
import Products from './components/products'
import ShopifyList from './components/shopifyList'
import Situation from './components/situation'
import Steps from './components/steps'
import Voice from './components/voices'
import WeAre from './components/weAre'

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
    type: 'website',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const IndexPage = () => {
  return (
    <main>
      <FV />
      <div className="mx-auto min-h-lvh max-w-[750px]">
        <Introduction />
        <Products />
        <Points />
        <Steps />
        <WeAre />
        <Situation />
        <Voice />
        <Ingredient />
        <Analysis />
        <FAQ />
        <ShopifyList />
      </div>
    </main>
  )
}

export default IndexPage
