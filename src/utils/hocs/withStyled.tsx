import isPropValid from '@emotion/is-prop-valid';
import React, { ComponentType } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { theme } from '@styled/theme';
import { CalendarProps } from '@type/calendar';

export const withStyled = (Component: ComponentType<CalendarProps>) => (props: CalendarProps) => (
  <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  </StyleSheetManager>
);
