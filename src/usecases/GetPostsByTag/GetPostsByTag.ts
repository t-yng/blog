import { Post } from '@/entities';

export interface GetPostsByTag {
    invoke(tag: string): Post[];
}
