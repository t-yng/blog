import { compareDesc } from 'date-fns';
import { Post } from '@/types';

export const sortPostsByDateDesc = (posts: Post[]): Post[] => {
  return posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
};
