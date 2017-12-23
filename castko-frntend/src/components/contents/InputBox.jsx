import React, { Component } from 'react';
import { LOGIN } from "../../constants/config.jsx";
import CircleWithImage from "./CircleWithImage";
import { browserHistory } from 'react-router';
import AlertContainer from 'react-alert';
import '../../App.css';

class DiaryBox extends Component {
constructor(props)
{
  super(props);
  this.state =
  {
    username: '',
    password: '',
    status: '',
    icon: ''
  }
}
showAlert = () => {
    this.msg.show(this.state.status, {
      time: 4000,
      type: 'success',
      icon: <img src={this.state.icon} style={{width: "50px", height: "50px"}} />
    })
  }
createDiaries = () =>
  {
    var details =
    {
      "username": this.state.username,
      "password": this.state.password
    }
console.log("state", this.state);
console.log("details", details);
  //  var formBody = [];

    // for(let property in details)
    // {
    //   var encodedKey = encodeURIComponent(property);
    //   var encodedValue = encodeURIComponent(details[property]);
    //   formBody.push(encodedKey+"="+encodedValue);
    // }

    fetch(LOGIN,{
      method: "POST",
      headers: {
      Accept: 'application/JSON',
      'Content-Type': 'application/JSON'
    },
      body: JSON.stringify(details)
    })
    .then(res => res.json())
    .then(response => {
      console.log("response", response);
      if(response.status===200){
        this.setState({status: "Message sent"});
        this.setState({icon: ""});
        console.log("redirect");
        browserHistory.push("/game");
      }
      else{
        this.setState({status: "Invalid credentials"})
        this.setState({icon: "http://conference.connectedviews.com/adminconsole/img/alert-icon.png"})
        this.showAlert();
        console.log("error");
      }
      //this.setState({responseObject: response});console.log("stata", this.state.responseObject)
      //this.props.storeFeedList(this.state.responseObject)
    })

  }

render() {
const radius = "50px";
    return (
      <div>
        <AlertContainer ref={a => this.msg = a}  />
      <div className="row">
        <div className="input-field col s12">
          <input type="text" className="validate" onChange={(event) => this.setState({username: event.target.value})}/>
          <label>User Name</label>
        </div>
        <div className="input-field col s12">
          <input type="text" className="validate" onChange={(event) => this.setState({password: event.target.value})} />
          <label>Password</label>
        </div>
        </div>

        <div className="row">
          <div className="col s12">
        <button className="btn waves-effect waves-light" type="button" style={{width: "100%", borderRadius: "50px", background: "#55B114"}} onClick={this.createDiaries}>
          Create
        </button>
        </div>
        </div>
      </div>
    );
  }
}

export default DiaryBox;
