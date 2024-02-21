import { render, screen } from '@testing-library/react';
import { PageNumber } from './PageNumber';

describe('PageNumber', () => {
  it('renders page number', () => {
    render(<PageNumber page={5} currentPage={5} />);
    expect(screen.queryByText('5')).toBeInTheDocument();
  });

  it('renders link to / if the page number is first', () => {
    render(<PageNumber page={1} currentPage={1} />);

    const link = screen.queryByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders link to pages/ if the page number is not first', () => {
    render(<PageNumber page={3} currentPage={3} />);

    const link = screen.queryByRole('link');
    expect(link).toHaveAttribute('href', '/page/3');
  });
});
