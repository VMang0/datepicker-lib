import { createDate } from '@utils/createDate';
import { getWeekDaysNames } from '@utils/getWeekDaysNames';

jest.mock('@utils/createDate', () => ({
  createDate: jest.fn(),
}));

const mockCreateDate = createDate as jest.MockedFunction<typeof createDate>;

describe('getWeekDaysNames', () => {
  beforeEach(() => {
    mockCreateDate.mockImplementation(({ date, locale }) => {
      const dayNames = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
      const dayShortNames = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
      const dayIndex = date.getDay();
      const day = dayNames[dayIndex];
      const dayShort = dayShortNames[dayIndex];
      const dayNumberInWeek = dayIndex + 1;

      return {
        date,
        dayNumber: date.getDate(),
        day,
        dayNumberInWeek,
        dayShort,
        year: date.getFullYear(),
        yearShort: date.toLocaleDateString(locale, { year: '2-digit' }),
        month: date.toLocaleDateString(locale, { month: 'long' }),
        monthShort: date.toLocaleDateString(locale, { month: 'short' }),
        monthNumber: date.getMonth() + 1,
        monthIndex: dayIndex,
        timestamp: date.getTime(),
        week: 1,
      };
    });
  });

  it('should return the correct full day names for the default locale and Monday as the first day of the week', () => {
    const weekDays = getWeekDaysNames(2);
    const fullDayNames = weekDays.map((d) => d.day);
    expect(fullDayNames).toEqual(['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']);
  });

  it('should return the correct short day names for the default locale and Monday as the first day of the week', () => {
    const weekDays = getWeekDaysNames(2);
    const shortDayNames = weekDays.map((d) => d.dayShort);
    expect(shortDayNames).toEqual(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
  });

  it('should start the week on the specified first day of the week', () => {
    const weekDays = getWeekDaysNames(1);
    const fullDayNames = weekDays.map((d) => d.day);
    expect(fullDayNames).toEqual(['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']);
  });

  it('should start the week on the correct first day when `firstWeekDay` is 1', () => {
    const weekDays = getWeekDaysNames(2);
    const fullDayNames = weekDays.map((d) => d.day);
    expect(fullDayNames).toEqual(['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']);
  });
});
