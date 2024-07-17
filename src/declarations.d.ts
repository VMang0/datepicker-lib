import 'styled-components';
import { FC, SVGProps } from 'react';

import { ThemeType } from '@type/theme';

declare module '*.svg' {
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
