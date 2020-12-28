import { PostsRepository } from '../repositories/PostsRepository';
import { PostsRepositoryImpl } from '../repositories/PostsRepositoryImpl';
import { GetAllPosts, GetAllPostsImpl } from './GetAllPosts';
import { GetGoupedTags, GetGroupedTagsImpl } from './GetGroupedTags';

export type Usecases = {
    getAllPosts: GetAllPosts;
    getGroupedTags: GetGoupedTags;
};

const postsRepository: PostsRepository = new PostsRepositoryImpl();

const getAllPostsImpl: GetAllPosts = new GetAllPostsImpl(postsRepository);
const getGroupedTagsImpl: GetGoupedTags = new GetGroupedTagsImpl(
    postsRepository
);

export const usecases: Usecases = {
    getAllPosts: getAllPostsImpl,
    getGroupedTags: getGroupedTagsImpl,
};
