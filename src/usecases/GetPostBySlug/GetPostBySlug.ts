import { Post } from '@/entities';

export interface GetPostBySlug {
    invoke(slug: string): Post;
}
