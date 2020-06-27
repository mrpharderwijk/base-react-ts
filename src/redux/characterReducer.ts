import { handleActions } from 'redux-actions';
import { CharacterActionTypes } from './CharacterActions.model';
import { CharacterStateTypes } from './CharacterState.model';
import initialBaseState from './initialBaseState';
import { FIXME } from '../models/FixMe.model';

const initialCharacterState: CharacterStateTypes = {
  ...initialBaseState,
  characters: null,
};

/**
 * Reducers specify how the application’s state changes in response to actions sent to the store.
 */
export default handleActions(
  {
    [CharacterActionTypes.REQUEST_CHARACTERS]: (state): CharacterStateTypes => ({
      ...state,
      isFetching: true,
    }),
    [CharacterActionTypes.RECEIVE_CHARACTERS]: (state, { payload }): CharacterStateTypes => ({
      ...state,
      isFetching: false,
      characters: payload.characters,
    }),
    [CharacterActionTypes.RECEIVE_CHARACTERS_ERRORS]: (state, { payload }): FIXME => ({
      ...state,
      isFetching: false,
      error: payload,
      characters: null,
    }),
  },
  initialCharacterState,
);
