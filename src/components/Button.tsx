import React from 'react';
import { ButtonProps } from './ButtonProps.model';
import ButtonStyled from './ButtonStyled';
import Theme from './Theme';
import ButtonLabelStyled from './ButtonLabelStyled';
import ButtonIconStyled from './ButtonIconStyled';
import Icon from './Icon';

const Button: React.FC<ButtonProps> = ({
  attrType = 'button',
  className,
  icon,
  label,
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
        {icon ? (
          <ButtonIconStyled>
            <Icon icon={icon} />
          </ButtonIconStyled>
        ) : (
          ''
        )}
        {label ? <ButtonLabelStyled>{label}</ButtonLabelStyled> : ''}
      </ButtonStyled>
    </Theme>
  );
};

export default Button;
