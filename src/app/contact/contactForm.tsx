'use client'

import { FormEventHandler, useActionState, useState } from 'react';

import {
  ContactFormState,
  submitContactToAirtableAction,
} from '@/services/airtable';

const initialState: ContactFormState = {
  status: 'idle',
  message: '',
};

type FieldErrors = {
  head_office_address?: string;
  contact_name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    submitContactToAirtableAction,
    initialState,
  );
  const [clientError, setClientError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const validateFieldErrors = (formData: FormData): FieldErrors => {
    const nextErrors: FieldErrors = {};

    const headquartersAddress = String(
      formData.get('head_office_address') ?? '',
    ).trim();
    const contactName = String(formData.get('contact_name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!headquartersAddress) {
      nextErrors.head_office_address = '住所を入力してください。';
    }
    if (!contactName) {
      nextErrors.contact_name = 'ご担当者名を入力してください。';
    }
    if (!email) {
      nextErrors.email = 'メールアドレスを入力してください。';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = '正しいメールアドレスを入力してください。';
    }
    if (!phone) {
      nextErrors.phone = '電話番号を入力してください。';
    }
    if (!message) {
      nextErrors.message = 'お問い合わせ内容を入力してください。';
    }

    return nextErrors;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const formData = new FormData(event.currentTarget);
    const nextErrors = validateFieldErrors(formData);
    const hasError = Object.keys(nextErrors).length > 0;

    if (hasError) {
      event.preventDefault();
      setFieldErrors(nextErrors);
      setClientError('');
      return;
    }

    setFieldErrors({});
    setClientError('');
  };

  const message = clientError || state.message;
  const isError = !!clientError || state.status === 'error';
  const isSuccess = !clientError && state.status === 'success';

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto w-full max-w-[880px] space-y-8 pt-20 md:space-y-[50px] md:pt-[120px]"
    >
      <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
        <label htmlFor="" className="md:w-50">
          貴社名
        </label>
        <div className="flex-1">
          <input
            type="text"
            name="company_name"
            className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
            placeholder="株式会社ABC"
          />
        </div>
      </div>
      <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
        <label htmlFor="" className="md:w-50">
          本社所在地の住所<span className="text-[#F70000]">(必須)</span>
        </label>
        <div className="flex-1">
          <input
            type="text"
            name="head_office_address"
            className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
            placeholder="〒840-0041 佐賀県佐賀市城内２丁目１８−１"
          />
          {fieldErrors.head_office_address && (
            <p className="mt-2 text-[13px] text-[#F70000] md:text-[14px]">
              {fieldErrors.head_office_address}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
        <label htmlFor="" className="md:w-50">
          部署名
        </label>
        <div className="flex-1">
          <input
            type="text"
            name="department_name"
            className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
            placeholder="営業部"
          />
        </div>
      </div>
      <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
        <label htmlFor="" className="md:w-50">
          ご担当者名<span className="text-[#F70000]">(必須)</span>
        </label>
        <div className="flex-1">
          <input
            type="text"
            name="contact_name"
            className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
            placeholder="山田　太郎"
          />
          {fieldErrors.contact_name && (
            <p className="mt-2 text-[13px] text-[#F70000] md:text-[14px]">
              {fieldErrors.contact_name}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
        <label htmlFor="" className="md:w-50">
          メールアドレス<span className="text-[#F70000]">(必須)</span>
        </label>
        <div className="flex-1">
          <input
            type="email"
            name="email"
            className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
            placeholder="123abc@123abc.com"
          />
          {fieldErrors.email && (
            <p className="mt-2 text-[13px] text-[#F70000] md:text-[14px]">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
        <label htmlFor="" className="md:w-50">
          電話番号<span className="text-[#F70000]">(必須)</span>
        </label>
        <div className="flex-1">
          <input
            type="tel"
            name="phone"
            className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
            placeholder="080-1234-5678"
          />
          {fieldErrors.phone && (
            <p className="mt-2 text-[13px] text-[#F70000] md:text-[14px]">
              {fieldErrors.phone}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
        <label htmlFor="" className="md:w-50">
          その他：お問い合わせ内容
          <span className="text-[#F70000]">(必須)</span>
        </label>
        <div className="flex-1">
          <textarea
            name="message"
            className="h-[230px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2 md:h-[372px]"
          ></textarea>
          {fieldErrors.message && (
            <p className="mt-2 text-[13px] text-[#F70000] md:text-[14px]">
              {fieldErrors.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center gap-4 md:mt-24">
        {message && (
          <p
            className={`text-center text-[14px] md:text-[16px] ${
              isSuccess ? 'text-[#0d7c2f]' : 'text-[#F70000]'
            } ${isError ? 'font-medium' : ''}`}
          >
            {message}
          </p>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="flex h-14 items-center justify-center gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white disabled:opacity-70 md:h-[70px] md:px-[30px] md:text-[20px]"
        >
          送信
          <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
            <img
              src="/assets/images/btn-arrow.svg"
              className="max-md:w-4"
              alt=""
            />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
