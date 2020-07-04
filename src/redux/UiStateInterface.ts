import { MainNavItemInterface } from '../components/MainNavItemInterface';
import { BaseStateInterface } from './InitialBaseStateInterface';

export interface UiStateInterface extends BaseStateInterface {
  navItems: MainNavItemInterface[] | null;
}
