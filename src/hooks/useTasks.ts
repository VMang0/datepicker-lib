import { useEffect, useState } from 'react';

import { TasksStatus } from '@constants/calendar';
import { useStorage } from '@hooks/useStorage';
import { TaskMapType, TaskType } from '@type/tasks';
import { generateUniqueId } from '@utils/generateUniqueId';

export const useTasks = ({ date }: { date?: Date } = {}) => {
  const { addToStorage, getFromStorage } = useStorage();
  const [tasks, setTasks] = useState<TaskMapType>({});

  const newTask = (): TaskType => ({
    id: generateUniqueId(),
    title: 'Task',
    status: TasksStatus.INPROGRESS,
  });

  const updateTasks = (date: Date, updateFn: (tasks: TaskType[]) => TaskType[]): void => {
    const dateString = date.toString();
    const updatedTasks = {
      ...tasks,
      [dateString]: updateFn(tasks[dateString] || []),
    };
    setTasks(updatedTasks);
    addToStorage<TaskMapType>('tasks', updatedTasks);
  };

  const addTask = () => {
    if (!date) return;
    updateTasks(date, (tasks) => [...tasks, newTask()]);
  };

  const updateTask = (date: Date, taskId: string, updatedProperties: Partial<TaskType>) => {
    updateTasks(date, (tasks) => tasks.map((task) => (task.id === taskId ? { ...task, ...updatedProperties } : task)));
  };

  const deleteTask = (date: Date, taskId: string) => {
    updateTasks(date, (tasks) => tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    const savedTasks: TaskMapType | null = getFromStorage<TaskMapType>('tasks');
    if (savedTasks) setTasks(savedTasks);
  }, []);

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
};
