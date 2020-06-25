import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { SWAPI_PEOPLE } from '../../constants';
import { ICharacterGetAllAction, CharacterActionTypes } from './models/ICharacterActions';
import { ICharacterState } from '../../models/ICharacterState';
import { FIXME } from '../../models/TFixMe';

/**
 * `GET_ALL` Action
 * <Promise<Return Type>, State Interface, Type of Param, Type of Action>
 */
const getAllCharacters: ActionCreator<ThunkAction<
  Promise<FIXME>,
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
export default getAllCharacters;
