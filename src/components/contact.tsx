'use client';

import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="bg-[url(/assets/images/contact-bg.png)] bg-cover pt-12 pb-25 md:pt-18 md:pb-[140px]">
      <div className="mx-auto w-full">
        <div className="relative flex justify-center">
          <h3 className="pb-6">
            <Image
              src="/assets/images/contact.png"
              alt="contact"
              width={1134}
              height={138}
              className=""
            />
          </h3>
          <p className="absolute bottom-0 text-center text-[20px] font-medium md:text-[28px]">
            お問い合わせはこちらへ！
          </p>
        </div>
        <div className="mt-12 flex justify-between gap-6 max-md:flex-col md:mt-20 md:gap-20">
          <Link
            href="tel:0897478601"
            className="flex h-32 items-center justify-center border border-l-0 border-white bg-white/10 text-[16px] duration-300 hover:opacity-75 max-md:border-x-0 md:h-[280px] md:flex-1 md:text-[18px]"
          >
            0897-47-8601
          </Link>
          <Link
            href="/contact"
            className="flex h-32 items-center justify-center border border-r-0 border-white bg-white/10 text-[16px] duration-300 hover:opacity-75 max-md:border-x-0 md:h-[280px] md:flex-1 md:text-[18px]"
          >
            フォームへ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
