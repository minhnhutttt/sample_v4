'use client';

import Faq from '@/components/common/Faq';

const HomeFaq = () => {
  return (
    <div className="my-24 px-2 md:my-[170px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <h3 className="mb-8 text-center text-[35px] font-black md:text-[70px]">
          よくある質問
        </h3>

        <div className="my-20 space-y-6 text-[#1E1E1E] md:my-[150px]">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Faq question={`Title ${item}`} key={item}>
              Answer the frequently asked question in a simple sentence, a
              longish paragraph, or even in a list.
            </Faq>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
