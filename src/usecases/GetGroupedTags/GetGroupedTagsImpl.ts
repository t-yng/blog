import { Post } from '../../entities/Post';
import { Tag } from '../../entities/Tag';
import { PostsRepository } from '../../repositories/PostsRepository';
import { GetGoupedTags } from './GetGroupedTags';

export class GetAllTagsImpl implements GetGoupedTags {
    constructor(private postsRespository: PostsRepository) {}

    invoke(): Tag[] {
        const posts = this.postsRespository.getAllPosts();
        const tags = this.groupTags(posts);
        return tags.sort((a, b) => b.count - a.count); // countの降順でソートする
    }

    private groupTags(posts: Post[]): Tag[] {
        const groupTags = posts.reduce((acc, post) => {
            // タグごとにカウントを更新する
            for (const tag of post.tags) {
                if (Object.keys(acc).includes(tag)) {
                    acc[tag] = {
                        name: tag,
                        count: acc[tag].count + 1,
                    };
                } else {
                    acc[tag] = {
                        name: tag,
                        count: 1,
                    };
                }
            }
            return acc;
        }, {} as { [key: string]: Tag });

        return Object.values(groupTags);
    }
}
