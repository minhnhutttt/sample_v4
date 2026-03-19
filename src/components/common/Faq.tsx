'use client';

import { ReactNode, useRef, useState } from 'react';

import gsap from 'gsap';

interface AccordionItemProps {
  question: string;
  children: ReactNode;
}

export function Faq({ question, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggle = () => {
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;

    // Kill previous animation
    tl.current?.kill();

    tl.current = gsap.timeline();

    if (!isOpen) {
      // Opening
      gsap.set(content, { display: 'block' });
      tl.current
        .fromTo(
          content,
          { height: 0, opacity: 0 },
          {
            height: 'auto',
            opacity: 1,
            duration: 0.45,
            ease: 'power3.out',
          },
        )
        .to(
          icon,
          {
            rotation: 45,
            duration: 0.3,
            ease: 'power2.out',
          },
          '<',
        );
    } else {
      // Closing
      tl.current
        .to(content, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: 'power3.in',
          onComplete: () => {
            gsap.set(content, { display: 'none' });
          },
        })
        .to(
          icon,
          {
            rotation: 0,
            duration: 0.3,
            ease: 'power2.in',
          },
          '<',
        );
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t border-gray-200 last:border-b">
      <button
        onClick={toggle}
        className={`group flex w-full cursor-pointer items-center justify-between py-5 text-left transition-colors duration-200 ${
          isOpen ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
        }`}
        aria-expanded={isOpen}
      >
        <span
          className={`text-base font-semibold tracking-tight transition-colors duration-200 md:text-2xl ${
            isOpen ? 'text-gray-900' : 'text-gray-500'
          }`}
        >
          {question}
        </span>

        <span
          ref={iconRef}
          className={`ml-6 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
            isOpen
              ? 'border-gray-900 text-gray-900'
              : 'border-gray-400 text-gray-400 group-hover:border-gray-700 group-hover:text-gray-700'
          }`}
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="6"
              y1="0"
              x2="6"
              y2="12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="6"
              x2="12"
              y2="6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          display: isOpen ? 'block' : 'none',
          overflow: 'hidden',
        }}
      >
        <div className="space-y-4 pb-6">
          <p className="text-base leading-relaxed text-gray-500">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
