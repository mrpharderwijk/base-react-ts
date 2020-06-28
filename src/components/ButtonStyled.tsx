import styled from 'styled-components';
import { ButtonStyledProps } from './ButtonStyledProps.model';
import { flexHorizontal } from '../styled/flexBoxStyled';

const ButtonStyled = styled.button<ButtonStyledProps>`
  border: 0;
  box-shadow: none;
  cursor: pointer;
  ${flexHorizontal}
  font-family: 'MontSerrat';
  justify-content: center;
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

 /**
  * Outline
  */
  ${({ outline, theme }) =>
    outline &&
    `
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors['black-dark']};
    padding: ${theme.spacing[8]} ${theme.spacing[16]};
    border-radius: ${theme.borderRadius[8]};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeight.semibold};
    text-decoration: none;
  `}

  /**
   * User
   */
  ${({ user, userAvatar, theme }) =>
    (user || userAvatar) &&
    `
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors['gray-lighter']};
    box-shadow: ${theme.boxShadow.xs};
    transition: box-shadow 300ms ease-in-out;
    border-radius: ${theme.borderRadius[20]};
    height: 2.5rem;
    padding: ${user ? `0 1rem` : `${theme.spacing[5]} ${theme.spacing[5]} ${theme.spacing[5]} ${theme.spacing[16]}`};

    &:hover {
      box-shadow: ${user ? theme.boxShadow.smd : theme.boxShadow.sm};
    }
  `}
`;

export default ButtonStyled;
