import { checkDateIsEqual } from '@utils/checkDateIsEqual';

export const checkIsToday = (date: Date) => {
  const today = new Date();

  return checkDateIsEqual(today, date);
};
