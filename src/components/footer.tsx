'use client';

import Link from 'next/link';

import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';

import Button from './button';

const Footer = () => {
  const dispatch = useAppDispatch();
  return (
    <footer className="relative overflow-hidden bg-[#000846] text-[#F2F8FF]">
      <div className="site-max">
        <div className="flex justify-center py-[7.5rem] md:py-[12rem]">
          <img src="/assets/images/logo-lg.png" alt="" />
        </div>
      </div>
      <div className="relative flex">
        <hr className="z-1 w-full border-[#808080]" />
      </div>
      <div className="site-max flex flex-col items-center py-[8rem]">
        <p className="mb-[2rem] text-center text-[2.9em]">
          私たちと事業の可能性を広げていきませんか？
        </p>
        <Button
          text="お問い合わせ"
          en="CONTACT US"
          onClick={() => dispatch(openModal({ name: 'contact' }))}
        />
        <div id="company" className="mx-auto w-full max-w-[82rem]">
          <div className="py-[10rem]">
            <p className="text-[1.8rem] font-medium text-white">
              Company Profile
            </p>
            <div className="mt-[3.6rem] flex gap-[2rem] gap-[8rem] max-md:flex-col">
              <div className="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.015246831103!2d129.9690523!3d33.4489093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356a786372ae4c97%3A0xd5ff0260c0ceef9!2z5pel5pys44CB44CSODQ3LTAwNTUg5L2Q6LOA55yM5ZSQ5rSl5biC5YiA55S677yR77yV77yR77yV4oiS77yS!5e0!3m2!1sja!2s!4v1776084670543!5m2!1sja!2s"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex md:items-end md:justify-end">
                <div className="space-y-[1.2rem] text-[1.6rem]">
                  <div className="flex gap-[2rem]">
                    <p className="flex-[0_0_100px]">社名</p>
                    <p>株式会社マッシヴドライブ</p>
                  </div>
                  <div className="flex gap-[2rem]">
                    <p className="flex-[0_0_100px]">英語表記</p>
                    <p>MASSIVE DRIVE Inc.</p>
                  </div>
                  <div className="flex gap-[2rem]">
                    <p className="flex-[0_0_100px]">資本金</p>
                    <p>6,100万円</p>
                  </div>
                  <div className="flex gap-[2rem]">
                    <p className="flex-[0_0_100px]">主要取引銀行</p>
                    <p>佐賀銀行、西日本シティ銀行、唐津信用金庫</p>
                  </div>
                  <div className="flex gap-[2rem]">
                    <p className="flex-[0_0_100px]">電話番号</p>
                    <p>0955-58-8608</p>
                  </div>
                  <div className="flex gap-[2rem]">
                    <p className="flex-[0_0_100px]">ＦＡＸ</p>
                    <p>0955-58-8609</p>
                  </div>
                  <div className="flex gap-[2rem]">
                    <p className="flex-[0_0_100px]">住所</p>
                    <p>
                      〒847-0055 <br />
                      佐賀県唐津市刀町1515番地2 <br />
                      精乳舎ビル 3・4階(4階受付)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="mb-[2.8rem] text-[1.4rem] font-bold text-white">
                Index
              </p>
              <ul className="space-y-[2rem]">
                <li>
                  <Link href="/#products" className="block">
                    <p className="text-[1.4rem]">製品一覧</p>
                    <p className="text-[1rem] text-[#F2F8FF]/50">PRODUCTS</p>
                  </Link>
                </li>
                <li>
                  <Link href="#company" className="block">
                    <p className="text-[1.4rem]">会社概要</p>
                    <p className="text-[1rem] text-[#F2F8FF]/50">COMPANY</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-[2.8rem] text-[1.4rem] font-bold text-white">
                Let’s social
              </p>
              <ul className="space-y-[2rem]">
                <li>
                  <Link href="" className="block">
                    <p className="text-[1.4rem]">Linkedln</p>
                  </Link>
                </li>
                <li>
                  <Link href="" className="block">
                    <p className="text-[1.4rem]">Facebook</p>
                  </Link>
                </li>
                <li>
                  <Link href="" className="block">
                    <p className="text-[1.4rem]">Instagram</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-[2.8rem] text-[1.4rem] font-bold text-white">
                Case studies
              </p>
              <ul className="space-y-[2rem]">
                <li>
                  <Link href="/steproof" className="block">
                    <p className="text-[1.4rem]">Steproof</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex justify-between py-[14rem] text-[1.05rem] text-[#F2F8FF]/50">
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Cookie Policy</Link>
            </li>
            <li>
              <Link href="/">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
