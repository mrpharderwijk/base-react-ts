import React from 'react';
import { Route } from 'react-router-dom';
import LogIn from './AuthLogIn';

const Auth: React.FC = () => (
  <div className="Auth">
    <h1>Auth Component</h1>
    <Route path="/auth/login" component={LogIn} />
  </div>
);

export default Auth;
