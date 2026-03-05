'use client';

import { forwardRef } from 'react';

import { LogoItem } from '@/types';

interface LogoCardProps {
  logo: LogoItem;
  className?: string;
}

const LogoCard = forwardRef<HTMLDivElement, LogoCardProps>(
  ({ logo, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`logo-card relative flex h-[16rem] items-center justify-center overflow-hidden rounded-2xl border border-[#e0d8cf] bg-[#f8f3ed] px-3 py-4 font-bold text-black opacity-0 transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-[#c8bdb4] hover:shadow-[0_10px_32px_rgba(0,0,0,0.07)] ${className}`}
      >
        {/* shimmer overlay */}
        <div
          className="h4 pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center rounded-[inherit]"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.32) 0%, transparent 55%)',
          }}
        >
          {logo.name}
        </div>
      </div>
    );
  },
);

LogoCard.displayName = 'LogoCard';
export default LogoCard;
