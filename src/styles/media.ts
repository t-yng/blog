import { breakpoints } from './token';

export const screen = {
  sm: `@media screen and (max-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.md})`,
  over(breakpoint: keyof typeof breakpoints) {
    return `@media screen and (min-width: ${breakpoints[breakpoint]})`;
  },
  under(breakpoint: keyof typeof breakpoints) {
    return `@media screen and (max-width: ${breakpoints[breakpoint]})`;
  },
};
