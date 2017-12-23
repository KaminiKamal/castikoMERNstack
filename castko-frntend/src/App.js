import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Login from "./components/Login.jsx";
import Game from "./components/controller/Game.jsx";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router history={ browserHistory }>
          <Route path={"/"} component={ Login } />

          <Route path={"/game"} component={ Game } />

        </Router>
    );
  }
}

export default App;
