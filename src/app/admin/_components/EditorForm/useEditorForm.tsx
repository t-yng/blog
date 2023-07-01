'use client';

import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

type EditorFormContextValue = {
  isSubmitting: boolean;
  error: string | null;
  updateSubmitting: (isSubmitting: boolean) => void;
  updateError: (error: string | null) => void;
};
const EditorFormContext = createContext<EditorFormContextValue>({
  isSubmitting: false,
  error: null,
  updateSubmitting: (isSubmitting: boolean) => {
    return isSubmitting;
  },
  updateError: (error: string | null) => {
    return error;
  },
});

export const EditorFormProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <EditorFormContext.Provider
      value={{
        isSubmitting,
        error,
        updateSubmitting: setIsSubmitting,
        updateError: setError,
      }}
    >
      {children}
    </EditorFormContext.Provider>
  );
};

export const useEditorForm = () => {
  const context = useContext(EditorFormContext);

  return context;
};
