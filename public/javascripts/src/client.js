
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <div className="ROUTES">
      <Route exact path="/" component={Home}/>
    </div>
  </Router>,
  document.getElementById('root')
);
