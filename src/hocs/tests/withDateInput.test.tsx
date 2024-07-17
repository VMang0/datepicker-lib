import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { DatePicker } from '@components/DatePicker';
import { CALENDAR_DAY_TEST_ID, CALENDAR_ICON_TEST_ID, CALENDAR_TEST_ID, DATEPICKER_TEST_ID } from '@constants/tests';

describe('DatePicker Component', () => {
  it('should render DatePicker component', () => {
    render(<DatePicker />);
    expect(screen.queryByTestId(DATEPICKER_TEST_ID)).toBeInTheDocument();
    expect(screen.queryByTestId(CALENDAR_TEST_ID)).not.toBeInTheDocument();
  });

  it('should open calendar on DateInput focus', () => {
    render(<DatePicker />);

    fireEvent.focus(screen.getByTestId(DATEPICKER_TEST_ID));
    expect(screen.getByTestId(CALENDAR_TEST_ID)).toBeInTheDocument();
  });

  it('should close calendar on outside click', () => {
    render(<DatePicker />);

    fireEvent.focus(screen.getByTestId(DATEPICKER_TEST_ID));
    expect(screen.getByTestId(CALENDAR_TEST_ID)).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(screen.queryByTestId(CALENDAR_TEST_ID)).not.toBeInTheDocument();
  });

  it('should toggle calendar open state when clicking DateInput and close by clicking on icon', () => {
    render(<DatePicker />);

    fireEvent.focus(screen.getByTestId(DATEPICKER_TEST_ID));
    expect(screen.getByTestId(CALENDAR_TEST_ID)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId(CALENDAR_ICON_TEST_ID));
    expect(screen.queryByTestId(CALENDAR_TEST_ID)).not.toBeInTheDocument();
  });

  it('should display calendar when `DateInput` is focused and hide on click outside', () => {
    render(<DatePicker />);

    fireEvent.focus(screen.getByTestId(DATEPICKER_TEST_ID));
    expect(screen.getByTestId(CALENDAR_TEST_ID)).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(screen.queryByTestId(CALENDAR_TEST_ID)).not.toBeInTheDocument();
  });

  it('should allow selecting a date from the calendar', () => {
    render(<DatePicker />);

    fireEvent.focus(screen.getByTestId(DATEPICKER_TEST_ID));
    expect(screen.getByTestId(CALENDAR_TEST_ID)).toBeInTheDocument();

    const firstDay = screen.getAllByTestId('calendar-day')[0];
    fireEvent.click(firstDay);
  });

  it('should allow selecting a date from the calendar and check input value', () => {
    render(<DatePicker />);

    fireEvent.focus(screen.getByTestId(DATEPICKER_TEST_ID));
    expect(screen.getByTestId(CALENDAR_TEST_ID)).toBeInTheDocument();

    const firstDay = screen.getAllByTestId(CALENDAR_DAY_TEST_ID)[0];
    fireEvent.click(firstDay);

    const expectedValue = '01/07/2024';
    expect(screen.getByTestId(DATEPICKER_TEST_ID)).toHaveValue(expectedValue);
  });
});
