import React, { ComponentType, useRef, useState } from 'react';

import { DateRangeInput } from '@components/Inputs/components/DateRangeInput';
import { useClickOutside } from '@hooks/useClickOutside';
import { CalendarProps } from '@type/calendar';
import { MainContainer } from '@utils/hocs/styled';

export const withRangeDateInput = (Component: ComponentType<CalendarProps>) => (props: CalendarProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

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

  const handleShowCalendar = () => setIsCalendarOpen(true);

  const handleHideCalendar = () => setIsCalendarOpen(false);

  const handleOpenCalendarState = () => (isCalendarOpen ? handleHideCalendar() : handleShowCalendar());

  useClickOutside(calendarRef, handleHideCalendar);

  return (
    <MainContainer ref={calendarRef}>
      <DateRangeInput
        isClearDate={false}
        selectedStartDate={startDate}
        setSelectedStartDate={setStartDate}
        selectedEndDate={endDate}
        setSelectedEndDate={setEndDate}
        handleClearRange={handleClearRange}
        onFocus={handleShowCalendar}
        isCalendarOpen={isCalendarOpen}
        handleOpenCalendarState={handleOpenCalendarState}
      />
      {isCalendarOpen && (
        <Component
          startDate={startDate}
          endDate={endDate}
          selectedDate={startDate}
          selectDate={handleSelectDate}
          isRenderFooter
          handleFooterClick={handleClearRange}
          footerTitle="Clear"
          styledCalendarPosition="absolute"
          {...props}
        />
      )}
    </MainContainer>
  );
};
