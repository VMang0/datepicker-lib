import { Calendar } from '@components/Calendar';
import { withDateInput } from '@hocs/withDateInput';
import { withErrorBoundary } from '@hocs/withErrorBoundary';
import { withStyled } from '@hocs/withStyled';

const CalendarWithDateInput = withDateInput(Calendar);
const StyledDatePicker = withStyled(CalendarWithDateInput);
const DatePicker = withErrorBoundary(StyledDatePicker);

export { DatePicker };
