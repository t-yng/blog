import Document, { Html, Head, Main, NextScript } from 'next/document';
import { gtagJsUrl, trackingCode } from '@/lib/gtag';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script defer src={gtagJsUrl} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: trackingCode,
                        }}
                    />
                </Head>
                <body tabIndex={-1}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
