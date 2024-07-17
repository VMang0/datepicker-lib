import React, { ComponentType } from 'react';

import { ErrorBoundary } from '@components/ErrorBoundary';
import { CalendarProps } from '@type/calendar';

export const withErrorBoundary = (Component: ComponentType<CalendarProps>) => (props: CalendarProps) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);
