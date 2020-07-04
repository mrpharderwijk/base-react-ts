import * as React from 'react';
import { CharacterInterface } from '../models/CharacterInterface';
import { CharacterListPropsInterface } from './CharacterListInterface';

const CharacterList: React.FC<CharacterListPropsInterface> = ({
  characters,
  toggleActive,
}: CharacterListPropsInterface) => (
  <ul className="name-container">
    {characters &&
      characters.map((character: CharacterInterface) => {
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
