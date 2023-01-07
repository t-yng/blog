import { vi } from 'vitest';
import * as gtag from './gtag';

describe('lib/gtag', () => {
    describe('pageview', () => {
        it('calls window.gtag function', () => {
            const mockWindowGtag = vi.fn();
            window.gtag = mockWindowGtag;
            gtag.pageview('/');

            expect(mockWindowGtag).toBeCalled();
            expect(mockWindowGtag.mock.calls[0][0]).toBe('config');
            expect(mockWindowGtag.mock.calls[0][1]).toBe(gtag.GA_TRACKING_ID);
            expect(mockWindowGtag.mock.calls[0][2]).toEqual({ page_path: '/' });
        });
    });
});
