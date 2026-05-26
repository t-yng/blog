import { Metadata } from 'next';
import Script from 'next/script';
import { gtagJsUrl, trackingCode } from '@/lib/gtag';
import type { ReactNode } from 'react';
import '@/styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://t-yng.jp'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script defer src={gtagJsUrl} />
          <Script
            dangerouslySetInnerHTML={{
              __html: trackingCode,
            }}
          />
        </>
      )}
      <body tabIndex={-1}>{children}</body>
    </html>
  );
}
