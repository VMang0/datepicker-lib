import { Calendar } from '@components/Calendar';
import { withErrorBoundary } from '@hocs/withErrorBoundary';
import { withStyled } from '@hocs/withStyled';
import { withTaskManagement } from '@hocs/withTaskManagement';

const CalendarWithTasks = withTaskManagement(Calendar);
const StyledTaskCalendar = withStyled(CalendarWithTasks);
const TaskCalendar = withErrorBoundary(StyledTaskCalendar);

export { TaskCalendar };
