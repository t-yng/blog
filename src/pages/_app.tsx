import { AppProps } from 'next/app';
import { usePageTracking } from '../hooks/usePageTracking';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
    usePageTracking();

    return <Component {...pageProps} />;
};

export default App;
