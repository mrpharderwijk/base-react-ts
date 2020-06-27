import { AxiosError } from 'axios';
import { Character } from '../models/Character.model';

export enum CharacterActionTypes {
  REQUEST_CHARACTERS = 'REQUEST_CHARACTERS',
  RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS',
  RECEIVE_CHARACTERS_ERRORS = 'RECEIVE_CHARACTERS_ERRORS',
}

export interface CharacterRequestActionTypes {
  type: CharacterActionTypes.REQUEST_CHARACTERS;
}
export interface CharacterReceiveActionTypes {
  type: CharacterActionTypes.RECEIVE_CHARACTERS;
  characters: Character[];
}
export interface CharacterReceiveErrorsActionTypes {
  type: CharacterActionTypes.RECEIVE_CHARACTERS_ERRORS;
  error: AxiosError;
}
export type CharacterActions = CharacterRequestActionTypes & CharacterReceiveActionTypes;
