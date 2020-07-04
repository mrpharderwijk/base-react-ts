import { BaseStateInterface } from './InitialBaseStateInterface';

export interface AuthStateInterface extends BaseStateInterface {
  isLoggedIn: boolean;
  accessToken: string;
}
