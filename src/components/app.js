import React, { Component } from "react";
import Navbar from "./navbar";
import Timeline from "./timeline";
import SignUp from "./sign_up";
import LogOut from "./logout";

import "../index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  onFormSubmit(token) {
    this.setState({ token: token });
  }

  logOut(event) {
    event.preventDefault();
    this.setState({
      token: ""
    });
  }

  render() {
    var timeLine = null;
    var logOut = null;
    this.state.token === "" ? (timeLine = null) : (timeLine = <Timeline />);
    this.state.token === ""
      ? (logOut = null)
      : (logOut = <LogOut onSubmit={this.logOut} />);
    return (
      <React.Fragment>
        <Navbar onSubmit={this.onFormSubmit} />
        <SignUp />
        {timeLine}
        {logOut}
      </React.Fragment>
    );
  }
}

export default App;
