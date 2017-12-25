import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Game from "./components/controller/Game.jsx";
import Login from "./components/Login.jsx";

class App extends Component {
  render() {
    return (
        <Router history={ browserHistory }>
          <Route path={"/"} component={ Game } />
          <Route path={"/Login"} component={Login} />
        </Router>
    );
  }
}

export default App;
