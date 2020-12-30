---
to: src/usecases/<%= Name %>/<%= Name %>Impl.test.ts
---
import { <%= Name %>Impl } from './<%= Name %>Impl';

describe('<%= Name %>Impl', () => {
    const getUseCase = () => new <%= Name %>Impl();

    describe('invoke', () => {
        it('some test', () => {
            const useCase = getUseCase();
            const result = useCase.invoke();
        });
    });
});