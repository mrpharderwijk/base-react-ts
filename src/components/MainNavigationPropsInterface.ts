import { MainNavItemInterface } from './MainNavItemInterface';

export type MainNavigationPropsInterface = {
  alignLeft?: boolean;
  alignRight?: boolean;
  navItems?: MainNavItemInterface[] | null;
};
