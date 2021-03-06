import renderer from 'react-test-renderer';
import { Post } from '../../../entities/Post';
import { PostEntries } from './PostEntries';
import { PostEntry } from '../PostEntry/PostEntry';

describe('PostEntries', () => {
    const mockPosts: Post[] = [
        {
            id: '1',
            slug: 'test-slug',
            date: '2020-11-15T00:00:00.000Z',
            title: 'title',
            description: 'description',
            tags: [],
            author: 'test',
            content: '',
        },
        {
            id: '2',
            slug: 'test-slug',
            date: '2020-12-30T00:00:00.000Z',
            title: 'title',
            description: 'description',
            tags: [],
            author: 'test',
            content: '',
        },
    ];

    it('renders PostEntry', () => {
        const posts = mockPosts.slice();
        const root = renderer.create(<PostEntries posts={posts} />).root;

        const postEntries = root.findAllByType(PostEntry);
        expect(postEntries.length).toBe(posts.length);
        expect(postEntries[0].props.post).toBe(posts[0]);
    });
});
