import styled from 'styled-components';

const ButtonLabelStyled = styled.span`
  white-space: nowrap;

  ${({ theme }) => `
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeight.medium};
    line-height: ${theme.lineHeight[5]};
  `}
`;

export default ButtonLabelStyled;
