import renderer from 'react-test-renderer';
import { GlobalHeader } from './GlobalHeader';
import { GlobalHeaderMain } from './GlobalHeaderMain';

describe('GlobalHeader', () => {
    it('renders header', () => {
        const root = renderer.create(<GlobalHeader />).root;
        root.findByType('header');
    });

    it('renders GlobalHeaderMain', () => {
        const root = renderer.create(<GlobalHeader />).root;
        root.findByType(GlobalHeaderMain);
    });
});
