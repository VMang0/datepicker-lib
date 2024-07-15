import React, { ChangeEventHandler, FC, useEffect, useState } from 'react';

import { CalendarIcon, ClearIcon, DateInputContainer, Input } from '@components/Inputs/components/DateInput/styled';
import { DateRangeInputPropsType } from '@components/Inputs/types';
import { formatInputRangeValue } from '@components/Inputs/utils/formatInputRangeValue';
import { getDateFromSlashType } from '@components/Inputs/utils/getDateFromSlashType';
import { isRangeDatesValid } from '@components/Inputs/utils/isValidDate';
import { parseDateToMask } from '@components/Inputs/utils/parseDateToMask';

export const DateRangeInput: FC<DateRangeInputPropsType> = ({
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
  isClearDate = true,
  handleClearRange,
  onFocus,
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

    const isValid = isRangeDatesValid(formattedStart, formattedEnd);
    setIsInputError(!isValid);

    if (isValid) updateSelectedDates(formattedStart, formattedEnd);
  };

  useEffect(() => {
    setDateRange(`${parseDateToMask(selectedStartDate)} - ${parseDateToMask(selectedEndDate || selectedStartDate)}`);
  }, [selectedStartDate, selectedEndDate]);

  return (
    <DateInputContainer isError={isInputError}>
      <CalendarIcon />
      <Input
        type="text"
        placeholder="Choose Date Range"
        value={dateRange}
        onChange={handleChange}
        maxLength={23}
        onFocus={onFocus}
      />
      {dateRange && isClearDate && <ClearIcon onClick={handleClear} />}
    </DateInputContainer>
  );
};
