import { Meta, StoryObj } from '@storybook/react';

import { FirstWeekDay, HOLIDAY_COLOR } from '@constants/calendar';
import { Holidays } from '@constants/holidays';

import { RangeDatePicker } from './index';

type Story = StoryObj<typeof RangeDatePicker>;

const meta: Meta<typeof RangeDatePicker> = {
  title: 'components/RangeDatePicker',
  component: RangeDatePicker,
  parameters: {
    controls: {
      exclude: ['innerControl'],
    },
  },
};

export const Initial: Story = {
  args: {},
};

export const WithEnglishLocale: Story = {
  args: {
    locale: 'en-US',
  },
};

export const WithChineseLocale: Story = {
  args: {
    locale: 'zh-Hans-CN',
  },
};

export const WithVisibleWeekends: Story = {
  args: {
    isShowWeekends: true,
  },
};

export const WithVisibleHolidays: Story = {
  args: {
    isShowHolidays: true,
    holidayColor: HOLIDAY_COLOR,
    holidays: Holidays,
  },
};

export const WithCustomRangeLimit: Story = {
  args: {
    minRangeDate: { year: new Date().getFullYear() - 10, month: 12, day: 1 },
    maxRangeDate: { year: new Date().getFullYear() + 10, month: 12, day: 1 },
  },
};

export const WithSundayStart: Story = {
  args: {
    firstWeekDay: FirstWeekDay.SUNDAY,
  },
};

export default meta;
