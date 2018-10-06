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
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" value="Log Out" className="btn btn-primary btn-lg btn-block">Log Out
          </button>
        </form>
      </div>
    );
  }
}

export default LogOut;
