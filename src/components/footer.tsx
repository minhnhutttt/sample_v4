'use client';

import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/config/constants';

const Footer = () => {
  return (
    <footer className="bg-black px-5 pt-10 pb-8 md:px-12 md:pt-12">
      <div className="flex items-center justify-center gap-16 md:gap-25">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={92}
            height={64}
            className="max-md:w-[65px]"
          />
        </Link>
        <Link href="/">
          <Image
            src="/assets/images/logo2.svg"
            alt="logo"
            width={63}
            height={63}
            className="max-md:size-[45px]"
          />
        </Link>
      </div>
      <div className="mt-13 mb-32">
        <ul className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-white max-md:flex-col md:gap-[65px]">
          {NavLinks.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="px-2 duration-200 hover:underline"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-15 flex items-center justify-center gap-[32px]">
          <li>
            <Link href="https://www.facebook.com/basket.saiko" target="_blank">
              <Image
                src="/assets/images/ic-fb-white.svg"
                alt=""
                width={23}
                height={23}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/basket.saiko" target="_blank">
              <Image
                src="/assets/images/ic-yt-white.svg"
                alt=""
                width={23}
                height={23}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/leoblackssaga/"
              target="_blank"
            >
              <Image
                src="/assets/images/ic-instagram-white.svg"
                alt=""
                width={23}
                height={23}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5 text-[14px] text-white max-md:flex-col-reverse">
        <p className="">Copyright  LEO BLACKS SAGA. All Rights Reserved.</p>
        <Link href="/">プライバシーポリシー</Link>
      </div>
    </footer>
  );
};

export default Footer;
