import { ColorsType } from './ColorsType';
import { FIXME } from '../models/FixMe.model';

export interface LayoutToolbarProps {
  bgColor?: string | ColorsType;
  children: FIXME;
  height?: string;
}
