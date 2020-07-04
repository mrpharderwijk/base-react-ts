import { connect } from 'react-redux';
import * as React from 'react';
import { AppStateInterface } from '../AppStateInterface';
import CharacterList from './CharacterList';
import { CharacterListContainerPropsInterface } from './CharacterListContainerPropsInterface';

class CharacterListContainer extends React.Component<CharacterListContainerPropsInterface> {
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
const mapStateToProps = (store: AppStateInterface) => {
  return {
    characters: store.characterState.characters,
  };
};

export default connect(mapStateToProps)(CharacterListContainer);
