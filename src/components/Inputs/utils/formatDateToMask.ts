export const formatDateToMask = (value: string): string => {
  const date = value.replace(/\D/g, '');
  if (date.length <= 2) {
    return date;
  }
  if (date.length <= 4) {
    return `${date.slice(0, 2)}/${date.slice(2)}`;
  }
  return `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4)}`;
};
