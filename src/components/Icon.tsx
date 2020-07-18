import React from 'react';
import IconStyled from './IconStyled';
import Theme from './Theme';
import { IconPropsInterface } from './IconPropsInterface';

const Icon: React.FC<IconPropsInterface> = ({ color, icon }: IconPropsInterface) => (
  <Theme>
    <IconStyled color={color} icon={icon} />
  </Theme>
);

export default Icon;
