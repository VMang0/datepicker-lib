import { createDate } from '@utils/createDate';
import { getWeekNumber } from '@utils/getWeekNumber';
import { isValidLocale } from '@utils/isValidLocale';

jest.mock('@utils/isValidLocale', () => ({
  isValidLocale: jest.fn(),
}));

const mockIsValidLocale = isValidLocale as jest.MockedFunction<typeof isValidLocale>;

describe('createDate', () => {
  beforeEach(() => {
    mockIsValidLocale.mockImplementation((locale) => locale === 'en' || locale === 'ru-RU');
  });

  it('should return correct date properties with default locale', () => {
    const date = new Date('2025-07-10');
    const result = createDate({ date, locale: 'ru-RU' });

    expect(result.date).toBe(date);
    expect(result.dayNumber).toBe(10);
    expect(result.day).toBe('четверг');
    expect(result.dayNumberInWeek).toBe(5);
    expect(result.dayShort).toBe('чт');
    expect(result.year).toBe(2025);
    expect(result.yearShort).toBe('25');
    expect(result.month).toBe('июль');
    expect(result.monthShort).toBe('июль');
    expect(result.monthNumber).toBe(7);
    expect(result.monthIndex).toBe(6);
    expect(result.timestamp).toBe(date.getTime());
    expect(result.week).toBe(getWeekNumber(date));
  });

  it('should return correct date properties with a valid locale', () => {
    const date = new Date('2024-07-10');
    const result = createDate({ date, locale: 'en' });

    expect(result.date).toBe(date);
    expect(result.dayNumber).toBe(10);
    expect(result.day).toBe('Wednesday');
    expect(result.dayNumberInWeek).toBe(4);
    expect(result.dayShort).toBe('Wed');
    expect(result.year).toBe(2024);
    expect(result.yearShort).toBe('24');
    expect(result.month).toBe('July');
    expect(result.monthShort).toBe('Jul');
    expect(result.monthNumber).toBe(7);
    expect(result.monthIndex).toBe(6);
    expect(result.timestamp).toBe(date.getTime());
    expect(result.week).toBe(getWeekNumber(date));
  });

  it('should return correct date properties with a locale that is not default', () => {
    const date = new Date('2024-07-10');
    mockIsValidLocale.mockImplementation((locale) => locale === 'fr');
    const result = createDate({ date, locale: 'fr' });

    expect(result.date).toBe(date);
    expect(result.dayNumber).toBe(10);
    expect(result.day).toBe('mercredi');
    expect(result.dayNumberInWeek).toBe(4);
    expect(result.dayShort).toBe('mer.');
    expect(result.year).toBe(2024);
    expect(result.yearShort).toBe('24');
    expect(result.month).toBe('juillet');
    expect(result.monthShort).toBe('juil.');
    expect(result.monthNumber).toBe(7);
    expect(result.monthIndex).toBe(6);
    expect(result.timestamp).toBe(date.getTime());
    expect(result.week).toBe(getWeekNumber(date));
  });

  it('should return the correct day properties for a different date', () => {
    const date = new Date('2025-01-01');
    const result = createDate({ date, locale: 'ru-RU' });

    expect(result.date).toBe(date);
    expect(result.dayNumber).toBe(1);
    expect(result.day).toBe('среда');
    expect(result.dayNumberInWeek).toBe(4);
    expect(result.dayShort).toBe('ср');
    expect(result.year).toBe(2025);
    expect(result.yearShort).toBe('25');
    expect(result.month).toBe('январь');
    expect(result.monthShort).toBe('янв.');
    expect(result.monthNumber).toBe(1);
    expect(result.monthIndex).toBe(0);
    expect(result.timestamp).toBe(date.getTime());
    expect(result.week).toBe(getWeekNumber(date));
  });

  it('should handle the current date correctly', () => {
    const date = new Date();
    const result = createDate({ date, locale: 'ru-RU' });

    expect(result.date).toBe(date);
    expect(result.dayNumber).toBe(date.getDate());
    expect(result.day).toBe(date.toLocaleDateString('ru-RU', { weekday: 'long' }));
    expect(result.dayNumberInWeek).toBe(date.getDay() + 1);
    expect(result.dayShort).toBe(date.toLocaleDateString('ru-RU', { weekday: 'short' }));
    expect(result.year).toBe(date.getFullYear());
    expect(result.yearShort).toBe(date.toLocaleDateString('ru-RU', { year: '2-digit' }));
    expect(result.month).toBe(date.toLocaleDateString('ru-RU', { month: 'long' }));
    expect(result.monthShort).toBe(date.toLocaleDateString('ru-RU', { month: 'short' }));
    expect(result.monthNumber).toBe(date.getMonth() + 1);
    expect(result.monthIndex).toBe(date.getMonth());
    expect(result.timestamp).toBe(date.getTime());
    expect(result.week).toBe(getWeekNumber(date));
  });
});
