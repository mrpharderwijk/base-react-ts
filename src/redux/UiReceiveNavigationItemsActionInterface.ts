import { MainNavItemInterface } from '../components/MainNavItemInterface';
import { UiActionsEnum } from './UiActionsEnum';

export interface UiReceiveNavigationItemsActionInterface {
  type: UiActionsEnum.RECEIVE_NAVIGATION_ITEMS;
  payload: MainNavItemInterface[];
}
