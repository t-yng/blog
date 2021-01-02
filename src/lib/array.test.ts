import { range } from './array';

describe('lib/array', () => {
    describe('range', () => {
        it('create array', () => {
            const result = range(2, 5);
            expect(result).toEqual([2, 3, 4, 5, 6]);
        });
    });
});
