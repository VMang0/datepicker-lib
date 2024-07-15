import { DateType } from '@type/calendar';

export type ControlPanelPropsType = {
  addTask: () => void;
  closeTasks: () => void;
  selectedDate: DateType;
};
