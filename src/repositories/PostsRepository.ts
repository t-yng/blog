import { Post } from '../entities/Post';

export interface PostsRepository {
    getAllPosts(): Post[];
}
