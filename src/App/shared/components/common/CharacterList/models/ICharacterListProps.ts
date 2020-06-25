import { ICharacterListContainerProps } from './ICharacterListContainerProps';

export interface ICharacterListProps extends ICharacterListContainerProps {
  toggleActive: (characterName: string) => void;
}
