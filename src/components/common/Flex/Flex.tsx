import {
  CSSProperties,
  ComponentPropsWithoutRef,
  PropsWithChildren,
} from 'react';
import { styled } from 'linaria/react';
import { Box } from '../Box';

type FlexCssProps = {
  direction: CSSProperties['flexDirection'];
  justifyContent: CSSProperties['justifyContent'];
  alignItems: CSSProperties['alignItems'];
  gap: CSSProperties['gap'];
};

type Props = PropsWithChildren<
  Partial<FlexCssProps> & ComponentPropsWithoutRef<typeof Box>
>;

export const Flex = styled(Box)<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  gap: ${(props) => props.gap || 0};
`;
