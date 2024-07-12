import 'styled-components';
import { ThemeType } from '@styled/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
