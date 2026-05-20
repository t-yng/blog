import { Text } from '../Text';
import type { ComponentProps, FC, ReactNode } from 'react';

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
} & ComponentProps<typeof Text>;

export const Heading: FC<Props> = ({ level, className, children, ...rest }) => {
  return (
    <Text
      as={`h${level}`}
      className={className}
      fontSize={level === 1 ? { base: '2xl', md: '3xl' } : undefined}
      {...rest}
    >
      {children}
    </Text>
  );
};
