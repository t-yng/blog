import { AppProps } from 'next/app';
import { usePageTracking } from '@/hooks/usePageTracking';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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

    return <Component {...pageProps} />;
};

export default App;
