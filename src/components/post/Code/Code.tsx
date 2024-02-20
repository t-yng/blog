import { FC, useEffect } from 'react';
import Prism from 'prismjs';
import { css } from '@/styled-system/css';

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

const pre = css({
  fontSize: 'inherit !important',
  background: 'hsl(233deg 16% 22%) !important',
});

const codeCss = css({
  fontSize: 'inherit !important',
  fontFamily:
    "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace !important",
});
