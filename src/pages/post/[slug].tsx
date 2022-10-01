import { FC } from 'react';
import {
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from 'next';
import { Layout } from '@/components/common';
import { Post } from '@/components/post/Post';
import { Tag, SeoMetadata, Post as PostEntity } from '@/entities';
import { usecases } from '@/usecases/UsecaseContainer';
import { siteMetadata } from '@/config/siteMetadata';

type PostPageProps = {
    post: PostEntity;
    tags: Tag[];
    seoMetadata: SeoMetadata;
};

const PostPage: FC<PostPageProps> = ({ post, tags, seoMetadata }) => (
    <Layout tags={tags} seoMetadata={seoMetadata}>
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
    if (context.params == null) {
        return {
            notFound: true,
        };
    }

    const post = usecases.getPostBySlug.invoke(context.params.slug);
    const tags = usecases.getGroupedTags.invoke();

    const title = `${post.title} - ${siteMetadata.title}`;
    // "/"が含まれているとエラーが発生するのでエスケープする
    // @see: https://support.cloudinary.com/hc/en-us/articles/202521512-How-to-add-a-slash-character-or-any-other-special-characters-in-text-overlays-
    const encodedPostTitle = encodeURIComponent(post.title).replace(
        /%2F/g,
        '%252F'
    );
    const ogpImage = `https://res.cloudinary.com/dspeq5lct/image/upload/l_text:MPLUSRounded1c-Bold.ttf_52:${encodedPostTitle},co_rgb:000,w_1020,c_fit,y_-100/v1638629595/blog-ogp.jpg`;
    const seoMetadata: SeoMetadata = {
        ...siteMetadata,
        title: title,
        description: post.description,
        author: post.author,
        ogp: {
            url: siteMetadata.url,
            type: 'article',
            title: title,
            description: post.description,
            siteName: siteMetadata.title,
            image: ogpImage,
        },
    };

    return {
        props: {
            post: post,
            tags: tags,
            seoMetadata,
        },
    };
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
    const posts = usecases.getAllPosts.invoke();

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    };
};
