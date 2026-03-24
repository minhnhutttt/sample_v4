'use client';

import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <header className="flex h-20 items-center px-5 md:h-25">
      <Link href="/">
        <img src="/assets/images/logo.svg" alt="" className="max-md:w-20" />
      </Link>
    </header>
  );
};

export default Header;
