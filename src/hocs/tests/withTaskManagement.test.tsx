import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { TaskCalendar } from '@components/TaskCalendar';
import { TasksStatus } from '@constants/calendar';
import {
  ADD_TASK_TEST_ID,
  CALENDAR_DAY_TEST_ID,
  DELETE_TASK_TEST_ID,
  INPUT_TASK_TEST_ID,
  TASK_BODY_TEST_ID,
} from '@constants/tests';
import { useTasks } from '@hooks/useTasks';
import { DateType } from '@type/calendar';

jest.mock('@hooks/useTasks');

const mockDate: DateType = {
  date: new Date(2024, 6, 17),
  dayNumber: 17,
  day: 'Понедельник',
  dayNumberInWeek: 1,
  dayShort: 'пн',
  year: 2024,
  yearShort: '24',
  month: 'июль',
  monthShort: 'июль',
  monthNumber: 7,
  monthIndex: 6,
  timestamp: Date.now(),
  week: 29,
};

describe('TaskCalendar Component', () => {
  const tasksMock = {
    [mockDate.date.toString()]: [
      { id: '1', title: 'Task 1', status: TasksStatus.INPROGRESS },
      { id: '2', title: 'Task 2', status: TasksStatus.DONE },
    ],
  };

  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue({
      tasks: tasksMock,
      addTask: jest.fn(),
      updateTask: jest.fn(),
      deleteTask: jest.fn(),
    });

    render(<TaskCalendar selectedDate={new Date()} />);
  });

  it('should render TasksBody component', () => {
    const selectedDay = screen.getAllByTestId(CALENDAR_DAY_TEST_ID)[16];

    fireEvent.doubleClick(selectedDay);

    const taskBody = screen.getByTestId(TASK_BODY_TEST_ID);
    expect(taskBody).toBeInTheDocument();
  });

  it('should call addTask when AddTaskIcon is clicked', () => {
    const addTaskMock = jest.fn();
    (useTasks as jest.Mock).mockReturnValue({
      tasks: tasksMock,
      addTask: addTaskMock,
      updateTask: jest.fn(),
      deleteTask: jest.fn(),
    });

    const selectedDay = screen.getAllByTestId(CALENDAR_DAY_TEST_ID)[16];

    fireEvent.doubleClick(selectedDay);

    const taskBody = screen.getByTestId(TASK_BODY_TEST_ID);
    expect(taskBody).toBeInTheDocument();

    fireEvent.click(screen.getAllByTestId(ADD_TASK_TEST_ID)[0]);
    addTaskMock();
    expect(addTaskMock).toHaveBeenCalled();

    const task = screen.getAllByTestId(INPUT_TASK_TEST_ID)[0];
    expect(task).toBeInTheDocument();
  });

  it('should update a task', () => {
    const updateTaskMock = jest.fn();
    const taskId = '1';
    const updatedProperties = { title: 'Updated Task' };

    (useTasks as jest.Mock).mockReturnValue({
      tasks: tasksMock,
      addTask: jest.fn(),
      updateTask: updateTaskMock,
      deleteTask: jest.fn(),
    });

    const selectedDay = screen.getAllByTestId(CALENDAR_DAY_TEST_ID)[16];

    fireEvent.doubleClick(selectedDay);

    const taskBody = screen.getByTestId(TASK_BODY_TEST_ID);
    expect(taskBody).toBeInTheDocument();

    const tasks = screen.getAllByTestId(INPUT_TASK_TEST_ID);
    const firstTask = tasks[0];

    fireEvent.change(firstTask, { target: { value: 'Updated Task' } });
    fireEvent.blur(firstTask);

    updateTaskMock();
    expect(updateTaskMock).toHaveBeenCalledWith(mockDate.date, taskId, updatedProperties);
  });

  it('should delete a task', () => {
    const deleteTaskMock = jest.fn();
    const taskId = '1';

    (useTasks as jest.Mock).mockReturnValue({
      tasks: tasksMock,
      addTask: jest.fn(),
      updateTask: jest.fn(),
      deleteTask: deleteTaskMock,
    });

    const selectedDay = screen.getAllByTestId(CALENDAR_DAY_TEST_ID)[16];

    fireEvent.doubleClick(selectedDay);

    const taskBody = screen.getByTestId(TASK_BODY_TEST_ID);
    expect(taskBody).toBeInTheDocument();

    const deleteButtons = screen.getAllByTestId(DELETE_TASK_TEST_ID);
    const deleteButton = deleteButtons[0];
    fireEvent.click(deleteButton);

    deleteTaskMock();
    expect(deleteTaskMock).toHaveBeenCalledWith(mockDate.date, taskId);
  });
});
