import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/config/i18n';
import { LangAttributeSetter } from '@/components/LangAttributeSetter';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <>
      <LangAttributeSetter lang={lang} />
      {children}
    </>
  );
}
