import { Store } from 'redux';
import { AppState } from './AppState.model';

export interface AppProps {
  store: Store<AppState>;
}
