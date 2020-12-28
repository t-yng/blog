import { getDisplayName } from 'next/dist/next-server/lib/utils';
import { PostsRepository } from '../repositories/PostsRepository';
import { PostsRepositoryImpl } from '../repositories/PostsRepositoryImpl';
import { GetAllPosts } from './GetAllPosts/GetAllPosts';
import { GetAllPostsImpl } from './GetAllPosts/GetAllPostsImpl';

export type Usecases = {
    getAllPosts: GetAllPosts;
};

const postsRepository: PostsRepository = new PostsRepositoryImpl();
const getAllPostsImpl: GetAllPosts = new GetAllPostsImpl(postsRepository);

export const usecases: Usecases = {
    getAllPosts: getAllPostsImpl,
};
