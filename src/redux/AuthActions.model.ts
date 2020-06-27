export enum AuthActionTypes {
  FETCH_LOGGED_IN = 'FETCH_LOGGED_IN',
}

export interface AuthGetLoggedInStateActionTypes {
  type: AuthActionTypes.FETCH_LOGGED_IN;
  isLoggedIn: boolean;
}

export type AuthActions = AuthGetLoggedInStateActionTypes;
