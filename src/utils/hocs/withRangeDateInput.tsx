import React, { ComponentType, useState } from 'react';

import { DateRangeInput } from '@components/Inputs/components/DateRangeInput';
import { CalendarProps } from '@type/calendar';

export const withRangeDateInput = (Component: ComponentType<CalendarProps>) => (props: CalendarProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSelectDate = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (date >= startDate) {
        setEndDate(date);
      } else {
        setStartDate(date);
      }
    }
  };

  const handleClearRange = () => {
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const handleShowCalendar = () => setIsCalendarOpen((prevState) => !prevState);

  return (
    <>
      <DateRangeInput
        isClearDate={false}
        selectedStartDate={startDate}
        setSelectedStartDate={setStartDate}
        selectedEndDate={endDate}
        setSelectedEndDate={setEndDate}
        handleClearRange={handleClearRange}
        onFocus={handleShowCalendar}
      />
      {isCalendarOpen && (
        <Component
          startDate={startDate}
          endDate={endDate}
          selectDate={handleSelectDate}
          isRenderFooter
          handleFooterClick={handleClearRange}
          footerTitle="Clear"
          {...props}
        />
      )}
    </>
  );
};
