import { CharacterListContainerPropsInterface } from './CharacterListContainerPropsInterface';

export interface CharacterListPropsInterface extends CharacterListContainerPropsInterface {
  toggleActive: (characterName: string) => void;
}
