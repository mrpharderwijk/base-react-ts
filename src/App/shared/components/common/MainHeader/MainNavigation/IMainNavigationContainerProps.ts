import { IMainNavItem } from './IMainNavItem';
import { FIXME } from '../../../../models/TFixMe';

export interface IMainNavigationContainerProps {
  navItems: IMainNavItem[];
  getNavigationItems: () => FIXME;
}
