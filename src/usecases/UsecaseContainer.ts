import { PostsRepository } from '../repositories/PostsRepository';
import { PostsRepositoryImpl } from '../repositories/PostsRepositoryImpl';
import { GetAllPosts, GetAllPostsImpl } from './GetAllPosts';
import { GetGoupedTags, GetGroupedTagsImpl } from './GetGroupedTags';
import { GetPostBySlug } from './GetPostBySlug/GetPostBySlug';
import { GetPostBySlugImpl } from './GetPostBySlug/GetPostBySlugImpl';

export type Usecases = {
    getAllPosts: GetAllPosts;
    getPosyBySlug: GetPostBySlug;
    getGroupedTags: GetGoupedTags;
};

const postsRepository: PostsRepository = new PostsRepositoryImpl();

const getAllPostsImpl: GetAllPosts = new GetAllPostsImpl(postsRepository);
const getPostBySlugImpl: GetPostBySlug = new GetPostBySlugImpl(postsRepository);
const getGroupedTagsImpl: GetGoupedTags = new GetGroupedTagsImpl(
    postsRepository
);

export const usecases: Usecases = {
    getAllPosts: getAllPostsImpl,
    getPosyBySlug: getPostBySlugImpl,
    getGroupedTags: getGroupedTagsImpl,
};
