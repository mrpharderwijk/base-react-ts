import { CharacterInterface } from '../models/CharacterInterface';
import { BaseStateInterface } from './InitialBaseStateInterface';

export interface CharacterStateInterface extends BaseStateInterface {
  readonly characters: CharacterInterface[] | null;
}
