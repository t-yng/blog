import React, { FC } from 'react';
import {
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from 'next';
import { Layout } from '../../components/common/Layout/Layout';
import { Seo } from '../../components/common/Seo/Seo';
import { Post } from '../../components/post/Post';
import { Tag } from '../../entities/Tag';
import { Post as PostEntity } from '../../entities/Post';
import { usecases } from '../../usecases/UsecaseContainer';

type PostPageProps = {
    post: PostEntity;
    tags: Tag[];
};

const PostPage: FC<PostPageProps> = ({ post, tags }) => (
    <Layout tags={tags}>
        <Seo
            title={post.title}
            description={post.description}
            author={post.author}
        />
        <Post post={post} />
    </Layout>
);

export default PostPage;

type Params = {
    slug: string;
};

export const getStaticProps: GetStaticProps<PostPageProps, Params> = async (
    context
): Promise<GetStaticPropsResult<PostPageProps>> => {
    const post = usecases.getPostBySlug.invoke(context.params?.slug!);
    const tags = usecases.getGroupedTags.invoke();

    return {
        props: {
            post: post,
            tags: tags,
        },
    };
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
    const posts = usecases.getAllPosts.invoke();

    return {
        paths: posts.map(post => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    };
};
