import { instance, mock, verify, when } from 'ts-mockito';
import { Post } from '../../entities/Post';
import { PostsRepository } from '../../repositories/PostsRepository';
import { GetGroupedTagsImpl } from './GetGroupedTagsImpl';

describe('GetGoupedTagsImpl', () => {
    let mockPostsRepository: PostsRepository;
    let mockPosts: Post[];

    const getUsecase = (postsRepository: PostsRepository) =>
        new GetGroupedTagsImpl(postsRepository);

    beforeAll(() => {
        mockPosts = [...Array(2)].map(() => mock<Post>());
        when(mockPosts[0].tags).thenReturn(['フロントエンド', 'TypeScript']);
        when(mockPosts[1].tags).thenReturn(['サーバー', 'TypeScript']);

        mockPostsRepository = mock<PostsRepository>();
        when(mockPostsRepository.getAllPosts()).thenReturn(
            mockPosts.map(post => instance(post))
        );
    });

    it('invoke returns grouped tags', () => {
        const usecase = getUsecase(instance(mockPostsRepository));
        const result = usecase.invoke();

        verify(mockPostsRepository.getAllPosts()).times(1);
        expect(result.length).toEqual(3);
        expect(result).toEqual(
            expect.arrayContaining([
                {
                    name: 'TypeScript',
                    count: 2,
                },
                {
                    name: 'フロントエンド',
                    count: 1,
                },
                {
                    name: 'サーバー',
                    count: 1,
                },
            ])
        );
    });
});
