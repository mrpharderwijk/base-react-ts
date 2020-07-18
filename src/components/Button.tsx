import React, { ReactElement } from 'react';
import { ButtonPropsInterface } from './ButtonPropsInterface';
import ButtonStyled from './ButtonStyled';
import Theme from './Theme';
import ButtonLabelStyled from './ButtonLabelStyled';
import { FIXME } from '../models/FixMe.model';
import ObjectHelper from '../helpers/ObjectHelper';
import ButtonIconStyled from './ButtonIconStyled';
import Ripple from './Ripple';
import ButtonAvatarStyled from './ButtonAvatarStyled';

const Button: React.FC<ButtonPropsInterface> = ({
  attrType = 'button',
  children,
  color,
  disabled,
  flat,
  onClick,
  pill,
  raised,
  size,
  stroked,
}: ButtonPropsInterface) => {
  const hasOnClick = () => (onClick ? onClick() : null);

  /**
   * Check if the children is an array and has elements
   */
  const hasMultipleChildren = () => {
    return Array.isArray(children) && children.length;
  };

  const getAvatarPosition = () => {
    if (hasMultipleChildren()) {
      return children.map((child: FIXME) => child?.type?.name).indexOf('Avatar') + 1;
    }

    if (!hasMultipleChildren() && children?.type?.name === 'Avatar') {
      return 1;
    }

    return 0;
  };

  /**
   * Check if children consists of a label (string type)
   */
  const hasAvatar = () => {
    if (hasMultipleChildren()) {
      return children.some((child: FIXME) => child?.type?.name === 'Avatar');
    }

    if (!hasMultipleChildren() && children?.type?.name === 'Avatar') {
      return true;
    }

    return false;
  };

  /**
   * Check if children consists of an Icon
   */
  const hasIcon = (): boolean => {
    /**
     * Is of type Array and has multiple children where at least one is Icon
     */
    if (hasMultipleChildren()) {
      return children.some((child: FIXME) => child?.type?.name === 'Icon');
    }

    /**
     * Children is of type Object and element is Icon
     */
    if (!hasMultipleChildren() && ObjectHelper.isObject(children)) {
      return children?.type?.name === 'Icon';
    }

    /**
     * Children don't consist of an Icon element
     */
    return false;
  };

  /**
   * Check if children consists of a label (string type)
   */
  const hasLabel = () => {
    if (hasMultipleChildren()) {
      return children.some((child: FIXME) => typeof child === 'string');
    }

    if (!hasMultipleChildren() && typeof children === 'string') {
      return true;
    }

    return false;
  };

  /**
   * Retrieves the Icon from children if it exists
   */
  const getIcon = (): ReactElement | null => {
    if (hasIcon() && hasMultipleChildren()) {
      return children.filter((child: FIXME) => child?.type?.name === 'Icon');
    }

    if (hasIcon() && !hasMultipleChildren() && ObjectHelper.isObject(children) && children?.type?.name === 'Icon') {
      return children;
    }

    return null;
  };

  /**
   * Retrieves the label from children if it exists
   */
  const getLabel = (): string | null => {
    if (hasLabel() && hasMultipleChildren()) {
      return children.filter((child: FIXME) => typeof child === 'string');
    }

    if (hasLabel() && !hasMultipleChildren() && typeof children === 'string') {
      return children;
    }

    return null;
  };

  return (
    <Theme>
      <ButtonStyled
        avatarPosition={hasAvatar() ? getAvatarPosition() : 0}
        color={color}
        stroked={stroked}
        flat={flat}
        disabled={disabled}
        iconOnly={!hasMultipleChildren() && hasIcon()}
        onClick={hasOnClick}
        pill={hasAvatar() || pill}
        raised={raised}
        size={size}
        type={attrType}
      >
        <Ripple color={color} />
        {hasMultipleChildren()
          ? children.map((child: FIXME) => {
              if (typeof child === 'string') {
                return <ButtonLabelStyled>{getLabel()}</ButtonLabelStyled>;
              }

              if (child?.type?.name === 'Icon') {
                return <ButtonIconStyled>{getIcon()}</ButtonIconStyled>;
              }

              if (child?.type?.name === 'Avatar') {
                return (
                  <ButtonAvatarStyled>
                    {child}
                    {getAvatarPosition().toString()}
                    {hasAvatar().toString()}
                  </ButtonAvatarStyled>
                );
              }

              return child;
            })
          : ''}

        {!hasMultipleChildren() ? (
          <>
            {hasIcon() ? <ButtonIconStyled>{getIcon()}</ButtonIconStyled> : ''}
            {hasLabel() ? <ButtonLabelStyled>{getLabel()}</ButtonLabelStyled> : ''}
            {!hasIcon() && !hasLabel() ? children : ''}
          </>
        ) : (
          ''
        )}
      </ButtonStyled>
    </Theme>
  );
};

export default Button;
