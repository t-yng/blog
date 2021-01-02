import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { PageNumber } from './PageNumber';
import { Pagination } from './Pagination';

describe('Pagination', () => {
    it('renders first page and last page', () => {
        render(<Pagination currentPage={2} numPages={10} middleNumPages={4} />);
        expect(screen.queryByText('1')).toBeInTheDocument();
        expect(screen.queryByText('10')).toBeInTheDocument();
    });

    it('renders prev and next when middle page', () => {
        render(<Pagination currentPage={5} numPages={10} middleNumPages={4} />);
        expect(screen.queryByTestId('pagination-prev')).toBeInTheDocument();
        expect(screen.queryByTestId('pagination-next')).toBeInTheDocument();
    });

    it('not renders prev when first page', () => {
        render(<Pagination currentPage={1} numPages={10} middleNumPages={4} />);
        expect(screen.queryByTestId('pagination-prev')).not.toBeInTheDocument();
    });

    it('not renders next when last page', () => {
        render(
            <Pagination currentPage={10} numPages={10} middleNumPages={4} />
        );
        expect(screen.queryByTestId('pagination-next')).not.toBeInTheDocument();
    });

    it('renders success if currentPage is last', () => {
        const root = renderer.create(
            <Pagination currentPage={3} numPages={3} middleNumPages={3} />
        ).root;

        expect(root.findAllByType(PageNumber).length).toBe(3);
    });

    // 1 2 3 4 5 6 7
    it('renders all pages if numPages is smaller than middlePages', () => {
        render(<Pagination currentPage={5} numPages={7} middleNumPages={8} />);

        expect(screen.queryByText('1')).toBeInTheDocument();
        expect(screen.queryByText('2')).toBeInTheDocument();
        expect(screen.queryByText('3')).toBeInTheDocument();
        expect(screen.queryByText('4')).toBeInTheDocument();
        expect(screen.queryByText('5')).toBeInTheDocument();
        expect(screen.queryByText('6')).toBeInTheDocument();
        expect(screen.queryByText('7')).toBeInTheDocument();
        expect(screen.queryByText('8')).not.toBeInTheDocument();
    });

    // 1 ... 3 4 5 ... 7
    it('renders two 3-point leaders if numPages is bigger than middleNumPages', () => {
        render(<Pagination currentPage={4} numPages={7} middleNumPages={3} />);

        expect(screen.queryAllByText('...').length).toBe(2);
        expect(screen.queryByText('1')).toBeInTheDocument();
        expect(screen.queryByText('2')).not.toBeInTheDocument();
        expect(screen.queryByText('3')).toBeInTheDocument();
        expect(screen.queryByText('4')).toBeInTheDocument();
        expect(screen.queryByText('5')).toBeInTheDocument();
        expect(screen.queryByText('6')).not.toBeInTheDocument();
        expect(screen.queryByText('7')).toBeInTheDocument();
    });

    // 1 2 3 4 ... 7
    it('renders one 3-pointif leader if subtract currentPage from numPages is bigger than middleNumPages', () => {
        render(<Pagination currentPage={2} numPages={7} middleNumPages={3} />);

        expect(screen.queryAllByText('...').length).toBe(1);
        expect(screen.queryByText('1')).toBeInTheDocument();
        expect(screen.queryByText('2')).toBeInTheDocument();
        expect(screen.queryByText('3')).toBeInTheDocument();
        expect(screen.queryByText('4')).toBeInTheDocument();
        expect(screen.queryByText('5')).not.toBeInTheDocument();
        expect(screen.queryByText('6')).not.toBeInTheDocument();
        expect(screen.queryByText('7')).toBeInTheDocument();
    });

    // 1 ... 4 5 6 7
    it('renders one 3-pointif leader if subtract currentPage from numPages is smaller than middleNumPages', () => {
        render(<Pagination currentPage={6} numPages={7} middleNumPages={3} />);

        expect(screen.queryAllByText('...').length).toBe(1);
        expect(screen.queryByText('1')).toBeInTheDocument();
        expect(screen.queryByText('2')).not.toBeInTheDocument();
        expect(screen.queryByText('3')).not.toBeInTheDocument();
        expect(screen.queryByText('4')).toBeInTheDocument();
        expect(screen.queryByText('5')).toBeInTheDocument();
        expect(screen.queryByText('6')).toBeInTheDocument();
        expect(screen.queryByText('7')).toBeInTheDocument();
    });
});
