import { Store } from 'redux';
import { IAppState } from './IAppState';

export interface IAppProps {
    store: Store<IAppState>;
}
