import { Character } from '../models/Character.model';
import { BaseState } from './InitialBaseState.model';

export interface CharacterStateTypes extends BaseState {
  readonly characters: Character[] | null;
}
