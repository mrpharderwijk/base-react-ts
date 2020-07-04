import styled from 'styled-components';
import { ButtonPropsInterface } from './ButtonPropsInterface';

const ButtonIconStyled = styled.span<ButtonPropsInterface>`
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  align-items: center;

  ${({ theme }) => {
    return `
      font-size: ${theme.fontSizes.sm};
      line-height: ${theme.lineHeight[5]};
    `;
  }};
`;

export default ButtonIconStyled;
