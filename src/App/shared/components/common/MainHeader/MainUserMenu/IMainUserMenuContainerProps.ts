import { FIXME } from '../../../../models/TFixMe';

export interface IMainUserMenuContainerProps {
  isLoggedIn: boolean;
  getLoggedInStateConnect: () => FIXME;
}
