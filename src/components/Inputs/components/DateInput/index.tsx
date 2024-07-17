import React, { ChangeEventHandler, FC, useEffect, useState } from 'react';

import { CalendarIcon, ClearIcon, DateInputContainer, Input } from '@components/Inputs/styled';
import { DateInputPropsType } from '@components/Inputs/types';
import { formatDateToMask } from '@components/Inputs/utils/formatDateToMask';
import { getDateFromSlashType } from '@components/Inputs/utils/getDateFromSlashType';
import { isValidDate } from '@components/Inputs/utils/isValidDate';
import { parseDateToMask } from '@components/Inputs/utils/parseDateToMask';
import { CALENDAR_ICON_TEST_ID, DATEPICKER_TEST_ID } from '@constants/tests';
import { checkIsDateInCalendarRange } from '@utils/checkIsDateInCalendarRange';

export const DateInput: FC<DateInputPropsType> = ({
  selectDate,
  selectedDate,
  isClearDate = true,
  onFocus,
  isCalendarOpen,
  handleOpenCalendarState,
  minRangeDate = { year: new Date().getFullYear() - 74, month: 12, day: 1 },
  maxRangeDate = { year: new Date().getFullYear() + 74, month: 12, day: 1 },
}) => {
  const [date, setDate] = useState<string>(parseDateToMask(selectedDate));
  const [isInputError, setIsInputError] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const formattedValue = formatDateToMask(value);

    setDate(formattedValue);

    const isDateInCalendarRange = checkIsDateInCalendarRange(
      maxRangeDate,
      minRangeDate,
      getDateFromSlashType(formattedValue),
    );

    if (formattedValue.length === 10 && isValidDate(formattedValue) && isDateInCalendarRange) {
      setIsInputError(false);
      selectDate(getDateFromSlashType(formattedValue));
    } else {
      setIsInputError(true);
    }
  };

  const handleClear = () => {
    setDate('');
    setIsInputError(false);
    selectDate(new Date());
  };

  useEffect(() => {
    const newDate = parseDateToMask(selectedDate);
    if (newDate !== date) {
      setDate(newDate);
    }
  }, [selectedDate]);

  return (
    <DateInputContainer isError={isInputError} isCalendarOpen={isCalendarOpen}>
      <CalendarIcon onClick={handleOpenCalendarState} data-testid={CALENDAR_ICON_TEST_ID} />
      <Input
        type="text"
        placeholder="Choose Date"
        value={date}
        onChange={handleChange}
        maxLength={10}
        onFocus={onFocus}
        data-testid={DATEPICKER_TEST_ID}
      />
      {date && isClearDate && <ClearIcon onClick={handleClear} />}
    </DateInputContainer>
  );
};
