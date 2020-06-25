import { connect } from 'react-redux';
import * as React from 'react';
import { IAppState } from '../../../models/IAppState';
import CharacterList from './CharacterList';
import { ICharacterListContainerProps } from './models/ICharacterListContainerProps';

class CharacterListContainer extends React.Component<ICharacterListContainerProps> {
  toggleActive = (characterName: string): void => {
    // We should change state in container components :)
    console.log(characterName);
  };

  public render() {
    const { characters } = this.props;

    return <CharacterList characters={characters} toggleActive={this.toggleActive} />;
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

export default connect(mapStateToProps)(CharacterListContainer);
