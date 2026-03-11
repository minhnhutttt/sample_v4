'use client';

import { useEffect, useRef, useState } from 'react';

import { ScrollSmoother } from 'gsap/ScrollSmoother';

import Button from '../button';

const ContactStep1 = ({ onNext }: { onNext: () => void }) => (
  <div className="animate-fadeUp w-full p-[2rem] md:p-[4rem]">
    <p className="text-[4rem] md:text-[7rem]">Contact form</p>
    <div className="mt-[2.8rem] flex gap-[2.8rem] max-md:flex-col md:gap-[6rem]">
      <div className="space-y-[2.8rem] md:w-[40rem] md:space-y-[3.6rem]">
        <div className="space-y-[1.2rem]">
          <div className="flex items-center gap-[1.6rem]">
            <p className="text-[1.6rem]">種別選択</p>
            <p className="rounded-md bg-white px-[0.8rem] py-[0.4rem] text-[1.4rem] leading-none text-[#424242]">
              必須
            </p>
          </div>
          <div className="flex flex-wrap gap-[1.2rem] text-[1.4rem]">
            <p className="rounded-full border border-[#FFF6F6] px-[1.2rem] py-[0.4rem]">
              資料請求
            </p>
            <p className="rounded-full border border-[#FFF6F6] px-[1.2rem] py-[0.4rem]">
              デモ依頼
            </p>
            <p className="rounded-full border border-[#FFF6F6] px-[1.2rem] py-[0.4rem]">
              相談
            </p>
          </div>
        </div>
        <div className="space-y-[1.2rem]">
          <div className="flex items-center gap-[1.6rem]">
            <p className="text-[1.6rem]">会社名</p>
            <p className="rounded-md bg-white px-[0.8rem] py-[0.4rem] text-[1.4rem] leading-none text-[#424242]">
              必須
            </p>
          </div>
          <div className="flex flex-wrap gap-[1.2rem] text-[1.4rem]">
            <input
              type="text"
              className="h-[4.4rem] w-full border-b border-l border-[#FFF6F6] p-[0.8rem]"
              placeholder="株式会社サンプル"
            />
          </div>
        </div>
        <div className="space-y-[1.2rem]">
          <div className="flex items-center gap-[1.6rem]">
            <p className="text-[1.6rem]">メールアドレス</p>
            <p className="rounded-md bg-white px-[0.8rem] py-[0.4rem] text-[1.4rem] leading-none text-[#424242]">
              必須
            </p>
          </div>
          <div className="flex flex-wrap gap-[1.2rem] text-[1.4rem]">
            <input
              type="text"
              className="h-[4.4rem] w-full border-b border-l border-[#FFF6F6] p-[0.8rem]"
              placeholder="sample@sample.co.jp"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-[1.2rem]">
          <div className="flex items-center gap-[1.6rem]">
            <p className="text-[1.6rem]">内容</p>
            <p className="rounded-md bg-white px-[0.8rem] py-[0.4rem] text-[1.4rem] leading-none text-[#424242]">
              必須
            </p>
          </div>
          <div className="flex flex-wrap gap-[1.2rem] text-[1.4rem]">
            <textarea
              name=""
              id=""
              className="h-[15.6rem] w-full border-b border-l border-[#FFF6F6] p-[0.8rem]"
              placeholder="お問い合わせ内容をご記入ください。"
            ></textarea>
          </div>
        </div>
        <div className="mt-[2rem] flex items-end justify-end">
          <Button text="送信する" en="SUBMIT" onClick={onNext} />
        </div>
      </div>
    </div>
  </div>
);

const ContactStep2 = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => (
  <div className="animate-fadeUp w-full p-[4rem]">
    <p className="text-[1.5rem] md:text-[1.6rem]">
      以下の内容で送信してよろしいですか？
    </p>
    <div className="mt-[2.8rem] flex gap-[2.8rem] max-md:flex-col md:gap-[6rem]">
      <div className="w-[40rem] space-y-[3.6rem]">
        <div className="space-y-[1.2rem]">
          <div className="flex items-center gap-[1.6rem]">
            <p className="text-[1.6rem]">種別選択</p>
          </div>
          <div className="flex flex-wrap gap-[1.2rem] text-[1.4rem]">
            <p className="rounded-full border border-[#FFF6F6] bg-[#FFF6F6] px-[1.2rem] py-[0.4rem] text-[#424242]">
              資料請求
            </p>
          </div>
        </div>
        <div className="space-y-[1.2rem]">
          <div className="flex items-center gap-[1.6rem]">
            <p className="text-[1.6rem]">会社名</p>
          </div>
          <div className="flex flex-wrap gap-[1.2rem] text-[1.4rem]">
            <p>株式会社サンプル</p>
          </div>
        </div>
        <div className="space-y-[1.2rem]">
          <div className="flex items-center gap-[1.6rem]">
            <p className="text-[1.6rem]">メールアドレス</p>
          </div>
          <div className="flex flex-wrap gap-[1.2rem] text-[1.4rem]">
            <p>sample@sample.co.jp</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="">
          <div className="flex items-center gap-[1.6rem]">
            <p className="text-[1.6rem]">内容</p>
          </div>
          <div className="flex flex-wrap gap-[1.2rem] text-[1.4rem]">
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
            </p>
          </div>
        </div>
        <div className="mt-[2rem] flex items-end justify-end gap-[2rem]">
          <Button text="入力に戻る" en="BACK" isBack onClick={onBack} />
          <Button text="送信する" en="SUBMIT" onClick={onNext} />
        </div>
      </div>
    </div>
  </div>
);

const ContactStep3 = ({ onBack }: { onBack: () => void }) => (
  <div className="animate-fadeUp w-full p-[4rem]">
    <p className="text-[4rem] md:text-[7rem]">Thank you for your inquiry！</p>
    <div className="mt-[2.8rem] flex gap-[2.8rem] max-md:flex-col md:gap-[6rem]">
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-center gap-[1.6rem]">
          <p className="text-[1.6rem]">
            お問い合わせいただきありがとうございました。
            <br />
            <br />
            今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。今後のフローが入ります。
          </p>
        </div>
        <div className="mt-[2rem] flex items-end justify-end gap-[2rem]">
          <Button
            text="トップに戻る"
            en="BACK TO TOP"
            isBack
            onClick={onBack}
          />
        </div>
      </div>
    </div>
  </div>
);
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const ContactModal = ({ isOpen, onClose }: ModalProps) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    smootherRef.current = ScrollSmoother.get() ?? null;
  }, []);

  useEffect(() => {
    if (isOpen) {
      smootherRef.current?.paused(true);
      document.body.style.overflow = 'hidden';
    } else {
      smootherRef.current?.paused(false);
      document.body.style.overflow = '';
    }

    return () => {
      smootherRef.current?.paused(false);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-99 h-screen w-full overflow-auto bg-[#0D0D0D]/75 text-white backdrop-blur-[25px] backdrop-filter">
      <button
        onClick={onClose}
        className="absolute top-[2rem] right-[3rem] z-20 text-[3rem] md:right-[5rem]"
      >
        X
      </button>
      <div className="relative mx-auto w-full max-w-[120rem]">
        <div className="flex items-center">
          {step === 1 && <ContactStep1 onNext={() => setStep(2)} />}
          {step === 2 && (
            <ContactStep2 onNext={() => setStep(3)} onBack={() => setStep(1)} />
          )}
          {step === 3 && <ContactStep3 onBack={() => setStep(1)} />}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
