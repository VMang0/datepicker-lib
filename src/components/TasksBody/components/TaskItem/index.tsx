import React, { ChangeEventHandler, FC } from 'react';

import {
  DeleteButton,
  DeleteIcon,
  StatusBadge,
  TaskInput,
  TaskItemContainer,
} from '@components/TasksBody/components/TaskItem/styled';
import { TaskItemPropsType } from '@components/TasksBody/components/TaskItem/types';

export const TaskItem: FC<TaskItemPropsType> = ({ task, currentTasksDate, updateTask, deleteTask }) => {
  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateTask(currentTasksDate, task.id, { title: e.target.value });
  };

  const getNextStatus = (currentStatus: 'expired' | 'in-progress' | 'done'): 'expired' | 'in-progress' | 'done' => {
    if (currentStatus === 'expired') return 'in-progress';
    if (currentStatus === 'in-progress') return 'done';
    if (currentStatus === 'done') return 'expired';
    return null;
  };

  const handleChangeStatus = () => {
    const newStatus = getNextStatus(task.status);
    updateTask(currentTasksDate, task.id, { status: newStatus });
  };

  const handleDeleteTask = () => deleteTask(currentTasksDate, task.id);

  return (
    <TaskItemContainer>
      <TaskInput defaultValue={task.title} onBlur={handleChangeTitle} />
      <StatusBadge type="button" onClick={handleChangeStatus} status={task.status} />
      <DeleteButton type="button" onClick={handleDeleteTask}>
        <DeleteIcon />
      </DeleteButton>
    </TaskItemContainer>
  );
};
