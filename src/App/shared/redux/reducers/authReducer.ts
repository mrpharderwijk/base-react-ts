import { Reducer } from 'react';
import { FIXME } from '../../models/TFixMe';
import { AuthActionTypes } from '../actions/models/IAuthActions';

const initialAuthState: FIXME = {
  isLoggedIn: true,
  accessToken: null,
  expiresIn: null,
};

const authReducer: Reducer<FIXME, FIXME> = (state = initialAuthState, action) => {
  switch (action.type) {
    case AuthActionTypes.GET_LOGGED_IN_STATE: {
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
