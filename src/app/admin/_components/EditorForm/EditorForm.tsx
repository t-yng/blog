'use client';

import {
  useState,
  useCallback,
  type FC,
  useEffect,
  FormHTMLAttributes,
} from 'react';
import { Input } from '@chakra-ui/react';
import { css } from 'linaria';
import { type Post } from '@/entities';
import { TagAutoComplete } from './TagAutoComplete';
import { RichTextEditor } from './RichTextEditor';
import { useEditorForm } from './useEditorForm';

type EditorFormProps = FormHTMLAttributes<HTMLFormElement> & {
  serverAction: (
    formData: FormData
  ) => Promise<{ error: string | null; success: boolean }>;
  post?: Post;
  onChangeFulFilled?: (fulFilled: boolean) => void;
};

export const EditorForm: FC<EditorFormProps> = ({
  post,
  onChangeFulFilled,
  action: _action,
  serverAction,
  ...formProps
}) => {
  const [title, setTitle] = useState(post?.title ?? '');
  const [tags] = useState<string[]>(post?.tags ?? []);
  const [content, setContent] = useState(post?.content ?? '');
  const [fulFilled, setFulFilled] = useState(false);
  const { updateSubmitting, updateError, error } = useEditorForm();
  // const [error, setError] = useState<string | null>(null);

  const handleChangeContent = useCallback((content: string) => {
    setContent(content);
  }, []);

  const handleChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const title = e.target.value;
      setTitle(title);
    },
    []
  );

  const formAction = useCallback(
    async (formData: FormData) => {
      updateSubmitting(true);
      try {
        const result = await serverAction(formData);
        if (result.error) {
          updateError(result.error);
        }
      } finally {
        updateSubmitting(false);
      }
    },
    [serverAction, updateError, updateSubmitting]
  );

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    if (title && content) {
      setFulFilled(true);
    } else {
      setFulFilled(false);
    }
  }, [title, content]);

  useEffect(() => {
    onChangeFulFilled?.(fulFilled);
  }, [fulFilled, onChangeFulFilled]);

  return (
    <form
      aria-hidden="true"
      className={form}
      action={formAction}
      {...formProps}
    >
      <Input
        type="text"
        name="title"
        size="lg"
        placeholder="タイトルを入力..."
        className={titleCss}
        value={title}
        onChange={handleChangeTitle}
      />
      <TagAutoComplete selectedTags={tags} />
      <RichTextEditor content={content} onChange={handleChangeContent} />
      <input type="hidden" name="content" value={content} aria-hidden="true" />
      {/* <input
        type="hidden"
        name="path"
        value={post?.path ?? ''}
        aria-hidden="true"
      /> */}
    </form>
  );
};

const form = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 1rem;
`;

const titleCss = css`
  font-weight: bold;
`;
