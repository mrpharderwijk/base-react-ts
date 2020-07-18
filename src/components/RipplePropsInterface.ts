import { FIXME } from '../models/FixMe.model';
import { ButtonColorsType } from './ButtonColorsType';

export interface RipplePropsInterface {
  color?: ButtonColorsType;
  children?: FIXME;
  rippleCount?: number;
  duration?: number;
  cleanUpFunction?: () => FIXME;
  onMouseDown?: (event: FIXME) => FIXME;
}
