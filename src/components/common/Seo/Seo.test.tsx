import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Seo, SeoProps } from './Seo';

describe('Seo', () => {
    const title = 'page title';
    const description = 'page description';
    const author = 'page author';

    const renderSeo = (props: SeoProps) => {
        return render(<Seo {...{ ...props }} />);
    };

    it('render title', async () => {
        renderSeo({ title, description, author });

        await waitFor(() => {
            // react-helmetの仕様で非同期で描画されるので、documentオブジェクトで参照する
            const titleElement = document.querySelector('title');
            expect(titleElement).toBeInTheDocument();
            expect(titleElement).toHaveTextContent(title);
        });
    });

    it('render description', async () => {
        renderSeo({ title, description, author });

        await waitFor(() => {
            const meta = document.querySelector('meta[name="description"]');
            expect(meta).toBeInTheDocument();
            expect(meta).toHaveAttribute('content', description);
        });
    });

    it('render author', async () => {
        renderSeo({ title, description, author });

        await waitFor(() => {
            const meta = document.querySelector('meta[name="author"]');
            expect(meta).toBeInTheDocument();
            expect(meta).toHaveAttribute('content', author);
        });
    });
});
