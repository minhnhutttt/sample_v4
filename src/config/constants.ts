export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';
export const SITE_URL_WITH_SCHEME = SITE_URL ? `https://${SITE_URL}` : '';
export const SITE_NAME = 'SITE NAME';
export const DEFAULT_DESCRIPTION = 'description';
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
    text: 'Work',
    href: '/',
  },
  {
    text: 'Services',
    href: '/',
  },
  {
    text: 'Solutions',
    href: '/',
  },
  {
    text: 'Insights',
    href: '/',
  },
  {
    text: 'Techonology',
    href: '/',
  },
  {
    text: 'Company',
    href: '/',
  },
];
