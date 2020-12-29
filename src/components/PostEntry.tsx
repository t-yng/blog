import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Link } from './Common/Link';
import { Tags } from './Tags';
import { colors } from '../styles/color';

interface PostEntryProps {
    id: string;
    excerpt: string;
    slug: string;
    frontmatter: {
        date: string;
        title: string;
        tags: string[];
    };
}

const style = {
    postEntry: css`
        background-color: ${colors.white};
        border: 1px solid ${colors.black6};
        padding: 1rem;
        margin-bottom: 2rem;
    `,
    date: css`
        color: ${colors.black3};
        font-size: 0.85rem;
    `,
    border: css`
        margin: 10px 0;
        border: none;
        height: 1px;
        background-color: ${colors.black4};
    `,
    excerpt: css`
        margin-bottom: 1.125rem;
    `,
    footer: css`
        display: flex;
        justify-content: space-between;
    `,
};

export const PostEntry: FC<PostEntryProps> = props => (
    <div key={props.id} css={style.postEntry}>
        <Link href={`/posts/${props.slug}`} decoration={false}>
            <h2>{props.frontmatter.title}</h2>
        </Link>
        <div css={style.date}>{props.frontmatter.date}</div>
        <hr css={style.border}></hr>
        <div css={style.excerpt}>{props.excerpt}</div>
        <div css={style.footer}>
            <Tags tags={props.frontmatter.tags} />
            <Link href={`/posts/${props.slug}`}>記事の続きを読む</Link>
        </div>
    </div>
);
