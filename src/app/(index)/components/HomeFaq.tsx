'use client';

import { ReactNode, useState } from 'react';

const HomeFaqItem = ({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg bg-[#E6E6E6] p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left text-[18px] font-bold md:text-[24px]"
      >
        <span>{question}</span>

        <svg
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#1E1E1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'mt-4 max-h-200' : 'max-h-0'
        }`}
      >
        <p className="min-h-25 text-[14px] md:min-h-[120px] md:text-[16px]">
          {children}
        </p>
      </div>
    </div>
  );
};

const HomeFaq = () => {
  return (
    <div className="my-16 px-2 md:my-[170px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <h3 className="mb-8 text-center text-[35px] font-black md:text-[70px]">
          よくある質問
        </h3>

        <div className="my-20 space-y-6 text-[#1E1E1E] md:my-[150px]">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <HomeFaqItem question={`Title ${item}`} key={item}>
              Answer the frequently asked question in a simple sentence, a
              longish paragraph, or even in a list.
            </HomeFaqItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
