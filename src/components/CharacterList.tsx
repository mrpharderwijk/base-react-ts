import * as React from 'react';
import { Character } from '../models/Character.model';
import { CharacterListProps } from './CharacterList.model';

const CharacterList: React.FC<CharacterListProps> = ({ characters, toggleActive }: CharacterListProps) => (
  <ul className="name-container">
    {characters &&
      characters.map((character: Character) => {
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

export default CharacterList;
