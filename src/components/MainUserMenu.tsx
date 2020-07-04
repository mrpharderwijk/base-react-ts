import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainUserMenuPropsInterface } from './MainUserMenuPropsInterface';
import Button from './Button';
import Menu from './Menu';
import List from './List';
import ListItem from './ListItem';
import Theme from './Theme';
import ListItemSeparator from './ListItemSeparator';

const MainUserMenuStyled = styled.div`
  position: relative;
`;

const MainUserMenuSubStyled = styled.div`
  min-width: 15rem;
`;

const MainUserMenuLoginLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;

  &:hover {
    text-decoration: none;
  }
`;

const MainUserMenu: React.FC<MainUserMenuPropsInterface> = ({ isLoggedIn }: MainUserMenuPropsInterface) => {
  return (
    <Theme>
      <MainUserMenuStyled>
        {isLoggedIn ? (
          <>
            <Menu after>
              <Button raised color="primary" key="trigger" label="Mr. Anonymous" avatar="anonymous" />
              <MainUserMenuSubStyled key="submenu">
                <List vertical>
                  <ListItem>
                    <Button subMenu label="Account" />
                  </ListItem>
                  <ListItem>
                    <Button subMenu label="Sign out" />
                  </ListItem>
                  <ListItemSeparator />
                  <ListItem>
                    <Button subMenu labelWeight="normal" label="My Saved" />
                  </ListItem>
                  <ListItem>
                    <Button subMenu labelWeight="light" label="My Saved" />
                  </ListItem>
                </List>
              </MainUserMenuSubStyled>
            </Menu>
          </>
        ) : (
          <MainUserMenuLoginLink to="/login">
            <Button label="Sign in" raised />
          </MainUserMenuLoginLink>
        )}
      </MainUserMenuStyled>
    </Theme>
  );
};

export default MainUserMenu;
