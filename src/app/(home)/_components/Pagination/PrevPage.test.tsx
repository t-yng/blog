import { render, screen } from '@testing-library/react';
import { PrevPage } from './PrevPage';

describe('PageNumber', () => {
  it('renders link to / if page is first', () => {
    render(<PrevPage page={1} />);
    expect(screen.queryByRole('link')).toHaveAttribute('href', '/');
  });

  it('renders link to /page/[page] if page is not first', () => {
    render(<PrevPage page={3} />);
    expect(screen.queryByRole('link')).toHaveAttribute('href', '/page/3');
  });
});
