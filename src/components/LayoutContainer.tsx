import React from 'react';
import styled from 'styled-components';
import Theme from './Theme';

const LayoutContainerStyled = styled.div`
  display: flex;
  height: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth.screen.xxxl};
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.screens.smd}) {
    padding: 0 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.screens.xlg}) {
    max-width: ${({ theme }) => theme.maxWidth.screen.huge};
  }
`;

const LayoutContainer: React.FC = () => (
  <Theme>
    <LayoutContainerStyled />
  </Theme>
);

export default LayoutContainer;
