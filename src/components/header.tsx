'use client';

import { useCallback, useEffect, useState } from 'react';

import LogoRive from './rive/LogoRive';

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
    <header>
      <div className="pointer-events-auto relative z-10 flex h-[35px] w-full items-center overflow-hidden bg-[#CCE561] text-center text-base font-bold whitespace-nowrap text-black duration-300 md:justify-center">
        <div className="relative flex" data-v-6f2835a6="">
          <a
            href="/insights/new-engen-acquires-grapevine-to-expand-creator-led-paid-social-capabilities/"
            className="flex justify-center"
          >
            <span
              className="site-max flex items-center justify-center"
              data-v-6f2835a6=""
            >
              New Engen Announces Acquisition of Grapevine — Click to Learn More
            </span>
          </a>
        </div>
      </div>
      <LogoRive />
    </header>
  );
};

export default Header;
