import { mock, when, verify } from 'ts-mockito';
import { PostsRepository } from '../repositories/PostsRepository';
import { GetAllPostsImpl } from './GetAllPostsImpl';
import { Post } from '../entities/Post';

describe('GetAllPostsImpl', () => {
    let mockPostsRepository: PostsRepository;
    let mockPosts: Post[];

    const getUseCase = (postsRepository: PostsRepository) =>
        new GetAllPostsImpl(postsRepository);

    beforeAll(() => {
        mockPosts = [...Array(2)].map(() => mock<Post>());

        mockPostsRepository = mock<PostsRepository>();
        when(mockPostsRepository.getAllPosts()).thenReturn(mockPosts);
    });

    it('invoke retusns post array', () => {
        const useCase = getUseCase(mockPostsRepository);
        const result = useCase.invoke();

        verify(mockPostsRepository.getAllPosts()).times(1);
        expect(result.length).toBe(mockPosts.length);
    });
});
