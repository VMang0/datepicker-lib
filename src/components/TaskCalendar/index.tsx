import { Calendar } from '@components/Calendar';
import { withStyled } from '@utils/hocs/withStyled';
import { withTaskManagement } from '@utils/hocs/withTaskManagement';

const CalendarWithTasks = withTaskManagement(Calendar);
const TaskCalendar = withStyled(CalendarWithTasks);

export { TaskCalendar };
