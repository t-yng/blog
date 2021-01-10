import { render, screen } from '@testing-library/react';
import { TITLE_LOGO_IMAGE_ALT, TITLE_LOGO_IMAGE_URL } from '../../../constants';
import { GlobalHeaderMain } from './GlobalHeaderMain';

describe('GlobalHeaderMain', () => {
    it('renders title logo', () => {
        render(<GlobalHeaderMain />);
        const image = screen.queryByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', TITLE_LOGO_IMAGE_URL);
    });

    describe('title logo', () => {
        it('link to index page', () => {
            render(<GlobalHeaderMain />);
            const logo = screen.queryByRole('link');
            expect(logo).toHaveAttribute('href', '/');
        });

        it('has alt attribute', () => {
            render(<GlobalHeaderMain />);
            const logo = screen.queryByRole('img');
            expect(logo).toHaveAttribute('alt', TITLE_LOGO_IMAGE_ALT);
        });
    });
});
