'use server';

import { AirtableContactFields, ContactFormInput } from '@/types/airtable';

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

const getField = (formData: FormData, key: string) =>
  String(formData.get(key) ?? '').trim();

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const buildAirtableContactFields = (
  input: ContactFormInput,
): AirtableContactFields => ({
  fldPA4mxyeU3Sn83W: input.companyName,
  fldc8AysdBhuzrvL1: input.departmentName,
  fld4105Bbg38AQutA: input.headquartersAddress,
  fldzmlAKykCD5kXw1: input.contactName,
  fldqPvCUiYdLvpYNS: input.email,
  fldkS4tGob7myl1L7: input.phone,
  fldL6mHvRBSTacohz: input.message,
  fld07FBRF6dJczOMd: '未対応',
});

export const submitContactToAirtable = async (formData: FormData) => {
  const input: ContactFormInput = {
    companyName: getField(formData, 'company_name'),
    headquartersAddress: getField(formData, 'head_office_address'),
    departmentName: getField(formData, 'department_name'),
    contactName: getField(formData, 'contact_name'),
    email: getField(formData, 'email'),
    phone: getField(formData, 'phone'),
    message: getField(formData, 'message'),
  };

  if (
    !input.headquartersAddress ||
    !input.contactName ||
    !input.email ||
    !input.phone ||
    !input.message ||
    !isValidEmail(input.email)
  ) {
    throw new Error('Invalid contact form values');
  }

  const apiUrl = process.env.AIRTABLE_API_URL;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;
  const apiKey = process.env.AIRTABLE_API_KEY;

  if (!apiUrl || !baseId || !tableId || !apiKey) {
    throw new Error('Airtable environment variables are missing');
  }

  const response = await fetch(`${apiUrl}/${baseId}/${tableId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [{ fields: buildAirtableContactFields(input) }],
      typecast: true,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Airtable request failed: ${response.status} ${errorText}`);
  }
};

export const submitContactToAirtableAction = async (
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const headquartersAddress = getField(formData, 'head_office_address');
  const contactName = getField(formData, 'contact_name');
  const email = getField(formData, 'email');
  const phone = getField(formData, 'phone');
  const message = getField(formData, 'message');

  if (!headquartersAddress || !contactName || !email || !phone || !message) {
    return { status: 'error', message: '必須項目を入力してください。' };
  }

  try {
    await submitContactToAirtable(formData);
    return { status: 'success', message: '送信が完了しました。' };
  } catch {
    return {
      status: 'error',
      message: '送信に失敗しました。時間をおいて再度お試しください。',
    };
  }
};
