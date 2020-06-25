import { ICharacter } from '../../../models/ICharacter';

export enum CharacterActionTypes {
  GET_ALL = 'GET_ALL',
}

export type CharacterActions = ICharacterGetAllAction;

export interface ICharacterGetAllAction {
  type: CharacterActionTypes.GET_ALL;
  characters: ICharacter[];
}
