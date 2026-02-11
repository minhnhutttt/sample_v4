import { z } from 'zod';

export const SampleSchema = z.object({
  email: z.string().trim().email('メールアドレスの形式が正しくありません'),
  password: z.string().min(8, 'パスワードは8文字以上で入力してください'),
});

export type SampleInput = z.infer<typeof SampleSchema>;
