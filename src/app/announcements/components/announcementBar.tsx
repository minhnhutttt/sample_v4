import Link from 'next/link';

import { AnnouncementBarItem } from '@/app/types/microcms';

type Props = {
  items: AnnouncementBarItem[];
};

function KivoSeparator() {
  return (
    <span className="w-5" aria-hidden="true">
      <img
        src="/assets/images/logo.svg"
        alt=""
        width={20}
        height={20}
        className="announcement-bar__logo"
      />
    </span>
  );
}

function AnnouncementBarItemNode({ item }: { item: AnnouncementBarItem }) {
  const hasInternalLink = !!item.internal_link;
  const hasExternalUrl = !!item.external_url;

  const textNode = <span className="announcement-bar__text">{item.text}</span>;

  if (hasInternalLink) {
    return (
      <Link
        href={`/news/${item.internal_link!.id}`}
        className="announcement-bar__item announcement-bar__item--link"
      >
        {textNode}
      </Link>
    );
  }

  if (hasExternalUrl) {
    return (
      <a
        href={item.external_url}
        target="_blank"
        rel="noopener noreferrer"
        className="announcement-bar__item announcement-bar__item--link"
      >
        {textNode}
      </a>
    );
  }

  return <span className="announcement-bar__item">{textNode}</span>;
}

export function AnnouncementBar({ items }: Props) {
  if (!items || items.length === 0) return null;

  const loopItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  return (
    <div
      className="-mx-5 mt-10 overflow-hidden bg-[#242424] py-2 text-white"
      role="marquee"
      aria-label="お知らせ"
    >
      <div className="flex animate-[kivo-marquee_5s_linear_infinite] gap-5 whitespace-nowrap md:animate-[kivo-marquee_30s_linear_infinite]">
        <div className="flex gap-5">
          {loopItems.map((item, index) => (
            <span
              key={`${item.id}-${index}`}
              className="flex items-center gap-5"
            >
              <AnnouncementBarItemNode item={item} />
              <KivoSeparator />
            </span>
          ))}
        </div>
        <div className="flex gap-5">
          {loopItems.map((item, index) => (
            <span
              key={`${item.id}-${index}`}
              className="flex items-center gap-5"
            >
              <AnnouncementBarItemNode item={item} />
              <KivoSeparator />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
