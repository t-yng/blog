import { instance, mock, verify, when } from 'ts-mockito';
import { Post } from '../../entities/Post';
import { PostsRepository } from '../../repositories/PostsRepository';
import { GetPostBySlugImpl } from './GetPostBySlugImpl';
import { NotFoundPostError } from './NotFoundPostError';

describe('GetPostBySlugImpl', () => {
    let mockPostsRepository: PostsRepository;
    let mockPost: Post;

    const getUseCase = (postsRepository: PostsRepository) =>
        new GetPostBySlugImpl(postsRepository);

    describe('invoke', () => {
        beforeEach(() => {
            mockPostsRepository = mock<PostsRepository>();
            mockPost = mock<Post>();
        });

        it('returns post by slug', () => {
            const slug = 'test-slug';
            const useCase = getUseCase(instance(mockPostsRepository));
            when(mockPostsRepository.getPostBySlug(slug)).thenReturn(mockPost);

            const result = useCase.invoke(slug);
            verify(mockPostsRepository.getPostBySlug(slug)).times(1);
            expect(result).toBe(mockPost);
        });

        it('throws NotFoundPostError if slug does not exist', () => {
            const slug = 'not-exist-slug';
            const useCase = getUseCase(instance(mockPostsRepository));
            when(mockPostsRepository.getPostBySlug(slug)).thenReturn(null);

            expect(() => {
                useCase.invoke(slug);
            }).toThrow(NotFoundPostError);
            verify(mockPostsRepository.getPostBySlug(slug)).times(1);
        });
    });
});
