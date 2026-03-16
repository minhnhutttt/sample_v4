export const SITE_URL = 'https://kivo.talk' // No trailing slash is required
export const SITE_NAME = 'KIVO'
export const DEFAULT_DESCRIPTION = 'KIVOは、あなたの情報の価値をしっかりと守りながら、その情報を「価値として、必要な人に届けられる」コミュニケーションの場所です。'
export const OG = {
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  siteName: SITE_NAME,
  locale: 'ja_JP',
  type: 'website',
  images: SITE_URL + '/assets/images/og_image.png',
}
export const TWITTER = {
  card: 'summary_large_image',
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  images: SITE_URL + '/assets/images/og_image.png',
}
