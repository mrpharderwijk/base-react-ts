import React from 'react';
import IconStyled from './IconStyled';
import Theme from './Theme';

const Icon: React.FC<{ icon: string }> = ({ icon }: { icon: string }) => (
  <Theme>
    <IconStyled icon={icon} />
  </Theme>
);

export default Icon;
