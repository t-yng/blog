import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Input, List, ListItem, Tag } from '@chakra-ui/react';
import { css } from 'linaria';

import type { FC } from 'react';

// TODO: APIでタグの一覧を取得する
const tags = [
  'フロントエンド',
  'TypeScript',
  'テスト',
  'その他',
  'セキュリティ',
  'React',
  'GatsbyJS',
  'Next.js',
  'CGP',
  'ISUCON',
  'パフォーマンス',
  'Rust',
  'Terraform',
  'Deno',
  'ターミナル',
  'Electron',
  'ESlint',
  'Node.js',
  'Google Cloud',
  'git',
  'Linux',
  'アクセシビリティ',
  'Jest',
  'キーボード',
  '英語',
  '分割キーボード',
  'Netlify',
  'Vercel',
  '自動化',
  'シェル',
  'jest',
  'css',
];

type TagAutoCompleteProps = {
  selectedTags?: string[];
  onChange?: (tags: string[]) => void;
};

export const TagAutoComplete: FC<TagAutoCompleteProps> = ({
  selectedTags: _selectedTags = [],
  onChange,
}) => {
  const [suggestTags, setSuggestTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>(_selectedTags);
  const [value, setValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);

    if (value === '') {
      setSuggestTags([]);
    } else {
      const newSuggestTags = tags.filter((tag) =>
        tag.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestTags(newSuggestTags);
    }
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.code === 'Backspace') {
      setSelectedTags((prev) => prev.slice(0, -1));
    }
    if (e.code === 'Escape') {
      ref.current?.blur();
    }
  }, []);

  const handleFocus = useCallback(() => {
    if (value === '') {
      setSuggestTags(tags);
    } else {
      const newSuggestTags = tags.filter((tag) => tag.includes(value));
      setSuggestTags(newSuggestTags);
    }
  }, [value]);

  const handleBlur = useCallback(() => {
    setSuggestTags([]);
  }, []);

  const handleMouseDownListItem = useCallback(
    (e: React.MouseEvent, tag: string) => {
      // タグを選択した場合はblurイベントを発生させない
      e.preventDefault();
      setSelectedTags((prev) => [...prev, tag]);
      setValue('');
    },
    []
  );

  useEffect(() => {
    onChange?.(selectedTags);
  }, [onChange, selectedTags]);

  return (
    <Input as="div" className={root}>
      {selectedTags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        className={tagInput}
      />
      {/* 配列形式でformDataを送信する */}
      {selectedTags.map((tag) => (
        <input
          key={tag}
          type="hidden"
          name={`tag`}
          value={tag}
          aria-hidden="true"
        />
      ))}
      {suggestTags.length > 0 && (
        <Box
          border="1px solid #ccc"
          borderRadius="md"
          p="2"
          className={autoCompleteBox}
        >
          <List>
            {suggestTags.map((tag) => (
              <ListItem
                key={tag}
                className={autoCompleteItem}
                onMouseDown={(e) => handleMouseDownListItem(e, tag)}
              >
                {tag}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Input>
  );
};

const root = css`
  padding: 8px;
  display: flex;
  column-gap: 4px;
  // Themeの設定で上書きする
  outline-offset: 0 !important;
  &:focus-within {
    outline-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
  }
`;

const tagInput = css`
  display: block;
  width: 100%;
  height: 100%;
  outline: none;
  flex: 1;
`;

const autoCompleteBox = css`
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 1;
  background: white;
  width: 100%;
  margin-top: 4px;
`;

const autoCompleteItem = css`
  &:hover {
    background: #f5f5f5;
  }
`;
