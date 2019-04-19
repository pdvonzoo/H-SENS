import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn.jsx';
import SignUp from '../pages/SignUp.jsx';
import UserPage from '../pages/User.jsx';
import App from '../App.js';

const Path = props => {
  const hasToken = !!window.localStorage.token;
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/signin" render={() => (hasToken ? <App /> : <SignIn />)} />
      <Route path="/signup" render={() => (hasToken ? <App /> : <SignUp />)} />
      <Route path="/user" component={UserPage} />
    </Router>
  );
};

export default Path;