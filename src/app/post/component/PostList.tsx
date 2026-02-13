'use client';

import { useState } from 'react';


const PostList = () => {
  const [tab, setTab] = useState<'all' | 'security' | 'update' | 'notice'>(
    'all',
  );
  return (
    <div className="mt-25 flex justify-center gap-20 md:mt-[140px]">
      <button
        className={`border-b-[3px] text-[18px] font-medium md:text-[30px] ${tab === 'all' ? 'border-[#F78629] text-[#F78629]' : 'border-transparent text-white'}`}
        onClick={() => setTab('all')}
      >
        すべての記事
      </button>
      <button
        className={`border-b-[3px] text-[18px] font-medium md:text-[30px] ${tab === 'security' ? 'border-[#F78629] text-[#F78629]' : 'border-transparent text-white'}`}
        onClick={() => setTab('security')}
      >
        セキュリティ
      </button>
      <button
        className={`border-b-[3px] text-[18px] font-medium md:text-[30px] ${tab === 'update' ? 'border-[#F78629] text-[#F78629]' : 'border-transparent text-white'}`}
        onClick={() => setTab('update')}
      >
        アップデート
      </button>
      <button
        className={`border-b-[3px] text-[18px] font-medium md:text-[30px] ${tab === 'notice' ? 'border-[#F78629] text-[#F78629]' : 'border-transparent text-white'}`}
        onClick={() => setTab('notice')}
      >
        お知らせ
      </button>
    </div>
  );
};

export default PostList;
