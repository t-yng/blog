import { compareDesc } from 'date-fns';
import { Post } from '../entities/Post';

export const sortPostsByDateDesc = (posts: Post[]): Post[] => {
    return posts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );
};
