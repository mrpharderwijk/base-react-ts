import { connect } from 'react-redux';
import * as React from 'react';
import { AppState } from '../AppState.model';
import CharacterList from './CharacterList';
import { CharacterListContainerProps } from './CharacterListContainer.model';

class CharacterListContainer extends React.Component<CharacterListContainerProps> {
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
const mapStateToProps = (store: AppState) => {
  return {
    characters: store.characterState.characters,
  };
};

export default connect(mapStateToProps)(CharacterListContainer);
