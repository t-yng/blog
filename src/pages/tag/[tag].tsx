import {
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from 'next';
import { FC } from 'react';
import { Layout } from '@/components/common';
import { PostEntries } from '@/components/home';
import { siteMetadata } from '@/config/siteMetadata';
import { Post, SeoMetadata, Tag } from '@/entities';
import { sortPostsByDateDesc } from '@/lib/sort';
import { usecases } from '@/usecases/UsecaseContainer';
import { heading1 } from '@/styles/typography.css';
import * as style from './[tag].css';

type TagPostsPageProps = {
    tag: string;
    posts: Post[];
    tags: Tag[];
    seoMetadata: SeoMetadata;
};

const TagPostsPage: FC<TagPostsPageProps> = ({
    tag,
    posts,
    tags,
    seoMetadata,
}) => (
    <Layout tags={tags} seoMetadata={seoMetadata}>
        <h1 className={heading1}>{tag}の記事一覧</h1>
        <PostEntries posts={posts} className={style.postEntries} />
    </Layout>
);

export default TagPostsPage;

type Params = {
    tag: string;
};

export const getStaticProps: GetStaticProps<TagPostsPageProps, Params> = async (
    context
): Promise<GetStaticPropsResult<TagPostsPageProps>> => {
    if (context.params == null) {
        return {
            notFound: true,
        };
    }
    const tag = context.params.tag;
    const posts = sortPostsByDateDesc(usecases.getPostsByTag.invoke(tag));
    const tags = usecases.getGroupedTags.invoke();

    return {
        props: {
            tag: tag,
            posts: posts,
            tags: tags,
            seoMetadata: {
                ...siteMetadata,
                title: `${tag}の記事一覧 | ${siteMetadata.title}`,
            },
        },
    };
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
    const tags = usecases.getGroupedTags.invoke();

    return {
        paths: tags.map((tag) => ({
            params: {
                tag: tag.name.toLowerCase(),
            },
        })),
        fallback: false,
    };
};
