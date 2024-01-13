export const breakpoints = {
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const screen = {
  sm: `@media screen and (max-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.md})`,
};
