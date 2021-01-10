import React, { FC } from 'react';
import {
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from 'next';
import { css } from '@emotion/react';
import { Layout } from '../../components/common/Layout';
import { Pagination } from '../../components/home/Pagination';
import { PostEntries } from '../../components/home/PostEntries';
import { POST_COUNT_PER_PAGE, MIDDLE_PAGES } from '../../constants/pagination';
import { siteMeatadata } from '../../config/siteMetadata';
import { Post } from '../../entities/Post';
import { Tag } from '../../entities/Tag';
import { sortPostsByDateDesc } from '../../lib/sort';
import { usecases } from '../../usecases/UsecaseContainer';
import { range } from '../../lib/array';
import { SeoMetadata } from '../../entities/SeoMetadata';

const style = {
    postEntries: css`
        margin-bottom: 2rem;
    `,
};

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
            <PostEntries posts={posts} css={style.postEntries} />
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
        numPages: Math.ceil(posts.length / POST_COUNT_PER_PAGE),
        middleNumPages: MIDDLE_PAGES,
    };

    return {
        props: {
            posts: posts.slice(
                (page - 1) * POST_COUNT_PER_PAGE,
                page * POST_COUNT_PER_PAGE
            ),
            tags,
            pagination,
            seoMetadata: siteMeatadata,
        },
    };
};

export const getStaticPaths = async (): Promise<
    GetStaticPathsResult<UrlQuery>
> => {
    const posts = sortPostsByDateDesc(usecases.getAllPosts.invoke());
    const numPages = Math.ceil(posts.length / POST_COUNT_PER_PAGE);
    const pages = range(2, numPages);

    return {
        paths: pages.map(page => ({
            params: {
                page: page.toString(),
            },
        })),
        fallback: false,
    };
};
