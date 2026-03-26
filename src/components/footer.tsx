'use client';

import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/config/constants';

import Contact from './contact';

const Footer = () => {
  return (
    <>
      <Contact />
      <footer className="bg-[#000C1B] px-5 pt-24 pb-10 md:pt-50 md:pb-15">
        <div className="mx-auto mb-25 flex w-full max-w-[440px] items-center justify-center gap-16 max-md:flex-col-reverse md:mb-[180px] md:max-w-[880px] md:gap-10">
          <ul className="flex flex-1 flex-wrap gap-6 text-[16px] max-md:justify-center">
            {NavLinks.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="block w-24 duration-200 hover:underline"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={334}
            height={80}
            className="max-md:w-[200px]"
          />
        </div>
        <div className="text-center text-[12px] md:text-[14px]">Copyright © Daiya Industry</div>
      </footer>
    </>
  );
};

export default Footer;
