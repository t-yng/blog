import {
  PAGINATION_POST_COUNT_PER_PAGE,
  PAGINATION_MIDDLE_PAGES,
} from '@/constants';
import { sortPostsByDateDesc } from '@/lib/sort';
import { PostRepository, TagRepository } from '@/repositories';
import { GlobalHeader } from '@/components/GlobalHeader';
import { PostsPageBody } from '@/app/[lang]/(posts)/_components';
import { messages, type Locale } from '@/config/i18n';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function PostsHomePage({ params }: Props) {
  const { lang } = await params;

  const posts = sortPostsByDateDesc(new PostRepository().getAllPosts(lang));
  const tags = new TagRepository().getAllTags(lang);

  const pagination = {
    currentPage: 1,
    numPages: Math.ceil(posts.length / PAGINATION_POST_COUNT_PER_PAGE),
    middleNumPages: PAGINATION_MIDDLE_PAGES,
  };

  return (
    <>
      <GlobalHeader locale={lang} />
      <PostsPageBody
        title={messages[lang].postsTitle}
        posts={posts.slice(0, PAGINATION_POST_COUNT_PER_PAGE)}
        tags={tags}
        pagination={pagination}
        locale={lang}
      />
    </>
  );
}
