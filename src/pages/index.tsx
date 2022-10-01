import { FC } from 'react';
import { GetStaticPropsResult } from 'next';
import { Layout } from '@/components/common';
import { PostEntries, Pagination } from '@/components/home';
import { Post, Tag, SeoMetadata } from '@/entities';
import { usecases } from '@/usecases/UsecaseContainer';
import { siteMetadata } from '@/config/siteMetadata';
import {
    PAGINATION_MIDDLE_PAGES,
    PAGINATION_POST_COUNT_PER_PAGE,
} from '@/constants';
import { sortPostsByDateDesc } from '@/lib/sort';
import * as style from './index.css';

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
            <PostEntries posts={posts} className={style.postEntries} />
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
        numPages: Math.ceil(posts.length / PAGINATION_POST_COUNT_PER_PAGE),
        middleNumPages: PAGINATION_MIDDLE_PAGES,
    };

    return {
        props: {
            posts: posts.slice(0, PAGINATION_POST_COUNT_PER_PAGE),
            tags,
            pagination,
            seoMetadata: siteMetadata,
        },
    };
};
