import { SeoMetadata } from '@/types';
import { Locale } from './i18n';

export const siteMetadata: Record<Locale, SeoMetadata> = {
  ja: {
    title: 'みどりのさるのエンジニア',
    author: 't-yng',
    description:
      '日々の技術的な学びや調査内容などを書き留めている備忘録ブログです',
    url: 'https://t-yng.jp',
  },
  en: {
    title: 'Green Engineer',
    author: 't-yng',
    description:
      'A personal memo blog where I write down daily technical learnings and research.',
    url: 'https://t-yng.jp/en',
  },
};
