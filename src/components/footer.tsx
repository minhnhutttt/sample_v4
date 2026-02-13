'use client';

import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/config/constants';

const Footer = () => {
  return (
    <footer className="border border-white/20 bg-[rgba(255,255,255,0.02)] [box-shadow:0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.5px] backdrop-filter">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-10 px-5 py-20 max-lg:flex-col md:py-[130px]">
        <div className="flex flex-col items-center">
          <Link href="/" className="duration-300 hover:scale-110">
            <Image
              src="/assets/images/kivo.svg"
              alt=""
              width={331}
              height={225}
              className="w-[160px] md:w-[212px]"
            />
          </Link>
          <div className="mt-10 flex justify-center gap-2.5 md:mt-[60px]">
            <Link href="#">
              <Image
                src="/assets/images/btn-appstore.png"
                alt=""
                width={280}
                height={84}
                className="w-32 md:w-70"
              />
              <p className="mt-0.5 text-right text-[12px] md:text-[16px]">
                無料で始められます
              </p>
            </Link>

            <Link href="#" className="max-md:hidden">
              <Image
                src="/assets/images/btn-google.png"
                alt=""
                width={280}
                height={84}
                className="w-32 md:w-70"
              />
            </Link>
          </div>
        </div>
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
