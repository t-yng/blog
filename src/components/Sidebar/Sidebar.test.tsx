import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { profile } from '../../config/profile';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('render some components', () => {
    const tags = [
      {
        name: 'TypeScript',
        count: 2,
      },
    ];

    render(<Sidebar tags={tags} profile={profile} />);

    expect(
      screen.getByText('TypeScript (2)', { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(profile.name, { exact: false })
    ).toBeInTheDocument();
  });
});
