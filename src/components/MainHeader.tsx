import React, { useEffect } from 'react';
import styled from 'styled-components';
import Branding from './Branding';
import { MainHeaderPropsInterface } from './MainHeaderPropsInterface';
import Theme from './Theme';
import { flexHorizontal } from '../styled/flexBoxStyled';
import MainNavigation from './MainNavigation';
import MainUserMenu from './MainUserMenu';

const MainHeaderStyled = styled.header<MainHeaderPropsInterface>`
  background-color: ${({ bgColor, themeBgColor, theme }) => {
    if (bgColor) {
      return bgColor;
    }
    if (themeBgColor) {
      return theme.colors[themeBgColor] || theme.colors.white;
    }
    return theme.colors.white;
  }};
  box-shadow: ${({ isFixed, theme }) => (isFixed ? theme.boxShadow.xs : 0)};
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  transition: box-shadow 300ms ease-in-out;
  width: 100%;
  z-index: 50;
`;

const MainHeaderInnerStyled = styled.div`
  ${flexHorizontal}
  height: ${({ theme }) => theme.maxWidth['pct-100']};
  max-width: ${({ theme }) => theme.maxWidth['pct-100']};
  padding: 0 1.5rem;

  @media (min-width: ${({ theme }) => theme.screens.smd}) {
    padding: 0 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.screens.xlg}) {
    max-width: ${({ theme }) => theme.maxWidth.screen.huge};
    padding: 0 5rem;
  }
`;

const MainHeaderNavWrapperStyled = styled.div`
  ${flexHorizontal}
  flex: 1 1 auto;
  justify-content: flex-end;

  > :not(:last-child) {
    padding: 0 1rem;
  }
`;

const MainHeader: React.FC<MainHeaderPropsInterface> = ({
  bgColor,
  fixedAfter,
  isLoggedIn,
  navItems,
  themeBgColor,
}: MainHeaderPropsInterface) => {
  const [isFixed, toggleFixedState] = React.useState(false);

  /**
   * Update state when scrolling
   */
  const listenToScroll = (): void => {
    toggleFixedState(window.pageYOffset >= (fixedAfter || 0));
  };

  /**
   * Add scroll listener
   */
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => {
      document.removeEventListener('scroll', listenToScroll);
    };
  });

  return (
    <Theme>
      <MainHeaderStyled bgColor={bgColor} themeBgColor={themeBgColor} isFixed={isFixed}>
        <MainHeaderInnerStyled>
          <Branding />
          <MainHeaderNavWrapperStyled>
            <MainNavigation navItems={navItems} />
            <MainUserMenu isLoggedIn={isLoggedIn} />
          </MainHeaderNavWrapperStyled>
        </MainHeaderInnerStyled>
      </MainHeaderStyled>
    </Theme>
  );
};

export default MainHeader;
