import { vscDarkPlus as defaultVscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { commonSyntaxHighlightStyle } from '../common';

export const vscDarkPlus = {
    style: defaultVscDarkPlus,
    customStyle: {
        fontFamily: commonSyntaxHighlightStyle.fontFamily,
        fontSize: 'inherit',
        background: 'hsl(233deg 16% 22%)',
    },
    codeTagStyle: {
        fontFamily: commonSyntaxHighlightStyle.fontFamily,
    },
};
