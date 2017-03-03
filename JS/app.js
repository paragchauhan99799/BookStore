import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';  
import LoginHandler from './component/Login.js';
import SignupHandler from './component/SignupHandler.js';

class App extends Component {
    render() {
    return (
      this.props.children
    );
  }
}

let routes = (
   <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={LoginHandler}/>
      <Route path="signup" component={SignupHandler}/>
    </Route>
   </Router>
);
ReactDOM.render(routes, document.getElementById('app'));
