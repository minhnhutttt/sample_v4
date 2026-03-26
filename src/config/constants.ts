export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://daiya-industry.com';
export const SITE_URL_WITH_SCHEME = SITE_URL ? `https://${SITE_URL}` : '';
export const SITE_NAME = '大矢工業';
export const DEFAULT_DESCRIPTION = '愛媛県新居浜市を拠点に、地域の企業・施設を支える総合建設会社として確かな実績を積み重ねています。';
export const KEYWORDS = [SITE_NAME];

export const OG_IMAGES = [
  {
    url: '/assets/images/og_image.png',
    width: 1200,
    height: 630,
    alt: SITE_NAME,
  },
];

export const OG = {
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  siteName: SITE_NAME,
  locale: 'ja_JP',
  type: 'website',
  images: OG_IMAGES,
};

export const TWITTER = {
  card: 'summary_large_image',
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  images: OG_IMAGES,
};

export const NavLinks = [
  {
    text: 'トップ',
    href: '/',
  },
  {
    text: '強み',
    href: '/advantage',
  },
  {
    text: 'サービス',
    href: '/service',
  },
  {
    text: '実績',
    href: '/achievements',
  },
  {
    text: '会社概要',
    href: '/company',
  },
  {
    text: 'お問い合わせ',
    href: '/contact',
  },
];
