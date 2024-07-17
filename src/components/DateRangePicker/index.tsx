import { Calendar } from '@components/Calendar';
import { withRangeDateInput } from '@hocs/withRangeDateInput';
import { withStyled } from '@hocs/withStyled';

const CalendarWithDateInput = withRangeDateInput(Calendar);
const DateRangePicker = withStyled(CalendarWithDateInput);

export { DateRangePicker };
