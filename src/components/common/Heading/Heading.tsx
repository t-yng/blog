import { FC } from 'react';
import { css, cx } from 'linaria';
import { fontSize } from '@/styles/token';
import { screen } from '@/styles/media';
import { Text } from '../Text';

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof Text>;

export const Heading: FC<Props> = ({ level, className, children, ...rest }) => {
  return (
    <Text
      as={`h${level}`}
      className={cx(level === 1 && heading1, className)}
      {...rest}
    >
      {children}
    </Text>
  );
};

const heading1 = css`
  font-size: ${fontSize['2xl']};
  ${screen.over('md')} {
    font-size: ${fontSize['3xl']};
  }
`;
