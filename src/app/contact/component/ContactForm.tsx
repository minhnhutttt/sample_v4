'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

import { submitContactAction } from '@/services/airtable';
import type { ContactFieldErrors, ContactFormInput } from '@/types/airtable';
import { ContactFormSchema } from '@/validations/contact';

const initialFormData: ContactFormInput = {
  companyName: '',
  departmentName: '',
  name: '',
  postalCode: '',
  address: '',
  email: '',
  inquiryCategory: '',
  inquiryBody: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormInput>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchingAddress, setSearchingAddress] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    if (name === 'postalCode') {
      const sanitized = value.replace(/[^\d-]/g, '');
      setFormData((prev) => ({ ...prev, postalCode: sanitized }));
      setFieldErrors((prev) => ({ ...prev, postalCode: undefined }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validateOnClient = (payload: ContactFormInput): ContactFieldErrors => {
    const result = ContactFormSchema.safeParse(payload);

    if (result.success) {
      return {};
    }

    const errors: ContactFieldErrors = {};
    result.error.issues.forEach((issue) => {
      const fieldName = issue.path[0] as keyof ContactFormInput;
      if (!errors[fieldName]) {
        errors[fieldName] = issue.message;
      }
    });

    return errors;
  };

  const handleSearchAddress = async () => {
    const cleaned = formData.postalCode.replace(/\D/g, '');

    if (!/^\d{7}$/.test(cleaned)) {
      setFieldErrors((prev) => ({
        ...prev,
        postalCode:
          '郵便番号は数字7桁（例: 0001111 または 000-1111）で入力してください',
      }));
      return;
    }

    try {
      setSearchingAddress(true);

      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleaned}`,
      );
      const data = await res.json();

      if (data.results?.length > 0) {
        const result = data.results[0];
        const fullAddress = `${result.address1}${result.address2}${result.address3}`;
        setFormData((prev) => ({ ...prev, address: fullAddress }));
        setFieldErrors((prev) => ({ ...prev, address: undefined }));
      } else {
        setIsSuccess(false);
        setMessage('住所が見つかりませんでした');
      }
    } catch {
      setIsSuccess(false);
      setMessage('住所検索でエラーが発生しました');
    } finally {
      setSearchingAddress(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    setIsSuccess(null);

    const clientErrors = validateOnClient(formData);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setIsSuccess(false);
      setMessage('入力内容を確認してください');
      return;
    }

    try {
      setLoading(true);
      const result = await submitContactAction(formData);

      if (result.code === 0) {
        setIsSuccess(true);
        setMessage(result.message);
        setFormData(initialFormData);
        setFieldErrors({});
        return;
      }

      setIsSuccess(false);
      setMessage(result.message);
      if (result.fieldErrors) {
        setFieldErrors(result.fieldErrors);
      }
    } catch {
      setIsSuccess(false);
      setMessage('送信に失敗しました。しばらくしてから再度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-9 text-[14px] md:mt-11 md:text-[16px]">
      <form onSubmit={handleSubmit} className="space-y-7" noValidate>
        <div>
          <label htmlFor="companyName" className="pl-4">
            御社名
          </label>
          <div className="mt-1">
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="株式会社御社"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
        </div>
        <div>
          <label htmlFor="departmentName" className="pl-4">
            部署名
          </label>
          <div className="mt-1">
            <input
              id="departmentName"
              name="departmentName"
              type="text"
              value={formData.departmentName}
              onChange={handleChange}
              placeholder="マーケティング部"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name" className="pl-4">
            お名前<span className="ml-2 text-[#F7CD4A]">※</span>
          </label>
          <div className="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="山田太郎"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
          {fieldErrors.name && (
            <p className="mt-1 pl-4 text-[12px] text-[#F7CD4A]">{fieldErrors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="postalCode" className="pl-4">
            郵便番号<span className="ml-2 text-[#F7CD4A]">※</span>{' '}
            <button
              type="button"
              onClick={handleSearchAddress}
              disabled={searchingAddress}
              className="ml-7 border-b border-white px-2 text-[12px] md:text-[14px]"
            >
              {searchingAddress ? '検索中...' : '郵便番号から住所を検索'}
            </button>
          </label>
          <div className="mt-1">
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              inputMode="numeric"
              maxLength={8}
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="000-1111"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
          {fieldErrors.postalCode && (
            <p className="mt-1 pl-4 text-[12px] text-[#F7CD4A]">
              {fieldErrors.postalCode}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="address" className="pl-4">
            住所<span className="ml-2 text-[#F7CD4A]">※</span>
          </label>
          <div className="mt-1">
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              placeholder="愛媛県新居浜0-0-0 グランメゾン000"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
          {fieldErrors.address && (
            <p className="mt-1 pl-4 text-[12px] text-[#F7CD4A]">{fieldErrors.address}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="pl-4">
            メールアドレス<span className="ml-2 text-[#F7CD4A]">※</span>
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sample@sample.com"
              className="h-10 w-full border-b border-l border-white px-4 md:h-11"
            />
          </div>
          {fieldErrors.email && (
            <p className="mt-1 pl-4 text-[12px] text-[#F7CD4A]">{fieldErrors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="inquiryCategory" className="pl-4">
            お問い合わせ項目<span className="ml-2 text-[#F7CD4A]">※</span>
          </label>
          <div className="mt-1">
            <select
              id="inquiryCategory"
              name="inquiryCategory"
              value={formData.inquiryCategory}
              onChange={handleChange}
              className="h-10 w-full border-b border-l border-white bg-[#03234E] px-4 md:h-11"
            >
              <option value="">選択してください</option>
              <option value="お見積もりのご相談について">
                お見積もりのご相談について
              </option>
              <option value="採用募集について">採用募集について</option>
              <option value="施工後のご相談について">
                施工後のご相談について
              </option>
            </select>
          </div>
          {fieldErrors.inquiryCategory && (
            <p className="mt-1 pl-4 text-[12px] text-[#F7CD4A]">
              {fieldErrors.inquiryCategory}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="inquiryBody" className="pl-4">
            お問い合わせ内容<span className="ml-2 text-[#F7CD4A]">※</span>
          </label>
          <div className="mt-1">
            <textarea
              id="inquiryBody"
              name="inquiryBody"
              value={formData.inquiryBody}
              onChange={handleChange}
              placeholder="サービス内容についてお聞かせください"
              cols={50}
              rows={5}
              className="w-full border-b border-l border-white px-4"
            ></textarea>
          </div>
          {fieldErrors.inquiryBody && (
            <p className="mt-1 pl-4 text-[12px] text-[#F7CD4A]">
              {fieldErrors.inquiryBody}
            </p>
          )}
        </div>
        {message && (
          <p
            className={`text-center text-[12px] md:text-[14px] ${
              isSuccess ? 'text-[#F7CD4A]' : 'text-[#ff9f9f]'
            }`}
          >
            {message}
          </p>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="flex h-[60px] w-[192px] items-center justify-center border border-white text-[16px] disabled:opacity-60 md:text-[18px]"
          >
            {loading ? '送信中...' : '送信する'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
