import styled from 'styled-components';
import { ButtonStyledProps } from './ButtonStyledProps.model';
import { flexHorizontal } from '../styled/flexBoxStyled';

const ButtonStyled = styled.button<ButtonStyledProps>`
  font-family: 'MontSerrat';
  border: 0;
  box-shadow: none;
  cursor: pointer;
  padding: 0.5rem 0.25rem;

  ${({ secondary, theme }) =>
    secondary &&
    `
    background-color: ${theme.colors['gray-darker']};
    color: mediumseagreen;
  `}
  ${flexHorizontal}
`;

export default ButtonStyled;
