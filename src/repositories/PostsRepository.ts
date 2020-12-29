import { Post } from '../entities/Post';

export interface PostsRepository {
    getAllPosts(): Post[];
    getPostBySlug(slug: string): Post | null;
}
