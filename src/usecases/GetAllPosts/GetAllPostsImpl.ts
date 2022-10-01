import { Post } from '@/entities';
import { PostsRepository } from '@/repositories/PostsRepository';
import { GetAllPosts } from './GetAllPosts';

export class GetAllPostsImpl implements GetAllPosts {
    constructor(private postsRepository: PostsRepository) {}

    invoke(): Post[] {
        return this.postsRepository.getAllPosts();
    }
}
