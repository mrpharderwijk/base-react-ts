import { Reducer } from 'react';
import { FIXME } from '../models/FixMe.model';
import { AuthActionTypes } from './AuthActions.model';
import initialBaseState from './initialBaseState';

const initialAuthState: FIXME = {
  ...initialBaseState,
  isLoggedIn: true,
  accessToken: null,
  expiresIn: null,
};

const authReducer: Reducer<FIXME, FIXME> = (state = initialAuthState, action) => {
  switch (action.type) {
    case AuthActionTypes.FETCH_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        accessToken: action.accessToken,
        expiresIn: action.expiresIn,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
