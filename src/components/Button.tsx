import React from 'react';
import { ButtonProps } from './ButtonProps.model';
import ButtonStyled from './ButtonStyled';
import Theme from './Theme';
import ButtonLabelStyled from './ButtonLabelStyled';
import ButtonIconStyled from './ButtonIconStyled';
import Icon from './Icon';
import Avatar from './Avatar';

const Button: React.FC<ButtonProps> = ({
  attrType = 'button',
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
        type={attrType}
        primary={primary}
        secondary={secondary}
        outline={outline}
        user={user}
        userAvatar={userAvatar}
        onClick={hasOnClick}
      >
        {icon && !userAvatar ? (
          <ButtonIconStyled primary={primary} secondary={secondary} outline={outline} user={user}>
            <Icon icon={icon} />
          </ButtonIconStyled>
        ) : (
          ''
        )}
        {label ? (
          <ButtonLabelStyled
            primary={primary}
            secondary={secondary}
            outline={outline}
            user={user}
            userAvatar={userAvatar}
          >
            {label}
          </ButtonLabelStyled>
        ) : (
          ''
        )}

        {userAvatar ? <Avatar imgSrc={undefined} width={30} height={30} /> : ''}
      </ButtonStyled>
    </Theme>
  );
};

export default Button;
