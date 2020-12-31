import { render, screen } from '@testing-library/react';
import { NextPage } from './NextPage';

describe('PageNumber', () => {
    it('renders link to /page/[page]', () => {
        render(<NextPage page={3} />);
        expect(screen.queryByRole('link')).toHaveAttribute('href', '/page/3');
    });
});
