import styled from 'styled-components';
import { flexHorizontal } from '../styled/flexBoxStyled';
import { ButtonPropsInterface } from './ButtonPropsInterface';

const ButtonStyled = styled.button<ButtonPropsInterface>`
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};
  ${flexHorizontal}
  font-family: 'MontSerrat';
  justify-content: center;
  position: relative;

  > :first-child:not(:last-child) {
    margin-right: 0.5rem;
    &:before {
      font-size: ${({ theme }) => theme.fontWeight.semibold};
    }
  }

  &:disabled {
    :before {
      background-color: ${({ theme }) => theme.colors.white};
      content: '';
      left: -1px;
      top: -1px;
      opacity: 0.6;
      position: absolute;
      height: 105%;
      width: 103%;
    }
  }

  ${({ avatar, avatarLeft, color, disabled, flat, pill, raised, stroked, size, theme }) => {
    let bgColor = theme.colors.white;
    let border = 'none';
    let borderRadius = theme.borderRadius[8];
    let boxShadow = 'none';
    let fontSize = '';
    let fontWeight = theme.fontWeight.semibold;
    const height = !size || size === 'sm' ? '2.5rem' : '';
    let hoverBoxShadow = raised ? theme.boxShadow.smd : 'none';
    let hoverBgColor = disabled ? theme.colors.white : theme.colors['gray-lightest'];
    const lineHeight = theme.lineHeight[5];
    let padding = size && size === 'lg' ? '0.875rem 1.5rem' : '0 1rem';
    let textColor = theme.colors['black-dark'];
    let transition = '';

    /**
     * Link text color (always consistent)
     */
    if (color === 'link') {
      textColor = theme.colors.link;
    }

    /**
     * Raised & Flat
     */
    if (color && (raised || flat || disabled)) {
      switch (color) {
        case 'primary':
          bgColor = raised || flat ? theme.colors['brand-primary'] : bgColor;
          hoverBgColor = !disabled ? theme.colors['brand-primary-dark'] : '';
          boxShadow = raised ? theme.boxShadow.sm : boxShadow;
          hoverBoxShadow = raised && !disabled ? theme.boxShadow.md : hoverBoxShadow;
          textColor = theme.colors.white;
          break;
        case 'secondary':
          bgColor = raised || flat ? theme.colors['brand-secondary-dark'] : bgColor;
          hoverBgColor = !disabled ? theme.colors['brand-secondary'] : '';
          boxShadow = raised ? theme.boxShadow.sm : boxShadow;
          hoverBoxShadow = raised && !disabled ? theme.boxShadow.md : hoverBoxShadow;
          textColor = theme.colors.white;
          break;
        case 'warn':
          bgColor = raised || flat ? theme.colors.warn : bgColor;
          hoverBgColor = !disabled ? theme.colors.warn : '';
          boxShadow = raised ? theme.boxShadow.sm : boxShadow;
          hoverBoxShadow = raised && !disabled ? theme.boxShadow.md : hoverBoxShadow;
          textColor = theme.colors.white;
          break;
        default:
          border = `1px solid ${theme.colors['gray-lighter']}`;
          boxShadow = raised ? theme.boxShadow.sm : boxShadow;
          hoverBoxShadow = raised && !disabled ? theme.boxShadow.md : hoverBoxShadow;
      }
    }

    if (raised) {
      boxShadow = theme.boxShadow.sm;
      transition = `box-shadow 300ms ease-in-out`;

      if (avatar) {
        // eslint-disable-next-line prefer-destructuring
        borderRadius = theme.borderRadius[20];
        if (avatar && !avatarLeft) {
          padding = `${theme.spacing[5]} ${theme.spacing[5]} ${theme.spacing[5]} ${theme.spacing[16]}`;
        }
        if (avatarLeft) {
          padding = `${theme.spacing[5]} ${theme.spacing[16]} ${theme.spacing[5]} ${theme.spacing[5]}`;
        }
      }
    }

    /**
     * Default & stroked text-color
     */
    if (color === 'primary' && !raised && !flat) {
      border = stroked ? `1px solid ${theme.colors['brand-primary']}` : border;
      textColor = theme.colors['brand-primary'];
    }
    if (color === 'secondary' && !raised && !flat) {
      border = stroked ? `1px solid ${theme.colors['brand-secondary']}` : border;
      textColor = theme.colors['brand-secondary'];
    }

    if (color === 'warn' && !raised && !flat) {
      border = stroked ? `1px solid ${theme.colors.warn}` : border;
      textColor = theme.colors.warn;
    }

    if (color === 'link' && !raised && !flat) {
      border = stroked ? `1px solid ${theme.colors['gray-lightest']}` : border;
      textColor = theme.colors.link;
    }

    if (!color && !raised && !flat) {
      border = stroked ? `1px solid ${theme.colors['black-dark']}` : border;
    }

    if (stroked) {
      bgColor = theme.colors.white;
      fontSize = theme.fontSizes.sm;
      fontWeight = theme.fontWeight.semibold;
    }

    if (pill) {
      // eslint-disable-next-line prefer-destructuring
      borderRadius = theme.borderRadius[20];
    }

    /**
     * Transition & border-radius
     */
    if (color === 'primary' || color === 'secondary' || color === 'warn') {
      transition = 'background-color 300ms ease-in-out';
    }

    return `
      background-color: ${bgColor};
      border: ${border};
      border-radius: ${borderRadius};
      box-shadow: ${boxShadow};
      color: ${textColor};
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      height: ${height};
      padding: ${padding};
      transition: ${transition};

      &:hover {
        background-color: ${hoverBgColor};
        box-shadow: ${hoverBoxShadow};
      }

      ${
        disabled && raised
          ? `
            &:disabled:before {
              height: 150%;
              left: -7px;
              top: -7px;
              width: 150%;
            }
          `
          : ''
      }

    `;
  }}
`;

export default ButtonStyled;
