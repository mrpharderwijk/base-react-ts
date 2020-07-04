import React from 'react';
import styled from 'styled-components';
import { MainNavigationLinkLabelInterface } from './MainNavigationLinkLabelInterface';

const MainNavigationLinkLabelStyled = styled.span`
  color: ${({ theme }) => theme.colors['black-dark']};
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  height: 100%;
  position: relative;
  z-index: 10;
`;

const MainNavigationLinkLabel: React.FC<MainNavigationLinkLabelInterface> = ({
  children,
}: MainNavigationLinkLabelInterface) => <MainNavigationLinkLabelStyled>{children}</MainNavigationLinkLabelStyled>;

export default MainNavigationLinkLabel;
