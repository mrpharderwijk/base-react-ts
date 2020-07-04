import { handleActions } from 'redux-actions';
import { UiStateInterface } from './UiStateInterface';
import initialBaseState from './initialBaseState';
import { UiActionsEnum } from './UiActionsEnum';
import { FIXME } from '../models/FixMe.model';

const initialUiState: UiStateInterface = {
  ...initialBaseState,
  navItems: null,
};

export default handleActions<UiStateInterface, FIXME>(
  {
    [UiActionsEnum.REQUEST_NAVIGATION_ITEMS]: (state): UiStateInterface => ({
      ...state,
      isFetching: true,
    }),
    [UiActionsEnum.RECEIVE_NAVIGATION_ITEMS]: (state, { payload }: FIXME): UiStateInterface => ({
      ...state,
      isFetching: false,
      navItems: payload,
    }),
  },
  initialUiState,
);
