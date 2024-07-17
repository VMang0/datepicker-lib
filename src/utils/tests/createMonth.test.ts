import { createDate } from '@utils/createDate';
import { createMonth } from '@utils/createMonth';
import { getMonthNumberOfDays } from '@utils/getMonthNumberOfDays';
import { getWeekNumber } from '@utils/getWeekNumber';

jest.mock('@utils/createDate', () => ({
  createDate: jest.fn(),
}));

jest.mock('@utils/getMonthNumberOfDays', () => ({
  getMonthNumberOfDays: jest.fn(),
}));

const mockCreateDate = createDate as jest.MockedFunction<typeof createDate>;
const mockGetMonthNumberOfDays = getMonthNumberOfDays as jest.MockedFunction<typeof getMonthNumberOfDays>;

describe('createMonth', () => {
  beforeEach(() => {
    mockCreateDate.mockImplementation(({ date, locale = 'en-US' }) => {
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayShortNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const dayIndex = date.getDay();
      const day = dayNames[dayIndex];
      const dayShort = dayShortNames[dayIndex];
      const dayNumberInWeek = dayIndex + 1;

      return {
        date,
        day,
        dayShort,
        dayNumberInWeek,
        dayNumber: date.getDate(),
        year: date.getFullYear(),
        yearShort: date.toLocaleDateString(locale, { year: '2-digit' }),
        month: date.toLocaleDateString(locale, { month: 'long' }),
        monthShort: date.toLocaleDateString(locale, { month: 'short' }),
        monthNumber: date.getMonth() + 1,
        monthIndex: date.getMonth(),
        timestamp: date.getTime(),
        week: getWeekNumber(date),
      };
    });

    mockGetMonthNumberOfDays.mockImplementation(() => 31);
  });

  it('should handle custom locales', () => {
    const date = new Date('2024-07-10');
    const locale = 'fr';
    createMonth({ date, locale });

    expect(mockCreateDate).toHaveBeenCalledWith({ date, locale });
  });

  it('should correctly create a month with the correct number of days', () => {
    mockGetMonthNumberOfDays.mockImplementation((monthIndex) => {
      return monthIndex === 1 ? 29 : 30;
    });

    const date = new Date('2024-02-10');
    const monthInfo = createMonth({ date });

    expect(monthInfo.createMonthDays()).toHaveLength(29);

    const lastDay = monthInfo.getDay(29);
    expect(lastDay.day).toBe('Thursday');
    expect(lastDay.dayShort).toBe('Thu');
    expect(lastDay.dayNumberInWeek).toBe(5);
  });
});
