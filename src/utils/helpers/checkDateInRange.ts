export const checkDateInRange = (date: Date, startDate: Date, endDate: Date) => {
  if (!startDate || !endDate) return false;
  return date >= startDate && date <= endDate;
};
