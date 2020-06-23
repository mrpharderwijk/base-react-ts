import React from 'react';
import './App.scss';
import CharacterList from './shared/redux/containers/CharacterList';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App: React.FC<Record<string, unknown>> = () => {
  return (
    <Router history={history}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />
      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path="/">
          <h1 className="text-2xl">The Force Awakens</h1>
          <CharacterList />
        </Route>
        <Route path="/about">
          <h1 className="text-2xl">About</h1>
        </Route>
        <Route path="/dashboard">
          <h1 className="text-2xl">Dashboard</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
