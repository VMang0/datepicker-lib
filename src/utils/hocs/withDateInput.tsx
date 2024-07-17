import React, { ComponentType, useRef, useState } from 'react';

import { DateInput } from '@components/Inputs/components/DateInput';
import { useClickOutside } from '@hooks/useClickOutside';
import { CalendarProps } from '@type/calendar';
import { MainContainer } from '@utils/hocs/styled';

export const withDateInput = (Component: ComponentType<CalendarProps>) => (props: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleShowCalendar = () => setIsCalendarOpen(true);

  const handleHideCalendar = () => setIsCalendarOpen(false);

  const handleOpenCalendarState = () => (isCalendarOpen ? handleHideCalendar() : handleShowCalendar());

  useClickOutside(calendarRef, handleHideCalendar);

  return (
    <MainContainer ref={calendarRef}>
      <DateInput
        {...props}
        isClearDate
        selectedDate={selectedDate}
        selectDate={setSelectedDate}
        onFocus={handleShowCalendar}
        isCalendarOpen={isCalendarOpen}
        handleOpenCalendarState={handleOpenCalendarState}
      />
      {isCalendarOpen && (
        <Component
          {...props}
          selectDate={setSelectedDate}
          selectedDate={selectedDate}
          styledCalendarPosition="absolute"
        />
      )}
    </MainContainer>
  );
};
