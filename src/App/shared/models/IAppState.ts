import { ICharacterState } from './ICharacterState';
import { IUiState } from './IUiState';
import { IAuthState } from './IAuthState';

export interface IAppState {
  characterState: ICharacterState;
  uiState: IUiState;
  authState: IAuthState;
}
