import Image from 'next/image';
import Link from 'next/link';

import Title from '@/components/common/Title';

import CuratorFeed from './CuratorFeed';

const HomeSns = () => {
  return (
    <div className="bg-[#F4F2F2] px-5 pt-16 pb-25 md:pt-22 md:pb-[170px]">
      <div className="mx-auto w-full max-w-[1180px]">
        <Title title="SNS" sub="レオ ブラックス＆レオ ナイナーズSNS" />
        <div className="mx-auto mt-20 w-[330px]">
          <ul className="flex h-12 items-center justify-center gap-[55px] rounded-full bg-white">
            <li>
              <Link
                href="https://www.facebook.com/basket.saiko"
                target="_blank"
              >
                <Image
                  src="/assets/images/ic-fb.svg"
                  alt=""
                  width={23}
                  height={23}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UCRabHNK1ilyKXmmPQaKeY0w"
                target="_blank"
              >
                <Image
                  src="/assets/images/ic-yt.svg"
                  alt=""
                  width={23}
                  height={23}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/leoblackssaga/"
                target="_blank"
              >
                <Image
                  src="/assets/images/ic-instagram.svg"
                  alt=""
                  width={23}
                  height={23}
                />
              </Link>
            </li>
          </ul>
          <ul className="mt-4 flex items-center gap-20">
            <li>
              <Image
                src="/assets/images/leo-logo.png"
                alt=""
                width={137}
                height={96}
              />
            </li>
            <li>
              <Image
                src="/assets/images/leo-logo-2.png"
                alt=""
                width={94}
                height={93}
              />
            </li>
          </ul>
        </div>
        <div className="mt-20">
          <CuratorFeed />
        </div>
        <div className="mt-12 flex justify-center md:mt-[54px]">
          <Link
            href="/"
            className="flex h-14 w-[260px] items-center justify-center gap-5 bg-[#FF4E4E] text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[70px] md:w-[300px] md:text-[20px]"
          >
            さらに読み込む
            <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
              <img
                src="/assets/images/btn-arrow.svg"
                className="max-md:w-4"
                alt=""
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSns;
