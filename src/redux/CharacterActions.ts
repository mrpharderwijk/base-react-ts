import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { createAction } from 'redux-actions';
import axios from 'axios';
import { SWAPI_PEOPLE } from '../constants';
import { CharacterStateInterface } from './CharacterStateInterface';
import { FIXME } from '../models/FixMe.model';
import { CharacterActionsEnum } from './CharacterActionsEnum';
import { CharacterActionsType } from './CharacterActionsType';

export const requestCharacters = createAction(CharacterActionsEnum.REQUEST_CHARACTERS);
export const receiveCharacters = createAction(CharacterActionsEnum.RECEIVE_CHARACTERS);
export const receiveCharactersErrors = createAction(CharacterActionsEnum.RECEIVE_CHARACTERS_ERRORS);

/**
 * `GET_ALL` Action
 * <Promise<Return Type>, State Interface, Type of Param, Type of Action>
 */
export const getAllCharacters: ActionCreator<ThunkAction<
  Promise<FIXME>,
  CharacterStateInterface,
  null,
  CharacterActionsType
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
