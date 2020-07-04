import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainHeaderContainer from './components/MainHeaderContainer';
import Auth from './routes/Auth';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';

const App: React.FC<Record<string, unknown>> = () => {
  return (
    <Router>
      <MainHeaderContainer />

      <main className="pt-80" role="main">
        {/*
          A <Switch /> looks through all its children <Route />
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/auth" component={Auth} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
