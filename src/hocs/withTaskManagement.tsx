import React, { ComponentType, useState } from 'react';

import { CalendarProps } from '@type/calendar';

export const withTaskManagement = (Component: ComponentType<CalendarProps>) => (props: Partial<CalendarProps>) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Component
      {...props}
      isViewTasks
      selectedDate={selectedDate}
      selectDate={setSelectedDate}
      styledCalendarPosition="block"
    />
  );
};
