import React, { FC, useState } from 'react';

import { DaysBody } from '@components/Calendar/components/Body/components/DaysBody';
import { MonthsBody } from '@components/Calendar/components/Body/components/MonthsBody';
import { YearsBody } from '@components/Calendar/components/Body/components/YearsBody';
import { BodyContainer } from '@components/Calendar/components/Body/styled';
import { BodyType } from '@components/Calendar/components/Body/types';
import { TasksBody } from '@components/TasksBody';
import { CalendarMode } from '@constants/calendar';

export const Body: FC<BodyType> = ({
  calendarState,
  locale,
  selectDate,
  startDate,
  endDate,
  setSelectedDay,
  firstWeekDay,
  setSelectedMonthByIndex,
  setMode,
  setSelectedYear,
  isViewTasks,
  holidays,
  isShowWeekends,
  isShowHolidays,
}) => {
  const [isTaskPanelOpen, setIsTaskPanelOpen] = useState(false);

  const handleTaskPanel = () => setIsTaskPanelOpen((prevState) => !prevState);

  return (
    <BodyContainer>
      {calendarState.mode === CalendarMode.DAY && !isTaskPanelOpen && (
        <DaysBody
          calendarState={calendarState}
          locale={locale}
          startDate={startDate}
          endDate={endDate}
          firstWeekDay={firstWeekDay}
          selectDate={selectDate}
          setSelectedDay={setSelectedDay}
          openTasks={handleTaskPanel}
          isViewTasks={isViewTasks}
          holidays={holidays}
          isShowWeekends={isShowWeekends}
          isShowHolidays={isShowHolidays}
        />
      )}
      {calendarState.mode === CalendarMode.MONTH && (
        <MonthsBody
          calendarState={calendarState}
          locale={locale}
          setSelectedMonthByIndex={setSelectedMonthByIndex}
          setMode={setMode}
        />
      )}
      {calendarState.mode === CalendarMode.YEAR && (
        <YearsBody calendarState={calendarState} locale={locale} setMode={setMode} setSelectedYear={setSelectedYear} />
      )}
      {calendarState.mode === CalendarMode.DAY && isTaskPanelOpen && isViewTasks && (
        <TasksBody closeTasks={handleTaskPanel} selectedDate={calendarState.selectedDay} />
      )}
    </BodyContainer>
  );
};
