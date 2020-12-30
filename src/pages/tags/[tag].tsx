import { useTheme } from '@emotion/react';
import {
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from 'next';
import React, { FC } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { PostEntry } from '../../components/home/PostEntry/PostEntry';
import { Post } from '../../entities/Post';
import { Tag } from '../../entities/Tag';
import { usecases } from '../../usecases/UsecaseContainer';

type TagPostsPageProps = {
    posts: Post[];
    tags: Tag[];
};

const TagPostsPage: FC<TagPostsPageProps> = ({ posts, tags }) => (
    <Layout tags={tags}>
        {posts.map(post => (
            <PostEntry
                key={post.id}
                post={post}
            />
        ))}
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
    const posts = usecases.getPostsByTag.invoke(tag);
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
