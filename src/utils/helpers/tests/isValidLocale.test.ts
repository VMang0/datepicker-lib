import { isValidLocale } from '@utils/helpers/isValidLocale';

describe('isValidLocale', () => {
  test('should return true for a valid locale', () => {
    expect(isValidLocale('en-US')).toBe(true);
    expect(isValidLocale('fr-FR')).toBe(true);
    expect(isValidLocale(null)).toBe(false);
  });
});
