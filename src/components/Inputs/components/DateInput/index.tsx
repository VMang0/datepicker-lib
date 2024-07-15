import React, { ChangeEventHandler, FC, useEffect, useState } from 'react';

import { CalendarIcon, ClearIcon, DateInputContainer, Input } from '@components/Inputs/components/DateInput/styled';
import { DateInputPropsType } from '@components/Inputs/types';
import { formatDateToMask } from '@components/Inputs/utils/formatDateToMask';
import { getDateFromSlashType } from '@components/Inputs/utils/getDateFromSlashType';
import { isValidDate } from '@components/Inputs/utils/isValidDate';
import { parseDateToMask } from '@components/Inputs/utils/parseDateToMask';

export const DateInput: FC<DateInputPropsType> = ({ selectDate, selectedDate, isClearDate = true, onFocus }) => {
  const [date, setDate] = useState<string>(parseDateToMask(selectedDate));
  const [isInputError, setIsInputError] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const formattedValue = formatDateToMask(value);
    setDate(formattedValue);

    if (formattedValue.length === 10 && isValidDate(formattedValue)) {
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
    setDate(parseDateToMask(selectedDate));
  }, [selectedDate]);

  return (
    <DateInputContainer isError={isInputError}>
      <CalendarIcon />
      <Input
        type="text"
        placeholder="Choose Date"
        value={date}
        onChange={handleChange}
        maxLength={10}
        onFocus={onFocus}
      />
      {date && isClearDate && <ClearIcon onClick={handleClear} />}
    </DateInputContainer>
  );
};
