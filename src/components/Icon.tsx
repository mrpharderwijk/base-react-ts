import React from 'react';
import IconStyled from './IconStyled';
import Theme from './Theme';
import { IconPropsInterface } from './IconPropsInterface';

const Icon: React.FC<IconPropsInterface> = ({ icon }: IconPropsInterface) => (
  <Theme>
    <IconStyled icon={icon} />
  </Theme>
);

export default Icon;
