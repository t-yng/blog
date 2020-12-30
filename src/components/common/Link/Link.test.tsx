import React from 'react';
import renderer from 'react-test-renderer';
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

    it('render children', () => {
        const Children = () => <img src="test.icon" />;
        const href = '/test';
        const root = renderer.create(
            <Link href={href}>
                <Children />
            </Link>
        ).root;

        expect(root.findByType(Children)).not.toBeNull();
    });
});
