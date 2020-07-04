import React from 'react';
import HomeStyled from './HomeStyled';
import CharacterListContainer from '../components/CharacterListContainer';

const Home: React.FC = () => (
  <HomeStyled>
    <h1>The Force Awakens</h1>
    <CharacterListContainer />
  </HomeStyled>
);

export default Home;
