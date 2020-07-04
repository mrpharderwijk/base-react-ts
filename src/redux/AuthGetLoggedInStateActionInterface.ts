import { AuthActionsEnum } from './AuthActionsEnum';

export interface AuthGetLoggedInStateActionInterface {
  type: AuthActionsEnum.FETCH_LOGGED_IN;
  isLoggedIn: boolean;
}
