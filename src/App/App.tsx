import React from 'react';
import './App.scss';
import CharacterList from './shared/redux/containers/CharacterList';

const App: React.FC<Record<string, unknown>> = () => {
  return (
    <>
      <h1 className="text-2xl">The Force Awakens</h1>
      <CharacterList />
    </>
  );
};

export default App;
