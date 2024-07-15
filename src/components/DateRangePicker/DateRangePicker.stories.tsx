import React from 'react';

import { DateRangePicker } from './index';
import { FirstWeekDay } from '../../constants/calendar';
import { Holidays } from '../../constants/holidays';
import { TaskCalendarStoryTemplate } from '../TaskCalendar/TaskCalendar.stories';

export default {
  title: 'components/DateRangePicker',
  component: DateRangePicker,
  args: {
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

export const DateRangePickerStoryTemplate = ({ ...args }) => <DateRangePicker {...args} />;

DateRangePickerStoryTemplate.storyName = 'DateRangePicker';

export const WithEnglishLocale = DateRangePickerStoryTemplate.bind({});
WithEnglishLocale.args = {
  locale: 'en-US',
};

export const WithChineseLocale = DateRangePickerStoryTemplate.bind({});
WithChineseLocale.args = {
  locale: 'zh-Hans-CN',
};

export const WithCustomYearLimit = DateRangePickerStoryTemplate.bind({});
WithCustomYearLimit.args = {
  maxYear: 2050,
  minYear: 2020,
};

export const StartWithSunday = TaskCalendarStoryTemplate.bind({});
StartWithSunday.args = {
  firstWeekDay: FirstWeekDay.SUNDAY,
};
