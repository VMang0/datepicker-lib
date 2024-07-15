import { Calendar } from '@components/Calendar';
import { withDateInput } from '@utils/hocs/withDateInput';
import { withStyled } from '@utils/hocs/withStyled';

const CalendarWithDateInput = withDateInput(Calendar);
const DatePicker = withStyled(CalendarWithDateInput);

export { DatePicker };
