import { FIXME } from '../models/FixMe.model';
import { ButtonAttributeType } from './ButtonAttributeType';
import { ThemeFontWeightsType } from './ThemeFontWeightsType';
import { ButtonColorsType } from './ButtonColorsType';
import { ButtonSizeType } from './ButtonSizeType';

export interface ButtonPropsInterface {
  avatar?: string;
  avatarLeft?: boolean;
  avatarRight?: boolean;
  attrType?: ButtonAttributeType;
  color?: ButtonColorsType;
  children?: FIXME;
  disabled?: boolean;
  flat?: boolean;
  icon?: string;
  iconAlign?: 'left' | 'right';
  label?: string;
  labelWeight?: ThemeFontWeightsType;
  onClick?: () => void;
  pill?: boolean;
  raised?: boolean;
  size?: ButtonSizeType;
  stroked?: boolean;
  subMenu?: boolean;
}
