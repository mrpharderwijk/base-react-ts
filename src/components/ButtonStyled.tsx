import styled from 'styled-components';
import { ButtonStyledProps } from './ButtonStyledProps.model';
import { flexHorizontal } from '../styled/flexBoxStyled';

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${flexHorizontal}
  justify-content: center;
  font-family: 'MontSerrat';
  border: 0;
  box-shadow: none;
  cursor: pointer;
  padding: 0.5rem 0.25rem;

  > :first-child:not(:last-child) {
    margin-right: .5rem;
    &:before {
      font-size: ${({ theme }) => theme.fontWeight.semibold};
    }
  }

  /**
   * Primary & Secondary
   */
  ${({ primary, secondary, theme }) =>
    primary || secondary
      ? `
    padding: 0.875rem 1.5rem;
    transition: background-color 300ms ease-in-out;
    border-radius: ${theme.borderRadius[8]};
  `
      : ''}

  ${({ primary, theme }) =>
    primary &&
    `
    background-color: ${theme.colors['brand-primary']};

    &:hover {
      background-color: ${theme.colors['brand-primary-dark']};
    }
  `}

  ${({ secondary, theme }) =>
    secondary &&
    `
    background-color: ${theme.colors['brand-secondary-dark']};

    &:hover {
      background-color: ${theme.colors['brand-secondary']};
    }
  `}


`;

export default ButtonStyled;
