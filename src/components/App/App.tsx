import React from 'react';
import './App.css';
import CharacterList from '../../redux/containers/CharacterList';

const App: React.FC<Record<string, unknown>> = () => {
    return (
        <>
            <h1>The Force Awakens</h1>
            <CharacterList />
        </>
    );
};

export default App;
