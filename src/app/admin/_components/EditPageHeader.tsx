'use client';

import { Button } from '@chakra-ui/react';
import { css } from 'linaria';
import { useEditorForm } from './EditorForm';
import type { FC } from 'react';

type HeaderProps = {
  formId: string;
};

export const EditPageHeader: FC<HeaderProps> = ({ formId }) => {
  const { isSubmitting } = useEditorForm();

  return (
    <div className={header}>
      <Button
        type="submit"
        form={formId}
        variant="solid"
        colorScheme="blue"
        isLoading={isSubmitting}
        loadingText="保存中..."
      >
        保存
      </Button>
    </div>
  );
};

export const header = css`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  padding-right: 5rem;
  border-bottom: 1px solid gray;
`;
