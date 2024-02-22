import {
  PAGINATION_POST_COUNT_PER_PAGE,
  PAGINATION_MIDDLE_PAGES,
} from '@/constants';
import { sortPostsByDateDesc } from '@/lib/sort';
import { PostRepository, TagRepository } from '@/repositories';
import { GlobalHeader } from '@/components/common/GlobalHeader';
import { PostsPageBody } from './_components';

const getPosts = () => {
  const postsRepository: PostRepository = new PostRepository();
  return sortPostsByDateDesc(postsRepository.getAllPosts());
};

const getTags = () => {
  const tagRepository = new TagRepository();
  return tagRepository.getAllTags();
};

export default function HomePage() {
  const [posts, tags] = [getPosts(), getTags()];

  const pagination = {
    currentPage: 1,
    numPages: Math.ceil(posts.length / PAGINATION_POST_COUNT_PER_PAGE),
    middleNumPages: PAGINATION_MIDDLE_PAGES,
  };

  return (
    <>
      <GlobalHeader />
      <PostsPageBody
        title="記事一覧"
        posts={posts.slice(0, PAGINATION_POST_COUNT_PER_PAGE)}
        tags={tags}
        pagination={pagination}
      />
    </>
  );
}
