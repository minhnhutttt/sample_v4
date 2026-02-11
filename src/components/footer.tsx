'use client';

import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/config/constants';

const Footer = () => {
  return (
    <footer className="border border-white/20 bg-[rgba(255,255,255,0.02)] [box-shadow:0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.5px] backdrop-filter">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-10 px-5 py-20 max-md:flex-col md:py-[130px]">
        <Link href="/" className="duration-300 hover:scale-110">
          <Image
            src="/assets/images/kivo.svg"
            alt=""
            width={331}
            height={225}
            className="w-[160px] md:w-[212px]"
          />
        </Link>
        <ul className="space-y-4">
          {NavLinks.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="text-[18px] font-medium duration-200 hover:underline md:text-[24px]"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-5 text-center text-[16px] text-[#888] md:text-[24px]">
        © KIVO Co., Ltd. All Rights Reserved. <br />
        <span className="text-white">Language: 日本語</span> / English
      </div>
    </footer>
  );
};

export default Footer;
