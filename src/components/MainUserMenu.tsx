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
              <Button raised pill color="primary" key="trigger">
                Mr. Anonymous
              </Button>
              <MainUserMenuSubStyled key="submenu">
                <List vertical>
                  <ListItem>
                    <Button>Account</Button>
                  </ListItem>
                  <ListItem>
                    <Button>Sign out</Button>
                  </ListItem>
                  <ListItemSeparator />
                  <ListItem>
                    <Button>My Saved</Button>
                  </ListItem>
                  <ListItem>
                    <Button>My Profile</Button>
                  </ListItem>
                </List>
              </MainUserMenuSubStyled>
            </Menu>
          </>
        ) : (
          <MainUserMenuLoginLink to="/login">
            <Button raised pill>
              Sign in
            </Button>
          </MainUserMenuLoginLink>
        )}
      </MainUserMenuStyled>
    </Theme>
  );
};

export default MainUserMenu;
