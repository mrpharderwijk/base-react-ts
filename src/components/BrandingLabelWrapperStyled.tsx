import styled from 'styled-components';

const BrandingLabelWrapperStyled = styled.div`
  flex: 1 1 auto;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors['brand-primary']};
  letter-spacing: -0.025em;
  opacity: 0;
  transform: translateX(-0.3125rem);
  transition: all 300ms ease-in-out 100ms;
  margin-left: ${({ theme }) => theme.spacing[4]};
  z-index: 10;
  white-space: nowrap;

  ${({ theme }) => `
   @media (min-width: ${theme.screens.md}) {
      display: block;
      opacity: 1;
      transform: translateX(0rem);
    }
    `}
`;

export default BrandingLabelWrapperStyled;
