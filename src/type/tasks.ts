export type TaskType = {
  id: string;
  title: string;
  status: 'expired' | 'in-progress' | 'done';
};

export type TaskMapType = Record<string, TaskType[]>;
