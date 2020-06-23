/**
 * Imports from Redux:
 * - applyMiddleware: Applies middleware to the dispatch method of the Redux store
 * - combineReducers: Merges reducers into one
 * - createStore: Creates a Redux store that holds the state tree
 * - Store: The TS Type used for the store, or state tree
 */
import { combineReducers, createStore, applyMiddleware, Store } from 'redux';
import { characterReducer } from '../reducers/characterReducer';
import thunk from 'redux-thunk';
import { IAppState } from '../../models/IAppState';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Create the root reducer
 */
const rootReducer = combineReducers<IAppState>({
  characterState: characterReducer,
});

/**
 * Create a configure store function of type `IAppState`
 */
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}
