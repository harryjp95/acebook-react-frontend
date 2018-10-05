import React, { Component } from "react";

class LogOut extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Log Out" />
      </form>
    );
  }
}

export default LogOut;
