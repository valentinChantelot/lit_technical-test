export const truncate = (str: string, limit: number = 120) => {
  if (str.length < limit) {
    return str;
  }

  return `${str.slice(0, limit)}...`;
};
