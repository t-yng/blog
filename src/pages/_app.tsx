import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { HighlightInit } from '@highlight-run/next/highlight-init';
import { usePageTracking } from '@/hooks/usePageTracking';

const HIGH_LIGHT_INIT_PROJECT_ID = 'mem8kyg2';

const App = ({ Component, pageProps }: AppProps) => {
  usePageTracking();
  const router = useRouter();

  const handleRouteChange = () => {
    const body = document.querySelector('body');
    body?.focus();
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <HighlightInit
        projectId={HIGH_LIGHT_INIT_PROJECT_ID}
        tracingOrigins
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
