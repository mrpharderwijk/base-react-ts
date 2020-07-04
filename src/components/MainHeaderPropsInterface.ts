import { ThemeColorsType } from './ThemeColorsType';
import { MainNavItemInterface } from './MainNavItemInterface';

export interface MainHeaderPropsInterface {
  bgColor?: string;
  fixedAfter?: number;
  isFixed?: boolean;
  isLoggedIn?: boolean;
  navItems?: MainNavItemInterface[] | null;
  themeBgColor?: ThemeColorsType;
}
