import { Post } from '../../entities/Post';
import { PostsRepository } from '../../repositories/PostsRepository';
import { GetPostsByTag } from './GetPostsByTag';

export class GetPostsByTagImpl implements GetPostsByTag {
    constructor(private postsRepository: PostsRepository) {}

    invoke(tag: string): Post[] {
        return this.postsRepository.getPostsByTag(tag);
    }
}
