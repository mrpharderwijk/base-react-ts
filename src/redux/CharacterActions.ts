import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { createAction } from 'redux-actions';
import axios from 'axios';
import { SWAPI_PEOPLE } from '../constants';
import { CharacterActionTypes, CharacterActions } from './CharacterActions.model';
import { CharacterStateTypes } from './CharacterState.model';
import { FIXME } from '../models/FixMe.model';

export const requestCharacters = createAction(CharacterActionTypes.REQUEST_CHARACTERS);
export const receiveCharacters = createAction(CharacterActionTypes.RECEIVE_CHARACTERS);
export const receiveCharactersErrors = createAction(CharacterActionTypes.RECEIVE_CHARACTERS_ERRORS);

/**
 * `GET_ALL` Action
 * <Promise<Return Type>, State Interface, Type of Param, Type of Action>
 */
export const getAllCharacters: ActionCreator<ThunkAction<
  Promise<FIXME>,
  CharacterStateTypes,
  null,
  CharacterActions
>> = () => async (dispatch: Dispatch) => {
  try {
    dispatch(requestCharacters());
    const response = await axios.get(SWAPI_PEOPLE);
    dispatch(receiveCharacters({ characters: response.data.results }));
  } catch (error) {
    console.error(error);
    dispatch(receiveCharactersErrors(error));
  }
};
