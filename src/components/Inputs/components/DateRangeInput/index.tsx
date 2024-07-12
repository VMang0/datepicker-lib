import React, { ChangeEventHandler, FC, useEffect, useState } from 'react';

import { CalendarIcon, ClearIcon, DateInputContainer, Input } from '@components/Inputs/components/DateInput/styled';
import { DateRangeInputPropsType } from '@components/Inputs/types';
import { formatDateToMask } from '@components/Inputs/utils/formatDateToMask';
import { getDateFromSlashType } from '@components/Inputs/utils/getDateFromSlashType';
import { isValidDate } from '@components/Inputs/utils/isValidDate';
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

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    let { value } = e.target;
    const parts = value.split(' - ');
    let formattedStart = '';
    let formattedEnd = '';

    if (parts.length === 1) {
      formattedStart = formatDateToMask(parts[0]);
      if (formattedStart.length === 10) {
        value = `${formattedStart} - `;
      } else {
        value = formattedStart;
      }
    } else if (parts.length === 2) {
      formattedStart = formatDateToMask(parts[0]);
      formattedEnd = formatDateToMask(parts[1]);
      value = `${formattedStart} - ${formattedEnd}`;
    }
    setDateRange(value);

    const isValid = isValidDate(formattedStart) && isValidDate(formattedEnd);
    setIsInputError(!isValid);

    if (isValid) {
      setSelectedStartDate(getDateFromSlashType(formattedStart));
      if (formattedEnd) {
        setSelectedEndDate(getDateFromSlashType(formattedEnd));
      }
    }
  };

  const handleClear = () => {
    setDateRange('');
    setIsInputError(false);
    handleClearRange();
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
