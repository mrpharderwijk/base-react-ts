import styled from 'styled-components';
import { ButtonIconStyledProps } from './ButtonIconStyledProps';

const ButtonIconStyled = styled.span<ButtonIconStyledProps>`
  white-space: nowrap;

  ${({ primary, secondary, theme }) =>
    primary || secondary
      ? `
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeight[5]};
    text-decoration: none;
  `
      : ''}

  ${({ outline, theme }) =>
    outline &&
    `
    color: ${theme.colors['black-dark']};
    font-size: ${theme.fontSizes.sm};
    text-decoration: none;
  `}
`;

export default ButtonIconStyled;
