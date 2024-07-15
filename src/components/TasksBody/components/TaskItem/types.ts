import { TaskType } from '@type/tasks';

export type TaskItemPropsType = {
  task: TaskType;
  currentTasksDate: Date;
  updateTask: (date: Date, taskId: string, info: Partial<TaskType>) => void;
  deleteTask: (date: Date, taskId: string) => void;
};
