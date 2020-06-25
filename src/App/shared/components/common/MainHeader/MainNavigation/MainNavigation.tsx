import * as React from 'react';
import { Link } from 'react-router-dom';
import { IMainNavigationProps } from './IMainNavigationProps';
import './MainNavigation.scss';

const MainNavigation: React.FC<IMainNavigationProps> = (props: IMainNavigationProps) => {
  const { navItems } = props;

  return (
    <nav className="opacity-0 transition-opacity duration-300 ease-in-out w-full md:flex md:flex-row md:flex-wrap md:items-center md:justify-end md:opacity-100">
      {navItems && navItems.length ? (
        <ul className="flex flex-row flex-no-wrap justify-start items-center">
          {navItems.map((navItem) => (
            <li className="flex-auto w-full list-group__item md:flex-auto" key={navItem.id}>
              <Link
                className="main-navigation-list__anchor appearance-none bg-transparent border-0 text-black-dark cursor-pointer block leading-5 m-0 outline-none overflow-visible p-12 text-center no-underline select-auto relative z-10 hover:no-underline md:block md:font-normal"
                to={navItem.href}
              >
                <span className="flex font-semibold text-sm items-center h-full relative z-10">{navItem.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </nav>
  );
};

export default MainNavigation;
