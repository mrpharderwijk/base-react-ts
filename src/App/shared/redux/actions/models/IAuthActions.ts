export enum AuthActionTypes {
  GET_LOGGED_IN_STATE = 'GET_LOGGED_IN_STATE',
}

export type AuthActions = IAuthGetLoggedInStateAction;

export interface IAuthGetLoggedInStateAction {
  type: AuthActionTypes.GET_LOGGED_IN_STATE;
  isLoggedIn: boolean;
}
