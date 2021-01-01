import React, { FC } from 'react';
import { GetStaticPropsResult } from 'next';
import { css } from '@emotion/react';
import { Layout } from '../components/common/Layout/Layout';
import { Post } from '../entities/Post';
import { usecases } from '../usecases/UsecaseContainer';
import { Tag } from '../entities/Tag';
import { siteMeatadata } from '../constants/siteMetadata';
import { PostEntries } from '../components/home/PostEntries/PostEntries';
import { Pagination } from '../components/home/Pagination';
import { MIDDLE_PAGES, POST_COUNT_PER_PAGE } from '../constants/pagination';
import { sortPostsByDateDesc } from '../lib/sort';
import { SeoMetadata } from '../entities/SeoMetadata';

const style = {
    postEntries: css`
        margin-bottom: 2rem;
    `,
};

type IndexPageProps = {
    posts: Post[];
    tags: Tag[];
    seoMetadata: SeoMetadata;
    pagination: {
        currentPage: number;
        numPages: number;
        middleNumPages: number;
    };
};

const IndexPage: FC<IndexPageProps> = ({
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

export const getStaticProps = async (): Promise<
    GetStaticPropsResult<IndexPageProps>
> => {
    const posts = sortPostsByDateDesc(usecases.getAllPosts.invoke());
    const tags = usecases.getGroupedTags.invoke();
    const pagination = {
        currentPage: 1,
        numPages: Math.ceil(posts.length / POST_COUNT_PER_PAGE),
        middleNumPages: MIDDLE_PAGES,
    };

    return {
        props: {
            posts: posts.slice(0, POST_COUNT_PER_PAGE),
            tags,
            pagination,
            seoMetadata: siteMeatadata,
        },
    };
};
