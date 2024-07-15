import React, { FC } from 'react';

import { TaskItem } from '@components/TasksBody/components/TaskItem';
import { Label, TasksListContainer } from '@components/TasksBody/components/TasksList/styled';
import { TaskListPropsType } from '@components/TasksBody/components/TasksList/types';

export const TasksList: FC<TaskListPropsType> = ({ tasks, currentTasksDate, updateTask, deleteTask }) => (
  <TasksListContainer>
    {tasks &&
      tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          currentTasksDate={currentTasksDate}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    {(!tasks || tasks.length === 0) && <Label>You can add your first task</Label>}
  </TasksListContainer>
);
