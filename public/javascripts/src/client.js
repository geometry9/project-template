
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Gallery from './containers/Gallery';
import About from './containers/About';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'



ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/collections" component={Gallery}/>
      <Route exact path="/about" component={About}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
