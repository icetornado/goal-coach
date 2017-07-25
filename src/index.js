import React from 'react'
import ReactDOM from 'react-dom'
import {Router } from 'react-router-dom';
import App from './components/App';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();


ReactDOM.render((
  <Router history={history}>
    <App />
  </Router>
), document.getElementById('root'));
