export const CONTACT_URL = 'https://shishoku-bar.com/#contact';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';
export const SITE_URL_WITH_SCHEME = SITE_URL ? `https://${SITE_URL}` : '';

/** og:site_name */
export const SITE_NAME = '試食BAR アサクサ | 小さな一口、大きな驚き。';
/** og:title */
export const SITE_TITLE = '出展お問い合わせ | 試食BAR アサクサ';

export const DEFAULT_DESCRIPTION =
  '試食・アンケート　食べるで売れる。強力なアンケートデータ獲得。全国の自治体から高リピート。メディア掲載実績多数。';
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
  title: SITE_TITLE,
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
