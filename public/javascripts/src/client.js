
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Gallery from './containers/Gallery';
import About from './containers/About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <div className="ROUTES">
      <Route exact path="/" component={Home}/>
      <Route path="/collections" component={Gallery}/>
    </div>
  </Router>,
  document.getElementById('root')
);
