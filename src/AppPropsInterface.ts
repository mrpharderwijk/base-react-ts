import { Store } from 'redux';
import { AppStateInterface } from './AppStateInterface';

export interface AppPropsInterface {
  store: Store<AppStateInterface>;
}
