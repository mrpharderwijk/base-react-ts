import React from 'react';
import './App.scss';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CharacterListContainer from './components/CharacterListContainer';
import MainHeaderContainer from './components/MainHeaderContainer';
import NotFound from './fonts/NotFound/NotFound';
import Auth from './auth/Auth';

const history = createBrowserHistory();

const App: React.FC<Record<string, unknown>> = () => {
  return (
    <Router history={history}>
      <MainHeaderContainer fixedAfter={1} />
      <main className="pt-80" role="main">
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
            <CharacterListContainer />
          </Route>
          <Route path="/about">
            <h1 className="text-2xl">About</h1>
          </Route>
          <Route path="/contact">
            <h1 className="text-2xl">contact</h1>
          </Route>
          <Route path="/auth" component={Auth} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
