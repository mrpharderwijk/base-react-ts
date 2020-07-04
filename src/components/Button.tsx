import React from 'react';
import { ButtonPropsInterface } from './ButtonPropsInterface';
import ButtonStyled from './ButtonStyled';
import Theme from './Theme';
import ButtonLabelStyled from './ButtonLabelStyled';
import ButtonIconStyled from './ButtonIconStyled';
import Icon from './Icon';
import Avatar from './Avatar';

const Button: React.FC<ButtonPropsInterface> = ({
  attrType = 'button',
  avatar,
  avatarLeft,
  avatarRight,
  children,
  color,
  disabled,
  flat,
  icon,
  iconAlign = 'left',
  label,
  labelWeight,
  onClick,
  pill,
  raised,
  size,
  stroked,
  subMenu,
}: ButtonPropsInterface) => {
  const hasOnClick = () => (onClick ? onClick() : null);

  return (
    <Theme>
      <ButtonStyled
        avatar={avatar}
        avatarLeft={avatarLeft}
        avatarRight={avatarRight}
        color={color}
        stroked={stroked}
        flat={flat}
        icon={icon}
        iconAlign={iconAlign}
        disabled={disabled}
        onClick={hasOnClick}
        pill={pill}
        raised={raised}
        subMenu={subMenu}
        size={size}
        type={attrType}
      >
        {icon && (!iconAlign || iconAlign === 'left') ? (
          <ButtonIconStyled
            color={color}
            raised={raised}
            stroked={stroked}
            flat={flat}
            icon={icon}
            iconAlign={iconAlign}
            subMenu={subMenu}
          >
            <Icon icon={icon} />
          </ButtonIconStyled>
        ) : (
          ''
        )}
        {avatar && avatarLeft ? <Avatar imgSrc={avatar} width={30} height={30} /> : ''}
        {label ? (
          <ButtonLabelStyled
            color={color}
            flat={flat}
            iconAlign={iconAlign}
            labelWeight={labelWeight}
            raised={raised}
            stroked={stroked}
            subMenu={subMenu}
          >
            {label}
          </ButtonLabelStyled>
        ) : (
          ''
        )}

        {avatar && !avatarLeft ? <Avatar imgSrc={avatar} width={30} height={30} /> : ''}
        {icon && iconAlign === 'right' ? <Icon icon={icon} width={30} height={30} /> : ''}
        {children}
      </ButtonStyled>
    </Theme>
  );
};

export default Button;
