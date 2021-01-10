import { render, screen } from '@testing-library/react';
import { TITLE_LOGO_IMAGE_URL } from '../../../constants';
import { GlobalHeader } from './GlobalHeader';
import { GlobalHeaderMain } from './GlobalHeaderMain';

describe('GlobalHeader', () => {
    it('renders title logo', () => {
        render(<GlobalHeaderMain />);
        const image = screen.queryByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', TITLE_LOGO_IMAGE_URL);
    });

    describe('title logo', () => {
        it('link to index page', () => {
            render(<GlobalHeader />);
            const link = screen.queryByRole('link');
            expect(link).toHaveAttribute('href', '/');
        });
    });
});
