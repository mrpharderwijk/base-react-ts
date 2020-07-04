import { CharacterStateInterface } from './redux/CharacterStateInterface';
import { AuthStateInterface } from './redux/AuthStateInterface';
import { UiStateInterface } from './redux/UiStateInterface';

export interface AppStateInterface {
  characterState: CharacterStateInterface;
  uiState: UiStateInterface;
  authState: AuthStateInterface;
}
