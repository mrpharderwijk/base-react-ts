import { IMainNavItem } from '../../../components/common/MainHeader/MainNavigation/IMainNavItem';

export enum UiActionTypes {
  GET_NAVIGATION_ITEMS = 'GET_NAVIGATION_ITEMS',
}

export type UiActions = IUiGetAllAction;

export interface IUiGetAllAction {
  type: UiActionTypes.GET_NAVIGATION_ITEMS;
  navItems: IMainNavItem[];
}
