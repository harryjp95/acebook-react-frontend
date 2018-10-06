import React, { Component } from "react";
import NewPost from './new_post'

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null
    };
  }

  returnFeed() {
    if (this.state.feed === null) return "";
    const posts = this.state.feed.map(post => (
      <div className="container">
        <ul className="list-group">
          <li key={post.id} className="list-group-item">
            <div className="media">
              <img
                className="mr-3"
                src="http://placekitten.com/g/64/64"
                alt="Generic placeholder image"
              />
              <div className="media-body">
                <p className="mt-0">{post.user_id}</p>
                {console.log(this.userSearch(post.user_id))}
                <p>{post.message}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    ));
    return <div>{posts}</div>;
  }

  componentDidMount(event) {
    const url = "http://pingpong-almonds-api.herokuapp.com/api/v1/posts";
    fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(result => this.setState({ feed: result }));
  }

  userSearch(userId) {
    const url = `http://pingpong-almonds-api.herokuapp.com/api/v1/users/${userId}`;
    var result = fetch(url).then(res => res.json());
    return result;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container" id="comments-title">
          <h1>Look at comments</h1>
        </div>
        <div>
          <NewPost />
          <h3>{this.returnFeed()}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Timeline;
