'use client';

import { useCallback, useEffect, useState } from 'react';

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
    <header className="absolute top-5 left-8 z-50 md:top-10 md:left-15">
      <a href="#">
        <img className="max-md:w-16" src="/assets/images/logo.svg" alt="" />
      </a>
    </header>
  );
};

export default Header;
