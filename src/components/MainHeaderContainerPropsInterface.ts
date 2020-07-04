import { MainNavItemInterface } from './MainNavItemInterface';
import { FIXME } from '../models/FixMe.model';

export interface MainHeaderContainerPropsInterface {
  isLoggedIn: boolean;
  navItems: MainNavItemInterface[] | null;
  getLoggedInStateConnect: () => FIXME;
  getNavigationItems: () => FIXME;
}
