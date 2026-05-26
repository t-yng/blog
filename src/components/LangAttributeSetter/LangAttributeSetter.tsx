'use client';

import { useEffect } from 'react';

type Props = {
  lang: string;
};

// Updates <html lang> at runtime. Needed because Next.js requires <html> in the
// root layout which doesn't have access to [lang] route params.
export const LangAttributeSetter = ({ lang }: Props) => {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
};
