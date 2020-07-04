/* eslint-disable import/prefer-default-export */
import { Dispatch, ActionCreator } from 'redux';
import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { FAKE_RESPONSE_NAV_ITEMS } from '../mocks/navItems.mocks';
import { FIXME } from '../models/FixMe.model';
import { MainNavItemInterface } from '../components/MainNavItemInterface';
import { UiStateInterface } from './UiStateInterface';
import { UiActionsEnum } from './UiActionsEnum';
import { UiActionsType } from './UiActionsType';

export const requestNavigationItems = createAction(UiActionsEnum.REQUEST_NAVIGATION_ITEMS);
export const receiveNavigationItems = createAction<MainNavItemInterface[]>(UiActionsEnum.RECEIVE_NAVIGATION_ITEMS);

export const getAllNavigationItems: ActionCreator<ThunkAction<
  Promise<FIXME>,
  UiStateInterface,
  null,
  UiActionsType
>> = () => async (dispatch: Dispatch) => {
  try {
    dispatch(requestNavigationItems());
    /**
     * FIXME: Should be an async call
     */
    const navItems = FAKE_RESPONSE_NAV_ITEMS.data.results;
    dispatch(receiveNavigationItems(navItems));
  } catch (err) {
    console.error(err);
  }
};
