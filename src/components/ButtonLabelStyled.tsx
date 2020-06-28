import styled from 'styled-components';
import { ButtonLabelStyledProps } from './ButtonLabelStyledProps';

const ButtonLabelStyled = styled.span<ButtonLabelStyledProps>`
  white-space: nowrap;

  ${({ theme }) => `
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeight[5]};
  `}

  ${({ primary, secondary, theme }) =>
    (primary || secondary) &&
    `
    color: ${theme.colors.white};
    font-weight: ${theme.fontWeight.medium};
    text-decoration: none;
  `}

  ${({ outline, user, userAvatar, theme }) =>
    (outline || user || userAvatar) &&
    `
    color: ${theme.colors['black-dark']};
    font-weight: ${theme.fontWeight.semibold};
    text-decoration: none;
  `}
`;

export default ButtonLabelStyled;
