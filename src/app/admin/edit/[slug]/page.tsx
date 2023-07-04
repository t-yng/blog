import { css } from 'linaria';
import { Post } from '@/models';
import { PostRepository } from '@/repositories';
import { EditPageHeader, EditorForm } from '../../_components';
import { EditorFormProvider } from '../../_components/EditorForm';

const getPost = (slug: string) => {
  const postRepository = new PostRepository();
  return postRepository.getRawPostBySlug(slug);
};

export default function EditPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const updatePost = async (formData: FormData) => {
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

  return (
    <EditorFormProvider>
      <EditPageHeader formId="form" />
      <EditorForm
        id="form"
        serverAction={updatePost}
        className={editorForm}
        post={post}
      />
    </EditorFormProvider>
  );
}

const editorForm = css`
  max-width: 800px;
  margin: 0 auto;
`;
