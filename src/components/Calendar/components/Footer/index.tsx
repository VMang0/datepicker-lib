import React, { FC, memo } from 'react';

import { Button } from '@components/Calendar/components/Footer/styled';
import { FOOTER_BUTTON_TEST_ID } from '@constants/tests';

type FooterType = {
  handleClick: () => void;
  title: string;
};

export const Footer: FC<FooterType> = memo(({ handleClick, title }) => {
  return (
    <Button onClick={handleClick} data-testid={FOOTER_BUTTON_TEST_ID}>
      {title}
    </Button>
  );
});
