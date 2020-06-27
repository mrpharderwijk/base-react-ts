/**
 * Imports from Redux:
 * - applyMiddleware: Applies middleware to the dispatch method of the Redux store
 * - combineReducers: Merges reducers into one
 * - createStore: Creates a Redux store that holds the state tree
 * - Store: The TS Type used for the store, or state tree
 */
import { combineReducers, createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import characterReducer from './characterReducer';
import { AppState } from '../AppState.model';
import uiReducer from './uiReducer';
import { FIXME } from '../models/FixMe.model';
import authReducer from './authReducer';

/**
 * Create the root reducer
 */
const rootReducer = combineReducers<AppState>({
  characterState: characterReducer,
  uiState: uiReducer,
  authState: authReducer,
});

/**
 * Create a configure store function of type `AppState`
 */
export default function configureStore(): Store<AppState, FIXME> {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}