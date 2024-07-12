import React, { FC } from 'react';

import { ControlPanel } from '@components/TasksBody/components/ControlPanel';
import { TasksList } from '@components/TasksBody/components/TasksList';
import { TasksBodyContainer } from '@components/TasksBody/styled';
import { useTasks } from '@hooks/useTasks';
import { DateType } from '@type/calendar';

type TasksBodyType = {
  closeTasks: () => void;
  selectedDate: DateType;
};

export const TasksBody: FC<TasksBodyType> = ({ closeTasks, selectedDate }) => {
  const { addTask, tasks, updateTask, deleteTask } = useTasks({ date: selectedDate.date });

  const currentTasks = tasks[selectedDate.date.toString()];

  return (
    <TasksBodyContainer>
      <ControlPanel addTask={addTask} closeTasks={closeTasks} selectedDate={selectedDate} />
      <TasksList
        tasks={currentTasks}
        currentTasksDate={selectedDate.date}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </TasksBodyContainer>
  );
};
