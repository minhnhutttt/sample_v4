'use client';

import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '@/components/button';
import Rive from '@/components/rive';

const SERVICES = [
  {
    title: 'Strategy',
    description:
      'As a strategic digital marketing agency, genuine impact starts with a plan. Before we spend a single dollar on media, we immerse ourselves in your business to deliver insights on your market, customers, and competition, providing deeply researched perspectives on where and how to grow your brand across the full customer journey.',
    tags: [
      'Market Research',
      'Consumer Segmentation & Market Sizing',
      'Competitive Intelligence',
    ],
    riv: '/assets/images/hero_strategy.riv',
  },
  {
    title: 'Media',
    description:
      'As a digital marketing agency, we know real growth takes more than quick wins—it demands a strategic, full-funnel media approach. At New Engen, we leverage deep consumer research and insights, innovative creative strategy, and precision media planning and buying to craft high-performance campaigns that maximize impact while fueling long-term brand momentum.',
    tags: ['Paid Search', 'Paid Social', 'Programmatic'],
    riv: '/assets/images/hero_media.riv',
  },
  {
    title: 'Creative',
    description:
      'As a creative-driven digital agency, we craft audience-first content that doesn’t just look good—it performs and converts. From brand storytelling to performance-driven assets, our creative breaks through the noise, builds brand equity, and drives measurable results across every channel.',
    tags: ['Paid Search', 'Paid Social', 'Programmatic'],
    riv: '/assets/images/hero_creative.riv',
  },
  {
    title: 'Measurement',
    description:
      'At New Engen, measurement isn’t an afterthought—it’s the foundation of success. Our always-on, AI-powered analytics provide a real-time, cross-channel view of performance, empowering brands to optimize spend, maximize impact, and scale with confidence.',
    tags: ['Paid Search', 'Paid Social', 'Programmatic'],
    riv: '/assets/images/hero_measurement.riv',
  },
  {
    title: 'Retail Marketing',
    description:
      'As a digital marketing agency with deep retail expertise, we know retail marketing is more than just shelf space—it’s about strategic execution that drives measurable growth. At New Engen, we take a data-first approach to retail, combining digital media, shopper insights, and omnichannel activation to create campaigns that convert. With deep expertise in CPG and retail media, we optimize every touchpoint to turn browsers into buyers.',
    tags: ['Paid Search', 'Paid Social', 'Programmatic'],
    riv: '/assets/images/hero_retail.riv',
  },
];

const HomeServices = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const isLast = i === SERVICES.length - 1;

      return ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: isLast,
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, []);

  return (
    <div className="bg-green w-full py-[9rem] md:pt-[15rem] md:pb-0">
      <div className="site-max flex flex-col items-start">
        <div className="flex flex-col gap-y-[3.5rem]">
          <p className="h7 font-bold">Services</p>
          <p className="h2 w-full md:max-w-[145rem]">
            Driving marketing impact across the customer journey.
          </p>
        </div>
      </div>

      <div className="relative mt-[4rem] md:mt-[9rem]">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="bg-green h-screen w-full overflow-hidden"
          >
            <div className="bg-green border-accent-teal/20 relative origin-top border-t md:pt-[10rem]">
              <div className="site-max flex flex-col">
                <div className="relative flex">
                  <div className="acc-services-item__title h3 relative flex h-[8rem] items-center md:h-[12rem]">
                    {service.title}
                  </div>
                </div>
                <div className="acc-services-item__content relative overflow-hidden">
                  <div className="relative flex flex-col max-md:gap-y-[2rem] md:flex-row md:items-start md:gap-x-[16.5rem]">
                    <div className="acc-services-item__media radius-media relative flex flex-1 md:order-2 md:mt-0">
                      <div className="aspect-9/5 w-full md:w-[80rem]">
                        <Rive src={service.riv} />
                      </div>
                    </div>
                    <div className="relative flex-1 md:order-1 md:max-w-[65rem]">
                      <p className="text-[1.4rem] md:text-[2.2rem]">
                        {service.description}
                      </p>
                      <div className="mt-[1.5rem] flex flex-wrap gap-[1rem] md:mt-[2rem] md:gap-[1.5rem]">
                        {service.tags.map((tag) => (
                          <p
                            key={tag}
                            className="inline-flex h-[3rem] items-center rounded-full border border-current px-[.8rem] text-[1.4rem] leading-none whitespace-nowrap md:h-[3.4rem] md:px-[1.2rem]"
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                      <div className="mt-[4rem] md:mt-[8rem]">
                        <Button href="/" text="Learn more" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
