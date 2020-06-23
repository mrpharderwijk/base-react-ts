import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { SWAPI_PEOPLE } from '../../constants';
import axios from 'axios';
import { ICharacterGetAllAction, CharacterActionTypes } from '../../models/CharacterActions';
import { ICharacterState } from '../../models/ICharacterState';

/**
 * `GET_ALL` Action
 * <Promise<Return Type>, State Interface, Type of Param, Type of Action>
 */
export const getAllCharacters: ActionCreator<ThunkAction<
  Promise<any>,
  ICharacterState,
  null,
  ICharacterGetAllAction
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(SWAPI_PEOPLE);
      dispatch({
        characters: response.data.results,
        type: CharacterActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
