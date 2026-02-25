'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const categories = [
  '試合',
  'チーム',
  'イベント',
  'ホームタウン',
  'パートナー',
  'メディア',
  'アカデミー',
  'その他',
];

const CategorySelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const current = searchParams.get('category') || '';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value) {
      router.push(`/news?category=${value}`);
    } else {
      router.push('/news');
    }
  };

  return (
    <select
      value={current}
      onChange={handleChange}
      className="h-8 w-full border border-black"
    >
      <option value="">すべて</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
