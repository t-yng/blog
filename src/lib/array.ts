export const range = (start: number, count: number) =>
  [...Array(count)].map((_, i) => i + start);
