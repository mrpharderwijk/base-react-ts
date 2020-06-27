import * as React from 'react';
import './MainHeader.scss';
import Branding from './Branding';
import MainUserMenuContainer from './MainUserMenuContainer';
import MainNavigationContainer from './MainNavigationContainer';

const MainHeader: React.FC<{ isFixed: boolean }> = ({ isFixed }: { isFixed: boolean }) => (
  <header
    className={`bg-white absolute inset-x-0 top-0 h-80 w-full z-50 transition-shadow duration-300 ease-in-out ${
      isFixed ? 'main-header--fixed' : ''
    }`}
  >
    <div className="main-header__inner flex flex-row flex-no-wrap items-center max-w-full px-24 h-full smd:px-40 xlg:max-w-screen-huge xlg:px-80">
      <Branding />
      <div className="main-header__nav flex flex-row flex-no-wrap items-center flex-auto justify-end">
        <MainNavigationContainer />
        <MainUserMenuContainer />
      </div>
    </div>
  </header>
);

export default MainHeader;
