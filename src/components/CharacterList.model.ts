import { CharacterListContainerProps } from './CharacterListContainer.model';

export interface CharacterListProps extends CharacterListContainerProps {
  toggleActive: (characterName: string) => void;
}
