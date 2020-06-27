import { MainNavItem } from '../components/MainNavItem.model';
import { BaseState } from './InitialBaseState.model';

export interface UiStateTypes extends BaseState {
  navItems: MainNavItem[] | null;
}
