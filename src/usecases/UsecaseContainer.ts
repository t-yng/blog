import { PostsRepository } from '../repositories/PostsRepository';
import { PostsRepositoryImpl } from '../repositories/PostsRepositoryImpl';
import { GetAllPosts, GetAllPostsImpl } from './GetAllPosts';
import { GetGoupedTags, GetGroupedTagsImpl } from './GetGroupedTags';
import { GetPostBySlug } from './GetPostBySlug/GetPostBySlug';
import { GetPostBySlugImpl } from './GetPostBySlug/GetPostBySlugImpl';
import { GetPostsByTag } from './GetPostsByTag/GetPostsByTag';
import { GetPostsByTagImpl } from './GetPostsByTag/GetPostsByTagImpl';

export type Usecases = {
    getAllPosts: GetAllPosts;
    getPostBySlug: GetPostBySlug;
    getPostsByTag: GetPostsByTag;
    getGroupedTags: GetGoupedTags;
};

const postsRepository: PostsRepository = new PostsRepositoryImpl();

const getAllPostsImpl: GetAllPosts = new GetAllPostsImpl(postsRepository);
const getPostBySlugImpl: GetPostBySlug = new GetPostBySlugImpl(postsRepository);
const getPostsByTagImpl: GetPostsByTag = new GetPostsByTagImpl(postsRepository);
const getGroupedTagsImpl: GetGoupedTags = new GetGroupedTagsImpl(
    postsRepository
);

export const usecases: Usecases = {
    getAllPosts: getAllPostsImpl,
    getPostBySlug: getPostBySlugImpl,
    getPostsByTag: getPostsByTagImpl,
    getGroupedTags: getGroupedTagsImpl,
};
