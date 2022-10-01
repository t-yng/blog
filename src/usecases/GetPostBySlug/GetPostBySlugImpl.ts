import { Post } from '@/entities';
import { PostsRepository } from '@/repositories/PostsRepository';
import { GetPostBySlug } from './GetPostBySlug';
import { NotFoundPostError } from './NotFoundPostError';

export class GetPostBySlugImpl implements GetPostBySlug {
    constructor(private postsRepository: PostsRepository) {}

    invoke(slug: string): Post {
        const post = this.postsRepository.getPostBySlug(slug);
        if (post != null) {
            return post;
        } else {
            throw new NotFoundPostError(`Post is not found by slug: ${slug}`);
        }
    }
}
