import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/config/i18n';
import { siteMetadata } from '@/config/siteMetadata';
import { LangAttributeSetter } from '@/components/LangAttributeSetter';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = locales.includes(lang as Locale) ? (lang as Locale) : 'ja';
  const meta = siteMetadata[locale];
  return {
    title: {
      default: meta.title,
      template: `%s | ${meta.title}`,
    },
    authors: { name: meta.author },
    description: meta.description,
  };
}

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
