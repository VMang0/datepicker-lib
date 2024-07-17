import { Calendar } from '@components/Calendar';
import { withDateInput } from '@hocs/withDateInput';
import { withStyled } from '@hocs/withStyled';

const CalendarWithDateInput = withDateInput(Calendar);
const DatePicker = withStyled(CalendarWithDateInput);

export { DatePicker };
