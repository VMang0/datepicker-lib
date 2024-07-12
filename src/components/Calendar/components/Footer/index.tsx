import React, { FC, memo } from 'react';

import { Button } from '@components/Calendar/components/Footer/styled';

type FooterType = {
  handleClick: () => void;
  title: string;
};

export const Footer: FC<FooterType> = memo(({ handleClick, title }) => {
  return <Button onClick={handleClick}>{title}</Button>;
});
