import { render, screen } from '@testing-library/react';
import { Code } from './Code';

describe('Code', () => {
    it('renders code', () => {
        const code = 'console.log("code")';
        render(<Code code={code} />);
        expect(screen.queryByText(code)).toBeInTheDocument();
    });
    it('renders with language className', () => {
        const code = 'console.log("code")';
        const language = 'typescript';
        render(<Code code={code} language={language} />);
        expect(screen.queryByText(code)).toHaveClass(`language-${language}`);
    });
});
