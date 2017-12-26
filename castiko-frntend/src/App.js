import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Game from "./components/controller/Game.jsx";
import Login from "./components/Login.jsx";

class App extends Component {
  render() {
    return (
        <Router history={ browserHistory }>
          <Route path={"/game"} component={ Game } />
          <Route path={"/"} component={ Login } />
        </Router>
    );
  }
}

export default App;
