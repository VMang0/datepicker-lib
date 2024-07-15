export const isValidDate = (dateString: string): boolean => {
  const parts = dateString.split('/');
  if (parts.length !== 3) return false;

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) return false;
  if (month < 0 || month > 11) return false;
  if (day < 1 || day > 31) return false;
  if (year < 1000 || year > 3000) return false;

  const date = new Date(year, month, day);

  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
};

export const isRangeDatesValid = (formattedStart: string, formattedEnd: string) => {
  return isValidDate(formattedStart) && isValidDate(formattedEnd);
};
