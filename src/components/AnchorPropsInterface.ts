import { AnchorTargetType } from './AnchorTargetType';
import { FIXME } from '../models/FixMe.model';
import { AnchorColorsType } from './AnchorColorsType';

export interface AnchorPropsInterface {
  color?: AnchorColorsType;
  children: FIXME;
  href?: string;
  rel?: string;
  title?: string;
  target?: AnchorTargetType;
}
