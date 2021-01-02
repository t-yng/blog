import { render, screen } from '@testing-library/react';
import { PageItem } from './PageItem';

describe('PageItem', () => {
    it('renders children', () => {
        render(<PageItem>5</PageItem>);
        expect(screen.queryByText('5')).toBeInTheDocument();
    });
});
