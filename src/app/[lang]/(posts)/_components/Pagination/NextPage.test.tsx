import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NextPage } from './NextPage';

describe('PageNumber', () => {
  it('renders link to locale page path', () => {
    render(<NextPage page={3} locale="ja" />);
    expect(screen.queryByRole('link')).toHaveAttribute('href', '/ja/page/3');
  });
});
