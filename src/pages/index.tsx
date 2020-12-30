import React, { FC } from 'react';
import { GetStaticPropsResult } from 'next';
import { Layout } from '../components/common/Layout/Layout';
import { Seo } from '../components/common/Seo/Seo';
import { Post } from '../entities/Post';
import { usecases } from '../usecases/UsecaseContainer';
import { Tag } from '../entities/Tag';
import { siteMeatadata } from '../constants/siteMetadata';
import { PostEntries } from '../components/home/PostEntries/PostEntries';

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
            <PostEntries posts={posts} />
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
