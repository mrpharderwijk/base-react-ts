/* eslint-disable import/prefer-default-export */
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AuthActionsEnum } from './AuthActionsEnum';
import { FIXME } from '../models/FixMe.model';

export const getLoggedInState: ActionCreator<ThunkAction<FIXME, FIXME, FIXME, FIXME>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = {
        data: {
          results: {
            isLoggedIn: true,
            expiry: null,
            accessToken: null,
          },
        },
      };
      dispatch({
        isLoggedIn: response.data.results.isLoggedIn,
        expiry: response.data.results.expiry,
        accessToken: response.data.results.accessToken,
        type: AuthActionsEnum.FETCH_LOGGED_IN,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
