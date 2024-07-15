export type DateRangeInputPropsType = {
  selectedStartDate: Date;
  setSelectedStartDate: (value: Date) => void;
  selectedEndDate: Date;
  setSelectedEndDate: (value: Date) => void;
  isClearDate: boolean;
  handleClearRange: () => void;
  onFocus: () => void;
};

export type DateInputPropsType = {
  selectDate: (date: Date) => void;
  selectedDate: Date;
  isClearDate: boolean;
  onFocus: () => void;
};
