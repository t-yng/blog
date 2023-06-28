import { FC, useEffect } from 'react';
import Prism from 'prismjs';
import { css } from '@linaria/core';

type CodeProps = {
  code: string;
  language?: string;
};

export const Code: FC<CodeProps> = ({ code, language = '' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={pre}>
      <code className={`language-${language} ${codeCss}`}>{code}</code>
    </pre>
  );
};

const pre = css`
  font-size: inherit !important;
  background: hsl(233deg 16% 22%) !important;
`;

const codeCss = css`
  font-size: inherit !important;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace !important;
`;
