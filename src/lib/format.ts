export const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  const year = parsedDate.getUTCFullYear();
  const month = String(parsedDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(parsedDate.getUTCDate()).padStart(2, '0');

  return `${year}年${month}月${day}日`;
};
