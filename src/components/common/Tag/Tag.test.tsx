import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
    it('renders tag name', () => {
        const tagName = 'test';
        render(<Tag name={tagName} />);
        expect(screen.queryByText(tagName)).toBeInTheDocument();
    });

    it('renders link to tag page', () => {
        const tagName = 'test';
        render(<Tag name={tagName} />);

        const link = screen.queryByRole('link');
        expect(link).toHaveAttribute('href', `/tag/${tagName}`);
    });
});
