import React, { ChangeEventHandler, FC, useEffect, useState } from 'react';

import { CalendarIcon, ClearIcon, DateInputContainer, Input } from '@components/Inputs/styled';
import { DateRangeInputPropsType } from '@components/Inputs/types';
import { formatInputRangeValue } from '@components/Inputs/utils/formatInputRangeValue';
import { getDateFromSlashType } from '@components/Inputs/utils/getDateFromSlashType';
import { isRangeDatesValid } from '@components/Inputs/utils/isValidDate';
import { parseDateToMask } from '@components/Inputs/utils/parseDateToMask';
import { RANGE_DATEPICKER_TEST_ID } from '@constants/tests';
import { checkIsDateInCalendarRange } from '@utils/checkIsDateInCalendarRange';
import { checkIsRangeCorrect } from '@utils/checkIsRangeCorrect';

export const DateRangeInput: FC<DateRangeInputPropsType> = ({
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
  isClearDate = true,
  handleClearRange,
  onFocus,
  isCalendarOpen,
  handleOpenCalendarState,
  minRangeDate = { year: new Date().getFullYear() - 74, month: 12, day: 1 },
  maxRangeDate = { year: new Date().getFullYear() + 74, month: 12, day: 1 },
}) => {
  const [dateRange, setDateRange] = useState('');
  const [isInputError, setIsInputError] = useState(false);

  const updateSelectedDates = (formattedStart: string, formattedEnd?: string) => {
    setSelectedStartDate(getDateFromSlashType(formattedStart));
    if (formattedEnd) {
      setSelectedEndDate(getDateFromSlashType(formattedEnd));
    }
  };

  const handleClear = () => {
    setDateRange('');
    setIsInputError(false);
    handleClearRange();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const { formattedValue, formattedStart, formattedEnd } = formatInputRangeValue(value);

    setDateRange(formattedValue);

    const isRangeValid = isRangeDatesValid(formattedStart, formattedEnd);
    const startDate = getDateFromSlashType(formattedStart);
    const endDate = getDateFromSlashType(formattedEnd);

    const isStartDateInCalendarRange = checkIsDateInCalendarRange(maxRangeDate, minRangeDate, startDate);
    const isEndDateInCalendarRange = checkIsDateInCalendarRange(maxRangeDate, minRangeDate, endDate);
    const isRangeCorrect = checkIsRangeCorrect(startDate, endDate);

    const isValuesValid = isRangeValid && isStartDateInCalendarRange && isEndDateInCalendarRange && isRangeCorrect;
    setIsInputError(!isValuesValid);

    if (isValuesValid) updateSelectedDates(formattedStart, formattedEnd);
  };

  useEffect(() => {
    setDateRange(`${parseDateToMask(selectedStartDate)} - ${parseDateToMask(selectedEndDate || selectedStartDate)}`);
  }, [selectedStartDate, selectedEndDate]);

  return (
    <DateInputContainer isError={isInputError} isCalendarOpen={isCalendarOpen}>
      <CalendarIcon onClick={handleOpenCalendarState} />
      <Input
        type="text"
        placeholder="Choose Date Range"
        value={dateRange}
        onChange={handleChange}
        maxLength={23}
        onFocus={onFocus}
        data-testid={RANGE_DATEPICKER_TEST_ID}
      />
      {dateRange && isClearDate && <ClearIcon onClick={handleClear} />}
    </DateInputContainer>
  );
};
