'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { TransitionLink } from './navigation/TransitionLink';

type LinkType = {
  label: string;
  href: string;
};

type MenuItemType = {
  image: string;
  alt: string;
  links: LinkType[];
};

const LinkItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick: () => void;
}) => (
  <TransitionLink
    href={href}
    onClick={onClick}
    className="group/link relative flex w-full items-center overflow-hidden pr-4 text-[16px] text-white min-[1400]:text-[20px] md:text-[18px]"
  >
    <span className="relative flex w-full translate-y-full items-center justify-between gap-3 duration-300 group-hover/item:translate-y-0 group-hover/link:!opacity-100 group-hover/links:opacity-50 max-md:group-[.open]/item:translate-y-0">
      <span>{children}</span>
      <Image
        src="/assets/images/arrow.svg"
        alt="logo"
        width={25}
        height={22}
        className="duration-300 group-hover/link:translate-x-4 max-md:w-4"
      />
    </span>
  </TransitionLink>
);

const NewsItem = ({
  href,
  image,
  date,
  children,
  onClick,
}: {
  href: string;
  image: string;
  date: string;
  children: ReactNode;
  onClick: () => void;
}) => (
  <TransitionLink
    href={href}
    onClick={onClick}
    className="group/news relative flex w-full items-center gap-4 rounded-tl-3xl rounded-br-3xl border border-white p-4 text-[14px] text-white duration-300 hover:bg-[#e4032e] md:text-[16px]"
  >
    <figure>
      <Image src={image} alt="logo" width={152} height={110} className="" />
    </figure>
    <span className="flex flex-col gap-4">
      <span>{date}</span>
      <span>{children}</span>
    </span>
    <Image
      src="/assets/images/arrow-news.svg"
      alt="logo"
      width={23}
      height={20}
      className="absolute right-4 bottom-4 duration-300 group-hover/news:translate-x-2 max-md:w-4"
    />
  </TransitionLink>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const pathname = usePathname();
  const isHome =
    pathname === '/' || pathname === '/be-partner' || pathname === '/about';

  const close = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(null);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      if (prev) {
        setActiveIndex(null);
      }
      return !prev;
    });
  }, []);

  const handleButtonClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems: MenuItemType[] = [
    {
      image: '/assets/images/news.svg',
      alt: 'news',
      links: [
        { label: '試合', href: '/news?category=試合' },
        { label: 'チーム', href: '/news?category=チーム' },
        { label: 'イベント', href: '/news?category=イベント' },
        { label: '全て', href: '/news' },
      ],
    },
    {
      image: '/assets/images/team.svg',
      alt: 'team',
      links: [
        { label: 'レオブラックス選手', href: '/team?s=レオブラックス' },
        { label: 'レオナイナーズ選手', href: '/team?s=レオナイナーズ' },
        { label: '沿革（history）', href: '/history' },
      ],
    },
    {
      image: '/assets/images/game.svg',
      alt: 'game',
      links: [
        { label: '試合情報', href: '/game' },
        { label: '楽しみ方', href: '/game#guide' },
        { label: '3X3について', href: '/about' },
      ],
    },
    {
      image: '/assets/images/partner.svg',
      alt: 'partner',
      links: [
        { label: 'パートナーをご検討の方', href: '/be-partner' },
        { label: 'パートナー様のご紹介', href: '/partners' },
      ],
    },
  ];

  return (
    <>
      <header
        className={`header group fixed top-0 left-0 z-60 flex h-16 w-full items-center border-t-[10px] border-white px-5 md:h-20 md:border-t-[20px] ${
          isScrolled && 'active'
        }`}
      >
        <div className="pointer-events-none fixed top-[9px] left-0 md:top-5">
          <Image
            src="/assets/images/bg-header.svg"
            alt="logo"
            width={430}
            height={327}
            className="max-md:w-[280px]"
          />
        </div>

        <TransitionLink
          href="/"
          className="relative top-0.5 left-0 md:top-3 md:left-4"
        >
          <Image
            src="/assets/images/leo-logo.png"
            alt="logo"
            width={137}
            height={96}
            className="max-md:w-[86px]"
          />
        </TransitionLink>

        <button
          onClick={toggle}
          className="fixed top-6 right-5 z-40 flex flex-col items-center justify-center gap-1.5 duration-300 hover:scale-110 md:top-13 md:right-13 md:gap-1.5"
        >
          <span
            className={`h-0.5 w-8 rounded-full bg-white duration-200 group-[.active]:bg-black md:h-[3px] md:w-[55px] ${
              isOpen && 'translate-y-1 rotate-45 group-[.active]:bg-white'
            } ${!isHome && !isOpen && 'bg-black!'}`}
          />
          <span
            className={`h-0.5 w-8 rounded-full bg-white duration-200 group-[.active]:bg-black md:h-[3px] md:w-[55px] ${
              isOpen && 'opacity-0 group-[.active]:bg-white'
            } ${!isHome && !isOpen && 'bg-black!'}`}
          />
          <span
            className={`h-0.5 w-8 rounded-full bg-white duration-200 group-[.active]:bg-black md:h-[3px] md:w-[55px] ${
              isOpen && '-translate-y-3.5 -rotate-45 group-[.active]:bg-white'
            } ${!isHome && !isOpen && 'bg-black!'}`}
          />
          <span
            className={`font-bebas-neue -mt-1 text-[14px] tracking-[0.12em] text-white group-[.active]:text-black md:text-[27px] ${!isHome && !isOpen && 'text-black!'} ${isOpen && 'group-[.active]:text-white'}`}
          >
            MENU
          </span>
        </button>

        <div
          className={`fixed inset-0 flex items-start justify-center bg-black duration-200 md:items-center ${
            isOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="h-full w-full overflow-auto">
            <div className="flex w-full gap-10 px-5 py-10 max-xl:flex-col-reverse">
              <div className="max-md:h-full xl:flex-1">
                <div className="flex h-full items-end justify-start xl:py-[120px]">
                  <div className="w-full max-w-[560px] space-y-5">
                    <NewsItem
                      onClick={close}
                      href="/news/m0jc0q2yw2mk"
                      date="2026.03.11"
                      image="/assets/images/news.png"
                    >
                      ふるさと納税について：2026年度用
                    </NewsItem>
                  </div>
                </div>
              </div>
              <div className="xl:flex-1">
                <div className="group/menu space-y-5">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className={`group/item flex gap-4 max-md:flex-col md:items-end md:gap-7 ${
                        activeIndex === index ? 'open' : ''
                      }`}
                    >
                      <button
                        onClick={() => handleButtonClick(index)}
                        className={`relative block overflow-hidden group-hover/item:!opacity-100 group-hover/menu:opacity-50`}
                      >
                        <span className="relative block duration-300 group-hover/item:-translate-y-full max-md:group-[.open]/item:-translate-y-full">
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="h-16 md:h-[140px]"
                          />
                        </span>
                        <span className="absolute top-0 left-0 translate-y-full duration-300 group-hover/item:translate-y-0 max-md:group-[.open]/item:translate-y-0">
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="h-16 md:h-[140px]"
                          />
                        </span>
                      </button>

                      <div
                        className={`group/links grid origin-top gap-2 gap-x-10 overflow-hidden max-md:h-0 max-md:group-[.open]/item:h-auto md:gap-x-6 xl:gap-x-10 ${
                          item.links.length > 3
                            ? 'grid-rows-3'
                            : 'grid-cols-1 grid-rows-1'
                        }`}
                        style={
                          item.links.length > 3
                            ? {
                                gridAutoFlow: 'column',
                                gridTemplateRows: 'repeat(3, auto)',
                              }
                            : undefined
                        }
                      >
                        {item.links.map((link, i) => (
                          <LinkItem key={i} href={link.href} onClick={close}>
                            {link.label}
                          </LinkItem>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="group/bottoms flex gap-6 py-10 text-white max-md:flex-col md:items-center md:gap-10 md:py-20 xl:py-[120px]">
                  <li>
                    <TransitionLink
                      href="/about"
                      onClick={close}
                      className="flex flex-col text-[30px] leading-none duration-300 group-hover/bottoms:opacity-60 hover:!opacity-100 md:text-[50px]"
                    >
                      <span className="font-bebas-neue">ABOUT 3×3</span>
                      <span className="flex gap-4 text-[16px] font-medium md:text-[20px]">
                        <span>3X3について</span>
                        <Image
                          src="/assets/images/arrow.svg"
                          alt="logo"
                          width={25}
                          height={22}
                          className="duration-300 group-hover/bottom:translate-x-4 max-md:w-4"
                        />
                      </span>
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      href="/contact"
                      onClick={close}
                      className="flex flex-col text-[30px] leading-none duration-300 group-hover/bottoms:opacity-60 hover:!opacity-100 md:text-[50px]"
                    >
                      <span className="font-bebas-neue">CONTACT</span>
                      <span className="flex gap-4 text-[16px] font-medium md:text-[20px]">
                        <span>お問い合わせ</span>
                        <Image
                          src="/assets/images/arrow.svg"
                          alt="logo"
                          width={25}
                          height={22}
                          className="duration-300 group-hover/bottom:translate-x-4 max-md:w-4"
                        />
                      </span>
                    </TransitionLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
