import { IAppState } from '../../models/IAppState';
import { connect } from 'react-redux';
import * as React from 'react';
import { ICharacter } from '../../models/ICharacter';
import { ICharacterListProps } from '../../models/ICharacterListProps';

class CharacterList extends React.Component<ICharacterListProps> {
  public render() {
    const { characters } = this.props;

    return (
      <div className="name-container">
        {characters &&
          characters.map((character: ICharacter) => {
            return (
              <span key={character.name} className="name">
                {character.name}
              </span>
            );
          })}
      </div>
    );
  }
}

/**
 * Grab the characters from the store and make them availabel on props
 */
const mapStateToProps = (store: IAppState) => {
  return {
    characters: store.characterState.characters,
  };
};

export default connect(mapStateToProps)(CharacterList);
