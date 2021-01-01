import {
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from 'next';
import React, { FC } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { PostEntries } from '../../components/home/PostEntries';
import { Post } from '../../entities/Post';
import { Tag } from '../../entities/Tag';
import { sortPostsByDateDesc } from '../../lib/sort';
import { usecases } from '../../usecases/UsecaseContainer';

type TagPostsPageProps = {
    posts: Post[];
    tags: Tag[];
};

const TagPostsPage: FC<TagPostsPageProps> = ({ posts, tags }) => (
    <Layout tags={tags}>
        <PostEntries posts={posts} />
    </Layout>
);

export default TagPostsPage;

type Params = {
    tag: string;
};

export const getStaticProps: GetStaticProps<
    TagPostsPageProps,
    Params
> = async ({ params }): Promise<GetStaticPropsResult<TagPostsPageProps>> => {
    console.log(params);
    const tag = params?.tag!;
    const posts = sortPostsByDateDesc(usecases.getPostsByTag.invoke(tag));
    const tags = usecases.getGroupedTags.invoke();

    return {
        props: {
            posts: posts,
            tags: tags,
        },
    };
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
    const tags = usecases.getGroupedTags.invoke();

    return {
        paths: tags.map(tag => ({
            params: {
                tag: tag.name.toLowerCase(),
            },
        })),
        fallback: false,
    };
};
