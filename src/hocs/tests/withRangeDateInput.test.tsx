import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { parseDateToMask } from '@components/Inputs/utils/parseDateToMask';
import { RangeDatePicker } from '@components/RangeDatePicker';
import {
  CALENDAR_DAY_TEST_ID,
  CALENDAR_TEST_ID,
  FOOTER_BUTTON_TEST_ID,
  RANGE_DATEPICKER_TEST_ID,
} from '@constants/tests';

describe('RangeDateInput Component', () => {
  it('should render DateRangeInput and calendar components', () => {
    render(<RangeDatePicker />);

    expect(screen.getByTestId(RANGE_DATEPICKER_TEST_ID)).toBeInTheDocument();
    fireEvent.focus(screen.getByTestId(RANGE_DATEPICKER_TEST_ID));

    expect(screen.getByTestId(CALENDAR_TEST_ID)).toBeInTheDocument();
  });

  it('should open and close the calendar', () => {
    render(<RangeDatePicker />);

    fireEvent.focus(screen.getByTestId(RANGE_DATEPICKER_TEST_ID));
    expect(screen.getByTestId(CALENDAR_TEST_ID)).toBeInTheDocument();

    fireEvent.mouseDown(document);
    expect(screen.queryByTestId(CALENDAR_TEST_ID)).not.toBeInTheDocument();
  });

  it('should select a date and update input values', () => {
    render(<RangeDatePicker />);

    fireEvent.focus(screen.getByTestId(RANGE_DATEPICKER_TEST_ID));

    const startDay = screen.getAllByTestId(CALENDAR_DAY_TEST_ID)[0];
    const endDayDay = screen.getAllByTestId(CALENDAR_DAY_TEST_ID)[5];

    fireEvent.click(startDay);
    fireEvent.click(endDayDay);

    const expectedValue = '01/07/2024 - 06/07/2024';

    expect(screen.getByTestId(RANGE_DATEPICKER_TEST_ID)).toHaveValue(expectedValue);
  });

  it('should clear the date range', () => {
    render(<RangeDatePicker />);

    fireEvent.focus(screen.getByTestId(RANGE_DATEPICKER_TEST_ID));

    const startDay = screen.getAllByTestId(CALENDAR_DAY_TEST_ID)[0];
    const endDayDay = screen.getAllByTestId(CALENDAR_DAY_TEST_ID)[5];

    fireEvent.click(startDay);
    fireEvent.click(endDayDay);

    fireEvent.click(screen.getByTestId(FOOTER_BUTTON_TEST_ID));

    const today = parseDateToMask(new Date());

    expect(screen.getByTestId(RANGE_DATEPICKER_TEST_ID)).toHaveValue(`${today} - ${today}`);
  });
});
