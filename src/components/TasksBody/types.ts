import { DateType } from '@type/calendar';

export type TasksBodyType = {
  closeTasks: () => void;
  selectedDate: DateType;
};
