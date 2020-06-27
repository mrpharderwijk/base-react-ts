import { User } from '../models/User.model';

export interface MainUserMenuProps {
  isLoggedIn: boolean;
  user?: User;
}
