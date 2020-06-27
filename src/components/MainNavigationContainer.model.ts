import { MainNavItem } from './MainNavItem.model';
import { FIXME } from '../models/FixMe.model';

export interface MainNavigationContainerProps {
  navItems: MainNavItem[] | null;
  getNavigationItems: () => FIXME;
}
