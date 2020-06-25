import * as React from 'react';
import { Link } from 'react-router-dom';
import { IMainUserMenuProps } from './IMainUserMenuProps';

const MainUserMenu: React.FC<IMainUserMenuProps> = (props: IMainUserMenuProps) => {
  const { isLoggedIn, isSubMenuActive, toggleSubMenu, user } = props;
  return (
    <div className="main-user-menu relative">
      {isLoggedIn ? (
        <>
          <button type="button" className="btn btn--user-avatar" onClick={() => toggleSubMenu}>
            <span className="btn__label md:text-brand-primary">{user?.name?.firstName || 'Anonymous'}</span>
            <span>avatar</span>
          </button>
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
