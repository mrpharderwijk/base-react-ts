import { handleActions } from 'redux-actions';
import { UiStateTypes } from './UiState.model';
import initialBaseState from './initialBaseState';
import { UiActionTypes } from './UiActions.model';
import { FIXME } from '../models/FixMe.model';

const initialUiState: UiStateTypes = {
  ...initialBaseState,
  navItems: null,
};

export default handleActions<UiStateTypes, FIXME>(
  {
    [UiActionTypes.REQUEST_NAVIGATION_ITEMS]: (state): UiStateTypes => ({
      ...state,
      isFetching: true,
    }),
    [UiActionTypes.RECEIVE_NAVIGATION_ITEMS]: (state, { payload }: FIXME): UiStateTypes => ({
      ...state,
      isFetching: false,
      navItems: payload,
    }),
  },
  initialUiState,
);
