import { Reducer } from 'redux';
import { CharacterActions, CharacterActionTypes } from '../../models/CharacterActions';
import { ICharacterState } from '../../models/ICharacterState';

const initialCharacterState: ICharacterState = {
  characters: [],
};

/**
 * Reducers specify how the application’s state changes in response to actions sent to the store.
 */
export const characterReducer: Reducer<ICharacterState, CharacterActions> = (state = initialCharacterState, action) => {
  switch (action.type) {
    case CharacterActionTypes.GET_ALL: {
      return {
        ...state,
        characters: action.characters,
      };
    }

    default:
      return state;
  }
};
