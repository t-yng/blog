import { render, screen } from '@testing-library/react';
import { Tags } from './Tags';

describe('Tags', () => {
  const tags: string[] = ['フロントエンド', 'TypeScript'];

  it('renders tags sorted by name', () => {
    render(<Tags tags={tags} />);

    const listItems = screen.queryAllByRole('link');
    expect(listItems.length).toBe(tags.length);
    expect(listItems[0]).toHaveTextContent('TypeScript');
    expect(listItems[1]).toHaveTextContent('フロントエンド');
  });
});
