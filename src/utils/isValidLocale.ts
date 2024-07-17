export const isValidLocale = (locale: string): boolean => {
  try {
    new Date().toLocaleDateString(locale);
    return true;
  } catch {
    return false;
  }
};
