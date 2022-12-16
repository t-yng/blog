import { FC } from 'react';
import {
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from 'next';
import { Layout } from '@/components/common';
import { Pagination, PostEntries } from '@/components/home';
import {
    PAGINATION_POST_COUNT_PER_PAGE,
    PAGINATION_MIDDLE_PAGES,
} from '@/constants';
import { siteMetadata } from '@/config/siteMetadata';
import { Post, Tag, SeoMetadata } from '@/entities';
import { sortPostsByDateDesc } from '@/lib/sort';
import { range } from '@/lib/array';
import { usecases } from '@/usecases/UsecaseContainer';
import * as style from './[page].css';

type PagePageProps = {
    posts: Post[];
    tags: Tag[];
    seoMetadata: SeoMetadata;
    pagination: {
        currentPage: number;
        numPages: number;
        middleNumPages: number;
    };
};

const IndexPage: FC<PagePageProps> = ({
    posts,
    tags,
    pagination,
    seoMetadata,
}) => {
    return (
        <Layout tags={tags} seoMetadata={seoMetadata}>
            <PostEntries posts={posts} className={style.postEntries} />
            <Pagination {...pagination} />
        </Layout>
    );
};

export default IndexPage;

type UrlQuery = {
    page: string;
};

export const getStaticProps: GetStaticProps<PagePageProps, UrlQuery> = async ({
    params,
}): Promise<GetStaticPropsResult<PagePageProps>> => {
    const page = Number(params?.page);
    const posts = sortPostsByDateDesc(usecases.getAllPosts.invoke());
    const tags = usecases.getGroupedTags.invoke();
    const pagination = {
        currentPage: page,
        numPages: Math.ceil(posts.length / PAGINATION_POST_COUNT_PER_PAGE),
        middleNumPages: PAGINATION_MIDDLE_PAGES,
    };

    return {
        props: {
            posts: posts.slice(
                (page - 1) * PAGINATION_POST_COUNT_PER_PAGE,
                page * PAGINATION_POST_COUNT_PER_PAGE
            ),
            tags,
            pagination,
            seoMetadata: {
                ...siteMetadata,
                title: `記事一覧 ${page}ページ目 | ${siteMetadata.title}`,
            },
        },
    };
};

export const getStaticPaths = async (): Promise<
    GetStaticPathsResult<UrlQuery>
> => {
    const posts = sortPostsByDateDesc(usecases.getAllPosts.invoke());
    const numPages = Math.ceil(posts.length / PAGINATION_POST_COUNT_PER_PAGE);
    const pages = range(2, numPages);

    return {
        paths: pages.map((page) => ({
            params: {
                page: page.toString(),
            },
        })),
        fallback: false,
    };
};
