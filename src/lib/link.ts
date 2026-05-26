import type { Locale } from '@/config/i18n';

export const createTagLink = (tag: string, locale: Locale = 'ja') =>
  `/${locale}/tag/${tag.toLowerCase()}`;

export const createPageLink = (page: number, locale: Locale = 'ja') =>
  page === 1 ? `/${locale}` : `/${locale}/page/${page}`;

export const createPostLink = (slug: string, locale: Locale = 'ja') =>
  `/${locale}/post/${slug}`;
