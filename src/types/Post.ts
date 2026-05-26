import type { Locale } from '@/config/i18n';

export type Post = {
  id: string;
  slug: string;
  // ISO 8061 format
  // 例: 2020-04-30T00:00:00.000Z
  date: string;
  title: string;
  description: string;
  tags: string[];
  author: string;
  content: string;
  lang: Locale;
};
