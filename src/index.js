import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';

import App from './components/app';
import SignIn from './components/signin';
import SignUp from './components/signup';

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user loged in:', user);
  } else {
    console.log('user logged out');
  }
})

ReactDOM.render(
  <Router path='/' history={browserHistory}>
    <Route path='/app' component={App} />
    <Route path='/signin' component={SignIn} />
    <Route path='/signup' component={SignUp} />
  </Router>
  , document.getElementById('root')
)
