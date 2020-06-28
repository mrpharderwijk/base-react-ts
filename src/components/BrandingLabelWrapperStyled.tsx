import styled from 'styled-components';

const BrandingLabelWrapperStyled = styled.div`
  flex: 1 1 auto;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  opacity: 0;
  transform: translateX(-0.3125rem);
  transition: all 300ms ease-in-out 100ms;
  margin-left: 0.0625rem;
  z-index: 10;
  white-space: nowrap;
  /*
    apply text-red-800;
    apply font-montserrat;
    */
  ${({ theme }) => `
   @media (min-width: ${theme.screens.md}) {
      display: block;
      opacity: 1;
      transform: translateX(0rem);
    }
    `}
`;

export default BrandingLabelWrapperStyled;
