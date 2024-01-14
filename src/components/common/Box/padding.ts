import { CSSProperties, css } from 'linaria';
import { screen } from '../../../styles/media';
import { breakpoints } from '../../../styles/token';

type Padding =
  | CSSProperties['padding']
  | {
      [key in keyof typeof breakpoints]?: CSSProperties['padding'];
    };

export type PaddingProps = {
  p?: Padding;
  pt?: Padding;
  pr?: Padding;
  pb?: Padding;
  pl?: Padding;
  px?: Padding;
  py?: Padding;
};

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

const createPaddingVariables = (p?: Padding) => {
  if (typeof p === 'object') {
    return {
      '--padding': p,
      '--sm-padding': p.sm || undefined,
      '--md-padding': p.md || p.sm || undefined,
      '--lg-padding': p.lg || p.md || p.sm || undefined,
    };
  } else {
    return {
      '--padding': p,
    };
  }
};

const createPaddingTopVariables = (pt?: Padding, py?: Padding) => {
  if (typeof pt === 'object') {
    return {
      '--padding-top': pt.sm || pt.md || pt.lg || undefined,
      '--sm-padding-top': pt.sm || undefined,
      '--md-padding-top': pt.md || pt.sm || undefined,
      '--lg-padding-top': pt.lg || pt.md || pt.sm || undefined,
    };
  } else if (typeof py === 'object') {
    return {
      '--padding-top': py.sm || py.md || py.lg || undefined,
      '--sm-padding-top': py.sm || undefined,
      '--md-padding-top': py.md || py.sm || undefined,
      '--lg-padding-top': py.lg || py.md || py.sm || undefined,
    };
  } else {
    return {
      '--padding-top': pt || py,
    };
  }
};

const createPaddingBottomVariables = (pb?: Padding, py?: Padding) => {
  if (typeof pb === 'object') {
    return {
      '--padding-bottom': pb.sm || pb.md || pb.lg || undefined,
      '--sm-padding-bottom': pb.sm || undefined,
      '--md-padding-bottom': pb.md || pb.sm || undefined,
      '--lg-padding-bottom': pb.lg || pb.md || pb.sm || undefined,
    };
  } else if (typeof py === 'object') {
    return {
      '--padding-bottom': py.sm || py.md || py.lg || undefined,
      '--sm-padding-bottom': py.sm || undefined,
      '--md-padding-bottom': py.md || py.sm || undefined,
      '--lg-padding-bottom': py.lg || py.md || py.sm || undefined,
    };
  } else {
    return {
      '--padding-bottom': pb || py,
    };
  }
};

const createPaddingRightVariables = (pr?: Padding, px?: Padding) => {
  if (typeof pr === 'object') {
    return {
      '--padding-right': pr.sm || pr.md || pr.lg || undefined,
      '--sm-padding-right': pr.sm || undefined,
      '--md-padding-right': pr.md || pr.sm || undefined,
      '--lg-padding-right': pr.lg || pr.md || pr.sm || undefined,
    };
  } else if (typeof px === 'object') {
    return {
      '--padding-right': px.sm || px.md || px.lg || undefined,
      '--sm-padding-right': px.sm || undefined,
      '--md-padding-right': px.md || px.sm || undefined,
      '--lg-padding-right': px.lg || px.md || px.sm || undefined,
    };
  } else {
    return {
      '--padding-right': pr || px,
    };
  }
};

const createPaddingLeftVariables = (pl?: Padding, px?: Padding) => {
  if (typeof pl === 'object') {
    return {
      '--padding-left': pl.sm || pl.md || pl.lg || undefined,
      '--sm-padding-left': pl.sm || undefined,
      '--md-padding-left': pl.md || pl.sm || undefined,
      '--lg-padding-left': pl.lg || pl.md || pl.sm || undefined,
    };
  } else if (typeof px === 'object') {
    return {
      '--padding-left': px.sm || px.md || px.lg || undefined,
      '--sm-padding-left': px.sm || undefined,
      '--md-padding-left': px.md || px.sm || undefined,
      '--lg-padding-left': px.lg || px.md || px.sm || undefined,
    };
  } else {
    return {
      '--padding-left': pl || px,
    };
  }
};

export const createPaddingCssVariables = ({
  p,
  pt,
  pr,
  pb,
  pl,
  py,
  px,
}: PaddingProps) => {
  return {
    ...createPaddingVariables(p),
    ...createPaddingTopVariables(pt, py),
    ...createPaddingRightVariables(pr, px),
    ...createPaddingBottomVariables(pb, py),
    ...createPaddingLeftVariables(pl, px),
  };
};

export const padding = css`
  padding: var(--padding, initial);
  padding-top: var(--padding-top, initial);
  padding-right: var(--padding-right, initial);
  padding-bottom: var(--padding-bottom, initial);
  padding-left: var(--padding-left, initial);
`;

export const smPadding = css`
  ${screen.sm} {
    padding: var(--sm-padding, initial);
    padding-top: var(--sm-padding-top, initial);
    padding-right: var(--sm-padding-right, initial);
    padding-bottom: var(--sm-padding-bottom, initial);
    padding-left: var(--sm-padding-left, initial);
  }
`;

export const mdPadding = css`
  ${screen.md} {
    padding: var(--md-padding, initial);
    padding-top: var(--md-padding-top, initial);
    padding-right: var(--md-padding-right, initial);
    padding-bottom: var(--md-padding-bottom, initial);
    padding-left: var(--md-padding-left, initial);
  }
`;

export const lgPadding = css`
  ${screen.lg} {
    padding: var(--lg-padding, initial);
    padding-top: var(--lg-padding-top, initial);
    padding-right: var(--lg-padding-right, initial);
    padding-bottom: var(--lg-padding-bottom, initial);
    padding-left: var(--lg-padding-left, initial);
  }
`;
