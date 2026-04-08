'use client';

import Link from 'next/link';

import { NAV_LINKS } from '@/config/constants';

const Footer = () => {
  return (
    <footer>
      <div className="px-5 py-20 md:py-[116px]">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="flex items-center justify-between gap-10 max-lg:flex-col lg:gap-6">
            <Link href="/">
              <img src="/assets/images/logo-footer.svg" alt="" />
            </Link>
            <ul className="flex items-center gap-8 max-md:flex-wrap max-md:justify-center">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex h-8 items-center text-[14px] text-[#1A4673] md:text-[16px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-[108px] items-center justify-center bg-[#1A4673] text-[12px] text-white md:text-[14px]">
        &copy; {new Date().getFullYear()} くらしポート
      </div>
    </footer>
  );
};

export default Footer;
