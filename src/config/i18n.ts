export type Locale = 'ja' | 'en';

export const locales = ['ja', 'en'] as const;
export const defaultLocale: Locale = 'ja';

export const messages = {
  ja: {
    postsTitle: '記事一覧',
    tagPostsTitle: (tag: string) => `${tag}の記事一覧`,
    postsPageTitle: (page: number) => `記事一覧 ${page}ページ目`,
  },
  en: {
    postsTitle: 'Posts',
    tagPostsTitle: (tag: string) => `${tag} posts`,
    postsPageTitle: (page: number) => `Posts page ${page}`,
  },
} as const;
