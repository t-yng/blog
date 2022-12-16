import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('Common/Link', () => {
    it('render text link', () => {
        const href = '/test';
        const text = 'Test';
        render(<Link href={href}>{text}</Link>);

        const link = screen.queryByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', href);
        expect(screen.queryByText(text)).toBeInTheDocument();
    });

    it('render passed aProps', () => {
        const title = 'test title';
        render(<Link href="/test" title={title} />);
        const link = screen.queryByRole('link');
        expect(link).toHaveAttribute('title', title);
    });
});
