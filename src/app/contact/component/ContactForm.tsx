'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchAddress = async () => {
    if (!postalCode) return;

    const cleaned = postalCode.replace('-', '');

    if (cleaned.length !== 7) {
      alert('郵便番号は7桁で入力してください');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleaned}`,
      );
      const data = await res.json();

      if (data.results) {
        const result = data.results[0];
        const fullAddress = `${result.address1}${result.address2}${result.address3}`;
        setAddress(fullAddress);
      } else {
        alert('住所が見つかりませんでした');
      }
    } catch (error) {
      alert('エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-9 text-[14px] md:mt-11 md:text-[16px]">
      <form action="" className="space-y-7">
        <div>
          <label htmlFor="" className="pl-4">
            御社名
          </label>
          <div className="mt-1">
            <input
              type="text"
              placeholder="株式会社御社"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="pl-4">
            部署名
          </label>
          <div className="mt-1">
            <input
              type="text"
              placeholder="マーケティング部"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="pl-4">
            お名前<span className="ml-2 text-[#F7CD4A]">※</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              placeholder="山田太郎"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="pl-4">
            郵便番号<span className="ml-2 text-[#F7CD4A]">※</span>{' '}
            <button
              type="button"
              onClick={handleSearchAddress}
              className="ml-7 border-b border-white px-2 text-[12px] md:text-[14px]"
            >
              郵便番号から住所を検索
            </button>
          </label>
          <div className="mt-1">
            <input
              type="text"
              placeholder="000-1111"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="pl-4">
            住所<span className="ml-2 text-[#F7CD4A]">※</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="愛媛県新居浜0-0-0 グランメゾン000"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="pl-4">
            メールアドレス<span className="ml-2 text-[#F7CD4A]">※</span>
          </label>
          <div className="mt-1">
            <input
              type="email"
              placeholder="sample@sample.com"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="pl-4">
            お問い合わせ項目<span className="ml-2 text-[#F7CD4A]">※</span>
          </label>
          <div className="mt-1">
            <select
              name=""
              id=""
              className="h-10 w-full border-b border-l border-white bg-[#03234E] px-4 md:h-11"
            >
              <option value="">選択してください</option>
              <option value="">選択してください</option>
              <option value="">選択してください</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="" className="pl-4">
            お問い合わせ内容<span className="ml-2 text-[#F7CD4A]">※</span>
          </label>
          <div className="mt-1">
            <textarea
              name=""
              id=""
              placeholder="サービス内容についてお聞かせください"
              cols={50}
              rows={5}
              className="w-full border-b border-l border-white px-4"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex h-[60px] w-[192px] items-center justify-center border border-white text-[16px] md:text-[18px]">
            送信する
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
