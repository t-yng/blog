import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders tag name', () => {
    const tagName = 'test';
    render(<Tag name={tagName} />);
    expect(screen.queryByText(tagName)).toBeInTheDocument();
  });

  it('renders link to ja tag page by default', () => {
    const tagName = 'test';
    render(<Tag name={tagName} />);

    const link = screen.queryByRole('link');
    expect(link).toHaveAttribute('href', `/ja/tag/${tagName}`);
  });

  it('renders link to en tag page when locale is en', () => {
    const tagName = 'test';
    render(<Tag name={tagName} locale="en" />);

    const link = screen.queryByRole('link');
    expect(link).toHaveAttribute('href', `/en/tag/${tagName}`);
  });
});
