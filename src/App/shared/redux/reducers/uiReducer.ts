import { Reducer } from 'react';
import { IUiState } from '../../models/IUiState';
import { UiActionTypes } from '../actions/models/IUiActions';
import { FIXME } from '../../models/TFixMe';

const initialUiState: IUiState = {
  navItems: [],
};

const uiReducer: Reducer<FIXME, FIXME> = (state = initialUiState, action) => {
  switch (action.type) {
    case UiActionTypes.GET_NAVIGATION_ITEMS: {
      return {
        ...state,
        navItems: action.navItems,
      };
    }

    default:
      return state;
  }
};

export default uiReducer;
