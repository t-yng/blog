import { PageBody } from '@/components/PageBody';
import {
  PAGINATION_POST_COUNT_PER_PAGE,
  PAGINATION_MIDDLE_PAGES,
} from '@/constants';
import { sortPostsByDateDesc } from '@/lib/sort';
import { PostRepository, TagRepository } from '@/repositories';
import { Container } from '@/styled-system/jsx';
import { PostEntries, Pagination } from './_components';

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
    <PageBody title="記事一覧" tags={tags}>
      <Container mt="16px" mb="32px">
        <PostEntries posts={posts.slice(0, PAGINATION_POST_COUNT_PER_PAGE)} />
      </Container>
      <Pagination {...pagination} />
    </PageBody>
  );
}
