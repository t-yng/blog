import { render, screen } from '@testing-library/react';
import {
  TITLE_LOGO_IMAGE_ALT,
  TITLE_LOGO_IMAGE_URL,
  TITLE_LOGO_LINK_TITLE,
} from '../../../constants';
import { GlobalHeaderMain } from './GlobalHeaderMain';

describe('GlobalHeaderMain', () => {
  describe('title logo', () => {
    describe('link', () => {
      it('navigate to index page', () => {
        render(<GlobalHeaderMain />);
        const link = screen.queryByRole('link');
        expect(link).toHaveAttribute('href', '/');
      });

      it('has title attribute', () => {
        render(<GlobalHeaderMain />);
        const link = screen.queryByRole('link');
        expect(link).toHaveAttribute('title', TITLE_LOGO_LINK_TITLE);
      });
    });

    describe('image', () => {
      it('render', () => {
        render(<GlobalHeaderMain />);
        const image = screen.queryByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', TITLE_LOGO_IMAGE_URL);
      });

      it('has alt attribute', () => {
        render(<GlobalHeaderMain />);
        const logo = screen.queryByRole('img');
        expect(logo).toHaveAttribute('alt', TITLE_LOGO_IMAGE_ALT);
      });
    });
  });
});
