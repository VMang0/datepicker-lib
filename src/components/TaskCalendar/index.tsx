import { Calendar } from '@components/Calendar';
import { withStyled } from '@hocs/withStyled';
import { withTaskManagement } from '@hocs/withTaskManagement';

const CalendarWithTasks = withTaskManagement(Calendar);
const TaskCalendar = withStyled(CalendarWithTasks);

export { TaskCalendar };
