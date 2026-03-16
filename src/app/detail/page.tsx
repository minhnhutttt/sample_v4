import type { Metadata } from 'next'

import { OG, SITE_URL } from '@/config/constants'

import DetailClasses from './components/detailClasses'
import Step from './components/step'

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: `${SITE_URL}/detail`,
  },
  alternates: {
    canonical: `${SITE_URL}/detail`,
  },
}

const DetailPage = () => {
  return (
    <>
      <Step />
      <DetailClasses />
    </>
  )
}

export default DetailPage
