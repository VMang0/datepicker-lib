import React, { FC } from 'react';

import {
  AddTaskIcon,
  ArrowBack,
  ArrowButton,
  ControlPanelContainer,
  DateLabel,
} from '@components/TasksBody/components/ControlPanel/styled';
import { DateType } from '@type/calendar';

type ControlPanelPropsType = {
  addTask: () => void;
  closeTasks: () => void;
  selectedDate: DateType;
};

export const ControlPanel: FC<ControlPanelPropsType> = ({ addTask, closeTasks, selectedDate }) => {
  return (
    <ControlPanelContainer>
      <ArrowButton type="button" onClick={closeTasks}>
        <ArrowBack />
      </ArrowButton>
      <DateLabel>{`${selectedDate.month} ${selectedDate.dayNumber}, ${selectedDate.year}`}</DateLabel>
      <ArrowButton type="button" onClick={addTask}>
        <AddTaskIcon />
      </ArrowButton>
    </ControlPanelContainer>
  );
};
