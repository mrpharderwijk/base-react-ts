import styled from 'styled-components';
import { ButtonPropsInterface } from './ButtonPropsInterface';

const ButtonLabelStyled = styled.span<ButtonPropsInterface>`
  font-family: inherit;
  white-space: nowrap;
  text-decoration: none;

  ${({ color, stroked, theme }) => {
    const fontSize = theme.fontSizes.sm;
    const lineHeight = theme.lineHeight[5];
    let fontWeight = 'inherit';
    const textColor = 'inherit';

    if (color === 'primary' || color === 'secondary' || color === 'warn') {
      fontWeight = !fontWeight ? theme.fontWeight.medium : fontWeight;
    }

    if (stroked) {
      fontWeight = theme.fontWeight.semibold;
    }

    return `
      color: ${textColor};
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
    `;
  }};
`;

export default ButtonLabelStyled;
