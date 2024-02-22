import '@/styles/global.css';
// import { Head } from 'next/document';
import { Metadata } from 'next';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
import { HighlightInit } from '@highlight-run/next/client';
import Script from 'next/script';
import { gtagJsUrl, trackingCode } from '@/lib/gtag';
// import { usePageTracking } from '@/hooks/usePageTracking';
import { siteMetadata } from '@/config/siteMetadata';

const HIGH_LIGHT_INIT_PROJECT_ID = 'mem8kyg2';

export const metadata: Metadata = {
  title: siteMetadata.title,
  authors: { name: siteMetadata.author },
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // usePageTracking();
  // const router = useRouter();

  // const handleRouteChange = () => {
  //   const body = document.querySelector('body');
  //   body?.focus();
  // };

  // useEffect(() => {
  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <html lang="ja">
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script defer src={gtagJsUrl} />
      <Script
        dangerouslySetInnerHTML={{
          __html: trackingCode,
        }}
      />
      <body tabIndex={-1}>
        <HighlightInit
          projectId={HIGH_LIGHT_INIT_PROJECT_ID}
          tracingOrigins
          networkRecording={{
            enabled: true,
            recordHeadersAndBody: true,
            urlBlocklist: [],
          }}
        />
        {children}
      </body>
    </html>
  );
}
