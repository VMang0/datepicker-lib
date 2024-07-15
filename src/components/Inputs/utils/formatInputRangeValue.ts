import { formatDateToMask } from '@components/Inputs/utils/formatDateToMask';

export const formatInputRangeValue = (value: string) => {
  const parts = value.split(' - ');
  let formattedStart = '';
  let formattedEnd = '';
  let formattedValue = '';

  if (parts.length === 1) {
    formattedStart = formatDateToMask(parts[0]);
    formattedValue = formattedStart.length === 10 ? `${formattedStart} - ` : formattedStart;
  } else if (parts.length === 2) {
    formattedStart = formatDateToMask(parts[0]);
    formattedEnd = formatDateToMask(parts[1]);
    formattedValue = `${formattedStart} - ${formattedEnd}`;
  }

  return { formattedValue, formattedStart, formattedEnd };
};
