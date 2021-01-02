import { Post } from '../../entities/Post';

export interface GetPostsByTag {
    invoke(tag: string): Post[];
}
