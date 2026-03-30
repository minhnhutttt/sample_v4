'use client';

import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

import Header from '@/components/header';

import HomeSection01 from './HomeSection01';
import HomeSection02 from './HomeSection02';
import HomeSection03 from './HomeSection03';
import HomeSection04 from './HomeSection04';
import HomeSection05 from './HomeSection05';
import HomeSection07 from './HomeSection07';
import HomeSection09 from './HomeSection09';
import HomeSection10 from './HomeSection10';

const Container = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div ref={containerRef} className="bg-[#f4793a] opacity-0">
      <Header />
      <HomeSection01 />
      <HomeSection02 />
      <HomeSection04 />
      <HomeSection05 />
      <HomeSection07 />
      <HomeSection09 />
      <HomeSection03 />
      <HomeSection10 />
    </div>
  );
};

export default Container;
