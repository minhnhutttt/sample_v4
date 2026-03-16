'use client'

import Script from 'next/script';

export default function CuratorFeed() {
  return (
    <div className="w-full">
      <div id="curator-feed-default-feed-layout">
        <a
          href="https://curator.io"
          target="_blank"
          className="crt-logo crt-tag"
        >
          Powered by Curator.io
        </a>
      </div>

      <Script
        src="https://cdn.curator.io/published/b0e5ed62-6579-44aa-8f5b-e119fdd8d7b3.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
