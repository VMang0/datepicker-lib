import 'styled-components';
import { ThemeType } from '@type/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
