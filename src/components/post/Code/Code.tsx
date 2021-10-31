import { FC, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { css } from '@emotion/react';

const style = {
    pre: css`
        font-size: inherit !important;
        background: hsl(233deg 16% 22%) !important;
    `,
    code: css`
        font-size: inherit !important;
        font-family: '"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace' !important;
    `,
};

type CodeProps = {
    code: string;
    language?: string;
};

export const Code: FC<CodeProps> = ({ code, language = '' }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre css={style.pre}>
            <code className={`language-${language}`} css={style.code}>
                {code}
            </code>
        </pre>
    );
};
