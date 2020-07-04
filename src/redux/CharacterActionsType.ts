import { CharacterReceiveActionInterface } from './CharacterReceiveActionInterface';
import { CharacterRequestActionInterface } from './CharacterRequestActionInterface';

export type CharacterActionsType = CharacterRequestActionInterface & CharacterReceiveActionInterface;
