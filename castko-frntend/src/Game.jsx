import React, { Component } from 'react';
import NavBar from "./components/NavBar.jsx";
 import  DragDrop  from "./components/contents/DragDrop.jsx";
 import  DropArea  from "./components/contents/DropArea.jsx";
 import DragSource from "./components/contents/CardDragDrop.jsx";

import { sms } from "./actions/index.js";
import { connect } from 'react-redux';
import {bake_cookie, read_cookie} from 'sfcookies';
import { browserHistory } from "react-router";
import './App.css';

class Game extends Component {

render() {

return(
<div>
  <NavBar />
  <DragDrop />
  <DropArea />

</div>
)
}
}
export default Game;
