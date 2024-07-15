import React, { ComponentType, useState } from 'react';

import { DateInput } from '@components/Inputs/components/DateInput';
import { CalendarProps } from '@type/calendar';

export const withDateInput = (Component: ComponentType<CalendarProps>) => (props: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleShowCalendar = () => setIsCalendarOpen((prevState) => !prevState);

  return (
    <>
      <DateInput selectedDate={selectedDate} selectDate={setSelectedDate} onFocus={handleShowCalendar} isClearDate />
      {isCalendarOpen && <Component {...props} selectDate={setSelectedDate} selectedDate={selectedDate} />}
    </>
  );
};
