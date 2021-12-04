import { render } from '@testing-library/react';
import React from 'react';
import { Seo, SeoProps } from './Seo';

// next/headは非同期で描画される仕様なので、テスト用に同期的に子要素を描画するようにモックする
// @see: https://github.com/vercel/next.js/discussions/11060#discussioncomment-127539
jest.mock('next/head', () => {
    return {
        __esModule: true,
        default: ({ children }: { children: React.ReactElement }) => {
            return <>{children}</>;
        },
    };
});

describe('Seo', () => {
    const title = 'page title';
    const description = 'page description';
    const author = 'page author';

    const renderSeo = (props: SeoProps) => {
        return render(<Seo {...{ ...props }} />, { container: document.head });
    };

    it('render title', async () => {
        renderSeo({ title, description, author });

        const titleElement = document.querySelector('title');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent(title);
    });

    it('render description', async () => {
        renderSeo({ title, description, author });

        const meta = document.querySelector('meta[name="description"]');
        expect(meta).toBeInTheDocument();
        expect(meta).toHaveAttribute('content', description);
    });

    it('render author', async () => {
        renderSeo({ title, description, author });

        const meta = document.querySelector('meta[name="author"]');
        expect(meta).toBeInTheDocument();
        expect(meta).toHaveAttribute('content', author);
    });
});
