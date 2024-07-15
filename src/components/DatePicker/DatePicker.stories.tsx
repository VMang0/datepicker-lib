import React from 'react';

import { FirstWeekDay } from '@constants/calendar';
import { Holidays } from '@constants/holidays';

import { DatePicker } from './index';

export default {
  title: 'components/DatePicker',
  component: DatePicker,
  args: {
    selectedDate: new Date(),
    isShowWeekends: false,
    isShowHolidays: false,
    holidays: Holidays,
  },
  parameters: {
    controls: {
      exclude: ['innerControl'],
    },
  },
};

export const DatePickerStoryTemplate = ({ ...args }) => <DatePicker {...args} />;

DatePickerStoryTemplate.storyName = 'DatePicker';

export const WithEnglishLocale = DatePickerStoryTemplate.bind({});
WithEnglishLocale.args = {
  locale: 'en-US',
};

export const WithChineseLocale = DatePickerStoryTemplate.bind({});
WithChineseLocale.args = {
  locale: 'zh-Hans-CN',
};

export const WithCustomYearLimit = DatePickerStoryTemplate.bind({});
WithCustomYearLimit.args = {
  maxYear: 2050,
  minYear: 2020,
};

export const StartWithSunday = DatePickerStoryTemplate.bind({});
StartWithSunday.args = {
  firstWeekDay: FirstWeekDay.SUNDAY,
};
