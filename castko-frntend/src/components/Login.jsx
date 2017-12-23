import React, { Component } from 'react';
// import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import DiaryBox from "./contents/InputBox";

// import { FEEDLIST_URL } from "./constants/config.jsx";
// import { connect } from 'react-redux';
// import { storeFeedList } from "./actions/index.js";
import '../App.css';

class Login extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      responseObject: []
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="fixed-action-btn">
    <a className="btn-floating btn-large red">
      <i className="large material-icons">mode_edit</i>
    </a>
  </div>
        <div style={{padding:"100px 50px 0px 50px"}}>
        <DiaryBox />
        </div>
      </div>
    );
  }
}

export default Login;
//export default FeedList;
