import unified from 'unified';
import markdownParse from 'remark-parse';
import html from 'remark-html';

export const markdown = {
    async toHtml(markdown: string) {
        const result = await unified()
            .use(markdownParse)
            .use(html)
            .process(markdown);

        return result.toString();
    },
};
