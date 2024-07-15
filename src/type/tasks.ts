import { TasksStatus } from '@constants/calendar';

export type TaskType = {
  id: string;
  title: string;
  status: TasksStatus;
};

export type TaskMapType = Record<string, TaskType[]>;
