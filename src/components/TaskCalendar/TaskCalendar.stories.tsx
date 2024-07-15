import React from 'react';

import { TaskCalendar } from './index';
import { FirstWeekDay } from '../../constants/calendar';
import { Holidays } from '../../constants/holidays';

export default {
  title: 'components/TaskCalendar',
  component: TaskCalendar,
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

export const TaskCalendarStoryTemplate = ({ ...args }) => <TaskCalendar {...args} />;

TaskCalendarStoryTemplate.storyName = 'TaskCalendar';

export const WithEnglishLocale = TaskCalendarStoryTemplate.bind({});
WithEnglishLocale.args = {
  locale: 'en-US',
};

export const WithChineseLocale = TaskCalendarStoryTemplate.bind({});
WithChineseLocale.args = {
  locale: 'zh-Hans-CN',
};

export const WithCustomYearLimit = TaskCalendarStoryTemplate.bind({});
WithCustomYearLimit.args = {
  maxYear: 2050,
  minYear: 2020,
};

export const StartWithSunday = TaskCalendarStoryTemplate.bind({});
StartWithSunday.args = {
  firstWeekDay: FirstWeekDay.SUNDAY,
};
