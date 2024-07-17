import React, { ChangeEventHandler, FC } from 'react';

import {
  DeleteButton,
  DeleteIcon,
  StatusBadge,
  TaskInput,
  TaskItemContainer,
} from '@components/TasksBody/components/TaskItem/styled';
import { TaskItemPropsType } from '@components/TasksBody/components/TaskItem/types';
import { TasksStatus } from '@constants/calendar';
import { DELETE_TASK_TEST_ID, INPUT_TASK_TEST_ID } from '@constants/tests';

export const TaskItem: FC<TaskItemPropsType> = ({ task, currentTasksDate, updateTask, deleteTask }) => {
  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateTask(currentTasksDate, task.id, { title: e.target.value });
  };

  const getNextStatus = (currentStatus: TasksStatus): TasksStatus => {
    if (currentStatus === TasksStatus.EXPIRED) return TasksStatus.INPROGRESS;
    if (currentStatus === TasksStatus.INPROGRESS) return TasksStatus.DONE;
    if (currentStatus === TasksStatus.DONE) return TasksStatus.EXPIRED;
    return null;
  };

  const handleChangeStatus = () => {
    const newStatus = getNextStatus(task.status);
    updateTask(currentTasksDate, task.id, { status: newStatus });
  };

  const handleDeleteTask = () => deleteTask(currentTasksDate, task.id);

  return (
    <TaskItemContainer>
      <TaskInput defaultValue={task.title} onBlur={handleChangeTitle} data-testid={INPUT_TASK_TEST_ID} />
      <StatusBadge type="button" onClick={handleChangeStatus} status={task.status} />
      <DeleteButton type="button" onClick={handleDeleteTask} data-testid={DELETE_TASK_TEST_ID}>
        <DeleteIcon />
      </DeleteButton>
    </TaskItemContainer>
  );
};
