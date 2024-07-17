import { TasksStatus } from '@constants/calendar';
import { useStickyState } from '@hooks/useStickyState';
import { TaskMapType, TaskType } from '@type/tasks';
import { generateUniqueId } from '@utils/generateUniqueId';

export const useTasks = ({ date }: { date?: Date } = {}) => {
  const [tasks, setTasks] = useStickyState<TaskMapType>({}, 'tasks');

  const createTask = (): TaskType => ({
    id: generateUniqueId(),
    title: 'Task',
    status: TasksStatus.INPROGRESS,
  });

  const applyTaskChanges = (date: Date, updateFn: (tasks: TaskType[]) => TaskType[]): void => {
    const dateString = date.toString();
    const updatedTasks = {
      ...tasks,
      [dateString]: updateFn(tasks[dateString] || []),
    };
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (!date) return;
    applyTaskChanges(date, (tasks) => [...tasks, createTask()]);
  };

  const updateTask = (date: Date, taskId: string, updatedProperties: Partial<TaskType>) => {
    applyTaskChanges(date, (tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, ...updatedProperties } : task)),
    );
  };

  const deleteTask = (date: Date, taskId: string) => {
    applyTaskChanges(date, (tasks) => tasks.filter((task) => task.id !== taskId));
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
};
