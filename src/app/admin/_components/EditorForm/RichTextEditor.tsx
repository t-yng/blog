import { type FC, useCallback, useEffect } from 'react';
import { type EditorState } from 'lexical';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import {
  AutoLinkPlugin,
  createLinkMatcherWithRegExp,
} from '@lexical/react/LexicalAutoLinkPlugin';
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
import {
  CodeHighlightNode,
  CodeNode,
  registerCodeHighlighting,
} from '@lexical/code';
import { ListNode, ListItemNode } from '@lexical/list';
import { css } from 'linaria';
import { type InitialConfigType } from '@lexical/react/LexicalComposer';

const URL_REGEX =
  /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const AUTO_LINK_MATCHERS = [
  createLinkMatcherWithRegExp(URL_REGEX, (text) => {
    return text.startsWith('http') ? text : `https://${text}`;
  }),
];

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

const CodeHighlightPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return registerCodeHighlighting(editor);
  }, [editor]);

  return null;
};

const onError = (error: Error) => {
  console.error(error);
};

const theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'editor-placeholder',
  paragraph: 'editor-paragraph',
  code: 'editor-code',
  codeHighlight: {
    atrule: 'editor-tokenAttr',
    attr: 'editor-tokenAttr',
    boolean: 'editor-tokenProperty',
    builtin: 'editor-tokenSelector',
    cdata: 'editor-tokenComment',
    char: 'editor-tokenSelector',
    class: 'editor-tokenFunction',
    'class-name': 'editor-tokenFunction',
    comment: 'editor-tokenComment',
    constant: 'editor-tokenProperty',
    deleted: 'editor-tokenProperty',
    doctype: 'editor-tokenComment',
    entity: 'editor-tokenOperator',
    function: 'editor-tokenFunction',
    important: 'editor-tokenVariable',
    inserted: 'editor-tokenSelector',
    keyword: 'editor-tokenAttr',
    namespace: 'editor-tokenVariable',
    number: 'editor-tokenProperty',
    operator: 'editor-tokenOperator',
    prolog: 'editor-tokenComment',
    property: 'editor-tokenProperty',
    punctuation: 'editor-tokenPunctuation',
    regex: 'editor-tokenVariable',
    selector: 'editor-tokenSelector',
    string: 'editor-tokenSelector',
    symbol: 'editor-tokenProperty',
    tag: 'editor-tokenProperty',
    url: 'editor-tokenOperator',
    variable: 'editor-tokenVariable',
  },
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
      CodeNode,
      CodeHighlightNode,
      QuoteNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
    ],
    // 記事の内容を初期状態としてセットする
    editorState: () => {
      $convertFromMarkdownString(content, TRANSFORMERS);
    },
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
            content === '' ? (
              <span className={`${editorPlaceholder} editor-placeholder`}>
                Enter some text...
              </span>
            ) : null
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        <MyCustomAutoFocusPlugin />
        <OnChangePlugin onChange={handleChange} />
        <HistoryPlugin />
        <CodeHighlightPlugin />
        <AutoLinkPlugin matchers={AUTO_LINK_MATCHERS} />
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

  .editor-code {
    background-color: rgb(240, 242, 245);
    font-family: Menlo, Consolas, Monaco, monospace;
    display: block;
    padding: 8px 8px 8px 52px;
    line-height: 1.53;
    font-size: 13px;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    overflow-x: auto;
    position: relative;
    tab-size: 2;
  }

  .editor-code:before {
    content: attr(data-gutter);
    position: absolute;
    background-color: #eee;
    left: 0;
    top: 0;
    border-right: 1px solid #ccc;
    padding: 8px;
    color: #777;
    white-space: pre-wrap;
    text-align: right;
    min-width: 25px;
  }

  .editor-tokenComment {
    color: slategray;
  }
  .editor-tokenPunctuation {
    color: #999;
  }
  .editor-tokenProperty {
    color: #905;
  }
  .editor-tokenSelector {
    color: #690;
  }
  .editor-tokenOperator {
    color: #9a6e3a;
  }
  .editor-tokenAttr {
    color: #07a;
  }
  .editor-tokenVariable {
    color: #e90;
  }
  .editor-tokenFunction {
    color: #dd4a68;
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
