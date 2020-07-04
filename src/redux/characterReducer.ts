import { handleActions } from 'redux-actions';
import { CharacterActionsEnum } from './CharacterActionsEnum';
import { CharacterStateInterface } from './CharacterStateInterface';
import initialBaseState from './initialBaseState';
import { FIXME } from '../models/FixMe.model';

const initialCharacterState: CharacterStateInterface = {
  ...initialBaseState,
  characters: null,
};

/**
 * Reducers specify how the application’s state changes in response to actions sent to the store.
 */
export default handleActions(
  {
    [CharacterActionsEnum.REQUEST_CHARACTERS]: (state): CharacterStateInterface => ({
      ...state,
      isFetching: true,
    }),
    [CharacterActionsEnum.RECEIVE_CHARACTERS]: (state, { payload }): CharacterStateInterface => ({
      ...state,
      isFetching: false,
      characters: payload.characters,
    }),
    [CharacterActionsEnum.RECEIVE_CHARACTERS_ERRORS]: (state, { payload }): FIXME => ({
      ...state,
      isFetching: false,
      error: payload,
      characters: null,
    }),
  },
  initialCharacterState,
);
