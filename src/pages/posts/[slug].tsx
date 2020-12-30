import React, { FC } from 'react';
import { css } from '@emotion/react';
import {
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from 'next';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import { Layout } from '../../components/Layout';
import { Tags } from '../../components/Tags';
import { Seo } from '../../components/Seo';
import { colors } from '../../styles/color';
import { Tag } from '../../entities/Tag';
import { usecases } from '../../usecases/UsecaseContainer';
import { Post } from '../../entities/Post';

const style = {
    post: css`
        background-color: ${colors.white};
        border: 1px solid ${colors.black6};
        padding: 1rem;
    `,
    header: css`
        margin-bottom: 2rem;
    `,
    title: css`
        margin-bottom: 0.75rem;
    `,
    content: css`
        h2,
        h3,
        h4 {
            margin-top: 2.5rem;
        }
        h2 {
            border-bottom: 0.5px solid ${colors.black4};
            padding-bottom: 0.5rem;
        }
        blockquote {
            border-left: 5px solid ${colors.black5};
            color: ${colors.black2};
            padding: 1rem;
            padding-right: 0;
            margin: 1.5rem 0;
        }
    `,
    image: css`
        max-width: 80%;
    `,
    picture: css`
        display: inline-block;
        text-align: center;
    `,
};

type PostPageProps = {
    post: Post;
    tags: Tag[];
};

const rederers: ReactMarkdownProps['renderers'] = {
    image: ({ src, alt }) => (
        <picture css={style.picture}>
            <img alt={alt} src={src} css={style.image} />
        </picture>
    ),
};

const PostPage: FC<PostPageProps> = ({ post, tags }) => (
    <Layout tags={tags}>
        <Seo
            title={post.title}
            description={post.description}
            author={post.author}
        />
        <div css={style.post}>
            <header css={style.header}>
                <h1 css={style.title}>{post.title}</h1>
                <Tags tags={post.tags} />
            </header>
            <ReactMarkdown
                css={style.content}
                renderers={rederers}
                children={post.content}
            />
        </div>
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
