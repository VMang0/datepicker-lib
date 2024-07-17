import { Calendar } from '@components/Calendar';
import { withErrorBoundary } from '@hocs/withErrorBoundary';
import { withRangeDateInput } from '@hocs/withRangeDateInput';
import { withStyled } from '@hocs/withStyled';

const CalendarWithDateInput = withRangeDateInput(Calendar);
const StyledRangeDatePicker = withStyled(CalendarWithDateInput);
const RangeDatePicker = withErrorBoundary(StyledRangeDatePicker);

export { RangeDatePicker };
