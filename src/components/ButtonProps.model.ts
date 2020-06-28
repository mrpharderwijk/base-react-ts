import { FIXME } from '../models/FixMe.model';

export interface ButtonProps {
  attrType?: 'button' | 'submit' | 'reset';
  children?: FIXME;
  className?: string;
  icon?: string;
  label?: string;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  user?: boolean;
  userAvatar?: boolean;
  onClick?: () => void;
}
