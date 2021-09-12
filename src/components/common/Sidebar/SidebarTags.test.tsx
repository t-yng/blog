import { render, screen } from '@testing-library/react';
import { SidebarTags } from './SidebarTags';

describe('SidebarTags', () => {
    const tags = [
        {
            name: 'フロントエンド',
            count: 1,
        },
        {
            name: 'TypeScript',
            count: 2,
        },
        {
            name: 'サーバー',
            count: 1,
        },
    ];

    it('render tags sorted by count', () => {
        render(<SidebarTags tags={tags} />);

        const listItems = screen.queryAllByRole('listitem');
        expect(listItems.length).toBe(tags.length);

        // countで降順ソートされているか
        expect(listItems[0]).toHaveTextContent('TypeScript (2)');
        expect(listItems[1]).toHaveTextContent('フロントエンド (1)');
        expect(listItems[2]).toHaveTextContent('サーバー (1)');
    });
});
