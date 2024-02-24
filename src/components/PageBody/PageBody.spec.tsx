import { render, screen } from '@testing-library/react';
import { PageBody } from './PageBody';

describe('PageBody', () => {
  it('renders the title when provided', () => {
    const title = 'Test Title';
    render(<PageBody title={title} tags={[]} />);
    const titleElement = screen.getByRole('heading', { name: title });
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the children', () => {
    const children = <div>Test Children</div>;
    render(<PageBody tags={[]}>{children}</PageBody>);
    const childrenElement = screen.getByText('Test Children');
    expect(childrenElement).toBeInTheDocument();
  });
});
