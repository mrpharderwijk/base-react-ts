/* eslint-disable import/prefer-default-export */
import { Dispatch, ActionCreator } from 'redux';
import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { UiActionTypes, UiActions } from './UiActions.model';
import { FAKE_RESPONSE_NAV_ITEMS } from '../mocks/navItems.mocks';
import { FIXME } from '../models/FixMe.model';
import { MainNavItem } from '../components/MainNavItem.model';
import { UiStateTypes } from './UiState.model';

export const requestNavigationItems = createAction(UiActionTypes.REQUEST_NAVIGATION_ITEMS);
export const receiveNavigationItems = createAction<MainNavItem[]>(UiActionTypes.RECEIVE_NAVIGATION_ITEMS);

export const getAllNavigationItems: ActionCreator<ThunkAction<
  Promise<FIXME>,
  UiStateTypes,
  null,
  UiActions
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
