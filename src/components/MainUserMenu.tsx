import * as React from 'react';
import { Link } from 'react-router-dom';
import { MainUserMenuProps } from './MainUserMenu.model';
import Button from './Button';

const MainUserMenu: React.FC<MainUserMenuProps> = ({ isLoggedIn, user }: MainUserMenuProps) => {
  const [isSubMenuActive, toggleSubmenuState] = React.useState(false);
  const toggleSubMenu = () => toggleSubmenuState(!isSubMenuActive);

  return (
    <div className="main-user-menu relative">
      {isLoggedIn ? (
        <>
          <Button secondary label={user?.name?.firstName || 'Anonymous'} onClick={() => toggleSubMenu()}>
            <span>avatar</span>
          </Button>
          {isSubMenuActive ? (
            <ul className="main-user-menu__sub-menu list-group list-group--vertical bg-white rounded-12 shadow-md py-2 px-0 absolute right-0 w-mobile-inner">
              <li className="list-group__item">
                <button type="button" className="btn btn--primary whitespace-no-wrap md:border-brand-primary">
                  Sign out
                </button>
              </li>
            </ul>
          ) : (
            ''
          )}
        </>
      ) : (
        <Link to="/login">
          <button type="button" className="btn btn--user">
            <span className="btn__label">Log in</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default MainUserMenu;
