import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  TITLE_LOGO_IMAGE_ALT,
  TITLE_LOGO_IMAGE_URL,
  TITLE_LOGO_LINK_TITLE,
} from '@/constants';
import { GlobalHeader } from './GlobalHeader';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
}));

describe('GlobalHeader', () => {
  describe('title logo', () => {
    describe('link', () => {
      it('navigates to /ja by default', () => {
        render(<GlobalHeader locale="ja" />);
        const links = screen.queryAllByRole('link');
        expect(links[0]).toHaveAttribute('href', '/ja');
      });

      it('navigates to /en when locale is en', () => {
        render(<GlobalHeader locale="en" />);
        const links = screen.queryAllByRole('link');
        expect(links[0]).toHaveAttribute('href', '/en');
      });

      it('has title attribute', () => {
        render(<GlobalHeader locale="ja" />);
        const links = screen.queryAllByRole('link');
        expect(links[0]).toHaveAttribute('title', TITLE_LOGO_LINK_TITLE);
      });
    });

    describe('image', () => {
      it('render', () => {
        render(<GlobalHeader locale="ja" />);
        const image = screen.queryByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', TITLE_LOGO_IMAGE_URL);
      });

      it('has alt attribute', () => {
        render(<GlobalHeader locale="ja" />);
        const logo = screen.queryByRole('img');
        expect(logo).toHaveAttribute('alt', TITLE_LOGO_IMAGE_ALT);
      });
    });
  });
});
