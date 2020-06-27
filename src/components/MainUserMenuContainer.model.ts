import { FIXME } from '../models/FixMe.model';

export interface MainUserMenuContainerProps {
  isLoggedIn: boolean;
  getLoggedInStateConnect: () => FIXME;
}
