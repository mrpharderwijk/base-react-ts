import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AuthActionTypes } from './models/IAuthActions';
import { FIXME } from '../../models/TFixMe';

const getLoggedInState: ActionCreator<ThunkAction<FIXME, FIXME, FIXME, FIXME>> = () => {
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
        type: AuthActionTypes.GET_LOGGED_IN_STATE,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default getLoggedInState;
