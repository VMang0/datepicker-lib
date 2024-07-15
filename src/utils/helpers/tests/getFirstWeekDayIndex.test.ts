import { FirstWeekDay } from '@constants/calendar';
import { getFirstWeekDayIndex } from '@utils/helpers/getFirstWeekDayIndex';

describe('getFirstWeekDayIndex', () => {
  test('should return 2 for MONDAY', () => {
    expect(getFirstWeekDayIndex(FirstWeekDay.MONDAY)).toBe(2);
  });

  test('should return 1 for SUNDAY', () => {
    expect(getFirstWeekDayIndex(FirstWeekDay.SUNDAY)).toBe(1);
  });
  test('should return 1 for default cases', () => {
    expect(getFirstWeekDayIndex(FirstWeekDay.SUNDAY)).toBe(1);
    expect(getFirstWeekDayIndex('SATURDAY')).toBe(1);
    expect(getFirstWeekDayIndex('FRIDAY')).toBe(1);
    expect(getFirstWeekDayIndex('THURSDAY')).toBe(1);
    expect(getFirstWeekDayIndex('WEDNESDAY')).toBe(1);
    expect(getFirstWeekDayIndex('TUESDAY')).toBe(1);
  });
});
