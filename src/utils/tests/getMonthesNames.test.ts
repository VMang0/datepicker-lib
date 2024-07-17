import { createDate } from '@utils/createDate';
import { getMonthesNames } from '@utils/getMonthesNames';
import { getWeekNumber } from '@utils/getWeekNumber';

jest.mock('@utils/createDate', () => ({
  createDate: jest.fn(),
}));

const mockCreateDate = createDate as jest.MockedFunction<typeof createDate>;

describe('getMonthesNames', () => {
  beforeEach(() => {
    const today = new Date();

    mockCreateDate.mockImplementation(({ date }) => {
      const monthNames = [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
      ];
      const monthShortNames = [
        'янв.',
        'февр.',
        'март',
        'апр.',
        'май',
        'июнь',
        'июль',
        'авг.',
        'сент.',
        'окт.',
        'нояб.',
        'дек.',
      ];
      const monthIndex = date.getMonth();

      return {
        month: monthNames[monthIndex],
        monthShort: monthShortNames[monthIndex],
        monthIndex,
        date,
        day: date.toLocaleDateString('ru-RU', { weekday: 'long' }),
        dayShort: date.toLocaleDateString('ru-RU', { weekday: 'short' }),
        dayNumber: date.getDate(),
        dayNumberInWeek: date.getDay() + 1,
        year: today.getFullYear(),
        yearShort: date.toLocaleDateString('ru-RU', { year: '2-digit' }),
        monthNumber: date.getMonth() + 1,
        timestamp: date.getTime(),
        week: getWeekNumber(date),
      };
    });
  });

  it('should return the correct short month names', () => {
    const monthes = getMonthesNames('ru-RU');
    const shortNames = monthes.map((m) => m.monthShort);
    expect(shortNames).toEqual([
      'янв.',
      'февр.',
      'март',
      'апр.',
      'май',
      'июнь',
      'июль',
      'авг.',
      'сент.',
      'окт.',
      'нояб.',
      'дек.',
    ]);
  });

  it('should return the correct month indices', () => {
    const monthes = getMonthesNames('ru-RU');
    const indices = monthes.map((m) => m.monthIndex);
    expect(indices).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  it('should return the correct full month names', () => {
    const monthes = getMonthesNames('ru-RU');
    const monthNames = monthes.map((m) => m.month);
    expect(monthNames).toEqual([
      'январь',
      'февраль',
      'март',
      'апрель',
      'май',
      'июнь',
      'июль',
      'август',
      'сентябрь',
      'октябрь',
      'ноябрь',
      'декабрь',
    ]);
  });
});
