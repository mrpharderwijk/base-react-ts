import React from 'react';
import { ButtonProps } from './ButtonProps.model';
import ButtonStyled from './ButtonStyled';
import Theme from './Theme';

const Button: React.FC<ButtonProps> = ({
  attrType = 'button',
  children,
  className,
  primary,
  secondary,
  outline,
  user,
  userAvatar,
  onClick,
}: ButtonProps) => {
  const hasOnClick = () => (onClick ? onClick() : null);
  return (
    <Theme>
      <ButtonStyled
        className={className}
        type={attrType}
        primary={primary}
        secondary={secondary}
        outline={outline}
        user={user}
        userAvatar={userAvatar}
        onClick={hasOnClick}
      >
        {children}
      </ButtonStyled>
    </Theme>
  );
};

export default Button;
