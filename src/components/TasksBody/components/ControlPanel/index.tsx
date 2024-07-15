import React, { FC } from 'react';

import {
  AddTaskIcon,
  ArrowBack,
  ArrowButton,
  ControlPanelContainer,
  DateLabel,
} from '@components/TasksBody/components/ControlPanel/styled';
import { ControlPanelPropsType } from '@components/TasksBody/components/ControlPanel/types';

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
