/* eslint-disable */
import React from 'react';
import MainHeader from './MainHeader';
import { BrowserRouter } from 'react-router-dom';

export default {
  component: MainHeader,
  title: 'MainHeader',
  parameters: {
    info: MainHeader,
  },
};

const navItems = [
  {
    id: 0,
    label: 'home',
    href: '#',
  },
  {
    id: 1,
    label: 'about',
    href: '#',
  },
  {
    id: 2,
    label: 'contact',
    href: '#',
  },
];

export const mainHeaderPrimary = () => (
  <BrowserRouter>
    <MainHeader themeBgColor="primary" />
  </BrowserRouter>
);

export const mainHeader = () => (
  <BrowserRouter>
    <MainHeader navItems={navItems} isLoggedIn={false} />
  </BrowserRouter>
);
