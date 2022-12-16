import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination', () => {
    it('renders first page and last page', () => {
        render(<Pagination currentPage={2} numPages={10} middleNumPages={4} />);
        expect(screen.queryByText('1')).toBeInTheDocument();
        expect(screen.queryByText('10')).toBeInTheDocument();
    });

    it('renders prev and next when middle page', () => {
        render(<Pagination currentPage={5} numPages={10} middleNumPages={4} />);
        expect(
            screen.queryByRole('link', { name: '前のページへ' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: '次のページへ' })
        ).toBeInTheDocument();
    });

    it('not renders prev when first page', () => {
        render(<Pagination currentPage={1} numPages={10} middleNumPages={4} />);
        expect(
            screen.queryByRole('link', { name: '前のページへ' })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: '次のページへ' })
        ).toBeInTheDocument();
    });

    it('not renders next when last page', () => {
        render(
            <Pagination currentPage={10} numPages={10} middleNumPages={4} />
        );
        expect(
            screen.queryByRole('link', { name: '前のページへ' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: '次のページへ' })
        ).not.toBeInTheDocument();
    });

    it('renders success if currentPage is last', () => {
        render(<Pagination currentPage={3} numPages={3} middleNumPages={3} />);

        expect(screen.queryByText('1')).toBeInTheDocument();
        expect(screen.queryByText('2')).toBeInTheDocument();
        expect(screen.queryByText('3')).toBeInTheDocument();
    });

    // 1 2 3 4 5 6 7
    it('renders all pages if numPages is smaller than middlePages', () => {
        render(<Pagination currentPage={5} numPages={7} middleNumPages={8} />);

        expect(
            screen.queryByRole('link', { name: 'ページ1' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ2' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ3' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ4' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ5' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ6' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ7' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ8' })
        ).not.toBeInTheDocument();
    });

    // 1 ... 3 4 5 ... 7
    it('renders two 3-point leaders if numPages is bigger than middleNumPages', () => {
        render(<Pagination currentPage={4} numPages={7} middleNumPages={3} />);

        expect(screen.queryAllByText('...').length).toBe(2);
        expect(
            screen.queryByRole('link', { name: 'ページ1' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ2' })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ3' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ4' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ5' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ6' })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ7' })
        ).toBeInTheDocument();
    });

    // 1 2 3 4 ... 7
    it('renders one 3-pointif leader if subtract currentPage from numPages is bigger than middleNumPages', () => {
        render(<Pagination currentPage={2} numPages={7} middleNumPages={3} />);

        expect(screen.queryAllByText('...').length).toBe(1);
        expect(
            screen.queryByRole('link', { name: 'ページ1' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ2' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ3' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ4' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ5' })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ6' })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ7' })
        ).toBeInTheDocument();
    });

    // 1 ... 4 5 6 7
    it('renders one 3-pointif leader if subtract currentPage from numPages is smaller than middleNumPages', () => {
        render(<Pagination currentPage={6} numPages={7} middleNumPages={3} />);

        expect(screen.queryAllByText('...').length).toBe(1);
        expect(
            screen.queryByRole('link', { name: 'ページ1' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ2' })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ3' })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ4' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ5' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ6' })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('link', { name: 'ページ7' })
        ).toBeInTheDocument();
    });
});
