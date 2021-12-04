import {
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from 'next';
import { FC } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { PostEntries } from '../../components/home/PostEntries';
import { siteMetadata } from '../../config/siteMetadata';
import { Post } from '../../entities/Post';
import { SeoMetadata } from '../../entities/SeoMetadata';
import { Tag } from '../../entities/Tag';
import { sortPostsByDateDesc } from '../../lib/sort';
import { usecases } from '../../usecases/UsecaseContainer';

type TagPostsPageProps = {
    posts: Post[];
    tags: Tag[];
    seoMetadata: SeoMetadata;
};

const TagPostsPage: FC<TagPostsPageProps> = ({ posts, tags, seoMetadata }) => (
    <Layout tags={tags} seoMetadata={seoMetadata}>
        <PostEntries posts={posts} />
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
            posts: posts,
            tags: tags,
            seoMetadata: siteMetadata,
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
