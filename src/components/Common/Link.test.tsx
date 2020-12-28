import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('Common/Link', () => {
    it('render link', () => {
        const href = '/test';
        const text = 'Test';
        render(<Link href={href} text={text} />);

        const link = screen.queryByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', href);
        expect(screen.queryByText(text)).toBeInTheDocument();
    });
});
