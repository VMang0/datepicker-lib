import { Calendar } from '@components/Calendar';
import { withRangeDateInput } from '@utils/hocs/withRangeDateInput';
import { withStyled } from '@utils/hocs/withStyled';

const CalendarWithDateInput = withRangeDateInput(Calendar);
const DateRangePicker = withStyled(CalendarWithDateInput);

export { DateRangePicker };
