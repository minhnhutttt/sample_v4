import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import BoardMember from './components/boardMember'
import CompanyProfile from './components/companyProfile'
import Fv from './components/fv'
import History from './components/history'
import KivoPhotos from './components/kivoPhotos'
import OfficeViewPhotos from './components/officeViewPhotos'
import Vision from './components/vision'

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const ClubsPage = () => {
  return (
    <>
      <Fv />
      <BoardMember />
      <OfficeViewPhotos />
      <Vision />
      <History />
      <KivoPhotos />
      <CompanyProfile />
    </>
  )
}

export default ClubsPage
