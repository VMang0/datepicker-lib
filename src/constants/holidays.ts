export type HolidayType = {
  name: string;
  month: number;
  day: number;
};
export const Holidays: HolidayType[] = [
  { name: 'День Конституции', month: 3, day: 15 },
  { name: 'День единения народов Беларуси и России', month: 4, day: 2 },
  { name: 'День Победы', month: 5, day: 9 },
  { name: 'День Независимости Республики Беларусь (День Республики)', month: 7, day: 3 },
  { name: 'День народного единства', month: 9, day: 17 },
  { name: 'Новый год', month: 1, day: 1 },
  { name: 'День защитников Отечества и Вооруженных Сил Республики Беларусь', month: 2, day: 23 },
  { name: 'День женщин', month: 3, day: 8 },
  { name: 'Праздник труда', month: 3, day: 1 },
  { name: 'День Октябрьской революции', month: 11, day: 7 },
  { name: 'Рождество Христово (православное Рождество)', month: 1, day: 7 },
  { name: 'Рождество Христово (католическое Рождество)', month: 12, day: 25 },
];
