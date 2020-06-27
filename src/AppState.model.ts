import { CharacterStateTypes } from './redux/CharacterState.model';
import { AuthStateTypes } from './redux/AuthState.model';
import { UiStateTypes } from './redux/UiState.model';

export interface AppState {
  characterState: CharacterStateTypes;
  uiState: UiStateTypes;
  authState: AuthStateTypes;
}
