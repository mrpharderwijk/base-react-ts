import * as React from 'react';
import { ICharacterListProps } from './models/ICharacterListProps';
import { ICharacter } from '../../../models/ICharacter';

const CharacterList: React.FC<ICharacterListProps> = (props: ICharacterListProps) => {
  const { characters, toggleActive } = props;

  return (
    <ul className="name-container">
      {characters &&
        characters.map((character: ICharacter) => {
          return (
            <li key={character.name}>
              <button type="button" onClick={() => toggleActive(character.name)}>
                <span className="name">{character.name}</span>
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default CharacterList;
