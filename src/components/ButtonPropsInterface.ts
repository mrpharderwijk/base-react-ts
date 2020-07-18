import { FIXME } from '../models/FixMe.model';
import { ButtonAttributeType } from './ButtonAttributeType';
import { ButtonColorsType } from './ButtonColorsType';
import { ButtonSizeType } from './ButtonSizeType';

export interface ButtonPropsInterface {
  attrType?: ButtonAttributeType;
  avatarPosition?: number;
  color?: ButtonColorsType;
  children?: FIXME;
  disabled?: boolean;
  flat?: boolean;
  onClick?: () => void;
  pill?: boolean;
  raised?: boolean;
  size?: ButtonSizeType;
  stroked?: boolean;
}
