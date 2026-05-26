import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PageNumber } from './PageNumber';

describe('PageNumber', () => {
  it('renders page number', () => {
    render(<PageNumber page={5} currentPage={5} />);
    expect(screen.queryByText('5')).toBeInTheDocument();
  });

  it('renders link to locale root if the page number is first', () => {
    render(<PageNumber page={1} currentPage={1} locale="ja" />);

    const link = screen.queryByRole('link');
    expect(link).toHaveAttribute('href', '/ja');
  });

  it('renders link to locale page path if the page number is not first', () => {
    render(<PageNumber page={3} currentPage={3} locale="ja" />);

    const link = screen.queryByRole('link');
    expect(link).toHaveAttribute('href', '/ja/page/3');
  });
});
