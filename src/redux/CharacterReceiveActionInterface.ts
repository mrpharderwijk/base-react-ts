import { CharacterActionsEnum } from './CharacterActionsEnum';
import { CharacterInterface } from '../models/CharacterInterface';

export interface CharacterReceiveActionInterface {
  type: CharacterActionsEnum.RECEIVE_CHARACTERS;
  characters: CharacterInterface[];
}
