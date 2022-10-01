import { AppProps } from 'next/app';
import { usePageTracking } from '@/hooks/usePageTracking';

const App = ({ Component, pageProps }: AppProps) => {
    usePageTracking();

    return <Component {...pageProps} />;
};

export default App;
