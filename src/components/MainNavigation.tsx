import * as React from 'react';
import styled from 'styled-components';
import { MainNavigationPropsInterface } from './MainNavigationPropsInterface';
import List from './List';
import ListItem from './ListItem';
import MainNavigationLinkLabel from './MainNavigationLinkLabel';
import Theme from './Theme';
import MainNavigationLinkStyled from './MainNavigationLinkStyled';

const MainNavigationStyled = styled.nav<MainNavigationPropsInterface>`
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: ${({ alignRight }) => (alignRight ? `flex-end` : `flex-start`)};
    opacity: 1;
  }
`;

const MainNavigation: React.FC<MainNavigationPropsInterface> = ({
  alignLeft,
  alignRight,
  navItems,
}: MainNavigationPropsInterface) => (
  <Theme>
    <MainNavigationStyled alignLeft={alignLeft} alignRight={alignRight}>
      {navItems && navItems.length ? (
        <List horizontal>
          {navItems.map((navItem) => (
            <ListItem key={navItem.id}>
              <MainNavigationLinkStyled to={navItem.href}>
                <MainNavigationLinkLabel>{navItem.label}</MainNavigationLinkLabel>
              </MainNavigationLinkStyled>
            </ListItem>
          ))}
        </List>
      ) : (
        ''
      )}
    </MainNavigationStyled>
  </Theme>
);

export default MainNavigation;
