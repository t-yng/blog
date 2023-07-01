import { type FC, useCallback, useEffect } from 'react';
import { type EditorState } from 'lexical';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import {
  TRANSFORMERS,
  $convertToMarkdownString,
  $convertFromMarkdownString,
} from '@lexical/markdown';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { ListNode, ListItemNode } from '@lexical/list';
import { type InitialConfigType } from '@lexical/react/LexicalComposer';

import { css } from 'linaria';

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}
const onError = (error: Error) => {
  console.error(error);
};

const theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'editor-placeholder',
  paragraph: 'editor-paragraph',
};

type EditorProps = {
  content?: string;
  onChange: (content: string) => void;
};

export const RichTextEditor: FC<EditorProps> = ({ content = '', onChange }) => {
  const editorConfig: InitialConfigType = {
    namespace: 'blog-cms',
    theme,
    onError,
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
    ],
    // 記事の内容を初期状態としてセットする
    editorState: () => $convertFromMarkdownString(content, TRANSFORMERS),
  };

  const handleChange = useCallback(
    (editorState: EditorState) => {
      editorState.read(() => {
        const content = $convertToMarkdownString(TRANSFORMERS);
        onChange(content);
      });
    },
    [onChange]
  );

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className={editorContainer}>
        <RichTextPlugin
          contentEditable={<ContentEditable className={editorInput} />}
          placeholder={
            <div className={`${editorPlaceholder} editor-placeholder`}>
              Enter some text...
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={handleChange} />
        <HistoryPlugin />
        <MyCustomAutoFocusPlugin />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      </div>
    </LexicalComposer>
  );
};

const editorContainer = css`
  background: #fff;
  color: #000;
  position: relative;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 1rem;
  width: 100%;
  outline: 2px solid transparent;
  transition-property: var(--chakra-transition-property-common);
  transition-duration: var(--chakra-transition-duration-normal);
  border: 1px solid;
  border-color: inherit;
  border-radius: var(--chakra-radii-sm);
  &:focus-within {
    outline-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
  }
`;

const editorInput = css`
  min-height: 150px;
  resize: none;
  font-size: 15px;
  caret-color: #444;
  position: relative;
  tab-size: 1;
  outline: 0;

  // Chakra UI のCSS Resetを無効にする
  * {
    all: revert;
  }

  .editor-paragraph {
    margin: 0;
  }
`;

const editorPlaceholder = css`
  color: #999;
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  top: 1rem;
  left: 1rem;
  font-size: 15px;
  user-select: none;
  display: inline-block;
  pointer-events: none;
`;
