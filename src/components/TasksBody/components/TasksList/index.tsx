import React, { FC } from 'react';

import { TaskItem } from '@components/TasksBody/components/TaskItem';
import { TasksListContainer } from '@components/TasksBody/components/TasksList/styled';
import { TaskListPropsType } from '@components/TasksBody/components/TasksList/types';

export const TasksList: FC<TaskListPropsType> = ({ tasks, currentTasksDate, updateTask, deleteTask }) => {
  return (
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
      {(!tasks || tasks.length === 0) && <span>Ничего нет</span>}
    </TasksListContainer>
  );
};
