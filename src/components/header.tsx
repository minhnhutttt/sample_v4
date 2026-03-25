'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <header className="flex h-20 items-center px-5 md:h-25">
      <Link href="/">
        <img src="/assets/images/logo.svg" alt="" className="max-md:w-20" />
      </Link>
    </header>
  );
};

export default Header;
