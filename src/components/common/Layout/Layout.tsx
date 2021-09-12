import { FC } from 'react';
import { css } from '@emotion/react';
import { GlobalStyle } from '../../GlobalStyle';
import { GlobalHeader } from '../GlobalHeader';
import { Sidebar } from '../Sidebar';
import { profile } from '../../../config/profile';
import { Tag } from '../../../entities/Tag';
import { SeoMetadata } from '../../../entities/SeoMetadata';
import { Seo } from '../Seo';

export type LayoutProps = {
    tags: Tag[];
    seoMetadata: SeoMetadata;
};

const style = {
    main: css`
        display: grid;
        grid-template-columns: auto 240px;
        grid-gap: 3rem;
        margin: 0 auto;
        max-width: 1152px;
        padding: 2rem 20px;
        @media (max-width: 850px) {
            grid-template-columns: 1fr;
        }
    `,
    content: css`
        overflow: auto;
    `,
};

export const Layout: FC<LayoutProps> = ({ children, tags, seoMetadata }) => {
    return (
        <div>
            <Seo
                title={seoMetadata.title}
                description={seoMetadata.description}
                author={seoMetadata.author}
            />
            <GlobalStyle />
            <GlobalHeader />
            <main css={style.main}>
                <div css={style.content}>{children}</div>
                <Sidebar tags={tags} profile={profile} />
            </main>
        </div>
    );
};
