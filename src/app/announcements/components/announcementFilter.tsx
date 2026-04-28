'use client';

import { useCallback, useTransition } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CATEGORY_OPTIONS = [
  { label: '全て', value: '' },
  { label: 'アップデート', value: 'アップデート' },
  { label: '使い方', value: '使い方' },
  { label: 'プレスリリース', value: 'プレスリリース' },
  { label: '事例', value: '事例' },
  { label: '運営ブログ', value: '運営ブログ' },
];

const QUICK_BUTTONS = [
  { label: 'アップデート', value: 'アップデート' },
  { label: '使い方', value: '使い方' },
  { label: 'プレスリリース', value: 'プレスリリース' },
];

export function AnnouncementFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentCategory = searchParams.get('category') ?? '';
  const currentSearch = searchParams.get('q') ?? '';

  const buildUrl = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      params.delete('page');

      return `${pathname}?${params.toString()}`;
    },
    [searchParams, pathname],
  );

  const handleCategorySelect = (value: string) => {
    startTransition(() => {
      router.push(buildUrl({ category: value }), { scroll: false });
    });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = (e.currentTarget.elements.namedItem('q') as HTMLInputElement)
      .value;
    startTransition(() => {
      router.push(buildUrl({ q }), { scroll: false });
    });
  };

  return (
    <div
      className={`border-y border-black/20 transition-opacity duration-200 ${
        isPending ? 'pointer-events-none opacity-60' : ''
      }`}
    >
      <div className="mx-auto grid w-full divide-y divide-black/20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {/* ── Col 1: Category select ── */}
        <div className="p-5">
          <div className="relative mx-auto flex items-center text-[16px] max-lg:max-w-[480px]">
            <select
              className="h-16 w-full cursor-pointer appearance-none rounded-2xl border border-black bg-[#FAF2E8] px-5 focus:ring-2 focus:ring-black/20 focus:outline-none md:h-20"
              value={currentCategory}
              onChange={(e) => handleCategorySelect(e.target.value)}
            >
              {CATEGORY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-5 h-3 w-auto"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="stroke-current"
                d="M17.6631 2.06908L9.56173 9.90039L2.00046 2.06908"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>

        {/* ── Col 2: Quick category buttons ── */}
        <div className="p-5">
          <div className="mx-auto grid h-16 grid-cols-3 divide-x divide-black overflow-hidden rounded-2xl border border-black text-[14px] max-lg:max-w-[480px] md:h-20 xl:text-[16px]">
            {QUICK_BUTTONS.map((btn) => {
              const isActive = currentCategory === btn.value;
              return (
                <button
                  key={btn.value}
                  type="button"
                  onClick={() =>
                    handleCategorySelect(isActive ? '' : btn.value)
                  }
                  className={`h-full px-2 font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-black text-white'
                      : 'bg-[#FAF2E8] text-black hover:bg-black/5'
                  } `}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Col 3: Search ── */}
        <div className="p-5">
          <form
            onSubmit={handleSearch}
            className="relative mx-auto flex items-center max-lg:max-w-[480px]"
          >
            <input
              type="text"
              name="q"
              defaultValue={currentSearch}
              className="h-16 w-full rounded-2xl border border-black px-5 pr-14 focus:ring-2 focus:ring-black/20 focus:outline-none md:h-20"
              placeholder="Search:"
            />
            <button
              type="submit"
              className="absolute right-5 flex items-center justify-center transition-opacity hover:opacity-60"
              aria-label="検索"
            >
              <svg
                className="h-8 md:h-10"
                viewBox="0 -960 960 960"
                fill="#000000"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
