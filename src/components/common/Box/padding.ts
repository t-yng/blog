import { CSSProperties } from 'react';
import { breakpoints } from '../../../styles/token';

type Padding =
  | CSSProperties['padding']
  | {
      [key in keyof typeof breakpoints]?: CSSProperties['padding'];
    };

export type PaddingCssProps = {
  p: Padding;
  pt: Padding;
  pr: Padding;
  pb: Padding;
  pl: Padding;
  px: Padding;
  py: Padding;
};
export type PaddingProps = Partial<PaddingCssProps>;

export const hasSmPadding = ({ p, pt, pr, pb, pl, px, py }: PaddingProps) => {
  return (
    (typeof p === 'object' && p.sm != null) ||
    (typeof pt === 'object' && pt.sm != null) ||
    (typeof pr === 'object' && pr.sm != null) ||
    (typeof pb === 'object' && pb.sm != null) ||
    (typeof pl === 'object' && pl.sm != null) ||
    (typeof px === 'object' && px.sm != null) ||
    (typeof py === 'object' && py.sm != null)
  );
};

export const hasMdPadding = ({ p, pt, pr, pb, pl, px, py }: PaddingProps) => {
  return (
    (typeof p === 'object' && p.md != null) ||
    (typeof pt === 'object' && pt.md != null) ||
    (typeof pr === 'object' && pr.md != null) ||
    (typeof pb === 'object' && pb.md != null) ||
    (typeof pl === 'object' && pl.md != null) ||
    (typeof px === 'object' && px.md != null) ||
    (typeof py === 'object' && py.md != null)
  );
};

export const hasLgPadding = ({ p, pt, pr, pb, pl, px, py }: PaddingProps) => {
  return (
    (typeof p === 'object' && p.lg != null) ||
    (typeof pt === 'object' && pt.lg != null) ||
    (typeof pr === 'object' && pr.lg != null) ||
    (typeof pb === 'object' && pb.lg != null) ||
    (typeof pl === 'object' && pl.lg != null) ||
    (typeof px === 'object' && px.lg != null) ||
    (typeof py === 'object' && py.lg != null)
  );
};

export const getPadding = ({ p }: PaddingProps) => {
  if (typeof p === 'object') {
    return p.sm || p.md || p.lg || 0;
  } else {
    return p || 0;
  }
};

export const getPaddingTop = ({ pt, py }: PaddingProps) => {
  if (typeof pt === 'object') {
    return pt.sm || pt.md || pt.lg || 0;
  } else if (typeof py === 'object') {
    return py.sm || py.md || py.lg || 0;
  } else {
    return pt || py || 0;
  }
};

export const getPaddingBottom = ({ pb, py }: PaddingProps) => {
  if (typeof pb === 'object') {
    return pb.sm || pb.md || pb.lg || 0;
  } else if (typeof py === 'object') {
    return py.sm || py.md || py.lg || 0;
  } else {
    return pb || py || 0;
  }
};

export const getPaddingRight = ({ pr, px }: PaddingProps) => {
  if (typeof pr === 'object') {
    return pr.sm || pr.md || pr.lg || 0;
  } else if (typeof px === 'object') {
    return px.sm || px.md || px.lg || 0;
  } else {
    return pr || px || 0;
  }
};

export const getPaddingLeft = ({ pl, px }: PaddingProps) => {
  if (typeof pl === 'object') {
    return pl.sm || pl.md || pl.lg || 0;
  } else if (typeof px === 'object') {
    return px.sm || px.md || px.lg || 0;
  } else {
    return pl || px || 0;
  }
};
