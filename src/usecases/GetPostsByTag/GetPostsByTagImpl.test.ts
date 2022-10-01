import { mock, verify, when, instance } from 'ts-mockito';
import { Post } from '@/entities';
import { PostsRepository } from '@/repositories/PostsRepository';
import { GetPostsByTagImpl } from './GetPostsByTagImpl';

describe('GetPostsByTagImpl', () => {
    let mockPostsRepository: PostsRepository;
    let mockPosts: Post[];

    const getUseCase = (postsRepository: PostsRepository) =>
        new GetPostsByTagImpl(postsRepository);

    describe('invoke', () => {
        beforeEach(() => {
            mockPostsRepository = mock<PostsRepository>();
            mockPosts = [...Array(2)].map(() => mock<Post>());
        });

        it('returns posts by tag', () => {
            const tag = 'TypeScript';
            const useCase = getUseCase(instance(mockPostsRepository));
            when(mockPostsRepository.getPostsByTag(tag)).thenReturn(mockPosts);

            const result = useCase.invoke(tag);
            verify(mockPostsRepository.getPostsByTag(tag)).times(1);
            expect(result.length).toBe(mockPosts.length);
        });
    });
});
