'use server';

import { Post } from '@/models';
import { PostRepository } from '@/repositories';

export const createDraftPost = async (formData: FormData) => {
  'use server';

  const title = formData.get('title')?.toString() ?? null;
  const tags = formData.getAll('tag').map((tag) => tag.toString());
  const content = formData.get('content')?.toString() ?? null;

  if (!title) {
    return {
      error: 'title is empty',
      success: false,
    };
  }
  if (!content) {
    return {
      error: 'content is empty',
      success: false,
    };
  }

  const post = new Post({ title, tags, content });

  const postRepository = new PostRepository();
  postRepository.createDraftPost(post);

  return {
    success: true,
    error: null,
  };
};
