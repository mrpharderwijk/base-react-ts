import styled from 'styled-components';
import { lighten } from 'polished';
import { flexHorizontal } from '../styled/flexBoxStyled';
import { ButtonPropsInterface } from './ButtonPropsInterface';

const ButtonStyled = styled.button<ButtonPropsInterface & { iconOnly: boolean }>`
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};
  ${flexHorizontal}
  font-family: 'MontSerrat';
  justify-content: center;
  position: relative;
  overflow: hidden;

  > :nth-child(2):not(:last-child) {
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
      z-index: 10;
    }
  }

  ${({ avatarPosition, color, disabled, flat, iconOnly, pill, raised, stroked, size, theme }) => {
    let bgColor = 'transparent';
    let border = 'none';
    let borderRadius = theme.borderRadius[8];
    let boxShadow = 'none';
    let fontSize = '';
    let fontWeight = theme.fontWeight.semibold;
    let height = !size || size === 'sm' ? '2.5rem' : '';
    let hoverBoxShadow = raised ? theme.boxShadow.smd : 'none';
    let hoverBgColor = 'transparent';
    const lineHeight = theme.lineHeight[5];
    const paddingBottom = size && size === 'lg' ? '0.875rem' : '0';
    let paddingLeft = size && size === 'lg' ? '1.5rem' : '1rem';
    let paddingRight = size && size === 'lg' ? '1.5rem' : '1rem';
    const paddingTop = size && size === 'lg' ? '0.875rem' : '0';
    let textColor = theme.colors['black-dark'];
    let transition = '';
    let width = 'auto';

    /**
     * Link text color (always consistent)
     */
    if (color === 'link') {
      textColor = theme.colors.link;
    }

    /**
     * Raised or Flat or Disabled
     */
    if (color && (raised || flat || disabled)) {
      switch (color) {
        case 'primary':
          bgColor = raised || flat ? theme.colors.primary : bgColor;
          hoverBgColor = !disabled ? theme.colors['primary-dark'] : '';
          boxShadow = raised ? theme.boxShadow.sm : boxShadow;
          hoverBoxShadow = raised && !disabled ? theme.boxShadow.md : hoverBoxShadow;
          textColor = theme.colors.white;
          break;

        case 'secondary':
          bgColor = raised || flat ? theme.colors['secondary-dark'] : bgColor;
          hoverBgColor = !disabled ? theme.colors.secondary : '';
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

        case 'link':
          bgColor = theme.colors.white;
          hoverBgColor = !disabled ? lighten(0.52, theme.colors['gray-dark']) : '';
          boxShadow = raised ? theme.boxShadow.sm : boxShadow;
          hoverBoxShadow = raised && !disabled ? theme.boxShadow.md : hoverBoxShadow;
          textColor = theme.colors.link;
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
    }

    /**
     * Default & stroked text-color
     */
    if (color === 'primary' && !raised && !flat) {
      border = stroked ? `1px solid ${theme.colors.primary}` : border;
      textColor = theme.colors.primary;
      hoverBgColor = !disabled ? lighten(0.38, textColor) : '';
    }
    if (color === 'secondary' && !raised && !flat) {
      border = stroked ? `1px solid ${theme.colors.secondary}` : border;
      textColor = theme.colors.secondary;
      hoverBgColor = !disabled ? lighten(0.36, textColor) : '';
    }

    if (color === 'warn' && !raised && !flat) {
      border = stroked ? `1px solid ${theme.colors.warn}` : border;
      textColor = theme.colors.warn;
      hoverBgColor = !disabled ? lighten(0.38, textColor) : '';
    }

    if (color === 'link' && !raised && !flat) {
      border = stroked ? `1px solid ${theme.colors['gray-lighter']}` : border;
      textColor = theme.colors.link;
      hoverBgColor = !disabled ? lighten(0.52, theme.colors['gray-dark']) : '';
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
      borderRadius = theme.borderRadius[24];
      paddingLeft = avatarPosition && avatarPosition === 1 ? '0.3125rem' : paddingLeft;
      paddingRight = avatarPosition && avatarPosition > 1 ? '0.3125rem' : paddingRight;
    }

    /**
     * Transition & border-radius
     */
    if (color === 'primary' || color === 'secondary' || color === 'warn') {
      transition = 'background-color 300ms ease-in-out';
    }

    /**
     * Button only contains an icon
     */
    if (iconOnly) {
      borderRadius = `50%`;
      fontSize = !size || size === 'sm' ? fontSize : theme.fontSizes.md;
      height = !size || size === 'sm' ? `2.5rem` : `3.5rem`;
      width = !size || size === 'sm' ? `2.5rem` : `3.5rem`;
    }

    return `
      background-color: ${bgColor};
      border: ${border};
      border-radius: ${borderRadius};
      box-shadow: ${boxShadow};
      color: ${textColor};
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      height: ${height};
      line-height: ${lineHeight};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      padding-right: ${paddingRight};
      padding-top: ${paddingTop};
      transition: ${transition};
      width: ${width};

      > * {
        color: ${textColor};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        line-height: ${lineHeight};
      }

      &:hover,
      &:focus {
        background-color: ${hoverBgColor};
        box-shadow: ${hoverBoxShadow};
        outline: none;
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
