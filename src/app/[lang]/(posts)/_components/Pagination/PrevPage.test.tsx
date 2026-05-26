import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PrevPage } from './PrevPage';

describe('PageNumber', () => {
  it('renders link to locale root if page is first', () => {
    render(<PrevPage page={1} locale="ja" />);
    expect(screen.queryByRole('link')).toHaveAttribute('href', '/ja');
  });

  it('renders link to locale page path if page is not first', () => {
    render(<PrevPage page={3} locale="ja" />);
    expect(screen.queryByRole('link')).toHaveAttribute('href', '/ja/page/3');
  });
});
