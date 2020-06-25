import { IUser } from '../../../../models/IUser';
import { FIXME } from '../../../../models/TFixMe';

export interface IMainUserMenuProps {
  isLoggedIn: boolean;
  user?: IUser;
  isSubMenuActive: boolean;
  toggleSubMenu: () => FIXME;
}
