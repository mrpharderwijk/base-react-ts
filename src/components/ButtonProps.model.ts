import { FIXME } from '../models/FixMe.model';

export interface ButtonProps {
  attrType?: 'button' | 'submit' | 'reset';
  children?: FIXME;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  user?: boolean;
  userAvatar?: boolean;
  onClick?: () => void;
}
