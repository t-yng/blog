import { Post } from "../entities/Post";

export interface GetAllPosts {
  invoke(): Post[];
}