import { css } from 'linaria';
import { PostRepository } from '@/repositories';
import { PostEntriesTabs } from './_components/PostEntriesTabs';

export const metadata = {
  title: 'ブログの管理画面 | みどりのさるのエンジニア',
  robots: 'noindex,nofollow,noarchive',
};

const getAllPosts = async () => {
  const postRepository = new PostRepository();
  const posts = postRepository.getAllPostEntries();
  return { posts };
};

export default async function AdminPage() {
  const { posts } = await getAllPosts();

  return (
    <section className={tabsSection}>
      <PostEntriesTabs posts={posts} className={tabs} />
    </section>
  );
}

const tabsSection = css`
  width: 800px;
  margin: 0 auto;
`;

const tabs = css`
  margin-top: 16px;
`;
