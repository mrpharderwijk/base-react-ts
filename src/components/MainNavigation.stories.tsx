/* eslint-disable */
import React from 'react';
import MainNavigation from './MainNavigation';
import { BrowserRouter } from 'react-router-dom';

export default {
  component: MainNavigation,
  title: 'MainNavigation',
  parameters: {
    info: MainNavigation,
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

export const MainNavigationDefault = () => (
  <BrowserRouter>
    <MainNavigation navItems={navItems} />
  </BrowserRouter>
);
