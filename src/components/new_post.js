import React, { Component } from "react";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersName: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.token);
    const url = "http://pingpong-almonds-api.herokuapp.com/api/v1/posts";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.token
      },
      body: JSON.stringify({
        message: this.state.message
      })
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Post a comment</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="message"
              id="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
            <button
              type="submit"
              value="Post"
              className="btn btn-primary btn-block"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
