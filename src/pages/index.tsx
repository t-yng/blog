import { FC } from 'react';
import { GetStaticPropsResult } from 'next';
import { Layout } from '../components/Layout';
import { PostEntry } from '../components/PostEntry';
import { Seo } from '../components/Seo';
import { Post } from '../entities/Post';
import { usecases } from '../usecases/UsecaseContainer';
import { Tag } from '../entities/Tag';
import { siteMeatadata } from '../constants/siteMetadata';

type IndexPageProps = {
    posts: Post[];
    tags: Tag[];
};

const IndexPage: FC<IndexPageProps> = ({ posts, tags }) => {
    return (
        <Layout tags={tags}>
            <Seo
                title={siteMeatadata.title}
                description={siteMeatadata.description}
                author={siteMeatadata.author}
            />
            {posts.map(post => (
                <PostEntry
                    key={post.id}
                    id={post.id}
                    slug={post.slug}
                    frontmatter={{
                        date: post.date,
                        title: post.title,
                        tags: post.tags,
                    }}
                />
            ))}
        </Layout>
    );
};

export default IndexPage;

export const getStaticProps = async (): Promise<
    GetStaticPropsResult<IndexPageProps>
> => {
    const posts = usecases.getAllPosts.invoke();
    const tags = usecases.getGroupedTags.invoke();

    return {
        props: { posts, tags },
    };
};
