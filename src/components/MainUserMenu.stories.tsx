/* eslint-disable */
import React from 'react';
import MainUserMenu from './MainUserMenu';
import { BrowserRouter } from 'react-router-dom';

export default {
  component: MainUserMenu,
  title: 'MainUserMenu',
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>],
};

export const UserMenuDefault = () => (
  <BrowserRouter>
    <MainUserMenu />
  </BrowserRouter>
);
export const UserMenuLoggedIn = () => (
  <BrowserRouter>
    <MainUserMenu isLoggedIn />
  </BrowserRouter>
);
