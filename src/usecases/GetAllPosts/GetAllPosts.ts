import { Post } from '@/entities';

export interface GetAllPosts {
    invoke(): Post[];
}
