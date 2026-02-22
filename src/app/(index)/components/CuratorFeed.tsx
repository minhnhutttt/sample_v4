'use client';

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
        src="https://cdn.curator.io/published/39bc14f9-0359-4f44-9980-ef6864ff5647.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
