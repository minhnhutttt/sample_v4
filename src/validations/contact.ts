import { z } from 'zod';

export const ContactFormSchema = z.object({
  companyName: z.string().trim(),
  departmentName: z.string().trim(),
  name: z.string().trim().min(1, 'お名前は必須です'),
  postalCode: z
    .string()
    .trim()
    .min(1, '郵便番号は必須です')
    .regex(
      /^\d{3}-?\d{4}$/,
      '郵便番号は数字7桁（例: 0001111 または 000-1111）で入力してください',
    ),
  address: z.string().trim().min(1, '住所は必須です'),
  email: z
    .string()
    .trim()
    .min(1, 'メールアドレスは必須です')
    .email('メールアドレスの形式が正しくありません'),
  inquiryCategory: z.enum(
    ['お見積もりのご相談について', '採用募集について', '施工後のご相談について'],
    { message: 'お問い合わせ項目は必須です' },
  ),
  inquiryBody: z.string().trim().min(1, 'お問い合わせ内容は必須です'),
});

export type ContactFormValidatedInput = z.infer<typeof ContactFormSchema>;
