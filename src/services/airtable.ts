'use server';

import type { ServerResponse } from '@/types';
import type {
  AirtableCreateContactResponse,
  AirtableContactFields,
  ContactFieldErrors,
  ContactFormInput,
  ContactFormSubmitInput,
  ContactSubmitResult,
} from '@/types/airtable';
import { ContactFormSchema } from '@/validations/contact';

const AIRTABLE_API_URL = process.env.AIRTABLE_API_URL;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

const normalizeInquiryCategory = (
  value: string,
): ContactFormInput['inquiryCategory'] => {
  const stripped = value
    .trim()
    .replace(/[\\'"`“”‘’「」『』]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (stripped.includes('お見積もり')) {
    return 'お見積もりのご相談について';
  }
  if (stripped.includes('採用募集')) {
    return '採用募集について';
  }
  if (stripped.includes('施工後')) {
    return '施工後のご相談について';
  }

  return stripped as ContactFormInput['inquiryCategory'];
};

export const createContactInquiry = async (
  payload: ContactFormSubmitInput,
): Promise<ServerResponse<AirtableCreateContactResponse>> => {
  if (
    !AIRTABLE_API_URL ||
    !AIRTABLE_BASE_ID ||
    !AIRTABLE_TABLE_ID ||
    !AIRTABLE_API_KEY
  ) {
    return { code: -1, data: null };
  }

  const fields: AirtableContactFields = {
    fldNoEVlZdhr5Hewl: payload.companyName || undefined,
    fldnpN2KiRc3d7Nqw: payload.departmentName || undefined,
    fldfutZWROnyiqpa6: payload.name,
    fld1E1gNSFDfggkXm: payload.postalCode,
    fldkZwRpu7FmsasA2: payload.address,
    fldfZtT6GiyB8o2Gl: payload.email,
    fldDpeLGtBHY2MtRT: payload.inquiryCategory,
    fldzt7cYRmHYIdpaA: payload.inquiryBody,
    fldEEdUsWyMpr3VAe: '未対応',
  };

  try {
    const response = await fetch(
      `${AIRTABLE_API_URL}/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields,
            },
          ],
        }),
        cache: 'no-store',
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Airtable Error:', errorText);
      return { code: -1, data: null };
    }

    const result: AirtableCreateContactResponse = await response.json();
    return { code: 0, data: result };
  } catch {
    return { code: -1, data: null };
  }
};

export const submitContactAction = async (
  payload: ContactFormInput,
): Promise<ContactSubmitResult> => {
  const normalizedPayload: ContactFormInput = {
    ...payload,
    inquiryCategory: normalizeInquiryCategory(payload.inquiryCategory),
  };

  const parsed = ContactFormSchema.safeParse(normalizedPayload);

  if (!parsed.success) {
    const fieldErrors: ContactFieldErrors = {};

    parsed.error.issues.forEach((issue) => {
      const fieldName = issue.path[0] as keyof ContactFormInput;
      if (!fieldErrors[fieldName]) {
        fieldErrors[fieldName] = issue.message;
      }
    });

    return {
      code: 1,
      message: '入力内容を確認してください',
      fieldErrors,
    };
  }

  const response = await createContactInquiry(parsed.data);

  if (response.code !== 0) {
    return {
      code: response.code,
      message: '送信に失敗しました。しばらくしてから再度お試しください。',
    };
  }

  return {
    code: 0,
    message: 'お問い合わせを送信しました。',
  };
};
