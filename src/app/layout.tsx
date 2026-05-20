import '@/styles/global.css';
import { Metadata } from 'next';
import Script from 'next/script';
import { gtagJsUrl, trackingCode } from '@/lib/gtag';
import { siteMetadata } from '@/config/siteMetadata';
export const metadata: Metadata = {
  metadataBase: new URL('https://t-yng.jp'),
  title: siteMetadata.title,
  authors: { name: siteMetadata.author },
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
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
