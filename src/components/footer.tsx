'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#F0FEFF] px-5 py-25">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="">
          <Link href="/">
            <img src="/assets/images/logo.svg" alt="" />
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-6 pt-12.5 pb-20 text-[16px] max-md:flex-col md:gap-25 md:pb-25 md:text-[18px]">
          <li>
            <Link href="/">利用規約</Link>
          </li>
          <li>
            <Link href="/">プライバシーポリシー</Link>
          </li>
          <li>
            <Link href="/">運営会社</Link>
          </li>
        </ul>
        <div>&copy; {new Date().getFullYear()} PAL</div>
      </div>
    </footer>
  );
};

export default Footer;
