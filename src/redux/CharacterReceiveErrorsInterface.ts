import { AxiosError } from 'axios';
import { CharacterActionsEnum } from './CharacterActionsEnum';

export interface CharacterReceiveErrorsActionInterface {
  type: CharacterActionsEnum.RECEIVE_CHARACTERS_ERRORS;
  error: AxiosError;
}
