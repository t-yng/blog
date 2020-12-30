export type Post = {
    id: string;
    slug: string;
    date: Date;
    formattedDate: string;
    title: string;
    description: string;
    tags: string[];
    author: string;
    content: string;
};
