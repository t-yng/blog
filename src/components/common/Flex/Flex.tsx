import {
  CSSProperties,
  ComponentPropsWithoutRef,
  FC,
  PropsWithChildren,
} from 'react';
import { css, cx } from 'linaria';
import { Box } from '../Box';

type Props = PropsWithChildren<
  {
    direction?: CSSProperties['flexDirection'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    gap?: CSSProperties['gap'];
  } & ComponentPropsWithoutRef<typeof Box>
>;

export const Flex: FC<Props> = ({
  direction: flexDirection,
  justifyContent,
  alignItems,
  gap,
  children,
  className,
  ...rest
}) => {
  return (
    <Box
      className={cx(flex, className)}
      style={{
        '--flex-direction': flexDirection,
        '--justify-content': justifyContent,
        '--align-items': alignItems,
        '--gap': gap,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

const flex = css`
  display: flex;
  flex-direction: var(--flex-direction, initial);
  justify-content: var(--justify-content, initial);
  align-items: var(--align-items, initial);
  gap: var(--gap, initial);
`;
