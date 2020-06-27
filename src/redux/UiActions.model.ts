import { MainNavItem } from '../components/MainNavItem.model';

export enum UiActionTypes {
  REQUEST_NAVIGATION_ITEMS = 'REQUEST_NAVIGATION_ITEMS',
  RECEIVE_NAVIGATION_ITEMS = 'RECEIVE_NAVIGATION_ITEMS',
}

export interface UiRequestNavigationItemsActionTypes {
  type: UiActionTypes.REQUEST_NAVIGATION_ITEMS;
}

export interface IUiReceiveNavigationItemsActionTypes {
  type: UiActionTypes.RECEIVE_NAVIGATION_ITEMS;
  payload: MainNavItem[] | null;
}

export type UiActions = UiRequestNavigationItemsActionTypes | IUiReceiveNavigationItemsActionTypes;
