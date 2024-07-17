import React, { ComponentType, useRef, useState } from 'react';

import { DateRangeInput } from '@components/Inputs/components/DateRangeInput';
import { MainContainer } from '@hocs/styled';
import { useClickOutside } from '@hooks/useClickOutside';
import { CalendarProps } from '@type/calendar';

export const withRangeDateInput = (Component: ComponentType<CalendarProps>) => (props: CalendarProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleSelectDate = (date: Date) => {
    const isStartDateEmpty = !startDate;
    const isRangeComplete = startDate && endDate;

    if (isStartDateEmpty || isRangeComplete) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date >= startDate ? date : null);
      setStartDate(date < startDate ? date : startDate);
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
