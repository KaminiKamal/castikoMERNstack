import React, { Component } from 'react';
import {browserHistory} from "react-router";
import '../App.css';

class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="nav-extended">
          <div className="nav-wrapper">
          <a href="#!" className="brand-logo"><i className="material-icons">account_circle</i>Contacts</a>
          </div>
          
        </nav>
      </div>
    );
  }
}

export default NavBar;
