import renderer from 'react-test-renderer';
import { mock, instance, when } from 'ts-mockito';
import { Post } from '../entities/Post';
import { PostEntries } from './PostEntries';
import { PostEntry } from './PostEntry';

describe('PostEntries', () => {
    const mockPosts: Post[] = [
        {
            id: '1',
            slug: 'test-slug',
            date: new Date(2020, 10, 15),
            formattedDate: '2020年 11月 15日',
            title: 'title',
            description: 'description',
            tags: [],
            author: 'test',
            content: '',
        },
        {
            id: '2',
            slug: 'test-slug',
            date: new Date(2020, 11, 30),
            formattedDate: '2020年 12月 30日',
            title: 'title',
            description: 'description',
            tags: [],
            author: 'test',
            content: '',
        },
    ];

    it('renders PostEntry', () => {
        const posts = mockPosts.slice(0, 1);
        const root = renderer.create(<PostEntries posts={posts} />).root;

        const postEntry = root.findByType(PostEntry);
        expect(postEntry).not.toBeNull();
        expect(postEntry.props.post).toBe(posts[0]);
    });

    it('sort posts by date desc', () => {
        const posts = mockPosts.slice();
        const root = renderer.create(<PostEntries posts={posts} />).root;

        const postEntries = root.findAllByType(PostEntry);
        expect(postEntries[0].props.post.id).toBe('2');
    });
});
