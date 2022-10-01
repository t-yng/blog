import { FC, useEffect } from 'react';
import Prism from 'prismjs';
import * as style from './Code.css';

type CodeProps = {
    code: string;
    language?: string;
};

export const Code: FC<CodeProps> = ({ code, language = '' }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre className={style.pre}>
            <code className={`language-${language} ${style.code}`}>{code}</code>
        </pre>
    );
};
