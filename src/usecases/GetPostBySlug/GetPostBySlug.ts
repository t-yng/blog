import { Post } from '../../entities/Post';

export interface GetPostBySlug {
    invoke(slug: string): Post;
}
