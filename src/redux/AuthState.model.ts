import { BaseState } from './InitialBaseState.model';

export interface AuthStateTypes extends BaseState {
  isLoggedIn: boolean;
  accessToken: string;
}
